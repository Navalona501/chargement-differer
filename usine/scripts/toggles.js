var toggleWebcamOff = "img/toggleWebcamOff.png";
var toggleWebcamOn = "img/toggleWebcamOn.png";
var toggleMicroOff = "img/toggleMicroOff.png";
var toggleMicroOn = "img/toggleMicroOn.png";
var isWebcamOn = true;
var isMicroOn = true;

function SwitchWebcam(){
    isWebcamOn = !isWebcamOn
    var webcamIcon = document.getElementById("toggleWebcamIcon");
    if(isWebcamOn){
        webcamIcon.src = toggleWebcamOn;
        videoDOTjs();
    }
    else{
        webcamIcon.src = toggleWebcamOff;
        
        var img = document.getElementById("autorisationImg");
        if (img != null) img.style.display = "block";
        var parag = document.getElementById("autorisation");
        if (parag != null) parag.style.display = "block";
        
    var video = document.getElementById("vid");
    
  const stream = video.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });

  video.srcObject = null;
}
}
function SwitchMicro(){
    isMicroOn = !isMicroOn;
    var microIcon = document.getElementById("toggleMicroIcon");
    if(isMicroOn){
        microIcon.src = toggleMicroOn;
        stream.getAudioTracks().forEach(function(track) {
            track.enabled = true;
        });
    }
    else{
        microIcon.src = toggleMicroOff;
        const stream = window.stream;
        stream.getAudioTracks().forEach(function(track) {
            track.enabled = false;
        });
    }
}
