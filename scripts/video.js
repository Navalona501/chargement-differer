async function videoDOTjs() {
    var video = document.getElementById("vid");
    var selectorWebcam = document.getElementById("selectCamera");
    var mediaDevices = navigator.mediaDevices;
    videoDeviceId = true;
    if (sessionStorage.getItem("Video") != "" || sessionStorage.getItem("Video") != null)
        videoDeviceId = sessionStorage.getItem("Video");
    vid.muted = true;
    mediaDevices
        .getUserMedia({
            video: true
        })
        .then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            video.addEventListener('playing', function () {
                var img = document.getElementById("autorisationImg");
                if (img != null) img.style.display = "none";
                var parag = document.getElementById("autorisation");
                if (parag != null) parag.style.display = "none";

                var cameraBox = document.getElementById("CameraBox");
                sessionStorage.setItem('videoWidth', this.videoWidth + '');
                sessionStorage.setItem('videoHeight', this.videoHeight + '');

                cameraBox.style.setProperty('--feedbackWidth', this.videoWidth + 'px');
                cameraBox.style.setProperty('--feedbackMaxWidth', this.videoWidth + 'px');
                cameraBox.style.setProperty('--feedbackHeight', this.videoHeight + 'px');
                cameraBox.style.setProperty('--feedbackHeight', 'auto');

                cameraBox.style.setProperty('--feedbackWidth', '50%');
                cameraBox.style.setProperty('--feedbackMaxWidth', this.videoWidth + 'px');
            });
        })
    selectorWebcam.addEventListener('change', () => {
        const videoConstraints = { audio: false, video: { deviceId: { exact: selectorWebcam.value } } };
        mediaDevices.getUserMedia(videoConstraints)
            .then((stream) => {
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
                video.addEventListener('playing', function () {
                    var cameraBox = document.getElementById("CameraBox");

                    cameraBox.style.setProperty('--feedbackWidth', this.videoWidth + 'px');
                    cameraBox.style.setProperty('--feedbackMaxWidth', this.videoWidth + 'px');
                    cameraBox.style.setProperty('--feedbackHeight', this.videoHeight + 'px');
                    cameraBox.style.setProperty('--feedbackHeight', 'auto');

                    cameraBox.style.setProperty('--feedbackWidth', '50%');
                    cameraBox.style.setProperty('--feedbackMaxWidth', this.videoWidth + 'px');
                });
            })
    });
}
