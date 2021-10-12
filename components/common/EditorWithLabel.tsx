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

import dynamic from "next/dynamic";
import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { TiptapProps } from "../../plugins/Tiptap";
const Tiptap = dynamic(() => import("../../plugins/Tiptap"));

interface Props extends TiptapProps {
  label: string;
}

const EditorWithLabel: React.FC<Props> = ({
  label,
  defaultValue,
  placeholder,
  outputFormat,
  onChange
}) => {
  return (
    <Fragment>
      <Text fontSize="md" pb="2" color="gray.500">
        {label}
      </Text>
      <Tiptap
        defaultValue={defaultValue}
        placeholder={placeholder}
        outputFormat={outputFormat}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default EditorWithLabel;
