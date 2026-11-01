const fs = require('fs');
const zlib = require('zlib');

// Read input PNG
const buf = fs.readFileSync('frontend/public/logo.png');
let pos = 8;
const idatChunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const compressed = Buffer.concat(idatChunks);
const raw = zlib.inflateSync(compressed);
const width = 506, height = 95, bpp = 4;
const stride = 1 + width * bpp;
const uncompressed = Buffer.alloc(height * width * bpp);

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

for (let y = 0; y < height; y++) {
  const filter = raw[y * stride];
  for (let x = 0; x < width * bpp; x++) {
    const rawVal = raw[y * stride + 1 + x];
    const a = x >= bpp ? uncompressed[y * width * bpp + x - bpp] : 0;
    const b = y > 0 ? uncompressed[(y - 1) * width * bpp + x] : 0;
    const c = (x >= bpp && y > 0) ? uncompressed[(y - 1) * width * bpp + x - bpp] : 0;
    let val = 0;
    if (filter === 0) val = rawVal;
    else if (filter === 1) val = (rawVal + a) & 0xff;
    else if (filter === 2) val = (rawVal + b) & 0xff;
    else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) val = (rawVal + paeth(a, b, c)) & 0xff;
    uncompressed[y * width * bpp + x] = val;
  }
}

// Bounding box from analysis: minX: 64, maxX: 368, minY: 28, maxY: 74
const cropMinX = 60, cropMaxX = 372, cropMinY = 24, cropMaxY = 78;
const cropW = cropMaxX - cropMinX;
const cropH = cropMaxY - cropMinY;

// Function to encode RGBA buffer to valid PNG
function encodePNG(w, h, rgbaBuffer) {
  const rowStride = 1 + w * 4;
  const filtered = Buffer.alloc(h * rowStride);
  for (let y = 0; y < h; y++) {
    filtered[y * rowStride] = 0; // Filter 0 (None)
    for (let x = 0; x < w * 4; x++) {
      filtered[y * rowStride + 1 + x] = rgbaBuffer[y * w * 4 + x];
    }
  }
  const compressedData = zlib.deflateSync(filtered);

  // PNG Signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // Bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // Compression
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // Interlace
  const ihdrChunk = makeChunk('IHDR', ihdr);

  // IDAT chunk
  const idatChunk = makeChunk('IDAT', compressedData);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crc = crc32(buf.subarray(4, 8 + len));
  buf.writeInt32BE(crc, 8 + len);
  return buf;
}

// CRC32 implementation
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
  }
  crcTable[n] = c;
}
function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return crc ^ -1;
}

// Create Dark mode version (white/silver text + cyan text on transparent bg)
const darkBuffer = Buffer.alloc(cropW * cropH * 4);
const lightBuffer = Buffer.alloc(cropW * cropH * 4);

for (let y = 0; y < cropH; y++) {
  const srcY = cropMinY + y;
  for (let x = 0; x < cropW; x++) {
    const srcX = cropMinX + x;
    const srcIdx = (srcY * width + srcX) * 4;
    const dstIdx = (y * cropW + x) * 4;

    const r = uncompressed[srcIdx];
    const g = uncompressed[srcIdx + 1];
    const b = uncompressed[srcIdx + 2];

    // Background estimate at this pixel
    // dark blue background is around r: 10, g: 25, b: 40
    // Calculate distance from background
    const bgR = 11, bgG = 26, bgB = 40;
    const dist = Math.sqrt((r - bgR)**2 + (g - bgG)**2 + (b - bgB)**2);

    let alpha = 0;
    if (dist < 15) {
      alpha = 0;
    } else if (dist < 35) {
      alpha = Math.round(((dist - 15) / 20) * 255);
    } else {
      alpha = 255;
    }

    if (alpha > 0) {
      // Dark mode: keep original vibrant colors
      darkBuffer[dstIdx] = r;
      darkBuffer[dstIdx + 1] = g;
      darkBuffer[dstIdx + 2] = b;
      darkBuffer[dstIdx + 3] = alpha;

      // Light mode:
      // If pixel is cyan ("Intellicall" or cyan part of swirl: g > 120 and b > 150):
      // Keep cyan or make it deep sky blue (#0284c7)
      const isCyan = (g > 110 && b > 140 && b > r + 30);
      if (isCyan) {
        // Deep vibrant blue/cyan for light background
        lightBuffer[dstIdx] = Math.min(255, Math.round(r * 0.8));
        lightBuffer[dstIdx + 1] = Math.min(255, Math.round(g * 0.9));
        lightBuffer[dstIdx + 2] = b;
        lightBuffer[dstIdx + 3] = alpha;
      } else {
        // Pixel is "Avyukta" text or grey swirl
        // On light background, change bright grey/white to dark slate (#0f172a or #1e293b)
        // Ratio of brightness:
        const brightness = (r + g + b) / (3 * 255);
        const textVal = Math.round(20 + (1 - brightness) * 40); // around 25-40 (dark charcoal)
        lightBuffer[dstIdx] = textVal;
        lightBuffer[dstIdx + 1] = textVal + 5;
        lightBuffer[dstIdx + 2] = textVal + 15;
        lightBuffer[dstIdx + 3] = alpha;
      }
    }
  }
}

fs.writeFileSync('frontend/public/avyukta-dark.png', encodePNG(cropW, cropH, darkBuffer));
fs.writeFileSync('frontend/public/avyukta-light.png', encodePNG(cropW, cropH, lightBuffer));
console.log('Successfully generated avyukta-dark.png and avyukta-light.png! Dimensions:', cropW, 'x', cropH);
