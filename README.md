# Plantilla de ejercicios React

Proyecto preparado con React, Vite, JavaScript y Tailwind CSS 4. La pantalla
principal tiene una lista lateral y un área donde se renderiza el componente
del ejercicio seleccionado.

## Crear un ejercicio

1. Crea un componente en `src/exercises/`, por ejemplo `MiEjercicio.jsx`.
2. Importa el componente y agrégalo al arreglo `exerciseDefinitions` en
   `src/exercises/index.js`:

```js
import MiEjercicio from "./MiEjercicio";

export const exerciseDefinitions = [
  {
    id: "mi-ejercicio",
    title: "Mi ejercicio",
    description: "Descripción corta",
    component: MiEjercicio,
  },
];
```

3. Ejecuta `npm run dev` y abre la URL que indique Vite.

El componente del ejercicio no necesita recibir props para aparecer en el
área de trabajo. Puedes añadir tantos objetos al registro como necesites.

## Comandos

- `npm run dev`: servidor de desarrollo.
- `npm run build`: compilación de producción.
- `npm run lint`: revisión de ESLint.
