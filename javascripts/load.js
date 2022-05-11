function onLoad(){
    document.getElementById("particles").innerHTML = formatValue(randomStuff.notation, gameData.particles, 2, 1)

    document.getElementById("vCUpMult").innerHTML = formatValue(randomStuff.notation,gameData.vCUpMult,0,0);
    document.getElementById("totalMult").innerHTML = formatValue(randomStuff.notation,gameData.totalMult,2,1);
    document.getElementById("vCResult").innerHTML = formatValue(randomStuff.notation,gameData.vCResult,2,1);

    document.getElementById("vCTClickBoost").innerHTML = formatValue(randomStuff.notation,gameData.vCTClickBoost,2,1);
    document.getElementById("vCTClick").innerHTML = formatValue(randomStuff.notation,gameData.vCTClick,0,0);
    document.getElementById("vCUpCost").innerHTML = formatValue(randomStuff.notation,gameData.vCUpCost,0,0);
    document.getElementById("vCUpBought").innerHTML = formatValue(randomStuff.notation,gameData.vCUpBought,0,0);
    document.getElementById("vCUpMult").innerHTML = formatValue(randomStuff.notation,gameData.vCUpMult,0,0);
    
    document.getElementById("vCAC1Bought").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Bought,0,0);
    document.getElementById("vCAC1Cost").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Cost,0,0);
    document.getElementById("vCAC1Mult").innerHTML = formatValue(randomStuff.notation,gameData.vCAC1Mult,0,0);

    document.getElementById("vCAC2Bought").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Bought,0,0);
    document.getElementById("vCAC2Cost").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Cost,0,0);
    document.getElementById("vCAC2Mult").innerHTML = formatValue(randomStuff.notation,gameData.vCAC2Mult,0,0);

    document.getElementsByClassName("implodedParticles").innerHTML = formatValue(randomStuff.notation,implodedReality.implodedParticles,2,1);
}
onLoad();