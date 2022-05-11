//Function deleteSave remove materialitySave from localStorage, then restart the page
function deleteSave(){
  localStorage.removeItem("materialitySave");
  location.reload();
}

//Function to manually save gameData
savedData = {randomStuff,gameData,implodedReality}
function saveGame() {
  localStorage.setItem("materialitySave", JSON.stringify((savedData)));
}

//AutoSave every 30s
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("materialitySave", JSON.stringify((savedData)));
}, 30000);
var savegame = JSON.parse(localStorage.getItem("materialitySave"));
  if (savegame !== null) {
    savedData = savegame;
    if (typeof savegame.materialitySave !== "undefined") savedData.materialitySave = savegame.materialitySave;
}

//Load savegame.materialitySave on page load
window.onload = function() {
  if (typeof savedData.materialitySave !== "undefined") {
    savedData.materialitySave = JSON.parse(localStorage.getItem("materialitySave"));
  } 
}