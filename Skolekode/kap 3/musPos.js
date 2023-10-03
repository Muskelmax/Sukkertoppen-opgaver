function setup() {
    createCanvas(400,400);
    background(255);
}
//Opgave 1-5
function draw() {
    frameRate(20);
    let musPosX = "Din mus x-koordinat er givet ved "
    let musPosY = "Din mus y-koordinat er givet ved "
    let pmusPosX = "Din tidligere mus x-koordinat er givet ved "
    let pmusPosY = "Din tidligere mus y-koordinat er givet ved "
    let musHasX = "Din mus hastighed på x-aksen er givet ved "
    let musHasY = "Din mus hastighed på y-aksen er givet ved "
    let musHas = "Din mus hastighed er givet ved "
    let mouseSpeedX = mouseX-pmouseX;
    let mouseSpeedY = mouseY-pmouseY;
    let mouseSpeed = sqrt(mouseSpeedX**2 + mouseSpeedY**2);
    background(255);
    text(musPosX + mouseX, 0, 10);
    text(musPosY + mouseY, 0, 20);
    text(pmusPosX + pmouseX, 0, 30);
    text(pmusPosY + pmouseY, 0, 40);
    text(musHasX + mouseSpeedX, 0, 50);
    text(musHasY + mouseSpeedY, 0, 60);
    text(musHas + mouseSpeed, 0, 70);
}   