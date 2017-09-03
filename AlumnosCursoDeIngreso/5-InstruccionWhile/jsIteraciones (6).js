function Mostrar()
{

	var contador=0;
	var acumulador=0;
    var entrada;
	
	while (contador<5)
	{
		entrada=parseInt(prompt("Ingrese un numero"));
        acumulador=acumulador+entrada
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN