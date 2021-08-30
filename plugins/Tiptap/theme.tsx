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

const ProseMirror = (props) => ({
  ".ProseMirror.viewer": {
    bg: "inherit",
    resize: "none",
    m: "0",
    p: "0",
    paddingInlineStart: "0",
    WebkitPaddingStart: "0",
    paddingInlineEnd: "0",
    WebkitPaddingEnd: "0",
    minHeight: "4",
    maxHeight: "xs",
    minWidth: "0px",
    border: "none",
    borderRadius: "none",
    color: props.colorMode === "light" ? "gray.600" : "gray.400",
    overflow: "hidden",
    ":hover": {
      bg: "transparent",
    },
    ":focus": {
      bg: "transparent",
      border: "none",
    },
  },
  ".ProseMirror": {
    bg: props.colorMode === "light" ? "gray.100" : "whiteAlpha.50",
    my: "2",
    py: "2",
    px: "4",
    paddingInlineStart: "4",
    WebkitPaddingStart: "4",
    paddingInlineEnd: "4",
    WebkitPaddingEnd: "4",
    minHeight: "32",
    maxHeight: "xs",
    fontSize: "md",
    lineHeight: "short",
    minWidth: "0px",
    width: "100%",
    outline: "0",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    MsAppearance: "none",
    position: "relative",
    border: "2px solid",
    borderColor: "transparent",
    borderRadius: "md",
    overflowX: "hidden",
    overflowY: "auto",
    resize: "vertical",
    color: "inherit",
    transition: "all 0.2s",
    WebkitTransition: "all 0.2s",
    wordWrap: "break-word",
    ul: {
      marginLeft: "4",
    },
    ol: {
      marginLeft: "4",
    },
    ":hover": {
      bg: props.colorMode === "light" ? "gray.200" : "whiteAlpha.100",
    },
    ":focus": {
      bg: "transparent",
      borderColor: props.colorMode === "light" ? "blue.500" : "blue.300",
    },
    "p.is-editor-empty:first-of-type::before": {
      content: "attr(data-placeholder)",
      float: "left",
      color: props.colorMode === "light" ? "gray.400" : "whiteAlpha.400",
      pointerEvents: "none",
      height: 0,
    },
  },
});

export default ProseMirror;
