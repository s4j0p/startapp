function wypisz()    
 {
   var liczba1 = document.getElementById("pole1").value;
   var liczba2 = document.getElementById("pole2").value;
   var napis = "";
  
  if((isNaN(liczba1)) && (isNaN(liczba2)))
  {
   document.getElementById("wynik1").innerHTML = "wartości w obu polach nie są liczbami.";
  }
  else if(isNaN(liczba1))
   {
    document.getElementById("wynik1").innerHTML = "Wartość w polu pierwszym nie jest liczbą";
   }
  else if(isNaN(liczba2))
   {
    document.getElementById("wynik1").innerHTML = "Wartość w polu drugim nie jest liczbą";
   }
   
  else if(liczba1<liczba2)
   {
    for(i=liczba1;i<=liczba2;i++)
   {
    napis = napis + i + " "; 
   }
    document.getElementById("wynik1").innerHTML = napis; 
  }
  else if(liczba1>liczba2)
   {
    for(i=liczba1;i>=liczba2;i--)
    {
     napis = napis + i + " ";
    }
    document.getElementById("wynik1").innerHTML = napis;
   }
  else if(liczba1==liczba2)
  {
   document.getElementById("wynik1").innerHTML = "Obie liczby są takie same";
  }

 }