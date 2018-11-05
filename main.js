let lines = [];
let skills = [];
let categories = [];
let modules = [];
let studyPrograms = [];

let seperator = ", ";
let projects = [];

let innerCircle;

function preload() //die preload()-function wird VOR der setup()-function ausgeführt. Dies ist notwendig, da loadStrings() eine asynchrone methode ist und es somit zu Problemen kommen könnte
{
lines = loadStrings("skills.txt"); //die Textdatei wird eingelesen und in Form eines Arrays zeilenweise gespeichert
}

function setup()
{
  initSkills();
  console.log(skills);
  console.log(categories);
  console.log(modules);
  console.log(studyPrograms);
  console.log(projects);

  createCanvas(800, 800);
  angleMode(DEGREES);

  innerCircle = new Pie(300, 300, 400, 400, studyPrograms);
}

function draw()
{
   background(100);
   strokeWeight(2);
   stroke(255);
   fill(150);

   innerCircle.draw();


}

function initSkills()
{
  for (var i = 0; i < lines.length; i++)
  {
    skills[i] = new Skill(i, lines[i]);
  }
}

function pushIfExisting(array, name)
{
  for (var i = 0; i < array.length; i++)
  {
    if (array[i] === name)
    {
      return i;
    }
  }
  array.push(name);
  return i;
}
