
var a=0;
var j=0;
var m=0;
var v=0;
var nbre=0;
while (nbre<=100)
{
var nbre = parseInt(prompt("entrez votre nombre"));
console.log(nbre);
    if (nbre<20)
    {
        console.log (j);
        j++;
    }
    if (nbre>=20 & nbre<=40)
    {
        console.log (m);;
        m++;
    }
    if (nbre>=41)
    {
        console.log (v);
        v++;
    }
   
}
let t=j+m+v;
alert(" il y a "+ t + " personnes " + " dont "+ j + " de - de 20 ans " + m + " adultes de 20 à 40 ans " + v + " de personnes de plus de 40 ans dont 1 centenaire sans dents" );