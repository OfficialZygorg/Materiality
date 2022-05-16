//Game Data  
var player = {
  particles: 10,
  result: 0,
  lastUpdate: Date.now(),
  particleColliders:[],
  implosion:{
    cost: 10*10e1,
    implodedParticles: 0,
    extraParticleColliders: 0,
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

for (i=1; i<=12; i++) {
  let particleCollider = {
    cost: Math.pow(10,i),
    bought: 0,
    multiplier: 1, 
    ammount: 0,
  }
  player.particleColliders.push(particleCollider);
}

function buyGenerators(i){
  if (player.particleColliders[i].cost>player.particles) return;
  player.particles -= player.particleColliders[i].cost;
  player.particleColliders[i].ammount += 1
  player.particleColliders[i].bought += 1
  player.particleColliders[i].multiplier *= 1.05
  player.particleColliders[i].cost *= 1.5
}

function updateGUI(){
  document.getElementById("particlesAmmount").textContent = "You have: "+formatValue(player.options.notation,player.particles,2,1)+" particles";
  document.getElementById("particleCollider0").innerHTML = "Buy Particle Collider "+1+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[0].ammount,2,1) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[0].cost,2,1)+"<br> Bought: "+player.particleColliders[0].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[0].multiplier,2,1);
  for (i=1; i<player.particleColliders.length; i++) {
    document.getElementById("particleCollider"+i).innerHTML = "Buy Particle Collider "+(i+1)+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[i].ammount,2,1) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[i].cost,2,1)+"<br> Bought: "+player.particleColliders[i].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[i].multiplier,2,1);
  }
}

function productionLoop(diff){
  player.particles += player.particleColliders[0].ammount * player.particleColliders[0].multiplier * diff;
  for (let i=1; i<player.particleColliders.length; i++) {
    player.particleColliders[i].ammount += player.particleColliders[i].ammount * player.particleColliders[i].multiplier * diff / 5; 
  }
}

function mainLoop(){
  var diff = (Date.now() - player.lastUpdate) / 1000;
  productionLoop(diff);updateGUI();
  player.lastUpdate = Date.now();
}
setInterval(mainLoop, 50);

function implodeReality(){if(player.particles >= player.implosion.implodedCost){document.getElementById("implodedRealityButton").display = block;}}
function revealImplodeRealityTab(){if (player.implosion.implodedParticles >= 1){document.getElementsByClassName("implodedReality").hidden = false;}}
function reveals(){
  implodeReality();revealImplodeRealityTab();
}setInterval(reveals, 50);