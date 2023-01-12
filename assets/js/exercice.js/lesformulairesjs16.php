<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="script.php" method="post">

    <fieldset>
        <legend> Vos Coordonnées</legend>

        <label for="société">société:</label><input type="text" name="societe" id="société"><br>
        <label for="personne_à_contacter">personne à contacter:</label><input type="text" name="personne_à_contacter" id="personne_à_contacter"><br>
        <label for="Adresse de l'entreprise">adresse de l'entreprise:</label><input type="text" name="Adresse de l'entreprise" id="Adresse de l'entreprise"><br>
        <label for="Code_postal">code postal:</label><input type="text" name="Code_postal" id="Code_postal"><br>
        <label for="Ville">ville:</label><input type="text" name="Ville" id="Ville"><br>
        <label for="Email">email:</label><input type="text" name="Email" id="Email"><br>
        <label for="téléphone">téléphone:</label><input type="text" name="téléphone" id="téléphone"><br>
    </fieldset>


    <label for="projet">Sélectionnez l'environnement technique du projet</label>
    <select id="couleur"> 
        <option value="" Choisissez>-</option>
        <option value="Access">Access</option>
        <option value="Java">Java</option>
        <option value="Delphi">Delphi</option>
        <option value="Windev">Windev</option>
        <option value="Visual Basic">Visual Basic</option>
        <option value="Power Builder">Power Builder</option>
        <option value="Internet">Internet</option>
        <option value="Intranet">Intranet</option>
        <option value="Windows NT">Windows NT</option>
        <option value="Unix">Unix</option>
        <option value="SQL Server">SQL Server</option>
        <option value="oracle">Oracle</option>
        <option value="Autres">Autres</option>
    </select>
      <p>Votre projet
        <textarea name="commentaire" rows="10" cols="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. 
            Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. Morbi vehicula aliquam placerat. 
            Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. Etiam feugiat facilisis est nec euismod. 
            Quisque convallis, tortor sed placerat lacinia, elit nunc volutpat arcu, vel consequat velit libero at tortor. 
            Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris.</textarea>`
      </p>
    <fieldset>
            <button type="submit">Envoyer</button> <button type="submit">Annuler</button>
    </fieldset>
    <script src="assets/js/exo_js/test.js"></script>
</body>
</html>




