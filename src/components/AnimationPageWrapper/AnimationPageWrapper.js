import React from "react";
import "./AnimationPageWrapper.scss";

import { motion } from "framer-motion";
import { useAnimationVariantContext } from "../../store/ContextProvider";

function AnimationPageWrapper(props) {
  const variant = useAnimationVariantContext();

  return (
    <motion.div className={`${props.className}`} variants={variant} initial="initial" animate="animate" exit="exit" transition="transition">
      <>{props.children}</>
    </motion.div>
  );
}

export default AnimationPageWrapper;
