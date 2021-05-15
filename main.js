noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
Difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 450);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#000000');
    stroke('#0000FF');
    fill('#FFFFFF');
    square(noseX,noseY,Difference);
}

function ModelLoaded() {
    console.log("PoseNet Is Initialized !");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX  );
        console.log("noseY = " + noseY);
        LeftWristX=results[0].pose.leftWrist.x;
        RightWristX=results[0].pose.rightWrist.x;
        console.log("LeftWristX = " + LeftWristX);
        console.log("RightWristX = "  + RightWristX);
        Difference=floor(LeftWristX - RightWristX);
    }
}

