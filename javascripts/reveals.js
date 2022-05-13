//Function revealVCAutoClicker to unhide autoClicker1 when particles are greater than or equal to 1024, it runs every milisecond

function revealVCAutoClicker1(){if(player.particles >= player.void.vCAC1Cost){document.getElementById("autoClicker1").hidden = false;}};
function revealVCAutoClicker2(){if(player.particles >= player.void.vCAC2Cost){document.getElementById("autoClicker2").hidden = false;}};
function implodeReality() {if (player.particles >= player.implosion.implodedCost) {document.getElementById("implodedRealityButton").hidden = false;}}
function revealImplodeRealityTab(){if (player.implosion.implodedParticles >= 1) {document.getElementsByClassName("implodedReality").hidden = false;}}
function reveals(){
    revealVCAutoClicker1();revealVCAutoClicker2();
    implodeReality();revealImplodeRealityTab();
}