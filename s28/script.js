/*
Condicionales -> Es una ESTRUCTURA DE CONTROL que evalua una condicion y dependiendo del resultado ejecuta cierto bloque de codigo.

Sentencia if

if -> Palabra reservada para indicar una estructura condicional. Podemos traducir if como si (sin tilde), que pasaria si...

Sintaxis

if (condicion) {
    // Bloque de codigo a ejecutar si la condicion se cumple
}

1. Palabra reservada "if".
2. Colocar la condicion entre parentesis.
3. Abrir llaves
4. Colocar el codigo a ejecutar
5. NO OLVIDES CERRAR LAS LLAVES

Ejemplo incial:
Crea un programa que analice un nombre y si el nombre es largo, muestra un mensaje. Para considerar un nombre como largo, debe tener mas de 7 caracteres.
*/
// Resolucion del ejemplo inicial propuesto
let name = "Michelle";

console.log("ANTES DE MI CONDICIONAL");

if (name.length > 7) {
    // TODO LO QUE VA DENTRO DE LAS LLAVES, ES EL BLOQUE DE CODIGO QUE SE VA A EJECUTAR SOLO SI MI CONDICION EVALUADA ES TRUE
    console.log("Que nombre tan largo tienes!");
}

console.log("DESPUES DE MI CONDICIONAL");

console.log("Reto 1");
// Reto 1
// Crea un programa que analice un nombre y si el nombre es corto, muestra un mensaje. Para considerar un nombre como corto, debe tener menos de 5 caracteres.
name = "Michelle";

if (name.length < 5) {
    console.log("Que nombre tan corto tienes!");
}

/*
else -> Es la sentencia que me indica el codigo a ejecutar si no se cumple la condicion (NINGUNA DE LAS CONDICIONES). Depende de if, NO PUEDE IR SOLO. "else" se puede traducir como "si no...".

if (condicion) {
    // Bloque de codigo a ejecutar si la condicion se cumple
} else {
    // Bloque de codigo a ejecutar si la condicion no se cumple    
}

Ejemplo de uso:
Crea un programa donde indiques si una persona es o no mayor de edad.
*/
let age = 17;

if (age >= 18) {
    // Bloque de codigo a ejecutar si la condicion se cumple
    console.log("Esta persona es mayor de edad");
} else {
    // Bloque de codigo a ejecutar si la condicion no se cumple
    console.log("Esta persona es menor de edad");
}

/*
else if... -> Me permite hacer otra pregunta (evaluar otra condicion) entre if y else.

if (condicion) {
    // Bloque de codigo a ejecutar si la condicion se cumple
} else if (otra condicion) {
     // Bloque de codigo a ejecutar si la otra condicion se cumple
} else if (otra condicion) {
     // Bloque de codigo a ejecutar si la otra condicion se cumple
// PUEDES PONER TODOS LOS ELSE IF QUE QUIERAS
} else {
    // Bloque de codigo a ejecutar si ninguna de las condiciones no se cumplen
}

1. Siempre empezar con if, este es el unico obligatorio.
2. El orden siempres es:
    a. if
    b. else if (todos los que quieras)
    c. else
*/

// Reto 2
// Crea un programa que compare dos numeros y devuelva cual es el mayor
let num1 = 27;
let num2 = 27;

console.log(`Primer numero -> ${num1}`);
console.log(`Segundo numero -> ${num2}`);

if (num1 > num2) {
    console.log("El primer numero es el mayor.");
} else if (num2 < num1) {
    console.log("El segundo numero es el mayor.");
} else {
    console.log("Ambos numeros son iguales.");
}

console.log("ANIDACION");
// Anidación -> Consiste en colocar una estructura dentro de otra
// Vamos a verlo con un ejemplo (Este ejemplo es muy poco optimo pero nos sirve para fines didacticos)
// Crea un programa donde indiques si una persona es o no mayor de edad. Toma en cuenta si esta persona vive o no en Estados Unidos.

age = 21;
let isAmerican = true;

console.log(`Edad -> ${age}`);
console.log(`Es americano? -> ${isAmerican}`);

if (age >= 18) {
    if (isAmerican) {
        if (age >= 21) {
            console.log("Esta persona es mayor de edad");
        } else {
            console.log("Esta persona es menor de edad");
        }
    } else {
        console.log("Esta persona es mayor de edad");
    }
} else {
    console.log("Esta persona es menor de edad");
}

console.log("Switch Case");
/*
Switch -> Es una sentencia condicional que me permite evaluar distintos valores para un dato.

Sintaxis

switch (expresion) {
    case valor1:
        // Codigo si la expresion toma el valor1
        // Luego del codigo "rompemos" la condicion
        break;
    case valor2:
        // Codigo si la expresion toma el valor2
        break;
    case valor3:
        // Codigo si la expresion toma el valor3
        break;
    default:
        // Codigo si no hubo ninguna coincidencia de valores
}
*/
// Ejemplo:
// Mostrar el nombre del mes en base a un numero dado
let monthNumber = 1;

switch (monthNumber) {
    // Comparamos valores
    case 1:
        // Codigo a ejecutar si el valor de la variable monthNumber es 1
        console.log("Enero");
        // No olvides siempre agregar break
        break;
    case 2:
        console.log("Febrero");
        break;
    default:
        console.log("Valor no valido.");
}

// Reto 3
// Crea un programa que muestre el nombre de un dia de la semana en base a un numero ingresado. 1. Domingo, 2.Lunes, ...
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miercoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sabado");
        break;
    default:
        console.log("Valor no valido.");
}

// Ahora hacemos lo contrario
let dayName = 'LuNeS';

switch (dayName.toLowerCase()) {
    case 'domingo':
        console.log(1);
        break;
    case 'lunes':
        console.log(2);
        break;
    default:
        console.log("No se puede determinar un numero para ese dia");
}

console.log("OPERADOR TERNARIO");

/*OPERADOR TERNARIO
Es una forma mas corta de escribir una condicion if else, ademas de hacerlo en una sola linea

Sintaxis:

condicion ? valorSiEsVerdad : valorSiEsFalso
*/

age = 20;
console.log(`Edad ->  ${age}`);

/*
let mensaje = 'assdfasdhas';

if (age >= 18) {
    mensaje = "Mayor de edad";
} else {
    mensaje = "Menor de edad";
}
*/

let mensaje = age >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(mensaje);
