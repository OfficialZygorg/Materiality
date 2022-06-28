//Game Data  
var player = {
  particles: fn(new Decimal(10)),
  pPerSecond: fn(new Decimal(0)),
  lastUpdate: Date.now(),
  particleColliders:[],
  implosion:{
    cost: fn(new Decimal(1000)),
    implodedParticles: fn(new Decimal(0)),
    timesImploded: fn(new Decimal(0)),
    unlockColliders:[],
    collidersBought: fn(new Decimal(0)),
  },
  stats:{
    totalParticles: new Decimal(0),
  },
  options:{
    notation: "Mixed scientific",
    commas: true,
  },
}

function fn(num) {
  if (num === 0) return num;
  else return parseFloat(num.toFixed(2));
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
      cost: fn(Math.pow(10,i)),
      bought: fn(new Decimal(0)),
      multiplier: fn(new Decimal(1)), 
      ammount: fn(new Decimal(0)),
      hasBeenBought: fn(new Decimal(0)),
    }
    player.particleColliders.push(particleCollider);
  }
}makeColliders()

function particlesPS(){
  player.implosion.collidersBought = player.particleColliders[0].hasBeenBought + player.particleColliders[1].hasBeenBought + player.particleColliders[2].hasBeenBought + player.particleColliders[3].hasBeenBought + player.particleColliders[4].hasBeenBought + player.particleColliders[5].hasBeenBought + player.particleColliders[6].hasBeenBought + player.particleColliders[7].hasBeenBought + player.particleColliders[8].hasBeenBought + player.particleColliders[9].hasBeenBought + player.particleColliders[10].hasBeenBought + player.particleColliders[11].hasBeenBought;
  if (player.implosion.collidersBought<2) {
    pPerSecond = (player.particleColliders[0].ammount * player.particleColliders[0].multiplier)
    document.getElementById("particlesPerSecond").innerHTML = "Particles per second: "+fn(pPerSecond)
  }
  else if (player.implosion.collidersBought>1) {
    for (i=0; i<player.implosion.collidersBought; i++) {
      pPerSecond = (player.particleColliders[0].ammount * player.particleColliders[0].multiplier) + (player.particleColliders[i].ammount * player.particleColliders[i].multiplier);
      document.getElementById("particlesPerSecond").innerHTML = "Particles per second: "+fn(pPerSecond)
    }
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
    player.particles = valBetween(player.particles, 0, player.implosion.cost);
  }
  document.getElementById("particlesLimit").innerHTML = "Particles Limit: " + formatValue(player.options.notation,player.implosion.cost,2,1);
}setInterval(particlesLimitedAmmount, 1);

function buyGenerators(i){
  if (player.particleColliders[i].cost>player.particles) return;
  player.particles -= player.particleColliders[i].cost;
  player.particleColliders[i].ammount += 1 * player.particleColliders[i].multiplier
  player.particleColliders[i].bought += 1
  if (player.particleColliders[i].bought%10==0) {player.particleColliders[i].multiplier = player.particleColliders[i].multiplier * 2;}
  player.particleColliders[i].multiplier *= 1.05
  player.particleColliders[i].cost *= 1.5
  player.particleColliders[i].hasBeenBought = 1
}

function buyAll(){
  for (i=0; i<player.particleColliders.length; i++) {
    if (player.particles>=player.particleColliders[i].cost) {
      player.particles -= player.particleColliders[i].cost;
      player.particleColliders[i].ammount += 1 * player.particleColliders[i].multiplier
      player.particleColliders[i].bought += 1
      if (player.particleColliders[i].bought%10==0) {player.particleColliders[i].multiplier = player.particleColliders[i].multiplier * 2;}
      player.particleColliders[i].multiplier *= 1.05
      player.particleColliders[i].cost *= 1.5
      player.particleColliders[i].hasBeenBought = 1
    }
  }
}

