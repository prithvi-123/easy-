function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(260,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,190,120,250,250);
    fill("red");
    stroke("yellow");
    circle(50,50,70);
    circle(600,50,70);
    circle(600,430,70);
    circle(50,430,70)
    fill("blue");
    stroke("yellow");
    rect(80,35,490,30);
    rect(80,415,490,30);
    rect(35,80,30,320);
    rect(585,80,30,320);



    
   
    

}

function take_snapshot(){
    save("prithvi.png");
}



