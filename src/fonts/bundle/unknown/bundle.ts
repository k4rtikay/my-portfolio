import glyphData from './glyphData.json';
import glyphDataById from './glyphDataById.json';

const fontUrl = '/fonts/unknown.ttf';

const bundle = {
  version: 0,
  family: 'Unknown',
  lineCap: 'round',
  fontUrl: fontUrl,
  fontFaceCSS: `@font-face { font-family: 'Unknown'; src: url('${fontUrl}'); }`,
  unitsPerEm: 2048,
  ascender: 1960,
  descender: -792,
  glyphData,
  glyphDataById,
  features: ["liga"],
} as const;

export default bundle;