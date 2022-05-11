//Game Data
var randomStuff ={
  notation: String("Mixed scientific"),
  commas: true,
}
    
var gameData = {
    particles: Number(0),
    totalMult: Number(0),
  vClicker: {
    voidClick: Number(1),
    vCUpMult: Number(0),
    vCUpCost: Number(2),
    vCUpBought: Number(0),
    vCResult: Number(1),
    vCTClick: Number(0),
    vCTClickBoost: Number(0),
  },
  vAutoclicker1: {
    vCAC1Cost: Number(1024),
    vCAC1Bought: Number(0),
    vCAC1ClickTime: Number(200),
    vCAC1Mult: Number(0),
    vCACT1imes: Number(0),
  },
  vAutoclicker2: {
    vCAC2Cost: Number(1024*1e2),
    vCAC2Bought: Number(0),
    vCAC2ClickTime: Number(200),
    vCAC2Mult: Number(0),
    vCACT2imes: Number(0),
  },
};
var implodedReality = {
  implodedCost: Number(1024*1e3),
  implodedParticles: Number(0),
}

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
implodedReality = flat(implodedReality, {});

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