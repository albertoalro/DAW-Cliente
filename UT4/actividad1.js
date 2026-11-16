// Creamos un array para guardar los números
let numeros = [];

// Preguntamos cuántos números quiere introducir el usuario
let cantidad;

// Validamos que el número introducido sea un número positivo
do {
    cantidad = Number(prompt("¿Cuántos números quieres introducir? (debe ser un número  entero positivo)"));
} while (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad));

// Repetimos la petición tantas veces como números haya indicado
for (let i = 0; i < cantidad; i++) {

    let numero;

    // Pedimos el número hasta que sea válido
    
    do {
        // Pedimos al usuario que introduzca un número
    numero = Number(prompt("Introduce el número " + (i + 1)));
    } while (isNaN(numero));

    // Añadimos el número en el array
    numeros.push(numero);
}

// Mostramos el array por consola
console.log("Números introducidos:", numeros);



// Calcula la suma de todos los números de un array.

function calcularSuma(array) {

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }

    return suma;
}

// Llamamos a la función suma
let resultadoSuma = calcularSuma(numeros);

console.log("La suma es:", resultadoSuma);


// Calcula el máximo de los valores del array

function calcularMaximo(array) {

    let maximo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

// Llamamos a la función máximo
let resultadoMaximo = calcularMaximo(numeros);

console.log("El máximo es:", resultadoMaximo);

// Calcula el mínimo de los valores del array

function calcularMinimo(array) {

    let minimo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }
    return minimo;
}

// Llamamos a la función mínimo
let resultadoMinimo = calcularMinimo(numeros);

console.log("El mínimo es:", resultadoMinimo);

// Calcula el promedio de los valores del array

function calcularPromedio(array) {
    let suma = calcularSuma(array);
    let promedio = suma / array.length;
    return promedio;
}

// Llamamos a la función promedio
let resultadoPromedio = calcularPromedio(numeros);

console.log("El promedio es:", resultadoPromedio);