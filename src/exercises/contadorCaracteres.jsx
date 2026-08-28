import { useState } from "react";

function ContarCaracteres() {
  const [oracion, setOracion] = useState("");

  const caracteres = oracion
    .split("")
    .filter((caracter) => caracter !== " ")
    .join("").length;

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.35)] backdrop-blur sm:p-8">
      <div className="space-y-3">
        <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Texto
        </span>
        <h2 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
          Contador de caracteres
        </h2>
        <p className="max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
          Introduzca su oracion para saber cuantos caracteres tiene, sin contar
          los espacios.
        </p>
      </div>

      <label className="space-y-3">
        <span className="text-sm font-medium text-stone-700">
          Escriba su oracion
        </span>
        <input
          className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-base text-stone-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          type="text"
          value={oracion}
          onChange={(e) => setOracion(e.target.value)}
          placeholder="Ejemplo: Hola mundo"
        />
      </label>

      <div className="flex items-end justify-between gap-4 rounded-3xl bg-stone-900 px-5 py-5 text-stone-50">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Resultado
          </p>
          <p className="text-sm text-stone-300">
            Caracteres sin espacios ingresados
          </p>
        </div>
        <h3 className="text-4xl font-black leading-none text-emerald-300 sm:text-5xl">
          {caracteres}
        </h3>
      </div>
    </div>
  );
}

export default ContarCaracteres;
