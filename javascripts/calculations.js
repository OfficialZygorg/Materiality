function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
  }

function particles(){
    document.getElementById("particles").innerHTML = gameData.particles.toFixed(2);
    var element = document.getElementById("particles");
    element.textContent = formatValue(gameData.notation, gameData.particles, 2, 1)}

function totalMult(){
    gameData.totalMult = gameData.vCUpMult + gameData.vCTClickBoost;
    gameData.totalMultSum = gameData.vCUpMult + gameData.vCTClickBoost
    document.getElementById("vCUpMult").innerHTML = gameData.vCUpMult;
    document.getElementById("totalMult").innerHTML = gameData.totalMult.toFixed(2);
    if (gameData.vCAC1Bought >= 1) {
        gameData.totalMult = gameData.totalMultSum + gameData.vCAC1Mult;
        gameData.totalMultSum += gameData.totalMultSum + gameData.vCAC1Mult;
        document.getElementById("totalMult").innerHTML = gameData.totalMult.toFixed(2);}
        vCTClickBoost();vCResult();
    if (gameData.vCAC2Bought >= 1) {
        gameData.totalMult = gameData.totalMultSum + gameData.vCAC2Mult;
        gameData.totalMultSum += gameData.totalMultSum + gameData.vCAC2Mult;
        document.getElementById("totalMult").innerHTML = gameData.totalMult.toFixed(2);}
    var element = document.getElementById("totalMult");
    element.textContent = formatValue(gameData.notation, gameData.totalMult, 2, 1)}
    

function vCResult(){
    gameData.vCResult = gameData.totalMult + gameData.vCTClickBoost;
    gameData.vCResultSum = gameData.vCResult + gameData.vCTClickBoost;
    document.getElementById("vCResult").innerHTML = gameData.vCResult.toFixed(2);
if (gameData.vCAC1Bought >= 1) {
    gameData.vCResult = gameData.vCResultSum + gameData.vCAC1Mult;
    gameData.vCResultSum = gameData.vCResultSum + gameData.vCAC1Mult;
    document.getElementById("vCResult").innerHTML = gameData.vCResult.toFixed(2);}
if (gameData.vCAC2Bought >= 1) {
    gameData.vCResult = gameData.vCResultSum + gameData.vCAC2Mult;
    gameData.vCResultSum = gameData.vCResultSum + gameData.vCAC2Mult;
    document.getElementById("vCResult").innerHTML = gameData.vCResult.toFixed(2);}
    var element = document.getElementById("vCResult");
    element.textContent = formatValue(gameData.notation,gameData.vCResult,2,1);
}

function vCTClickBoost(){
    gameData.vCTClickBoost = gameData.vCTClick / 100;
    document.getElementById("vCTClickBoost").innerHTML = gameData.vCTClickBoost.toFixed(2);
    var element = document.getElementById("vCTClickBoost");
    element.textContent = formatValue(gameData.notation,gameData.vCTClickBoost,2,1)}

function voidClickerPlusClick(){
    gameData.vCTClick += 1;
    document.getElementById("vCTClick").innerHTML = gameData.vCTClick;
    var element = document.getElementById("vCTClick");
    element.textContent = formatValue(gameData.notation,gameData.vCTClick,2,1)}

function voidClicker(){
    gameData.particles += gameData.vCResult;
    particles();totalMult();voidClickerPlusClick();}

function voidClickerUpgrade(){
    if(gameData.particles >= gameData.vCUpCost){
        gameData.particles -= gameData.vCUpCost;
        gameData.vCUpCost *= 2;
        gameData.vCUpBought += 1;
        gameData.vCUpMult = gameData.vCUpBought * 4;
        document.getElementById("vCUpCost").innerHTML = gameData.vCUpCost.toFixed(2);
        document.getElementById("vCUpBought").innerHTML = gameData.vCUpBought;
        var element = document.getElementById("vCUpCost");
        element.textContent = formatValue(gameData.notation,gameData.vCUpCost,2,1)
        var element = document.getElementById("vCUpBought");
        element.textContent = formatValue(gameData.notation,gameData.vCUpBought,2,1)}
        particles();totalMult();}
        
