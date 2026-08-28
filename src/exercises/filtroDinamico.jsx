import { useState } from "react";

function FiltroDinamico() {
  const [lista, setLista] = useState([
    "oso",
    "gallo",
    "perro",
    "cangrejo",
    "serpiente",
    "elefante",
    "tigre",
    "jirafa",
    "mamut",
    "tortuga",
    "ciempies",
    "mono",
    "gato",
  ]);
  const sonIguales = (palabraA, palabraB) => {
    return palabraB.toLowerCase().startsWith(palabraA.trim().toLowerCase());
  };
  const [filtro, setFiltro] = useState("");
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-3xl border border-stone-200 bg-white/85 p-6 shadow-[0_18px_45px_-24px_rgba(41,37,36,0.35)] backdrop-blur-sm sm:p-8">
      <input
        className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul className="grid gap-3">
        {filtro !== ""
          ? lista
              .filter((elemento) => sonIguales(filtro, elemento))
              .map((elemento) => (
                <li
                  className="rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-50 to-emerald-50 px-4 py-3 text-sm font-medium tracking-wide text-stone-700 shadow-sm"
                  key={elemento}
                >
                  {elemento}
                </li>
              ))
          : lista.map((elemento) => (
              <li
                className="rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-50 to-emerald-50 px-4 py-3 text-sm font-medium tracking-wide text-stone-700 shadow-sm"
                key={elemento}
              >
                {elemento}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default FiltroDinamico;
