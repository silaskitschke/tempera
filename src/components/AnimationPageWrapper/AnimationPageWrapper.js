import React from "react";
import "./AnimationPageWrapper.scss";

import { motion } from "framer-motion";
import { useAnimationVariantContext } from "../../store/ContextProvider";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

function AnimationPageWrapper(props) {
  const variant = useAnimationVariantContext();

  ScrollToTop();

  return (
    <motion.div className={`${props.className}`} variants={variant} initial="initial" animate="animate" exit="exit" transition="transition">
      <>{props.children}</>
    </motion.div>
  );
}

export default AnimationPageWrapper;
