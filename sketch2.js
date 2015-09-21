// * Determino las variables // 
var posX = 300;
var posY = 200;
var incX = 2;
var incY = 5;

var pos;
var inc;
var mouse;
var m2p;
var g;
var vel;


// * Configuración de mi canvas// 

function setup() {

  createCanvas(windowWidth, windowHeight); 
  background(255);
  var pos = createVector(posX, posY);
  var inc = createVector(incX, incY);
  var mouse = createVector();
  var m2p = createVector();
  var g = createVector(0, 0.1);
  var vel = createVector(0, 0);

}

// * Esta función define la interacción del mouse con las figuras generadas// 

function draw() {
  mouse.set(mouseX, mouseY);
  m2p = mouse.get();
  m2p.sub(pos);

  inc = m2p.get();
  inc.normalize();
  inc.mult(-0.12);

  fill (70, 255, 195, 180);
  stroke (180);
  strokeWeight(1);
  ellipse(pos.x, pos.y, 10, 10);
  line(pos.x, pos.y, pos.x+m2p.x, pos.y+m2p.y);


  //
  vel.add(inc);
  vel.add(g);
  pos.add(vel);
  // posX = posX + incX;
  //posY = posY + incY;
  
}


// * Este evento determina los controles que afectan el dibujo// 



