
// Creamos la clase Vehiculo
class Vehiculo {

    // Declaramos los atributos privados
    #marca;
    #velocidad;

    // Constructor para crear un vehículo
    constructor(marca, velocidad) {
        this.#marca = marca;
        this.velocidad = velocidad;
    }

    // Getter para obtener la marca
    get marca() {
        return this.#marca;
    }

    // Setter para modificar la marca
    set marca(nuevaMarca) {
        this.#marca = nuevaMarca;
    }

    // Getter para obtener la velocidad
    get velocidad() {
        return this.#velocidad;
    }

    // Setter para modificar la velocidad con validación
    set velocidad(nuevaVelocidad) {
        if (nuevaVelocidad >= 0) {
            this.#velocidad = nuevaVelocidad;
        } else {
            console.log("Error: la velocidad no puede ser negativa.");
        }
    }
}


// Creamos la clase Coche que hereda de Vehiculo
class Coche extends Vehiculo {

    constructor(marca, velocidad, puertas) {
        super(marca, velocidad);
        this.puertas = puertas;
    }
}


// Pedimos los datos del coche
let marca = prompt("Introduce la marca del coche");

let velocidad;

// Validamos que la velocidad sea un número igual o superior a cero
do {
    velocidad = Number(prompt("Introduce la velocidad del coche (km/h)"));
} while (isNaN(velocidad) || velocidad < 0);

let puertas;

// Validamos que el número de puertas sea un entero positivo
do {
    puertas = Number(prompt("Introduce el número de puertas"));
} while (isNaN(puertas) || puertas <= 0 || !Number.isInteger(puertas));


// Creamos un objeto de la clase Coche
let miCoche = new Coche(marca, velocidad, puertas);


// Mostramos los datos del coche
console.log("Datos del coche:");
console.log("Marca:", miCoche.marca);
console.log("Velocidad:", miCoche.velocidad, "km/h");
console.log("Número de puertas:", miCoche.puertas);