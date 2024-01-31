import { Matrix } from "./matriz.js";

// const matrix = new Matrix();
// const celdas = matrix.celdas;
// console.log(celdas);

// const matrixContainer = document.getElementById("matrix-container");

// // Crea la tabla y agrega las filas y celdas
// const table = document.createElement("div");
// const tbody = document.createElement("div");

// // Recorre las filas de la matriz
// for (let i = 0; i < 12; i++) {
//   // Crea una fila
//   const row = document.createElement("div");
//   row.className = "row justify-content-center";

//   for (let j = 0; j < 10; j++) {
//     // Crea una celda en cada fila
//     const cell = document.createElement("div");
//     cell.className = "col-md-auto celda";
//     const img = document.createElement("img");
//     img.src = celdas[i][j].imagen;
//     img.alt = "Imagen";
//     img.className = "card-img-top";
//     const paragraph = document.createElement("p");
//     paragraph.textContent = celdas[i][j].parrafo;
//     paragraph.className = "card-text texto-matriz";

//     const card = document.createElement("div");
//     card.style = "width: 6rem;";

//     const cardBody = document.createElement("div");
//     cardBody.classList = "card-body";

//     // Agrega la imagen y el párrafo a la celda
//     card.appendChild(img);
//     card.appendChild(paragraph);
//     cell.appendChild(card);
//     // Agrega la celda a la fila
//     row.appendChild(cell);
//   }

//   // Agrega la fila al tbody
//   tbody.appendChild(row);
// }

// // Agrega el tbody a la tabla
// table.appendChild(tbody);

// // Agrega la tabla al contenedor
// matrixContainer.appendChild(table);
