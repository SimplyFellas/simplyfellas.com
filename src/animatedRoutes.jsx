import { AnimatePresence } from "motion/react";
import { useLocation, Routes, Route } from "react-router-dom";
import App from "./App";
import Downloads from "./downloads";
import { useEffect } from "react";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<App />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </AnimatePresence>
  );
}
