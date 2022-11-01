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

import { Text, TextProps } from "@chakra-ui/react";
import React, { Fragment } from "react";
import TextLink from "../../../components/common/TextLink";
import { WEBSITE } from "../../../data/RefLinks";
import { FeatureFlags } from "../../Cohort/FeatureFlags";
import withCohortAccess from "../../Cohort/WithCohortAccess";

interface ResumeFooterProps {
  color?: string;
  forceFooter?: boolean;
}

const ResumeFooter: React.FC<ResumeFooterProps> = ({ color, forceFooter }) => {
  const footerProps: TextProps = forceFooter
    ? {
        position: "absolute",
        top: "29cm"
      }
    : {};

  return (
    <Text
      as="footer"
      fontSize="sm"
      color="gray"
      width="100%"
      textAlign="center"
      p="1"
      flexShrink={0}
      backgroundColor="#fff"
      zIndex={1}
      {...footerProps}
    >
      Built with{" "}
      <TextLink
        fontFamily="Manrope"
        fontWeight="bold"
        text="Resuminator"
        link={WEBSITE}
        color={color}
      />
    </Text>
  );
};

export default withCohortAccess(
  ResumeFooter,
  FeatureFlags.WATERMARK,
  <Fragment />
);
