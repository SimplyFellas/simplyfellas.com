import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { containerAnimation, itemAnimation } from "./variables/motionVariables";

export default function NotFound() {
  return (
    <motion.section
      id="NotFound"
      variants={containerAnimation}
      initial="hide"
      animate="show"
    >

      <motion.h1
        variants={itemAnimation}
      >errorbara, the URL does not exist.
      </motion.h1>

      <motion.span
        variants={itemAnimation}
      ><Link to="/">Go Home</Link></motion.span>

    </motion.section>
  )
}
