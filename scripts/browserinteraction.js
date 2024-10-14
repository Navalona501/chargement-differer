var BrowserInteraction = {
    /** eventName => [callbackFn, ...] */
    subs: {},
    /** [(string, string) => void] */
    anyEventSubs: [],

    Subscribe: function(eventName, callback) {
        if(eventName in this.subs) {
            var cbList = this.subs[eventName];
            if (!cbList.includes(callback)) {
                cbList.push(callback);
            }
        } else {
            this.subs[eventName] = [callback];
        }
    },
    Unsubscribe: function(eventName, callback) {
        if (eventName in this.subs) {
            var idx = this.subs[eventName].indexOf(callback);
            if (idx >= 0) {
                this.subs[eventName].splice(index, idx);
                if (Object.keys(this.subs).length == 0) {
                    delete this.subs[eventName];
                }
            }
        }
    },
    UnsubscribeAll: function(eventName) {
        if (eventName in this.subs) {
            delete this.subs[eventName];
        }
    },
    FireEvent: function(eventName, eventValue) {
        this.FireEventLocal(eventName, eventValue);
        this.FireEventRemote(eventName, eventValue);
    },
    FireEventLocal: function(eventName, eventValue) {
        if (eventName in this.subs) {
            var cbList = this.subs[eventName];
            for(var i in cbList) {
                cbList[i](eventName, eventValue);
            }
        }

        for (var i in this.anyEventSubs) {
            this.anyEventSubs[i](eventName, eventValue);
        }
    },
    FireEventRemote: function(eventName, eventValue) {
        var e = eventName;
        var v = eventValue;
        myGameInstance.Module.ccall("call_cb_vs", null, ["string", "string"], [e, v]);
    },

    
    /**
     * Subscribes to all events, should be used only for debug purposes.
     * @param {(string, string) => void} callback 
     */
    _SubscribeAny: function(callback) {
        var idx = this.anyEventSubs.indexOf(callback);
        if (idx < 0) {
            this.anyEventSubs.push(callback);
        }
    },
    /**
     * Unsubscribes a callback from the all events listener.
     * This callback needs to be the exact same function object as the one registered to correctly unregister. Pro-tip: use named functions only!
     * @param {(string, string) => void} callback 
     */
    _UnsubscribeAny: function(callback) {
        var idx = this.anyEventSubs.indexOf(callback);
        if (idx >= 0) {
            delete this.anyEventSubs[idx];
        }
    }
};
