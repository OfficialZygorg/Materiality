//Create getProperty function
function getProperty(obj, prop){
    //Create a variable to store the property
    var property = new Decimal(0);
    //Loop through the object
    for(var key in obj){
        //Add the property of the current object to the property
        property = property.plus(obj[key][prop]);
    }
    //Return the property
    return property;
}

function particles(){
    document.getElementById("particlesAmmount").innerHTML = player.particles;
}

function tMultiplier(){
    //Set totalMultiplier to the sum of all the multipliers of player.eternalVoid using the function getProperty
    player.totalMultiplier = getProperty(player.eternalVoid, "multiplier");
    document.getElementById("totalMultiplier").innerHTML = player.totalMultiplier;
}

//Function multiplierResult that multiplies player.baseMultiplier by player.totalMultiplier and sets the result to player.stuff.result
function multiplierResult(){
    player.result = player.baseMultiplier.times(player.totalMultiplier);
    document.getElementById("result").innerHTML = player.result;
}

//Function called buyParticleCollider for all player.eternalVoid.particleCollider and asign an id for each one, their cost is multiplied by 2 and add 1 to their bought property and their multiplier property, update the DOM
function buyParticleCollider(id){
    if(player.particles.gte(player.eternalVoid[id].cost)){
        player.particles = player.particles.minus(player.eternalVoid[id].cost);
        player.eternalVoid[id].cost = player.eternalVoid[id].cost.times(2);
        player.eternalVoid[id].bought = player.eternalVoid[id].bought.plus(1);
        player.eternalVoid[id].multiplier = player.eternalVoid[id].multiplier.plus(1);
        document.getElementById(id).innerHTML = "Cost: " + player.eternalVoid[id].cost + "<br>Bought: " + player.eternalVoid[id].bought + "<br>Multiplier: " + player.eternalVoid[id].multiplier;
    }
}