function buttonHighligts() {
    if (gameData.particles >= gameData.vCUpCost) {
        document.getElementById('voidClickerUpgrade').style.borderColor = "black";
    } else {
        document.getElementById('voidClickerUpgrade').style.borderColor = "";
    }
    if (gameData.particles >= gameData.vCAC1Cost) {
        document.getElementById('voidClickerAutoClicker1').style.borderColor = "black";
    } else {
        document.getElementById('voidClickerAutoClicker1').style.borderColor = "";
    }
};
setInterval(buttonHighligts, 1);