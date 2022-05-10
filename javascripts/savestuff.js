//Function deleteSave remove materialitySave from localStorage, then restart the page
function deleteSave(){
  localStorage.removeItem("materialitySave");
  location.reload();
}

//Function to manually save gameData
function saveGame() {
  localStorage.setItem("materialitySave", JSON.stringify((gameData)));
}

//AutoSave every 30s
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("materialitySave", JSON.stringify((gameData)));
}, 30000);
var savegame = JSON.parse(localStorage.getItem("materialitySave"));
  if (savegame !== null) {
    gameData = savegame;
    if (typeof savegame.materialitySave !== "undefined") gameData.materialitySave = savegame.materialitySave;
}

//Load savegame.materialitySave on page load
window.onload = function() {
  if (typeof gameData.materialitySave !== "undefined") {
    gameData.materialitySave = JSON.parse(localStorage.getItem("materialitySave"));
  } 
}

gameData = flat(gameData, {});
window.onload(function() {
  for (i = 0; i < Object.keys(gameData).length; i++) {
    document.getElementById(Object.keys(gameData[i])).innerHTML = Object.values(gameData[i]);
  }
})