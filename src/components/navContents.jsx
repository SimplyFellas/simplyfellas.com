import { motion } from "motion/react";

import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import {
  arrow_svg,
  discord_svg,
  download_svg,
  faq_svg,
  github_svg,
  question_svg,
} from "./graphics";
import { Link } from "react-router-dom";

import urls from "../variables/url_links.json";

export function NavContents() {
  return (
    <motion.ul variants={containerAnimation} initial="hide" animate="show">
      <motion.a
        variants={itemAnimation}
        whileTap={{ scale: 0.9 }}
        href={urls.urls.simplyFellasWiki}
        target="blank"
        aria-label="wiki link"
      >
        {question_svg}
        <span>Wiki</span>
      </motion.a>

      <motion.a
        variants={itemAnimation}
        whileTap={{ scale: 0.9 }}
        href={urls.urls.discord}
        target="_blank"
        aria-label="discord link"
      >
        {discord_svg}
        <span>Discord</span>
      </motion.a>

      <motion.a
        variants={itemAnimation}
        whileTap={{ scale: 0.9 }}
        href={urls.urls.simplyFellasGithub}
        target="_blank"
        aria-label="github link"
      >
        {github_svg}
        <span>Github</span>
      </motion.a>

      <motion.div
        variants={itemAnimation}
        whileTap={{ scale: 0.9 }}
        href={urls.urls.simplyFellasGithub}
        tabIndex={-1}
      >
        <Link to={"/downloads"} tabIndex={0}>
          {download_svg}
          <span>Download</span>
        </Link>
      </motion.div>
    </motion.ul>
  );
}
