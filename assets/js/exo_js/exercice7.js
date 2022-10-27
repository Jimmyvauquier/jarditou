//exercice7 (exo1)
var a =parseInt(prompt("Saisissez votre chiffre entre 0 et 100"));
var calcul = (a%2);
if (calcul == "0")
{
    window.alert("chiffre pair");
 } 
 else 
 {
    window.alert("chiffre impair");
 }

 //exercice7 (exo2)
var a = parseInt(prompt("année de naissance"));
var diff =2022-a;
if (diff>=18)
{
    alert("Vous êtes majeur, bienvenue à vous.Vous avez accès à notre site!");
 } 
 else
 {
    alert("Vous êtes mineur, attendez ou faites faire des faux papiers!");
 }

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

