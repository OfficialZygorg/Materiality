function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

function particles(){
    document.getElementById("particles").innerHTML = formatValue(randomStuff.notation, gameData.particles, 2, 1)
    }

function totalMult(){
    gameData.totalMult = gameData.vCUpMult + gameData.vCTClickBoost;
    document.getElementById("totalMult").innerHTML = formatValue(randomStuff.notation,gameData.totalMult,2,1);
    if (gameData.vCAC1Bought >= 1) {
        gameData.totalMult += gameData.vCAC1Mult;
        document.getElementById("totalMult").innerHTML = formatValue(randomStuff.notation,gameData.totalMult,2,1);}
        vCTClickBoost();vCResult();
    if (gameData.vCAC2Bought >= 1) {
        gameData.totalMult += gameData.vCAC2Mult;
        document.getElementById("totalMult").innerHTML = formatValue(randomStuff.notation,gameData.totalMult,2,1);}
    }
    

function vCResult(){
    gameData.vCResult = (gameData.voidClick + gameData.vCTClickBoost/1000) + gameData.totalMult + gameData.vCTClickBoost;
    document.getElementById("vCResult").innerHTML = formatValue(randomStuff.notation,gameData.vCResult,2,1);
if (gameData.vCAC1Bought >= 1) {
    gameData.vCResult += gameData.vCAC1Mult;
    document.getElementById("vCResult").innerHTML = formatValue(randomStuff.notation,gameData.vCResult,2,1);}
if (gameData.vCAC2Bought >= 1) {
    gameData.vCResult += gameData.vCAC2Mult;
    document.getElementById("vCResult").innerHTML = formatValue(randomStuff.notation,gameData.vCResult,2,1);}
    }

function vCTClickBoost(){
    gameData.vCTClickBoost = gameData.vCTClick / 100;
    document.getElementById("vCTClickBoost").innerHTML = formatValue(randomStuff.notation,gameData.vCTClickBoost,2,1);
    }

function voidClickerPlusClick(){
    gameData.vCTClick += 1;
    document.getElementById("vCTClick").innerHTML = formatValue(randomStuff.notation,gameData.vCTClick,0,0);
    }

function voidClicker(){
    gameData.particles += gameData.vCResult;
    particles();totalMult();voidClickerPlusClick();
}

function voidClickerUpgrade(){
    if(gameData.particles >= gameData.vCUpCost){
        gameData.particles -= gameData.vCUpCost;
        gameData.vCUpCost *= 2;
        gameData.vCUpBought += 1;
        gameData.vCUpMult = gameData.vCUpBought * 4;
        document.getElementById("vCUpCost").innerHTML = formatValue(randomStuff.notation,gameData.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(randomStuff.notation,gameData.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(randomStuff.notation,gameData.vCUpMult,2,1);
        particles();totalMult();
    }}
        
function voidClickerAutoClicker1(){
    if(gameData.particles >= gameData.vCAC1Cost){
        gameData.particles -= gameData.vCAC1Cost;
        gameData.vCAC1Cost *= 3;
        gameData.vCAC1Bought += 1;
        gameData.vCAC1ClickTime -= 10;
        gameData.vCAC1Mult = gameData.vCAC1Bought * 2;
        document.getElementById("vCAC1Bought").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Bought,2,1);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Cost,0,0);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Mult,2,1);
        value_limit(gameData.vCAC1ClickTime,1)
        particles();totalMult();
    }}

function vCAC1Loop(){
    if (gameData.vCAC1Bought >= 1) {
        voidClicker();totalMult();
}}setInterval(vCAC1Loop, value_limit(gameData.vCAC1ClickTime,1));
function voidClickerUpgradeSum(){
    if (gameData.vCAC1Bought >= 1) {
        gameData.vCUpCost *= 2+gameData.vCAC1Bought;
        gameData.vCUpBought += gameData.vCAC1Bought;
        gameData.vCUpMult = gameData.vCUpBought * 1.25;
        document.getElementById("vCUpCost").innerHTML = formatValue(randomStuff.notation,gameData.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(randomStuff.notation,gameData.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(randomStuff.notation,gameData.vCUpMult,2,1);
    }totalMult();vCResult();
}setInterval(voidClickerUpgradeSum, (value_limit(1000-(gameData.vCAC1Bought*10),1)));

function voidClickerAutoClicker2(){
    if(gameData.particles >= gameData.vCAC2Cost){
        gameData.particles -= gameData.vCAC2Cost;
        gameData.vCAC2Cost *= 4;
        gameData.vCAC2Bought += 1;
        gameData.vCAC2ClickTime -= 10;
        gameData.vCAC2Mult = gameData.vCAC2Bought * 8;
        value_limit(gameData.vCAC2ClickTime,1)
        document.getElementById("vCAC2Bought").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Bought,0,0);
        document.getElementById("vCAC2Cost").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Cost,2,1);
        document.getElementById("vCAC2Mult").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Mult,0,0);
        particles();totalMult();
    }}
        
function vCAC2Loop(){
    if (gameData.vCAC2Bought >= 1) {
        voidClicker();totalMult();
}}setInterval(vCAC2Loop, value_limit(gameData.vCAC2ClickTime,1));
function voidClickerAutoClicker1Sum(){
    if (gameData.vCAC2Bought >= 1) {
        gameData.vCAC1Cost *= 3+gameData.vCAC2Bought;
        gameData.vCAC1Bought += gameData.vCAC2Bought;
        gameData.vCAC1Mult = gameData.vCAC1Bought * 4
        document.getElementById("vCAC1Bought").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Bought,0,0);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Cost,2,1);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Mult,2,1);
    }totalMult();vCResult();
}setInterval(voidClickerAutoClicker1Sum, (value_limit(1000-(gameData.vCAC2Bought*10),1)));

function implodeReality(){
    if(gameData.particles >= implodedReality.implodeCost){
        implodedReality.implodedParticles += gameData.particles/implodedReality.implodedCost
        document.getElementsByClassName("implodedParticles").innerHTML = formatValue(randomStuff.notation,implodedReality.implodedParticles,2,1);
    }
}