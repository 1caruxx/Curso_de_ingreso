function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


    while (sexo=="f")
    {
        
          document.getElementById('Sexo').value="Femenino";
          break;
        
        
          if (sexo=='m')
        
        {
          document.getElementById('Sexo').value="Masculino";
          
    	  }


      else
       {
    	  sexo = prompt("Error, usted es un degenerado, ingrese nuevamente su sexo");
       }
      
  }
        	
}//FIN DE LA FUNCIÓN