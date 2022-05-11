function buttonHighligts() {
    if (gameData.particles >= gameData.vCUpCost) {
        document.getElementsByClassName('voidClickerUpgrade').style.borderColor = "black";
    } else {
        document.getElementsByClassName('voidClickerUpgrade').style.borderColor = "";
    }
    if (gameData.particles >= gameData.vCAC1Cost) {
        document.getElementsByClassName('voidClickerAutoClicker1').style.borderColor = "black";
    } else {
        document.getElementsByClassName('voidClickerAutoClicker1').style.borderColor  = "";
    }
}
// setInterval(buttonHighligts, 1)