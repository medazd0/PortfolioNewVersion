import { useEffect } from "react";

export default function useDisableZoom() {
  useEffect(() => {
    // Empêcher zoom clavier (Ctrl/Cmd + + - 0)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "=" || e.key === "-" || e.key === "+" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    // Empêcher zoom scroll (Ctrl + molette)
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Désactiver pinch zoom sur mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
}
