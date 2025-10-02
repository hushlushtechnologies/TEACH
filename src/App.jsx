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
import ServiceDetails from "./pages/Services/ServiceDetails";
import ScrollToTop from "./components/common/ScrollToTop";
   

export default function App() {
  useSmoothScroll();
  return (
    <>
    <ScrollToTop/>
      <SplashCursor SIM_RESOLUTION={200} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
       <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>

      <Footer />
    </>
  );
}
