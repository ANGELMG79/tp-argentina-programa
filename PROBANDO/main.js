const turnos = document.querySelector("#turnos");



turnos.addEventListener("submit", validarformulario)

function validarformulario(e) {
    

const Nombre = document.querySelector("#Nombre").value
const Apellido = document.querySelector("#Apellido").value
const Telefono = document.querySelector("#Telefono").value
const Correo = document.querySelector("#Correo").value
const Fecha = document.querySelector("#Fecha").value

console.log(Nombre, Apellido, Telefono, Correo, Fecha)

const respuesta = document.getElementById ('respuesta')
respuesta.textContent = 'Nombre, Apellido, Telefono, Correo, Fecha'
 }
