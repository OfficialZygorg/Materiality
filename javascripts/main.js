//Game Data  
var player = {
    particles: new Decimal(10),
    totalMultiplier: new Decimal(0),
    baseMultiplier: new Decimal(1.25),
    result: new Decimal(0),
    buyTime: new Decimal(200),
    eternalVoid:{
      particleCollider1:{
        cost: new Decimal(10),
        bought: new Decimal(0),
        multiplier: new Decimal(0),
      },
      particleCollider2:{
        cost: new Decimal(10*10),
        bought: new Decimal(0),
        multiplier: new Decimal(0),
      },  
    },
    implosion:{
      cost: new Decimal(10*10e1),
      implodedParticles: new Decimal(0),
    }, 
}

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