import { Matrix } from "./matriz.js";

let currentItemId = "00";

document.addEventListener("DOMContentLoaded", function () {
  const matrixContainer = document.getElementById("matrix-container");
  const selectedCard = document.getElementById("selected-card");

  const matrix = new Matrix();
  const celdas = matrix.celdas;

  for (let i = 0; i < celdas.length; i++) {
    for (let j = 0; j < celdas[i].length; j++) {
      const square = document.createElement("div");
      square.id = `${i}${j}`;
      square.classList.add("matrix-square");
      square.textContent = i * 10 + (j + 1);

      square.addEventListener("click", function () {
        const selectedData = celdas[i][j];
        const previousItem = document.getElementById(currentItemId);
        currentItemId = `${i}${j}`;
        previousItem.classList.remove("matrix-square-selected");
        const currentItem = document.getElementById(`${i}${j}`);
        currentItem.classList.add("matrix-square-selected");
        updateCard(selectedData);
      });

      updateCard(celdas[0][0]);

      matrixContainer.appendChild(square);
    }
  }

  function updateCard(selectedData) {
    const cardImage = selectedCard.querySelector(".card-image");
    const cardParagraph = selectedCard.querySelector(".card-paragraph");

    cardImage.src = selectedData.imagen;
    cardParagraph.textContent = selectedData.parrafo;
  }
});
