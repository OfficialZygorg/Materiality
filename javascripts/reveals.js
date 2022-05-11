//Function revealVCAutoClicker to unhide autoClicker1 when particles are greater than or equal to 1024, it runs every milisecond

function revealVCAutoClicker1(){if(gameData.particles >= gameData.vCAC1Cost){document.getElementById("autoClicker1").hidden = false;}};
function revealVCAutoClicker2(){if(gameData.particles >= gameData.vCAC2Cost){document.getElementById("autoClicker2").hidden = false;}};
function implodeReality() {if (gameData.particles >= implodedReality.implodedCost) {document.getElementById("implodedRealityButton").hidden = false;}}
function revealImplodeRealityTab(){if (implodedReality.implodedParticles >= 1) {document.getElementsByClassName("implodedReality").hidden = false;}}
function reveals(){
    revealVCAutoClicker1();revealVCAutoClicker2();
    implodeReality();revealImplodeRealityTab();
}setInterval(reveals,1);