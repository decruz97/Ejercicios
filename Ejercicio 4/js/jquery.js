jQuery(document).ready(function() {
  
function operacion(a,b,c,nombre,materia){                  
    var resultado = 0;
    var nombre = $("#nombre").val();
    var materia = $("#materia").val();
    resultado = parseFloat(a) + parseFloat(b) + parseFloat(c);
            resultado = resultado/3;
            
    if(resultado>=3){
     $("#nom").val("Felicitaciones "+nombre);
     $("#resultado").val("su nota es "
     + resultado);
     $("#mat").val("Pasaste la materia "+materia);
     $('#resultado').css('color', 'green');
        }
    if(resultado<3){
    $("#nom").val("Lo siento "+nombre);
    $("#resultado").val("su nota es "+ resultado);
    $("#mat").val("No pasaste la materia "+materia);
    $('#resultado').css('color', 'red');
         }
    if(resultado<0){
      alert("No se admiten valores negativos");
      }
}
  jQuery('#calcula').click(function(){                    
          var num1 = parseInt(jQuery('#valorA').val(),10); 
          var num2 = parseInt(jQuery('#valorB').val(),10);
          var num3 = parseInt(jQuery('#valorC').val(),10); 
          operacion(num1,num2,num3);          
  });

}); 