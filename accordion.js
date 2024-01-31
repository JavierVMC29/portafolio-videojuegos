const ideasList = document.getElementById("ideas-list");

const Accordion = (title, content) => {
  return `
  <li>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header">${title}</div>
      <div class="accordion-content">
       ${content}
      </div>
    </div>
  </div>
  </li>
`;
};

const ideas = [
  {
    title: "Idea 1",
    content:
      "Es un juego 2D donde un ladrón tiene que escapar de los guardias para hacerlo. No debe ser visto, puede trepar paredes o esconderse. Los guardias tienen linternas, y si lo notan, lo llevarán a la cárcel de nuevo.",
  },
  {
    title: "Idea 2",
    content:
      "Una persona intenta llegar a salvo del peligro que presentan los diferentes puntos de fuego en donde se están quemando los monigotes.",
  },
  {
    title: "Idea 3",
    content:
      "Un ladrón deberá escapar de un museo abandonado luego de despertar un sapo mitológico al robar una reliquia.",
  },
  {
    title: "Idea 4",
    content:
      "Los jugadores tomarán el control de una pareja de casados que se odian por igual. Ambos quieren deshacerse del otro y usan sus bodas de oro como excusa para acabar con la vida del otro.",
  },
  {
    title: "Idea 5",
    content:
      "Estas en una casa en el bosque y tu celular se daño, debes repararlo para pedir ayuda. Hay un perro monstruo que entrara a tu casa a buscarte, debes esconderte de el puesto que si te encuentra te matara.",
  },
  {
    title: "Idea 6",
    content:
      "Un autobus da vueltas por la espol eternamente, debes sobrevivir ordas de zombies. Hay armas y municion exparsidos por la universidad",
  },
  {
    title: "Idea 7",
    content:
      "Juego en tercera persona casual simulador de choreo en busetas, es un simulador que tiene como objetivo identificar actividades sospechosas de delitos en Ecuador, el jugador debe tomar decisiones acertadas para identificar quien es el ladrón sin cometer errores, esto antes de que el ladrón logre ejecutar el delito.",
  },
  {
    title: "Idea 8",
    content:
      "Un tiburón experto en artes marciales deberá enfrentarse a los peligros del mar para proteger a los nadadores locales.",
  },
  {
    title: "Idea 9",
    content:
      "Juego en 3d, es un laberinto que se repite en bucle, hasta que el jugador logra resolver una serie de acertijos y escapar",
  },
  {
    title: "Idea 10",
    content:
      "Es un juego en 2d de una prision en medio de un lago, el jugador es un prisionero que debe evitar el campo de vision de las luces para poder escapar del lago.",
  },
];

ideas.forEach((idea) => {
  ideasList.innerHTML += Accordion(idea.title, idea.content);
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");
      content.classList.toggle("show");
    });
  });
});
