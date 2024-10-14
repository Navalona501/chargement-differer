

function setupRpmFrame(url, targetGameObjectName) {
    const message = "message";
    const rpmFilter = "readyplayerme";
    const frameReadyEvent = "v1.frame.ready";
    const receivingFunctionName = "FrameMessageReceived";

    rpmFrame.src = "";
    rpmFrame.src = url;
    window.removeEventListener(message, subscribe);
    document.removeEventListener(message, subscribe);
    window.addEventListener(message, subscribe);
    document.addEventListener(message, subscribe);
    
    function subscribe(event) {
        const json = parse(event);
        if (
            myGameInstance == null ||
            json?.source !== rpmFilter ||
            json?.eventName == null
        ) {
            return;
        }
        if (json.data && json.data.metadata) {
            delete json.data.metadata;
        }    
        myGameInstance.SendMessage(
            targetGameObjectName,
            receivingFunctionName,
            JSON.stringify(json)
        );
        
        // Subscribe to all events sent from Ready Player Me once frame is ready
        if (json.eventName === frameReadyEvent) {
            if (rpmFrame.contentWindow) {
                rpmFrame.contentWindow.postMessage(
                    JSON.stringify({
                        target: rpmFilter,
                        type: "subscribe",
                        eventName: "v1.**",
                    }),
                    "*"
                );
            }
        }

        // Get user id
        if (json.eventName === "v1.user.set") {
            console.log(`FRAME: User with id ${json.data.id} set: ${JSON.stringify(json)}`);
        }
        
    }

    function parse(event) {
        try {
            return JSON.parse(event.data);
        } catch (error) {
            return null;
        }
    }
}

function showRpm() {
    rpmContainer.style.display = "block";
}

function hideRpm() {
    rpmContainer.style.display = "none";
    rpmFrame.src = rpmFrame.src;
}
