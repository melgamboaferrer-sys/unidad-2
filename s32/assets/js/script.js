class Person {
    #cellphone;

    constructor(firstName, lastName, age, height, weight, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;

    this.#cellphone = cellphone;
    }

sayHello(){
    console.log("Hola a todas, saludos desde el metodo de la clase person");
    }

introduce() {
    return `Hola me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`;
}

//encapsulamiento
getcellphone() {
    return this.#cellphone;
}
};

let person1 = new Person("Piero", "Joya", 21, 1.8, 75, "960709875");

console.log(person1);
console.log(person1.lastName);
console.log(person1.weight);
console.log(person1.getcellphone());

let person2 = new Person("Marco", "Fernandez", 19, 1.85, 74, "987654321");

console.log(person2);
console.log(person2.firstName);
console.log(person2.height);
console.log(person2.getcellphone());

console.log("METODOS")
person1.sayHello()
console.log(person1.introduce());

console.log("HERENCIA");

class chef extends Person {
    constructor(
        firstName, 
        lastName, 
        age, 
        height, 
        weight, 
        cellphone,
        restaurant,
        favoriteFood
    ) {

        super(firstName, lastName, age, height, weight, cellphone);
        this.restaurant = restaurant;
        this.favoriteFood = favoriteFood;
    }

    introduce() {
    return `Hola, me llamo ${this.firstName} ${this.lastName} y soy chef en el restaurante ${this.restaurant}.`;
}
}

let chef1 = new chef(
    "Mauricio",
    "Hernandez",
    20,
    1.75,
    69,
    "987654321",
    "los tres amigos",
    "aereopuerto"
);

console.log("POLIMORFISMO");
console.log(chef1.introduce());
console.log(person1.introduce());
