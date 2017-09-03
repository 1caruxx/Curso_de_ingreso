function Mostrar()
{

	var n;
	var maximo=-100000;
	var minimo=1000000;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		n=prompt("Ingrese un numero");
		respuesta= prompt("¿Desea continuar? si/no");
	 
	 if (n>maximo)
	 	{
	 		maximo=n;
	 	}
	 if (n<minimo)
	 {
	 	minimo=n;
	 }
	}
	
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN