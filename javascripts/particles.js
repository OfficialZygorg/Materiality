//Goto game.js loop
function particlesLimitedAmmount() {
    if (player.particles >= player.implosion.cost) {
      player.particles = valBetween(player.particles, 0, player.implosion.cost);
    }
    document.getElementById("particlesLimit").innerHTML = "Particles Limit: " + formatValue(player.options.notation,player.implosion.cost,2,1);
}setInterval(particlesLimitedAmmount, 1);

function buy1(){
    for (i=player.particleColliders.length-1; i>=0; i--) {
      if (player.particles>=player.particleColliders[i].cost && player.particleColliders[i].unlocked==1) {
            player.particles -= player.particleColliders[i].cost;
            player.particleColliders[i].ammount += 1 * player.particleColliders[i].multiplier
            player.particleColliders[i].bought += 1
            if (player.particleColliders[i].bought%10==0) {player.particleColliders[i].multiplier = player.particleColliders[i].multiplier * 2;}
            player.particleColliders[i].multiplier *= 1.05 * player.implosion.boost;
            player.particleColliders[i].cost *= 1.5
            player.particleColliders[i].hasBeenBought = 1
        }
    }
}
  
function buyMax(){
    for (i=player.particleColliders.length-1; i>=0; i--) {
        while (player.particles>=player.particleColliders[i].cost && player.particleColliders[i].unlocked==1) {
            player.particles -= player.particleColliders[i].cost;
            player.particleColliders[i].ammount += 1 * player.particleColliders[i].multiplier
            player.particleColliders[i].bought += 1
            if (player.particleColliders[i].bought%10==0) {player.particleColliders[i].multiplier = player.particleColliders[i].multiplier * 2;}
            player.particleColliders[i].multiplier *= 1.05 * player.implosion.boost;
            player.particleColliders[i].cost *= 1.5
            player.particleColliders[i].hasBeenBought = 1
        }
    }
}

function buyGenerators(i){
    if (player.particleColliders[i].cost>player.particles) return;
    player.particles -= player.particleColliders[i].cost;
    player.particleColliders[i].ammount += 1 * player.particleColliders[i].multiplier
    player.particleColliders[i].bought += 1
    if (player.particleColliders[i].bought%10==0) {player.particleColliders[i].multiplier = player.particleColliders[i].multiplier * 2;}
    player.particleColliders[i].multiplier *= 1.05 * player.implosion.boost;
    player.particleColliders[i].cost *= 1.5
    player.particleColliders[i].hasBeenBought = 1
}

//Goto game.js loop
function particlesPS(){
  player.implosion.collidersBought = player.particleColliders[0].hasBeenBought + player.particleColliders[1].hasBeenBought + player.particleColliders[2].hasBeenBought + player.particleColliders[3].hasBeenBought + player.particleColliders[4].hasBeenBought + player.particleColliders[5].hasBeenBought + player.particleColliders[6].hasBeenBought + player.particleColliders[7].hasBeenBought + player.particleColliders[8].hasBeenBought + player.particleColliders[9].hasBeenBought + player.particleColliders[10].hasBeenBought + player.particleColliders[11].hasBeenBought;
  if (player.implosion.collidersBought<2) {
    pPerSecond = (player.particleColliders[0].ammount * player.particleColliders[0].multiplier)
    document.getElementById("particlesPerSecond").innerHTML = "Particles per second: "+fn2(pPerSecond)
  }
  else if (player.implosion.collidersBought>1) {
    for (i=0; i<player.implosion.collidersBought; i++) {
      pPerSecond = (player.particleColliders[0].ammount * player.particleColliders[0].multiplier) + (player.particleColliders[i].ammount * player.particleColliders[i].multiplier);
      document.getElementById("particlesPerSecond").innerHTML = "Particles per second: "+fn2(pPerSecond)
    }
  }
}