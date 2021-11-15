harrypotter = "music.mp3";
peterpan = "music2.mps"  ;

function preload() {
    loadSound = "music.mp3";
    loadSound = "music2.mp3";
}

function setup() {
    video = createCapture(VIDEO)
    video.size(550,550);
    video.hide();

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
}

function draw() {
    image(video,0,0,600,500);
}