function updateGUI(){
  document.getElementById("particlesAmmount").textContent = "You have: "+formatValue(player.options.notation,player.particles,2,2)+" particles";
  document.getElementById("particleCollider0").innerHTML = "Buy Particle Collider "+1+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[0].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[0].cost,2,2)+"<br> Bought: "+player.particleColliders[0].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[0].multiplier,2,2);
  for (i=1; i<player.particleColliders.length; i++) {
    document.getElementById("particleCollider"+i).innerHTML = "Buy Particle Collider "+(i+1)+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[i].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[i].cost,2,2)+"<br> Bought: "+player.particleColliders[i].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[i].multiplier,2,2);
  }
  if (player.implosion.timesImploded>0) {
    document.getElementById("implodedParticlesAmmount").innerHTML = "You have: "+formatValue(player.options.notation,player.implosion.implodedParticles,2,2)+" imploded particles";
  }
}

function productionLoop(diff){
  player.particles += player.particleColliders[0].ammount * player.particleColliders[0].multiplier * diff;
  for (let i=1; i<player.particleColliders.length; i++) {
    player.particleColliders[i-1].ammount += player.particleColliders[i].ammount * player.particleColliders[i].multiplier * diff / 5; 
  }
}

function implodedParticlesShow(){
  document.getElementById("implodedRealityButton").innerHTML = "Implode Reality<br>Gain "+formatValue(player.options.notation,player.particles/1000,2,2)+"<br>imploded particles<br> Cost: "+formatValue(player.options.notation,player.implosion.cost,2,1)+" particles";
}

function implodeReality(){
  if (player.particles>=player.implosion.cost) {
    player.implosion.implodedParticles += player.particles/1000;
    player.particles -= player.implosion.cost;
    player.implosion.timesImploded += 1;
    player.implosion.cost = 1000 * (player.implosion.timesImploded * 2);
    player.particles = 10,
    player.lastUpdate = Date.now()
    player.particleColliders=[]
    makeColliders();
  }
}

function makeUnlockers(){
  for (i=2; i<player.particleColliders.length; i++) {
    let unlockCollider = {
      cost: i*2,
      bought: 0,
    }
    player.implosion.unlockColliders.push(unlockCollider);
  }
}makeUnlockers();

function showUnlockGenerators(i){
  for (i=2; i<player.particleColliders.length; i++) {
    document.getElementById("unlockGenerator"+i).innerHTML = "Unlock Particle Collider "+(i+1)+"<br> Cost: "+formatValue(player.options.notation,player.implosion.unlockColliders[i-2].cost,2,0)+" imploded particles";
    if(player.implosion.implodedParticles>=player.implosion.unlockColliders[i-2].cost) {document.getElementById("unlockGenerator"+(i)).style.borderColor = "green";}else {document.getElementById("unlockGenerator"+(i)).style.borderColor = "red";}
  }
}setInterval(showUnlockGenerators, 50);

function unlockGenerator(i){
  if (player.implosion.unlockColliders[i].cost>player.implosion.implodedParticles) return;
  player.implosion.implodedParticles -= player.implosion.unlockColliders[i].cost;
  player.implosion.unlockColliders[i].bought += 1;
  showDiv("particleCollider"+i);
}

function mainLoop(){
  var diff = (Date.now() - player.lastUpdate) / 1000;
  productionLoop(diff);updateGUI();implodedParticlesShow();particlesPS();
  player.lastUpdate = Date.now();
}setInterval(mainLoop, 50);

function revealParticleColliders(){for(i=2;i<player.implosion.timesImploded;i++){if(player.particles>=player.particleColliders[i].cost){showDiv("particleCollider"+i);}}}
function implodeRealityShow(){if(player.particles>=player.implosion.cost){showDiv("implodedRealityButton");}if(player.implosion.timesImploded>=1){showDiv("implodedRealityButton");}}
function revealImplodeRealityTab(){if(player.implosion.implodedParticles>=1){show("implodedRealityTab");}}
function reveals(){
  implodeRealityShow();revealImplodeRealityTab();revealParticleColliders();canBuy();
}setInterval(reveals, 50);