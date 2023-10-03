function setup() {
    createCanvas(400, 400);
    
}

function draw(){
    if (mouseX<200) {
        background("white");
        circle(200, 200, 100, 100);
    }
    else {
        background("white");
        rect(150, 150, 100, 100);
    }
}
