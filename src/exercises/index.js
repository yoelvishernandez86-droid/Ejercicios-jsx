import CambioColor from "./cambioColor.jsx";
import ContadorClics from "./contadorClicks.jsx";
import ListaDimanica from "./listaDinamica.jsx";
import FiltroDinamico from "./filtroDinamico.jsx";
import Calculadora from "./calculadora.jsx";
import Temporizador from "./temporizador.jsx";
import ContraseñaAleatoria from "./contraseñaAleatoria.jsx";
import ContarCaracteres from "./contadorCaracteres.jsx";
import ListaLocalStorage from "./listaLocalStorage.jsx";

export const exerciseDefinitions = [
  {
    id: "cambiar-color",
    title: "Cambiar color",
    description:
      "Practicar eventos en JavaScript y manipulación de estilos del DOM",
    component: CambioColor,
  },
  {
    id: "contador-clics",
    title: "Contador clics",
    description:
      " Practicar el manejo de eventos y la actualización del contenido del DOM",
    component: ContadorClics,
  },
  {
    id: "lista-dinamica",
    title: "Lista Dinámica",
    description:
      "Trabajar con la creación, eliminación y manipulación de elementos del DOM",
    component: ListaDimanica,
  },
  {
    id: "filtro-dinamico",
    title: "Filtro Dinámico",
    description:
      "Practicar la interacción entre eventos del DOM y lógica en JavaScript",
    component: FiltroDinamico,
  },
  {
    id: "calculadora",
    title: "Calculadora",
    description:
      "Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript",
    component: Calculadora,
  },
  {
    id: "temporizador",
    title: "Temporizador",
    description:
      "Practicar manejo de eventos, funciones de temporización y manipulación del DOM",
    component: Temporizador,
  },
  {
    id: "contraseñaAleatoria",
    title: "ContraseñaAleatoria",
    description:
      "Practicar generación de cadenas aleatorias y uso de formularios",
    component: ContraseñaAleatoria,
  },
  {
    id: "contarCaracteres",
    title: "ContarCaracteres",
    description:
      "Practicar eventos en tiempo real y manipulación avanzada del DOM",
    component: ContarCaracteres,
  },
  {
    id: "listaLocalStorage",
    title: "ListaLocalStorage",
    description: "Practicar persistencia de datos con localStorage",
    component: ListaLocalStorage,
  },
];
