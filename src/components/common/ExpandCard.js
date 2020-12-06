import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import DetailCard from "./DetailCard";
import { InputCard } from "./InputCard";

const ExpandCard = ({ children, item, id, currIndex, index, open, expand, collapse }) => {
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
          <DetailCard item={item} onClick={expand}/>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
};

export default ExpandCard;
