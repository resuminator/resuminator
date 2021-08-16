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
  },
};

const loadFonts = async (instance: typeof chromium) => {
  await instance.font(`${CDNBase}/${Fonts.inter.regular}`);
  await instance.font(`${CDNBase}/${Fonts.inter.medium}`);
};

export default loadFonts;
