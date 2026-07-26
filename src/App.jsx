import { motion, motionValue, scroll, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router-dom";
import "./App.css";
import urls from "./variables/url_links.json";
import { arrow_svg, discord_svg, download_svg, logo_svg } from "./components/graphics";
import {
  containerAnimation,
  delayedItemAnimation,
  itemAnimation,
  sectionsAnimation,
  viewportConfig,
} from "./variables/motionVariables";
import PageFx from "./pageFx/pageFx";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { randomInt } from "mathjs";
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText";
import { fetchVersions } from "./components/fetchMcVersions";

function MakeLink({ url, text }) {
  return (
    <a href={url} target="_blank" className="link">
      {text}
    </a>
  );
}

export function Foot() {
  let caution = useRef(null)

  return (
    <motion.section
      id="footerWrapper"
      variants={containerAnimation}
      initial="hide"
      whileInView="show"
      viewport={viewportConfig}
    >
      <div className="breaker_container">
        <img src="./assets/breaker_2.webp" className="pbreak2"></img>
      </div>
      <motion.footer
        whileInView={{opacity: 1}}
      >
        <div className="flex">
          <motion.button
            variants={itemAnimation}
            initial={{scale: 1}}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            id="gobackup"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="noButtonStyle"
          >
            {logo_svg}
          </motion.button>

          <motion.section
            id="footerLinks"
            variants={containerAnimation}
          >
            <motion.div variants={containerAnimation}>
              <span className="footerLinkHeader">Play</span>
              <Link to={"/downloads"} className="link">
                Downloads
              </Link>
            </motion.div>

            <motion.div variants={containerAnimation}>
              <span className="footerLinkHeader">Resources</span>
              <MakeLink url={urls.urls.simplyFellasWiki} text={"Wiki"} />
              <MakeLink
                url={urls.urls.simplyFellasGithub}
                text={"GitHub Repo"}
              />
            </motion.div >
            <motion.div variants={containerAnimation}>
              <span className="footerLinkHeader">Socials</span>
              <MakeLink url={urls.urls.discord} text={"Discord Server"} />
            </motion.div>
          </motion.section>
        </div>

        <motion.section
          variants={containerAnimation}
          initial="hide"
          whileInView="show"
          viewport={viewportConfig}
          id="disclaimer"
        >
          <motion.img
            initial={{ y: -32, opacity: 0}}
            whileInView={{y: window.innerWidth<1080?"-90%": "-25%", opacity: 1}}
            viewport={viewportConfig}
            tran
            src="/assets/sf_half1.webp"
            id="left_half"
            className="halfs"
          >
          </motion.img>

          <motion.img
            initial={{y:-32, opacity: 0}}
            whileInView={{y: window.innerWidth<1080?"-90%": "-25%", opacity: 1}}
            viewport={viewportConfig}
            src="/assets/sf_half2.webp"
            id="right_half"
            className="halfs"
          >
          </motion.img>

          <motion.div
            initial={{ backgroundSize: "0px" }}
            whileInView={{ backgroundSize: "auto 90%" }}
            transition={{ duration: 1, type: "spring" }}
            id="cautionTextContainer"
            onAnimationStart={() => {
              const split = new SplitText(caution.current, {type: "words, chars"})
              gsap.from(split.words, { duration: 0.5, y: 8, autoAlpha: 0, stagger: 0.05 })
            }}
          >
            <motion.i
              ref={caution}
            >
              SimplyFellas is not associated with Mojang or Microsoft and is not
              affiliated with any of the featured mods or it's creators.
              Textures and assets pulled from the mods were used to create the
              renders. So all credit belongs to the creators.
            </motion.i>
          </motion.div>
        </motion.section>

        <section id="credits">
          <motion.p variants={itemAnimation}>
            Website Designed & Developed by{" "}
            <a href="https://netrahun.com" target="_blank" className="link">
              Netra Hun
            </a>
          </motion.p>
          <motion.p variants={itemAnimation}>
            Modpack Assembled & Managed by{" "}
            <a href="https://github.com/UncleTyrone.com" target="_blank" className="link">
              UncleTyrone
            </a>
          </motion.p>
        </section>

        </motion.footer>

      <div className="breaker_container">
        <img src="./assets/breaker_1.webp" className="pbreak1"></img>
      </div>
    </motion.section>
  );
}

export function Breaker() {
  return <div className="pageBreaker"><img src="./assets/breaker_5.webp"></img></div>;
}

function MotionAboutSection({ children }) {
  return (
    <motion.section
      tabIndex={0}
      variants={sectionsAnimation}
      initial="hide"
      whileInView="show"
      exit="exit"
      viewport={{ amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
}

function ModpackInfo() {
  let modpackVersions = useRef(null);
  let [latestVersion, setVersion] = useState("");

  useEffect(() => {
    fetchVersions().then((result) => {
      modpackVersions.current = result;
      setVersion(
        modpackVersions.current.versions[
          modpackVersions.current.versions.length - 1
        ],
      );
    });
  }, []);

  return (
    <motion.div
      id="versionDetail"
      variants={containerAnimation}
      initial="hide"
      animate="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.span variants={itemAnimation}>Minecraft 1.21.1</motion.span>
      <motion.span variants={itemAnimation}>
        Modpack Version: {latestVersion.id}
      </motion.span>
    </motion.div>
  );
}

// only use whileinView below the fold
function App() {
  // scroll(scrolling => { console.log(scrolling)})
  const ctaPhrases = [
    "Sick of 2 week minecraft?",
    "Want to explode your friends using hamsters?",
    "Ready to have a good time with friends?",
    "Do you like capybaras and minecraft?",
  ];
  return (
    <>
      <NavHeader />

      <PageFx>
        <motion.main id="heroWrapper">
          {/* hero section*/}
          <motion.section
            id="hero"
            variants={containerAnimation}
            initial="hide"
            animate="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.img
              id="heroTitle"
              src="./assets/SimplyFellasTitle.svg"
              variants={itemAnimation}
            ></motion.img>
            <motion.p id="heroDesc" variants={delayedItemAnimation}>
              A vanilla+ Modpack for friends by friends.
            </motion.p>

            {/* <ModpackInfo />*/}

            <motion.div
              className="justify-col gap32px"
              id="heroLinkWrapper"
              variants={containerAnimation}
              initial="hide"
              animate="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.span variants={itemAnimation}>
                <Link to={"/downloads"} className="linkButtons">
                  {download_svg}
                  <span className="sec-c-1 mb-auto">Download!</span>
                </Link>
              </motion.span>

              <motion.a href={urls.urls.wabbanode} target="_blank" variants={itemAnimation}><img src="./assets/wabbanode.png" id="wabbanode" alt="Wabbanode server sponsor"></img></motion.a>

            </motion.div>
          </motion.section>
        </motion.main>

        {/* breaker */}
        <motion.section
          id="modShowcase"
          // variants={containerAnimation}
          // initial="hide"
          // whileInView="show"
          // viewport={viewportConfig}
        >
          <div className="breaker_container"><img src="./assets/breaker_3.webp" className="top"></img></div>
          <motion.h2 variants={itemAnimation} initial="hide" whileInView="show" viewport={{amount: .1}}>
            Discover over <motion.strong>150+</motion.strong> specially picked mods!
          </motion.h2>
          <div className="breaker_container"><img src="./assets/breaker_4.webp" className="bottom"></img></div>

        </motion.section>

        {/* mod sections */}
        <section id="about">
          <MotionAboutSection>
            <h3>Automate your world with </h3>
            <a
              tabIndex={-1}
              className="hrefLink"
              target="_blank"
              href={urls.urls.createMod}
            >
              Create!
            </a>
          </MotionAboutSection>

          <Breaker/>

          <MotionAboutSection>
            <h3>Find hidden treasures with</h3>
            <a
              tabIndex={-1}
              className="hrefLink"
              target="_blank"
              href={urls.urls.moogStructuresMod}
            >
              Moog's Structures!
            </a>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>Adopt your very own tiny</h3>
            <a
              tabIndex={-1}
              className="hrefLink"
              target="_blank"
              href={urls.urls.adorableHamstersMod}
            >
              Adorable Hamsters!
            </a>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>Too many chests? try</h3>
            <a
              tabIndex={-1}
              className="hrefLink"
              target="_blank"
              href={urls.urls.sophisticatedStorageMod}
            >
              Sophisticated Storage!
            </a>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>Do a little trolling with </h3>
            <a
              tabIndex={-1}
              className="hrefLink"
              target="_blank"
              href={urls.urls.carryOnMod}
            >
              Carry On!
            </a>
          </MotionAboutSection>
        </section>

        <Breaker />

        <motion.section
          id="cta"
          variants={containerAnimation}
          initial="hide"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.img
            variants={itemAnimation}
            initial="hide"
            whileInView="show"
            viewport={viewportConfig}
            src="./assets/sfbg.webp"
          />
          <motion.aside
            variants={containerAnimation}
            initial="hide"
            whileInView="show"
            viewport={viewportConfig}
          >
            <motion.h2
              variants={itemAnimation}
              viewport={viewportConfig}
            >
              {ctaPhrases[randomInt(1, ctaPhrases.length)]}
            </motion.h2>
            <motion.span
              variants={itemAnimation}
              viewport={viewportConfig}>
              <Link to={"/downloads"} className="linkButtons">
                Download SimplyFellas!
              </Link>
            </motion.span>
          </motion.aside>
        </motion.section>

        <motion.section
          id="discordSection"
          variants={containerAnimation}
          initial="hide"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.aside variants={containerAnimation}>
            <motion.h3 variants={itemAnimation}>
              Come join our{" "}
              <motion.a
                className="link"
                href={urls.urls.discord}
                target="_blank"
              >
                Discord!
              </motion.a>{" "}
            </motion.h3>
            <motion.p variants={itemAnimation}>
              Hangout, chat with other modpack players, ask us questions, report
              bugs, suggest updates, and more!
            </motion.p>
          </motion.aside>

          <motion.a
            href={urls.urls.discord}
            target="_blank"
            id="svgButton"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1, transition:{type: "spring"}, ease: [.50, .25, .4, 1] ,duration: .25}}
            animate={{ rotateY: [0, 360, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          >{discord_svg}</motion.a>

          <motion.img
            src="./assets/discordLoop.gif"
            id="discordLoop"
            alt="your device does not support the formats unfortunately"
          >
          </motion.img>

          {/* <motion.video
            tabIndex={-1}
            autoPlay
            loop
            preload="auto"
          >
            <motion.source
              src="./assets/discordLoop.mp4"
              type="video/mp4"
            ></motion.source>
            <motion.source
              src="./assets/discordLoop.webm"
              type="video/webm"
            ></motion.source>
          </motion.video>*/}
        </motion.section>

        <Foot />
      </PageFx>
    </>
  );
}

export default App;
