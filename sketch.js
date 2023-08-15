let logo=4;
function setup() {
  createCanvas(800, 800);
  textFont("Courier New"); 
}

function draw() {
  switch(logo){
    case 0:
      logo1();
      textSize(30);
      textAlign(CENTER,CENTER);
      text("logo"+logo,width*0.5,height*0.1);
      break;
    case 1:
      logo2();
      textSize(30);
      textAlign(CENTER,CENTER);
      text("logo"+logo,width*0.5,height*0.1);
      break;
    case 2:
      logo3();
      textSize(30);
      textAlign(CENTER,CENTER);
      text("logo"+logo,width*0.5,height*0.1);
      break;
    case 3:
      logo4();
      textSize(30);
      textAlign(CENTER,CENTER);
      text("logo"+logo,width*0.5,height*0.1);
      break;
    case 4:
      logo5();
      textSize(30);
      textAlign(CENTER,CENTER);
      text("logo"+logo,width*0.5,height*0.1);
      break;
      
      
      
      
  }
}

function logo1() {
  background(255);

  rectMode(CORNER);
  //rect(width*0.28,height*0.5,500,125);
  noStroke();
  circle(width * 0.5, height * 0.5, 500);
  stroke(100);
  for (let i = 0; i < 360; i += 360 / 32) {
    rectMode(CENTER);
    push();
    noFill();
    translate(width * 0.5, height * 0.5);
    scale(3.5);
    rotate(radians(i));
    rect(0, 0, 100, 100);
    pop();
  }
  textSize(80);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("<SIAD>", width * 0.5, height * 0.4);
  textStyle(NORMAL);
  textSize(40);
  textAlign(LEFT, CENTER);
  text("Semillero de", width * 0.3, height * 0.46);
  text("Investigación", width * 0.3, height * 0.5);
  text("Artes", width * 0.3, height * 0.54);
  text("Digitales", width * 0.3, height * 0.58);
}
function logo2() {
  let offsetX = width * 0.05;
  let offsetY = height * 0.13;
  background(255);

  rectMode(CORNER);
  rect(width*0.12,height*0.25,430,425,20);
  noStroke();
  stroke(100);
  for (let i = 0; i < 360; i += 360 / 32) {
    rectMode(CENTER);
    push();
    noFill();
    translate(width * 0.28 + offsetX, height * 0.4);
    scale(1.5);
    rotate(radians(i));
    rect(0, 0, 100, 100);
    pop();
  }
  textSize(80);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text("<SIAD>", width * 0.1 + offsetX, height * 0.45 + offsetY);
  textStyle(NORMAL);
  textSize(40);
  text("Semillero de", width * 0.1 + offsetX, height * 0.52 + offsetY);
  text("Investigación en", width * 0.1 + offsetX, height * 0.57 + offsetY);
  text("Artes Digitales", width * 0.1 + offsetX, height * 0.62 + offsetY);

}
function logo3() {
  push();
  translate(0, 0);

  background(255);

  rectMode(CENTER);
  rect(width*0.5,height*0.47,410,380,20);

  stroke(100);
  for (let i = 0; i < 360; i += 360 / 32) {
    rectMode(CENTER);
    push();
    noFill();
    translate(width * 0.5, height * 0.4);
    scale(1.5);
    rotate(radians(i));
    rect(0, 0, 100, 100);
    pop();
  }
  textSize(100);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("<SIAD>", width * 0.5, height * 0.57);
  textStyle(NORMAL);
  textSize(20);
  text("Semillero de Investigación", width * 0.5, height * 0.62);
  text("Artes Digitales", width * 0.5, height * 0.65);
  pop();
}
function logo4() {
  push();
  translate(0, 0);

  background(255);

  rectMode(CORNER);
  noStroke();
  circle(width * 0.5, height * 0.55, 500);
  stroke(100);
  for (let i = 0; i < 360; i += 360 / 32) {
    rectMode(CENTER);
    push();
    noFill();
    translate(width * 0.5, height * 0.4);
    scale(1.5);
    rotate(radians(i));
    rect(0, 0, 100, 100);
    pop();
  }
  textSize(80);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("<SIAD>", width * 0.5, height * 0.57);
  textStyle(NORMAL);
  textSize(20);
  //text("Semillero de Investigación en", width * 0.5, height * 0.62);
  //text("Artes Digitales", width * 0.5, height * 0.65);
  pop();
}
function logo5() {
  push();
  translate(0, 0);
  background(255);
  rectMode(CENTER);
  rect(width*0.43,height*0.4,585,250,20);
  stroke(100);
  for (let i = 0; i < 360; i += 360 / 32) {
    rectMode(CENTER);
    push();
    noFill();
    translate(width * 0.2, height * 0.4);
    scale(1.5);
    rotate(radians(i));
    rect(0, 0, 100, 100);
    pop();
  }
  textSize(80);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text("<SIAD>", width * 0.35, height * 0.38);
  textStyle(NORMAL);
  textSize(20);
  text("Semillero de Investigación en", width * 0.35, height * 0.42);
  text("Artes Digitales", width * 0.35, height * 0.45);
  pop();
}
function mousePressed(){
  logo++;
  if(logo>4)logo=0;
}
