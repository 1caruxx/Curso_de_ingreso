function Mostrar()
{

	var n=0;
	var acumneg=0;
	var acumpos=0;
	var contpos=0;
	var contneg=0;
	var contceros=0;
    var contpares=0;
	//var prompos=acumpos/contpos; -----> por que no funciona declarar una variable promerdio???
	//var promneg=acumneg/contneg;
	//var diferencia=acumpos+acumneg; // -------> sumar o restar???
	
	var respuesta="si";

	while (respuesta!="no")
	{
		n=parseInt(prompt("Ingrese su numero"));
		respuesta=prompt("¿Desea continuar? si/no");

		if (n<0)
		{
			acumneg=acumneg+n;
			contneg++;
		}
	    else
	    	{
	    		if (n>0)
	    		{
                   acumpos=acumpos+n;
                   contpos++;
	    		}
	    	    else
	    	    {
	    	      contceros++;
	    	    }
	    	    
	    	}
        if (n%2==0)
	    	{
	    	   contpares++;
	    	}
	}

  document.write('Suma de los negativos: '+acumneg);
  document.write('<br>Suma de los positivos: '+acumpos);
  document.write('<br>Cantidad de positivos: '+contpos);
  document.write('<br>Cantidad de negativos: '+contneg);
  document.write('<br>Cantidad de ceros: '+contceros);
  document.write('<br>Cantidad de numeros pares: '+contpares);
  document.write('<br>Promedio de positivos: '+acumpos/contpos);
  document.write('<br>Promedio de negativos: '+acumneg/contneg);
  document.write('<br>Diferencia entre positivos y negativos: '+acumpos-acumneg);
  
}//FIN DE LA FUNCIÓN