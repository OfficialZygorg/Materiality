//Game Data  
var player = {
  particles: 100,
  result: 0,
  lastUpdate: Date.now(),
  particleColliders:[],
  implosion:{
    cost: 10*10e1,
    implodedParticles: 0,
  }, 
  options:{
    notation: "Mixed scientific",
    commas: true,
  },
}

function openTab(evt, idName) {
  var i, tabName, tablinks;
  tabName = document.getElementsByClassName("tabName");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
}

for (i=0; i<=11; i++) {
  let particleCollider = {
    cost: Math.pow(Math.pow(10,i),i)*10,
    bought: 0,
    multiplier: 1, 
    ammount: 0,
  }
  player.particleColliders.push(particleCollider);
}

function updateGUI(){
  document.getElementById("particlesAmmount").textContent = "You have: "+formatValue(player.options.notation,player.particles,2,1)+" particles";
  for (i=0; i<player.particleColliders.length; i++) {
    document.getElementById("particleCollider"+i).innerHTML = "Ammount: " + formatValue(player.options.notation,player.particleColliders[i].ammount,2,1) +" Cost: "+formatValue(player.options.notation,player.particleColliders[i].cost,2,1)+" ("+player.particleColliders[i].bought+" Bought. Multiplier of "+formatValue(player.options.notation,player.particleColliders[i].multiplier,2,1)+")";
  }
}

function productionLoop(diff){
  player.particles += player.particleColliders[0].ammount * player.particleColliders[0].multiplier * diff;
  for (let i=1; i<player.particleColliders.length; i++) {
    player.particleColliders[i-1].ammount += player.particleColliders[i-1].ammount * player.particleColliders[i-1].multiplier * diff / 5; 
  }
}

function mainLoop(diff){
  var diff = (Date.now - player.lastUpdate) / 1000;
  productionLoop(diff);
  updateGUI();particles();
  player.lastUpdate = Date.now();
}
setInterval(mainLoop, 50);

function revealColliders(){for (i=0; i<=12; i++){if(player.implosion.particleColliders >= 1){if(player.particles >= player.particleColliders.particleCollider+[i].cost){document.getElementById("particleCollider[i]").style.display = "block";}}}};
function implodeReality(){if(player.particles >= player.implosion.implodedCost){document.getElementById("implodedRealityButton").display = block;}}
function revealImplodeRealityTab(){if (player.implosion.implodedParticles >= 1){document.getElementsByClassName("implodedReality").hidden = false;}}
function reveals(){
  implodeReality();revealImplodeRealityTab();
}setInterval(reveals, 50);

function buyGenerators(i){
  if (player.particleColliders[i].cost>player.particles) return;
  player.particles -= player.particleColliders[i].cost;
  player.particleColliders[i].ammount += 1
  player.particleColliders[i].bought += 1
  player.particleColliders[i].multiplier *= 1.05
  player.particleColliders[i].cost *= 1.5
}