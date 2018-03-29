/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


MesTestsUnitaires = TestCase('RemunerationTest');
MesTestsUnitaires.prototype.testsRecupAnciennete = function () {
    assertEquals('0 anciennete', 0.0, recupAnciennete(0, 1100.0));
    assertEquals('5 anciennete', 33.0, recupAnciennete(5, 1100.0));
    assertEquals('10 anciennete', 66.0, recupAnciennete(10, 1100.0));
};
MesTestsUnitaires.prototype.testsRecupS20 = function () {
    assertEquals('0 casques', 0.0, recupComS20(0));
    assertEquals('40 casques', 112.0, recupComS20(40));
};
MesTestsUnitaires.prototype.testsComXS = function () {
    assertEquals('0 casques', 0.0, recupComXS(0));
    assertEquals('50 casques', 0.0, recupComXS(50));
    assertEquals('51 casques', 21.0, recupComXS(51));
};
MesTestsUnitaires.prototype.testsComMulti = function () {
    assertEquals('0 casques', 0.0, recupComMulti(0));
    assertEquals('20 casques', 144.0, recupComMulti(20));
    assertEquals('50 casques', 468.0, recupComMulti(50));
    assertEquals('51 casques', 486.0, recupComMulti(51));
};
MesTestsUnitaires.prototype.testsRecupIndemKm = function () {
    assertEquals('en dessous de 350', 22.5, recupIndemKm(150));
    assertEquals('au dessus de 350', 350.0, recupIndemKm(2500));
};
MesTestsUnitaires.prototype.testsAffRemuneration = function () {
    /*:DOC +=
     <fieldset id="resultats">
     <h2 id="remuneration"></h2>
     </fieldset>
     */
    affRemuneration(1100);
    assertTrue('Test aff remuneration', 'La rémunération sera de : 1100 €' === window.document.querySelector("#remuneration").innerHTML);

};
MesTestsUnitaires.prototype.testsRecupValeur = function () {
    /*:DOC +=

     <input type="number" id="num_ancien"  value="50" />
     */
   
    assertTrue('Test recup anc', 50 === recupValeur("#num_ancien"));
};
