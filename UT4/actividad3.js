// Creamos la clase Figura
class Figura {

    // Método para calcular el área
    area() {
        return 0;
    }
}


// Creamos la clase Cuadrado que hereda de Figura
class Cuadrado extends Figura {

    constructor(lado) {
        super();
        this.lado = lado;
    }

    // Calculamos el área del cuadrado
    area() {
        return this.lado * this.lado;
    }
}


// Creamos la clase Circulo que hereda de Figura
class Circulo extends Figura {

    constructor(radio) {
        super();
        this.radio = radio;
    }

    // Calculamos el área del círculo
    area() {
        return Math.PI * this.radio * this.radio;
    }
}


// Creamos un array para guardar las figuras
let figuras = [];

// Creamos varios objetos y los añadimos al array
figuras.push(new Cuadrado(5));
figuras.push(new Circulo(3));
figuras.push(new Cuadrado(4));
figuras.push(new Circulo(2));


// Recorremos el array y mostramos las áreas
for (let i = 0; i < figuras.length; i++) {

    console.log("Área de la figura " + (i + 1) + ": " + figuras[i].area().toFixed(2));
}