function voidClickerAutoClicker1(){
    if(gameData.particles >= gameData.vCAC1Cost){
        gameData.particles -= gameData.vCAC1Cost;
        gameData.vCAC1Cost *= 4;
        gameData.vCAC1Bought += 1;
        gameData.vCAC1ClickTime -= 10;
        gameData.vCAC1Mult = gameData.vCAC1Bought * 8;
        document.getElementById("vCAC1Bought").innerHTML = gameData.vCAC1Bought;
        document.getElementById("vCAC1Cost").innerHTML = gameData.vCAC1Cost;
        value_limit(gameData.vCAC1ClickTime,1)
        document.getElementById("vCAC1Mult").innerHTML = gameData.vCAC1Mult;
        var element = document.getElementById("vCAC1Bought");
        element.textContent = formatValue(gameData.notation,gameData.vCAC1Bought,2,1)
        var element = document.getElementById("vCAC1Cost");
        element.textContent = formatValue(gameData.notation,gameData.vCAC1Cost,2,1)
        var element = document.getElementById("vCAC1Mult");
        element.textContent = formatValue(gameData.notation,gameData.vCAC1Mult,2,1)
        particles();totalMult();}}

function vCAC1Loop(){
    if (gameData.vCAC1Bought >= 1) {
        voidClicker();totalMult();
}}setInterval(vCAC1Loop, value_limit(gameData.vCAC1ClickTime,1));
function voidClickerUpgradeSum(){
    if (gameData.vCAC1Bought >= 1) {
        gameData.vCUpCost *= 2;
        gameData.vCUpBought += 1;
        gameData.vCUpMult = gameData.vCUpBought * 4;
        var element = document.getElementById("vCUpCost");
        element.textContent = formatValue(gameData.notation,gameData.vCUpCost,2,1)
        var element = document.getElementById("vCUpBought");
        element.textContent = formatValue(gameData.notation,gameData.vCUpBought,2,1)
    }totalMult();vCResult();
}setInterval(voidClickerUpgradeSum, 5000-(gameData.vCAC1Bought*10));

function voidClickerAutoClicker2(){
    if(gameData.particles >= gameData.vCAC2Cost){
        gameData.particles -= gameData.vCAC2Cost;
        gameData.vCAC2Cost *= 8;
        gameData.vCAC2Bought += 1;
        gameData.vCAC2ClickTime -= 10;
        gameData.vCAC2Mult = gameData.vCAC2Bought * 16;
        value_limit(gameData.vCAC2ClickTime,1)
        document.getElementById("vCAC2Bought").innerHTML = gameData.vCAC2Bought;
        document.getElementById("vCAC2Cost").innerHTML = gameData.vCAC2Cost;
        document.getElementById("vCAC2Mult").innerHTML = gameData.vCAC2Mult;
        var element = document.getElementById("vCAC2Bought");
        element.textContent = formatValue(gameData.notation,gameData.vCAC2Bought,2,1)
        var element = document.getElementById("vCAC2Cost");
        element.textContent = formatValue(gameData.notation,gameData.vCAC2Cost,2,1)
        var element = document.getElementById("vCAC2Mult");
        element.textContent = formatValue(gameData.notation,gameData.vCAC2Mult,2,1)
        particles();totalMult();}}
        
function vCAC2Loop(){
    if (gameData.vCAC2Bought >= 1) {
        voidClicker();totalMult();
}}setInterval(vCAC2Loop, value_limit(gameData.vCAC2ClickTime,1));
function voidClickerAutoClicker1Sum(){
    if (gameData.vCAC2Bought >= 1) {
        gameData.vCAC1Cost *= 4;
        gameData.vCAC1Bought += 1;
        gameData.vCAC1Mult = gameData.vCAC1Bought * 8;
        var element = document.getElementById("vCAC1Cost");
        element.textContent = formatValue(gameData.notation,gameData.vCAC1Cost,2,1)
        var element = document.getElementById("vCUpBought");
        element.textContent = formatValue(gameData.notation,gameData.vCAC1Bought,2,1)
    }totalMult();vCResult();
}setInterval(voidClickerAutoClicker1Sum, 5000-(gameData.vCAC2Bought*10));
