//Function deleteSave remove materialitySave from localStorage, then restart the page
function deleteSave(){
  localStorage.removeItem("materialitySave");
  location.reload();
}

//Function to manually save mainData
function saveGame() {
  localStorage.setItem("materialitySave", JSON.stringify((mainData)));
}

//AutoSave every 30s
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("materialitySave", JSON.stringify((mainData)));
}, 30000);
var savegame = JSON.parse(localStorage.getItem("materialitySave"));
  if (savegame !== null) {
    mainData = savegame;
    if (typeof savegame.materialitySave !== "undefined") mainData.materialitySave = savegame.materialitySave;
}

//Load savegame.materialitySave on page load
window.onload = function() {
  if (typeof mainData.materialitySave !== "undefined") {
    mainData.materialitySave = JSON.parse(localStorage.getItem("materialitySave"));
  } 
}