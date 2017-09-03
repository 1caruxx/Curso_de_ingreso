/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
 var num1=parseInt(document.getElementById('numeroUno').value);
 var num2=parseInt(document.getElementById('numeroDos').value);
 var resultado=num1+num2
 alert("Su resultado es de: "+resultado);
}

function restar()
{
 var num1=parseInt(document.getElementById('numeroUno').value);
 var num2=parseInt(document.getElementById('numeroDos').value);
 var resultado=num1-num2
 alert("El resultado de la resta es de: "+resultado);
}

function multiplicar()
{ 
 var num1=parseInt(document.getElementById('numeroUno').value);
 var num2=parseInt(document.getElementById('numeroDos').value);
 var resultado=num1*num2
 alert("El resultado de la multiplicacion es de: "+resultado);
}

function dividir()
{
 var num1=parseInt(document.getElementById('numeroUno').value);
 var num2=parseInt(document.getElementById('numeroDos').value);
 var resultado=num1/num2
 alert("El resultado de la division es de: "+resultado);
}

