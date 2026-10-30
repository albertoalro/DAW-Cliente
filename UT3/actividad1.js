// Crea un objeto persona con las propiedades nombre, edad y profesion
const persona = {
    nombre: "Alberto",
    edad: 41,
    profesion: "Desarrollador web"
};

console.log(persona.nombre); // Imprime en nombre de la persona

console.log(screen.width); // Imprime el ancho de la pantalla

// Cambia el contenido del elemento con id "mensaje" al hacer clic en el botón
document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("mensaje").textContent = "Mensaje cambiado";
});

// Solicita al usuario que introduzca su nombre y muestra un saludo
const nombre = prompt("Introduce tu nombre:");

alert("Hola, " + nombre);