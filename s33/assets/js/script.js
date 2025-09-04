let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

console.log(mainTitle.innerText);

mainTitle.innerText = "TITULO CAMBIADO";
console.log(mainTitle.innerText);

console.log("SELECCIONAR POR CLASE");

let mainText = document.getElementsByClassName("main-text");
console.log(mainText);

console.log(mainText[0].innerText);
console.log(mainText[2].innerText);

mainText[1].innerText = "lorem";

console.log("SELECCIONAR POR ETIQUETA");
let title = document.getElementsByTagName("h3");
console.log(title);
console.log(title[2].innerText);

console.log("SELECCIONAR POR SINTASIS CSS - QUERY-SELECTOR");

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);
