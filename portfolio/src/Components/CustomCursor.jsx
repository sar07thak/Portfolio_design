import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (circleRef.current && dotRef.current) {
        circleRef.current.style.transform = `translate(${clientX - 24}px, ${clientY - 24}px)`;
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }
    };

    const handleHover = () => {
      if (circleRef.current) {
        circleRef.current.style.transform += " scale(1.8)";
      }
    };

    const handleUnhover = () => {
      if (circleRef.current) {
        circleRef.current.style.transform = circleRef.current.style.transform.replace(/scale\(\d+(\.\d+)?\)/, '');
      }
    };

    // Elements that should trigger scale on hover
    const interactiveElements = document.querySelectorAll(
      "button, a, img, .cursor-hover"
    );

    window.addEventListener("mousemove", moveCursor);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border-2 border-white transition-transform duration-200 ease-out mix-blend-difference"
      ></div>

      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full bg-white transition-transform duration-75 ease-out mix-blend-difference"
      ></div>
    </>
  );
};

export default CustomCursor;