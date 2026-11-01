const fs = require('fs');
const zlib = require('zlib');

// Helper to encode RGBA buffer to valid PNG
function encodePNG(w, h, rgbaBuffer) {
  const rowStride = 1 + w * 4;
  const filtered = Buffer.alloc(h * rowStride);
  for (let y = 0; y < h; y++) {
    filtered[y * rowStride] = 0;
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
  return Buffer.concat([sig, makeChunk('IHDR', ihdr), makeChunk('IDAT', compressedData), makeChunk('IEND', Buffer.alloc(0))]);
}

const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
  crcTable[n] = c;
}
function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return crc ^ -1;
}

// Read original full strip
const buf = fs.readFileSync('frontend/public/clients-strip.png');
let pos = 8;
const idatChunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idatChunks));
const width = 1006, height = 76;
const uncompressed = Buffer.alloc(height * width * 4);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width * 4; x++) {
    uncompressed[y * width * 4 + x] = raw[y * (1 + width * 4) + 1 + x];
  }
}

// Logo bounds
const ranges = [
  { name: 'Analytics', x1: 5, x2: 52 },
  { name: 'Ebhaiya', x1: 80, x2: 130 },
  { name: 'FirstMeridian', x1: 160, x2: 250 },
  { name: 'PM', x1: 285, x2: 312 },
  { name: 'DVerve', x1: 350, x2: 388 },
  { name: 'MediaTechTemple', x1: 418, x2: 475 },
  { name: 'KCPC', x1: 510, x2: 545 },
  { name: 'Edvice', x1: 580, x2: 625 },
  { name: 'BookMyBai', x1: 660, x2: 700 },
  { name: 'StartUp', x1: 730, x2: 765 },
  { name: 'Armor', x1: 800, x2: 835 },
  { name: 'Homes', x1: 875, x2: 905 },
  { name: 'Tips', x1: 940, x2: 975 }
];

ranges.forEach((r, idx) => {
  let minY = height, maxY = 0, minX = r.x2, maxX = r.x1;
  for (let y = 0; y < height; y++) {
    for (let x = r.x1; x <= r.x2; x++) {
      const a = uncompressed[(y * width + x) * 4 + 3];
      if (a > 30) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  if (minY <= maxY && minX <= maxX) {
    const pad = 2;
    const finalMinX = Math.max(0, minX - pad);
    const finalMaxX = Math.min(width - 1, maxX + pad);
    const finalMinY = Math.max(0, minY - pad);
    const finalMaxY = Math.min(height - 1, maxY + pad);
    const lw = finalMaxX - finalMinX + 1;
    const lh = finalMaxY - finalMinY + 1;
    const lBuf = Buffer.alloc(lw * lh * 4);
    for (let y = 0; y < lh; y++) {
      for (let x = 0; x < lw; x++) {
        const sIdx = ((finalMinY + y) * width + (finalMinX + x)) * 4;
        const dIdx = (y * lw + x) * 4;
        lBuf[dIdx] = uncompressed[sIdx];
        lBuf[dIdx + 1] = uncompressed[sIdx + 1];
        lBuf[dIdx + 2] = uncompressed[sIdx + 2];
        lBuf[dIdx + 3] = uncompressed[sIdx + 3];
      }
    }
    const filename = 'frontend/public/clients/logo-' + (idx + 1) + '.png';
    fs.writeFileSync(filename, encodePNG(lw, lh, lBuf));
    console.log('Saved', filename, r.name, lw, 'x', lh);
  }
});

