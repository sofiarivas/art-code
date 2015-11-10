function setup(){
  createCanvas(windowWidth, windowHeight); 
  background(255);

}

function draw(){
strokeWeight(16);

stroke(255, 198, 54);

fill(255);
ellipse(449, 184, 132, 132);

strokeWeight(1); stroke(255, 198, 54); fill(255); ellipse(449, 184, 135, 135);

strokeWeight(9); fill(255); ellipse(449, 184, 100, 100);

noStroke(); fill(201, 215, 255); ellipse(449, 184, 70, 70);

fill(0, 180); ellipse(449, 184, 50, 50);

//TRIANGULOS fill(229, 53, 53); noStroke(); triangle(240, 100, 540, 220, 30, 650);

fill(240, 232, 0, 230); triangle(15, 100, 190, 630, 360, 390);

fill(255, 155, 244, 180); triangle(260, 250, 402, 326, 499, 30);

fill(36, 127, 252);

triangle(368, 151, 449, 184, 499, 30);

//CUADRADO noStroke();

fill(98, 11, 214, 70);

rect(118, 242, 230, 170);

//ESFERAS stroke(0, 70);

strokeWeight(2);

fill(245, 128, 10, 190);

ellipse(180, 230, 240, 240);

fill(59, 70, 255, 180); ellipse(240, 110, 70, 70);

fill(36, 11, 209, 70); strokeWeight(3); stroke(0); ellipse(272, 334, 180, 180);

fill(220, 166, 222, 230); strokeWeight(1); ellipse(526, 540, 70, 70);

fill(255, 124, 0);

strokeWeight(1);

stroke(165, 82, 5);

ellipse(40, 420, 50, 60);

//lineas stroke(0);

strokeWeight(1);

line(410, 630, 570, 530);

strokeWeight(3); line(340, 660, 510, 380);

stroke(255, 169, 8); strokeWeight(3); line(360, 480, 460, 660);

stroke(255, 8, 16); strokeWeight(3); line(375, 470, 502, 675);

stroke(0); strokeWeight(4); line(400, 440, 600, 615);

stroke(82, 109, 255); strokeWeight(3); line(415, 400, 580, 575);

//Juego lineas stroke(0); strokeWeight(3); line(370, 180, 600, 270);

stroke(0); strokeWeight(1); line(365, 192, 600, 282);

stroke(0); strokeWeight(1); line(360, 204, 585, 294);

stroke(0); strokeWeight(1); line(355, 216, 560, 300);

fill(0); noStroke();

triangle(0, 186, 280, 40, 268, 40);

triangle(20, 156, 595, 340, 595, 345);

triangle(0, 440, 310, 130, 313, 132);




}