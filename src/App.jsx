import { useState } from "react";
import { exerciseDefinitions } from "./exercises";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState(
    exerciseDefinitions[0]?.id ?? null,
  );
  const selectedExercise = exerciseDefinitions.find(
    (exercise) => exercise.id === selectedId,
  );
  const SelectedExercise = selectedExercise?.component;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">React / práctica</p>
          <h1>Ejercicios JSX</h1>
        </div>
        <span className="exercise-count">
          {exerciseDefinitions.length} ejercicios
        </span>
      </header>

      <main className="workspace">
        <aside className="exercise-sidebar" aria-label="Lista de ejercicios">
          <div className="sidebar-heading">
            <span>Ejercicios</span>
            <span className="sidebar-index">{exerciseDefinitions.length}</span>
          </div>

          {exerciseDefinitions.length > 0 ? (
            <nav>
              {exerciseDefinitions.map((exercise, index) => (
                <button
                  className={`exercise-link ${selectedId === exercise.id ? "is-active" : ""}`}
                  key={exercise.id}
                  onClick={() => setSelectedId(exercise.id)}
                  type="button"
                >
                  <span className="exercise-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{exercise.title}</strong>
                    <small>{exercise.description}</small>
                  </span>
                </button>
              ))}
            </nav>
          ) : (
            <p className="empty-sidebar"></p>
          )}
        </aside>

        <section className="exercise-panel" aria-live="polite">
          {SelectedExercise ? (
            <>
              <div className="panel-heading">
                <div>
                  <p className="eyebrow">Ejercicio seleccionado</p>
                  <h2>{selectedExercise.title}</h2>
                </div>
                <span className="panel-tag">JSX</span>
              </div>
              <div className="exercise-stage">
                <SelectedExercise />
              </div>
            </>
          ) : (
            <div className="welcome-state">
              <span className="welcome-mark">{"< />"}</span>
              <p className="eyebrow">Área de trabajo</p>
              <h2>El próximo ejercicio empieza aquí</h2>
              <p>
                Crea un componente dentro de <code>src/exercises</code> y
                añádelo al registro para verlo en esta pantalla.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <span>Plantilla de práctica</span>
        <span>Vite + React + Tailwind</span>
      </footer>
    </div>
  );
}

export default App;
