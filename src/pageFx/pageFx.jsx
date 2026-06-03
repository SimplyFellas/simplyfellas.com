import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageFx({ children }) {
  // the children prop apparently is special
  // in that it allows the elements passed in between
  // the compoent declaration to be read
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "spring" }}
  >
    { children }
  </motion.div>);
}
