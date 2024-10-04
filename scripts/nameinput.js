var nameButton;
var nameField;

window.addEventListener("load", StartNameInput)

function StartNameInput(){
    nameField = document.getElementById("name");
    nameButton = document.getElementById("nameButton");

    nameButton.disabled = true;
    nameButton.className = "centeredButton2 eighteenregular";

    nameField.addEventListener('input', OnTyping);

    this.OnTyping();
}

function OnTyping(){
    var name = nameField.value;
    if(name.length < 2 || name.length > 32){
        nameButton.disabled = true;
        nameButton.className = "centeredButton2 eighteenregular";
    }
    else{
        nameButton.disabled = false;
        nameButton.className = "centeredButton eighteenregular";
    }
}
