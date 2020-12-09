/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box } from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";

const InputCardContent = ({ label, children }) => {
  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          mt={2}
          key={label}
        >
          {children}
        </Box>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default InputCardContent;
