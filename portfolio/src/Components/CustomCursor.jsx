import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (circleRef.current && dotRef.current) {
        circleRef.current.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`;
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-12 h-12 rounded-full border-2 border-white transition-transform duration-150 ease-out mix-blend-difference"
      ></div>

      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full bg-white transition-transform duration-75 ease-out mix-blend-difference"
      ></div>
    </>
  );
};

export default CustomCursor;
