class Volume{
    constructor(rangeElement, options){
        this.rangeElement = rangeElement;
        this.options = options;
        
        this.rangeElement.addEventListener('input', this.updateVolume.bind(this));
    }

    init(){
        this.rangeElement.setAttribute('min', options.min);
        this.rangeElement.setAttribute('max', options.max);
        this.rangeElement.setAttribute('value', options.cur);

        this.updateVolume();
    }

    generateBackground(){
        if(this.rangeElement.value == this.options.min) {
            volumeIcon.src = toggleVolumeOff;
            return;
        }
        volumeIcon.src = toggleVolumeOn;
        let percentage = (this.rangeElement.value - this.options.min)/(this.options.max - this.options.min) * 100;
        return 'background: linear-gradient(90deg, rgba(246,0,0,1) 0%, rgba(255,116,62,1) ' + percentage + '%, rgba(195,199,200,1) ' + percentage + '%)';
    }

    updateVolume(){
        this.rangeElement.style = this.generateBackground();
    }
}

var toggleVolumeOff = "img/toggleVolumeOff.png";
var toggleVolumeOn = "img/toggleVolumeOn.png";
var volumeIcon;

let options = {
    min: 0,
    max: 100,
    cur: 100
}

window.addEventListener("load", letsgo);

function letsgo(){
    var rangeElement = document.getElementById("volumeSlider");
    volumeIcon = document.getElementById("toggleVolumeIcon");
    
    if(rangeElement) {
        let slider = new Volume(rangeElement, options);
        slider.init();
    }
}
