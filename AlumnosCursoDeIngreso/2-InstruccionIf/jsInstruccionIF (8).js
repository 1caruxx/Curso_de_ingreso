function Mostrar()
{
//tomo la edad  
 var edad=document.getElementById('edad').value;
 var estCivil=document.getElementById('estadoCivil').value;

 if (!(edad<18 && estCivil!="Soltero"))
 {
 	alert("Es soltero y no es menor.");
 }
	
}//FIN DE LA FUNCIÓN