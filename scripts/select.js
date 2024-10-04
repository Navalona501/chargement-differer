var sourceMicrophone = [];
var sourceWebcam = [];
var video = document.getElementById("vid");
var mediaDevices = navigator.mediaDevices;
var isVideoOk = true;
var isAudioOk = true;

async function PermsAndSelects() {
    var cameraBox = document.getElementById("CameraBox");
    cameraBox.style.setProperty('--feedbackMaxWidth', '459px');
    cameraBox.style.setProperty('--feedbackWidth', '90%');
    cameraBox.style.setProperty('--feedbackHeight', '346px');
    await CreateSelects();
    if (isAudioOk) await micDOTjs();
    if (isVideoOk) await videoDOTjs();
}

async function CreateSelects() {
    if (!navigator.mediaDevices) {
        console.log("ce navigateur ne supporte pas les peripheriques");
        return;
    }
    else if (!navigator.mediaDevices.enumerateDevices) {
        console.log("impossible d'enumerer les peripheriques utilisateur");
        return;
    }
    else if (!navigator.mediaDevices.getUserMedia) {
        console.log("impossible de recuperer les peripheriques utilisateur");
        return;
    }

    try {
        await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (err) {
        console.log("pas de video");
        isVideoOk = false;
    }
    try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
        console.log("pas d'audio");
        isAudioOk = false;
    }

    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            var selectMicro = document.getElementById("selectMicro");
            var selectCamera = document.getElementById("selectCamera");

            if (isAudioOk) while (selectMicro.hasChildNodes()) selectMicro.removeChild(selectMicro.lastChild);
            if (isVideoOk) while (selectCamera.hasChildNodes()) selectCamera.removeChild(selectCamera.lastChild);

            devices.forEach(function (device) {
                let option = document.createElement("option");
                if (device.kind == "audioinput" && isAudioOk) {
                    option.text = device.label;
                    option.value = device.deviceId;
                    selectMicro.add(option);
                }
                else if (device.kind == "videoinput" && isVideoOk) {
                    option.text = device.label;
                    option.value = device.deviceId;
                    selectCamera.add(option);
                }
            });
        }).then(() => {
            if (isVideoOk) {
                var selectCamera = document.getElementById("selectCamera");
                var Cam = sessionStorage.getItem("Video");
                console.log("VIDEO STORAGE " + Cam)
                if (Cam == null || Cam == '') {
                    SaveVideoInSessionStorage(selectCamera.value);
                }
                else {
                    selectCamera.value = Cam;
                }
                if(!GetDevBuild()) AnalyticsEvent('User_Cam', 'isOn', 0);
                console.log('Analytics : User_Cam , iSOn');
            }
            else {
                if(!GetDevBuild()) AnalyticsEvent('User_Cam', 'isOff', 0);
                console.log('Analytics : User_Cam , isOff');
            }

            if (isAudioOk) {
                var selectMicro = document.getElementById("selectMicro");
                var joinButton = document.getElementById("pass");
                joinButton.disabled = false;
                joinButton.className = "centeredButton eighteenregular";
                var Audio = sessionStorage.getItem("Audio");
                if ((Audio == null || Audio == '')) {
                    SaveAudioInSessionStorage(selectMicro.value);
                }
                else {
                    selectMicro.value = Audio;
                }
                if(!GetDevBuild()) AnalyticsEvent('User_Mic', 'isOn', 0);
                console.log('Analytics : User_Mic, isOn');
            }
            else {
                if(!GetDevBuild()) AnalyticsEvent('User_Mic', 'isOff', 0);
                console.log('Analytics : User_Mic, isOff');
            }
        })
}
