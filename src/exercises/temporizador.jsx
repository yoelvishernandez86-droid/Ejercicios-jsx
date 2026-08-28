import { useEffect, useState } from "react";

function Temporizador() {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setTiempo((tiempoAnterior) => tiempoAnterior + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [activo]);

  const horas = Math.floor(tiempo / 3600);
  const minutos = Math.floor((tiempo % 3600) / 60);
  const segundos = tiempo % 60;

  const iniciar = () => {
    setActivo(true);
  };
  const pausar = () => {
    setActivo(false);
  };
  const reiniciar = () => {
    setActivo(false);
    setTiempo(0);
  };

  const tiempoFormateado = [horas, minutos, segundos]
    .map((valor) => String(valor).padStart(2, "0"))
    .join(":");

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
          Control de tiempo
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Temporizador
        </h2>
        <p className="text-sm text-slate-500">
          Inicia, pausa o reinicia el contador cuando quieras.
        </p>
      </div>

      <div className="rounded-[1.75rem] bg-slate-950 px-6 py-8 text-center shadow-inner shadow-cyan-500/10">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-slate-400">
          Tiempo transcurrido
        </p>
        <h3 className="font-mono text-4xl font-bold tracking-[0.18em] text-cyan-400 sm:text-5xl">
          {tiempoFormateado}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          onClick={iniciar}
          className="rounded-2xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 active:scale-[0.98]"
        >
          Iniciar
        </button>
        <button
          onClick={pausar}
          className="rounded-2xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-100 active:scale-[0.98]"
        >
          Pausar
        </button>
        <button
          onClick={reiniciar}
          className="rounded-2xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-100 active:scale-[0.98]"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Temporizador;
