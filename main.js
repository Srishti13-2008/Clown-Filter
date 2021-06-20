 nosex=0
 nosey=0
function preload(){
     clown_nose=loadImage('https://i.postimg.cc/Sxd93ZXF/clown-nose.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300);
    video.hide()
    var poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes)
}
function modelloaded(){
    console.log('modelloaded')
}
function gotposes(results){
if(results.length >0){
    console.log(results)
    nosex=results[0].pose.nose.x-15
     nosey=results[0].pose.nose.y-15
    console.log("nose x="+results[0].pose.nose.x)
    console.log("nose y="+results[0].pose.nose.y)
}
}


function draw(){
image(video,0,0,300,300);
image(clown_nose,nosex,nosey,30,30);
}
function takesnapshot(){
    save('image.png')
}

