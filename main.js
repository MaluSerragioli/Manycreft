var canvas = new fabric.Canvas("myCanvas");
var blockimgw = 30;
var blockimgh = 30;

var playerx = 10;
var playery = 10;
var playerobj = "";
var blockimgobj = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobj = Img;
        playerobj.scaleToWidth(150);
        playerobj.scaleToHeight(140);
        playerobj.set({
            top: playery,
            left: playerx,
        })
        canvas.add(playerobj)
    })
}


function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockimgobj = Img;
        blockimgobj.scaleToWidth(blockimgw);
        blockimgobj.scaleToHeight(blockimgh);
        blockimgobj.set({
            top: playery,
            left: playerx,
        })
        canvas.add(blockimgobj)
    })
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == "80") {
        blockimgw = blockimgw + 8;
        blockimgh = blockimgh + 8;
        document.getElementById("currentWidth").innerHTML = blockimgw;
        document.getElementById("currentHeight").innerHTML = blockimgh;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        blockimgw = blockimgw - 8;
        blockimgh = blockimgh - 8;
        document.getElementById("currentWidth").innerHTML = blockimgw;
        document.getElementById("currentHeight").innerHTML = blockimgh;
    }

    if (keyPressed=="37") {
        left()
    }
    if (keyPressed=="38") {
        up()
    }
    if (keyPressed=="39") {
        right()
    }
    if (keyPressed=="40") {
        down()
    }
    if (keyPressed=="67") {
        newImage("cloud.jpg")
    }
    if (keyPressed=="68") {
        newImage("dark_green.png")
    }
    if (keyPressed=="71") {
        newImage("ground.png")
    }
    if (keyPressed=="76") {
        newImage("light_green.png")
    }
    if (keyPressed=="82") {
        newImage("roof.jpg")
    }
    if (keyPressed=="84") {
        newImage("trunk.jpg")
    }if (keyPressed=="85") {
        newImage("unique.png")
    }if (keyPressed=="87") {
        newImage("wall.jpg")
    }if (keyPressed=="89") {
        newImage("yellow_wall.png")
    }
}
function right() {
 if (playerx <= 950) {
    playerx = playerx + blockimgw;
    canvas.remove(playerobj);
    playerupdate()
 }   
}
function left() {
    if (playerx >= 0) {
       playerx = playerx - blockimgw;
       canvas.remove(playerobj);
       playerupdate()
    }   
   }
   function up() {
    if (playery >= 0) {
       playery = playery - blockimgw;
       canvas.remove(playerobj);
       playerupdate()
    }   
   }function down() {
    if (playery <= 600) {
       playery = playery + blockimgw;
       canvas.remove(playerobj);
       playerupdate()
    }   
   }