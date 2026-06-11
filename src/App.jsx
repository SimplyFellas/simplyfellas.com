import { motion, spring, stagger } from "motion/react";
import NavHeader from "./components/navHeader";
import { Link } from "react-router-dom";
import "./App.css";
import urls from "./variables/url_links.json";
import { arrow_svg, logo_svg } from "./components/graphics";
import {
  containerAnimation,
  delayedItemAnimation,
  itemAnimation,
  sectionsAnimation,
} from "./variables/motionVariables";
import PageFx from "./pageFx/pageFx";

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

        <section id="legal_disclaimer">
          <i>
            SimplyFellas is not associated with Mojang or Microsoft and is not
            related to the featured mods and it's creators. Textures and assets
            pulled from the mods were used to create the renders. Purely for artistic
            intent. No AI was used.
          </i>
        </section>

        <section>
          <span>Design & Developed by Netra Hun</span>
        </section>
      </footer>
    </div>
  );
}

function Breaker() {
  return <div className="pageBreaker"></div>;
}

// only use whileinView below the fold
function App() {
  return (
    <PageFx>
      <NavHeader />

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

          <motion.div
            id="versionDetail"
            variants={containerAnimation}
            initial="hide"
            animate="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.span variants={delayedItemAnimation}>
              Minecraft 1.21.1
            </motion.span>
            <motion.span variants={delayedItemAnimation}>
              Modpack Ver: 1.6.0
            </motion.span>
          </motion.div>

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
                {arrow_svg}
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
        <h2>
          With <strong>150+</strong> mods, you'll always experience something
          new!
        </h2>
      </motion.section>

      {/* mod sections */}
      <section id="about">
        <motion.section
          variants={sectionsAnimation}
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h3>
            Automate your world with{" "}
            <a className="hrefLink" target="_blank" href={urls.urls.createMod}>
              Create!
            </a>
          </h3>
        </motion.section>

        <Breaker />

        <motion.section
          variants={sectionsAnimation}
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
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
        </motion.section>

        <Breaker />

        <motion.section
          variants={sectionsAnimation}
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
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
        </motion.section>

        <Breaker />

        <motion.section
          variants={sectionsAnimation}
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
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
        </motion.section>

        <Breaker />

        <motion.section
          variants={sectionsAnimation}
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h3>
            Do a little trolling with{" "}
            <a className="hrefLink" target="_blank" href={urls.urls.carryOnMod}>
              Carry On!
            </a>
          </h3>
        </motion.section>
      </section>

      <Breaker />

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

      <Breaker />

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
  );
}

export default App;
