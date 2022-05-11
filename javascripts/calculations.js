function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

function particles(){
    document.getElementById("particles").innerHTML = formatValue(player.options.notation, player.particles, 2, 1)
    }

function totalMult(){
    player.totalMult = player.void.vCUpMult + player.void.vCTClickBoost + player.void.vCAC1Mult + player.void.vCAC2Mult;
    document.getElementById("totalMult").innerHTML = formatValue(player.options.notation,player.totalMult,2,1);
    }
    

function vCResult(){
    player.void.vCResult = 1.25 * (player.void.voidClick + player.void.vCTClickBoost/1000 + player.totalMult);
    document.getElementById("vCResult").innerHTML = formatValue(player.options.notation,player.void.vCResult,2,1);
    totalMult();vCTClickBoost();
    }

function vCTClickBoost(){
    player.void.vCTClickBoost = player.void.vCTClick / 100;
    document.getElementById("vCTClickBoost").innerHTML = formatValue(player.options.notation,player.void.vCTClickBoost,2,1);
    }

function voidClickerPlusClick(){
    player.void.vCTClick += 1;
    document.getElementById("vCTClick").innerHTML = formatValue(player.options.notation,player.void.vCTClick,0,0);
    vCResult();
    }

function voidClicker(){
    player.particles += player.void.vCResult;
    particles();totalMult();voidClickerPlusClick();vCResult();
}

function voidClickerUpgrade(){
    if(player.particles >= player.void.vCUpCost){
        player.particles -= player.void.vCUpCost;
        player.void.vCUpCost *= 2;
        player.void.vCUpBought += 1;
        player.void.vCUpMult = player.void.vCUpBought * 4;
        document.getElementById("vCUpCost").innerHTML = formatValue(player.options.notation,player.void.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(player.options.notation,player.void.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(player.options.notation,player.void.vCUpMult,2,1);
        particles();vCResult();
    }}
        
function voidClickerAutoClicker1(){
    if(player.particles >= player.void.vCAC1Cost){
        player.particles -= player.void.vCAC1Cost;
        player.void.vCAC1Cost *= 3;
        player.void.vCAC1Bought += 1;
        player.void.vCAC1ClickTime -= 10;
        player.void.vCAC1Mult = player.void.vCAC1Bought * 2;
        document.getElementById("vCAC1Bought").innerHTML = formatValue(player.options.notation,player.void.vCAC1Bought,0,0);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(player.options.notation,player.void.vCAC1Cost,0,0);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(player.options.notation,player.void.vCAC1Mult,2,1);
        value_limit(player.void.vCAC1ClickTime,1)
        particles();vCResult();
    }}

function vCAC1Loop(){
    if (player.void.vCAC1Bought >= 1) {
        voidClicker();
}}setInterval(vCAC1Loop, value_limit(player.void.vCAC1ClickTime,1));
function voidClickerUpgradeSum(){
    if (player.void.vCAC1Bought >= 1) {
        player.void.vCUpCost *= 2+player.void.vCAC1Bought;
        player.void.vCUpBought += player.void.vCAC1Bought;
        player.void.vCUpMult = player.void.vCUpBought * 1.25;
        document.getElementById("vCUpCost").innerHTML = formatValue(player.options.notation,player.void.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(player.options.notation,player.void.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(player.options.notation,player.void.vCUpMult,2,1);
    }vCResult();
}setInterval(voidClickerUpgradeSum, (value_limit(500-(player.void.vCAC1Bought*10),1)));

function voidClickerAutoClicker2(){
    if(player.particles >= player.void.vCAC2Cost){
        player.particles -= player.void.vCAC2Cost;
        player.void.vCAC2Cost *= 4;
        player.void.vCAC2Bought += 1;
        player.void.vCAC2ClickTime -= 10;
        player.void.vCAC2Mult = player.void.vCAC2Bought * 8;
        document.getElementById("vCAC2Bought").innerHTML = formatValue(player.options.notation,player.void.vCAC2Bought,0,0);
        document.getElementById("vCAC2Cost").innerHTML = formatValue(player.options.notation,player.void.vCAC2Cost,2,1);
        document.getElementById("vCAC2Mult").innerHTML = formatValue(player.options.notation,player.void.vCAC2Mult,0,0);
        value_limit(player.void.vCAC2ClickTime,1)
        particles();vCResult();
    }}
        
function vCAC2Loop(){
    if (player.void.vCAC2Bought >= 1) {
        voidClicker();vCResult();
}}setInterval(vCAC2Loop, value_limit(player.void.vCAC2ClickTime,1));
function voidClickerAutoClicker1Sum(){
    if (player.void.vCAC2Bought >= 1) {
        player.void.vCAC1Cost *= 3+player.void.vCAC2Bought;
        player.void.vCAC1Bought += player.void.vCAC2Bought;
        player.void.vCAC1Mult = player.void.vCAC1Bought * 4
        document.getElementById("vCAC1Bought").innerHTML = formatValue(player.options.notation,player.void.vCAC1Bought,0,0);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(player.options.notation,player.void.vCAC1Cost,2,1);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(player.options.notation,player.void.vCAC1Mult,2,1);
    }vCResult();
}setInterval(voidClickerAutoClicker1Sum, (value_limit(500-(player.void.vCAC2Bought*10),1)));

function implodeReality(){
    if(player.particles >= player.implodeCost){
        player.implodedParticles += player.particles/player.implodedCost
        document.getElementsByClassName("implodedParticles").innerHTML = formatValue(player.options.notation,player.implodedParticles,2,1);
    }vCResult();particles();
}
function implodedParticles(){
    document.getElementById("implodedParticles").innerHTML = formatValue(player.options.notation, player.particles/player.implodedCost,2,1);
}setInterval(implodedParticles, 1);