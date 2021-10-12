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
import LinkText from "../../components/common/LinkText";
import ListHeader from "./ListHeader";

const ProductLinks = [
  {
    text: "Features",
    link: "/#features"
  },
  {
    text: "Open Source",
    link: "/#open-source"
  },
  {
    text: "Sponsor",
    link: "/#sponsor"
  },
  {
    text: "Newsletter",
    link: "/#broadmap"
  },
  {
    text: "About Us",
    link: "/about"
  }
];

const Product = () => {
  return (
    <Stack>
      <ListHeader>Product</ListHeader>
      {ProductLinks.map((item) => (
        <LinkText
          key={item.text}
          href={item.link}
          color="blue.100"
          fontSize="sm"
        >
          {item.text}
        </LinkText>
      ))}
    </Stack>
  );
};

export default Product;
