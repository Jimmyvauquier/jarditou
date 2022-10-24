//exercice7 (exo3)

var a = window.prompt("number1");
var symbole = window.prompt("+","*","/","-");
var b = window.prompt("number2");
var result;
for(;symbole !=="+" &&  symbole !=="*" && symbole !=="-" && symbole !=="/";)
  

{
  alert("entrez un operateur valide:+,-,*,/,")
  var operateur =window.prompt("entre un operateur")
}
  switch(symbole)
  {
    case "+":
      result = parseInt (a)+ parseInt (b);
      break;
    case "-":
      total = a-b;
      result = parseInt (a)- parseInt (b);
      break;
    case "*": 
      result = parseInt (a)* parseInt (b);
    break;
      case "/":
      result = parseInt (a)/parseInt (b);
      break;
  }
  alert (result);

