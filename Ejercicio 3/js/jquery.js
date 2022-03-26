

function calcular(edad, nombre){
  var nombre = $("#nombre").val();
    if (edad >= 18) {
        $("#resultado").val( "Hola, "+nombre+" Eres mayor de edad");
      }
      if(edad < 18) {
        $("#resultado").val("Hola, "+nombre+" Eres menor de edad");
      }
      if(edad <=0){
        $("#resultado").val("No es una edad válida");
      }
    }

      $("#formEjemplo2").submit((ev) => {
        ev.preventDefault();
        let result = $("#edad").val();
        let resultado = calcular(result);
        $("#res").val = resultado;
        
      });
