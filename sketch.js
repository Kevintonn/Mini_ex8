
var rotY = 0;
var wMap
var bLight

function preload() {
    wMap = loadImage("http://i.imgur.com/9a8qyPh.jpg");
    bLight = loadImage("http://i.imgur.com/sJSN8Q2.jpg");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);

}

function draw() {
    background(0);
    
    var m = map(mouseY, 0, window.innerWidth, 0, 10)/300;
    var mA = map(mouseX, 0, window.innerWidth, 0, 30);
    
    push();
    translate(35-mA, -35, -150);
    texture(bLight);
    box(400);
    pop();
    
    translate(0+mA, 0, 0);
    rotateY(rotY);
    texture(wMap);
    sphere(100);
    
    rotY += 0+m;
  
}