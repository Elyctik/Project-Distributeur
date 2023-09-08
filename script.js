function verify(texteUtilisateur){
    let regex = new RegExp("^[abc]0[123]$","gmi");

       if (regex.test(texteUtilisateur)){
       return true;
       }
       else{
       return false;
       }
}

function insererTexte() {
    // Récupérez la valeur de l'input texte
    let texteUtilisateur = document.getElementById("texteUtilisateur").value;

    // Récupérez l'élément où vous souhaitez afficher le texte (dans cet exemple, c'est un paragraphe avec l'id "affichageTexte")
    let affichageTexte = document.getElementById("affichageTexte");
    let regex = new RegExp("^[abc]0[123]$","gmi");

       if (regex.test(texteUtilisateur)){
       // Affichez le texte dans l'élément souhaité
            affichageTexte.innerHTML = "Vous avez choisi : " + texteUtilisateur;

       }
       else{
        affichageTexte.innerHTML = "Wrong input";
       }
       }