function AnalyticsEvent(category, txtvalue, intvalue){
    var url = window.location.origin + "/eventmanager.php";

    var data = new FormData();
    data.set('cat', category);
    data.set('txt', txtvalue);
    data.set('int', intvalue);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(data);
}

function IssueEvents(category, description){
    var url = window.location.origin + "/issuemanager.php";

    var data = new FormData();
    data.set('cat', category);
    data.set('desc', description);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(data);
}

function GetDevBuild(){
    if(window.location.host == "beta.visio3d.kainoo.ch"){
        console.log("Pas d'analytics sur un site de dev!");
        return true;
    }
    else return false;
}
