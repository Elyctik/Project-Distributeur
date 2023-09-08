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

let distributeur = new Array()[3][3]

function refill(){
    const f = document.forms[0];
    let produit = f.produit.value;
    let quantite = f.quantite.value;
    let row, line;
    if (!verify(f.emplacement.value)){
        alert("emplacement incorrect A01 à C03")
        let x = document.getElementById("emplacement")[0]
        x.style.borderBlockColor = "red"
    } else {
        let emplacement = f.emplacement.value;
        row = emplacement.charAt(0)
        line = emplacement.charAt(3)
        f.produit.value = null
        f.quantite.value = null
        f.emplacement.value = null
        distributeur[row][line] = [produit, quantite]
    }

}
