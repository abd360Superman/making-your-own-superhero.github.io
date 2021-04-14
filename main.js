var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30;

player_object = "";
block_object = "";

left_hand_list = ['captain_america_left_hand.png', 'hulk_left_hand.png', 'ironman_left_hand.png', 'spiderman_left_hand.png', 'thor_left_hand.png'];
right_hand_list = ['hulk_right_hand.png', 'ironman_right_hand.png', 'spiderman_right_hand.png', 'thor_right_hand.png'];
face_list = ['hulk_face.png', 'ironman_face.png', 'spiderman_face.png', 'thor_face.png'];
legs_list = ['hulk_legs.png', 'ironman_legs.png', 'spiderman_legs.png'];
body_list = ['hulkd_body.png', 'ironman_body.png', 'spiderman_body.png'];

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') {
        object_size_plus();
    } else if(e.shiftKey == true && keyPressed == '77') {
        object_size_minus();
    }

    if(keyPressed == '38') {
        up();
        console.log("up");
    } else if(keyPressed == '40') {
        down();
        console.log("down");
    } else if(keyPressed == '37') {
        left();
        console.log("left");
    } else if(keyPressed == '39') {
        right();
        console.log("Right");
    } else if(keyPressed == '72') {
        random_number = Math.floor(Math.random() * left_hand_list.length);
        console.log(random_number);
        chosen_left_hand = left_hand_list[random_number];
        new_image(chosen_left_hand);
        console.log("Left Hand");
    } else if(keyPressed == '82') {
        random_number = Math.floor(Math.random() * left_hand_list.length);
        console.log(random_number);
        chosen_right_hand = right_hand_list[random_number];
        new_image(chosen_right_hand);
        console.log("Right Hand");
    } else if(keyPressed == '70') {
        random_number = Math.floor(Math.random() * face_list.length);
        console.log(random_number);
        chosen_face = face_list[random_number];
        new_image(chosen_face);
        console.log("Face");
    } else if(keyPressed == '66') {
        random_number = Math.floor(Math.random() * body_list.length);
        console.log(random_number);
        chosen_body = body_list[random_number];
        new_image(chosen_body);
        console.log("Body");
    } else if(keyPressed == '76') {
        random_number = Math.floor(Math.random() * legs_list.length);
        console.log(random_number);
        chosen_legs = legs_list[random_number];
        new_image(chosen_legs);
        console.log("Legs");
    } 
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function object_size_plus() {
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("cur_w").innerHTML = "Current Width  = " + block_image_width;
    document.getElementById("cur_h").innerHTML = "Current Height  = " + block_image_height;
}

function object_size_minus() {
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("cur_w").innerHTML = "Current Width  = " + block_image_width;
    document.getElementById("cur_h").innerHTML = "Current Height  = " + block_image_height;
}