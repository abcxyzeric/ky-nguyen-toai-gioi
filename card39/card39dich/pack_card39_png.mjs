import fs from 'node:fs';
import path from 'node:path';

const base = 'F:/mvu card/card39';
const srcPng = `${base}/_碎界纪元.png`;
const outPng = `${base}/card39dich/_Kỷ_Nguyên_Toái_Giới_vi.png`;
const charaPath = `${base}/card39dich/sillytavern_chara.json`;
const ccv3Path = `${base}/card39dich/sillytavern_ccv3.json`;

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function makeTextChunk(keyword, text) {
  const keyBuf = Buffer.from(keyword, 'latin1');
  const textBuf = Buffer.from(text, 'latin1');
  return makeChunk('tEXt', Buffer.concat([keyBuf, Buffer.from([0]), textBuf]));
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function encodePayload(obj) {
  return Buffer.from(JSON.stringify(obj), 'utf8').toString('base64');
}

const src = fs.readFileSync(srcPng);
if (src.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('PNG signature mismatch');
}

const chara = readJson(charaPath);
const ccv3 = readJson(ccv3Path);
const charaB64 = encodePayload(chara);
const ccv3B64 = encodePayload(ccv3);

const chunks = [];
let offset = 8;
while (offset < src.length) {
  const len = src.readUInt32BE(offset);
  const type = src.toString('ascii', offset + 4, offset + 8);
  const raw = src.subarray(offset, offset + 12 + len);
  if (type === 'tEXt') {
    const data = src.subarray(offset + 8, offset + 8 + len);
    const nul = data.indexOf(0);
    const keyword = data.subarray(0, nul < 0 ? data.length : nul).toString('latin1');
    if (keyword !== 'chara' && keyword !== 'ccv3') {
      chunks.push(raw);
    }
  } else if (type !== 'IEND') {
    chunks.push(raw);
  }
  offset += 12 + len;
  if (type === 'IEND') break;
}

const out = Buffer.concat([
  src.subarray(0, 8),
  ...chunks,
  makeTextChunk('chara', charaB64),
  makeTextChunk('ccv3', ccv3B64),
  src.subarray(src.length - 12),
]);

fs.writeFileSync(outPng, out);

console.log(JSON.stringify({
  output: outPng,
  size: out.length,
  charaBytes: charaB64.length,
  ccv3Bytes: ccv3B64.length,
  equalPayloads: charaB64 === ccv3B64,
}, null, 2));
