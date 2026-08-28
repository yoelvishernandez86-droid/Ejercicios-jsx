import { useState } from "react";

function Calculadora() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <div
      id="valores"
      className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 rounded-3xl bg-slate-900/95 p-8 text-white shadow-2xl"
    >
      <h1 className="text-center text-3xl font-bold tracking-tight text-cyan-400">
        Calculadora
      </h1>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-2 text-base text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-2 text-base text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-center shadow-inner">
        <p className="mb-1 text-sm uppercase tracking-[0.2em] text-slate-400">
          Resultado
        </p>
        <h2 className="break-words text-2xl font-bold text-white">
          {resultado}
        </h2>
      </div>

      <div id="botones" className="grid grid-cols-2 gap-3">
        <>
          <button
            onClick={() => setResultado(valor1 + valor2)}
            className="rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-[0.98]"
          >
            Sumar
          </button>

          <button
            onClick={() => setResultado(valor1 - valor2)}
            className="rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            Restar
          </button>

          <button
            onClick={() => setResultado(valor1 * valor2)}
            className="rounded-2xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 active:scale-[0.98]"
          >
            Multiplicar
          </button>

          <button
            onClick={() =>
              setResultado(
                valor2 !== 0
                  ? valor1 / valor2
                  : "No se puede dividir entre cero",
              )
            }
            className="rounded-2xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-400 active:scale-[0.98]"
          >
            Dividir
          </button>
        </>
      </div>
    </div>
  );
}

export default Calculadora;
