//Function revealVCAutoClicker to unhide autoClicker1 when particles are greater than or equal to 1024, it runs every milisecond

function revealVCAutoClicker1(){if(gameData.particles >= gameData.vCAC1Cost){document.getElementById("autoClicker1").hidden = false;}};setInterval(revealVCAutoClicker1,1);
function revealVCAutoClicker2(){if(gameData.particles >= gameData.vCAC2Cost){document.getElementById("autoClicker2").hidden = false;}};setInterval(revealVCAutoClicker2,1);