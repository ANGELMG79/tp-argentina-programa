document.addEventListener("DOMContentLoaded", () => {
    var siguiente = document.getElementById("siguiente");

    siguiente.addEventListener("click", () => {
        var contenedorEjercicio = document.getElementById("contenedorEjercicio");    
        
        
        var elementoActivo = contenedorEjercicio.querySelector(".activo");
        var elementoSiguiente = contenedorEjercicio.querySelector(".activo + .desactivo");
        if(elementoSiguiente === null) {            
            elementoSiguiente = contenedorEjercicio.querySelector(".desactivo:first-of-type");
        }

        elementoActivo.classList.remove("activo");
        elementoActivo.classList.add("desactivo");

        elementoSiguiente.classList.remove("desactivo");
        elementoSiguiente.classList.add("activo");
        
       
    }); 
    
    var anterior = document.getElementById("anterior");

    anterior.addEventListener("click", () => {
        var contenedor = document.getElementById("contenedorEjercicio");
        var elementosDiv = contenedor.querySelectorAll(".activo, .desactivo");

        for(var i = 0; i < elementosDiv.length; i++){
            if(elementosDiv[i].classList.contains("activo") === true){
                break;
                
            }
           
        }

        var posicionAnterior = i - 1;
        if(posicionAnterior === -1){
            posicionAnterior = elementosDiv.length - 1; // SIEMPRE PERO SIEMPRE va a la posicion del ultimo elemento
        }

        
        elementosDiv[i].classList.remove("activo"); //Elemento activo actual (lo desactivo)
        elementosDiv[i].classList.add("desactivo");
        
        elementosDiv[posicionAnterior].classList.remove("desactivo"); // Elemento anterior (lo activo)
        elementosDiv[posicionAnterior].classList.add("activo");

    });

    /* JAVASCRIPT */
    var elementoModificar = document.getElementById("divJQuery");
    elementoModificar.style.fontSize = "50px";
    //elementoModificar.style = "font-size: 50px";

    /* JQuery */
    $("#divJQuery").css("font-size", "80px");
});

