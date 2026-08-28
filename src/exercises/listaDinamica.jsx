import { useState } from "react";

function ListaDinamica() {
  const [lista, setlista] = useState([]);
  const [contenido, setContenido] = useState("");
  const [mensaje, setMensaje] = useState("");

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
      },
    ]);

    setMensaje("");
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
          Lista dinámica
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Agrega elementos a tu lista y elimínalos cuando quieras.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="w-full">
          <input
            id="añadirTarea"
            type="text"
            value={contenido}
            onChange={(e) => {
              setContenido(e.target.value);
            }}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          {mensaje !== "" && (
            <div className="mt-2 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">
              {mensaje}
            </div>
          )}
        </div>

        <button
          className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200"
          onClick={handleAñadir}
        >
          Añadir elemento
        </button>
      </div>

      {lista.length === 0 ? (
        <h4 className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-lg font-semibold tracking-tight text-slate-500">
          Crea tu primer elemento
        </h4>
      ) : (
        <ul className="space-y-3">
          {lista.map((elemento) => (
            <li
              key={elemento.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <span className="break-words text-slate-800">
                {elemento.texto}
              </span>

              <button
                onClick={() =>
                  setlista(
                    lista.filter(
                      (elementoLista) => elementoLista.id !== elemento.id,
                    ),
                  )
                }
                className="shrink-0 rounded-xl border border-red-200 bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-100"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDinamica;
