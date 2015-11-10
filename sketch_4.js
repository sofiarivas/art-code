// * Determino las variables // 
  
  var num = 100;


// * Configuración de mi canvas// 

function draw() {

  createCanvas(windowWidth, windowHeight); 
  frameRate(10);

  for (var i=0; i<num/5; i++) {
    for(var j=0; j<200/5; j++) {
     //save(contador+"hola.png");
      if (i<(num/5)/2) {

        if (j<(200/5)/2) {
          //VERDE - SUPERIOR IZQUIERDA
          stroke(3, 255, 46);
        } else {
          // ROJO INFERIOR IZQ
          stroke (255, 3, 07);
        }
      } else {

        if (j<(200/5)/2) {
          //AMARILLA SUPERIOR DERECHA
          stroke(250, 255, 5);
        } else {
          //ROSA INFERIOR DERECHA
          stroke(255, 3, 239);
        }
      }

    

    fill(i+2,j,20, 60);
      

      
      triangle(mouseX,mouseY,i*60,j*20,i*35,j*24);
      
    }

  } 




}

