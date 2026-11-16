// Creamos un array para guardar los alumnos
let alumnos = [];

// Creamos la clase Alumno
class Alumno {

    // Constructor para crear un alumno con sus datos
    constructor(nombre, edad, nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
}

// Pedimos los datos de los tres alumnos
for (let i = 0; i < 3; i++) {

    let nombre = prompt("Introduce el nombre del alumno " + (i + 1));
    let edad;
    let nota;

    // Validamos que la edad sea un número entero positivo
    do {
        edad = Number(prompt("Introduce la edad de " + nombre));
    } while (isNaN(edad) || edad <= 0 || !Number.isInteger(edad));

    // Validamos que la nota sea un número entre 0 y 10
    do {
        nota = Number(prompt("Introduce la nota de " + nombre + " (0-10)"));
    } while (isNaN(nota) || nota < 0 || nota > 10);

    // Creamos el objeto Alumno y lo añadimos al array
    let alumno = new Alumno(nombre, edad, nota);
    alumnos.push(alumno);
}

// Mostramos la lista de alumnos
console.log("Lista de alumnos:", alumnos);


// Buscamos el alumno con la nota más alta
function buscarMejorAlumno(lista) {

    let mejorAlumno = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].nota > mejorAlumno.nota) {
            mejorAlumno = lista[i];
        }
    }

    return mejorAlumno;
}


// Calculamos el promedio de las notas
function calcularPromedio(lista) {

    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma = suma + lista[i].nota;
    }

    return suma / lista.length;
}


// Llamamos a las funciones y mostramos los resultados
let mejorAlumno = buscarMejorAlumno(alumnos);
let promedio = calcularPromedio(alumnos);

console.log("Alumno con la nota más alta:", mejorAlumno.nombre);
console.log("Nota más alta:", mejorAlumno.nota);
console.log("Promedio de notas:", promedio);
