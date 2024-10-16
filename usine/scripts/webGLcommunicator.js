var receiveReady = false;
var sendReady = false;
var canClipboard = false;
var loadingTimer = 0;
var sceneAlreadyChosen = false;
var sceneNameChosen = "";

BrowserInteraction.Subscribe("plzsend", ReadyToReceive);
BrowserInteraction.Subscribe("modifyURL", ModifyURL);
BrowserInteraction.Subscribe("demodifyURL", DemodifyURL);
BrowserInteraction.Subscribe("askForPageURL", SendPageURL);
BrowserInteraction.Subscribe("roomConnect", NormalRoomConnection);
BrowserInteraction.Subscribe("roomDisconnect", NormalRoomDisconnection);
BrowserInteraction.Subscribe("roomAccident", AbnormalRoomDisconnection);
BrowserInteraction.Subscribe("roomReconnection", AbnormalRoomConnection);
BrowserInteraction.Subscribe("visitLength", VisitLength);
BrowserInteraction.Subscribe("signalIssue", CommunicateIssue);
let timeOut;

window.addEventListener("load", SendTheDataOver);

function CommunicateIssue(eventName, eventValue) {
    var index = eventValue.indexOf(";");
    var category = eventValue.slice(0, index);
    var desc = eventValue.slice(index + 1);

    IssueEvents(category, desc);
}

function ReadyToSend() {
    sendReady = true;
    console.log("ReadyToSend");
    if(isRPM)
        BrowserInteraction.FireEvent("selectRPM", "select");
    else
        BrowserInteraction.FireEvent("selectavatar", avatar.toString());
}

function ReadyToReceive() {
    //var fakeloader = document.getElementById("customloader");
    //fakeloader.style.display = "none";

    if (!GetDevBuild()) AnalyticsEvent('WebGL_Loaded', '', loadingTimer);
    console.log('Analytics : WebGL_Loaded, ' + loadingTimer);

    receiveReady = true;
    navigator.permissions.query({ name: 'clipboard-write' }).then(function (result) {
        if (result.state == 'granted') {
            canClipboard = true;
            BrowserInteraction.FireEvent("supportClipboard", "");
        }
        else canClipboard = false; BrowserInteraction.FireEvent("supportClipboard", "");
    }, function (err) {
        console.log("Ce navigateur ne supporte pas l'écriture dans le presse papier");
    });
}

function ModifyURL(eventName, eventValue) {
    window.location.hash = eventValue;
}

function DemodifyURL() {
    window.location.hash = "";
}

function SendPageURL() {
    ClipboardURL();
}

function NormalRoomConnection() {
    if (!GetDevBuild()) AnalyticsEvent('Online_Visit', 'normalConnection', 0);
    console.log('Analytics : Online_Visit, normalConnection');
}

function NormalRoomDisconnection() {
    if (!GetDevBuild()) AnalyticsEvent('Online_Visit', 'normalDisconnection', 0);
    console.log('Analytics : Online_Visit, normalDisconnection');
}

function AbnormalRoomDisconnection() {
    if (!GetDevBuild()) AnalyticsEvent('Online_Visit', 'abnormalDisconnection', 0);
    console.log('Analytics : Online_Visit, abnormalDisconnection');
}

function AbnormalRoomConnection() {
    if (!GetDevBuild()) AnalyticsEvent('Online_Visit', 'abnormalConnection', 0);
    console.log('Analytics : Online_Visit, abnormalConnection');
}

function VisitLength(eventName, eventValue) {
    if (!GetDevBuild()) AnalyticsEvent('Visit_Length', '', eventValue);
    console.log('Analytics : Visit_Length, ' + eventValue);
}

async function ClipboardURL() {
    if (canClipboard) {
        let blob = new Blob([window.location.toString()], { type: 'text/plain' });
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    }
	else {
        
		await navigator.clipboard.writeText(window.location.toString());
	}
}

function SendTheDataOver() {
    if (receiveReady && sendReady) {
        clearTimeout(timeOut);
        if (sessionStorage.getItem('Nom') != null) BrowserInteraction.FireEvent("changeusername", sessionStorage.getItem('Nom').toString());
        if (window.location.hash != ""){
            var query = window.location.hash.split("?meeting=");
            console.log("Hash is " + window.location.hash)
            console.log("Query is " + query)
            if(query.length >  1)
                BrowserInteraction.FireEvent("autoConnection", query[0] + "," + 1);
            else
                BrowserInteraction.FireEvent("autoConnection", window.location.hash+","+ 0);
            
        } 
        //BrowserInteraction.FireEvent("changescene", SceneIndex.toString());
        if (sessionStorage.getItem('Video') != null) BrowserInteraction.FireEvent("changewebcamname", sessionStorage.getItem('Video').toString());
        if (sessionStorage.getItem('videoWidth') != null) BrowserInteraction.FireEvent("changewebcamwidth", sessionStorage.getItem('videoWidth').toString());
        if (sessionStorage.getItem('videoHeight') != null) BrowserInteraction.FireEvent("changewebcamheight", sessionStorage.getItem('videoHeight').toString());
        // BrowserInteraction.FireEvent("selectavatar", avatar.toString());
        console.log("ReadyToSend && SendReady");
    }
    else {
        loadingTimer += 100;
        timeOut = setTimeout(SendTheDataOver, 100);
    }
}
