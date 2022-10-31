//exercice8 (exo1)

// var a = window.prompt("votre prénom n°1");
// var b = windows.prompt("votre prénom n°2");
// var cycle = "a"+"b";
// var chiffre = 0;

// while(b!="")
// {
//     b = windows.prompt("votre prénom n°2");
// chiffre=chiffre+1;
// chiffre++;

// }

// alert= (cycle);
// console.log(chiffre);
// console.log(cycle);


console.log("connecté !");
var nombre = 0;
var bool = true;

while(bool)
{
    // console.log("ok");
    // prenom = window.prompt("Entrez un prénom");
    var prenom = window.prompt("Entrez un prénom");
    console.log(prenom);
    if(prenom === ""){
        var bool = false;
    }else{
        nombre++;
    }
}
alert("Vous avez rentré : "+nombre+"prenom");


//exercice8 (xo2)
var resultat = 0;
var x = parseInt(prompt("saisir un nombre"));

while(!x==resultat)
{
console.log (x=x-1;)
document.write(x);
x--;

}

alert=resultat;

//exercice8 (exo3)
var somme=0;
var saisie="";
var moyenne=parseFloat(saisie)/somme;
 
 
while(saisie!="0"){
  saisie=prompt("Entrez votre nombre\n Entrez 0 pour terminer");
  somme=somme+parseFloat(saisie);
}
 
console.log("La somme maximal vaut  " + " " + (Math.max(saisie)) );
console.log("La somme minimal vaut  " + " " + (Math.min(saisie)) );

alert= (somme);

//exercice8 (exo4)
var n = parseInt(prompt("5"));
var x= parseInt(prompt("7"));
var multiplicateur=0;

console.log("Table de multiplication par 5");
console.log("Table de multiplication par 7");
console.log("5 * 0 = 0");
console.log("5 * 1 = 5");
console.log("5 * 2 = 10");
console.log("5 * 3 = 15");
console.log("5 * 4 = 20");
console.log("5 * 5 = 25") ;
console.log("5 * 6 = 30");
console.log("5 * 7 = 35");
console.log("5 * 8 = 40");
console.log("5 * 9 = 45");
console.log("5 * 10 = 50");

console.log("7 * 0 = 0");
console.log("7 * 1 = 7");
console.log("7 * 2 = 14");
console.log("7 * 3 = 21");
console.log("7 * 4 = 28");
console.log("7 * 5 = 35") ;
console.log("7 * 6 = 42");
console.log("7 * 7 = 49");
console.log("7 * 8 = 56");
console.log("7 * 9 = 63");
console.log("7 * 10 = 70");

resultat=(x)||(n)+("*")+("multiplicateur");
alert=resultat;




