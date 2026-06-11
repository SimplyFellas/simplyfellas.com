import { useEffect } from "react";
import "./App.css";
import NavHeader from "./components/navHeader.jsx";
import { Foot } from "./App.jsx";
import PageFx from "./pageFx/pageFx.jsx";


function Card() {

}

export default function Downloads() {
  return (
    <PageFx>
      <NavHeader/>

      <main id="wrapper_downloads">
        <h1 className="pri-c-1">This is the download page</h1>
      </main>

      <Foot/>
    </PageFx>
  );
}
