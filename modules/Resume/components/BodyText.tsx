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

import { BoxProps } from "@material-ui/core";
import React, { useContext } from "react";
import TextViewer, { TiptapProps } from "../../../plugins/Tiptap/TextViewer";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const BodyText: React.FC<TiptapProps & BoxProps> = ({ content, ...props }) => {
  const bodyProps = useContext(StylePropsContext).bodyProps;
  const spacing = useResumeStore((state) => state.spacing);

  const bodyTextProps: BoxProps = {
    "aria-label": "Body Text",
    my: spacing * 2,
    ...props,
  };

  return <TextViewer content={content} {...bodyProps} {...bodyTextProps} />;
};

export default BodyText;
