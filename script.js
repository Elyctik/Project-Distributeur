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
        affichageTexte.innerHTML = texteUtilisateur;
    }
    else{
        if (regex.test(texteUtilisateur)) {
            // Affichez le texte dans l'élément souhaité
            affichageTexte.innerHTML = "Vous avez choisi : " + texteUtilisateur;

        } else {
            affichageTexte.innerHTML = "Wrong input";
        }
    }

}

function afficherBoisson() {

    let coca = document.getElementById("A1");

    let quantiteCoca = 10;

    coca.textContent = "Coca";

    let fanta = document.getElementById("A2");

    let quantitefanta = 10;

    fanta.textContent = "Fanta";

    let sprite = document.getElementById("A3");

    let quantitesprite = 10;

    sprite.textContent = "Sprite";

    alert("Il y a " + quantiteCoca + " Coca" + " Il y a " + quantitefanta + " Fanta" + " Il y a " + quantitesprite + " sprite")
}
function affichageClavier(id){
    if(document.getElementById("texteUtilisateur").value.length < 3 ){
    document.getElementById("texteUtilisateur").value += id;
    }
}


function viderLigne(){
document.getElementById("texteUtilisateur").value = ""
}





function afficherBonbon(){

    let haribo = document.getElementById("B1");

    let quantiteHaribo = 10;

    haribo.textContent = "Haribo"

    let tagada = document.getElementById("B2")

    let quantitetagada = 10;

    tagada.textContent = "tagada"

    let nounours = document.getElementById("B3")

    let quantiteNounours = 10;

    nounours.textContent = "Nounours"

    alert("il y a " + quantiteHaribo + " haribo " + " il y a " + quantitetagada + " tagadas" + " il y a " + quantiteNounours + " Nounours")

}

function afficherChips(){
    let sel = document.getElementById("C1");

    let quantiteSel = 10;

    sel.textContent = "Chips au sel"

    let paprika = document.getElementById("C2")

    let quantitePaprika = 10;

    paprika.textContent = "Chips au Paprika"

    let pikkles = document.getElementById("C3")

    let quantitePikkles = 10;

    pikkles.textContent = "Chips Pikkles"

    alert("il y a " + quantiteSel + " chips au sel " + " il y a " + quantitePaprika + " chips au paprika" + " il y a " + quantitePikkles + " chips au pikkles")

}

let distributeur = new Array();


function refill() {

    const f = document.forms[0];
    let produit = f.produit.value;
    let quantite = f.quantite.value;
    let row, line;
    if (!verify(f.emplacement.value)) {
        alert("emplacement incorrect A01 à C03")
        let x = document.getElementById("emplacement")[0]
        x.style.borderBlockColor = "red"
    } else {
        let emplacement = f.emplacement.value;
        row = emplacement.charAt(0)
        line = emplacement.charAt(2)
        f.produit.value = null
        f.quantite.value = null
        f.emplacement.value = null
        distributeur[row][line] = [produit, quantite]
    }
}

function login() {
    let password = document.getElementById("password").value
    let username = document.getElementById("username").value
    if (username === "root" && password === "toor1234=") {
        document.getElementById('refill').style.display = "block"
        document.getElementById('login-popup').style.display = 'none'
    } else {
        alert("identifiants incorrect")
    }
}

function afficherBoisson() {

    let coca = document.getElementById("A1");

    let quantiteCoca = 10;

    coca.textContent = "Coca";

    let fanta = document.getElementById("A2");

    let quantiteFanta = 10;

    fanta.textContent = "Fanta";

    let sprite = document.getElementById("A3");

    let quantiteSprite = 10;

    sprite.textContent = "Sprite";

    alert("Il y a " + quantiteCoca + " Coca" + " Il y a " + quantiteFanta + " Fanta" + " Il y a " + quantiteSprite + " sprite")
}


function afficherBonbon() {

    let haribo = document.getElementById("B1");

    let quantiteHaribo = 10;

    haribo.textContent = "Haribo"

    let tagada = document.getElementById("B2")

    let quantiteTagada = 10;

    tagada.textContent = "tagada"

    let nounours = document.getElementById("B3")

    let quantiteNounours = 10;

    nounours.textContent = "Nounours"

    alert("il y a " + quantiteHaribo + " haribo " + " il y a " + quantiteTagada + " tagadas" + " il y a " + quantiteNounours + " Nounours")

}

function afficherChips() {
    let sel = document.getElementById("C1");

    let quantiteSel = 10;

    sel.textContent = "Chips au sel"

    let paprika = document.getElementById("C2")

    let quantitePaprika = 10;

    paprika.textContent = "Chips au paprika"

    let pikkles = document.getElementById("C3")
    let distributeur = new Array();

    let quantitePikkles = 10;

    pikkles.textContent = "Chips Pikkles"

    alert("il y a " + quantiteSel + " chips au sel " + " il y a " + quantitePaprika + " chips au paprika" + " il y a " + quantitePikkles + " chips au pikkles")
}



function mouseOver(id) {
    document.getElementById(id).style.color = "red";

    //document.getElementById("test").innerHTML = "Bonjour, il y a  Coca-cola en A1 "+ "au prix de 2 €";
    switch (id) {
        case "A1":
            document.getElementById("test2").innerHTML = "il y a " + a01[1] +" " + a01[0]+ " dans le distibuteur";
            break;
        case "A2" :
            document.getElementById("test2").innerHTML = "il y a " + a02[1] +" " + a02[0]+ " dans le distibuteur";
            break;
        case "A3" :
            document.getElementById("test2").innerHTML = "il y a " + a03[1] +" " + a03[0]+ " dans le distibuteur";
            break;
        case "B1" :
            document.getElementById("test2").innerHTML = "il y a " + a04[1] +" " + a04[0]+ " dans le distibuteur";
            break;
        case "B2" :
            document.getElementById("test2").innerHTML = "il y a " + a05[1] +" " + a05[0]+ " dans le distibuteur";
            break;
        case "B3" :
            document.getElementById("test2").innerHTML = "il y a " + a06[1] +" " + a06[0]+ " dans le distibuteur";
            break;
        case "C1" :
            document.getElementById("test2").innerHTML = "il y a " + a07[1] +" " + a07[0]+ " dans le distibuteur";
            break;
        case "C2" :
            document.getElementById("test2").innerHTML = "il y a " + a08[1] +" " + a08[0]+ " dans le distibuteur";
            break;
        case "C3" :
            document.getElementById("test2").innerHTML = "il y a " + a09[1] +" " + a09[0]+ " dans le distibuteur";
            break;


        default:
            break;
    }
}

function mouseOut(id) {
    document.getElementById(id).style.color = "black";
    document.getElementById("test2").innerHTML = "";
}

let a01 = ["Coca", 10]
let a02 = ["Fanta", 10]
let a03 = ["Sprite", 10]
let a04 = ["Haribo", 10]
let a05 = ["Tagada", 10]
let a06 = ["Nounours", 10]
let a07 = ["Chips au sel", 10]
let a08 = ["Chips au Paprika", 10]
let a09 = ["Chips Pikkles", 10]

