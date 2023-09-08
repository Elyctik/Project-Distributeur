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

function login(){
    let password = document.getElementById("password").value
    let username = document.getElementById("username").value
    if (username === "root" && password === "toor1234="){
        document.getElementById('refill').style.display = "block"
    }
}
