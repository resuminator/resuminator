import { Box, BoxProps } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  width?: string;
  height?: string;
  href?: string;
}

const LogoSquare: React.FC<Props & BoxProps> = ({
  width = "36px",
  height = "36px",
  href = "/home",
  ...props
}) => {
  const src = "/logos/logo_sq_dark.svg";

  return (
    <Box display="flex" flexDir="column" {...props}>
      <Link href={href} scroll={false}>
        <a>
          <Image
            layout="fixed"
            src={src}
            width={width}
            height={height}
            placeholder="blur"
          />
        </a>
      </Link>
    </Box>
  );
};

export default LogoSquare;
