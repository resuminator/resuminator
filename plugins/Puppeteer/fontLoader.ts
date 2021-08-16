import chromium from "chrome-aws-lambda";

const CDNBase =
  process.env.NODE_ENV === "production"
    ? "https://rawcdn.githack.com"
    : "https://raw.githack.com";
const Fonts = {
  inter: {
    regular:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-400-normal.woff",
    medium:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-500-normal.woff",
    semibold:
      "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-600-normal.woff",
    bold: "fontsource/fontsource/2f68479623de914af42e7a42e1064ff668e208fc/packages/inter/files/inter-all-700-normal.woff",
  },
};

const loadFonts = async (instance: typeof chromium) => {
  await instance.font(`${CDNBase}/${Fonts.inter.regular}`);
  await instance.font(`${CDNBase}/${Fonts.inter.medium}`);
  await instance.font(`${CDNBase}/${Fonts.inter.semibold}`);
  await instance.font(`${CDNBase}/${Fonts.inter.bold}`);
};

export default loadFonts;
