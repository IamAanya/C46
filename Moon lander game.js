var ground
var lander
var bg_img
var lander_img
var vx = 0
var g = 0.05
var vy = 0

function preload(){
    bg_img=loadImage("bg.png")
    lander_img = loadImage("normal.png")
}

function setup(){
    createCanvas(1000,700)
    frameRate(80)
    
    lander = createSprite(100,50,30,30)
    lander.addImage(lander_img)
    lander.scale=0.1
    lander.setCollider("rectangle",0,0,200,200)
    rectMode(CENTER)
    textSize(15)    
}

function draw(){
    background(51)
    image(bg_img,0,0)
    push()
    fill(255)
    text("vertical velocity: "+ round(vy),800,75)
    pop()

    vy+=g
    lander.position.y+=vy
    drawSprites()


}
function keyPressed(){
    if (keyCode===UP_ARROW){
        upward_thrust()
        lander.changeAnimation("thrusting")
        thrust.nextFrame()
    }

}
function upward_thrust(){
    vy=-1
}