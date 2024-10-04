let volumeCallback = null;
let volumeInterval = null;
var volumeVisualizer;
var audioSource;
const slidingVolumes = [];

async function micDOTjs() {
    volumeVisualizer = document.getElementById('volume-visualizer');
    var selectMicro = document.getElementById("selectMicro");
    selectMicro.addEventListener('change', async () => {
        const audioStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                deviceId:
                {
                    exact: selectMicro.value
                }
            }
        })
        ChangeAnalyser(audioStream);

    })
    var audioSrc = sessionStorage.getItem("Audio");
    const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: audioSrc ? { exact: audioSrc } : "default" }
    })

    window.stream = audioStream;
    CreateAnalyser(audioStream);

    var textFeedback = document.getElementById("micFeedbackParagraph");
    textFeedback.innerHTML = "On vous entend peu";
    textFeedback.style.color = "#f60000";
}

function CreateAnalyser(audioStream) {
    const audioContext = new AudioContext();
    audioSource = audioContext.createMediaStreamSource(audioStream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 1024;
    analyser.minDecibels = -127;
    analyser.maxDecibels = 0;
    analyser.smoothingTimeConstant = 0.4;
    audioSource.connect(analyser);
    const volumes = new Uint8Array(analyser.frequencyBinCount);
    volumeCallback = () => {
        analyser.getByteFrequencyData(volumes);
        let volumeSum = 0;
        for (const volume of volumes)
            volumeSum += volume;
        const averageVolume = volumeSum / volumes.length;
        var averageVol = (averageVolume * 100 / 127);
        volumeVisualizer.style.setProperty('--volume', averageVol + '%');

        var volumeIcon = document.getElementById("toggleVolumeIcon");
        if (averageVol > 0) volumeIcon.src = "img/toggleVolumeOn.png";
        else volumeIcon.src = "img/toggleVolumeOff.png";

        if (averageVol >= 30 && averageVol < 60) volumeVisualizer.className = "correctBar";
        else volumeVisualizer.className = "bar";

        if (averageVol > 0) slidingVolumes.push(averageVol);
        if (slidingVolumes.length > 24) slidingVolumes.shift();
        if (slidingVolumes.length > 12) {
            let slidingAvg = 0;
            for (var slidingvol of slidingVolumes) slidingAvg += slidingvol;
            slidingAvg /= slidingVolumes.length;

            var textFeedback = document.getElementById("micFeedbackParagraph");
            if (slidingAvg < 30) {
                textFeedback.innerHTML = "On vous entend peu";
                textFeedback.style.color = "#f60000";
            }
            else if (slidingAvg < 60) {
                textFeedback.innerHTML = "On vous entend bien";
                textFeedback.style.color = "#152228";
            }
            else {
                textFeedback.innerHTML = "On vous entend trop fort";
                textFeedback.style.color = "#ff743e";
            }
        }
    };

    if (volumeCallback !== null && volumeInterval === null)
        volumeInterval = setInterval(volumeCallback, 100);
}

function ChangeAnalyser(audioStream) {
    if (volumeInterval !== null) {
        clearInterval(volumeInterval);
        volumeInterval = null;
    }
    if (window.stream) {
        window.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
    CreateAnalyser(audioStream);
}
