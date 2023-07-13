import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      const cursorDot = document.querySelector("[data-cursor-dot]");
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      const cursorOutline = document.querySelector("[data-cursor-outline]");
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className=".cursor-dot " data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </div>
  );
};

export default Cursor;
