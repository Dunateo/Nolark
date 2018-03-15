 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
* Fonction qui retourne l'alcool pur ingéré en fonction du nombre de verre
*
* @param {int} nbVerres
* @returns {int}
*/
function getAlcoolPur(nbVerres) {
 const uniteAlcool = 10;
 return uniteAlcool * nbVerres;
}

/**
* Fonction qui retourne le coefficient de diffusion en fonction du sexe
*
* @param {string} sexe
* @returns {float}
*/
function getCoefDiffusion(sexe) {
 const coefDiffuH = 0.7, coefDiffuF = 0.6;
 if (sexe === 'homme') {
 return coefDiffuH;
 } else {
 return coefDiffuF;
 }
}
function getAlcoolemie(sexe, poids, nbVerres) {
 return getAlcoolPur(nbVerres) / poids * getCoefDiffusion(sexe);
}
