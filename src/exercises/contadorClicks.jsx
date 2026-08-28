import { useState } from "react";

function ContadorClics() {
  const [clics, setClics] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">
        ¡Llevas {clics} {clics == 1 ? "clic" : "clics"} ... sigue así!
      </h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => {
          setClics(clics + 1);
        }}
      >
        ¡Clic!
      </button>
    </div>
  );
}

export default ContadorClics;
