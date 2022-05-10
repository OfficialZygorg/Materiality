//Game Data
var gameData = {
    particles: Number(0),
    totalMult: Number(1),
    totalMultSum: Number(0),
    notation: String("Mixed scientific"),
    commas: true,
  vClicker: {
    vCUpMult: Number(0),
    vCUpCost: Number(2),
    vCUpBought: Number(0),
    vCResult: Number(0),
    vCResultSum: Number(0),
    vCTClick: Number(0),
    vCTClickBoost: Number(0),
  },
  vAutoclicker1: {
    vCAC1Cost: Number(1e3),
    vCAC1Bought: Number(0),
    vCAC1ClickTime: Number(200),
    vCAC1Mult: Number(0),
    vCACT1imes: Number(0),
  },
  vAutoclicker2: {
    vCAC2Cost: Number(1e4),
    vCAC2Bought: Number(0),
    vCAC2ClickTime: Number(200),
    vCAC2Mult: Number(0),
    vCACT2imes: Number(0),
  },
};

const flat = (obj, out) => {
  Object.keys(obj).forEach(key => {
      if (typeof obj[key] == 'object') {
          out = flat(obj[key], out); //recursively call for nesteds
      } else {
          out[key] = obj[key]; //direct assign for values
      }
  })
  return out;
}

gameData = flat(gameData, {});

function openTab(evt, idName) {
  var i, tabName, tablinks;
  tabName = document.getElementsByClassName("tabName");
  for (i = 0; i < tabName.length; i++) {
    tabName[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
}

openTab(event, 'particleAccelerator')

function implodeReality() {
  if (gameData.particles >= 1e6) {
    document.getElementById("implodeRealityButton").hidden = false;
  }}setInterval(implodeReality, 1);