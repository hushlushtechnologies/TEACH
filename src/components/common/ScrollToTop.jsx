 import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./SmoothScroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();

    if (lenis) {
      // Lenis handles the scroll
      lenis.scrollTo(0, { immediate: true }); 
    } else {
      // fallback in case Lenis isn’t ready
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
