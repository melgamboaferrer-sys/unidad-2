//METODOS DE ARRAYS

let fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);

console.log("push");
//push(x) -> agrega el elemento al final del array
fruits.push("fresa");
console.log(fruits);

console.log("pop");
//pop()-> elimina el ultimo elemento del array y lo retorna
fruits.pop();
console.log(fruits);

console.log("unshift");
//unshift(x) -> agrega el elemento al inicio del array
fruits.unshift("uva");
console.log(fruits);

console.log("shift");
//shift() -> elimina el primer elemento del array y lo retorna
let delateditem = fruits.shift();
console.log(`elemento eliminado con shift: ${delateditem}`);
console.log(fruits);

console.log("includes");
//includes(x) -> preguntar si x es un elemento del array0. Retorna un buleano
console.log(fruits.includes("naranja")); //true
console.log(fruits.includes("kiwi")); //false

console.log("indexOf");
//includes(x) -> preguntar si x es un elemento del array0. Retorna un buleano
console.log(fruits.indexOf("naranja")); // 1
console.log(fruits.indexOf("kiwi")); // -1