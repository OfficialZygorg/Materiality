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

// function buttonHighligts() {
// buttons={
//     vCUpCost:voidClickerUpgrade,
//     vCAC1Cost:voidClickerAutoClicker1
//     }
// buttons = flat(buttons,{});
// for (i = 0; i < Object.keys(buttons).length; i++) {
//     if (gameData.particles >= Object.keys(buttons[i])) {
//         document.getElementsByName(Object.values(buttons)[i]).style.borderColor = "black";
//     } else {
//         document.getElementsByName(Object.values(buttons)[i]).style.borderColor = "";
// }}}setInterval(buttonHighligts, 1);