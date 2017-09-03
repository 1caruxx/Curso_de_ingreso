/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var num1=parseInt(document.getElementById('sueldo').value);
var resultado=num1+(num1*1,10);
document.getElementById('resultado').value=resultado;
}
