let x;
let y;
let px;
let py;
let cscore = 0;
let pscore = 0;
let ost = [];
function generateOst(){
  for (let i = 0; i < 10; i++) {
    ost.push([Math.round(Math.random()*492+10), Math.round(Math.random()*472+30)]);
    
  }
}

console.log(ost);
function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
  generateOst();
  x = floor(random(0, width/5))*5;
  y = floor(random(0, height/5))*5;
  px = floor(random(0, width/5))*5;
  py = floor(random(0, height/5))*5;
  
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 10;
  }

  if (keyIsDown(65)) {
    px -= 5;
  }

  if (keyIsDown(68)) {
    px += 5;
  }

  if (keyIsDown(87)) {
    py -= 5;
  }

  if (keyIsDown(83)) {
    py += 5;
  }
  clear();
  if (ost[0] == null) {
    generateOst();
  }
  for (let i = 0; i < ost.length; i++) {
    if((x-ost[i][0] <= 25 && x-ost[i][0] >= -25) && (y-ost[i][1] <= 25 && y-ost[i][1] >= -25)){
      const halfbeforecollected = ost.slice(0, i);
      const halfaftercollected = ost.slice(i+1);
      const nyost = halfbeforecollected.concat(halfaftercollected);
      cscore++;
      ost = nyost;
      break;
    }
    
  }
  for (let i = 0; i < ost.length; i++) {
    if((px-ost[i][0] <= 25 && px-ost[i][0] >= -25) && (py-ost[i][1] <= 25 && py-ost[i][1] >= -25)){
      const halfbeforecollected = ost.slice(0, i);
      const halfaftercollected = ost.slice(i+1);
      const nyost = halfbeforecollected.concat(halfaftercollected);
      pscore++;
      ost = nyost;
      break;
    }
    
  }
  
  for (let i = 0; i < ost.length; i++) {
    circle(ost[i][0], ost[i][1], 10);
    // console.log(ost[i][0]);
  }
  circle(x, y, 50);
  rect(px-25, py-25, 50, 50);
  textSize(25);
  text("cirkel mus: " + cscore, 10, 25,);
  text("firkant mus: " + pscore, 350, 25,);
}