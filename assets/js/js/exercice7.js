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

