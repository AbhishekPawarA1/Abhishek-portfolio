import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, summary, label[for], [data-cursor-hover]';

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });

  const pointer = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (event: MouseEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      setVisible(true);

      const target = event.target;
      if (target instanceof Element) {
        setHovering(!!target.closest(INTERACTIVE_SELECTOR));
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const tick = () => {
      ringRef.current = {
        x: lerp(ringRef.current.x, pointer.current.x, 0.14),
        y: lerp(ringRef.current.y, pointer.current.y, 0.14),
      };
      setRing(ringRef.current);
      setDot(pointer.current);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frameRef.current);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!active) return null;

  const ringSize = hovering ? 52 : 36;
  const dotSize = clicking ? 4 : hovering ? 6 : 5;

  return (
    <>
      <div
        aria-hidden
        className={`custom-cursor-ring ${hovering ? "is-hover" : ""} ${clicking ? "is-click" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`,
          width: ringSize,
          height: ringSize,
        }}
      />
      <div
        aria-hidden
        className={`custom-cursor-dot ${hovering ? "is-hover" : ""} ${clicking ? "is-click" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`,
          width: dotSize,
          height: dotSize,
        }}
      />
    </>
  );
}
