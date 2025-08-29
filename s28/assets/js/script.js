console.log("HOLA")

function showMessage() {
    console.log("INICIO DE LOS MENSAJE");
    console.log(`HOLA`);
    console.log('tengo sueño');
    console.log(19);
    console.log(false);
    console.log("final de los mensajes");
}

showMessage();

function addTheNumbers2(a, b) {
    let result = a + b;
    let message = `${a} + ${b} = ${result}`;

    return message;
}

//let num1 = parseInt(prompt("Ingresa el primer numero"));
//let num2 = parseInt(prompt("Ingresa el segundo numero"));

//addTheNumbers(a, b);

//let resultMessage = addTheNumbers2();
//console.log(resultMessage);

//console.log(addTheNumbers2());

let multiplyTheNumbers = (a, b) => {
    let result = a*b;
    let message = `Result ${result}`;

    return message;
}

let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let result = multiplyTheNumbers(num1, num2);

console.log(result);