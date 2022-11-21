import { useEffect } from "react";

type TUseScroll = (p: { ref: HTMLDivElement }) => {
  pos: { top: number; left: number; x: number; y: number };
};
const useScroll: TUseScroll = ({ ref }) => {
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  useEffect(() => {
    if (process.browser && !!ref) {
      const mouseMove = (e: globalThis.MouseEvent) => {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        ref.scrollTop = pos.top - dy;
        ref.scrollLeft = pos.left - dx;
      };
      const mouseUp = (e: globalThis.MouseEvent) => {
        ref.style.cursor = "default";
        ref.removeEventListener("mousemove", mouseMove);
      };

      const mouseDown = (e: globalThis.MouseEvent) => {
        if (ref.scrollWidth > ref.clientWidth) {
          ref.style.cursor = "grabbing";
        }
        pos = {
          left: ref.scrollLeft,
          top: ref.scrollTop,
          x: e.clientX,
          y: e.clientY,
        };
        ref.addEventListener("mousemove", mouseMove);
      };

      ref.addEventListener("mousedown", mouseDown);
      ref.addEventListener("mouseup", mouseUp);
    }
  }, [ref?.scrollWidth]);

  return { pos };
};

export default useScroll;
