const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const srcPath = 'C:/Users/Pankaj Sharma/.gemini/antigravity/brain/94c315c0-fef2-4ba9-a3fa-c30a2ae5ce92/.user_uploaded/media_1793454775269_fd1ba710.png';
const buf = fs.readFileSync(srcPath);

let pos = 8;
const idatChunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idatChunks));
const width = 1024, height = 120, bpp = 4;
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

// Helper to encode RGBA buffer to valid PNG
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

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const len = data.length;
  const b = Buffer.alloc(12 + len);
  b.writeUInt32BE(len, 0);
  b.write(type, 4, 4, 'ascii');
  data.copy(b, 8);
  const crc = crc32(b.subarray(4, 8 + len));
  b.writeInt32BE(crc, 8 + len);
  return b;
}

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

// Crop the logo strip: Y from 42 to 118, X from 0 to 1010
const stripMinY = 42, stripMaxY = 118;
const stripMinX = 2, stripMaxX = 1008;
const stripW = stripMaxX - stripMinX;
const stripH = stripMaxY - stripMinY;

const stripBuf = Buffer.alloc(stripW * stripH * 4);

for (let y = 0; y < stripH; y++) {
  const srcY = stripMinY + y;
  for (let x = 0; x < stripW; x++) {
    const srcX = stripMinX + x;
    const srcIdx = (srcY * width + srcX) * 4;
    const dstIdx = (y * stripW + x) * 4;

    const r = uncompressed[srcIdx];
    const g = uncompressed[srcIdx + 1];
    const b = uncompressed[srcIdx + 2];

    // Check if background (white/near white: r, g, b > 245)
    const brightness = (r + g + b) / 3;
    let alpha = 255;
    if (brightness > 248) {
      alpha = 0;
    } else if (brightness > 230) {
      alpha = Math.round(((248 - brightness) / 18) * 255);
    }

    stripBuf[dstIdx] = r;
    stripBuf[dstIdx + 1] = g;
    stripBuf[dstIdx + 2] = b;
    stripBuf[dstIdx + 3] = alpha;
  }
}

fs.writeFileSync('frontend/public/clients-strip.png', encodePNG(stripW, stripH, stripBuf));
console.log('Saved clients-strip.png, size:', stripW, 'x', stripH);

// Also slice individual logos with comfortable padding
const clientLogos = [
  { name: 'Analytics', x1: 5, x2: 50 },
  { name: 'Ebhaiya', x1: 75, x2: 135 },
  { name: 'FirstMeridian', x1: 155, x2: 255 },
  { name: 'PM', x1: 280, x2: 320 },
  { name: 'DVerve', x1: 345, x2: 395 },
  { name: 'MediaTechTemple', x1: 415, x2: 480 },
  { name: 'KCPC', x1: 505, x2: 550 },
  { name: 'Edvice', x1: 575, x2: 635 },
  { name: 'BookMyBai', x1: 655, x2: 705 },
  { name: 'StartUp', x1: 725, x2: 770 },
  { name: 'Armor', x1: 795, x2: 840 },
  { name: 'Homes', x1: 865, x2: 910 },
  { name: 'Tips', x1: 935, x2: 985 }
];

const outDir = 'frontend/public/clients';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

clientLogos.forEach((logo, i) => {
  const lw = logo.x2 - logo.x1;
  const lh = stripH;
  const lBuf = Buffer.alloc(lw * lh * 4);
  for (let y = 0; y < lh; y++) {
    for (let x = 0; x < lw; x++) {
      const srcIdx = (y * stripW + (logo.x1 - stripMinX + x)) * 4;
      const dstIdx = (y * lw + x) * 4;
      lBuf[dstIdx] = stripBuf[srcIdx];
      lBuf[dstIdx + 1] = stripBuf[srcIdx + 1];
      lBuf[dstIdx + 2] = stripBuf[srcIdx + 2];
      lBuf[dstIdx + 3] = stripBuf[srcIdx + 3];
    }
  }
  fs.writeFileSync(`${outDir}/logo-${i + 1}.png`, encodePNG(lw, lh, lBuf));
});
console.log('Saved 13 individual logos to frontend/public/clients/');

