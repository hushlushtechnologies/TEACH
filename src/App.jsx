import useSmoothScroll from "./components/common/SmoothScroll";
import SplashCursor from "./components/common/SplashCursor";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import HomeTwo from "./pages/Home/HomeTwo";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./components/common/NotFound";
   

export default function App() {
  useSmoothScroll();
  return (
    <>
      <SplashCursor SIM_RESOLUTION={200} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>

      <Footer />
    </>
  );
}
