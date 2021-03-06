import * as React from "react";
import heart from "../images/heart.svg";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className={"mt-auto mb-3 text-center"}>
      Made with{" "}
      <motion.img
        width={"40px"}
        height={"40px"}
        className={"inline shadow-neon-orange -m-2"}
        src={heart}
        aria-label={"love"}
        animate={{ scale: [0.9, 1, 0.9, 1, 0.9, 0.9] }}
        transition={{
          duration: 2,
          times: [0, 0.1, 0.2, 0.3, 0.4, 1],
          repeat: Number.POSITIVE_INFINITY,
        }}
      />{" "}
      by Christian Jöcker
    </div>
  );
};
