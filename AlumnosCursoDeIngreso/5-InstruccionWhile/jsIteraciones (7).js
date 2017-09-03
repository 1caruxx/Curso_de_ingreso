function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var entrada;
	
	while (respuesta=='si') // ----> es necesario que sea == por que si no no lo toma
	{
		entrada=parseInt(prompt("Ingrese un numero"));
        acumulador=acumulador+entrada
		contador++;
		respuesta=prompt("Desea continuar? si/no");
	    
	    /*if (respuesta!='si')
	    {
	    	break;
	    }*/
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN