var pu=0;
var qtecom=0;
var tot=0;
var pap=0;
var rem1=tot-(tot*(5/100));
var rem2=tot-(tot*(10/100));
var port=tot-(tot*(2/100));


var pu=parseInt(prompt("entrez le prix unitaire"));
var qtecom=parseInt(prompt("entrez la quantité"));

var tot=pu*qtecom;
console.log(pap);

if (tot<100)
{
    pap=(pu*qtecom)+6;
    alert(pap);
}
if (tot>=100 & tot<=200)
{
    pap=(tot-(tot*(5/100)))+6;
    alert(pap);
}
if (tot>=201 & tot<=300)
{
    pap= (tot-(tot*(10/100)))+6;
    alert(pap);
}
if (tot>=301 & tot<=499)
{
    pap= (tot-(tot*(10/100)))+port;
    alert(pap);
}
if (tot>=500)
{
    pap=tot-(tot*(10/100));
    alert(pap);
}


