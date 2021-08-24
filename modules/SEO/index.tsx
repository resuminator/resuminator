import { NextSeo, NextSeoProps } from "next-seo";
import config from "./seo.config";
import { defaultSeoConfig } from "./default.config";

const SEO: React.FC<NextSeoProps> = ({
  title = defaultSeoConfig.title,
  description = defaultSeoConfig.description,
  ...rest
}) => {
  const effectiveTitle =
    title === defaultSeoConfig.title
      ? title
      : `${title} | ${defaultSeoConfig.title}`;
  return (
    <NextSeo
      title={effectiveTitle}
      description={description}
      openGraph={{ title, description, ...config.openGraph }}
      {...config}
      {...rest}
    />
  );
};

export default SEO;
