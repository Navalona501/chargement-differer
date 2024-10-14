window.addEventListener("load", CheckBrowser);
window.addEventListener("load", ChangePageTitle);

avatar = 0;
isRPM = false;

function CheckBrowser() {
  if (platform.name == 'Safari') {
    var divBase = document.getElementById("ChoixDuNom");
    var divBlock = document.getElementById("BloqueSafari");
    divBlock.style.display = "block";
    divBase.style.display = "none";
  }
}

function ChangePageTitle() {
  var subsite = window.location.pathname;
  var nompage = subsite.substring(1, subsite.length - 1);
  document.title = nompage + " | Custmeet"
}
/**
 * Select Custmeet avatar with the given ID
 * @param {int} avatarID 
 */
function SelectAvatar(avatarID) {
  avatar = avatarID;
  document.getElementById("AvatarSelection").style.display = "none";
  document.getElementById("SceneImages").style.display = "none";
  document.getElementById("rpm-container").style.display = "none";
  LaunchVisite(myGameInstance)
}
/**
 * Select RPM avatar with the given ID
 * @param {int} avatarID 
 */
function SelectRPM(avatarID) {
  avatar = avatarID;
  isRPM = true;
  document.getElementById("AvatarSelection").style.display = "none";
  document.getElementById("SceneImages").style.display = "none";
  document.getElementById("rpm-container").style.display = "flex";
  LaunchVisite(myGameInstance)
}
/**
 * Show the avatar selection screen
 */
function ShowAvatarSelection() {
  document.getElementById("TestAudioVideo").style.display = "none";
  document.getElementById("AvatarSelection").style.display = "flex";
  document.getElementById("SceneImages").style.display = "flex";
}

function GetDevicesMenu() {
  var divTestAudioVideo = document.getElementById("TestAudioVideo");
  var divChoiceName = document.getElementById("ChoixDuNom");
  divTestAudioVideo.style.display = "block";
  divChoiceName.style.display = "none";
}

function PermissionCheck() {
  console.log("Permission Check");
  var joinButton = document.getElementById("pass");
  navigator.permissions.query({ name: 'microphone' }).then((result) => {
    console.log("MICRO IS " + result.state)
    if (result.state === 'granted') {
      joinButton.disabled = false;
      joinButton.className = "centeredButton eighteenregular";

    } else {
      joinButton.disabled = true;
      joinButton.className = "centeredButton2 eighteenregular";
    }
  });
}

async function LaunchVisite(unityInstance) {
  var divTestAudioVideo = document.getElementById("AvatarSelection");
  document.getElementById("SceneImages").style.display = "none";
  var divUnity = document.getElementById("loadingandunitycontainer");
  divUnity.style.display = "initial";
  divTestAudioVideo.style.display = "none";
  await waitFor(() => {
    console.log("WAITING FOR INSTANCE")
    return myGameInstance != null}
  );

  /*try{
  myGameInstance.SetFullscreen(1);}
  catch{console.log("Can't put fullscreen")}*/
  ReadyToSend();

  document.body.style.overflow = "hidden";
}

let sleep = ms => new Promise(r => setTimeout(r, ms));
let waitFor = async function waitFor(f) {
  while (!f()) await sleep(1000);
  return f();
};


function SaveAudioInSessionStorage(value) {
  sessionStorage.setItem('Audio', value);
}

function ValidateName(value) {
  SaveNameInSessionStorage(value);
  GetDevicesMenu();
  PermsAndSelects();
}

function SaveNameInSessionStorage(value) {
  value = value.trim();
  sessionStorage.setItem('Nom', value);
  //LaunchVisite();
}
function SaveSceneChoice(value) {
  SceneIndex = value;
  var divChoixScene = document.getElementById("ChoixScene");
  var divChoixNom = document.getElementById("ChoixDuNom");
  divChoixScene.style.display = "none";
  divChoixNom.style.display = "block";
  //LaunchVisite();
}

function SaveVideoInSessionStorage(value) {
  console.log("SAVED WEBCAM : " + value);
  sessionStorage.setItem('Video', value);
}
