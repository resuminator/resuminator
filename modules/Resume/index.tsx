import { Box } from "@chakra-ui/layout";
import React from "react";
import useGlobalStore from "../../store/global.store";
import useResumeStore from "../../store/resume.store";
import StylePropsProvider from "../Design/StylePropsProvider";
import { getHeaderLayout, getLayout } from "./legend";

const ResumePaper = () => {
  const { header, body } = useResumeStore((state) => state.properties.layout);
  const spacing = useResumeStore((state) => state.spacing);
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);

  const applyFilters = grayscaleFilter && { filter: "grayscale(1)" };

  React.useEffect(() => console.log(header), [header]);

  return (
    <StylePropsProvider>
      <Box
        display="flex"
        flexDir="column"
        aria-label="Resume Paper"
        {...applyFilters}
      >
        <Box
          aria-label="Header"
          display="flex"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
        >
          {header.map((row, index) => (
            <Box
              display="flex"
              aria-label={`Row-${index + 1}`}
              key={index}
              width="100%"
              justifyContent="space-between"
            >
              {row.map((layoutKey) => (
                <Box display="flex" aria-label={layoutKey} key={layoutKey}>
                  {getHeaderLayout(layoutKey)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Box
          aria-label="Body"
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
          // px={spacing * 8} py={spacing * 2}
        >
          {body.map((rowAsColumn, index) => (
            <Box
              display="flex"
              flexDir="column"
              aria-label={`Column-${index + 1}`}
              key={index}
              px={spacing * 4} py={spacing * 2}
              flexBasis={`${(1 / body.length) * 100}%`}
            >
              {rowAsColumn.map((layoutKey) => (
                <Box
                  display="flex"
                  aria-label={layoutKey}
                  key={layoutKey}
                  width="100%"
                >
                  {getLayout(layoutKey)}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </StylePropsProvider>
  );
};

export default ResumePaper;
