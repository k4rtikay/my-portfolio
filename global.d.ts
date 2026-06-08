// Add this exact block to tell TS what a font file is
declare module '*.ttf' {
  const content: string;
  export default content;
}