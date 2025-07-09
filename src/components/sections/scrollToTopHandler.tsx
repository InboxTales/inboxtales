'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTopHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on page load and navigation
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Handle page refresh scrolling
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    const handleLoad = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, 0);
        sessionStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTopHandler; 