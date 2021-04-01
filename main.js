function preload(){
    img = loadImage("https://tse2.mm.bing.net/th?id=OIP.Lv6gY2mSRe_PictDELWGOQHaHa&pid=Api&P=0&w=300&h=300");
}

function setup(){
    canvas = createCanvas(750 , 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill(0,0,100);
    stroke(250,0,0);
    rect(132.5,50,35,250);
    fill(0,0,100);
    stroke(250,0,0);
    rect(581.5,50,35,250);
    fill(250,0,0);
    stroke(0,0,100);
    rect(132.5,32.5,450,35);
    fill(250,0,0);
    stroke(0,0,100);
    rect(132.5,285,450,35);
    fill(0,0,100);
    stroke(250,0,0);
    ellipse(150,50, 50, 50);
    fill(250,0,0);
    stroke(0,0,100);
    ellipse(600,50, 50, 50);
    fill(0,0,100);
    stroke(250,0,0);
    ellipse(600,300, 50, 50);
    fill(250,0,0);
    stroke(0,0,100);
    ellipse(150,300, 50, 50);
    image(video, 275, 100, 175, 125);

}

function take_snapshot(){
    save("student_name.png");
}
