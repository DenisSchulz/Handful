let lines = [];

function preload() //die preload()-function wird VOR der setup()-function ausgeführt. Dies ist notwendig, da loadStrings() eine asynchrone methode ist und es somit zu Problemen kommen könnte
{
lines = loadStrings("skills.txt"); //die Textdatei wird eingelesen und in Form eines Arrays zeilenweise gespeichert
}

function setup()
{
  initSkills();
}

function draw()
{

}

function initSkills()
{

}
