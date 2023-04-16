const contacto = document.querySelector("#contacto");

contacto.addEventListener( "submit", validarFormulario )


function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const fecha = document.querySelector("#fecha").value
    const correo = document.querySelector("#correo").value

    const respuest2 = document.getElementById("respuesta2");
    respuest2.textContent = `${nombre} su consulta sera respondida a la brevedad, al correo ${correo}`
}

