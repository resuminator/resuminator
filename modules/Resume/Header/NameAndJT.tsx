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

import { Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import useContactStore from "../../UserInput/Contact/store";

const NameAndJobTitleLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const { headerTitleProps, headerSubtitleProps } =
    useContext(StylePropsContext);
  const spacing = useResumeStore((state) => state.spacing);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      px={spacing * 8}
      py={spacing * 4}
    >
      <Text aria-label="Full Name" {...headerTitleProps}>{fullName}</Text>
      <Text aria-label="Job Title" {...headerSubtitleProps}>{jobTitle}</Text>
    </Box>
  );
};

export default NameAndJobTitleLayout;
