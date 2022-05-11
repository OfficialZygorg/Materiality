function onLoad(){
    document.getElementById("particles").innerHTML = formatValue(mainData.notation, mainData.particles, 2, 1)

    document.getElementById("vCUpMult").innerHTML = formatValue(mainData.notation,mainData.vCUpMult,0,0);
    document.getElementById("totalMult").innerHTML = formatValue(mainData.notation,mainData.totalMult,2,1);
    document.getElementById("vCResult").innerHTML = formatValue(mainData.notation,mainData.vCResult,2,1);

    document.getElementById("vCTClickBoost").innerHTML = formatValue(mainData.notation,mainData.vCTClickBoost,2,1);
    document.getElementById("vCTClick").innerHTML = formatValue(mainData.notation,mainData.vCTClick,0,0);
    document.getElementById("vCUpCost").innerHTML = formatValue(mainData.notation,mainData.vCUpCost,0,0);
    document.getElementById("vCUpBought").innerHTML = formatValue(mainData.notation,mainData.vCUpBought,0,0);
    document.getElementById("vCUpMult").innerHTML = formatValue(mainData.notation,mainData.vCUpMult,0,0);
    
    document.getElementById("vCAC1Bought").innerHTML = formatValue(mainData.notation,mainData.vCAC1Bought,0,0);
    document.getElementById("vCAC1Cost").innerHTML = formatValue(mainData.notation,mainData.vCAC1Cost,0,0);
    document.getElementById("vCAC1Mult").innerHTML = formatValue(mainData.notation,mainData.vCAC1Mult,0,0);

    document.getElementById("vCAC2Bought").innerHTML = formatValue(mainData.notation,mainData.vCAC2Bought,0,0);
    document.getElementById("vCAC2Cost").innerHTML = formatValue(mainData.notation,mainData.vCAC2Cost,0,0);
    document.getElementById("vCAC2Mult").innerHTML = formatValue(mainData.notation,mainData.vCAC2Mult,0,0);

    document.getElementsByClassName("implodedParticles").innerHTML = formatValue(mainData.notation,mainData.implodedParticles,2,1);
}
window.onload = onLoad();