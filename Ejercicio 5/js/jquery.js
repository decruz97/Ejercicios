function ParImpar(num) {
    if ( num==0 ){
      $("#res").val("");
    } if (num % 2 == 0 ){
       $("#res").val("Es Par");
       $('#res').css('color', 'orange');
    } else   {
      $("#res").val("Es Impar");
      $('#res').css('color', 'blue');
    }  if (num < 0){
      alert("No se aceptan números negativos");
    }
  } 
  
  $("#calcu").submit((ev) => {
    ev.preventDefault();
    let num = $("#num").val();
    let resultado = ParImpar(num);
    $("#resultado").val = resultado;
  });