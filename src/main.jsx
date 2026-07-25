import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./animatedRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
);
