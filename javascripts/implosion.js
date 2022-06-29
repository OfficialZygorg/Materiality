function implodeReality(){
    if (player.particles>=player.implosion.cost) {
      if (confirm("Are you sure you want to implode reality? It will remove all your particles, and colliders. You will gain "+formatValue(player.options.notation,player.particles/1000,2,2)+" imploded particles, a bonus multiplier of "+fn2(player.implosion.boost*1.05)+" to your particle colliders and the limit will rise to "+player.implosion.cost * (player.implosion.timesImploded+1 * 2)+". This action is irreversible.")) {
        player.implosion.implodedParticles += player.particles/1000;
        player.particles -= player.implosion.cost;
        player.implosion.timesImploded += 1;
        player.implosion.cost = 1000 * (player.implosion.timesImploded * 2);
        player.particles = 10,
        player.lastUpdate = Date.now()
        player.particleColliders=[]
        makeColliders();
        player.implosion.boost *= 1.05;
        }
    }
}

//Goto game.js loop
function showImplosionBoost(){
    document.getElementById("implosionBoost").innerHTML = "Implosion Boost: "+fn2(player.implosion.boost);
}