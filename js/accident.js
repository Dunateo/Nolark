/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calculprime(){
    const distance = 0.1;
    const ancien = 300;
    var nbdist,nbanc,nbaccid,maj,primed,primeanc,obtprime;
    primed =  primedistance(distance,nbdist);
    primeanc = anciennete(ancien,nbanc);
    obtprime = obtentionprime(nbaccid);
    maj = (primed+primeanc)/obtprime;
    
    
}
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
    else{
        maj = 1;
    }
    return maj;
}