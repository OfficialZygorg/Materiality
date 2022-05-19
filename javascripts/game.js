//Game Data  
var player = {
  particles: 10,
  result: 0,
  lastUpdate: Date.now(),
  particleColliders:[],
  implosion:{
    cost: 1000,
    implodedParticles: 0,
    timesImploded: 0,
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

function valBetween(v, min, max) {
  return (Math.min(max, Math.max(min, v)));
}

function showDiv(divId) {
  var x = document.getElementById(divId);
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function show(id){
  document.getElementById(id).removeAttribute("hidden");
}

function makeColliders(){
  for (i=1; i<=12; i++) {
    let particleCollider = {
      cost: Math.pow(10,i),
      bought: 0,
      multiplier: 1, 
      ammount: 0,
    }
    player.particleColliders.push(particleCollider);
  }
}makeColliders()

function particlesPS(){
  for (i=0; i<1; i++) {
    document.getElementById("particlesPerSecond").innerHTML = "Particles per second: "+formatValue(player.options.notation,player.particleColliders[i].ammount * player.particleColliders[i].multiplier,2,2);
  }
  for(i=2;i<player.implosion.timesImploded;i++){
    document.getElementById("particlesPerSecond").innerHTML += "Particles per second: "+formatValue(player.options.notation,player.particleColliders[i].ammount * player.particleColliders[i].multiplier,2,2);
  }
}

function canBuy(){
  for (i=0; i<player.particleColliders.length; i++) {
    if (player.particles>=player.particleColliders[i].cost) {document.getElementById("particleCollider"+i).style.borderColor = "green";}else {document.getElementById("particleCollider"+i).style.borderColor = "red";}
    if(player.particles>=player.implosion.cost){document.getElementById("implodedRealityButton").style.borderColor = "green";}else {document.getElementById("implodedRealityButton").style.borderColor = "red";}
  }
}

function particlesLimitedAmmount() {
  if (player.particles >= player.implosion.cost) {
    player.particles = valBetween(player.particles, 0, player.implosion.cost+1);
  }
  document.getElementById("particlesLimit").innerHTML = "Particles Limit: " + formatValue(player.options.notation,player.implosion.cost+1,2,1);
}setInterval(particlesLimitedAmmount, 1);

function buyGenerators(i){
  if (player.particleColliders[i].cost>player.particles) return;
  player.particles -= player.particleColliders[i].cost;
  player.particleColliders[i].ammount += 1
  player.particleColliders[i].bought += 1
  player.particleColliders[i].multiplier *= 1.05
  player.particleColliders[i].cost *= 1.5
}

function updateGUI(){
  document.getElementById("particlesAmmount").textContent = "You have: "+formatValue(player.options.notation,player.particles,2,2)+" particles";
  document.getElementById("particleCollider0").innerHTML = "Buy Particle Collider "+1+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[0].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[0].cost,2,2)+"<br> Bought: "+player.particleColliders[0].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[0].multiplier,2,2);
  for (i=1; i<player.particleColliders.length; i++) {
    document.getElementById("particleCollider"+i).innerHTML = "Buy Particle Collider "+(i+1)+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[i].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[i].cost,2,2)+"<br> Bought: "+player.particleColliders[i].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[i].multiplier,2,2);
  }
}

function productionLoop(diff){
  player.particles += player.particleColliders[0].ammount * player.particleColliders[0].multiplier * diff;
  for (let i=1; i<player.particleColliders.length; i++) {
    player.particleColliders[i-1].ammount += player.particleColliders[i].ammount * player.particleColliders[i].multiplier * diff / 5; 
  }
}

function mainLoop(){
  var diff = (Date.now() - player.lastUpdate) / 1000;
  productionLoop(diff);updateGUI();implodedParticlesShow();particlesPS();
  player.lastUpdate = Date.now();
}
setInterval(mainLoop, 50);

function implodedParticlesShow(){
  document.getElementById("implodedRealityButton").innerHTML = "Implode Reality<br>Gain 1 imploded particle<br> Cost: "+formatValue(player.options.notation,player.implosion.cost,2,1)+" particles";
}

function implodeReality(){
  if (player.particles>=player.implosion.cost) {
    player.particles -= player.implosion.cost;
    player.implosion.implodedParticles += 1;
    player.implosion.timesImploded += 1;
    player.implosion.cost *= (player.implosion.timesImploded * 2);
    player.particles = 10,
    player.result = 0,
    player.lastUpdate = Date.now()
    player.particleColliders=[]
    makeColliders();
  }
}

function revealParticleColliders(){for(i=2;i<player.implosion.timesImploded;i++){if(player.particles>=player.particleColliders[i].cost){showDiv("particleCollider"+i);}}}
function implodeRealityShow(){if(player.particles>=player.implosion.cost){showDiv("implodedRealityButton");}if(player.implosion.timesImploded>=1){showDiv("implodedRealityButton");}}
function revealImplodeRealityTab(){if(player.implosion.implodedParticles>=1){show("implodedRealityTab");}}
function reveals(){
  implodeRealityShow();revealImplodeRealityTab();revealParticleColliders();canBuy();
}setInterval(reveals, 50);