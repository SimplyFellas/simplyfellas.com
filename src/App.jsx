import { motion, scroll, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router-dom";
import "./App.css";
import urls from "./variables/url_links.json";
import { arrow_svg, download_svg, logo_svg } from "./components/graphics";
import {
  containerAnimation,
  delayedItemAnimation,
  itemAnimation,
  sectionsAnimation,
} from "./variables/motionVariables";
import PageFx from "./pageFx/pageFx";
import { feFuncB } from "motion/react-m";
import { useEffect, useState } from "react";
import { useRef } from "react";

function MakeLink({ url, text }) {
  return (
    <a href={url} target="_blank" className="link">
      {text}
    </a>
  );
}

export function Foot() {
  return (
    <div id="footerWrapper">
      <footer>
        <div className="flex">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="noButtonStyle"
          >
            {logo_svg}
          </button>

          <section id="footerLinks">
            <div>
              <span className="footerLinkHeader">Play</span>
              <Link to={"/downloads"} className="link">
                Downloads
              </Link>
            </div>
            <div>
              <span className="footerLinkHeader">Resources</span>
              <MakeLink url={urls.urls.simplyFellasWiki} text={"Wiki"} />
              <MakeLink
                url={urls.urls.simplyFellasGithub}
                text={"GitHub Repo"}
              />
            </div>
            <div>
              <span className="footerLinkHeader">Socials</span>
              <MakeLink url={urls.urls.discord} text={"Discord Server"} />
            </div>
          </section>
        </div>

        <section id="disclaimer">
          <i>
            SimplyFellas is not associated with Mojang or Microsoft and is not
            affiliated with any of the featured mods or it's creators. Textures
            and assets pulled from the mods were used to create the renders. So
            all credit belongs to the creators.
          </i>

          <span>Design & Developed by Netra Hun</span>
        </section>
      </footer>
    </div>
  );
}

function Breaker() {
  return <div className="pageBreaker"></div>;
}

function MotionAboutSection({ children }) {
  return (
    <motion.section
      variants={sectionsAnimation}
      initial="hide"
      whileInView="show"
      viewport={{ once: false, amount: "some" }}
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

async function fetchVersions() {
  const jsonLink =
    "https://raw.githubusercontent.com/SimplyFellas/SimplyFellasVersions/3d0cef8635920faffa89e1059c88ad8a8402ca24/Versions/meta.json";
  try {
    const response = await fetch(jsonLink, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

// only use whileinView below the fold
function App() {
  // scroll(scrolling => { console.log(scrolling)})

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

            <ModpackInfo />

            <motion.div
              className="justify-row"
              id="heroLinkWrapper"
              variants={containerAnimation}
              initial="hide"
              animate="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.span variants={delayedItemAnimation}>
                <Link to={"/downloads"} className="linkButtons">
                  {download_svg}
                  <span className="sec-c-1 mb-auto">Download!</span>
                </Link>
              </motion.span>

              <motion.a
                href="https://wabbanode.com/affiliate/simplyfellas"
                target="_blank"
                className="linkButtons"
                id="wabbanode"
                variants={delayedItemAnimation}
              >
                {arrow_svg}
                <motion.span className="sec-c-1 mb-auto">
                  Need a Server?
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.section>
        </motion.main>

        {/* breaker */}
        <motion.section
          id="modShowcase"
          variants={containerAnimation}
          initial="hide"
          animate="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.h2 variants={delayedItemAnimation}>
            With <strong>150+</strong> mods, you'll always experience something
            new!
          </motion.h2>
        </motion.section>
        {/* mod sections */}
        <section id="about">
          <MotionAboutSection>
            <h3>
              Automate your world with{" "}
              <a
                className="hrefLink"
                target="_blank"
                href={urls.urls.createMod}
              >
                Create!
              </a>
            </h3>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>
              Find hidden treastures with{" "}
              <a
                className="hrefLink"
                target="_blank"
                href={urls.urls.moogStructuresMod}
              >
                Moog's Structures!
              </a>
            </h3>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>
              Adopt your very own tiny{" "}
              <a
                className="hrefLink"
                target="_blank"
                href={urls.urls.adorableHamstersMod}
              >
                Adorable Hamsters!
              </a>
            </h3>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>
              Too many chests? try{" "}
              <a
                className="hrefLink"
                target="_blank"
                href={urls.urls.sophisticatedStorageMod}
              >
                Sophisticated Storage!
              </a>
            </h3>
          </MotionAboutSection>

          <Breaker />

          <MotionAboutSection>
            <h3>
              Do a little trolling with{" "}
              <a
                className="hrefLink"
                target="_blank"
                href={urls.urls.carryOnMod}
              >
                Carry On!
              </a>
            </h3>
          </MotionAboutSection>
        </section>

        <motion.section id="cta">
          <div>
            <h2>All of this and more!</h2>
            <Link to={"/downloads"} className="linkButtons">
              Download SimplyFellas!
            </Link>
          </div>
          <motion.img
            initial={{ y: "-64px", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ease: "anticipate", duration: 3 }}
            src="./assets/extra_1.webp"
          />
        </motion.section>

        <section id="discordSection">
          <h3>
            Questions? join our Discord or visit our{" "}
            <MakeLink url={urls.urls.simplyFellasWiki} text={"wiki"}></MakeLink>
          </h3>

          <iframe
            id="discordEmbed"
            src="https://discord.com/widget?id=1452128644221767733&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </section>

        <Foot />
      </PageFx>
    </>
  );
}

export default App;
