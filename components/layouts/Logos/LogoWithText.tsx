/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hasTagline?: boolean;
  width?: string;
  height?: string;
  variant?: "light" | "dark";
}

const LogoWithText: React.FC<Props & BoxProps> = ({
  hasTagline = false,
  variant,
  width = "160px",
  height = "32px",
  ...props
}) => {
  const taglineColor = useColorModeValue("gray.500", "whiteAlpha.700");
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.svg",
    "/logos/text_light.svg"
  );
  const src =
    variant === "light"
      ? "/logos/text_light.svg"
      : variant === "dark"
      ? "/logos/text_dark.svg"
      : colorModeDefaultLogo;

  return (
    <Box display="flex" flexDir="column" w="fit-content" {...props}>
      <Link href="/" scroll={false}>
        <a>
          <Image
            layout="fixed"
            src={src}
            width={width}
            height={height}
          />
        </a>
      </Link>
      {hasTagline && (
        <Text fontSize="sm" fontWeight="medium" color={taglineColor}>
          Build beautiful single-page resumes within minutes
        </Text>
      )}
    </Box>
  );
};

export default LogoWithText;
