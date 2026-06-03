import { AnimatePresence, motion, stagger } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
} from "../variables/motionVariables";
import {
  arrow_svg,
  discord_svg,
  faq_svg,
  github_svg,
  logo_svg,
} from "./graphics";
import { NavContents } from "./navContents";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hambor({navState}) {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navState(false);
    }
  });

  return (
    // button to trigger the dropdown
    <motion.nav
      key={0}
      id="phone_nav"
      initial={{ opacity: 0, y: -32}}
      animate={{ opacity: 1, y: 0}}
      transition={{ type: "tween" }}
      exit={{ opacity: 0, y: -32}}
    >
      <NavContents />
    </motion.nav>
  );
}

export default function NavHeader() {
  let [navOpened, setNavOpened] = useState(false);

  return (
    <motion.div
      id="stickyNavWrapper"
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ type: "spring", duration: 3 }}
    >
      <motion.header>

        <motion.div
          className="justify-row"
          variants={containerAnimation}
          initial="hide"
          animate="show"
        >

          <motion.div id="modpackLogo" variants={containerAnimation}>
            {logo_svg}
          </motion.div>

          <motion.span id="nav-title" variants={itemAnimation}>
            <Link to={"/"}>
              SimplyFellas
            </Link>
          </motion.span>

        </motion.div>

        <motion.button
          id="navButton"
          onClick={() => {
            setNavOpened(!navOpened);
          }}
          variants={itemAnimation}
          initial="hide"
          animate="show"
          whileTap={{ scale: 0.9 }}
        >
          <span>{ !navOpened ? "Menu" : "Close" }</span>
        </motion.button>

        {/* tablet and desktop size nav*/}
        <motion.nav id="tablet_nav">
          <NavContents />
        </motion.nav>
      </motion.header>

      {/* phone only nav section*/}
      {/* make sure the animate pres is in the parent element*/}
      <AnimatePresence>{navOpened && <Hambor navState={setNavOpened} />}</AnimatePresence>
    </motion.div>
  );
}
