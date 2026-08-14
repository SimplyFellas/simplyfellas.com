import { useEffect, useState } from "react";
import "./App.css";
import NavHeader from "./components/navHeader.jsx";
import { Breaker, Foot } from "./App.jsx";
import PageFx from "./pageFx/pageFx.jsx";
import urls from "./variables/url_links.json";
import Markdown from "react-markdown";
import { useRef } from "react";
import { fetchVersions } from "./components/fetchMcVersions.jsx";
import { motion } from "motion/react";
import {
  containerAnimation,
  itemAnimation,
  viewportConfig,
} from "./variables/motionVariables.jsx";

function ChangeLogs() {
  let [logsList, setList] = useState();

  async function fetchLatest() {
    let currentVersion = "1.5.0";

    try {
      const result = await fetchVersions();
      if (result?.versions?.length) {
        currentVersion = result.versions[result.versions.length - 1].id;
      }
    } catch (err) {
      console.log("Failled to get latest version", err.message);
    }

    const folderLink =
      "https://raw.githubusercontent.com/SimplyFellas/SimplyFellasVersions/refs/heads/master/Versions/versions/" +
      currentVersion +
      "/changelog.txt";
    try {
      const response = await fetch(folderLink, { method: "GET" });
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      let result = await response.text();
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchLatest().then((result) => {
      setList(result);
    });
  }, []);

  return (
    <>
      <motion.aside className="markdownLog" variants={itemAnimation}>
        <Markdown>{logsList}</Markdown>
      </motion.aside>
      <motion.a
        href={urls.urls.simplyfellasVersions}
        target="_blank"
        id="seeMoreChanges"
        variants={itemAnimation}
        whileHover={{
          y: -8,
          transition: { ease: "easeInOut" },
          duration: 0.25,
        }}
        whileFocus={{
          y: -8,
          transition: { ease: "easeInOut" },
          duration: 0.25,
        }}
      >
        See all Changes
      </motion.a>
    </>
  );
}

export default function Downloads() {
  return (
    <PageFx>
      <NavHeader />

      <motion.section id="wrapper_downloads" initial={{y: 0}} >
        <div id="content">

        <motion.main
          variants={containerAnimation}
          animate="show"
          initial="hide"
        >
          <motion.h1 variants={itemAnimation}>Ways to play!</motion.h1>

          <motion.section
            className="install-banner"
            id="prism-install"
            variants={containerAnimation}
            animate="show"
            initial="hide"
          >
            <motion.img
              src="https://www.prismlauncher.org/img/logo-textLight.svg"
              loading="lazy"
              alt="prism launcher logo"
              variants={itemAnimation}
            ></motion.img>
            <motion.h2 variants={itemAnimation}>
              Prism Launcher (preferred)
            </motion.h2>

            <motion.h3 variants={itemAnimation}>Step 1</motion.h3>
            <motion.p variants={itemAnimation}>
              This method is very straight forward: download the launcher if you
              haven't already. Launch it, then set up your account. Once you're
              set up, click the "Add Instance" button in the main screen
            </motion.p>
            <motion.img
              variants={itemAnimation}
              src="./assets/downloadExamples/prism-ex-1.webp"
              className="example"
              loading="lazy"
              alt="prism method picture example 1"
            ></motion.img>

            <motion.h3 variants={itemAnimation}>Step 2</motion.h3>
            <motion.p variants={itemAnimation}>
              It should bring you to a new instance window, click on the
              "CurseForge" tab then search for "SimplyFellas" (case sensitivity
              optional)
            </motion.p>
            <motion.img
              src="./assets/downloadExamples/prism-ex-2.webp"
              className="example"
              loading="lazy"
              alt="prism method picture example 2"
              variants={itemAnimation}
            ></motion.img>
            <motion.img
              variants={itemAnimation}
              src="./assets/downloadExamples/prism-ex-3.webp"
              className="example"
              loading="lazy"
              alt="prism method picture example 3"
            ></motion.img>

            <motion.h3 variants={itemAnimation}>Step 3</motion.h3>
            <motion.p variants={itemAnimation}>
              Select the version you want, preferably, the latest one at the
              top. Click "OK" then it should begin the downloading process. Wait
              a bit depending on your internet speed, and voila a shiny new
              SimplyFellas modpack!
            </motion.p>

            <motion.h2 variants={itemAnimation}>
              Another way is to download via the CurseForge website:
            </motion.h2>
            <motion.img
              src="./assets/downloadExamples/prism-ex-4.webp"
              className="example"
              loading="lazy"
              alt="prism method picture example 4"
              variants={itemAnimation}
            ></motion.img>
            <motion.p variants={itemAnimation}>
              Head over to the modpack page, and click the "Install via App"
              button. Since you have Prism installed, you will be given a prompt
              box to open the link in Prism. Open it and it will give you an
              import window, give the pack a name or group if so choose, then
              click "OK". You will have a fully installed modpack in your
              launcher homepage. Launch the modpack and enjoy!
            </motion.p>
          </motion.section>

          <motion.section
            className="install-banner"
            id="curseforge-install"
            variants={containerAnimation}
            whileInView="show"
            initial="hide"
          >
            <motion.img
              src="./assets/curseforgeLogo.webp"
              alt="curse forge icon"
              loading="lazy"
              variants={itemAnimation}
            ></motion.img>
            <motion.h2 variants={itemAnimation}>CurseForge App</motion.h2>
            <motion.h3 variants={itemAnimation}>Step 1</motion.h3>
            <motion.img
              src="./assets/downloadExamples/curseforge-ex-1.webp"
              className="example"
              loading="lazy"
              alt="curse forge method picture example 1"
              variants={itemAnimation}
            ></motion.img>
            <motion.p variants={itemAnimation}>
              Head over to the CurseForge page and click the "Install via App"
              button, it will tell you or direct you to download the CurseForge
              app!
            </motion.p>
            <motion.h3 variants={itemAnimation}>Step 2</motion.h3>
            <motion.img
              src="./assets/downloadExamples/curseforge-ex-2.webp"
              className="example"
              loading="lazy"
              alt="curse forge method picture example 1"
              variants={itemAnimation}
            ></motion.img>
            <motion.p variants={itemAnimation}>
              Download the app: once it's done, search within the app or click
              the install button on the website to download the modpack. Wait a
              little, then you are ready to start your journey by yourself or
              with friends!
            </motion.p>
          </motion.section>

          <motion.section
            className="install-banner"
            id="multimc-install"
            variants={containerAnimation}
            initial="hide"
            whileInView="show"
          >
            <motion.h2 variants={itemAnimation}>Multi Mc</motion.h2>
            <motion.p variants={itemAnimation}>Just use Prism. lol </motion.p>
          </motion.section>
        </motion.main>

        <motion.aside
          id="changeList"
          variants={containerAnimation}
          animate="show"
          initial="hide"
        >
          <motion.h1 variants={itemAnimation}>Latest Change</motion.h1>
          <ChangeLogs />
        </motion.aside>

        </div>

        <motion.div
          id="otherOptions"
          variants={containerAnimation}
          whileInView="show"
          initial="hide"
        >
          <motion.h2 variants={itemAnimation}>
            Other Launchers & Options
          </motion.h2>
          <motion.p variants={itemAnimation}>
            We will provide install instructions for other launchers at a later
            date. For now please follow either of these for the time being. If you
            like to stay up to date: consider joining our{" "}
            <motion.a href={urls.urls.discord} target="_blank" className="link">
              Discord Server!
            </motion.a>
          </motion.p>
        </motion.div>

      </motion.section>



      <Foot />
    </PageFx>
  );
}
