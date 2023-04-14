const turno = document.querySelector("#turno");

turno.addEventListener( "submit", validarFormulario )


function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const fecha = document.querySelector("#fecha").value
    const correo = document.querySelector("#correo").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `El turno requerido por ${nombre} ${apellido} es el dia ${fecha}, se solicitara confirmacion por el correo ${correo}`
}

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
