function setup() {
    createCanvas(500, 500);
    background(255);
}
function draw(){
    // følgeCirc();
    // geoForm();
    // streg();
    cirandRec();
}
//Opgave 7-8
function cirandRec(){
    fill(0);
    if (mouseIsPressed == true) {
        if (mouseButton == LEFT) {
            circle(mouseX, mouseY, 100);
        }
        else  if (mouseButton == RIGHT){
            rect(mouseX, mouseY, 100, 100);
        }
        
        
        
    }
}
//Opgave 10
function streg(){
    fill(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
}
//Opgave 11
function geoForm(){
    fill (0);
    if (keyIsPressed == true) {
        if (keyCode == 70) {
            rect(mouseX, mouseY, 100, 100);
        }
        else if(keyCode == 67){
            circle(mouseX, mouseY, 100);
        }
        else if(keyCode == 69){
            ellipse(mouseX, mouseY, 120, 70)
        } else if (keyCode == 82){
            background(255);
        }
    }
    
}
//Opgave 15
function følgeCirc(){

    fill(0);
    if (mouseIsPressed == true) {
        background(255);
        if (mouseX > 450) {
            circle(450, mouseY, 100, 100);
        }
        else if (mouseX < 50){
            circle(50, mouseY, 100, 100);
        }
        else if (mouseY > 450){
            circle(mouseX, 450, 100, 100);
        }
        else if (mouseY < 50){
            circle(mouseX, 50, 100, 100);
        }
        else {
            circle(mouseX, mouseY, 100, 100);
        }
        
    }
    
}