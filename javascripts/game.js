//Game Data  
var player = {
  particles: fn2(new Decimal(10)),
  pPerSecond: fn2(new Decimal(0)),
  lastUpdate: Date.now(),
  particleColliders:[],
  implosion:{
    cost: fn2(new Decimal(1000)),
    implodedParticles: fn2(new Decimal(0)),
    timesImploded: fn0(new Decimal(0)),
    unlockColliders:[],
    collidersBought: fn0(new Decimal(0)),
    boost: fn2(new Decimal(1)),
  },
  stats:{
    totalParticles: new Decimal(0),
  },
  options:{
    notation: "Mixed scientific",
    commas: true,
  },
}

function makeColliders(){
    for (i=1; i<=12; i++) {
      let particleCollider = {
        total: fn2(new Decimal (0)),
        ammount: fn2(new Decimal(0)),
        cost: fn2(Math.pow(10,i)),
        bought: fn0(new Decimal(0)),
        multiplier: fn2(new Decimal(1)), 
        hasBeenBought: fn0(new Decimal(0)),
        unlocked: fn0(new Decimal(0)),
      }
      player.particleColliders.push(particleCollider);
    }
  }makeColliders()

function makeUnlockers(){
  for (i=2; i<player.particleColliders.length; i++) {
    let unlockCollider = {
      cost: i*25*2,
      bought: 0,
    }
    player.implosion.unlockColliders.push(unlockCollider);
  }
}makeUnlockers();

function implodedParticlesShow(){
  document.getElementById("implodedRealityButton").innerHTML = "Implode Reality<br>Gain "+formatValue(player.options.notation,player.particles/1000,2,2)+"<br>imploded particles<br> Cost: "+formatValue(player.options.notation,player.implosion.cost,2,1)+" particles";
}

function unlockCollider(collider){
player.particleColliders[collider].unlocked = 1;
}unlockCollider(0);unlockCollider(1);

function canBuy(){
    for (i=0; i<player.particleColliders.length; i++) {
      if (player.particles>=player.particleColliders[i].cost) {document.getElementById("particleCollider"+i).style.borderColor = "green";}else {document.getElementById("particleCollider"+i).style.borderColor = "red";}
      if(player.particles>=player.implosion.cost){document.getElementById("implodedRealityButton").style.borderColor = "green";}else {document.getElementById("implodedRealityButton").style.borderColor = "red";}
    }
}

function showUnlockGenerators(i){
  for (i=2; i<player.particleColliders.length; i++) {
    document.getElementById("unlockGenerator"+i).innerHTML = "Unlock Particle Collider "+(i+1)+"<br> Cost: "+formatValue(player.options.notation,player.implosion.unlockColliders[i-2].cost,2,0)+" imploded particles";
    if(player.implosion.implodedParticles>=player.implosion.unlockColliders[i-2].cost) {document.getElementById("unlockGenerator"+(i)).style.borderColor = "green";}else {document.getElementById("unlockGenerator"+(i)).style.borderColor = "red";}
  }
}setInterval(showUnlockGenerators, 50);

function unlockGenerator(i){
  if (player.implosion.implodedParticles>=player.implosion.unlockColliders[i].cost){
    player.implosion.implodedParticles -= player.implosion.unlockColliders[i].cost;
    player.implosion.unlockColliders[i].bought += 1;
    player.particleColliders[i].unlocked = 1;
    showDiv("particleCollider"+i);
    hideDiv("unlockGenerator"+i);
  };
}

function updateGUI(){
  document.getElementById("particlesAmmount").textContent = "You have: "+formatValue(player.options.notation,player.particles,2,2)+" particles";
  document.getElementById("particleCollider0").innerHTML ="Buy Particle Collider "+1+"<br> Generating: "+fn2(player.particleColliders[0].total)+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[0].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[0].cost,2,2)+"<br> Bought: "+player.particleColliders[0].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[0].multiplier,2,2);
  for (i=1; i<player.particleColliders.length; i++) {
    document.getElementById("particleCollider"+i).innerHTML = "Buy Particle Collider "+(i+1)+"<br> Total: "+fn2(player.particleColliders[i].total)+"<br> Ammount: " + formatValue(player.options.notation,player.particleColliders[i].ammount,2,2) +"<br> Cost: "+formatValue(player.options.notation,player.particleColliders[i].cost,2,2)+"<br> Bought: "+player.particleColliders[i].bought+"<br> Multiplier: "+formatValue(player.options.notation,player.particleColliders[i].multiplier,2,2);
  }
  if (player.implosion.timesImploded>0) {
    document.getElementById("implodedParticlesAmmount").innerHTML = "You have: "+formatValue(player.options.notation,player.implosion.implodedParticles,2,2)+" imploded particles";
  }
  for (i=0; i<player.particleColliders.length; i++) {
    player.particleColliders[i].total = player.particleColliders[i].ammount * player.particleColliders[i].multiplier;
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
  productionLoop(diff);updateGUI();implodedParticlesShow();particlesPS();showImplosionBoost();
  player.lastUpdate = Date.now();
}setInterval(mainLoop, 50);

// function revealParticleColliders(){for(i=2;i<player.implosion.timesImploded;i++){if(player.particles>=player.particleColliders[i].cost){showDiv("particleCollider"+i);}}}
function implodeRealityShow(){if(player.particles>=player.implosion.cost){showDiv("implodedRealityButton");}if(player.implosion.timesImploded>=1){showDiv("implodedRealityButton");}}
function revealImplodeRealityTab(){if(player.implosion.implodedParticles>=1){show("implodedRealityTab");}}
function reveals(){
  implodeRealityShow();revealImplodeRealityTab();canBuy();
}setInterval(reveals, 50);