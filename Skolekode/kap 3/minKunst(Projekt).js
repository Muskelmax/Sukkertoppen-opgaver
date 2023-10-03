let arr = [];
let Size = 40
let p = true;
function setup() {
    noStroke()
    createCanvas(480,450);
    background(255)
    //laver et grid af bogstaver
    for (let j = 10; j < 475; j += Size) {
        let arr1 = [];
        for (let i = 0; i < 475; i += Size) {
            arr1 += false;
            text(intToLetter(floor(random(29)+1)), j, i);
            
            
        }
        arr += arr1;
    }
}
function  draw() {
    //finder det rektangel musen befinder sig i
    let rectX = floor(mouseX/Size)*Size
    let rectY = floor(mouseY/Size)*Size
    //maler over den rektangel
    fill(255);
    rect(rectX, rectY, Size+5, Size+5)
    //skriver nyt bogstav
    let letter = intToLetter(floor(random(29)+1));
    fill(0);
    text(letter, rectX+10, rectY+Size);
    //laver en stor version af bogstavet med tilfældige attributter, hvis der er blevet trykket på det
    if (mouseIsPressed && p == true) {
        p = false;
        textSize(random(300));
        fill(floor(random(256)), floor(random(256)), floor(random(256)))
        text(letter, random(490)-30,random(450)+30);
    }
    else if(p === false && !mouseIsPressed){
        p=true;
    }
}
//omdanner til til bogstaver
function intToLetter(i) {
    textSize(30);
    let ord = "";
    switch(i){
        case 1:
            ord += "A";
            break;
        case 2:
            ord += "B";
            break;
        case 3:
            ord += "C";
            break;
        case 4:
            ord += "D";
            break;
        case 5:
            ord += "E";
            break;
        case 6:
            ord += "F";
            break;
        case 7:
            ord += "G";
            break;
        case 8:
            ord += "H";
            break;
        case 9:
            ord += "I";
            break;
        case 10:
            ord += "J";
            break;
        case 11:
            ord += "K";
            break;
        case 12:
            ord += "L";
            break;
        case 13:
            ord += "M";
            break;
        case 14:
            ord += "N";
            break;
        case 15:
            ord += "O";
            break;
        case 16:
            ord += "P";
            break;
        case 17:
            ord += "Q";
            break;
        case 18:
            ord += "R";
            break;
        case 19:
            ord += "S";
            break;
        case 20:
            ord += "T";
            break;
        case 21:
            ord += "U";
            break;
        case 22:
            ord += "V";
            break;
        case 23:
            ord += "W";
            break;
        case 24:
            ord += "X";
            break;
        case 25:
            ord += "Y";
            break;
        case 26:
            ord += "Z";
            break;
        case 27:
            ord += "Æ";
            break;
        case 28:
            ord += "Ø";
            break;
        case 29:
            ord += "Å";
            break;
        default: 
            console.log("No letter");
    }
    return(ord);
}
