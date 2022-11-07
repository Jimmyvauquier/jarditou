var validation = document.getElementById("Envoyer");
validation.addEventListener('click', f_valid);

var nom = document.getElementById("nom");
var nom_m = document.getElementById("nom_manquant");
var nom_v= /^[a-zA-Zéè][a-zA-Zéè]+([-'s][a-zA-Zéè][a-zA-Zéè]+)?/;
function f_valid(e){
    if (nom.validity.valueMissing){
      e.preventDefault();
      nom_m.textContent ="Nom manquant";
      nom_m.style.color = "red";
    }else if (nom_v.test(nom.value) == false){
      e.preventDefault();
      nom_m.textContent = "format incorrect";
      nom_m.style.color = "orange";
    }
}
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant");
var prenom_v= /^[a-zA-Zéè][a-zA-Zéè]+([-'s][a-zA-Zéè][a-zA-Zéè]+)?/;
function f_valid(e){
    if (prenom.validity.valueMissing){
      e.preventDefault();
      prenom_m.textContent ="prenom manquant";
      prenom_m.style.color = "red";
    }else if (prenom_v.test(prenom.value) == false){
      e.preventDefault();
      prenom_m.textContent = "format incorrect";
      prenom_m.style.color = "orange";
    }
}
var code_postal = document.getElementById("code_postal");
var code_postal_m = document.getElementById("code_postal_manquant");
var code_postal_v= /^[0123456789]/;
function f_valid(e){
    if(code_postal.validity.valueMissing){
      e.preventDefault();
      code_postal_m.textContent ="code postal manquant";
      code_postal_m.style.color = "red";
    }else if (code_postal_v.test(code_postal.value) == false){
      e.preventDefault();
      code_postal_m.textContent = "format incorrect";
      code_postal_m.style.color = "orange";
    }
}
var adresse = document.getElementById("adresse");
var adresse_m = document.getElementById("adresse_manquante");
var adresse_v= /^[0-10000a-zA-Zéè][a-zA-Zéè]+([-'s][a-zA-Zéè][a-zA-Zéè]+)?/;
  function f_valid(e){
    if(adresse.validity.valueMissing){
        e.preventDefault();
         adresse.textContent ="adresse_manquante";
        adresse_m.style.color = "red";
    }else if (adresse_v.test(adrese.value) == false){
        e.preventDefault();
        adresse_m.textContent = "format incorrect";
        adresse_m.style.color = "orange";
     }
}
var ville = document.getElementById("ville");
var ville_m = document.getElementById("ville_manquante");
var ville_v= /^[a-zA-Zéè][a-zA-Zéè]+([-'s][a-zA-Zéè][a-zA-Zéè]+)?/;
  function f_valid(e){
     if(ville.validity.valueMissing){
         e.preventDefault();
         ville.textContent = "ville_manquante";
         ville_m.style.color = "red";
     }else if (ville_v.test(ville.value) == false){
         e.preventDefault();
         ville_m.textContent = "format_incorrect";
         ville_m.style.color = "orange";
     }
}
