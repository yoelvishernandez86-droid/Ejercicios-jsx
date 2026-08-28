import { useEffect, useState } from "react";

function ListaLocalStorage() {
  const [lista, setlista] = useState(
    JSON.parse(localStorage.getItem("listaLocalStorage")) ?? [],
  );
  const [contenido, setContenido] = useState("");
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    localStorage.setItem("listaLocalStorage", JSON.stringify(lista));
  }, [lista]);
  const handleAñadir = () => {
    if (contenido.trim() === "") {
      setMensaje("Debes escribir algo para poder añadirlo");
      return;
    }

    setlista([
      ...lista,
      {
        id: crypto.randomUUID(),
        texto: contenido,
        completada: false,
      },
    ]);
    setMensaje("");
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-emerald-50 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] sm:rounded-[2rem]">
      <div className="border-b border-slate-200/70 px-4 py-6 sm:px-8 sm:py-7">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-700 sm:text-xs">
          Local Storage
        </span>

        <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Lista dinámica
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Agrega elementos a tu lista, márcalos cuando estén listos y conserva
          el contenido aunque recargues la página.
        </p>
      </div>

      <div className="px-4 py-5 sm:px-8 sm:py-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="w-full">
            <label
              htmlFor="añadirTarea"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Nuevo elemento
            </label>
          <input
            id="añadirTarea"
            type="text"
            value={contenido}
            onChange={(e) => {
              setContenido(e.target.value);
            }}
            placeholder="Escribe una tarea, compra o recordatorio..."
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />

          {mensaje !== "" && (
            <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {mensaje}
            </div>
          )}
        </div>

        <button
          className="w-full rounded-2xl bg-slate-900 px-5 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 sm:w-auto"
          onClick={handleAñadir}
        >
          Añadir elemento
        </button>
      </div>

      {lista.length === 0 ? (
        <div className="rounded-[1.4rem] border border-dashed border-slate-300 bg-white/70 px-4 py-10 text-center sm:rounded-[1.75rem] sm:px-6 sm:py-12">
          <h4 className="text-lg font-bold tracking-tight text-slate-700">
            Crea tu primer elemento
          </h4>
          <p className="mt-2 text-sm text-slate-500">
            Todo lo que agregues aquí se guardará automáticamente.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {lista.map((elemento) => (
            <li
              key={elemento.id}
              className={`flex flex-col gap-4 rounded-[1.25rem] border px-4 py-4 shadow-sm transition sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.5rem] ${
                elemento.completado
                  ? "border-emerald-200 bg-emerald-50/80"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span
                className={`flex-1 break-words text-base font-medium ${
                  elemento.completado
                    ? "text-emerald-800 line-through decoration-2"
                    : "text-slate-800"
                }`}
              >
                {elemento.texto}
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <input
                    type="checkbox"
                    checked={elemento.completado}
                    onChange={(e) => {
                      setlista(
                        lista.map((elementoLista) =>
                          elementoLista.id === elemento.id
                            ? {
                                ...elementoLista,
                                completado: e.target.checked,
                              }
                            : elementoLista,
                        ),
                      );
                    }}
                    className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-200"
                  />
                  Completada
                </label>

                <button
                  onClick={() =>
                    setlista(
                      lista.filter(
                        (elementoLista) => elementoLista.id !== elemento.id,
                      ),
                    )
                  }
                  className="w-full shrink-0 rounded-xl border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100 sm:w-auto"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default ListaLocalStorage;
