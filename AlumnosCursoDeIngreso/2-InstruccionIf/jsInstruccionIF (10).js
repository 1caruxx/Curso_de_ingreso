function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
  var random=Math.floor((Math.random() * 10) + 1);

  if (random>=9)
  {
  	alert("Su nota es: "+random+", EXCELENTE");
  }
  else
  {
  	if (random>=4 && random<9) // ----> por que es necesario escribir dos veces random??
  	{
  		alert("Su nota es: "+random+", APROBÓ");
  	}
  	else
  	{
  		alert("Su nota es: "+random+", Vamos, la proxima se puede");
  	}
  }

}//FIN DE LA FUNCIÓN