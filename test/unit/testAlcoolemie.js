/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function() {
 assertEquals('0 verre', 0, getAlcoolPur(0));
 assertEquals('1 verre', 10, getAlcoolPur(1));
};