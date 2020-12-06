import { IconButton } from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import { FiArrowUp, FiCheck } from "react-icons/fi";

function ConfirmButton({ onClick, changed }) {
  return (
    <AnimateSharedLayout>
      {changed ? (
        <IconButton color="primary" onClick={onClick}>
          <motion.div layoutId="confirm-button">
            <FiCheck />
          </motion.div>
        </IconButton>
      ) : (
        <IconButton onClick={onClick}>
          <motion.div layoutId="confirm-button">
            <FiArrowUp color="primary" />
          </motion.div>
        </IconButton>
      )}
    </AnimateSharedLayout>
  );
}

export default ConfirmButton;
