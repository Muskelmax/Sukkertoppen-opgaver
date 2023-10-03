function setup() {
    createCanvas(500, 300);
    Maldiverne();
    Frankrig();
    Isreal();
    //Tjekkiet();
    //Cuba();
}


function Maldiverne() {
    //lav en rød baggrund
    noStroke();
    background(210,16,52);
    //lav en grøn firkant i midten af billedet, som er 70 pixels væg fra randen i alle retninger
    fill(0,126,58);
    rect(70, 70, 360, 160,);
    //lav en hvid cirkel med en radius på 100 pixels, som er placeret 20 pixels til højre fra billedets midte
    fill("white");
    circle(270, 150, 100);
    //lav en grøn cirkel med de samme atributter, blot 15 pixels til højre
    fill(0,126,58);
    circle(285, 150, 100);
    
}
function Frankrig() {
    //lav en hvid baggrund
    noStroke();
    background(255);
    //lav en blå firkant, som fylder skærmens højde, og den første tredjedel af dens bredde
    fill(0,35,149);
    rect(0,0,500/3,300);
    //lav en rød firkant, som fylder skærmens højde, og den sidste tredjedel af dens bredde
    fill(237,41,57);
    rect(500/3*2,0,500/3,300);
}
function Isreal() {
    //lav en hvid baggrund
    noStroke();
    background("white");
    //lav to blå firkanter, som fylder hele bredden, er 40 pixels tygge og er 20 pixels langt væg fra toppen/bunden
    fill(1,56,184);
    rect(0,20,500,40);  
    rect(0,240,500,40);
    //lav to trekanter, som er transparente indeni, men har en blå omkreds, læg dem over hinanden, så de danner en stjerne i midten af flaget
    noFill();
    stroke(1,56,184);
    strokeWeight(9);
    triangle(250, 100, 295, 175, 205, 175);
    triangle(250, 200, 295, 125, 205, 125);
}

function Tjekkiet() {
    //lav en hvid baggrund
    noStroke();
    background("white");
    //lav en rød rektangel, som fylder den nederste halvdel af billedet
    fill(215,20,26);
    rect(0,150,500,300);
    //lav en blå trekant, hvis ene sidde ligger op af flagets venstre sidde, og hvis sidste hjørne er 200 pixels til højre og vertikalt i midten
    fill(18,69,126);
    triangle(0, 0, 0, 300, 200, 150);
}
function Cuba() {
    //lav en blå baggrund
    noStroke();
    background(1,37,145);
    //lav hvide striber som dækker flagets horizontal i to striber, med lige mængder blå på alle sidder, som har den samme bredde som det hvide
    fill("white");
    rect(0, 300/5, 500, 300/5);
    rect(0, 300/5*3, 500, 300/5);
    //lav en rød trekant, hvis ene sidde ligger op af flagets venstre sidde, og hvis sidste hjørne er 200 pixels til højre og vertikalt i midten
    fill(204,14,13);
    triangle(0, 0, 0, 300, 200, 150);
    //Jeg laver en hvid stjerne i midten af den røde trekant
    fill("white");
    beginShape();
    vertex(143/1000*500,174/500*300);
    vertex(162/1000*500,225/500*300);
    vertex(220/1000*500,225/500*300);
    vertex(175/1000*500,261/500*300);
    vertex(190/1000*500,315/500*300);
    vertex(143/1000*500,286/500*300);
    vertex(95/1000*500,315/500*300);
    vertex(110/1000*500,261/500*300);
    vertex(70/1000*500,225/500*300);
    vertex(125/1000*500,225/500*300);
    endShape();
}