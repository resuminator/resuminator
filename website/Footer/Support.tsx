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

import { Stack } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../components/common/TextLink";
import {
  COOKIE_POLICY,
  GUIDES,
  HELP_CENTER,
  LICENSE,
  PRIVACY_POLICY
} from "../../data/DocLinks";
import ListHeader from "./ListHeader";

const SupportLinks = [
  {
    text: "Help Center",
    link: HELP_CENTER,
  },
  {
    text: "License",
    link: LICENSE,
  },
  {
    text: "Privacy Policy",
    link: PRIVACY_POLICY,
  },
  {
    text: "Cookie Policy",
    link: COOKIE_POLICY,
  },
  {
    text: "Guides",
    link: GUIDES,
  },
];

const Support = () => {
  return (
    <Stack>
      <ListHeader>Support</ListHeader>
      {SupportLinks.map((item) => (
        <TextLink
          key={item.text}
          text={item.text}
          link={item.link}
          color="blue.100"
          fontSize="sm"
        />
      ))}
    </Stack>
  );
};

export default Support;
