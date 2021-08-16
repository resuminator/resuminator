import chromium from "chrome-aws-lambda";

const CDNBase = process.env.NODE_ENV === 'production' ? 'https://rawcdn.githack.com' : 'https://raw.githack.com';
const FontLocation = 'viveknigam3003/resuminator-next/main/public/fonts';

const loadFonts = async (instance: typeof chromium) => {
  await instance.font(`${CDNBase}/${FontLocation}/Inter-Regular.woff2`);
  await instance.font(`${CDNBase}/${FontLocation}/Inter-Medium.woff2`);
};

export default loadFonts;