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
//includes(x) -> preguntar si x es un elemento del array. Retorna un buleano
console.log(fruits.indexOf("naranja")); // 1
console.log(fruits.indexOf("kiwi")); // -1

console.log("join");
//join() -> toma todos los elementos del array y los junta en una string. por defecto usa el caracter coma (",") pero opcionalmente podemos incdicar el caracter que queremos usar.
console.log(fruits.join());
console.log(fruits.join("/"));
console.log(fruits.join("#"));
console.log(fruits.join("*"));

console.log("----------------------------------------------------------");

fruits = ["manzana", "naranja", "pera", "mango"];
console.log(fruits);

console.log("slice");
//slice(inicio, fin)-> retorna una copia del arreglo (no modifica el arreglo original). Corta desde el indice "inicio". opcionalmente se le puede indicar el indice de "fin", este indice es exclusivo. si no se le indica el fin, por defecto corta hasta el final.

//corta el arreglo desde el indice 2 hasta el final
console.log(fruits.slice(2));

//corta el arreglo desde el indice 2 hasta el 4, sin tomar este ultimo.
console.log(fruits.slice(2, 4));

console.log("splice");
//splice(inicio, cantidad, nuevos elementos...) -> modifica el arreglo original. desde "inicio" se eliminan la "cantidad" de elementos indicados.

//corta hasta el indice 2 exclusivo
// fruits.splice(2);
// console.log(fruits);

//desde el indice 2, elimina dos elementos
// fruits.splice(2, 2);
// console.log(fruits);

// desde el indice 2, elimina dos elementos y desde esa misma posicion agrega los nuevos elementos 
fruits.splice(2, 2, "sandia", "kiwi", "arandano");
console.log(fruits);

console.log("----------------------------------------------------------");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

console.log("map");

let numsMap = nums.map((x) => x + 3);
console.log(numsMap);

//multliplica los elementos por x
console.log(nums.map((x) => x * 10));

//mostrar strings
console.log(nums.map((x) => `numero ${x}`));

console.log("filter");

let filteredNums = nums.filter((x) => x > 5);
console.log(filteredNums);

console.log(nums.filter((x) => x < 6 ));

console.log(nums.filter((x) => x % 2 === 0));

console.log("reduce");

console.log(nums.reduce((a, b) => a + b, 0));

console.log(nums.reduce((a, b) => a * b, 1));

console.log("----------------------------------------------------------");

