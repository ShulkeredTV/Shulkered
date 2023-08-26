/* Déclaration des variables */

var BtnConfirm = document.getElementById("button-confirm");
var error = document.getElementById("error")

BtnConfirm.onclick = () => error.innerHTML = "L'adresse email où le mot de passe est incorrect"

