//Function revealVCAutoClicker to unhide autoClicker1 when particles are greater than or equal to 1024, it runs every milisecond

function revealVCAutoClicker1(){if(mainData.particles >= mainData.vCAC1Cost){document.getElementById("autoClicker1").hidden = false;}};
function revealVCAutoClicker2(){if(mainData.particles >= mainData.vCAC2Cost){document.getElementById("autoClicker2").hidden = false;}};
function implodeReality() {if (mainData.particles >= mainData.implodedCost) {document.getElementById("implodedRealityButton").hidden = false;}}
function revealImplodeRealityTab(){if (mainData.implodedParticles >= 1) {document.getElementsByClassName("implodedReality").hidden = false;}}
function reveals(){
    revealVCAutoClicker1();revealVCAutoClicker2();
    implodeReality();revealImplodeRealityTab();
}setInterval(reveals,1);