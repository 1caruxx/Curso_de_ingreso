function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var entrada;
	var respuesta='si';
	
	while (respuesta=='si')
	{
		entrada=parseInt(prompt("Ingrese un numero"));
		respuesta=prompt("Desea continuar? si/no");
	    
	    while (entrada>=0)
	    
	    
	     {
	    	 positivo=positivo+entrada;
	         break;
	     }
	     while (entrada<0)
	     { 
	    	 negativo=negativo*entrada;
	         break;
	     }
	  
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN