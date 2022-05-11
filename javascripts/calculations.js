function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

function particles(){
    document.getElementById("particles").innerHTML = formatValue(mainData.notation, mainData.particles, 2, 1)
    }

function totalMult(){
    mainData.totalMult = mainData.vCUpMult + mainData.vCTClickBoost;
    document.getElementById("totalMult").innerHTML = formatValue(mainData.notation,mainData.totalMult,2,1);
    if (mainData.vCAC1Bought >= 1) {
        mainData.totalMult += mainData.vCAC1Mult;
        document.getElementById("totalMult").innerHTML = formatValue(mainData.notation,mainData.totalMult,2,1);}
        vCTClickBoost();vCResult();
    if (mainData.vCAC2Bought >= 1) {
        mainData.totalMult += mainData.vCAC2Mult;
        document.getElementById("totalMult").innerHTML = formatValue(mainData.notation,mainData.totalMult,2,1);}
    }
    

function vCResult(){
    mainData.vCResult = (mainData.voidClick + mainData.vCTClickBoost/1000) + mainData.totalMult + mainData.vCTClickBoost;
    document.getElementById("vCResult").innerHTML = formatValue(mainData.notation,mainData.vCResult,2,1);
if (mainData.vCAC1Bought >= 1) {
    mainData.vCResult += mainData.vCAC1Mult;
    document.getElementById("vCResult").innerHTML = formatValue(mainData.notation,mainData.vCResult,2,1);}
if (mainData.vCAC2Bought >= 1) {
    mainData.vCResult += mainData.vCAC2Mult;
    document.getElementById("vCResult").innerHTML = formatValue(mainData.notation,mainData.vCResult,2,1);}
    }

function vCTClickBoost(){
    mainData.vCTClickBoost = mainData.vCTClick / 100;
    document.getElementById("vCTClickBoost").innerHTML = formatValue(mainData.notation,mainData.vCTClickBoost,2,1);
    }

function voidClickerPlusClick(){
    mainData.vCTClick += 1;
    document.getElementById("vCTClick").innerHTML = formatValue(mainData.notation,mainData.vCTClick,0,0);
    }

function voidClicker(){
    mainData.particles += mainData.vCResult;
    particles();totalMult();voidClickerPlusClick();
}

function voidClickerUpgrade(){
    if(mainData.particles >= mainData.vCUpCost){
        mainData.particles -= mainData.vCUpCost;
        mainData.vCUpCost *= 2;
        mainData.vCUpBought += 1;
        mainData.vCUpMult = mainData.vCUpBought * 4;
        document.getElementById("vCUpCost").innerHTML = formatValue(mainData.notation,mainData.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(mainData.notation,mainData.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(mainData.notation,mainData.vCUpMult,2,1);
        particles();totalMult();
    }}
        
function voidClickerAutoClicker1(){
    if(mainData.particles >= mainData.vCAC1Cost){
        mainData.particles -= mainData.vCAC1Cost;
        mainData.vCAC1Cost *= 3;
        mainData.vCAC1Bought += 1;
        mainData.vCAC1ClickTime -= 10;
        mainData.vCAC1Mult = mainData.vCAC1Bought * 2;
        document.getElementById("vCAC1Bought").innerHTML = formatValue(mainData.notation,mainData.vCAC1Bought,0,0);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(mainData.notation,mainData.vCAC1Cost,0,0);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(mainData.notation,mainData.vCAC1Mult,2,1);
        value_limit(mainData.vCAC1ClickTime,1)
        particles();totalMult();
    }}

function vCAC1Loop(){
    if (mainData.vCAC1Bought >= 1) {
        voidClicker();totalMult();vCResult();
}}setInterval(vCAC1Loop, value_limit(mainData.vCAC1ClickTime,1));
function voidClickerUpgradeSum(){
    if (mainData.vCAC1Bought >= 1) {
        mainData.vCUpCost *= 2+mainData.vCAC1Bought;
        mainData.vCUpBought += mainData.vCAC1Bought;
        mainData.vCUpMult = mainData.vCUpBought * 1.25;
        document.getElementById("vCUpCost").innerHTML = formatValue(mainData.notation,mainData.vCUpCost,2,1);
        document.getElementById("vCUpBought").innerHTML = formatValue(mainData.notation,mainData.vCUpBought,0,0);
        document.getElementById("vCUpMult").innerHTML = formatValue(mainData.notation,mainData.vCUpMult,2,1);
    }totalMult();vCResult();
}setInterval(voidClickerUpgradeSum, (value_limit(500-(mainData.vCAC1Bought*10),1)));

function voidClickerAutoClicker2(){
    if(mainData.particles >= mainData.vCAC2Cost){
        mainData.particles -= mainData.vCAC2Cost;
        mainData.vCAC2Cost *= 4;
        mainData.vCAC2Bought += 1;
        mainData.vCAC2ClickTime -= 10;
        mainData.vCAC2Mult = mainData.vCAC2Bought * 8;
        value_limit(mainData.vCAC2ClickTime,1)
        document.getElementById("vCAC2Bought").innerHTML = formatValue(mainData.notation,mainData.vCAC2Bought,0,0);
        document.getElementById("vCAC2Cost").innerHTML = formatValue(mainData.notation,mainData.vCAC2Cost,2,1);
        document.getElementById("vCAC2Mult").innerHTML = formatValue(mainData.notation,mainData.vCAC2Mult,0,0);
        particles();totalMult();
    }}
        
function vCAC2Loop(){
    if (mainData.vCAC2Bought >= 1) {
        voidClicker();totalMult();vCResult();
}}setInterval(vCAC2Loop, value_limit(mainData.vCAC2ClickTime,1));
function voidClickerAutoClicker1Sum(){
    if (mainData.vCAC2Bought >= 1) {
        mainData.vCAC1Cost *= 3+mainData.vCAC2Bought;
        mainData.vCAC1Bought += mainData.vCAC2Bought;
        mainData.vCAC1Mult = mainData.vCAC1Bought * 4
        document.getElementById("vCAC1Bought").innerHTML = formatValue(mainData.notation,mainData.vCAC1Bought,0,0);
        document.getElementById("vCAC1Cost").innerHTML = formatValue(mainData.notation,mainData.vCAC1Cost,2,1);
        document.getElementById("vCAC1Mult").innerHTML = formatValue(mainData.notation,mainData.vCAC1Mult,2,1);
    }totalMult();vCResult();
}setInterval(voidClickerAutoClicker1Sum, (value_limit(500-(mainData.vCAC2Bought*10),1)));

function implodeReality(){
    if(mainData.particles >= mainData.implodeCost){
        mainData.implodedParticles += mainData.particles/mainData.implodedCost
        document.getElementsByClassName("implodedParticles").innerHTML = formatValue(mainData.notation,mainData.implodedParticles,2,1);
    }
}
function implodedParticles(){
    document.getElementById("implodedParticles").innerHTML = formatValue(mainData.notation, mainData.particles/mainData.implodedCost,2,1);
}setInterval(implodedParticles, 1);