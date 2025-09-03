/*
Un objeto es la abstraccion de un concepto de la vida real, a la programación.

Sintaxis:

let nombreObjeto = {
    atributo1: "Valor del atributo 1",
    "atributo2": "Valor del atributo 2",
    ...
}

Los nombres de los atributos van como variables. Opcionalmente pueden ir entre comillas.

Los valores pueden tomar cualquier tipo de dato como los primitivos, pero tambien pueden ser estructuras de datos, como un array o tambien pueden ser otro objeto.

Los objetos NO SON ordenados, no son indexables, pero si son iterables.
*/
// Ejemplo
// Creamos un objeto de Persona
let person = {
  nombre: "Valeria",
  edad: 24,
  cellphone: "987654321", // El tipo de dato apropiado para un numero de telefono es string
};

console.log(person);
// Acceder a los atributos
// Notacion de punto -> nombreObjeto.nombreAtributo
console.log(person.nombre);
// Notacion de corchetes -> nombreObjeto["nombreAtributo"]
console.log(person["edad"]);
console.log(person.cellphone);

// Reto 1
// Crea tu objeto person y agrega un atributo más, luego muestra uno por uno en consola.

// Agregar atributos, simplemente asignas un valor a un nuevo atributo con la notacion de punto o corchetes (como si ya existiera)
// nombreObjeto.nombreNuevoAtributo = "Valor";
person.hobbies = ["Programar", "Armar el cubo de Rubik", "Decir chistes malos"];

// Actualizar el valor de un atributo
// nombreObjeto.nombreAtributo = "Nuevo valor";
person.cellphone = "123456789";

console.log(person);

// Reto 2
// Agregar el atributo de hobbies (al menos 3 elementos) y actualizar cualquier otro atributo

// Esta no es la manera correcta de duplicar un objeto. Usa referencias de memoria en lugar de solo copiar datos.
// let person2 = person;

// Esta es la forma correcta de SOLO COPIAR LOS DATOS de un objeto a otro sin que se mantengan vinculados.
let person2 = { ...person }; // Destructuracion

person2.nombre = "Andy";
person2.edad = 26;
console.log("PERSONA 2");
console.log(person2);

console.log("PERSONA 1");
console.log(person);

// PRACTICA
let heroes = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log("=== ACCEDIENDO A DATOS ===");
console.log(heroes.homeTown);
console.log(heroes.active);
// ESTO ES UN ARREGLO
console.log(heroes.members);
// ESTO ES UN OBJETO
console.log(heroes.members[0]);
// ESTO ES EL ATRIBUTO DE UN OBJETO
console.log(heroes.members[0].name);
// ESTO ES UN ARREGLO
console.log(heroes.members[0].powers);
// ESTO ES UN ELEMENTO DEL ARREGLO
console.log(heroes.members[0].powers[2]);

/*
Reto 3
Mostrar los siguientes datos accediendo al objeto:
    - Madame Uppercut
    - Superhuman reflexes
    - Interdimensional travel
*/
console.log(heroes.members[1].name);
console.log(heroes.members[1].powers[2]);
console.log(heroes.members[2].powers[4]);
