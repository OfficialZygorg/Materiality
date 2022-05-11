// function buttonHighligts() {
//     if (gameData.particles >= gameData.vCUpCost) {
//         document.getElementsByName('voidClickerUpgrade').style.borderColor = "black";
//     } else {
//         document.getElementsByName('voidClickerUpgrade').style.borderColor = "";
//     }
//     if (gameData.particles >= gameData.vCAC1Cost) {
//         document.getElementsByName('voidClickerAutoClicker1').style.borderColor = "black";
//     } else {
//         document.getElementsByName('voidClickerAutoClicker1').style.borderColor  = "";
//     }
// };

function buttonHighligts() {
    costs=vCUpCost,vCAC1Cost,vCAC2Cost
    buttons=voidClickerUpgrade,voidClickerAutoClicker1,voidClickerAutoClicker2
for (i = 0; i < costs.length; i++) {
    if (gameData.particles >= gameData.costs[i]) {
        document.getElementsByName(buttons[i]).style.borderColor = "black";
    } else {
        document.getElementsByName(buttons[i]).style.borderColor = "";
}}}setInterval(buttonHighligts, 1);