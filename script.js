function insererTexte() {
    // Récupérez la valeur de l'input texte
    let texteUtilisateur = document.getElementById("texteUtilisateur").value;

    // Récupérez l'élément où vous souhaitez afficher le texte (dans cet exemple, c'est un paragraphe avec l'id "affichageTexte")
    let affichageTexte = document.getElementById("affichageTexte");
    let regex = new RegExp("^[abc][123]$", "gmi");

    if (regex.test(texteUtilisateur)) {
        // Affichez le texte dans l'élément souhaité
        affichageTexte.innerHTML = "Vous avez choisi : " + texteUtilisateur;

    } else {
        affichageTexte.innerHTML = "Wrong input";
    }
}

function afficher(){

    let coca = document.getElementById("A1");

    coca.textContent = "Coca";

    alert("Il y a 1 coca")
}

