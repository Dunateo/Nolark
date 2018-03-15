/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {
    // tabEvents est une collection d'évenements
    var tabEvents = ['keyup', 'change'];
    // tabInputs est une collection de <input>
    var tabInputs = window.document.querySelectorAll("input");
    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (var i = 0; i < tabInputs.length; i++) {
        for (var j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], calculprime, false);
        }
    }
    window.document.querySelector("#num_acc").addEventListener("change", function() {
 window.document.querySelector("#o_num_acc").value = recupValeur("#num_acc");
 calculprime();
 }, false);
}, false);
/**
 * LA fonction main 
 * @return {Number}
 */

function calculprime() {
    const distance = 0.1;
    const ancien = 300;
    var nbdist, nbanc, nbaccid, maj, primed, primeanc, obtprime;
    //conteneur.removeChild(monImg);
    nbdist = recupValeur("#num_D");
    nbaccid = recupValeur("#num_acc");
    nbanc = recupValeur("#num_ancien");
    primed = primedistance(distance, nbdist);
    console.log(primed + "prime distance");
    primeanc = anciennete(ancien, nbanc);
    console.log(primeanc + "prime ancienete");
    obtprime = obtentionprime(nbaccid);
    console.log(obtprime + "oui ou non");
    maj = (primed + primeanc) / obtprime;
    console.log(maj);
    affRemuneration(maj);
    image(nbaccid);
    return 0;
}
function test(){
    nbdist = 20;
    nbaccid = recupValeur("#num_acc");
    nbanc = recupValeur("#num_ancien");
}
function affRemuneration(remuneration) {
    window.document.querySelector("#remuneration").innerHTML = "La rémunération sera de : " + remuneration + " €";
}
/**
 * calcul de la distance
 * @param {number} distance
 * @param {number} nbdist
 * @return {Number}
 */
function primedistance(distance, nbdist) {
    var maj;

    if (nbdist > 900) {
        maj = 900 * distance;
    } else {
        maj = nbdist * distance;
    }

    return maj;
}
/**
 * Fonction qui calcul l'ancienneté
 * @param {number} ancien
 * @param {number} nbanc
 * @return {Number}
 */
function anciennete(ancien, nbanc) {
    var maj;
    if (nbanc < 4) {
        maj = 0;
    }
    if (nbanc === 4) {
        maj = ancien;
    }
    if (nbanc > 4) {

        maj = ancien + (nbanc - 4) * 30;
    }

    return maj;
}
/**
 * calcul des accidents
 * @param {number} nbaccid
 * @return {Number}
 */
function obtentionprime(nbaccid) {
    var maj;
    if (nbaccid === 1) {
        maj = 2;
    }
    if (nbaccid === 2) {
        maj = 3;
    }
    if (nbaccid === 3) {
        maj = 4;
    }
    if (nbaccid > 3) {
        maj = 0;
    }
    if (nbaccid === 0) {
        maj = 1;
    }
    if (nbaccid < 0) {
        maj = 1;
    }

    return maj;
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
    } else {
        return champ;
    }
}

function image(nbaccid) {
    var conteneur = document.getElementById('image');
    var monImg = document.createElement('img');
    var cmpt;
    cmpt = 0;
    if(cmpt === 0){
 
    if (nbaccid === 2) {

        monImg.src = "../images/attention.png";
        //On ajoute l'image dans le conteneur
        conteneur.appendChild(monImg);
        cmpt = 1;
    }
    if (nbaccid === 3) {
        
        monImg.src = "../images/porte2_accueil.png";
        //On ajoute l'image dans le conteneur
        conteneur.appendChild(monImg);
        cmpt = 1;
    }
    if (nbaccid > 3) {
        
        monImg.src = "../images/pole.png";
        //On ajoute l'image dans le conteneur
        conteneur.appendChild(monImg);
        cmpt = 1;

    }
}
    else{
     conteneur.removeChild(monImg);
}
    return conteneur;
}

