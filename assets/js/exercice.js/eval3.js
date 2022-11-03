var prenom = ["audrey", "aurélien", "flavien", "jérémy", "laurent", "melik", "nouara", "salem", "samuel", "stéphane"];


var saisi = window.prompt("Veuillez choisir un prénom");
var rang = prenom.indexOf(saisi);
 
 


if (saisi === "audrey" ||saisi ===  "aurélien" ||saisi ===  "flavien" ||saisi ===  "jérémy"||saisi ===  "laurent" ||saisi ===  "melik" ||saisi ===  "nouara" || saisi === "salem"||saisi ===  "samuel"||saisi ===  "stéphane") 
{
    prenom.splice(rang,1);
    console.log(rang);
    var nb = prenom.push("");
    console.log(prenom);
}
else
{
    alert("retente ta chance"); 
}








