var ball2, database;
var position;

function setup(){
    database= firebase.database()
    createCanvas(500,500);

    ball2 = createSprite(250,250,10,10);
    ball2.shapeColor = "red";

   var ball2position= database.ref('ball/position');
   ball2position.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set({
       'x': position.x+x,
       'y': position.y+y

   })
}

function readPosition(data){
    position= data.val()
    ball2.x= position.x
    ball2.y= position.y

}
function showError(){
    console.log("error")
}