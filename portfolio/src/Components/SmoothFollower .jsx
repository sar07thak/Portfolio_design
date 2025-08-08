import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

const SmoothFollower = () => {
    const location = useLocation(); // Hook to detect route changes
    const mousePosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });

    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });

    const [isHovering, setIsHovering] = useState(false);

    const DOT_SMOOTHNESS = 0.25;
    const BORDER_DOT_SMOOTHNESS = 0.12;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const lerp = (start, end, factor) => start + (end - start) * factor;

            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS
            );

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []); // This effect runs only once

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Re-query for interactive elements every time the location changes
        const interactiveElements = document.querySelectorAll(
            'a, button, img, input, textarea, select, [data-cursor="hover"]'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [location]); // This effect re-runs on route change

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
            {/* Center Dot */}
            <div
                className="absolute z-[9999] rounded-full bg-black"
                style={{
                    width: '12px',
                    height: '12px',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                }}
            />
            {/* Outer Border Dot */}
            <div
                className="absolute z-[9998] rounded-full border border-black"
                style={{
                    width: isHovering ? '45px' : '36px',
                    height: isHovering ? '45px' : '36px',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: 'width 0.2s, height 0.2s',
                }}
            />
        </div>
    );
};




export default SmoothFollower ;