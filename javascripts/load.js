function onLoad(){
    document.getElementById("particles").innerHTML = formatValue(player.options.notation, player.particles, 2, 1)

    document.getElementById("vCUpMult").innerHTML = formatValue(player.options.notation,player.void.vCUpMult,0,0);
    document.getElementById("totalMult").innerHTML = formatValue(player.options.notation,player.totalMult,2,1);
    document.getElementById("vCResult").innerHTML = formatValue(player.options.notation,player.void.vCResult,2,1);

    document.getElementById("vCTClickBoost").innerHTML = formatValue(player.options.notation,player.void.vCTClickBoost,2,1);
    document.getElementById("vCTClick").innerHTML = formatValue(player.options.notation,player.void.vCTClick,0,0);
    document.getElementById("vCUpCost").innerHTML = formatValue(player.options.notation,player.void.vCUpCost,0,0);
    document.getElementById("vCUpBought").innerHTML = formatValue(player.options.notation,player.void.vCUpBought,0,0);
    document.getElementById("vCUpMult").innerHTML = formatValue(player.options.notation,player.void.vCUpMult,0,0);
    
    document.getElementById("vCAC1Bought").innerHTML = formatValue(player.options.notation,player.void.vCAC1Bought,0,0);
    document.getElementById("vCAC1Cost").innerHTML = formatValue(player.options.notation,player.void.vCAC1Cost,0,0);
    document.getElementById("vCAC1Mult").innerHTML = formatValue(player.options.notation,player.void.vCAC1Mult,0,0);

    document.getElementById("vCAC2Bought").innerHTML = formatValue(player.options.notation,player.void.vCAC2Bought,0,0);
    document.getElementById("vCAC2Cost").innerHTML = formatValue(player.options.notation,player.void.vCAC2Cost,0,0);
    document.getElementById("vCAC2Mult").innerHTML = formatValue(player.options.notation,player.void.vCAC2Mult,0,0);

    document.getElementsByClassName("implodedParticles").innerHTML = formatValue(player.options.notation,player.implosion.implodedParticles,2,1);
}

//Function deleteSave remove materialitySave from localStorage, then restart the page
function deleteSave(){
    localStorage.removeItem("materialitySave");
    location.reload();
  }
  
  //AutoSave every 30s
  // var saveGameLoop = window.setInterval(function() {
  //   localStorage.setItem("materialitySave", JSON.stringify((player)));
  // }, 30000);
  // var savegame = JSON.parse(localStorage.getItem("materialitySave"));
  //   if (savegame !== null) {
  //     player = savegame;
  //     if (typeof savegame.materialitySave !== "undefined") player.materialitySave = savegame.materialitySave;
  // }
  
  
  //Load savegame.materialitySave on page load
//   window.onload = function() {
//     if (typeof player.materialitySave !== "undefined") {
//       player.materialitySave = JSON.parse(localStorage.getItem("materialitySave"));
//     } 
//   }

  var currentSave = 0;
  var saves = {
    0: null,
    1: null,
    2: null
  };
  
  function set_save(name, saveId, value) {
      saves[saveId] = value;
      localStorage.setItem(name, btoa(JSON.stringify(getRootSaveObject(), function(k, v) { return (v === Infinity) ? "Infinity" : v; })));
  }
  
  function get_save(name) {
    try {
      return JSON.parse(atob(localStorage.getItem(name)), function(k, v) { return (v === Infinity) ? "Infinity" : v; });
    } catch(e) { console.log("Fuck IE", e); }
  }
  
  function getRootSaveObject() {
    return {
      current: currentSave,
      saves: saves
    };
  }

  function load_game(root) {
    if (!root) {
      if (window.location.href.split("//")[1].length > 20) var root = get_save('materialityTestSave');
      else var root = get_save('materialitySave');
    }
  
    // Start: Migration for old save format
    if (root && !root.saves) {
      var _root = getRootSaveObject();
      _root.saves[currentSave] = root;
      root = _root;
  
      player = root.saves[currentSave];
      save_game();
    }
    // End: Migration
  
    // If there's no save, insert default root object
    if (!root) root = getRootSaveObject();
  
    currentSave = root.current;
    saves = root.saves;
  
    if (saves[currentSave]) player = saves[currentSave];
    onLoad();
  } load_game();

  function saveGame(changed, silent) {
    if (window.location.href.split("//")[1].length > 20) set_save('materialityTestSave', currentSave, player);
    else set_save('materialitySave', currentSave, player);
    if (!silent) $.notify(changed ? "Game loaded" : "Game saved", "info")
  }setInterval(saveGame, 30000);