song = "";

function preload()
{
   song = loadSound(music.mp3);
}

scoreRightWrist = 0;
scoreleftWrist = 0;

rigthWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}