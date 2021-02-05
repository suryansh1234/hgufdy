var gs=0;
var pc,allPlayers,form,player,game
var db,position

function setup(){
    createCanvas(displayWidth,displayHeight);
    
    db=firebase.database()
    game=new Game()
    game.readGameState()
    game.start();
   
}

function draw(){
    
}

