/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import DetailCard from "./DetailCard";
import { InputCard } from "./InputCard";

const ExpandCard = ({
  children,
  item,
  id,
  currIndex,
  index,
  open,
  expand,
}) => {
  return (
    <AnimateSharedLayout>
      {open && currIndex === index ? (
        <motion.div layoutId="expandable-card">
          <InputCard key={id} id={id}>
            {children}
          </InputCard>
        </motion.div>
      ) : (
        <motion.div layoutId="expandable-card">
          <DetailCard item={item} onClick={expand} />
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default ExpandCard;
