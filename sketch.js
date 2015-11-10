// * Determino las variables // 
var contador = 1;
var triangulo = true;
var rectangulo = true;


// * Configuración de mi canvas// 

function setup() {

  createCanvas(windowWidth, windowHeight); 
  background(0);

}

// * Esta función define la interacción del mouse con las figuras generadas// 

function draw() {
    noFill();
    if (mouseY>200) {

    stroke(0, 255, 80, mouseX/10);
    } else {

    stroke(255, 80, 90, mouseX/10);
    }

    if (mouseIsPressed== true) {
    ellipse(mouseX, mouseY, mouseX/2, mouseX/2);
    }
    if (triangulo == true) {
    push();
    translate(mouseX, mouseY);
    rotate(radians(contador));
    triangle(mouseX/5, mouseX/5, 60, 80, 123, 25);
    pop();
    contador +=.5;
    }
    if (rectangulo == true) {
    push();
    translate(mouseX, mouseY);
    rotate(radians(contador));
    rect(mouseX/5, mouseX/5, 60, 80);
    pop();
    contador +=.5;
    }
  }

// * Este evento determina los controles que afectan el dibujo// 

function keyPressed(){

  // * Aparece/Desaparece rectangulo// 
  if (keyCode === LEFT_ARROW) {
    
    if (rectangulo == true) {
    rectangulo = false;
    } else {
    rectangulo = true;
    }
  }

  // * Fondo Negro// 

  if (keyCode === UP_ARROW) {
    
    background(0);
  }

  // * Fondo Blanco// 

  if (keyCode === DOWN_ARROW) {
    
    background(255);
  }

  // * Fondo Blanco// 

 if (keyCode === RIGHT_ARROW) {
    
    if (triangulo == true) {
    triangulo = false;
    } else {
    triangulo = true;
    }

  }




}



