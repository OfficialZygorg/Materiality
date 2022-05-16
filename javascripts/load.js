
  //Function deleteSave remove materialitySave from localStorage, then restart the page
  function deleteSave(){
      localStorage.removeItem("materialitySave");
      localStorage.removeItem("materialityTestSave");
      location.reload();
    }
    
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
  } 
  load_game();
  
  function saveGame(changed, silent) {
    if (window.location.href.split("//")[1].length > 20) set_save('materialityTestSave', currentSave, player);
    else set_save('materialitySave', currentSave, player);
    if (!silent) $.notify(changed ? "Game loaded" : "Game saved", "info")
  }setInterval(saveGame, 30000);