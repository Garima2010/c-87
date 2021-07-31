var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top :player_y ,
            left : player_x 
        });

        canvas.add(player_object);
    });
}
function new_image(get_image)
{
fabric.Image.fromURL(get_image , function(Img){
    block_object = Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);

    block_object.set({
        top :player_y ,
        left : player_x 
    });

    canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
 keypressed = e.keyCode;
 console.log(keypressed);
 if(e.shiftKey == true && keypressed == '80'){
     console.log("shift+P pressed together");
     block_width = block_width + 10;
     block_height = block_height + 10;
     document.getElementById("Current_Width").innerHTML=block_width;
     document.getElementById("Current_Height").innerHTML=block_height;
 }
 if(e.shiftKey == true && keypressed == '77'){
    console.log("shift+M pressed together");
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("Current_Width").innerHTML=block_width;
    document.getElementById("Current_Height").innerHTML=block_height;
 }
 if(keypressed == '38'){
     console.log("up");
     up();
 }
 if(keypressed == '40'){
    console.log("down");
    down();
    }
    if(keypressed == '37'){
        console.log("left");
        left();
    }
    if(keypressed == '39'){
        console.log("right");
        right();
    }
    if(keypressed == '87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if(keypressed == '71'){
        new_image("ground.png");
        console.log("g");
    }
    if(keypressed == '76'){
        new_image("light_green.png");
        console.log("l");
    }
    if(keypressed == '84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(keypressed == '82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keypressed == '89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(keypressed == '68'){
        new_image("dark_green.png");
        console.log("d");
    }
    if(keypressed == '85'){
        new_image("unique.png");
        console.log("u");
    }
    if(keypressed == '67'){
        new_image("cloud.jpg");
        console.log("c");}
}
