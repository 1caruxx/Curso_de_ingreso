/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1=parseInt(document.getElementById('PrecioUno').value);
	var precio2=parseInt(document.getElementById('PrecioDos').value);
	var precio3=parseInt(document.getElementById('PrecioTres').value);

	var suma=precio1+precio2+precio3;
	alert("Su total es de: "+suma);
}
function Promedio () 
{
	var precio1=parseInt(document.getElementById('PrecioUno').value);
	var precio2=parseInt(document.getElementById('PrecioDos').value);
	var precio3=parseInt(document.getElementById('PrecioTres').value);

	var promedio=(precio1+precio2+precio3)/3;
	alert("Promedio: "+promedio);
}
function PrecioFinal () 
{
	var precio1=parseInt(document.getElementById('PrecioUno').value);
	var precio2=parseInt(document.getElementById('PrecioDos').value);
	var precio3=parseInt(document.getElementById('PrecioTres').value);

	var total=parseInt(precio1+precio2+precio3);
	alert("Su total es de: "+total+total*0.21); //----> no funciona :c
}