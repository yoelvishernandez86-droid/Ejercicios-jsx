import { useState, useEffect, useRef } from "react";

function CambioColor() {
  const [color, setColor] = useState("rgb(255,255,255)");
  const panelRef = useRef(null);

  useEffect(() => {
    panelRef.current.style.backgroundColor = color;
  }, [color]);

  const colorAleatorio = () => `rgb(
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)}
)`;

  return (
    <div className="color-panel" ref={panelRef}>
      <button
        className="color-button"
        onClick={() => {
          setColor(colorAleatorio());
        }}
      >
        ¡Cambiar Color!
      </button>
    </div>
  );
}

export default CambioColor;
