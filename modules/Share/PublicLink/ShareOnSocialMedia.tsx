/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { Box, HStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import Subsection from "../../../components/layouts/SubSection";
interface Props {}

const ShareOnSocialMedia = (props: Props) => {
  return (
    <Box>
      <Subsection
        title="Share on social media"
        subtitle="You can let the world know your achievements by sharing your resume
            on social media."
      />
      <HStack spacing={"4"}>
        <IconButton
          aria-label="Share on LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="linkedin"
        />
        <IconButton
          aria-label="Share on Twitter"
          icon={<FaTwitter />}
          colorScheme="twitter"
        />
        <IconButton
          aria-label="Copy Link"
          icon={<FiLink />}
          colorScheme="purple"
        />
      </HStack>
    </Box>
  );
};

export default ShareOnSocialMedia;
