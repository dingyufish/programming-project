var diam1=200;


function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background("#000000");
  fill("#FFEC68");//color yellow
  stroke("#ffff00");//Color Yellow
  strokeWeight(5);
  ellipse(150,200,250,250);//#1roud 
  fill("#000000");//black
  stroke("#000000");//black
  strokeWeight(1);
  ellipse(200,200,diam1+30,diam1+30);//the #2round
  strokeWeight(0);
  ellipse(mouseX,mouseY,30,30);//#3round black
}

function mousePressed(){

if(diam1>300){
  diam1=150;
}else{
  diam1=diam1+5;
}

}