/**
 * Fichier JS pour l'exercice sur la rémunération.
 * GUI : pages/remuneration.html
 * 
 */
window.addEventListener("load", function() {
    // tabEvents est une collection d'évenements
    var tabEvents = ['keyup', 'change'];
    // tabInputs est une collection de <input>
    var tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (var i=0; i<tabInputs.length; i++) {
        for (var j=0; j<tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], calculerRemuneration, false);
        }
    }
}, false);

/**
 * Procédure qui s'occupe du calcul et de l'affichage de la rémunération
 * 
 * @returns {void}
 */
function calculerRemuneration() {
    
    // Déclaration des constantes
    // (déclenche une erreur dans NetBeans, ne pas en tenir compte !)
    const fixe = 1100.0;

    // Déclaration des variables
    var nbAncien = recupValeur("#num_ancien");
    var nbS20 = recupValeur("#num_s20");
    var nbXS = recupValeur("#num_xspirit");
    var nbMulti = recupValeur("#num_multi");
    var km = recupValeur("#num_km");
    var remuneration = Number((fixe + recupAnciennete(nbAncien, fixe) + recupComS20(nbS20) + recupComXS(nbXS) + recupComMulti(nbMulti) + recupIndemKm(km)).toFixed(2));
    
    // Affichage du résultat
    affRemuneration(remuneration);
}

function affRemuneration(remuneration) {
    window.document.querySelector("#remuneration").innerHTML = "La rémunération sera de : " + remuneration + " €";
}

/**
 * Fonction qui récupère un entier, sinon 0
 * 
 * @param {string} id
 * @returns {integer}
 */
function recupValeur(id) {
    var champ = parseInt(window.document.querySelector(id).value);
    if (isNaN(champ)) {
        window.document.querySelector(id).value = 0;
        return 0;
    }
    else {
        return champ;
    }
}

/**
 * Fonction qui retourne la prime d'ancienneté
 * @param {integer} nb
 * @param {float} fixe
 * @returns {float}
 */
function recupAnciennete(nb, fixe) {
    const nbMin = 5;
    const txMin = 0.03;
    const nbSup = 10;
    const txSup = 0.06;
    if (nb >= nbSup) {
        return (fixe * txSup);
    }
    else if (nb >= nbMin) {
        return (fixe * txMin);
    }
    else {
        return 0.0;
    }
}

/**
 * Fonction qui retourne la commission sur le S20
 * @param {integer} nb
 * @returns {float}
 */
function recupComS20(nb) {
    const prix = 140.0;
    const txCom = 0.02;
    return (nb * prix * txCom);
}

/**
 * Fonction qui retourne la commission sur le X-Spirit
 * @@param {integer} nb
 * @returns {float}
 */
function recupComXS(nb) {
    const prix = 350.0, nbMinCom = 50, txCom = 0.06;
    if (nb >= nbMinCom) {
        return ((nb - nbMinCom) * prix * txCom);
    }
    else {
        return 0.0;
    }
}

/**
 * Fonction qui retourne la commission sur le Multitec
 * @param {integer} nb
 * @returns {float}
 */
function recupComMulti(nb) {
    const prix = 180.0, nbTranche1 = 20, nbTranche2 = 50, txTranche1 = 0.04, txTranche2 = 0.06, txTranche3 = 0.1;
    if (nb <= nbTranche1) {
        return (nb * prix * txTranche1);
    }
    else if (nb <= nbTranche2) {
        return ((nbTranche1 * prix * txTranche1) + ((nb - nbTranche1) * prix * txTranche2));
    }
    else {
        return ((nbTranche1 * prix * txTranche1) + ((nbTranche2 - nbTranche1) * prix * txTranche2) + ((nb - nbTranche2) * prix * txTranche3));
    }
}

/**
 * Fonction qui retourne l'indemnité kilomètrique
 * @param {type} km
 * @returns {km}
 */
function recupIndemKm(km) {
    const prix = 0.15, plafond = 350;
    var indem = km * prix;
    if (indem > plafond) {
        return plafond;
    }
    else {
        return indem;
    }
}