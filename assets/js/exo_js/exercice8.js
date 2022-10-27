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
