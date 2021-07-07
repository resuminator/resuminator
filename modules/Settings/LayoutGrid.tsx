import { Grid } from "@chakra-ui/react";
import React from "react";

const SettingsLayoutGrid: React.FC = ({ children }) => {
  return (
    <Grid
      minHeight="100vh"
      templateRows="0.5fr repeat(4, 2fr)" //6 rows, 1
      templateColumns="1fr 2fr 1fr" //4 columns, 1
      gap={4}
      mx={{ md: "4rem", lg: "7rem" }}
      my={{ base: "2rem" }}
    >
      {children}
    </Grid>
  );
};

export default SettingsLayoutGrid;
