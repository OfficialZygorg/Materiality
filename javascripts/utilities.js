function fn2(num) {
    if (num === 0) return num;
    else return parseFloat(num.toFixed(2));
}
  
function fn0(num) {
return parseFloat(num);
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

function valBetween(v, min, max) {
return (Math.min(max, Math.max(min, v)));
}

function showDiv(divId) {
var x = document.getElementById(divId);
if (x.style.display === "none") {
    x.style.display = "block";
}
}

function hideDiv(divId) {
var x = document.getElementById(divId);
if (x.style.display === "block") {
    x.style.display = "none";
}
}

function show(id){
document.getElementById(id).removeAttribute("hidden");
}

function hide(id){
document.getElementById(id).setAttribute("hidden");
}

