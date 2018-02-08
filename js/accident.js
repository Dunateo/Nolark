/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * LA fonction main 
 * @return {Number}
 */

function calculprime(){
    const distance = 0.1;
    const ancien = 300;
    var nbdist,nbanc,nbaccid,maj,primed,primeanc,obtprime;
    nbdist = 7;
    nbaccid = 2;
    nbanc = 1;
    primed =  primedistance(distance,nbdist);
    primeanc = anciennete(ancien,nbanc);
    obtprime = obtentionprime(nbaccid);
    maj = (primed+primeanc)/obtprime;
    console.log(maj);
    return 0;
}
/**
 * calcul de la distance
 * @param {number} distance
 * @param {number} nbdist
 * @return {Number}
 */
function primedistance(distance,nbdist){
    var maj;
    
    if(maj > 900){
        maj = 900*distance;
    }
    else{
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
function anciennete(ancien,nbanc){
    var maj;
    if(nbanc<4){
        maj = 0;
    }
    if(nbanc === 4){
        maj = ancien;
    }
    if(nbanc>4){
        for(var i=0; i<nbanc-4; i++){
            maj = 30 + ancien;
        }
    }

    return maj;
}
/**
 * calcul des accidents
 * @param {number} nbaccid
 * @return {Number}
 */
function obtentionprime(nbaccid){
    var maj;
    if(nbaccid === 1){
        maj = 2;
    }
    if(nbaccid === 2){
        maj = 3;
    }
    if(nbaccid === 3){
        maj = 4;
    }
    if(nbaccid > 3){
        maj = 0;
    }
    if(nbaccid === 0){
        maj = 1;
    }
    if(nbaccid <0){
        maj = 1;
    }
     
    return maj;
}
window.addEventListener("load", calculprime(),false);