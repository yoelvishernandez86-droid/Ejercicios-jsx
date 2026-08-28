import { useState } from "react";

const ContraseñaAleatoria = () => {
  const [longitud, setLongitud] = useState(4);
  const [contraseña, setContraseña] = useState("");

  function generarCodigo(longitud) {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!·$%&/()=?¿|@#~€¬";

    let nuevaContraseña = "";

    for (let i = 0; i < longitud; i++) {
      const posicion = Math.floor(Math.random() * caracteres.length);

      nuevaContraseña += caracteres[posicion];
    }

    return nuevaContraseña;
  }

  const manejarGenerar = () => {
    if (longitud < 4) {
      alert(
        "No se puede generar la contraseña. Debe tener al menos 4 caracteres.",
      );

      return;
    }

    const nuevaContraseña = generarCodigo(longitud);

    setContraseña(nuevaContraseña);
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
          Seguridad simple
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Generador de contraseñas aleatorias
        </h2>
        <p className="text-sm text-slate-500">
          Elige la longitud y crea una contraseña con letras, números y
          símbolos.
        </p>
      </div>

      <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Longitud de la contraseña
          </span>
          <input
            type="number"
            min="4"
            value={longitud}
            onChange={(e) => setLongitud(Number(e.target.value))}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-100"
          />
          <span className="mt-2 block text-xs text-slate-500">
            Mínimo 4 caracteres.
          </span>
        </label>

        <button
          onClick={manejarGenerar}
          className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 active:scale-[0.98]"
        >
          Generar contraseña
        </button>
      </div>

      <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-fuchsia-950 px-6 py-6 text-white shadow-inner shadow-fuchsia-500/10">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-fuchsia-200/80">
          Resultado
        </p>
        <h3 className="mb-2 text-lg font-semibold text-white">
          Tu contraseña generada
        </h3>
        <p className="break-all rounded-2xl border border-white/10 bg-white/5 px-4 py-4 font-mono text-lg tracking-[0.12em] text-fuchsia-100">
          {contraseña || "Aun no has generado ninguna contraseña"}
        </p>
      </div>
    </div>
  );
};

export default ContraseñaAleatoria;
