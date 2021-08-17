import { NextSeo, NextSeoProps } from "next-seo";
import config from "./seo.config";
import { defaultSeoConfig } from "./default.config";

const SEO: React.FC<NextSeoProps> = ({
  title = defaultSeoConfig.title,
  description = defaultSeoConfig.description,
  ...rest
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description, ...config.openGraph }}
      {...config}
      {...rest}
    />
  );
};

export default SEO;
