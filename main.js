noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(600, 250);
    video = createCapture(VIDEO);
    video.size(450, 600);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("grey");
    document.getElementById("square_sides").innerHTML = "width and height of the square will be ="+difference+"px";
    fill("springgreen");
    stroke("springgreen");
    square(noseX,noseY,100);
}

function modelloaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX="+noseX+ "noseY="+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        righttWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("leftWristX="+leftWristX+ "rightWristX="+rightWristX+ "difference="+difference);
    }
}