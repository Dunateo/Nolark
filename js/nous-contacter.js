/**
 * Gestion de l'envoi du formulaire
 * 
 */
window.onload = function() {
    document.getElementById("btn_envoyer").onclick = function() {
        if (document.getElementById("i_nom").value === "" && document.getElementById("i_prenom").value === "") {
            alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
        }
        else if (document.getElementById("i_email").value === "") {
            alert("L'email doit être rempli"); // On affiche un message
        }
        else {
            var question = "Souhaitez-vous réellement utiliser l'adresse suivante : " + document.getElementById("i_email").value;
            if (confirm(question)) {
                document.getElementById("form_contact").submit(); // On peut envoyer
            }
        }
    };
};
