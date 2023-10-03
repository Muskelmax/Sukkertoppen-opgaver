// jeg definerer globale variabler
let x;
let y;
let a;
let b;
let d;
let dc;
let speed;
let cats = [[Math.round(Math.random()*400), Math.round(Math.random()*400)]];
let tid = 0;
function setup() {
    createCanvas(400, 400);

    //Jeg definerer mine variabler med p5 funktioner
    x = random(0, width);
    y = random(0, height);
    d = 20;
    dc = 50;
    speed = 2;
    a = speed;
    b = 0;
}
function draw() {
    tid++;
    clear();
    background("black");
    keyPressed();
    borderCheck();
    addCat();
    x += a;
    y += b;
    circle(x, y, d);
    for (let i = 0; i < cats.length; i++) {
        circle(cats[i][0], cats[i][1], dc);
        
    }
}
function borderCheck() {
    if (x + d / 2 >= width) {
      a = -speed;
      b = 0;
    }
    if (x - d / 2 <= 0) {
      a = speed;
      b = 0;
    }
    if (y + d / 2 >= height) {
      a = 0;
      b = -speed;
    }
    if (y - d / 2 < 0) {
      a = 0;
      b = speed;
    }
}
function keyPressed() {
    if (keyIsPressed) {
        if (keyCode === DOWN_ARROW) {
            b = speed;
            a = 0;
          }
          if (keyCode === UP_ARROW) {
            b = -speed;
            a = 0;
          }
          if (keyCode === LEFT_ARROW) {
            b = 0;
            a = -speed;
          }
          if (keyCode === RIGHT_ARROW) {
            b = 0;
            a = speed;
          }
    }  
}
function catMove(){
    
}
function addCat(){
  console.log("tid");
  if (tid >= 300) {
    console.log("hej");
    tid = 0;
    cats.push([Math.round(Math.random()*400), Math.round(Math.random()*400)])
  }
}