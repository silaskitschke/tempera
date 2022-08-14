import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./Home/Home";
import StartPage from "./StartPage/StartPage";
import PaintingPage from "./PaintingPage/PaintingPage";
import LegalPage from "./LegalPage/LegalPage";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop></ScrollToTop>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/painting/:id" element={<PaintingPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
