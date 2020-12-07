import { IconButton } from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import { FiArrowUp, FiCheck } from "react-icons/fi";

function ConfirmButton({ onClick, changed }) {
  return (
    <AnimateSharedLayout>
      {changed ? (
        <motion.div layoutId="confirm-button">
          <IconButton color="primary" onClick={onClick}>
            <FiCheck />
          </IconButton>
        </motion.div>
      ) : (
        <motion.div layoutId="confirm-button">
          <IconButton onClick={onClick}>
            <FiArrowUp color="primary" />
          </IconButton>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export default ConfirmButton;
