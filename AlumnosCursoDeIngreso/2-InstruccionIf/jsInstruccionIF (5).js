function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value;

  if (!(edad>=13 && edad<=17)) 
  //if (edad<13 || edad>17) -----> Funciona de ambas formas
   
   {
   	
   	alert("Usted no es un adolescente");

   }

}//FIN DE LA FUNCIÓN