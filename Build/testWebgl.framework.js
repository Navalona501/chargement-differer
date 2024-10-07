function unityFramework(Module) {
var Module = typeof Module !== "undefined" ? Module : {};

"use strict";(this.webpackChunk_livekit_livekit_unity=this.webpackChunk_livekit_livekit_unity||[]).push([[613],{187:e=>{var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function NumberIsNaN(e){return e!=e};function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter,e.exports.once=function once(e,t){return new Promise((function(n,r){function errorListener(n){e.removeListener(t,resolver),r(n)}function resolver(){"function"==typeof e.removeListener&&e.removeListener("error",errorListener),n([].slice.call(arguments))}eventTargetAgnosticAddListener(e,t,resolver,{once:!0}),"error"!==t&&function addErrorHandlerIfEventEmitter(e,t,n){"function"==typeof e.on&&eventTargetAgnosticAddListener(e,"error",t,n)}(e,errorListener,{once:!0})}))},EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var s=10;function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var i,s,o;if(checkListener(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=_getMaxListeners(e))>0&&o.length>i&&!o.warned){o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=o.length,function ProcessEmitWarning(e){console&&console.warn&&console.warn(e)}(u)}return e}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=onceWrapper.bind(r);return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):arrayClone(i,i.length)}function listenerCount(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function eventTargetAgnosticAddListener(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function wrapListener(i){r.once&&e.removeEventListener(t,wrapListener),n(i)}))}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,s=this._events;if(void 0!==s)i=i&&void 0===s.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=o,u}var v=s[e];if(void 0===v)return!1;if("function"==typeof v)r(v,this,t);else{var a=v.length,c=arrayClone(v,a);for(n=0;n<a;++n)r(c[n],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,i,s,o;if(checkListener(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?t(this._events):[]}},933:(e,t,n)=>{n.r(t),n.d(t,{UnityBridge:()=>UnityBridge,UnityEvent:()=>r});var r,i=n(187);class UnityBridge extends i.EventEmitter{_ready=!1;constructor(){super(),this.once(r.BridgeReady,(()=>{this._ready=!0}))}get ready(){return this._ready}static get instance(){var e=window;return e.lkbridgeinst||(e.lkbridgeinst=new this)}emit(e,...t){return super.emit(e,...t)}}!function(e){e.BridgeReady="bridgeReady",e.RoomCreated="roomCreated"}(r||(r={}))}},e=>{var t,n=(t=933,e(e.s=t));window.lkbridge=n}]);
(()=>{"use strict";var e,t={},i={};function __webpack_require__(e){var n=i[e];if(void 0!==n)return n.exports;var s=i[e]={exports:{}};return t[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=t,e=[],__webpack_require__.O=(t,i,n,s)=>{if(!i){var a=1/0;for(l=0;l<e.length;l++){for(var[i,n,s]=e[l],o=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](i[c])))?i.splice(c--,1):(o=!1,s<a&&(a=s));if(o){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[i,n,s]},__webpack_require__.d=(e,t)=>{for(var i in t)__webpack_require__.o(t,i)&&!__webpack_require__.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={588:0};__webpack_require__.O.j=t=>0===e[t];var webpackJsonpCallback=(t,i)=>{var n,s,[a,o,c]=i,u=0;if(a.some((t=>0!==e[t]))){for(n in o)__webpack_require__.o(o,n)&&(__webpack_require__.m[n]=o[n]);if(c)var l=c(__webpack_require__)}for(t&&t(i);u<a.length;u++)s=a[u],__webpack_require__.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return __webpack_require__.O(l)},t=this.webpackChunk_livekit_livekit_unity=this.webpackChunk_livekit_livekit_unity||[];t.forEach(webpackJsonpCallback.bind(null,0)),t.push=webpackJsonpCallback.bind(null,t.push.bind(t))})();var n={};function _mergeNamespaces(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(i){if("default"!==i&&!(i in e)){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}}))})),Object.freeze(e)}__webpack_require__.r(n),__webpack_require__.d(n,{AudioPresets:()=>Ee,BaseKeyProvider:()=>BaseKeyProvider,ConnectionCheck:()=>ConnectionCheck,ConnectionError:()=>ConnectionError,ConnectionQuality:()=>Pt,ConnectionState:()=>Rt,CriticalTimers:()=>CriticalTimers,CryptorEvent:()=>Qe,DataPacket_Kind:()=>K,DefaultReconnectPolicy:()=>DefaultReconnectPolicy,DeviceUnsupportedError:()=>DeviceUnsupportedError,DisconnectReason:()=>B,EncryptionEvent:()=>He,EngineEvent:()=>Le,ExternalE2EEKeyProvider:()=>ExternalE2EEKeyProvider,KeyHandlerEvent:()=>Ge,KeyProviderEvent:()=>Ke,LivekitError:()=>LivekitError,LocalAudioTrack:()=>LocalAudioTrack,LocalParticipant:()=>LocalParticipant,LocalTrack:()=>LocalTrack,LocalTrackPublication:()=>LocalTrackPublication,LocalVideoTrack:()=>LocalVideoTrack,LogLevel:()=>l,MediaDeviceFailure:()=>ge,NegotiationError:()=>NegotiationError,Participant:()=>Participant,ParticipantEvent:()=>De,PublishDataError:()=>PublishDataError,RemoteAudioTrack:()=>RemoteAudioTrack,RemoteParticipant:()=>RemoteParticipant,RemoteTrack:()=>RemoteTrack,RemoteTrackPublication:()=>RemoteTrackPublication,RemoteVideoTrack:()=>RemoteVideoTrack,Room:()=>Room,RoomEvent:()=>Ie,RoomState:()=>_t,ScreenSharePresets:()=>_e,Track:()=>Track,TrackEvent:()=>Me,TrackInvalidError:()=>TrackInvalidError,TrackPublication:()=>TrackPublication,UnexpectedConnectionState:()=>UnexpectedConnectionState,UnsupportedServer:()=>UnsupportedServer,VideoPreset:()=>VideoPreset,VideoPresets:()=>Pe,VideoPresets43:()=>Re,VideoQuality:()=>N,attachToElement:()=>attachToElement,createAudioAnalyser:()=>createAudioAnalyser,createE2EEKey:()=>createE2EEKey,createKeyMaterialFromBuffer:()=>createKeyMaterialFromBuffer,createKeyMaterialFromString:()=>createKeyMaterialFromString,createLocalAudioTrack:()=>createLocalAudioTrack,createLocalScreenTracks:()=>createLocalScreenTracks,createLocalTracks:()=>createLocalTracks,createLocalVideoTrack:()=>createLocalVideoTrack,deriveKeys:()=>deriveKeys,detachTrack:()=>detachTrack,facingModeFromDeviceLabel:()=>facingModeFromDeviceLabel,facingModeFromLocalTrack:()=>facingModeFromLocalTrack,getEmptyAudioStreamTrack:()=>getEmptyAudioStreamTrack,getEmptyVideoStreamTrack:()=>getEmptyVideoStreamTrack,importKey:()=>importKey,isBackupCodec:()=>isBackupCodec,isBrowserSupported:()=>isBrowserSupported,isCodecEqual:()=>isCodecEqual,isE2EESupported:()=>isE2EESupported,isInsertableStreamSupported:()=>isInsertableStreamSupported,isScriptTransformSupported:()=>isScriptTransformSupported,isVideoFrame:()=>isVideoFrame,mimeTypeToVideoCodecString:()=>mimeTypeToVideoCodecString,protocolVersion:()=>be,ratchet:()=>ratchet,setLogExtension:()=>setLogExtension,setLogLevel:()=>setLogLevel,supportsAV1:()=>supportsAV1,supportsAdaptiveStream:()=>supportsAdaptiveStream,supportsDynacast:()=>supportsDynacast,supportsVP9:()=>supportsVP9,version:()=>Te,videoCodecs:()=>we});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var a,o,c,u={exports:{}};o=s,c=function(){var noop=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"];function bindMethod(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function traceForIE(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function realMethod(i){return"debug"===i&&(i="log"),typeof console!==e&&("trace"===i&&t?traceForIE:void 0!==console[i]?bindMethod(console,i):void 0!==console.log?bindMethod(console,"log"):noop)}function replaceLoggingMethods(e,t){for(var n=0;n<i.length;n++){var s=i[n];this[s]=n<e?noop:this.methodFactory(s,e,t)}this.log=this.debug}function enableLoggingWhenConsoleArrives(t,i,n){return function(){typeof console!==e&&(replaceLoggingMethods.call(this,i,n),this[t].apply(this,arguments))}}function defaultMethodFactory(e,t,i){return realMethod(e)||enableLoggingWhenConsoleArrives.apply(this,arguments)}function Logger(t,n,s){var a,o=this;n=null==n?"WARN":n;var c="loglevel";function getPersistedLevel(){var t;if(typeof window!==e&&c){try{t=window.localStorage[c]}catch(e){}if(typeof t===e)try{var i=window.document.cookie,n=i.indexOf(encodeURIComponent(c)+"=");-1!==n&&(t=/^([^;]+)/.exec(i.slice(n))[1])}catch(e){}return void 0===o.levels[t]&&(t=void 0),t}}"string"==typeof t?c+=":"+t:"symbol"==typeof t&&(c=void 0),o.name=t,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=s||defaultMethodFactory,o.getLevel=function(){return a},o.setLevel=function(n,s){if("string"==typeof n&&void 0!==o.levels[n.toUpperCase()]&&(n=o.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=o.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(a=n,!1!==s&&function persistLevelIfPossible(t){var n=(i[t]||"silent").toUpperCase();if(typeof window!==e&&c){try{return void(window.localStorage[c]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"="+n+";"}catch(e){}}}(n),replaceLoggingMethods.call(o,n,t),typeof console===e&&n<o.levels.SILENT)return"No console available for logging"},o.setDefaultLevel=function(e){n=e,getPersistedLevel()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(n,!1),function clearPersistedLevel(){if(typeof window!==e&&c){try{return void window.localStorage.removeItem(c)}catch(e){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var u=getPersistedLevel();null==u&&(u=n),o.setLevel(u,!1)}var n=new Logger,s={};n.getLogger=function getLogger(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=s[e];return t||(t=s[e]=new Logger(e,n.getLevel(),n.methodFactory)),t};var a=typeof window!==e?window.log:void 0;return n.noConflict=function(){return typeof window!==e&&window.log===n&&(window.log=a),n},n.getLoggers=function getLoggers(){return s},n.default=n,n},(a=u).exports?a.exports=c():o.log=c();var l,h=u.exports;!function(e){e[e.trace=0]="trace",e[e.debug=1]="debug",e[e.info=2]="info",e[e.warn=3]="warn",e[e.error=4]="error",e[e.silent=5]="silent"}(l||(l={}));const p=h.getLogger("livekit");function setLogLevel(e,t){t&&h.getLogger(t).setLevel(e);for(const t of Object.values(h.getLoggers()))t.setLevel(e)}function setLogExtension(e){const t=p.methodFactory;p.methodFactory=(i,n,s)=>{const a=t(i,n,s),o=l[i],c=o>=n&&o<l.silent;return(t,i)=>{i?a(t,i):a(t),c&&e(o,t,i)}},p.setLevel(p.getLevel())}function assert(e,t){if(!e)throw new Error(t)}p.setDefaultLevel(l.info),h.getLogger("lk-e2ee");function assertInt32(e){if("number"!=typeof e)throw new Error("invalid int 32: "+typeof e);if(!Number.isInteger(e)||e>2147483647||e<-2147483648)throw new Error("invalid int 32: "+e)}function assertUInt32(e){if("number"!=typeof e)throw new Error("invalid uint 32: "+typeof e);if(!Number.isInteger(e)||e>4294967295||e<0)throw new Error("invalid uint 32: "+e)}function assertFloat32(e){if("number"!=typeof e)throw new Error("invalid float 32: "+typeof e);if(Number.isFinite(e)&&(e>34028234663852886e22||e<-34028234663852886e22))throw new Error("invalid float 32: "+e)}const m=Symbol("@bufbuild/protobuf/enum-type");function getEnumType(e){const t=e[m];return assert(t,"missing enum type on enum object"),t}function setEnumType(e,t,i,n){e[m]=makeEnumType(t,i.map((t=>({no:t.no,name:t.name,localName:e[t.no]}))))}function makeEnumType(e,t,i){const n=Object.create(null),s=Object.create(null),a=[];for(const e of t){const t=normalizeEnumValue(e);a.push(t),n[e.name]=t,s[e.no]=t}return{typeName:e,values:a,findName:e=>n[e],findNumber:e=>s[e]}}function makeEnum(e,t,i){const n={};for(const e of t){const t=normalizeEnumValue(e);n[t.localName]=t.no,n[t.no]=t.localName}return setEnumType(n,e,t),n}function normalizeEnumValue(e){return"localName"in e?e:Object.assign(Object.assign({},e),{localName:e.name})}class Message{equals(e){return this.getType().runtime.util.equals(this.getType(),this,e)}clone(){return this.getType().runtime.util.clone(this)}fromBinary(e,t){const i=this.getType().runtime.bin,n=i.makeReadOptions(t);return i.readMessage(this,n.readerFactory(e),e.byteLength,n),this}fromJson(e,t){const i=this.getType(),n=i.runtime.json,s=n.makeReadOptions(t);return n.readMessage(i,e,s,this),this}fromJsonString(e,t){let i;try{i=JSON.parse(e)}catch(e){throw new Error("cannot decode ".concat(this.getType().typeName," from JSON: ").concat(e instanceof Error?e.message:String(e)))}return this.fromJson(i,t)}toBinary(e){const t=this.getType().runtime.bin,i=t.makeWriteOptions(e),n=i.writerFactory();return t.writeMessage(this,n,i),n.finish()}toJson(e){const t=this.getType().runtime.json,i=t.makeWriteOptions(e);return t.writeMessage(this,i)}toJsonString(e){var t;const i=this.toJson(e);return JSON.stringify(i,null,null!==(t=null==e?void 0:e.prettySpaces)&&void 0!==t?t:0)}toJSON(){return this.toJson({emitDefaultValues:!0})}getType(){return Object.getPrototypeOf(this).constructor}}var g;function varint64read(){let e=0,t=0;for(let i=0;i<28;i+=7){let n=this.buf[this.pos++];if(e|=(127&n)<<i,0==(128&n))return this.assertBounds(),[e,t]}let i=this.buf[this.pos++];if(e|=(15&i)<<28,t=(112&i)>>4,0==(128&i))return this.assertBounds(),[e,t];for(let i=3;i<=31;i+=7){let n=this.buf[this.pos++];if(t|=(127&n)<<i,0==(128&n))return this.assertBounds(),[e,t]}throw new Error("invalid varint")}function varint64write(e,t,i){for(let n=0;n<28;n+=7){const s=e>>>n,a=!(s>>>7==0&&0==t),o=255&(a?128|s:s);if(i.push(o),!a)return}const n=e>>>28&15|(7&t)<<4,s=!(t>>3==0);if(i.push(255&(s?128|n:n)),s){for(let e=3;e<31;e+=7){const n=t>>>e,s=!(n>>>7==0),a=255&(s?128|n:n);if(i.push(a),!s)return}i.push(t>>>31&1)}}!function(e){e[e.DOUBLE=1]="DOUBLE",e[e.FLOAT=2]="FLOAT",e[e.INT64=3]="INT64",e[e.UINT64=4]="UINT64",e[e.INT32=5]="INT32",e[e.FIXED64=6]="FIXED64",e[e.FIXED32=7]="FIXED32",e[e.BOOL=8]="BOOL",e[e.STRING=9]="STRING",e[e.BYTES=12]="BYTES",e[e.UINT32=13]="UINT32",e[e.SFIXED32=15]="SFIXED32",e[e.SFIXED64=16]="SFIXED64",e[e.SINT32=17]="SINT32",e[e.SINT64=18]="SINT64"}(g||(g={}));const v=4294967296;function int64FromString(e){const t="-"===e[0];t&&(e=e.slice(1));const i=1e6;let n=0,s=0;function add1e6digit(t,a){const o=Number(e.slice(t,a));s*=i,n=n*i+o,n>=v&&(s+=n/v|0,n%=v)}return add1e6digit(-24,-18),add1e6digit(-18,-12),add1e6digit(-12,-6),add1e6digit(-6),t?negate(n,s):newBits(n,s)}function uInt64ToString(e,t){if(({lo:e,hi:t}=function toUnsigned(e,t){return{lo:e>>>0,hi:t>>>0}}(e,t)),t<=2097151)return String(v*t+e);const i=16777215&(e>>>24|t<<8),n=t>>16&65535;let s=(16777215&e)+6777216*i+6710656*n,a=i+8147497*n,o=2*n;const c=1e7;return s>=c&&(a+=Math.floor(s/c),s%=c),a>=c&&(o+=Math.floor(a/c),a%=c),o.toString()+decimalFrom1e7WithLeadingZeros(a)+decimalFrom1e7WithLeadingZeros(s)}function newBits(e,t){return{lo:0|e,hi:0|t}}function negate(e,t){return t=~t,e?e=1+~e:t+=1,newBits(e,t)}const decimalFrom1e7WithLeadingZeros=e=>{const t=String(e);return"0000000".slice(t.length)+t};function varint32write(e,t){if(e>=0){for(;e>127;)t.push(127&e|128),e>>>=7;t.push(e)}else{for(let i=0;i<9;i++)t.push(127&e|128),e>>=7;t.push(1)}}function varint32read(){let e=this.buf[this.pos++],t=127&e;if(0==(128&e))return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(127&e)<<7,0==(128&e))return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(127&e)<<14,0==(128&e))return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(127&e)<<21,0==(128&e))return this.assertBounds(),t;e=this.buf[this.pos++],t|=(15&e)<<28;for(let t=5;0!=(128&e)&&t<10;t++)e=this.buf[this.pos++];if(0!=(128&e))throw new Error("invalid varint");return this.assertBounds(),t>>>0}const k=function makeInt64Support(){const e=new DataView(new ArrayBuffer(8));if("function"==typeof BigInt&&"function"==typeof e.getBigInt64&&"function"==typeof e.getBigUint64&&"function"==typeof e.setBigInt64&&"function"==typeof e.setBigUint64&&("object"!=typeof process||"object"!=typeof process.env||"1"!==process.env.BUF_BIGINT_DISABLE)){const t=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),n=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(e){const n="bigint"==typeof e?e:BigInt(e);if(n>i||n<t)throw new Error("int64 invalid: ".concat(e));return n},uParse(e){const t="bigint"==typeof e?e:BigInt(e);if(t>s||t<n)throw new Error("uint64 invalid: ".concat(e));return t},enc(t){return e.setBigInt64(0,this.parse(t),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},uEnc(t){return e.setBigInt64(0,this.uParse(t),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},dec:(t,i)=>(e.setInt32(0,t,!0),e.setInt32(4,i,!0),e.getBigInt64(0,!0)),uDec:(t,i)=>(e.setInt32(0,t,!0),e.setInt32(4,i,!0),e.getBigUint64(0,!0))}}const assertInt64String=e=>assert(/^-?[0-9]+$/.test(e),"int64 invalid: ".concat(e)),assertUInt64String=e=>assert(/^[0-9]+$/.test(e),"uint64 invalid: ".concat(e));return{zero:"0",supported:!1,parse:e=>("string"!=typeof e&&(e=e.toString()),assertInt64String(e),e),uParse:e=>("string"!=typeof e&&(e=e.toString()),assertUInt64String(e),e),enc:e=>("string"!=typeof e&&(e=e.toString()),assertInt64String(e),int64FromString(e)),uEnc:e=>("string"!=typeof e&&(e=e.toString()),assertUInt64String(e),int64FromString(e)),dec:(e,t)=>function int64ToString(e,t){let i=newBits(e,t);const n=2147483648&i.hi;n&&(i=negate(i.lo,i.hi));const s=uInt64ToString(i.lo,i.hi);return n?"-"+s:s}(e,t),uDec:(e,t)=>uInt64ToString(e,t)}}();var y;!function(e){e[e.Varint=0]="Varint",e[e.Bit64=1]="Bit64",e[e.LengthDelimited=2]="LengthDelimited",e[e.StartGroup=3]="StartGroup",e[e.EndGroup=4]="EndGroup",e[e.Bit32=5]="Bit32"}(y||(y={}));class BinaryWriter{constructor(e){this.stack=[],this.textEncoder=null!=e?e:new TextEncoder,this.chunks=[],this.buf=[]}finish(){this.chunks.push(new Uint8Array(this.buf));let e=0;for(let t=0;t<this.chunks.length;t++)e+=this.chunks[t].length;let t=new Uint8Array(e),i=0;for(let e=0;e<this.chunks.length;e++)t.set(this.chunks[e],i),i+=this.chunks[e].length;return this.chunks=[],t}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),t=this.stack.pop();if(!t)throw new Error("invalid state, fork stack empty");return this.chunks=t.chunks,this.buf=t.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,t){return this.uint32((e<<3|t)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(assertUInt32(e);e>127;)this.buf.push(127&e|128),e>>>=7;return this.buf.push(e),this}int32(e){return assertInt32(e),varint32write(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let t=this.textEncoder.encode(e);return this.uint32(t.byteLength),this.raw(t)}float(e){assertFloat32(e);let t=new Uint8Array(4);return new DataView(t.buffer).setFloat32(0,e,!0),this.raw(t)}double(e){let t=new Uint8Array(8);return new DataView(t.buffer).setFloat64(0,e,!0),this.raw(t)}fixed32(e){assertUInt32(e);let t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e,!0),this.raw(t)}sfixed32(e){assertInt32(e);let t=new Uint8Array(4);return new DataView(t.buffer).setInt32(0,e,!0),this.raw(t)}sint32(e){return assertInt32(e),varint32write(e=(e<<1^e>>31)>>>0,this.buf),this}sfixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),n=k.enc(e);return i.setInt32(0,n.lo,!0),i.setInt32(4,n.hi,!0),this.raw(t)}fixed64(e){let t=new Uint8Array(8),i=new DataView(t.buffer),n=k.uEnc(e);return i.setInt32(0,n.lo,!0),i.setInt32(4,n.hi,!0),this.raw(t)}int64(e){let t=k.enc(e);return varint64write(t.lo,t.hi,this.buf),this}sint64(e){let t=k.enc(e),i=t.hi>>31;return varint64write(t.lo<<1^i,(t.hi<<1|t.lo>>>31)^i,this.buf),this}uint64(e){let t=k.uEnc(e);return varint64write(t.lo,t.hi,this.buf),this}}class BinaryReader{constructor(e,t){this.varint64=varint64read,this.uint32=varint32read,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength),this.textDecoder=null!=t?t:new TextDecoder}tag(){let e=this.uint32(),t=e>>>3,i=7&e;if(t<=0||i<0||i>5)throw new Error("illegal tag: field no "+t+" wire type "+i);return[t,i]}skip(e){let t=this.pos;switch(e){case y.Varint:for(;128&this.buf[this.pos++];);break;case y.Bit64:this.pos+=4;case y.Bit32:this.pos+=4;break;case y.LengthDelimited:let t=this.uint32();this.pos+=t;break;case y.StartGroup:let i;for(;(i=this.tag()[1])!==y.EndGroup;)this.skip(i);break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(t,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return 0|this.uint32()}sint32(){let e=this.uint32();return e>>>1^-(1&e)}int64(){return k.dec(...this.varint64())}uint64(){return k.uDec(...this.varint64())}sint64(){let[e,t]=this.varint64(),i=-(1&e);return e=(e>>>1|(1&t)<<31)^i,t=t>>>1^i,k.dec(e,t)}bool(){let[e,t]=this.varint64();return 0!==e||0!==t}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return k.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return k.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),t=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(t,t+e)}string(){return this.textDecoder.decode(this.bytes())}}function wrapField(e,t){return t instanceof Message||!e.fieldWrapper?t:e.fieldWrapper.wrapField(t)}function scalarEquals(e,t,i){if(t===i)return!0;if(e==g.BYTES){if(!(t instanceof Uint8Array&&i instanceof Uint8Array))return!1;if(t.length!==i.length)return!1;for(let e=0;e<t.length;e++)if(t[e]!==i[e])return!1;return!0}switch(e){case g.UINT64:case g.FIXED64:case g.INT64:case g.SFIXED64:case g.SINT64:return t==i}return!1}function scalarDefaultValue(e){switch(e){case g.BOOL:return!1;case g.UINT64:case g.FIXED64:case g.INT64:case g.SFIXED64:case g.SINT64:return k.zero;case g.DOUBLE:case g.FLOAT:return 0;case g.BYTES:return new Uint8Array(0);case g.STRING:return"";default:return 0}}function scalarTypeInfo(e,t){const i=void 0===t;let n=y.Varint,s=0===t;switch(e){case g.STRING:s=i||!t.length,n=y.LengthDelimited;break;case g.BOOL:s=!1===t;break;case g.DOUBLE:n=y.Bit64;break;case g.FLOAT:n=y.Bit32;break;case g.INT64:case g.UINT64:s=i||0==t;break;case g.FIXED64:s=i||0==t,n=y.Bit64;break;case g.BYTES:s=i||!t.byteLength,n=y.LengthDelimited;break;case g.FIXED32:case g.SFIXED32:n=y.Bit32;break;case g.SFIXED64:s=i||0==t,n=y.Bit64;break;case g.SINT64:s=i||0==t}return[n,g[e].toLowerCase(),i||s]}g.DOUBLE,g.FLOAT,g.INT64,g.UINT64,g.INT32,g.UINT32,g.BOOL,g.STRING,g.BYTES;const S=Symbol("@bufbuild/protobuf/unknown-fields"),T={readUnknownFields:!0,readerFactory:e=>new BinaryReader(e)},b={writeUnknownFields:!0,writerFactory:()=>new BinaryWriter};function makeReadOptions$1(e){return e?Object.assign(Object.assign({},T),e):T}function makeWriteOptions$1(e){return e?Object.assign(Object.assign({},b),e):b}function readMessageField(e,t,i){return t.getType().runtime.bin.readMessage(t,e,e.uint32(),i),t}function readMapEntry(e,t,i){const n=t.uint32(),s=t.pos+n;let a,o;for(;t.pos<s;){let[n]=t.tag();switch(n){case 1:a=readScalar$1(t,e.K);break;case 2:switch(e.V.kind){case"scalar":o=readScalar$1(t,e.V.T);break;case"enum":o=t.int32();break;case"message":o=readMessageField(t,new e.V.T,i)}}}if(void 0===a){let t=scalarDefaultValue(e.K);a=e.K==g.BOOL?t.toString():t}if("string"!=typeof a&&"number"!=typeof a&&(a=a.toString()),void 0===o)switch(e.V.kind){case"scalar":o=scalarDefaultValue(e.V.T);break;case"enum":o=0;break;case"message":o=new e.V.T}return[a,o]}function readScalar$1(e,t){switch(t){case g.STRING:return e.string();case g.BOOL:return e.bool();case g.DOUBLE:return e.double();case g.FLOAT:return e.float();case g.INT32:return e.int32();case g.INT64:return e.int64();case g.UINT64:return e.uint64();case g.FIXED64:return e.fixed64();case g.BYTES:return e.bytes();case g.FIXED32:return e.fixed32();case g.SFIXED32:return e.sfixed32();case g.SFIXED64:return e.sfixed64();case g.SINT64:return e.sint64();case g.UINT32:return e.uint32();case g.SINT32:return e.sint32()}}function writeMapEntry(e,t,i,n,s){e.tag(i.no,y.LengthDelimited),e.fork();let a=n;switch(i.K){case g.INT32:case g.FIXED32:case g.UINT32:case g.SFIXED32:case g.SINT32:a=Number.parseInt(n);break;case g.BOOL:assert("true"==n||"false"==n),a="true"==n}switch(writeScalar$1(e,i.K,1,a,!0),i.V.kind){case"scalar":writeScalar$1(e,i.V.T,2,s,!0);break;case"enum":writeScalar$1(e,g.INT32,2,s,!0);break;case"message":writeMessageField(e,t,i.V.T,2,s)}e.join()}function writeMessageField(e,t,i,n,s){if(void 0!==s){const a=wrapField(i,s);e.tag(n,y.LengthDelimited).bytes(a.toBinary(t))}}function writeScalar$1(e,t,i,n,s){let[a,o,c]=scalarTypeInfo(t,n);c&&!s||e.tag(i,a)[o](n)}function writePacked(e,t,i,n){if(!n.length)return;e.tag(i,y.LengthDelimited).fork();let[,s]=scalarTypeInfo(t);for(let t=0;t<n.length;t++)e[s](n[t]);e.join()}let C="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),w=[];for(let e=0;e<C.length;e++)w[C[e].charCodeAt(0)]=e;w["-".charCodeAt(0)]=C.indexOf("+"),w["_".charCodeAt(0)]=C.indexOf("/");const E={dec(e){let t=3*e.length/4;"="==e[e.length-2]?t-=2:"="==e[e.length-1]&&(t-=1);let i,n=new Uint8Array(t),s=0,a=0,o=0;for(let t=0;t<e.length;t++){if(i=w[e.charCodeAt(t)],void 0===i)switch(e[t]){case"=":a=0;case"\n":case"\r":case"\t":case" ":continue;default:throw Error("invalid base64 string.")}switch(a){case 0:o=i,a=1;break;case 1:n[s++]=o<<2|(48&i)>>4,o=i,a=2;break;case 2:n[s++]=(15&o)<<4|(60&i)>>2,o=i,a=3;break;case 3:n[s++]=(3&o)<<6|i,a=0}}if(1==a)throw Error("invalid base64 string.");return n.subarray(0,s)},enc(e){let t,i="",n=0,s=0;for(let a=0;a<e.length;a++)switch(t=e[a],n){case 0:i+=C[t>>2],s=(3&t)<<4,n=1;break;case 1:i+=C[s|t>>4],s=(15&t)<<2,n=2;break;case 2:i+=C[s|t>>6],i+=C[63&t],n=0}return n&&(i+=C[s],i+="=",1==n&&(i+="=")),i}},P={ignoreUnknownFields:!1},R={emitDefaultValues:!1,enumAsInteger:!1,useProtoFieldName:!1,prettySpaces:0};function makeReadOptions(e){return e?Object.assign(Object.assign({},P),e):P}function makeWriteOptions(e){return e?Object.assign(Object.assign({},R),e):R}function debugJsonValue(e){if(null===e)return"null";switch(typeof e){case"object":return Array.isArray(e)?"array":"object";case"string":return e.length>100?"string":'"'.concat(e.split('"').join('\\"'),'"');default:return e.toString()}}function readScalar(e,t){switch(e){case g.DOUBLE:case g.FLOAT:if(null===t)return 0;if("NaN"===t)return Number.NaN;if("Infinity"===t)return Number.POSITIVE_INFINITY;if("-Infinity"===t)return Number.NEGATIVE_INFINITY;if(""===t)break;if("string"==typeof t&&t.trim().length!==t.length)break;if("string"!=typeof t&&"number"!=typeof t)break;const i=Number(t);if(Number.isNaN(i))break;if(!Number.isFinite(i))break;return e==g.FLOAT&&assertFloat32(i),i;case g.INT32:case g.FIXED32:case g.SFIXED32:case g.SINT32:case g.UINT32:if(null===t)return 0;let n;if("number"==typeof t?n=t:"string"==typeof t&&t.length>0&&t.trim().length===t.length&&(n=Number(t)),void 0===n)break;return e==g.UINT32?assertUInt32(n):assertInt32(n),n;case g.INT64:case g.SFIXED64:case g.SINT64:if(null===t)return k.zero;if("number"!=typeof t&&"string"!=typeof t)break;return k.parse(t);case g.FIXED64:case g.UINT64:if(null===t)return k.zero;if("number"!=typeof t&&"string"!=typeof t)break;return k.uParse(t);case g.BOOL:if(null===t)return!1;if("boolean"!=typeof t)break;return t;case g.STRING:if(null===t)return"";if("string"!=typeof t)break;try{encodeURIComponent(t)}catch(e){throw new Error("invalid UTF8")}return t;case g.BYTES:if(null===t||""===t)return new Uint8Array(0);if("string"!=typeof t)break;return E.dec(t)}throw new Error}function readEnum(e,t,i){if(null===t)return 0;switch(typeof t){case"number":if(Number.isInteger(t))return t;break;case"string":const n=e.findName(t);if(n||i)return null==n?void 0:n.no}throw new Error("cannot decode enum ".concat(e.typeName," from JSON: ").concat(debugJsonValue(t)))}function writeEnum(e,t,i,n){var s;if(void 0===t)return t;if(0===t&&!i)return;if(n)return t;if("google.protobuf.NullValue"==e.typeName)return null;const a=e.findNumber(t);return null!==(s=null==a?void 0:a.name)&&void 0!==s?s:t}function writeScalar(e,t,i){if(void 0!==t)switch(e){case g.INT32:case g.SFIXED32:case g.SINT32:case g.FIXED32:case g.UINT32:return assert("number"==typeof t),0!=t||i?t:void 0;case g.FLOAT:case g.DOUBLE:return assert("number"==typeof t),Number.isNaN(t)?"NaN":t===Number.POSITIVE_INFINITY?"Infinity":t===Number.NEGATIVE_INFINITY?"-Infinity":0!==t||i?t:void 0;case g.STRING:return assert("string"==typeof t),t.length>0||i?t:void 0;case g.BOOL:return assert("boolean"==typeof t),t||i?t:void 0;case g.UINT64:case g.FIXED64:case g.INT64:case g.SFIXED64:case g.SINT64:return assert("bigint"==typeof t||"string"==typeof t||"number"==typeof t),i||0!=t?t.toString(10):void 0;case g.BYTES:return assert(t instanceof Uint8Array),i||t.byteLength>0?E.enc(t):void 0}}function cloneSingularField(e,t){if(void 0===t)return t;if(t instanceof Message)return t.clone();if(t instanceof Uint8Array){const e=new Uint8Array(t.byteLength);return e.set(t),e}return t}class InternalFieldList{constructor(e,t){this._fields=e,this._normalizer=t}findJsonName(e){if(!this.jsonNames){const e={};for(const t of this.list())e[t.jsonName]=e[t.name]=t;this.jsonNames=e}return this.jsonNames[e]}find(e){if(!this.numbers){const e={};for(const t of this.list())e[t.no]=t;this.numbers=e}return this.numbers[e]}list(){return this.all||(this.all=this._normalizer(this._fields)),this.all}byNumber(){return this.numbersAsc||(this.numbersAsc=this.list().concat().sort(((e,t)=>e.no-t.no))),this.numbersAsc}byMember(){if(!this.members){this.members=[];const e=this.members;let t;for(const i of this.list())i.oneof?i.oneof!==t&&(t=i.oneof,e.push(t)):e.push(i)}return this.members}}function localFieldName(e,t){const i=protoCamelCase(e);return t?i:safeObjectProperty(safeMessageProperty(i))}const _=protoCamelCase;function protoCamelCase(e){let t=!1;const i=[];for(let n=0;n<e.length;n++){let s=e.charAt(n);switch(s){case"_":t=!0;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":i.push(s),t=!1;break;default:t&&(t=!1,s=s.toUpperCase()),i.push(s)}}return i.join("")}const I=new Set(["constructor","toString","toJSON","valueOf"]),D=new Set(["getType","clone","equals","fromBinary","fromJson","fromJsonString","toBinary","toJson","toJsonString","toObject"]),fallback=e=>"".concat(e,"$"),safeMessageProperty=e=>D.has(e)?fallback(e):e,safeObjectProperty=e=>I.has(e)?fallback(e):e;class InternalOneofInfo{constructor(e){this.kind="oneof",this.repeated=!1,this.packed=!1,this.opt=!1,this.default=void 0,this.fields=[],this.name=e,this.localName=function localOneofName(e){return localFieldName(e,!1)}(e)}addField(e){assert(e.oneof===this,"field ".concat(e.name," not one of ").concat(this.name)),this.fields.push(e)}findField(e){if(!this._lookup){this._lookup=Object.create(null);for(let e=0;e<this.fields.length;e++)this._lookup[this.fields[e].localName]=this.fields[e]}return this._lookup[e]}}const L=function makeProtoRuntime(e,t,i,n){return{syntax:e,json:t,bin:i,util:n,makeMessageType(e,t,i){return function makeMessageType(e,t,i,n){var s;const a=null!==(s=null==n?void 0:n.localName)&&void 0!==s?s:t.substring(t.lastIndexOf(".")+1),o={[a]:function(t){e.util.initFields(this),e.util.initPartial(t,this)}}[a];return Object.setPrototypeOf(o.prototype,new Message),Object.assign(o,{runtime:e,typeName:t,fields:e.util.newFieldList(i),fromBinary:(e,t)=>(new o).fromBinary(e,t),fromJson:(e,t)=>(new o).fromJson(e,t),fromJsonString:(e,t)=>(new o).fromJsonString(e,t),equals:(t,i)=>e.util.equals(o,t,i)}),o}(this,e,t,i)},makeEnum,makeEnumType,getEnumType}}("proto3",function makeJsonFormatProto3(){return function makeJsonFormatCommon(e){const t=e(writeEnum,writeScalar);return{makeReadOptions,makeWriteOptions,readMessage(e,t,i,n){if(null==t||Array.isArray(t)||"object"!=typeof t)throw new Error("cannot decode message ".concat(e.typeName," from JSON: ").concat(this.debug(t)));n=null!=n?n:new e;const s={};for(const[a,o]of Object.entries(t)){const t=e.fields.findJsonName(a);if(!t){if(!i.ignoreUnknownFields)throw new Error("cannot decode message ".concat(e.typeName,' from JSON: key "').concat(a,'" is unknown'));continue}let c=t.localName,u=n;if(t.oneof){if(null===o&&"scalar"==t.kind)continue;const i=s[t.oneof.localName];if(i)throw new Error("cannot decode message ".concat(e.typeName,' from JSON: multiple keys for oneof "').concat(t.oneof.name,'" present: "').concat(i,'", "').concat(a,'"'));s[t.oneof.localName]=a,u=u[t.oneof.localName]={case:c},c="value"}if(t.repeated){if(null===o)continue;if(!Array.isArray(o))throw new Error("cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(o)));const n=u[c];for(const s of o){if(null===s)throw new Error("cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(s)));let a;switch(t.kind){case"message":a=t.T.fromJson(s,i);break;case"enum":if(a=readEnum(t.T,s,i.ignoreUnknownFields),void 0===a)continue;break;case"scalar":try{a=readScalar(t.T,s)}catch(i){let n="cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(s));throw i instanceof Error&&i.message.length>0&&(n+=": ".concat(i.message)),new Error(n)}}n.push(a)}}else if("map"==t.kind){if(null===o)continue;if(Array.isArray(o)||"object"!=typeof o)throw new Error("cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(o)));const n=u[c];for(const[s,a]of Object.entries(o)){if(null===a)throw new Error("cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: map value null"));let c;switch(t.V.kind){case"message":c=t.V.T.fromJson(a,i);break;case"enum":if(c=readEnum(t.V.T,a,i.ignoreUnknownFields),void 0===c)continue;break;case"scalar":try{c=readScalar(t.V.T,a)}catch(i){let n="cannot decode map value for field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(o));throw i instanceof Error&&i.message.length>0&&(n+=": ".concat(i.message)),new Error(n)}}try{n[readScalar(t.K,t.K==g.BOOL?"true"==s||"false"!=s&&s:s).toString()]=c}catch(i){let n="cannot decode map key for field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(o));throw i instanceof Error&&i.message.length>0&&(n+=": ".concat(i.message)),new Error(n)}}}else switch(t.kind){case"message":const n=t.T;if(null===o&&"google.protobuf.Value"!=n.typeName){if(t.oneof)throw new Error("cannot decode field ".concat(e.typeName,".").concat(t.name,' from JSON: null is invalid for oneof field "').concat(a,'"'));continue}u[c]instanceof Message?u[c].fromJson(o,i):(u[c]=n.fromJson(o,i),n.fieldWrapper&&!t.oneof&&(u[c]=n.fieldWrapper.unwrapField(u[c])));break;case"enum":const s=readEnum(t.T,o,i.ignoreUnknownFields);void 0!==s&&(u[c]=s);break;case"scalar":try{u[c]=readScalar(t.T,o)}catch(i){let n="cannot decode field ".concat(e.typeName,".").concat(t.name," from JSON: ").concat(this.debug(o));throw i instanceof Error&&i.message.length>0&&(n+=": ".concat(i.message)),new Error(n)}}}return n},writeMessage(e,i){const n=e.getType(),s={};let a;try{for(const o of n.fields.byMember()){let n;if("oneof"==o.kind){const s=e[o.localName];if(void 0===s.value)continue;if(a=o.findField(s.case),!a)throw"oneof case not found: "+s.case;n=t(a,s.value,i)}else a=o,n=t(a,e[a.localName],i);void 0!==n&&(s[i.useProtoFieldName?a.name:a.jsonName]=n)}}catch(e){const t=a?"cannot encode field ".concat(n.typeName,".").concat(a.name," to JSON"):"cannot encode message ".concat(n.typeName," to JSON"),i=e instanceof Error?e.message:String(e);throw new Error(t+(i.length>0?": ".concat(i):""))}return s},readScalar,writeScalar,debug:debugJsonValue}}(((e,t)=>function writeField(i,n,s){if("map"==i.kind){const a={};switch(i.V.kind){case"scalar":for(const[e,s]of Object.entries(n)){const n=t(i.V.T,s,!0);assert(void 0!==n),a[e.toString()]=n}break;case"message":for(const[e,t]of Object.entries(n))a[e.toString()]=t.toJson(s);break;case"enum":const o=i.V.T;for(const[t,i]of Object.entries(n)){assert(void 0===i||"number"==typeof i);const n=e(o,i,!0,s.enumAsInteger);assert(void 0!==n),a[t.toString()]=n}}return s.emitDefaultValues||Object.keys(a).length>0?a:void 0}if(i.repeated){const a=[];switch(i.kind){case"scalar":for(let e=0;e<n.length;e++)a.push(t(i.T,n[e],!0));break;case"enum":for(let t=0;t<n.length;t++)a.push(e(i.T,n[t],!0,s.enumAsInteger));break;case"message":for(let e=0;e<n.length;e++)a.push(wrapField(i.T,n[e]).toJson(s))}return s.emitDefaultValues||a.length>0?a:void 0}switch(i.kind){case"scalar":return t(i.T,n,!!i.oneof||i.opt||s.emitDefaultValues);case"enum":return e(i.T,n,!!i.oneof||i.opt||s.emitDefaultValues,s.enumAsInteger);case"message":return void 0!==n?wrapField(i.T,n).toJson(s):void 0}}))}(),function makeBinaryFormatProto3(){return Object.assign(Object.assign({},function makeBinaryFormatCommon(){return{makeReadOptions:makeReadOptions$1,makeWriteOptions:makeWriteOptions$1,listUnknownFields(e){var t;return null!==(t=e[S])&&void 0!==t?t:[]},discardUnknownFields(e){delete e[S]},writeUnknownFields(e,t){const i=e[S];if(i)for(const e of i)t.tag(e.no,e.wireType).raw(e.data)},onUnknownField(e,t,i,n){const s=e;Array.isArray(s[S])||(s[S]=[]),s[S].push({no:t,wireType:i,data:n})},readMessage(e,t,i,n){const s=e.getType(),a=void 0===i?t.len:t.pos+i;for(;t.pos<a;){const[i,a]=t.tag(),o=s.fields.find(i);if(!o){const s=t.skip(a);n.readUnknownFields&&this.onUnknownField(e,i,a,s);continue}let c=e,u=o.repeated,l=o.localName;switch(o.oneof&&(c=c[o.oneof.localName],c.case!=l&&delete c.value,c.case=l,l="value"),o.kind){case"scalar":case"enum":const e="enum"==o.kind?g.INT32:o.T;if(u){let i=c[l];if(a==y.LengthDelimited&&e!=g.STRING&&e!=g.BYTES){let n=t.uint32()+t.pos;for(;t.pos<n;)i.push(readScalar$1(t,e))}else i.push(readScalar$1(t,e))}else c[l]=readScalar$1(t,e);break;case"message":const i=o.T;u?c[l].push(readMessageField(t,new i,n)):c[l]instanceof Message?readMessageField(t,c[l],n):(c[l]=readMessageField(t,new i,n),!i.fieldWrapper||o.oneof||o.repeated||(c[l]=i.fieldWrapper.unwrapField(c[l])));break;case"map":let[s,h]=readMapEntry(o,t,n);c[l][s]=h}}}}}()),{writeMessage(e,t,i){const n=e.getType();for(const s of n.fields.byNumber()){let n,a=s.repeated,o=s.localName;if(s.oneof){const t=e[s.oneof.localName];if(t.case!==o)continue;n=t.value}else n=e[o];switch(s.kind){case"scalar":case"enum":let e="enum"==s.kind?g.INT32:s.T;if(a)if(s.packed)writePacked(t,e,s.no,n);else for(const i of n)writeScalar$1(t,e,s.no,i,!0);else void 0!==n&&writeScalar$1(t,e,s.no,n,!!s.oneof||s.opt);break;case"message":if(a)for(const e of n)writeMessageField(t,i,s.T,s.no,e);else writeMessageField(t,i,s.T,s.no,n);break;case"map":for(const[e,a]of Object.entries(n))writeMapEntry(t,i,s,e,a)}}return i.writeUnknownFields&&this.writeUnknownFields(e,t),t}})}(),Object.assign(Object.assign({},function makeUtilCommon(){return{setEnumType,initPartial(e,t){if(void 0===e)return;const i=t.getType();for(const n of i.fields.byMember()){const i=n.localName,s=t,a=e;if(void 0!==a[i])switch(n.kind){case"oneof":const e=a[i].case;if(void 0===e)continue;const t=n.findField(e);let o=a[i].value;!t||"message"!=t.kind||o instanceof t.T||(o=new t.T(o)),s[i]={case:e,value:o};break;case"scalar":case"enum":s[i]=a[i];break;case"map":switch(n.V.kind){case"scalar":case"enum":Object.assign(s[i],a[i]);break;case"message":const e=n.V.T;for(const t of Object.keys(a[i])){let n=a[i][t];e.fieldWrapper||(n=new e(n)),s[i][t]=n}}break;case"message":const c=n.T;if(n.repeated)s[i]=a[i].map((e=>e instanceof c?e:new c(e)));else if(void 0!==a[i]){const e=a[i];c.fieldWrapper?s[i]=e:s[i]=e instanceof c?e:new c(e)}}}},equals:(e,t,i)=>t===i||!(!t||!i)&&e.fields.byMember().every((e=>{const n=t[e.localName],s=i[e.localName];if(e.repeated){if(n.length!==s.length)return!1;switch(e.kind){case"message":return n.every(((t,i)=>e.T.equals(t,s[i])));case"scalar":return n.every(((t,i)=>scalarEquals(e.T,t,s[i])));case"enum":return n.every(((e,t)=>scalarEquals(g.INT32,e,s[t])))}throw new Error("repeated cannot contain ".concat(e.kind))}switch(e.kind){case"message":return e.T.equals(n,s);case"enum":return scalarEquals(g.INT32,n,s);case"scalar":return scalarEquals(e.T,n,s);case"oneof":if(n.case!==s.case)return!1;const t=e.findField(n.case);if(void 0===t)return!0;switch(t.kind){case"message":return t.T.equals(n.value,s.value);case"enum":return scalarEquals(g.INT32,n.value,s.value);case"scalar":return scalarEquals(t.T,n.value,s.value)}throw new Error("oneof cannot contain ".concat(t.kind));case"map":const i=Object.keys(n).concat(Object.keys(s));switch(e.V.kind){case"message":const t=e.V.T;return i.every((e=>t.equals(n[e],s[e])));case"enum":return i.every((e=>scalarEquals(g.INT32,n[e],s[e])));case"scalar":const a=e.V.T;return i.every((e=>scalarEquals(a,n[e],s[e])))}}})),clone(e){const t=e.getType(),i=new t,n=i;for(const i of t.fields.byMember()){const t=e[i.localName];let s;if(i.repeated)s=t.map((e=>cloneSingularField(i,e)));else if("map"==i.kind){s=n[i.localName];for(const[e,n]of Object.entries(t))s[e]=cloneSingularField(i.V,n)}else if("oneof"==i.kind){const e=i.findField(t.case);s=e?{case:t.case,value:cloneSingularField(e,t.value)}:{case:void 0}}else s=cloneSingularField(i,t);n[i.localName]=s}return i}}}()),{newFieldList:e=>new InternalFieldList(e,normalizeFieldInfosProto3),initFields(e){for(const t of e.getType().fields.byMember()){if(t.opt)continue;const i=t.localName,n=e;if(t.repeated)n[i]=[];else switch(t.kind){case"oneof":n[i]={case:void 0};break;case"enum":n[i]=0;break;case"map":n[i]={};break;case"scalar":n[i]=scalarDefaultValue(t.T)}}}}));function normalizeFieldInfosProto3(e){var t,i,n;const s=[];let a;for(const o of"function"==typeof e?e():e){const e=o;if(e.localName=localFieldName(o.name,void 0!==o.oneof),e.jsonName=null!==(t=o.jsonName)&&void 0!==t?t:_(o.name),e.repeated=null!==(i=o.repeated)&&void 0!==i&&i,e.packed=null!==(n=o.packed)&&void 0!==n?n:"enum"==o.kind||"scalar"==o.kind&&o.T!=g.BYTES&&o.T!=g.STRING,void 0!==o.oneof){const t="string"==typeof o.oneof?o.oneof:o.oneof.name;a&&a.name==t||(a=new InternalOneofInfo(t)),e.oneof=a,a.addField(e)}s.push(e)}return s}class Timestamp extends Message{constructor(e){super(),this.seconds=k.zero,this.nanos=0,L.util.initPartial(e,this)}fromJson(e,t){if("string"!=typeof e)throw new Error("cannot decode google.protobuf.Timestamp from JSON: ".concat(L.json.debug(e)));const i=e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);if(!i)throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");const n=Date.parse(i[1]+"-"+i[2]+"-"+i[3]+"T"+i[4]+":"+i[5]+":"+i[6]+(i[8]?i[8]:"Z"));if(Number.isNaN(n))throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");if(n<Date.parse("0001-01-01T00:00:00Z")||n>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");return this.seconds=k.parse(n/1e3),this.nanos=0,i[7]&&(this.nanos=parseInt("1"+i[7]+"0".repeat(9-i[7].length))-1e9),this}toJson(e){const t=1e3*Number(this.seconds);if(t<Date.parse("0001-01-01T00:00:00Z")||t>Date.parse("9999-12-31T23:59:59Z"))throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");if(this.nanos<0)throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");let i="Z";if(this.nanos>0){const e=(this.nanos+1e9).toString().substring(1);i="000000"===e.substring(3)?"."+e.substring(0,3)+"Z":"000"===e.substring(6)?"."+e.substring(0,6)+"Z":"."+e+"Z"}return new Date(t).toISOString().replace(".000Z",i)}toDate(){return new Date(1e3*Number(this.seconds)+Math.ceil(this.nanos/1e6))}static now(){return Timestamp.fromDate(new Date)}static fromDate(e){const t=e.getTime();return new Timestamp({seconds:k.parse(Math.floor(t/1e3)),nanos:t%1e3*1e6})}static fromBinary(e,t){return(new Timestamp).fromBinary(e,t)}static fromJson(e,t){return(new Timestamp).fromJson(e,t)}static fromJsonString(e,t){return(new Timestamp).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Timestamp,e,t)}}var M,A,U,O,N,x,F,B,V,J;Timestamp.runtime=L,Timestamp.typeName="google.protobuf.Timestamp",Timestamp.fields=L.util.newFieldList((()=>[{no:1,name:"seconds",kind:"scalar",T:3},{no:2,name:"nanos",kind:"scalar",T:5}])),function(e){e[e.DEFAULT_AC=0]="DEFAULT_AC",e[e.OPUS=1]="OPUS",e[e.AAC=2]="AAC"}(M||(M={})),L.util.setEnumType(M,"livekit.AudioCodec",[{no:0,name:"DEFAULT_AC"},{no:1,name:"OPUS"},{no:2,name:"AAC"}]),function(e){e[e.DEFAULT_VC=0]="DEFAULT_VC",e[e.H264_BASELINE=1]="H264_BASELINE",e[e.H264_MAIN=2]="H264_MAIN",e[e.H264_HIGH=3]="H264_HIGH",e[e.VP8=4]="VP8"}(A||(A={})),L.util.setEnumType(A,"livekit.VideoCodec",[{no:0,name:"DEFAULT_VC"},{no:1,name:"H264_BASELINE"},{no:2,name:"H264_MAIN"},{no:3,name:"H264_HIGH"},{no:4,name:"VP8"}]),function(e){e[e.AUDIO=0]="AUDIO",e[e.VIDEO=1]="VIDEO",e[e.DATA=2]="DATA"}(U||(U={})),L.util.setEnumType(U,"livekit.TrackType",[{no:0,name:"AUDIO"},{no:1,name:"VIDEO"},{no:2,name:"DATA"}]),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CAMERA=1]="CAMERA",e[e.MICROPHONE=2]="MICROPHONE",e[e.SCREEN_SHARE=3]="SCREEN_SHARE",e[e.SCREEN_SHARE_AUDIO=4]="SCREEN_SHARE_AUDIO"}(O||(O={})),L.util.setEnumType(O,"livekit.TrackSource",[{no:0,name:"UNKNOWN"},{no:1,name:"CAMERA"},{no:2,name:"MICROPHONE"},{no:3,name:"SCREEN_SHARE"},{no:4,name:"SCREEN_SHARE_AUDIO"}]),function(e){e[e.LOW=0]="LOW",e[e.MEDIUM=1]="MEDIUM",e[e.HIGH=2]="HIGH",e[e.OFF=3]="OFF"}(N||(N={})),L.util.setEnumType(N,"livekit.VideoQuality",[{no:0,name:"LOW"},{no:1,name:"MEDIUM"},{no:2,name:"HIGH"},{no:3,name:"OFF"}]),function(e){e[e.POOR=0]="POOR",e[e.GOOD=1]="GOOD",e[e.EXCELLENT=2]="EXCELLENT"}(x||(x={})),L.util.setEnumType(x,"livekit.ConnectionQuality",[{no:0,name:"POOR"},{no:1,name:"GOOD"},{no:2,name:"EXCELLENT"}]),function(e){e[e.UNSET=0]="UNSET",e[e.DISABLED=1]="DISABLED",e[e.ENABLED=2]="ENABLED"}(F||(F={})),L.util.setEnumType(F,"livekit.ClientConfigSetting",[{no:0,name:"UNSET"},{no:1,name:"DISABLED"},{no:2,name:"ENABLED"}]),function(e){e[e.UNKNOWN_REASON=0]="UNKNOWN_REASON",e[e.CLIENT_INITIATED=1]="CLIENT_INITIATED",e[e.DUPLICATE_IDENTITY=2]="DUPLICATE_IDENTITY",e[e.SERVER_SHUTDOWN=3]="SERVER_SHUTDOWN",e[e.PARTICIPANT_REMOVED=4]="PARTICIPANT_REMOVED",e[e.ROOM_DELETED=5]="ROOM_DELETED",e[e.STATE_MISMATCH=6]="STATE_MISMATCH",e[e.JOIN_FAILURE=7]="JOIN_FAILURE"}(B||(B={})),L.util.setEnumType(B,"livekit.DisconnectReason",[{no:0,name:"UNKNOWN_REASON"},{no:1,name:"CLIENT_INITIATED"},{no:2,name:"DUPLICATE_IDENTITY"},{no:3,name:"SERVER_SHUTDOWN"},{no:4,name:"PARTICIPANT_REMOVED"},{no:5,name:"ROOM_DELETED"},{no:6,name:"STATE_MISMATCH"},{no:7,name:"JOIN_FAILURE"}]),function(e){e[e.RR_UNKNOWN=0]="RR_UNKNOWN",e[e.RR_SIGNAL_DISCONNECTED=1]="RR_SIGNAL_DISCONNECTED",e[e.RR_PUBLISHER_FAILED=2]="RR_PUBLISHER_FAILED",e[e.RR_SUBSCRIBER_FAILED=3]="RR_SUBSCRIBER_FAILED",e[e.RR_SWITCH_CANDIDATE=4]="RR_SWITCH_CANDIDATE"}(V||(V={})),L.util.setEnumType(V,"livekit.ReconnectReason",[{no:0,name:"RR_UNKNOWN"},{no:1,name:"RR_SIGNAL_DISCONNECTED"},{no:2,name:"RR_PUBLISHER_FAILED"},{no:3,name:"RR_SUBSCRIBER_FAILED"},{no:4,name:"RR_SWITCH_CANDIDATE"}]),function(e){e[e.SE_UNKNOWN=0]="SE_UNKNOWN",e[e.SE_CODEC_UNSUPPORTED=1]="SE_CODEC_UNSUPPORTED",e[e.SE_TRACK_NOTFOUND=2]="SE_TRACK_NOTFOUND"}(J||(J={})),L.util.setEnumType(J,"livekit.SubscriptionError",[{no:0,name:"SE_UNKNOWN"},{no:1,name:"SE_CODEC_UNSUPPORTED"},{no:2,name:"SE_TRACK_NOTFOUND"}]);let q=class Room extends Message{constructor(e){super(),this.sid="",this.name="",this.emptyTimeout=0,this.maxParticipants=0,this.creationTime=k.zero,this.turnPassword="",this.enabledCodecs=[],this.metadata="",this.numParticipants=0,this.numPublishers=0,this.activeRecording=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new Room).fromBinary(e,t)}static fromJson(e,t){return(new Room).fromJson(e,t)}static fromJsonString(e,t){return(new Room).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Room,e,t)}};q.runtime=L,q.typeName="livekit.Room",q.fields=L.util.newFieldList((()=>[{no:1,name:"sid",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9},{no:3,name:"empty_timeout",kind:"scalar",T:13},{no:4,name:"max_participants",kind:"scalar",T:13},{no:5,name:"creation_time",kind:"scalar",T:3},{no:6,name:"turn_password",kind:"scalar",T:9},{no:7,name:"enabled_codecs",kind:"message",T:Codec,repeated:!0},{no:8,name:"metadata",kind:"scalar",T:9},{no:9,name:"num_participants",kind:"scalar",T:13},{no:11,name:"num_publishers",kind:"scalar",T:13},{no:10,name:"active_recording",kind:"scalar",T:8},{no:12,name:"playout_delay",kind:"message",T:PlayoutDelay}]));class Codec extends Message{constructor(e){super(),this.mime="",this.fmtpLine="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new Codec).fromBinary(e,t)}static fromJson(e,t){return(new Codec).fromJson(e,t)}static fromJsonString(e,t){return(new Codec).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Codec,e,t)}}Codec.runtime=L,Codec.typeName="livekit.Codec",Codec.fields=L.util.newFieldList((()=>[{no:1,name:"mime",kind:"scalar",T:9},{no:2,name:"fmtp_line",kind:"scalar",T:9}]));class PlayoutDelay extends Message{constructor(e){super(),this.enabled=!1,this.min=0,this.max=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new PlayoutDelay).fromBinary(e,t)}static fromJson(e,t){return(new PlayoutDelay).fromJson(e,t)}static fromJsonString(e,t){return(new PlayoutDelay).fromJsonString(e,t)}static equals(e,t){return L.util.equals(PlayoutDelay,e,t)}}PlayoutDelay.runtime=L,PlayoutDelay.typeName="livekit.PlayoutDelay",PlayoutDelay.fields=L.util.newFieldList((()=>[{no:1,name:"enabled",kind:"scalar",T:8},{no:2,name:"min",kind:"scalar",T:13},{no:3,name:"max",kind:"scalar",T:13}]));class ParticipantPermission extends Message{constructor(e){super(),this.canSubscribe=!1,this.canPublish=!1,this.canPublishData=!1,this.canPublishSources=[],this.hidden=!1,this.recorder=!1,this.canUpdateMetadata=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new ParticipantPermission).fromBinary(e,t)}static fromJson(e,t){return(new ParticipantPermission).fromJson(e,t)}static fromJsonString(e,t){return(new ParticipantPermission).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ParticipantPermission,e,t)}}ParticipantPermission.runtime=L,ParticipantPermission.typeName="livekit.ParticipantPermission",ParticipantPermission.fields=L.util.newFieldList((()=>[{no:1,name:"can_subscribe",kind:"scalar",T:8},{no:2,name:"can_publish",kind:"scalar",T:8},{no:3,name:"can_publish_data",kind:"scalar",T:8},{no:9,name:"can_publish_sources",kind:"enum",T:L.getEnumType(O),repeated:!0},{no:7,name:"hidden",kind:"scalar",T:8},{no:8,name:"recorder",kind:"scalar",T:8},{no:10,name:"can_update_metadata",kind:"scalar",T:8}]));class ParticipantInfo extends Message{constructor(e){super(),this.sid="",this.identity="",this.state=j.JOINING,this.tracks=[],this.metadata="",this.joinedAt=k.zero,this.name="",this.version=0,this.region="",this.isPublisher=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new ParticipantInfo).fromBinary(e,t)}static fromJson(e,t){return(new ParticipantInfo).fromJson(e,t)}static fromJsonString(e,t){return(new ParticipantInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ParticipantInfo,e,t)}}var j,W,K,G,H;ParticipantInfo.runtime=L,ParticipantInfo.typeName="livekit.ParticipantInfo",ParticipantInfo.fields=L.util.newFieldList((()=>[{no:1,name:"sid",kind:"scalar",T:9},{no:2,name:"identity",kind:"scalar",T:9},{no:3,name:"state",kind:"enum",T:L.getEnumType(j)},{no:4,name:"tracks",kind:"message",T:TrackInfo,repeated:!0},{no:5,name:"metadata",kind:"scalar",T:9},{no:6,name:"joined_at",kind:"scalar",T:3},{no:9,name:"name",kind:"scalar",T:9},{no:10,name:"version",kind:"scalar",T:13},{no:11,name:"permission",kind:"message",T:ParticipantPermission},{no:12,name:"region",kind:"scalar",T:9},{no:13,name:"is_publisher",kind:"scalar",T:8}])),function(e){e[e.JOINING=0]="JOINING",e[e.JOINED=1]="JOINED",e[e.ACTIVE=2]="ACTIVE",e[e.DISCONNECTED=3]="DISCONNECTED"}(j||(j={})),L.util.setEnumType(j,"livekit.ParticipantInfo.State",[{no:0,name:"JOINING"},{no:1,name:"JOINED"},{no:2,name:"ACTIVE"},{no:3,name:"DISCONNECTED"}]);class Encryption extends Message{constructor(e){super(),L.util.initPartial(e,this)}static fromBinary(e,t){return(new Encryption).fromBinary(e,t)}static fromJson(e,t){return(new Encryption).fromJson(e,t)}static fromJsonString(e,t){return(new Encryption).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Encryption,e,t)}}Encryption.runtime=L,Encryption.typeName="livekit.Encryption",Encryption.fields=L.util.newFieldList((()=>[])),function(e){e[e.NONE=0]="NONE",e[e.GCM=1]="GCM",e[e.CUSTOM=2]="CUSTOM"}(W||(W={})),L.util.setEnumType(W,"livekit.Encryption.Type",[{no:0,name:"NONE"},{no:1,name:"GCM"},{no:2,name:"CUSTOM"}]);class SimulcastCodecInfo extends Message{constructor(e){super(),this.mimeType="",this.mid="",this.cid="",this.layers=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SimulcastCodecInfo).fromBinary(e,t)}static fromJson(e,t){return(new SimulcastCodecInfo).fromJson(e,t)}static fromJsonString(e,t){return(new SimulcastCodecInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SimulcastCodecInfo,e,t)}}SimulcastCodecInfo.runtime=L,SimulcastCodecInfo.typeName="livekit.SimulcastCodecInfo",SimulcastCodecInfo.fields=L.util.newFieldList((()=>[{no:1,name:"mime_type",kind:"scalar",T:9},{no:2,name:"mid",kind:"scalar",T:9},{no:3,name:"cid",kind:"scalar",T:9},{no:4,name:"layers",kind:"message",T:VideoLayer,repeated:!0}]));class TrackInfo extends Message{constructor(e){super(),this.sid="",this.type=U.AUDIO,this.name="",this.muted=!1,this.width=0,this.height=0,this.simulcast=!1,this.disableDtx=!1,this.source=O.UNKNOWN,this.layers=[],this.mimeType="",this.mid="",this.codecs=[],this.stereo=!1,this.disableRed=!1,this.encryption=W.NONE,this.stream="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new TrackInfo).fromBinary(e,t)}static fromJson(e,t){return(new TrackInfo).fromJson(e,t)}static fromJsonString(e,t){return(new TrackInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TrackInfo,e,t)}}TrackInfo.runtime=L,TrackInfo.typeName="livekit.TrackInfo",TrackInfo.fields=L.util.newFieldList((()=>[{no:1,name:"sid",kind:"scalar",T:9},{no:2,name:"type",kind:"enum",T:L.getEnumType(U)},{no:3,name:"name",kind:"scalar",T:9},{no:4,name:"muted",kind:"scalar",T:8},{no:5,name:"width",kind:"scalar",T:13},{no:6,name:"height",kind:"scalar",T:13},{no:7,name:"simulcast",kind:"scalar",T:8},{no:8,name:"disable_dtx",kind:"scalar",T:8},{no:9,name:"source",kind:"enum",T:L.getEnumType(O)},{no:10,name:"layers",kind:"message",T:VideoLayer,repeated:!0},{no:11,name:"mime_type",kind:"scalar",T:9},{no:12,name:"mid",kind:"scalar",T:9},{no:13,name:"codecs",kind:"message",T:SimulcastCodecInfo,repeated:!0},{no:14,name:"stereo",kind:"scalar",T:8},{no:15,name:"disable_red",kind:"scalar",T:8},{no:16,name:"encryption",kind:"enum",T:L.getEnumType(W)},{no:17,name:"stream",kind:"scalar",T:9}]));class VideoLayer extends Message{constructor(e){super(),this.quality=N.LOW,this.width=0,this.height=0,this.bitrate=0,this.ssrc=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new VideoLayer).fromBinary(e,t)}static fromJson(e,t){return(new VideoLayer).fromJson(e,t)}static fromJsonString(e,t){return(new VideoLayer).fromJsonString(e,t)}static equals(e,t){return L.util.equals(VideoLayer,e,t)}}VideoLayer.runtime=L,VideoLayer.typeName="livekit.VideoLayer",VideoLayer.fields=L.util.newFieldList((()=>[{no:1,name:"quality",kind:"enum",T:L.getEnumType(N)},{no:2,name:"width",kind:"scalar",T:13},{no:3,name:"height",kind:"scalar",T:13},{no:4,name:"bitrate",kind:"scalar",T:13},{no:5,name:"ssrc",kind:"scalar",T:13}]));class DataPacket extends Message{constructor(e){super(),this.kind=K.RELIABLE,this.value={case:void 0},L.util.initPartial(e,this)}static fromBinary(e,t){return(new DataPacket).fromBinary(e,t)}static fromJson(e,t){return(new DataPacket).fromJson(e,t)}static fromJsonString(e,t){return(new DataPacket).fromJsonString(e,t)}static equals(e,t){return L.util.equals(DataPacket,e,t)}}DataPacket.runtime=L,DataPacket.typeName="livekit.DataPacket",DataPacket.fields=L.util.newFieldList((()=>[{no:1,name:"kind",kind:"enum",T:L.getEnumType(K)},{no:2,name:"user",kind:"message",T:UserPacket,oneof:"value"},{no:3,name:"speaker",kind:"message",T:ActiveSpeakerUpdate,oneof:"value"}])),function(e){e[e.RELIABLE=0]="RELIABLE",e[e.LOSSY=1]="LOSSY"}(K||(K={})),L.util.setEnumType(K,"livekit.DataPacket.Kind",[{no:0,name:"RELIABLE"},{no:1,name:"LOSSY"}]);class ActiveSpeakerUpdate extends Message{constructor(e){super(),this.speakers=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new ActiveSpeakerUpdate).fromBinary(e,t)}static fromJson(e,t){return(new ActiveSpeakerUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new ActiveSpeakerUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ActiveSpeakerUpdate,e,t)}}ActiveSpeakerUpdate.runtime=L,ActiveSpeakerUpdate.typeName="livekit.ActiveSpeakerUpdate",ActiveSpeakerUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"speakers",kind:"message",T:SpeakerInfo,repeated:!0}]));class SpeakerInfo extends Message{constructor(e){super(),this.sid="",this.level=0,this.active=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new SpeakerInfo).fromBinary(e,t)}static fromJson(e,t){return(new SpeakerInfo).fromJson(e,t)}static fromJsonString(e,t){return(new SpeakerInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SpeakerInfo,e,t)}}SpeakerInfo.runtime=L,SpeakerInfo.typeName="livekit.SpeakerInfo",SpeakerInfo.fields=L.util.newFieldList((()=>[{no:1,name:"sid",kind:"scalar",T:9},{no:2,name:"level",kind:"scalar",T:2},{no:3,name:"active",kind:"scalar",T:8}]));class UserPacket extends Message{constructor(e){super(),this.participantSid="",this.payload=new Uint8Array(0),this.destinationSids=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new UserPacket).fromBinary(e,t)}static fromJson(e,t){return(new UserPacket).fromJson(e,t)}static fromJsonString(e,t){return(new UserPacket).fromJsonString(e,t)}static equals(e,t){return L.util.equals(UserPacket,e,t)}}UserPacket.runtime=L,UserPacket.typeName="livekit.UserPacket",UserPacket.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"payload",kind:"scalar",T:12},{no:3,name:"destination_sids",kind:"scalar",T:9,repeated:!0},{no:4,name:"topic",kind:"scalar",T:9,opt:!0}]));class ParticipantTracks extends Message{constructor(e){super(),this.participantSid="",this.trackSids=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new ParticipantTracks).fromBinary(e,t)}static fromJson(e,t){return(new ParticipantTracks).fromJson(e,t)}static fromJsonString(e,t){return(new ParticipantTracks).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ParticipantTracks,e,t)}}ParticipantTracks.runtime=L,ParticipantTracks.typeName="livekit.ParticipantTracks",ParticipantTracks.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"track_sids",kind:"scalar",T:9,repeated:!0}]));class ServerInfo extends Message{constructor(e){super(),this.edition=G.Standard,this.version="",this.protocol=0,this.region="",this.nodeId="",this.debugInfo="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new ServerInfo).fromBinary(e,t)}static fromJson(e,t){return(new ServerInfo).fromJson(e,t)}static fromJsonString(e,t){return(new ServerInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ServerInfo,e,t)}}ServerInfo.runtime=L,ServerInfo.typeName="livekit.ServerInfo",ServerInfo.fields=L.util.newFieldList((()=>[{no:1,name:"edition",kind:"enum",T:L.getEnumType(G)},{no:2,name:"version",kind:"scalar",T:9},{no:3,name:"protocol",kind:"scalar",T:5},{no:4,name:"region",kind:"scalar",T:9},{no:5,name:"node_id",kind:"scalar",T:9},{no:6,name:"debug_info",kind:"scalar",T:9}])),function(e){e[e.Standard=0]="Standard",e[e.Cloud=1]="Cloud"}(G||(G={})),L.util.setEnumType(G,"livekit.ServerInfo.Edition",[{no:0,name:"Standard"},{no:1,name:"Cloud"}]);class ClientInfo extends Message{constructor(e){super(),this.sdk=H.UNKNOWN,this.version="",this.protocol=0,this.os="",this.osVersion="",this.deviceModel="",this.browser="",this.browserVersion="",this.address="",this.network="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new ClientInfo).fromBinary(e,t)}static fromJson(e,t){return(new ClientInfo).fromJson(e,t)}static fromJsonString(e,t){return(new ClientInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ClientInfo,e,t)}}ClientInfo.runtime=L,ClientInfo.typeName="livekit.ClientInfo",ClientInfo.fields=L.util.newFieldList((()=>[{no:1,name:"sdk",kind:"enum",T:L.getEnumType(H)},{no:2,name:"version",kind:"scalar",T:9},{no:3,name:"protocol",kind:"scalar",T:5},{no:4,name:"os",kind:"scalar",T:9},{no:5,name:"os_version",kind:"scalar",T:9},{no:6,name:"device_model",kind:"scalar",T:9},{no:7,name:"browser",kind:"scalar",T:9},{no:8,name:"browser_version",kind:"scalar",T:9},{no:9,name:"address",kind:"scalar",T:9},{no:10,name:"network",kind:"scalar",T:9}])),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JS=1]="JS",e[e.SWIFT=2]="SWIFT",e[e.ANDROID=3]="ANDROID",e[e.FLUTTER=4]="FLUTTER",e[e.GO=5]="GO",e[e.UNITY=6]="UNITY",e[e.REACT_NATIVE=7]="REACT_NATIVE",e[e.RUST=8]="RUST"}(H||(H={})),L.util.setEnumType(H,"livekit.ClientInfo.SDK",[{no:0,name:"UNKNOWN"},{no:1,name:"JS"},{no:2,name:"SWIFT"},{no:3,name:"ANDROID"},{no:4,name:"FLUTTER"},{no:5,name:"GO"},{no:6,name:"UNITY"},{no:7,name:"REACT_NATIVE"},{no:8,name:"RUST"}]);class ClientConfiguration extends Message{constructor(e){super(),this.resumeConnection=F.UNSET,this.forceRelay=F.UNSET,L.util.initPartial(e,this)}static fromBinary(e,t){return(new ClientConfiguration).fromBinary(e,t)}static fromJson(e,t){return(new ClientConfiguration).fromJson(e,t)}static fromJsonString(e,t){return(new ClientConfiguration).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ClientConfiguration,e,t)}}ClientConfiguration.runtime=L,ClientConfiguration.typeName="livekit.ClientConfiguration",ClientConfiguration.fields=L.util.newFieldList((()=>[{no:1,name:"video",kind:"message",T:VideoConfiguration},{no:2,name:"screen",kind:"message",T:VideoConfiguration},{no:3,name:"resume_connection",kind:"enum",T:L.getEnumType(F)},{no:4,name:"disabled_codecs",kind:"message",T:DisabledCodecs},{no:5,name:"force_relay",kind:"enum",T:L.getEnumType(F)}]));class VideoConfiguration extends Message{constructor(e){super(),this.hardwareEncoder=F.UNSET,L.util.initPartial(e,this)}static fromBinary(e,t){return(new VideoConfiguration).fromBinary(e,t)}static fromJson(e,t){return(new VideoConfiguration).fromJson(e,t)}static fromJsonString(e,t){return(new VideoConfiguration).fromJsonString(e,t)}static equals(e,t){return L.util.equals(VideoConfiguration,e,t)}}VideoConfiguration.runtime=L,VideoConfiguration.typeName="livekit.VideoConfiguration",VideoConfiguration.fields=L.util.newFieldList((()=>[{no:1,name:"hardware_encoder",kind:"enum",T:L.getEnumType(F)}]));class DisabledCodecs extends Message{constructor(e){super(),this.codecs=[],this.publish=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new DisabledCodecs).fromBinary(e,t)}static fromJson(e,t){return(new DisabledCodecs).fromJson(e,t)}static fromJsonString(e,t){return(new DisabledCodecs).fromJsonString(e,t)}static equals(e,t){return L.util.equals(DisabledCodecs,e,t)}}DisabledCodecs.runtime=L,DisabledCodecs.typeName="livekit.DisabledCodecs",DisabledCodecs.fields=L.util.newFieldList((()=>[{no:1,name:"codecs",kind:"message",T:Codec,repeated:!0},{no:2,name:"publish",kind:"message",T:Codec,repeated:!0}]));class RTPStats extends Message{constructor(e){super(),this.duration=0,this.packets=0,this.packetRate=0,this.bytes=k.zero,this.headerBytes=k.zero,this.bitrate=0,this.packetsLost=0,this.packetLossRate=0,this.packetLossPercentage=0,this.packetsDuplicate=0,this.packetDuplicateRate=0,this.bytesDuplicate=k.zero,this.headerBytesDuplicate=k.zero,this.bitrateDuplicate=0,this.packetsPadding=0,this.packetPaddingRate=0,this.bytesPadding=k.zero,this.headerBytesPadding=k.zero,this.bitratePadding=0,this.packetsOutOfOrder=0,this.frames=0,this.frameRate=0,this.jitterCurrent=0,this.jitterMax=0,this.gapHistogram={},this.nacks=0,this.nackAcks=0,this.nackMisses=0,this.nackRepeated=0,this.plis=0,this.firs=0,this.rttCurrent=0,this.rttMax=0,this.keyFrames=0,this.layerLockPlis=0,this.sampleRate=0,this.driftMs=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new RTPStats).fromBinary(e,t)}static fromJson(e,t){return(new RTPStats).fromJson(e,t)}static fromJsonString(e,t){return(new RTPStats).fromJsonString(e,t)}static equals(e,t){return L.util.equals(RTPStats,e,t)}}RTPStats.runtime=L,RTPStats.typeName="livekit.RTPStats",RTPStats.fields=L.util.newFieldList((()=>[{no:1,name:"start_time",kind:"message",T:Timestamp},{no:2,name:"end_time",kind:"message",T:Timestamp},{no:3,name:"duration",kind:"scalar",T:1},{no:4,name:"packets",kind:"scalar",T:13},{no:5,name:"packet_rate",kind:"scalar",T:1},{no:6,name:"bytes",kind:"scalar",T:4},{no:39,name:"header_bytes",kind:"scalar",T:4},{no:7,name:"bitrate",kind:"scalar",T:1},{no:8,name:"packets_lost",kind:"scalar",T:13},{no:9,name:"packet_loss_rate",kind:"scalar",T:1},{no:10,name:"packet_loss_percentage",kind:"scalar",T:2},{no:11,name:"packets_duplicate",kind:"scalar",T:13},{no:12,name:"packet_duplicate_rate",kind:"scalar",T:1},{no:13,name:"bytes_duplicate",kind:"scalar",T:4},{no:40,name:"header_bytes_duplicate",kind:"scalar",T:4},{no:14,name:"bitrate_duplicate",kind:"scalar",T:1},{no:15,name:"packets_padding",kind:"scalar",T:13},{no:16,name:"packet_padding_rate",kind:"scalar",T:1},{no:17,name:"bytes_padding",kind:"scalar",T:4},{no:41,name:"header_bytes_padding",kind:"scalar",T:4},{no:18,name:"bitrate_padding",kind:"scalar",T:1},{no:19,name:"packets_out_of_order",kind:"scalar",T:13},{no:20,name:"frames",kind:"scalar",T:13},{no:21,name:"frame_rate",kind:"scalar",T:1},{no:22,name:"jitter_current",kind:"scalar",T:1},{no:23,name:"jitter_max",kind:"scalar",T:1},{no:24,name:"gap_histogram",kind:"map",K:5,V:{kind:"scalar",T:13}},{no:25,name:"nacks",kind:"scalar",T:13},{no:37,name:"nack_acks",kind:"scalar",T:13},{no:26,name:"nack_misses",kind:"scalar",T:13},{no:38,name:"nack_repeated",kind:"scalar",T:13},{no:27,name:"plis",kind:"scalar",T:13},{no:28,name:"last_pli",kind:"message",T:Timestamp},{no:29,name:"firs",kind:"scalar",T:13},{no:30,name:"last_fir",kind:"message",T:Timestamp},{no:31,name:"rtt_current",kind:"scalar",T:13},{no:32,name:"rtt_max",kind:"scalar",T:13},{no:33,name:"key_frames",kind:"scalar",T:13},{no:34,name:"last_key_frame",kind:"message",T:Timestamp},{no:35,name:"layer_lock_plis",kind:"scalar",T:13},{no:36,name:"last_layer_lock_pli",kind:"message",T:Timestamp},{no:42,name:"sample_rate",kind:"scalar",T:1},{no:43,name:"drift_ms",kind:"scalar",T:1}]));class TimedVersion extends Message{constructor(e){super(),this.unixMicro=k.zero,this.ticks=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new TimedVersion).fromBinary(e,t)}static fromJson(e,t){return(new TimedVersion).fromJson(e,t)}static fromJsonString(e,t){return(new TimedVersion).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TimedVersion,e,t)}}TimedVersion.runtime=L,TimedVersion.typeName="livekit.TimedVersion",TimedVersion.fields=L.util.newFieldList((()=>[{no:1,name:"unix_micro",kind:"scalar",T:3},{no:2,name:"ticks",kind:"scalar",T:5}]));const Q=7e3,z=[0,300,1200,2700,4800,Q,Q,Q,Q,Q];class DefaultReconnectPolicy{constructor(e){this._retryDelays=void 0!==e?[...e]:z}nextRetryDelayInMs(e){if(e.retryCount>=this._retryDelays.length)return null;const t=this._retryDelays[e.retryCount];return e.retryCount<=1?t:t+1e3*Math.random()}}function __awaiter(e,t,i,n){return new(i||(i=Promise))((function(s,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?s(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(i){t[i]=e[i]&&function(t){return new Promise((function(n,s){(function settle(e,t,i,n){Promise.resolve(n).then((function(t){e({value:t,done:i})}),t)})(n,s,(t=e[i](t)).done,t.value)}))}}}var $,Y={exports:{}},X="object"==typeof Reflect?Reflect:null,Z=X&&"function"==typeof X.apply?X.apply:function ReflectApply(e,t,i){return Function.prototype.apply.call(e,t,i)};$=X&&"function"==typeof X.ownKeys?X.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)};var ee=Number.isNaN||function NumberIsNaN(e){return e!=e};function EventEmitter(){EventEmitter.init.call(this)}Y.exports=EventEmitter,Y.exports.once=function once(e,t){return new Promise((function(i,n){function errorListener(i){e.removeListener(t,resolver),n(i)}function resolver(){"function"==typeof e.removeListener&&e.removeListener("error",errorListener),i([].slice.call(arguments))}eventTargetAgnosticAddListener(e,t,resolver,{once:!0}),"error"!==t&&function addErrorHandlerIfEventEmitter(e,t,i){"function"==typeof e.on&&eventTargetAgnosticAddListener(e,"error",t,i)}(e,errorListener,{once:!0})}))},EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var te=10;function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,i,n){var s,a,o;if(checkListener(i),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),a=e._events),o=a[t]),void 0===o)o=a[t]=i,++e._eventsCount;else if("function"==typeof o?o=a[t]=n?[i,o]:[o,i]:n?o.unshift(i):o.push(i),(s=_getMaxListeners(e))>0&&o.length>s&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,function ProcessEmitWarning(e){console&&console.warn&&console.warn(e)}(c)}return e}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(e,t,i){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},s=onceWrapper.bind(n);return s.listener=i,n.wrapFn=s,s}function _listeners(e,t,i){var n=e._events;if(void 0===n)return[];var s=n[t];return void 0===s?[]:"function"==typeof s?i?[s.listener||s]:[s]:i?function unwrapListeners(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(s):arrayClone(s,s.length)}function listenerCount(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function arrayClone(e,t){for(var i=new Array(t),n=0;n<t;++n)i[n]=e[n];return i}function eventTargetAgnosticAddListener(e,t,i,n){if("function"==typeof e.on)n.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function wrapListener(s){n.once&&e.removeEventListener(t,wrapListener),i(s)}))}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return te},set:function(e){if("number"!=typeof e||e<0||ee(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");te=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||ee(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n="error"===e,s=this._events;if(void 0!==s)n=n&&void 0===s.error;else if(!n)return!1;if(n){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var c=s[e];if(void 0===c)return!1;if("function"==typeof c)Z(c,this,t);else{var u=c.length,l=arrayClone(c,u);for(i=0;i<u;++i)Z(l[i],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var i,n,s,a,o;if(checkListener(t),void 0===(n=this._events))return this;if(void 0===(i=n[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(s=-1,a=i.length-1;a>=0;a--)if(i[a]===t||i[a].listener===t){o=i[a].listener,s=a;break}if(s<0)return this;0===s?i.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,s),1===i.length&&(n[e]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0===arguments.length){var s,a=Object.keys(i);for(n=0;n<a.length;++n)"removeListener"!==(s=a[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?$(this._events):[]};var ie=Y.exports;let ne=!0,re=!0;function extractVersion(e,t,i){const n=e.match(t);return n&&n.length>=i&&parseInt(n[i],10)}function wrapPeerConnectionEvent(e,t,i){if(!e.RTCPeerConnection)return;const n=e.RTCPeerConnection.prototype,s=n.addEventListener;n.addEventListener=function(e,n){if(e!==t)return s.apply(this,arguments);const wrappedCallback=e=>{const t=i(e);t&&(n.handleEvent?n.handleEvent(t):n(t))};return this._eventMap=this._eventMap||{},this._eventMap[t]||(this._eventMap[t]=new Map),this._eventMap[t].set(n,wrappedCallback),s.apply(this,[e,wrappedCallback])};const a=n.removeEventListener;n.removeEventListener=function(e,i){if(e!==t||!this._eventMap||!this._eventMap[t])return a.apply(this,arguments);if(!this._eventMap[t].has(i))return a.apply(this,arguments);const n=this._eventMap[t].get(i);return this._eventMap[t].delete(i),0===this._eventMap[t].size&&delete this._eventMap[t],0===Object.keys(this._eventMap).length&&delete this._eventMap,a.apply(this,[e,n])},Object.defineProperty(n,"on"+t,{get(){return this["_on"+t]},set(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}function disableLog(e){return"boolean"!=typeof e?new Error("Argument type: "+typeof e+". Please use a boolean."):(ne=e,e?"adapter.js logging disabled":"adapter.js logging enabled")}function disableWarnings(e){return"boolean"!=typeof e?new Error("Argument type: "+typeof e+". Please use a boolean."):(re=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))}function log(){if("object"==typeof window){if(ne)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}}function deprecated(e,t){re&&console.warn(e+" is deprecated, please use "+t+" instead.")}function detectBrowser(e){const t={browser:null,version:null};if(void 0===e||!e.navigator||!e.navigator.userAgent)return t.browser="Not a browser.",t;const{navigator:i}=e;if(i.mozGetUserMedia)t.browser="firefox",t.version=extractVersion(i.userAgent,/Firefox\/(\d+)\./,1);else if(i.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection)t.browser="chrome",t.version=extractVersion(i.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else{if(!e.RTCPeerConnection||!i.userAgent.match(/AppleWebKit\/(\d+)\./))return t.browser="Not a supported browser.",t;t.browser="safari",t.version=extractVersion(i.userAgent,/AppleWebKit\/(\d+)\./,1),t.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return t}function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function compactObject(e){return isObject(e)?Object.keys(e).reduce((function(t,i){const n=isObject(e[i]),s=n?compactObject(e[i]):e[i],a=n&&!Object.keys(s).length;return void 0===s||a?t:Object.assign(t,{[i]:s})}),{}):e}function walkStats(e,t,i){t&&!i.has(t.id)&&(i.set(t.id,t),Object.keys(t).forEach((n=>{n.endsWith("Id")?walkStats(e,e.get(t[n]),i):n.endsWith("Ids")&&t[n].forEach((t=>{walkStats(e,e.get(t),i)}))})))}function filterStats(e,t,i){const n=i?"outbound-rtp":"inbound-rtp",s=new Map;if(null===t)return s;const a=[];return e.forEach((e=>{"track"===e.type&&e.trackIdentifier===t.id&&a.push(e)})),a.forEach((t=>{e.forEach((i=>{i.type===n&&i.trackId===t.id&&walkStats(e,i,s)}))})),s}const se=log;function shimGetUserMedia$2(e,t){const i=e&&e.navigator;if(!i.mediaDevices)return;const constraintsToChrome_=function(e){if("object"!=typeof e||e.mandatory||e.optional)return e;const t={};return Object.keys(e).forEach((i=>{if("require"===i||"advanced"===i||"mediaSource"===i)return;const n="object"==typeof e[i]?e[i]:{ideal:e[i]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);const oldname_=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==n.ideal){t.optional=t.optional||[];let e={};"number"==typeof n.ideal?(e[oldname_("min",i)]=n.ideal,t.optional.push(e),e={},e[oldname_("max",i)]=n.ideal,t.optional.push(e)):(e[oldname_("",i)]=n.ideal,t.optional.push(e))}void 0!==n.exact&&"number"!=typeof n.exact?(t.mandatory=t.mandatory||{},t.mandatory[oldname_("",i)]=n.exact):["min","max"].forEach((e=>{void 0!==n[e]&&(t.mandatory=t.mandatory||{},t.mandatory[oldname_(e,i)]=n[e])}))})),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},shimConstraints_=function(e,n){if(t.version>=61)return n(e);if((e=JSON.parse(JSON.stringify(e)))&&"object"==typeof e.audio){const remap=function(e,t,i){t in e&&!(i in e)&&(e[i]=e[t],delete e[t])};remap((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),remap(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=constraintsToChrome_(e.audio)}if(e&&"object"==typeof e.video){let s=e.video.facingMode;s=s&&("object"==typeof s?s:{ideal:s});const a=t.version<66;if(s&&("user"===s.exact||"environment"===s.exact||"user"===s.ideal||"environment"===s.ideal)&&(!i.mediaDevices.getSupportedConstraints||!i.mediaDevices.getSupportedConstraints().facingMode||a)){let t;if(delete e.video.facingMode,"environment"===s.exact||"environment"===s.ideal?t=["back","rear"]:"user"!==s.exact&&"user"!==s.ideal||(t=["front"]),t)return i.mediaDevices.enumerateDevices().then((i=>{let a=(i=i.filter((e=>"videoinput"===e.kind))).find((e=>t.some((t=>e.label.toLowerCase().includes(t)))));return!a&&i.length&&t.includes("back")&&(a=i[i.length-1]),a&&(e.video.deviceId=s.exact?{exact:a.deviceId}:{ideal:a.deviceId}),e.video=constraintsToChrome_(e.video),se("chrome: "+JSON.stringify(e)),n(e)}))}e.video=constraintsToChrome_(e.video)}return se("chrome: "+JSON.stringify(e)),n(e)},shimError_=function(e){return t.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}};if(i.getUserMedia=function(e,t,n){shimConstraints_(e,(e=>{i.webkitGetUserMedia(e,t,(e=>{n&&n(shimError_(e))}))}))}.bind(i),i.mediaDevices.getUserMedia){const e=i.mediaDevices.getUserMedia.bind(i.mediaDevices);i.mediaDevices.getUserMedia=function(t){return shimConstraints_(t,(t=>e(t).then((e=>{if(t.audio&&!e.getAudioTracks().length||t.video&&!e.getVideoTracks().length)throw e.getTracks().forEach((e=>{e.stop()})),new DOMException("","NotFoundError");return e}),(e=>Promise.reject(shimError_(e))))))}}}function shimMediaStream(e){e.MediaStream=e.MediaStream||e.webkitMediaStream}function shimOnTrack$1(e){if("object"==typeof e&&e.RTCPeerConnection&&!("ontrack"in e.RTCPeerConnection.prototype)){Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});const t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function setRemoteDescription(){return this._ontrackpoly||(this._ontrackpoly=t=>{t.stream.addEventListener("addtrack",(i=>{let n;n=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find((e=>e.track&&e.track.id===i.track.id)):{track:i.track};const s=new Event("track");s.track=i.track,s.receiver=n,s.transceiver={receiver:n},s.streams=[t.stream],this.dispatchEvent(s)})),t.stream.getTracks().forEach((i=>{let n;n=e.RTCPeerConnection.prototype.getReceivers?this.getReceivers().find((e=>e.track&&e.track.id===i.id)):{track:i};const s=new Event("track");s.track=i,s.receiver=n,s.transceiver={receiver:n},s.streams=[t.stream],this.dispatchEvent(s)}))},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else wrapPeerConnectionEvent(e,"track",(e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e)))}function shimGetSendersWithDtmf(e){if("object"==typeof e&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){const shimSenderWithDtmf=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}};if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function getSenders(){return this._senders=this._senders||[],this._senders.slice()};const t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function addTrack(e,i){let n=t.apply(this,arguments);return n||(n=shimSenderWithDtmf(this,e),this._senders.push(n)),n};const i=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function removeTrack(e){i.apply(this,arguments);const t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}const t=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function addStream(e){this._senders=this._senders||[],t.apply(this,[e]),e.getTracks().forEach((e=>{this._senders.push(shimSenderWithDtmf(this,e))}))};const i=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function removeStream(e){this._senders=this._senders||[],i.apply(this,[e]),e.getTracks().forEach((e=>{const t=this._senders.find((t=>t.track===e));t&&this._senders.splice(this._senders.indexOf(t),1)}))}}else if("object"==typeof e&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){const t=e.RTCPeerConnection.prototype.getSenders;e.RTCPeerConnection.prototype.getSenders=function getSenders(){const e=t.apply(this,[]);return e.forEach((e=>e._pc=this)),e},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function shimGetStats(e){if(!e.RTCPeerConnection)return;const t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function getStats(){const[e,i,n]=arguments;if(arguments.length>0&&"function"==typeof e)return t.apply(this,arguments);if(0===t.length&&(0===arguments.length||"function"!=typeof e))return t.apply(this,[]);const fixChromeStats_=function(e){const t={};return e.result().forEach((e=>{const i={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type};e.names().forEach((t=>{i[t]=e.stat(t)})),t[i.id]=i})),t},makeMapStats=function(e){return new Map(Object.keys(e).map((t=>[t,e[t]])))};if(arguments.length>=2){const successCallbackWrapper_=function(e){i(makeMapStats(fixChromeStats_(e)))};return t.apply(this,[successCallbackWrapper_,e])}return new Promise(((e,i)=>{t.apply(this,[function(t){e(makeMapStats(fixChromeStats_(t)))},i])})).then(i,n)}}function shimSenderReceiverGetStats(e){if(!("object"==typeof e&&e.RTCPeerConnection&&e.RTCRtpSender&&e.RTCRtpReceiver))return;if(!("getStats"in e.RTCRtpSender.prototype)){const t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function getSenders(){const e=t.apply(this,[]);return e.forEach((e=>e._pc=this)),e});const i=e.RTCPeerConnection.prototype.addTrack;i&&(e.RTCPeerConnection.prototype.addTrack=function addTrack(){const e=i.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function getStats(){const e=this;return this._pc.getStats().then((t=>filterStats(t,e.track,!0)))}}if(!("getStats"in e.RTCRtpReceiver.prototype)){const t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function getReceivers(){const e=t.apply(this,[]);return e.forEach((e=>e._pc=this)),e}),wrapPeerConnectionEvent(e,"track",(e=>(e.receiver._pc=e.srcElement,e))),e.RTCRtpReceiver.prototype.getStats=function getStats(){const e=this;return this._pc.getStats().then((t=>filterStats(t,e.track,!1)))}}if(!("getStats"in e.RTCRtpSender.prototype)||!("getStats"in e.RTCRtpReceiver.prototype))return;const t=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function getStats(){if(arguments.length>0&&arguments[0]instanceof e.MediaStreamTrack){const e=arguments[0];let t,i,n;return this.getSenders().forEach((i=>{i.track===e&&(t?n=!0:t=i)})),this.getReceivers().forEach((t=>(t.track===e&&(i?n=!0:i=t),t.track===e))),n||t&&i?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):t?t.getStats():i?i.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function shimAddTrackRemoveTrackWithNative(e){e.RTCPeerConnection.prototype.getLocalStreams=function getLocalStreams(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map((e=>this._shimmedLocalStreams[e][0]))};const t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addTrack=function addTrack(e,i){if(!i)return t.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const n=t.apply(this,arguments);return this._shimmedLocalStreams[i.id]?-1===this._shimmedLocalStreams[i.id].indexOf(n)&&this._shimmedLocalStreams[i.id].push(n):this._shimmedLocalStreams[i.id]=[i,n],n};const i=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function addStream(e){this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach((e=>{if(this.getSenders().find((t=>t.track===e)))throw new DOMException("Track already exists.","InvalidAccessError")}));const t=this.getSenders();i.apply(this,arguments);const n=this.getSenders().filter((e=>-1===t.indexOf(e)));this._shimmedLocalStreams[e.id]=[e].concat(n)};const n=e.RTCPeerConnection.prototype.removeStream;e.RTCPeerConnection.prototype.removeStream=function removeStream(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],n.apply(this,arguments)};const s=e.RTCPeerConnection.prototype.removeTrack;e.RTCPeerConnection.prototype.removeTrack=function removeTrack(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach((t=>{const i=this._shimmedLocalStreams[t].indexOf(e);-1!==i&&this._shimmedLocalStreams[t].splice(i,1),1===this._shimmedLocalStreams[t].length&&delete this._shimmedLocalStreams[t]})),s.apply(this,arguments)}}function shimAddTrackRemoveTrack(e,t){if(!e.RTCPeerConnection)return;if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return shimAddTrackRemoveTrackWithNative(e);const i=e.RTCPeerConnection.prototype.getLocalStreams;e.RTCPeerConnection.prototype.getLocalStreams=function getLocalStreams(){const e=i.apply(this);return this._reverseStreams=this._reverseStreams||{},e.map((e=>this._reverseStreams[e.id]))};const n=e.RTCPeerConnection.prototype.addStream;e.RTCPeerConnection.prototype.addStream=function addStream(t){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},t.getTracks().forEach((e=>{if(this.getSenders().find((t=>t.track===e)))throw new DOMException("Track already exists.","InvalidAccessError")})),!this._reverseStreams[t.id]){const i=new e.MediaStream(t.getTracks());this._streams[t.id]=i,this._reverseStreams[i.id]=t,t=i}n.apply(this,[t])};const s=e.RTCPeerConnection.prototype.removeStream;function replaceInternalStreamId(e,t){let i=t.sdp;return Object.keys(e._reverseStreams||[]).forEach((t=>{const n=e._reverseStreams[t],s=e._streams[n.id];i=i.replace(new RegExp(s.id,"g"),n.id)})),new RTCSessionDescription({type:t.type,sdp:i})}function replaceExternalStreamId(e,t){let i=t.sdp;return Object.keys(e._reverseStreams||[]).forEach((t=>{const n=e._reverseStreams[t],s=e._streams[n.id];i=i.replace(new RegExp(n.id,"g"),s.id)})),new RTCSessionDescription({type:t.type,sdp:i})}e.RTCPeerConnection.prototype.removeStream=function removeStream(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function addTrack(t,i){if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const n=[].slice.call(arguments,1);if(1!==n.length||!n[0].getTracks().find((e=>e===t)))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");const s=this.getSenders().find((e=>e.track===t));if(s)throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const a=this._streams[i.id];if(a)a.addTrack(t),Promise.resolve().then((()=>{this.dispatchEvent(new Event("negotiationneeded"))}));else{const n=new e.MediaStream([t]);this._streams[i.id]=n,this._reverseStreams[n.id]=i,this.addStream(n)}return this.getSenders().find((e=>e.track===t))},["createOffer","createAnswer"].forEach((function(t){const i=e.RTCPeerConnection.prototype[t],n={[t](){const e=arguments;return arguments.length&&"function"==typeof arguments[0]?i.apply(this,[t=>{const i=replaceInternalStreamId(this,t);e[0].apply(null,[i])},t=>{e[1]&&e[1].apply(null,t)},arguments[2]]):i.apply(this,arguments).then((e=>replaceInternalStreamId(this,e)))}};e.RTCPeerConnection.prototype[t]=n[t]}));const a=e.RTCPeerConnection.prototype.setLocalDescription;e.RTCPeerConnection.prototype.setLocalDescription=function setLocalDescription(){return arguments.length&&arguments[0].type?(arguments[0]=replaceExternalStreamId(this,arguments[0]),a.apply(this,arguments)):a.apply(this,arguments)};const o=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get(){const e=o.get.apply(this);return""===e.type?e:replaceInternalStreamId(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function removeTrack(e){if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(e._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");let t;this._streams=this._streams||{},Object.keys(this._streams).forEach((i=>{this._streams[i].getTracks().find((t=>e.track===t))&&(t=this._streams[i])})),t&&(1===t.getTracks().length?this.removeStream(this._reverseStreams[t.id]):t.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function shimPeerConnection$1(e,t){!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=e.webkitRTCPeerConnection),e.RTCPeerConnection&&t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach((function(t){const i=e.RTCPeerConnection.prototype[t],n={[t](){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=n[t]}))}function fixNegotiationNeeded(e,t){wrapPeerConnectionEvent(e,"negotiationneeded",(e=>{const i=e.target;if(!(t.version<72||i.getConfiguration&&"plan-b"===i.getConfiguration().sdpSemantics)||"stable"===i.signalingState)return e}))}var ae=Object.freeze({__proto__:null,fixNegotiationNeeded,shimAddTrackRemoveTrack,shimAddTrackRemoveTrackWithNative,shimGetDisplayMedia:function shimGetDisplayMedia$1(e,t){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof t?e.navigator.mediaDevices.getDisplayMedia=function getDisplayMedia(i){return t(i).then((t=>{const n=i.video&&i.video.width,s=i.video&&i.video.height,a=i.video&&i.video.frameRate;return i.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:t,maxFrameRate:a||3}},n&&(i.video.mandatory.maxWidth=n),s&&(i.video.mandatory.maxHeight=s),e.navigator.mediaDevices.getUserMedia(i)}))}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))},shimGetSendersWithDtmf,shimGetStats,shimGetUserMedia:shimGetUserMedia$2,shimMediaStream,shimOnTrack:shimOnTrack$1,shimPeerConnection:shimPeerConnection$1,shimSenderReceiverGetStats});function shimGetUserMedia$1(e,t){const i=e&&e.navigator,n=e&&e.MediaStreamTrack;if(i.getUserMedia=function(e,t,n){deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),i.mediaDevices.getUserMedia(e).then(t,n)},!(t.version>55&&"autoGainControl"in i.mediaDevices.getSupportedConstraints())){const remap=function(e,t,i){t in e&&!(i in e)&&(e[i]=e[t],delete e[t])},e=i.mediaDevices.getUserMedia.bind(i.mediaDevices);if(i.mediaDevices.getUserMedia=function(t){return"object"==typeof t&&"object"==typeof t.audio&&(t=JSON.parse(JSON.stringify(t)),remap(t.audio,"autoGainControl","mozAutoGainControl"),remap(t.audio,"noiseSuppression","mozNoiseSuppression")),e(t)},n&&n.prototype.getSettings){const e=n.prototype.getSettings;n.prototype.getSettings=function(){const t=e.apply(this,arguments);return remap(t,"mozAutoGainControl","autoGainControl"),remap(t,"mozNoiseSuppression","noiseSuppression"),t}}if(n&&n.prototype.applyConstraints){const e=n.prototype.applyConstraints;n.prototype.applyConstraints=function(t){return"audio"===this.kind&&"object"==typeof t&&(t=JSON.parse(JSON.stringify(t)),remap(t,"autoGainControl","mozAutoGainControl"),remap(t,"noiseSuppression","mozNoiseSuppression")),e.apply(this,[t])}}}}function shimOnTrack(e){"object"==typeof e&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function shimPeerConnection(e,t){if("object"!=typeof e||!e.RTCPeerConnection&&!e.mozRTCPeerConnection)return;!e.RTCPeerConnection&&e.mozRTCPeerConnection&&(e.RTCPeerConnection=e.mozRTCPeerConnection),t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach((function(t){const i=e.RTCPeerConnection.prototype[t],n={[t](){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};e.RTCPeerConnection.prototype[t]=n[t]}));const i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=e.RTCPeerConnection.prototype.getStats;e.RTCPeerConnection.prototype.getStats=function getStats(){const[e,s,a]=arguments;return n.apply(this,[e||null]).then((e=>{if(t.version<53&&!s)try{e.forEach((e=>{e.type=i[e.type]||e.type}))}catch(t){if("TypeError"!==t.name)throw t;e.forEach(((t,n)=>{e.set(n,Object.assign({},t,{type:i[t.type]||t.type}))}))}return e})).then(s,a)}}function shimSenderGetStats(e){if("object"!=typeof e||!e.RTCPeerConnection||!e.RTCRtpSender)return;if(e.RTCRtpSender&&"getStats"in e.RTCRtpSender.prototype)return;const t=e.RTCPeerConnection.prototype.getSenders;t&&(e.RTCPeerConnection.prototype.getSenders=function getSenders(){const e=t.apply(this,[]);return e.forEach((e=>e._pc=this)),e});const i=e.RTCPeerConnection.prototype.addTrack;i&&(e.RTCPeerConnection.prototype.addTrack=function addTrack(){const e=i.apply(this,arguments);return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function getStats(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function shimReceiverGetStats(e){if("object"!=typeof e||!e.RTCPeerConnection||!e.RTCRtpSender)return;if(e.RTCRtpSender&&"getStats"in e.RTCRtpReceiver.prototype)return;const t=e.RTCPeerConnection.prototype.getReceivers;t&&(e.RTCPeerConnection.prototype.getReceivers=function getReceivers(){const e=t.apply(this,[]);return e.forEach((e=>e._pc=this)),e}),wrapPeerConnectionEvent(e,"track",(e=>(e.receiver._pc=e.srcElement,e))),e.RTCRtpReceiver.prototype.getStats=function getStats(){return this._pc.getStats(this.track)}}function shimRemoveStream(e){e.RTCPeerConnection&&!("removeStream"in e.RTCPeerConnection.prototype)&&(e.RTCPeerConnection.prototype.removeStream=function removeStream(e){deprecated("removeStream","removeTrack"),this.getSenders().forEach((t=>{t.track&&e.getTracks().includes(t.track)&&this.removeTrack(t)}))})}function shimRTCDataChannel(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)}function shimAddTransceiver(e){if("object"!=typeof e||!e.RTCPeerConnection)return;const t=e.RTCPeerConnection.prototype.addTransceiver;t&&(e.RTCPeerConnection.prototype.addTransceiver=function addTransceiver(){this.setParametersPromises=[];let e=arguments[1]&&arguments[1].sendEncodings;void 0===e&&(e=[]),e=[...e];const i=e.length>0;i&&e.forEach((e=>{if("rid"in e){if(!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")}if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")}));const n=t.apply(this,arguments);if(i){const{sender:t}=n,i=t.getParameters();(!("encodings"in i)||1===i.encodings.length&&0===Object.keys(i.encodings[0]).length)&&(i.encodings=e,t.sendEncodings=e,this.setParametersPromises.push(t.setParameters(i).then((()=>{delete t.sendEncodings})).catch((()=>{delete t.sendEncodings}))))}return n})}function shimGetParameters(e){if("object"!=typeof e||!e.RTCRtpSender)return;const t=e.RTCRtpSender.prototype.getParameters;t&&(e.RTCRtpSender.prototype.getParameters=function getParameters(){const e=t.apply(this,arguments);return"encodings"in e||(e.encodings=[].concat(this.sendEncodings||[{}])),e})}function shimCreateOffer(e){if("object"!=typeof e||!e.RTCPeerConnection)return;const t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function createOffer(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then((()=>t.apply(this,arguments))).finally((()=>{this.setParametersPromises=[]})):t.apply(this,arguments)}}function shimCreateAnswer(e){if("object"!=typeof e||!e.RTCPeerConnection)return;const t=e.RTCPeerConnection.prototype.createAnswer;e.RTCPeerConnection.prototype.createAnswer=function createAnswer(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then((()=>t.apply(this,arguments))).finally((()=>{this.setParametersPromises=[]})):t.apply(this,arguments)}}var oe=Object.freeze({__proto__:null,shimAddTransceiver,shimCreateAnswer,shimCreateOffer,shimGetDisplayMedia:function shimGetDisplayMedia(e,t){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function getDisplayMedia(i){if(!i||!i.video){const e=new DOMException("getDisplayMedia without video constraints is undefined");return e.name="NotFoundError",e.code=8,Promise.reject(e)}return!0===i.video?i.video={mediaSource:t}:i.video.mediaSource=t,e.navigator.mediaDevices.getUserMedia(i)})},shimGetParameters,shimGetUserMedia:shimGetUserMedia$1,shimOnTrack,shimPeerConnection,shimRTCDataChannel,shimReceiverGetStats,shimRemoveStream,shimSenderGetStats});function shimLocalStreamsAPI(e){if("object"==typeof e&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function getLocalStreams(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){const t=e.RTCPeerConnection.prototype.addTrack;e.RTCPeerConnection.prototype.addStream=function addStream(e){this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach((i=>t.call(this,i,e))),e.getVideoTracks().forEach((i=>t.call(this,i,e)))},e.RTCPeerConnection.prototype.addTrack=function addTrack(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return n&&n.forEach((e=>{this._localStreams?this._localStreams.includes(e)||this._localStreams.push(e):this._localStreams=[e]})),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function removeStream(e){this._localStreams||(this._localStreams=[]);const t=this._localStreams.indexOf(e);if(-1===t)return;this._localStreams.splice(t,1);const i=e.getTracks();this.getSenders().forEach((e=>{i.includes(e.track)&&this.removeTrack(e)}))})}}function shimRemoteStreamsAPI(e){if("object"==typeof e&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function getRemoteStreams(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=e=>{e.streams.forEach((e=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(e))return;this._remoteStreams.push(e);const t=new Event("addstream");t.stream=e,this.dispatchEvent(t)}))})}});const t=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function setRemoteDescription(){const e=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach((t=>{if(e._remoteStreams||(e._remoteStreams=[]),e._remoteStreams.indexOf(t)>=0)return;e._remoteStreams.push(t);const i=new Event("addstream");i.stream=t,e.dispatchEvent(i)}))}),t.apply(e,arguments)}}}function shimCallbacksAPI(e){if("object"!=typeof e||!e.RTCPeerConnection)return;const t=e.RTCPeerConnection.prototype,i=t.createOffer,n=t.createAnswer,s=t.setLocalDescription,a=t.setRemoteDescription,o=t.addIceCandidate;t.createOffer=function createOffer(e,t){const n=arguments.length>=2?arguments[2]:arguments[0],s=i.apply(this,[n]);return t?(s.then(e,t),Promise.resolve()):s},t.createAnswer=function createAnswer(e,t){const i=arguments.length>=2?arguments[2]:arguments[0],s=n.apply(this,[i]);return t?(s.then(e,t),Promise.resolve()):s};let withCallback=function(e,t,i){const n=s.apply(this,[e]);return i?(n.then(t,i),Promise.resolve()):n};t.setLocalDescription=withCallback,withCallback=function(e,t,i){const n=a.apply(this,[e]);return i?(n.then(t,i),Promise.resolve()):n},t.setRemoteDescription=withCallback,withCallback=function(e,t,i){const n=o.apply(this,[e]);return i?(n.then(t,i),Promise.resolve()):n},t.addIceCandidate=withCallback}function shimGetUserMedia(e){const t=e&&e.navigator;if(t.mediaDevices&&t.mediaDevices.getUserMedia){const e=t.mediaDevices,i=e.getUserMedia.bind(e);t.mediaDevices.getUserMedia=e=>i(shimConstraints(e))}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function getUserMedia(e,i,n){t.mediaDevices.getUserMedia(e).then(i,n)}.bind(t))}function shimConstraints(e){return e&&void 0!==e.video?Object.assign({},e,{video:compactObject(e.video)}):e}function shimRTCIceServerUrls(e){if(!e.RTCPeerConnection)return;const t=e.RTCPeerConnection;e.RTCPeerConnection=function RTCPeerConnection(e,i){if(e&&e.iceServers){const t=[];for(let i=0;i<e.iceServers.length;i++){let n=e.iceServers[i];void 0===n.urls&&n.url?(deprecated("RTCIceServer.url","RTCIceServer.urls"),n=JSON.parse(JSON.stringify(n)),n.urls=n.url,delete n.url,t.push(n)):t.push(e.iceServers[i])}e.iceServers=t}return new t(e,i)},e.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in t&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:()=>t.generateCertificate})}function shimTrackEventTransceiver(e){"object"==typeof e&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function shimCreateOfferLegacy(e){const t=e.RTCPeerConnection.prototype.createOffer;e.RTCPeerConnection.prototype.createOffer=function createOffer(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio);const t=this.getTransceivers().find((e=>"audio"===e.receiver.track.kind));!1===e.offerToReceiveAudio&&t?"sendrecv"===t.direction?t.setDirection?t.setDirection("sendonly"):t.direction="sendonly":"recvonly"===t.direction&&(t.setDirection?t.setDirection("inactive"):t.direction="inactive"):!0!==e.offerToReceiveAudio||t||this.addTransceiver("audio",{direction:"recvonly"}),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo);const i=this.getTransceivers().find((e=>"video"===e.receiver.track.kind));!1===e.offerToReceiveVideo&&i?"sendrecv"===i.direction?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":"recvonly"===i.direction&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):!0!==e.offerToReceiveVideo||i||this.addTransceiver("video",{direction:"recvonly"})}return t.apply(this,arguments)}}function shimAudioContext(e){"object"!=typeof e||e.AudioContext||(e.AudioContext=e.webkitAudioContext)}var ce=Object.freeze({__proto__:null,shimAudioContext,shimCallbacksAPI,shimConstraints,shimCreateOfferLegacy,shimGetUserMedia,shimLocalStreamsAPI,shimRTCIceServerUrls,shimRemoteStreamsAPI,shimTrackEventTransceiver}),de={exports:{}};!function(e){const t={generateIdentifier:function(){return Math.random().toString(36).substring(2,12)}};t.localCName=t.generateIdentifier(),t.splitLines=function(e){return e.trim().split("\n").map((e=>e.trim()))},t.splitSections=function(e){return e.split("\nm=").map(((e,t)=>(t>0?"m="+e:e).trim()+"\r\n"))},t.getDescription=function(e){const i=t.splitSections(e);return i&&i[0]},t.getMediaSections=function(e){const i=t.splitSections(e);return i.shift(),i},t.matchPrefix=function(e,i){return t.splitLines(e).filter((e=>0===e.indexOf(i)))},t.parseCandidate=function(e){let t;t=0===e.indexOf("a=candidate:")?e.substring(12).split(" "):e.substring(10).split(" ");const i={foundation:t[0],component:{1:"rtp",2:"rtcp"}[t[1]]||t[1],protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],address:t[4],port:parseInt(t[5],10),type:t[7]};for(let e=8;e<t.length;e+=2)switch(t[e]){case"raddr":i.relatedAddress=t[e+1];break;case"rport":i.relatedPort=parseInt(t[e+1],10);break;case"tcptype":i.tcpType=t[e+1];break;case"ufrag":i.ufrag=t[e+1],i.usernameFragment=t[e+1];break;default:void 0===i[t[e]]&&(i[t[e]]=t[e+1])}return i},t.writeCandidate=function(e){const t=[];t.push(e.foundation);const i=e.component;"rtp"===i?t.push(1):"rtcp"===i?t.push(2):t.push(i),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.address||e.ip),t.push(e.port);const n=e.type;return t.push("typ"),t.push(n),"host"!==n&&e.relatedAddress&&e.relatedPort&&(t.push("raddr"),t.push(e.relatedAddress),t.push("rport"),t.push(e.relatedPort)),e.tcpType&&"tcp"===e.protocol.toLowerCase()&&(t.push("tcptype"),t.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(t.push("ufrag"),t.push(e.usernameFragment||e.ufrag)),"candidate:"+t.join(" ")},t.parseIceOptions=function(e){return e.substring(14).split(" ")},t.parseRtpMap=function(e){let t=e.substring(9).split(" ");const i={payloadType:parseInt(t.shift(),10)};return t=t[0].split("/"),i.name=t[0],i.clockRate=parseInt(t[1],10),i.channels=3===t.length?parseInt(t[2],10):1,i.numChannels=i.channels,i},t.writeRtpMap=function(e){let t=e.payloadType;void 0!==e.preferredPayloadType&&(t=e.preferredPayloadType);const i=e.channels||e.numChannels||1;return"a=rtpmap:"+t+" "+e.name+"/"+e.clockRate+(1!==i?"/"+i:"")+"\r\n"},t.parseExtmap=function(e){const t=e.substring(9).split(" ");return{id:parseInt(t[0],10),direction:t[0].indexOf("/")>0?t[0].split("/")[1]:"sendrecv",uri:t[1],attributes:t.slice(2).join(" ")}},t.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&"sendrecv"!==e.direction?"/"+e.direction:"")+" "+e.uri+(e.attributes?" "+e.attributes:"")+"\r\n"},t.parseFmtp=function(e){const t={};let i;const n=e.substring(e.indexOf(" ")+1).split(";");for(let e=0;e<n.length;e++)i=n[e].trim().split("="),t[i[0].trim()]=i[1];return t},t.writeFmtp=function(e){let t="",i=e.payloadType;if(void 0!==e.preferredPayloadType&&(i=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){const n=[];Object.keys(e.parameters).forEach((t=>{void 0!==e.parameters[t]?n.push(t+"="+e.parameters[t]):n.push(t)})),t+="a=fmtp:"+i+" "+n.join(";")+"\r\n"}return t},t.parseRtcpFb=function(e){const t=e.substring(e.indexOf(" ")+1).split(" ");return{type:t.shift(),parameter:t.join(" ")}},t.writeRtcpFb=function(e){let t="",i=e.payloadType;return void 0!==e.preferredPayloadType&&(i=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach((e=>{t+="a=rtcp-fb:"+i+" "+e.type+(e.parameter&&e.parameter.length?" "+e.parameter:"")+"\r\n"})),t},t.parseSsrcMedia=function(e){const t=e.indexOf(" "),i={ssrc:parseInt(e.substring(7,t),10)},n=e.indexOf(":",t);return n>-1?(i.attribute=e.substring(t+1,n),i.value=e.substring(n+1)):i.attribute=e.substring(t+1),i},t.parseSsrcGroup=function(e){const t=e.substring(13).split(" ");return{semantics:t.shift(),ssrcs:t.map((e=>parseInt(e,10)))}},t.getMid=function(e){const i=t.matchPrefix(e,"a=mid:")[0];if(i)return i.substring(6)},t.parseFingerprint=function(e){const t=e.substring(14).split(" ");return{algorithm:t[0].toLowerCase(),value:t[1].toUpperCase()}},t.getDtlsParameters=function(e,i){return{role:"auto",fingerprints:t.matchPrefix(e+i,"a=fingerprint:").map(t.parseFingerprint)}},t.writeDtlsParameters=function(e,t){let i="a=setup:"+t+"\r\n";return e.fingerprints.forEach((e=>{i+="a=fingerprint:"+e.algorithm+" "+e.value+"\r\n"})),i},t.parseCryptoLine=function(e){const t=e.substring(9).split(" ");return{tag:parseInt(t[0],10),cryptoSuite:t[1],keyParams:t[2],sessionParams:t.slice(3)}},t.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+("object"==typeof e.keyParams?t.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+"\r\n"},t.parseCryptoKeyParams=function(e){if(0!==e.indexOf("inline:"))return null;const t=e.substring(7).split("|");return{keyMethod:"inline",keySalt:t[0],lifeTime:t[1],mkiValue:t[2]?t[2].split(":")[0]:void 0,mkiLength:t[2]?t[2].split(":")[1]:void 0}},t.writeCryptoKeyParams=function(e){return e.keyMethod+":"+e.keySalt+(e.lifeTime?"|"+e.lifeTime:"")+(e.mkiValue&&e.mkiLength?"|"+e.mkiValue+":"+e.mkiLength:"")},t.getCryptoParameters=function(e,i){return t.matchPrefix(e+i,"a=crypto:").map(t.parseCryptoLine)},t.getIceParameters=function(e,i){const n=t.matchPrefix(e+i,"a=ice-ufrag:")[0],s=t.matchPrefix(e+i,"a=ice-pwd:")[0];return n&&s?{usernameFragment:n.substring(12),password:s.substring(10)}:null},t.writeIceParameters=function(e){let t="a=ice-ufrag:"+e.usernameFragment+"\r\na=ice-pwd:"+e.password+"\r\n";return e.iceLite&&(t+="a=ice-lite\r\n"),t},t.parseRtpParameters=function(e){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=t.splitLines(e)[0].split(" ");i.profile=n[2];for(let s=3;s<n.length;s++){const a=n[s],o=t.matchPrefix(e,"a=rtpmap:"+a+" ")[0];if(o){const n=t.parseRtpMap(o),s=t.matchPrefix(e,"a=fmtp:"+a+" ");switch(n.parameters=s.length?t.parseFmtp(s[0]):{},n.rtcpFeedback=t.matchPrefix(e,"a=rtcp-fb:"+a+" ").map(t.parseRtcpFb),i.codecs.push(n),n.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(n.name.toUpperCase())}}}t.matchPrefix(e,"a=extmap:").forEach((e=>{i.headerExtensions.push(t.parseExtmap(e))}));const s=t.matchPrefix(e,"a=rtcp-fb:* ").map(t.parseRtcpFb);return i.codecs.forEach((e=>{s.forEach((t=>{e.rtcpFeedback.find((e=>e.type===t.type&&e.parameter===t.parameter))||e.rtcpFeedback.push(t)}))})),i},t.writeRtpDescription=function(e,i){let n="";n+="m="+e+" ",n+=i.codecs.length>0?"9":"0",n+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",n+=i.codecs.map((e=>void 0!==e.preferredPayloadType?e.preferredPayloadType:e.payloadType)).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",i.codecs.forEach((e=>{n+=t.writeRtpMap(e),n+=t.writeFmtp(e),n+=t.writeRtcpFb(e)}));let s=0;return i.codecs.forEach((e=>{e.maxptime>s&&(s=e.maxptime)})),s>0&&(n+="a=maxptime:"+s+"\r\n"),i.headerExtensions&&i.headerExtensions.forEach((e=>{n+=t.writeExtmap(e)})),n},t.parseRtpEncodingParameters=function(e){const i=[],n=t.parseRtpParameters(e),s=-1!==n.fecMechanisms.indexOf("RED"),a=-1!==n.fecMechanisms.indexOf("ULPFEC"),o=t.matchPrefix(e,"a=ssrc:").map((e=>t.parseSsrcMedia(e))).filter((e=>"cname"===e.attribute)),c=o.length>0&&o[0].ssrc;let u;const l=t.matchPrefix(e,"a=ssrc-group:FID").map((e=>e.substring(17).split(" ").map((e=>parseInt(e,10)))));l.length>0&&l[0].length>1&&l[0][0]===c&&(u=l[0][1]),n.codecs.forEach((e=>{if("RTX"===e.name.toUpperCase()&&e.parameters.apt){let t={ssrc:c,codecPayloadType:parseInt(e.parameters.apt,10)};c&&u&&(t.rtx={ssrc:u}),i.push(t),s&&(t=JSON.parse(JSON.stringify(t)),t.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},i.push(t))}})),0===i.length&&c&&i.push({ssrc:c});let h=t.matchPrefix(e,"b=");return h.length&&(h=0===h[0].indexOf("b=TIAS:")?parseInt(h[0].substring(7),10):0===h[0].indexOf("b=AS:")?1e3*parseInt(h[0].substring(5),10)*.95-16e3:void 0,i.forEach((e=>{e.maxBitrate=h}))),i},t.parseRtcpParameters=function(e){const i={},n=t.matchPrefix(e,"a=ssrc:").map((e=>t.parseSsrcMedia(e))).filter((e=>"cname"===e.attribute))[0];n&&(i.cname=n.value,i.ssrc=n.ssrc);const s=t.matchPrefix(e,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=0===s.length;const a=t.matchPrefix(e,"a=rtcp-mux");return i.mux=a.length>0,i},t.writeRtcpParameters=function(e){let t="";return e.reducedSize&&(t+="a=rtcp-rsize\r\n"),e.mux&&(t+="a=rtcp-mux\r\n"),void 0!==e.ssrc&&e.cname&&(t+="a=ssrc:"+e.ssrc+" cname:"+e.cname+"\r\n"),t},t.parseMsid=function(e){let i;const n=t.matchPrefix(e,"a=msid:");if(1===n.length)return i=n[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=t.matchPrefix(e,"a=ssrc:").map((e=>t.parseSsrcMedia(e))).filter((e=>"msid"===e.attribute));return s.length>0?(i=s[0].value.split(" "),{stream:i[0],track:i[1]}):void 0},t.parseSctpDescription=function(e){const i=t.parseMLine(e),n=t.matchPrefix(e,"a=max-message-size:");let s;n.length>0&&(s=parseInt(n[0].substring(19),10)),isNaN(s)&&(s=65536);const a=t.matchPrefix(e,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const o=t.matchPrefix(e,"a=sctpmap:");if(o.length>0){const e=o[0].substring(10).split(" ");return{port:parseInt(e[0],10),protocol:e[1],maxMessageSize:s}}},t.writeSctpDescription=function(e,t){let i=[];return i="DTLS/SCTP"!==e.protocol?["m="+e.kind+" 9 "+e.protocol+" "+t.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+t.port+"\r\n"]:["m="+e.kind+" 9 "+e.protocol+" "+t.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+t.port+" "+t.protocol+" 65535\r\n"],void 0!==t.maxMessageSize&&i.push("a=max-message-size:"+t.maxMessageSize+"\r\n"),i.join("")},t.generateSessionId=function(){return Math.random().toString().substr(2,22)},t.writeSessionBoilerplate=function(e,i,n){let s;const a=void 0!==i?i:2;s=e||t.generateSessionId();return"v=0\r\no="+(n||"thisisadapterortc")+" "+s+" "+a+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},t.getDirection=function(e,i){const n=t.splitLines(e);for(let e=0;e<n.length;e++)switch(n[e]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[e].substring(2)}return i?t.getDirection(i):"sendrecv"},t.getKind=function(e){return t.splitLines(e)[0].split(" ")[0].substring(2)},t.isRejected=function(e){return"0"===e.split(" ",2)[1]},t.parseMLine=function(e){const i=t.splitLines(e)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},t.parseOLine=function(e){const i=t.matchPrefix(e,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},t.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1;const i=t.splitLines(e);for(let e=0;e<i.length;e++)if(i[e].length<2||"="!==i[e].charAt(1))return!1;return!0},e.exports=t}(de);var ue=de.exports,le=getDefaultExportFromCjs(ue),he=_mergeNamespaces({__proto__:null,default:le},[ue]);function shimRTCIceCandidate(e){if(!e.RTCIceCandidate||e.RTCIceCandidate&&"foundation"in e.RTCIceCandidate.prototype)return;const t=e.RTCIceCandidate;e.RTCIceCandidate=function RTCIceCandidate(e){if("object"==typeof e&&e.candidate&&0===e.candidate.indexOf("a=")&&((e=JSON.parse(JSON.stringify(e))).candidate=e.candidate.substring(2)),e.candidate&&e.candidate.length){const i=new t(e),n=le.parseCandidate(e.candidate);for(const e in n)e in i||Object.defineProperty(i,e,{value:n[e]});return i.toJSON=function toJSON(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new t(e)},e.RTCIceCandidate.prototype=t.prototype,wrapPeerConnectionEvent(e,"icecandidate",(t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new e.RTCIceCandidate(t.candidate),writable:"false"}),t)))}function shimRTCIceCandidateRelayProtocol(e){!e.RTCIceCandidate||e.RTCIceCandidate&&"relayProtocol"in e.RTCIceCandidate.prototype||wrapPeerConnectionEvent(e,"icecandidate",(e=>{if(e.candidate){const t=le.parseCandidate(e.candidate.candidate);"relay"===t.type&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e}))}function shimMaxMessageSize(e,t){if(!e.RTCPeerConnection)return;"sctp"in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"sctp",{get(){return void 0===this._sctp?null:this._sctp}});const sctpInDescription=function(e){if(!e||!e.sdp)return!1;const t=le.splitSections(e.sdp);return t.shift(),t.some((e=>{const t=le.parseMLine(e);return t&&"application"===t.kind&&-1!==t.protocol.indexOf("SCTP")}))},getRemoteFirefoxVersion=function(e){const t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===t||t.length<2)return-1;const i=parseInt(t[1],10);return i!=i?-1:i},getCanSendMaxMessageSize=function(e){let i=65536;return"firefox"===t.browser&&(i=t.version<57?-1===e?16384:2147483637:t.version<60?57===t.version?65535:65536:2147483637),i},getMaxMessageSize=function(e,i){let n=65536;"firefox"===t.browser&&57===t.version&&(n=65535);const s=le.matchPrefix(e.sdp,"a=max-message-size:");return s.length>0?n=parseInt(s[0].substring(19),10):"firefox"===t.browser&&-1!==i&&(n=2147483637),n},i=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function setRemoteDescription(){if(this._sctp=null,"chrome"===t.browser&&t.version>=76){const{sdpSemantics:e}=this.getConfiguration();"plan-b"===e&&Object.defineProperty(this,"sctp",{get(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(sctpInDescription(arguments[0])){const e=getRemoteFirefoxVersion(arguments[0]),t=getCanSendMaxMessageSize(e),i=getMaxMessageSize(arguments[0],e);let n;n=0===t&&0===i?Number.POSITIVE_INFINITY:0===t||0===i?Math.max(t,i):Math.min(t,i);const s={};Object.defineProperty(s,"maxMessageSize",{get:()=>n}),this._sctp=s}return i.apply(this,arguments)}}function shimSendThrowTypeError(e){if(!e.RTCPeerConnection||!("createDataChannel"in e.RTCPeerConnection.prototype))return;function wrapDcSend(e,t){const i=e.send;e.send=function send(){const n=arguments[0],s=n.length||n.size||n.byteLength;if("open"===e.readyState&&t.sctp&&s>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)");return i.apply(e,arguments)}}const t=e.RTCPeerConnection.prototype.createDataChannel;e.RTCPeerConnection.prototype.createDataChannel=function createDataChannel(){const e=t.apply(this,arguments);return wrapDcSend(e,this),e},wrapPeerConnectionEvent(e,"datachannel",(e=>(wrapDcSend(e.channel,e.target),e)))}function shimConnectionState(e){if(!e.RTCPeerConnection||"connectionState"in e.RTCPeerConnection.prototype)return;const t=e.RTCPeerConnection.prototype;Object.defineProperty(t,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach((e=>{const i=t[e];t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=e=>{const t=e.target;if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState;const i=new Event("connectionstatechange",e);t.dispatchEvent(i)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}}))}function removeExtmapAllowMixed(e,t){if(!e.RTCPeerConnection)return;if("chrome"===t.browser&&t.version>=71)return;if("safari"===t.browser&&t.version>=605)return;const i=e.RTCPeerConnection.prototype.setRemoteDescription;e.RTCPeerConnection.prototype.setRemoteDescription=function setRemoteDescription(t){if(t&&t.sdp&&-1!==t.sdp.indexOf("\na=extmap-allow-mixed")){const i=t.sdp.split("\n").filter((e=>"a=extmap-allow-mixed"!==e.trim())).join("\n");e.RTCSessionDescription&&t instanceof e.RTCSessionDescription?arguments[0]=new e.RTCSessionDescription({type:t.type,sdp:i}):t.sdp=i}return i.apply(this,arguments)}}function shimAddIceCandidateNullOrEmpty(e,t){if(!e.RTCPeerConnection||!e.RTCPeerConnection.prototype)return;const i=e.RTCPeerConnection.prototype.addIceCandidate;i&&0!==i.length&&(e.RTCPeerConnection.prototype.addIceCandidate=function addIceCandidate(){return arguments[0]?("chrome"===t.browser&&t.version<78||"firefox"===t.browser&&t.version<68||"safari"===t.browser)&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():i.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function shimParameterlessSetLocalDescription(e,t){if(!e.RTCPeerConnection||!e.RTCPeerConnection.prototype)return;const i=e.RTCPeerConnection.prototype.setLocalDescription;i&&0!==i.length&&(e.RTCPeerConnection.prototype.setLocalDescription=function setLocalDescription(){let e=arguments[0]||{};if("object"!=typeof e||e.type&&e.sdp)return i.apply(this,arguments);if(e={type:e.type,sdp:e.sdp},!e.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":e.type="offer";break;default:e.type="answer"}if(e.sdp||"offer"!==e.type&&"answer"!==e.type)return i.apply(this,[e]);const t="offer"===e.type?this.createOffer:this.createAnswer;return t.apply(this).then((e=>i.apply(this,[e])))})}var pe,me,fe,ge,ve=Object.freeze({__proto__:null,removeExtmapAllowMixed,shimAddIceCandidateNullOrEmpty,shimConnectionState,shimMaxMessageSize,shimParameterlessSetLocalDescription,shimRTCIceCandidate,shimRTCIceCandidateRelayProtocol,shimSendThrowTypeError});!function adapterFactory(){let{window:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimSafari:!0};const i=log,n=detectBrowser(e),s={browserDetails:n,commonShim:ve,extractVersion,disableLog,disableWarnings,sdp:he};switch(n.browser){case"chrome":if(!ae||!shimPeerConnection$1||!t.shimChrome)return i("Chrome shim is not included in this adapter release."),s;if(null===n.version)return i("Chrome shim can not determine version, not shimming."),s;i("adapter.js shimming chrome."),s.browserShim=ae,shimAddIceCandidateNullOrEmpty(e,n),shimParameterlessSetLocalDescription(e),shimGetUserMedia$2(e,n),shimMediaStream(e),shimPeerConnection$1(e,n),shimOnTrack$1(e),shimAddTrackRemoveTrack(e,n),shimGetSendersWithDtmf(e),shimGetStats(e),shimSenderReceiverGetStats(e),fixNegotiationNeeded(e,n),shimRTCIceCandidate(e),shimRTCIceCandidateRelayProtocol(e),shimConnectionState(e),shimMaxMessageSize(e,n),shimSendThrowTypeError(e),removeExtmapAllowMixed(e,n);break;case"firefox":if(!oe||!shimPeerConnection||!t.shimFirefox)return i("Firefox shim is not included in this adapter release."),s;i("adapter.js shimming firefox."),s.browserShim=oe,shimAddIceCandidateNullOrEmpty(e,n),shimParameterlessSetLocalDescription(e),shimGetUserMedia$1(e,n),shimPeerConnection(e,n),shimOnTrack(e),shimRemoveStream(e),shimSenderGetStats(e),shimReceiverGetStats(e),shimRTCDataChannel(e),shimAddTransceiver(e),shimGetParameters(e),shimCreateOffer(e),shimCreateAnswer(e),shimRTCIceCandidate(e),shimConnectionState(e),shimMaxMessageSize(e,n),shimSendThrowTypeError(e);break;case"safari":if(!ce||!t.shimSafari)return i("Safari shim is not included in this adapter release."),s;i("adapter.js shimming safari."),s.browserShim=ce,shimAddIceCandidateNullOrEmpty(e,n),shimParameterlessSetLocalDescription(e),shimRTCIceServerUrls(e),shimCreateOfferLegacy(e),shimCallbacksAPI(e),shimLocalStreamsAPI(e),shimRemoteStreamsAPI(e),shimTrackEventTransceiver(e),shimGetUserMedia(e),shimAudioContext(e),shimRTCIceCandidate(e),shimRTCIceCandidateRelayProtocol(e),shimMaxMessageSize(e,n),shimSendThrowTypeError(e),removeExtmapAllowMixed(e,n);break;default:i("Unsupported browser!")}return s}({window:"undefined"==typeof window?void 0:window}),function(e){e[e.PUBLISHER=0]="PUBLISHER",e[e.SUBSCRIBER=1]="SUBSCRIBER"}(pe||(pe={})),L.util.setEnumType(pe,"livekit.SignalTarget",[{no:0,name:"PUBLISHER"},{no:1,name:"SUBSCRIBER"}]),function(e){e[e.ACTIVE=0]="ACTIVE",e[e.PAUSED=1]="PAUSED"}(me||(me={})),L.util.setEnumType(me,"livekit.StreamState",[{no:0,name:"ACTIVE"},{no:1,name:"PAUSED"}]),function(e){e[e.UDP=0]="UDP",e[e.TCP=1]="TCP",e[e.TLS=2]="TLS"}(fe||(fe={})),L.util.setEnumType(fe,"livekit.CandidateProtocol",[{no:0,name:"UDP"},{no:1,name:"TCP"},{no:2,name:"TLS"}]);class SignalRequest extends Message{constructor(e){super(),this.message={case:void 0},L.util.initPartial(e,this)}static fromBinary(e,t){return(new SignalRequest).fromBinary(e,t)}static fromJson(e,t){return(new SignalRequest).fromJson(e,t)}static fromJsonString(e,t){return(new SignalRequest).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SignalRequest,e,t)}}SignalRequest.runtime=L,SignalRequest.typeName="livekit.SignalRequest",SignalRequest.fields=L.util.newFieldList((()=>[{no:1,name:"offer",kind:"message",T:SessionDescription,oneof:"message"},{no:2,name:"answer",kind:"message",T:SessionDescription,oneof:"message"},{no:3,name:"trickle",kind:"message",T:TrickleRequest,oneof:"message"},{no:4,name:"add_track",kind:"message",T:AddTrackRequest,oneof:"message"},{no:5,name:"mute",kind:"message",T:MuteTrackRequest,oneof:"message"},{no:6,name:"subscription",kind:"message",T:UpdateSubscription,oneof:"message"},{no:7,name:"track_setting",kind:"message",T:UpdateTrackSettings,oneof:"message"},{no:8,name:"leave",kind:"message",T:LeaveRequest,oneof:"message"},{no:10,name:"update_layers",kind:"message",T:UpdateVideoLayers,oneof:"message"},{no:11,name:"subscription_permission",kind:"message",T:SubscriptionPermission,oneof:"message"},{no:12,name:"sync_state",kind:"message",T:SyncState,oneof:"message"},{no:13,name:"simulate",kind:"message",T:SimulateScenario,oneof:"message"},{no:14,name:"ping",kind:"scalar",T:3,oneof:"message"},{no:15,name:"update_metadata",kind:"message",T:UpdateParticipantMetadata,oneof:"message"},{no:16,name:"ping_req",kind:"message",T:Ping,oneof:"message"}]));class SignalResponse extends Message{constructor(e){super(),this.message={case:void 0},L.util.initPartial(e,this)}static fromBinary(e,t){return(new SignalResponse).fromBinary(e,t)}static fromJson(e,t){return(new SignalResponse).fromJson(e,t)}static fromJsonString(e,t){return(new SignalResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SignalResponse,e,t)}}SignalResponse.runtime=L,SignalResponse.typeName="livekit.SignalResponse",SignalResponse.fields=L.util.newFieldList((()=>[{no:1,name:"join",kind:"message",T:JoinResponse,oneof:"message"},{no:2,name:"answer",kind:"message",T:SessionDescription,oneof:"message"},{no:3,name:"offer",kind:"message",T:SessionDescription,oneof:"message"},{no:4,name:"trickle",kind:"message",T:TrickleRequest,oneof:"message"},{no:5,name:"update",kind:"message",T:ParticipantUpdate,oneof:"message"},{no:6,name:"track_published",kind:"message",T:TrackPublishedResponse,oneof:"message"},{no:8,name:"leave",kind:"message",T:LeaveRequest,oneof:"message"},{no:9,name:"mute",kind:"message",T:MuteTrackRequest,oneof:"message"},{no:10,name:"speakers_changed",kind:"message",T:SpeakersChanged,oneof:"message"},{no:11,name:"room_update",kind:"message",T:RoomUpdate,oneof:"message"},{no:12,name:"connection_quality",kind:"message",T:ConnectionQualityUpdate,oneof:"message"},{no:13,name:"stream_state_update",kind:"message",T:StreamStateUpdate,oneof:"message"},{no:14,name:"subscribed_quality_update",kind:"message",T:SubscribedQualityUpdate,oneof:"message"},{no:15,name:"subscription_permission_update",kind:"message",T:SubscriptionPermissionUpdate,oneof:"message"},{no:16,name:"refresh_token",kind:"scalar",T:9,oneof:"message"},{no:17,name:"track_unpublished",kind:"message",T:TrackUnpublishedResponse,oneof:"message"},{no:18,name:"pong",kind:"scalar",T:3,oneof:"message"},{no:19,name:"reconnect",kind:"message",T:ReconnectResponse,oneof:"message"},{no:20,name:"pong_resp",kind:"message",T:Pong,oneof:"message"},{no:21,name:"subscription_response",kind:"message",T:SubscriptionResponse,oneof:"message"}]));class SimulcastCodec extends Message{constructor(e){super(),this.codec="",this.cid="",this.enableSimulcastLayers=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new SimulcastCodec).fromBinary(e,t)}static fromJson(e,t){return(new SimulcastCodec).fromJson(e,t)}static fromJsonString(e,t){return(new SimulcastCodec).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SimulcastCodec,e,t)}}SimulcastCodec.runtime=L,SimulcastCodec.typeName="livekit.SimulcastCodec",SimulcastCodec.fields=L.util.newFieldList((()=>[{no:1,name:"codec",kind:"scalar",T:9},{no:2,name:"cid",kind:"scalar",T:9},{no:3,name:"enable_simulcast_layers",kind:"scalar",T:8}]));class AddTrackRequest extends Message{constructor(e){super(),this.cid="",this.name="",this.type=U.AUDIO,this.width=0,this.height=0,this.muted=!1,this.disableDtx=!1,this.source=O.UNKNOWN,this.layers=[],this.simulcastCodecs=[],this.sid="",this.stereo=!1,this.disableRed=!1,this.encryption=W.NONE,this.stream="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new AddTrackRequest).fromBinary(e,t)}static fromJson(e,t){return(new AddTrackRequest).fromJson(e,t)}static fromJsonString(e,t){return(new AddTrackRequest).fromJsonString(e,t)}static equals(e,t){return L.util.equals(AddTrackRequest,e,t)}}AddTrackRequest.runtime=L,AddTrackRequest.typeName="livekit.AddTrackRequest",AddTrackRequest.fields=L.util.newFieldList((()=>[{no:1,name:"cid",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9},{no:3,name:"type",kind:"enum",T:L.getEnumType(U)},{no:4,name:"width",kind:"scalar",T:13},{no:5,name:"height",kind:"scalar",T:13},{no:6,name:"muted",kind:"scalar",T:8},{no:7,name:"disable_dtx",kind:"scalar",T:8},{no:8,name:"source",kind:"enum",T:L.getEnumType(O)},{no:9,name:"layers",kind:"message",T:VideoLayer,repeated:!0},{no:10,name:"simulcast_codecs",kind:"message",T:SimulcastCodec,repeated:!0},{no:11,name:"sid",kind:"scalar",T:9},{no:12,name:"stereo",kind:"scalar",T:8},{no:13,name:"disable_red",kind:"scalar",T:8},{no:14,name:"encryption",kind:"enum",T:L.getEnumType(W)},{no:15,name:"stream",kind:"scalar",T:9}]));class TrickleRequest extends Message{constructor(e){super(),this.candidateInit="",this.target=pe.PUBLISHER,L.util.initPartial(e,this)}static fromBinary(e,t){return(new TrickleRequest).fromBinary(e,t)}static fromJson(e,t){return(new TrickleRequest).fromJson(e,t)}static fromJsonString(e,t){return(new TrickleRequest).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TrickleRequest,e,t)}}TrickleRequest.runtime=L,TrickleRequest.typeName="livekit.TrickleRequest",TrickleRequest.fields=L.util.newFieldList((()=>[{no:1,name:"candidateInit",kind:"scalar",T:9},{no:2,name:"target",kind:"enum",T:L.getEnumType(pe)}]));class MuteTrackRequest extends Message{constructor(e){super(),this.sid="",this.muted=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new MuteTrackRequest).fromBinary(e,t)}static fromJson(e,t){return(new MuteTrackRequest).fromJson(e,t)}static fromJsonString(e,t){return(new MuteTrackRequest).fromJsonString(e,t)}static equals(e,t){return L.util.equals(MuteTrackRequest,e,t)}}MuteTrackRequest.runtime=L,MuteTrackRequest.typeName="livekit.MuteTrackRequest",MuteTrackRequest.fields=L.util.newFieldList((()=>[{no:1,name:"sid",kind:"scalar",T:9},{no:2,name:"muted",kind:"scalar",T:8}]));class JoinResponse extends Message{constructor(e){super(),this.otherParticipants=[],this.serverVersion="",this.iceServers=[],this.subscriberPrimary=!1,this.alternativeUrl="",this.serverRegion="",this.pingTimeout=0,this.pingInterval=0,this.sifTrailer=new Uint8Array(0),L.util.initPartial(e,this)}static fromBinary(e,t){return(new JoinResponse).fromBinary(e,t)}static fromJson(e,t){return(new JoinResponse).fromJson(e,t)}static fromJsonString(e,t){return(new JoinResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(JoinResponse,e,t)}}JoinResponse.runtime=L,JoinResponse.typeName="livekit.JoinResponse",JoinResponse.fields=L.util.newFieldList((()=>[{no:1,name:"room",kind:"message",T:q},{no:2,name:"participant",kind:"message",T:ParticipantInfo},{no:3,name:"other_participants",kind:"message",T:ParticipantInfo,repeated:!0},{no:4,name:"server_version",kind:"scalar",T:9},{no:5,name:"ice_servers",kind:"message",T:ICEServer,repeated:!0},{no:6,name:"subscriber_primary",kind:"scalar",T:8},{no:7,name:"alternative_url",kind:"scalar",T:9},{no:8,name:"client_configuration",kind:"message",T:ClientConfiguration},{no:9,name:"server_region",kind:"scalar",T:9},{no:10,name:"ping_timeout",kind:"scalar",T:5},{no:11,name:"ping_interval",kind:"scalar",T:5},{no:12,name:"server_info",kind:"message",T:ServerInfo},{no:13,name:"sif_trailer",kind:"scalar",T:12}]));class ReconnectResponse extends Message{constructor(e){super(),this.iceServers=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new ReconnectResponse).fromBinary(e,t)}static fromJson(e,t){return(new ReconnectResponse).fromJson(e,t)}static fromJsonString(e,t){return(new ReconnectResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ReconnectResponse,e,t)}}ReconnectResponse.runtime=L,ReconnectResponse.typeName="livekit.ReconnectResponse",ReconnectResponse.fields=L.util.newFieldList((()=>[{no:1,name:"ice_servers",kind:"message",T:ICEServer,repeated:!0},{no:2,name:"client_configuration",kind:"message",T:ClientConfiguration}]));class TrackPublishedResponse extends Message{constructor(e){super(),this.cid="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new TrackPublishedResponse).fromBinary(e,t)}static fromJson(e,t){return(new TrackPublishedResponse).fromJson(e,t)}static fromJsonString(e,t){return(new TrackPublishedResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TrackPublishedResponse,e,t)}}TrackPublishedResponse.runtime=L,TrackPublishedResponse.typeName="livekit.TrackPublishedResponse",TrackPublishedResponse.fields=L.util.newFieldList((()=>[{no:1,name:"cid",kind:"scalar",T:9},{no:2,name:"track",kind:"message",T:TrackInfo}]));class TrackUnpublishedResponse extends Message{constructor(e){super(),this.trackSid="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new TrackUnpublishedResponse).fromBinary(e,t)}static fromJson(e,t){return(new TrackUnpublishedResponse).fromJson(e,t)}static fromJsonString(e,t){return(new TrackUnpublishedResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TrackUnpublishedResponse,e,t)}}TrackUnpublishedResponse.runtime=L,TrackUnpublishedResponse.typeName="livekit.TrackUnpublishedResponse",TrackUnpublishedResponse.fields=L.util.newFieldList((()=>[{no:1,name:"track_sid",kind:"scalar",T:9}]));class SessionDescription extends Message{constructor(e){super(),this.type="",this.sdp="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new SessionDescription).fromBinary(e,t)}static fromJson(e,t){return(new SessionDescription).fromJson(e,t)}static fromJsonString(e,t){return(new SessionDescription).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SessionDescription,e,t)}}SessionDescription.runtime=L,SessionDescription.typeName="livekit.SessionDescription",SessionDescription.fields=L.util.newFieldList((()=>[{no:1,name:"type",kind:"scalar",T:9},{no:2,name:"sdp",kind:"scalar",T:9}]));class ParticipantUpdate extends Message{constructor(e){super(),this.participants=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new ParticipantUpdate).fromBinary(e,t)}static fromJson(e,t){return(new ParticipantUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new ParticipantUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ParticipantUpdate,e,t)}}ParticipantUpdate.runtime=L,ParticipantUpdate.typeName="livekit.ParticipantUpdate",ParticipantUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"participants",kind:"message",T:ParticipantInfo,repeated:!0}]));class UpdateSubscription extends Message{constructor(e){super(),this.trackSids=[],this.subscribe=!1,this.participantTracks=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new UpdateSubscription).fromBinary(e,t)}static fromJson(e,t){return(new UpdateSubscription).fromJson(e,t)}static fromJsonString(e,t){return(new UpdateSubscription).fromJsonString(e,t)}static equals(e,t){return L.util.equals(UpdateSubscription,e,t)}}UpdateSubscription.runtime=L,UpdateSubscription.typeName="livekit.UpdateSubscription",UpdateSubscription.fields=L.util.newFieldList((()=>[{no:1,name:"track_sids",kind:"scalar",T:9,repeated:!0},{no:2,name:"subscribe",kind:"scalar",T:8},{no:3,name:"participant_tracks",kind:"message",T:ParticipantTracks,repeated:!0}]));class UpdateTrackSettings extends Message{constructor(e){super(),this.trackSids=[],this.disabled=!1,this.quality=N.LOW,this.width=0,this.height=0,this.fps=0,this.priority=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new UpdateTrackSettings).fromBinary(e,t)}static fromJson(e,t){return(new UpdateTrackSettings).fromJson(e,t)}static fromJsonString(e,t){return(new UpdateTrackSettings).fromJsonString(e,t)}static equals(e,t){return L.util.equals(UpdateTrackSettings,e,t)}}UpdateTrackSettings.runtime=L,UpdateTrackSettings.typeName="livekit.UpdateTrackSettings",UpdateTrackSettings.fields=L.util.newFieldList((()=>[{no:1,name:"track_sids",kind:"scalar",T:9,repeated:!0},{no:3,name:"disabled",kind:"scalar",T:8},{no:4,name:"quality",kind:"enum",T:L.getEnumType(N)},{no:5,name:"width",kind:"scalar",T:13},{no:6,name:"height",kind:"scalar",T:13},{no:7,name:"fps",kind:"scalar",T:13},{no:8,name:"priority",kind:"scalar",T:13}]));class LeaveRequest extends Message{constructor(e){super(),this.canReconnect=!1,this.reason=B.UNKNOWN_REASON,L.util.initPartial(e,this)}static fromBinary(e,t){return(new LeaveRequest).fromBinary(e,t)}static fromJson(e,t){return(new LeaveRequest).fromJson(e,t)}static fromJsonString(e,t){return(new LeaveRequest).fromJsonString(e,t)}static equals(e,t){return L.util.equals(LeaveRequest,e,t)}}LeaveRequest.runtime=L,LeaveRequest.typeName="livekit.LeaveRequest",LeaveRequest.fields=L.util.newFieldList((()=>[{no:1,name:"can_reconnect",kind:"scalar",T:8},{no:2,name:"reason",kind:"enum",T:L.getEnumType(B)}]));class UpdateVideoLayers extends Message{constructor(e){super(),this.trackSid="",this.layers=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new UpdateVideoLayers).fromBinary(e,t)}static fromJson(e,t){return(new UpdateVideoLayers).fromJson(e,t)}static fromJsonString(e,t){return(new UpdateVideoLayers).fromJsonString(e,t)}static equals(e,t){return L.util.equals(UpdateVideoLayers,e,t)}}UpdateVideoLayers.runtime=L,UpdateVideoLayers.typeName="livekit.UpdateVideoLayers",UpdateVideoLayers.fields=L.util.newFieldList((()=>[{no:1,name:"track_sid",kind:"scalar",T:9},{no:2,name:"layers",kind:"message",T:VideoLayer,repeated:!0}]));class UpdateParticipantMetadata extends Message{constructor(e){super(),this.metadata="",this.name="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new UpdateParticipantMetadata).fromBinary(e,t)}static fromJson(e,t){return(new UpdateParticipantMetadata).fromJson(e,t)}static fromJsonString(e,t){return(new UpdateParticipantMetadata).fromJsonString(e,t)}static equals(e,t){return L.util.equals(UpdateParticipantMetadata,e,t)}}UpdateParticipantMetadata.runtime=L,UpdateParticipantMetadata.typeName="livekit.UpdateParticipantMetadata",UpdateParticipantMetadata.fields=L.util.newFieldList((()=>[{no:1,name:"metadata",kind:"scalar",T:9},{no:2,name:"name",kind:"scalar",T:9}]));class ICEServer extends Message{constructor(e){super(),this.urls=[],this.username="",this.credential="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new ICEServer).fromBinary(e,t)}static fromJson(e,t){return(new ICEServer).fromJson(e,t)}static fromJsonString(e,t){return(new ICEServer).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ICEServer,e,t)}}ICEServer.runtime=L,ICEServer.typeName="livekit.ICEServer",ICEServer.fields=L.util.newFieldList((()=>[{no:1,name:"urls",kind:"scalar",T:9,repeated:!0},{no:2,name:"username",kind:"scalar",T:9},{no:3,name:"credential",kind:"scalar",T:9}]));class SpeakersChanged extends Message{constructor(e){super(),this.speakers=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SpeakersChanged).fromBinary(e,t)}static fromJson(e,t){return(new SpeakersChanged).fromJson(e,t)}static fromJsonString(e,t){return(new SpeakersChanged).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SpeakersChanged,e,t)}}SpeakersChanged.runtime=L,SpeakersChanged.typeName="livekit.SpeakersChanged",SpeakersChanged.fields=L.util.newFieldList((()=>[{no:1,name:"speakers",kind:"message",T:SpeakerInfo,repeated:!0}]));class RoomUpdate extends Message{constructor(e){super(),L.util.initPartial(e,this)}static fromBinary(e,t){return(new RoomUpdate).fromBinary(e,t)}static fromJson(e,t){return(new RoomUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new RoomUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(RoomUpdate,e,t)}}RoomUpdate.runtime=L,RoomUpdate.typeName="livekit.RoomUpdate",RoomUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"room",kind:"message",T:q}]));class ConnectionQualityInfo extends Message{constructor(e){super(),this.participantSid="",this.quality=x.POOR,this.score=0,L.util.initPartial(e,this)}static fromBinary(e,t){return(new ConnectionQualityInfo).fromBinary(e,t)}static fromJson(e,t){return(new ConnectionQualityInfo).fromJson(e,t)}static fromJsonString(e,t){return(new ConnectionQualityInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ConnectionQualityInfo,e,t)}}ConnectionQualityInfo.runtime=L,ConnectionQualityInfo.typeName="livekit.ConnectionQualityInfo",ConnectionQualityInfo.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"quality",kind:"enum",T:L.getEnumType(x)},{no:3,name:"score",kind:"scalar",T:2}]));class ConnectionQualityUpdate extends Message{constructor(e){super(),this.updates=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new ConnectionQualityUpdate).fromBinary(e,t)}static fromJson(e,t){return(new ConnectionQualityUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new ConnectionQualityUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(ConnectionQualityUpdate,e,t)}}ConnectionQualityUpdate.runtime=L,ConnectionQualityUpdate.typeName="livekit.ConnectionQualityUpdate",ConnectionQualityUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"updates",kind:"message",T:ConnectionQualityInfo,repeated:!0}]));class StreamStateInfo extends Message{constructor(e){super(),this.participantSid="",this.trackSid="",this.state=me.ACTIVE,L.util.initPartial(e,this)}static fromBinary(e,t){return(new StreamStateInfo).fromBinary(e,t)}static fromJson(e,t){return(new StreamStateInfo).fromJson(e,t)}static fromJsonString(e,t){return(new StreamStateInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(StreamStateInfo,e,t)}}StreamStateInfo.runtime=L,StreamStateInfo.typeName="livekit.StreamStateInfo",StreamStateInfo.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"track_sid",kind:"scalar",T:9},{no:3,name:"state",kind:"enum",T:L.getEnumType(me)}]));class StreamStateUpdate extends Message{constructor(e){super(),this.streamStates=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new StreamStateUpdate).fromBinary(e,t)}static fromJson(e,t){return(new StreamStateUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new StreamStateUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(StreamStateUpdate,e,t)}}StreamStateUpdate.runtime=L,StreamStateUpdate.typeName="livekit.StreamStateUpdate",StreamStateUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"stream_states",kind:"message",T:StreamStateInfo,repeated:!0}]));class SubscribedQuality extends Message{constructor(e){super(),this.quality=N.LOW,this.enabled=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscribedQuality).fromBinary(e,t)}static fromJson(e,t){return(new SubscribedQuality).fromJson(e,t)}static fromJsonString(e,t){return(new SubscribedQuality).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscribedQuality,e,t)}}SubscribedQuality.runtime=L,SubscribedQuality.typeName="livekit.SubscribedQuality",SubscribedQuality.fields=L.util.newFieldList((()=>[{no:1,name:"quality",kind:"enum",T:L.getEnumType(N)},{no:2,name:"enabled",kind:"scalar",T:8}]));class SubscribedCodec extends Message{constructor(e){super(),this.codec="",this.qualities=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscribedCodec).fromBinary(e,t)}static fromJson(e,t){return(new SubscribedCodec).fromJson(e,t)}static fromJsonString(e,t){return(new SubscribedCodec).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscribedCodec,e,t)}}SubscribedCodec.runtime=L,SubscribedCodec.typeName="livekit.SubscribedCodec",SubscribedCodec.fields=L.util.newFieldList((()=>[{no:1,name:"codec",kind:"scalar",T:9},{no:2,name:"qualities",kind:"message",T:SubscribedQuality,repeated:!0}]));class SubscribedQualityUpdate extends Message{constructor(e){super(),this.trackSid="",this.subscribedQualities=[],this.subscribedCodecs=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscribedQualityUpdate).fromBinary(e,t)}static fromJson(e,t){return(new SubscribedQualityUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new SubscribedQualityUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscribedQualityUpdate,e,t)}}SubscribedQualityUpdate.runtime=L,SubscribedQualityUpdate.typeName="livekit.SubscribedQualityUpdate",SubscribedQualityUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"track_sid",kind:"scalar",T:9},{no:2,name:"subscribed_qualities",kind:"message",T:SubscribedQuality,repeated:!0},{no:3,name:"subscribed_codecs",kind:"message",T:SubscribedCodec,repeated:!0}]));class TrackPermission extends Message{constructor(e){super(),this.participantSid="",this.allTracks=!1,this.trackSids=[],this.participantIdentity="",L.util.initPartial(e,this)}static fromBinary(e,t){return(new TrackPermission).fromBinary(e,t)}static fromJson(e,t){return(new TrackPermission).fromJson(e,t)}static fromJsonString(e,t){return(new TrackPermission).fromJsonString(e,t)}static equals(e,t){return L.util.equals(TrackPermission,e,t)}}TrackPermission.runtime=L,TrackPermission.typeName="livekit.TrackPermission",TrackPermission.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"all_tracks",kind:"scalar",T:8},{no:3,name:"track_sids",kind:"scalar",T:9,repeated:!0},{no:4,name:"participant_identity",kind:"scalar",T:9}]));class SubscriptionPermission extends Message{constructor(e){super(),this.allParticipants=!1,this.trackPermissions=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscriptionPermission).fromBinary(e,t)}static fromJson(e,t){return(new SubscriptionPermission).fromJson(e,t)}static fromJsonString(e,t){return(new SubscriptionPermission).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscriptionPermission,e,t)}}SubscriptionPermission.runtime=L,SubscriptionPermission.typeName="livekit.SubscriptionPermission",SubscriptionPermission.fields=L.util.newFieldList((()=>[{no:1,name:"all_participants",kind:"scalar",T:8},{no:2,name:"track_permissions",kind:"message",T:TrackPermission,repeated:!0}]));class SubscriptionPermissionUpdate extends Message{constructor(e){super(),this.participantSid="",this.trackSid="",this.allowed=!1,L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscriptionPermissionUpdate).fromBinary(e,t)}static fromJson(e,t){return(new SubscriptionPermissionUpdate).fromJson(e,t)}static fromJsonString(e,t){return(new SubscriptionPermissionUpdate).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscriptionPermissionUpdate,e,t)}}SubscriptionPermissionUpdate.runtime=L,SubscriptionPermissionUpdate.typeName="livekit.SubscriptionPermissionUpdate",SubscriptionPermissionUpdate.fields=L.util.newFieldList((()=>[{no:1,name:"participant_sid",kind:"scalar",T:9},{no:2,name:"track_sid",kind:"scalar",T:9},{no:3,name:"allowed",kind:"scalar",T:8}]));class SyncState extends Message{constructor(e){super(),this.publishTracks=[],this.dataChannels=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new SyncState).fromBinary(e,t)}static fromJson(e,t){return(new SyncState).fromJson(e,t)}static fromJsonString(e,t){return(new SyncState).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SyncState,e,t)}}SyncState.runtime=L,SyncState.typeName="livekit.SyncState",SyncState.fields=L.util.newFieldList((()=>[{no:1,name:"answer",kind:"message",T:SessionDescription},{no:2,name:"subscription",kind:"message",T:UpdateSubscription},{no:3,name:"publish_tracks",kind:"message",T:TrackPublishedResponse,repeated:!0},{no:4,name:"data_channels",kind:"message",T:DataChannelInfo,repeated:!0},{no:5,name:"offer",kind:"message",T:SessionDescription}]));class DataChannelInfo extends Message{constructor(e){super(),this.label="",this.id=0,this.target=pe.PUBLISHER,L.util.initPartial(e,this)}static fromBinary(e,t){return(new DataChannelInfo).fromBinary(e,t)}static fromJson(e,t){return(new DataChannelInfo).fromJson(e,t)}static fromJsonString(e,t){return(new DataChannelInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(DataChannelInfo,e,t)}}DataChannelInfo.runtime=L,DataChannelInfo.typeName="livekit.DataChannelInfo",DataChannelInfo.fields=L.util.newFieldList((()=>[{no:1,name:"label",kind:"scalar",T:9},{no:2,name:"id",kind:"scalar",T:13},{no:3,name:"target",kind:"enum",T:L.getEnumType(pe)}]));class SimulateScenario extends Message{constructor(e){super(),this.scenario={case:void 0},L.util.initPartial(e,this)}static fromBinary(e,t){return(new SimulateScenario).fromBinary(e,t)}static fromJson(e,t){return(new SimulateScenario).fromJson(e,t)}static fromJsonString(e,t){return(new SimulateScenario).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SimulateScenario,e,t)}}SimulateScenario.runtime=L,SimulateScenario.typeName="livekit.SimulateScenario",SimulateScenario.fields=L.util.newFieldList((()=>[{no:1,name:"speaker_update",kind:"scalar",T:5,oneof:"scenario"},{no:2,name:"node_failure",kind:"scalar",T:8,oneof:"scenario"},{no:3,name:"migration",kind:"scalar",T:8,oneof:"scenario"},{no:4,name:"server_leave",kind:"scalar",T:8,oneof:"scenario"},{no:5,name:"switch_candidate_protocol",kind:"enum",T:L.getEnumType(fe),oneof:"scenario"},{no:6,name:"subscriber_bandwidth",kind:"scalar",T:3,oneof:"scenario"}]));class Ping extends Message{constructor(e){super(),this.timestamp=k.zero,this.rtt=k.zero,L.util.initPartial(e,this)}static fromBinary(e,t){return(new Ping).fromBinary(e,t)}static fromJson(e,t){return(new Ping).fromJson(e,t)}static fromJsonString(e,t){return(new Ping).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Ping,e,t)}}Ping.runtime=L,Ping.typeName="livekit.Ping",Ping.fields=L.util.newFieldList((()=>[{no:1,name:"timestamp",kind:"scalar",T:3},{no:2,name:"rtt",kind:"scalar",T:3}]));class Pong extends Message{constructor(e){super(),this.lastPingTimestamp=k.zero,this.timestamp=k.zero,L.util.initPartial(e,this)}static fromBinary(e,t){return(new Pong).fromBinary(e,t)}static fromJson(e,t){return(new Pong).fromJson(e,t)}static fromJsonString(e,t){return(new Pong).fromJsonString(e,t)}static equals(e,t){return L.util.equals(Pong,e,t)}}Pong.runtime=L,Pong.typeName="livekit.Pong",Pong.fields=L.util.newFieldList((()=>[{no:1,name:"last_ping_timestamp",kind:"scalar",T:3},{no:2,name:"timestamp",kind:"scalar",T:3}]));class RegionSettings extends Message{constructor(e){super(),this.regions=[],L.util.initPartial(e,this)}static fromBinary(e,t){return(new RegionSettings).fromBinary(e,t)}static fromJson(e,t){return(new RegionSettings).fromJson(e,t)}static fromJsonString(e,t){return(new RegionSettings).fromJsonString(e,t)}static equals(e,t){return L.util.equals(RegionSettings,e,t)}}RegionSettings.runtime=L,RegionSettings.typeName="livekit.RegionSettings",RegionSettings.fields=L.util.newFieldList((()=>[{no:1,name:"regions",kind:"message",T:RegionInfo,repeated:!0}]));class RegionInfo extends Message{constructor(e){super(),this.region="",this.url="",this.distance=k.zero,L.util.initPartial(e,this)}static fromBinary(e,t){return(new RegionInfo).fromBinary(e,t)}static fromJson(e,t){return(new RegionInfo).fromJson(e,t)}static fromJsonString(e,t){return(new RegionInfo).fromJsonString(e,t)}static equals(e,t){return L.util.equals(RegionInfo,e,t)}}RegionInfo.runtime=L,RegionInfo.typeName="livekit.RegionInfo",RegionInfo.fields=L.util.newFieldList((()=>[{no:1,name:"region",kind:"scalar",T:9},{no:2,name:"url",kind:"scalar",T:9},{no:3,name:"distance",kind:"scalar",T:3}]));class SubscriptionResponse extends Message{constructor(e){super(),this.trackSid="",this.err=J.SE_UNKNOWN,L.util.initPartial(e,this)}static fromBinary(e,t){return(new SubscriptionResponse).fromBinary(e,t)}static fromJson(e,t){return(new SubscriptionResponse).fromJson(e,t)}static fromJsonString(e,t){return(new SubscriptionResponse).fromJsonString(e,t)}static equals(e,t){return L.util.equals(SubscriptionResponse,e,t)}}SubscriptionResponse.runtime=L,SubscriptionResponse.typeName="livekit.SubscriptionResponse",SubscriptionResponse.fields=L.util.newFieldList((()=>[{no:1,name:"track_sid",kind:"scalar",T:9},{no:2,name:"err",kind:"enum",T:L.getEnumType(J)}]));class LivekitError extends Error{constructor(e,t){super(t||"an error has occured"),this.code=e}}class ConnectionError extends LivekitError{constructor(e,t,i){super(1,e),this.status=i,this.reason=t}}class DeviceUnsupportedError extends LivekitError{constructor(e){super(21,null!=e?e:"device is unsupported")}}class TrackInvalidError extends LivekitError{constructor(e){super(20,null!=e?e:"track is invalid")}}class UnsupportedServer extends LivekitError{constructor(e){super(10,null!=e?e:"unsupported server")}}class UnexpectedConnectionState extends LivekitError{constructor(e){super(12,null!=e?e:"unexpected connection state")}}class NegotiationError extends LivekitError{constructor(e){super(13,null!=e?e:"unable to negotiate")}}class PublishDataError extends LivekitError{constructor(e){super(13,null!=e?e:"unable to publish data")}}!function(e){e.PermissionDenied="PermissionDenied",e.NotFound="NotFound",e.DeviceInUse="DeviceInUse",e.Other="Other"}(ge||(ge={})),function(e){e.getFailure=function getFailure(t){if(t&&"name"in t)return"NotFoundError"===t.name||"DevicesNotFoundError"===t.name?e.NotFound:"NotAllowedError"===t.name||"PermissionDeniedError"===t.name?e.PermissionDenied:"NotReadableError"===t.name||"TrackStartError"===t.name?e.DeviceInUse:e.Other}}(ge||(ge={}));class CriticalTimers{}CriticalTimers.setTimeout=function(){return setTimeout(...arguments)},CriticalTimers.setInterval=function(){return setInterval(...arguments)},CriticalTimers.clearTimeout=function(){return clearTimeout(...arguments)},CriticalTimers.clearInterval=function(){return clearInterval(...arguments)};const ke=/version\/(\d+(\.?_?\d+)+)/i;let ye;function getBrowser(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0===e&&"undefined"==typeof navigator)return;const i=(null!=e?e:navigator.userAgent).toLowerCase();if(void 0===ye||t){const e=Se.find((e=>{let{test:t}=e;return t.test(i)}));ye=null==e?void 0:e.describe(i)}return ye}const Se=[{test:/firefox|iceweasel|fxios/i,describe:e=>({name:"Firefox",version:getMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e),os:e.toLowerCase().includes("fxios")?"iOS":void 0})},{test:/chrom|crios|crmo/i,describe:e=>({name:"Chrome",version:getMatch(/(?:chrome|chromium|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e),os:e.toLowerCase().includes("crios")?"iOS":void 0})},{test:/safari|applewebkit/i,describe:e=>({name:"Safari",version:getMatch(ke,e),os:e.includes("mobile/")?"iOS":"macOS"})}];function getMatch(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const n=t.match(e);return n&&n.length>=i&&n[i]||""}const Te="1.13.2",be=9;class VideoPreset{constructor(e,t,i,n,s){this.width=e,this.height=t,this.encoding={maxBitrate:i,maxFramerate:n,priority:s}}get resolution(){return{width:this.width,height:this.height,frameRate:this.encoding.maxFramerate,aspectRatio:this.width/this.height}}}const Ce=["vp8","h264"],we=["vp8","h264","vp9","av1"];function isBackupCodec(e){return!!Ce.find((t=>t===e))}function isCodecEqual(e,t){return(null==e?void 0:e.toLowerCase().replace(/audio\/|video\//y,""))===(null==t?void 0:t.toLowerCase().replace(/audio\/|video\//y,""))}var Ee;!function(e){e.telephone={maxBitrate:12e3},e.speech={maxBitrate:2e4},e.music={maxBitrate:32e3},e.musicStereo={maxBitrate:48e3},e.musicHighQuality={maxBitrate:64e3},e.musicHighQualityStereo={maxBitrate:96e3}}(Ee||(Ee={}));const Pe={h90:new VideoPreset(160,90,9e4,20),h180:new VideoPreset(320,180,16e4,20),h216:new VideoPreset(384,216,18e4,20),h360:new VideoPreset(640,360,45e4,20),h540:new VideoPreset(960,540,8e5,25),h720:new VideoPreset(1280,720,17e5,30),h1080:new VideoPreset(1920,1080,3e6,30),h1440:new VideoPreset(2560,1440,5e6,30),h2160:new VideoPreset(3840,2160,8e6,30)},Re={h120:new VideoPreset(160,120,7e4,20),h180:new VideoPreset(240,180,125e3,20),h240:new VideoPreset(320,240,14e4,20),h360:new VideoPreset(480,360,225e3,20),h480:new VideoPreset(640,480,5e5,20),h540:new VideoPreset(720,540,6e5,25),h720:new VideoPreset(960,720,13e5,30),h1080:new VideoPreset(1440,1080,23e5,30),h1440:new VideoPreset(1920,1440,38e5,30)},_e={h360fps3:new VideoPreset(640,360,2e5,3,"medium"),h720fps5:new VideoPreset(1280,720,4e5,5,"medium"),h720fps15:new VideoPreset(1280,720,15e5,15,"medium"),h720fps30:new VideoPreset(1280,720,2e6,30,"medium"),h1080fps15:new VideoPreset(1920,1080,25e5,15,"medium"),h1080fps30:new VideoPreset(1920,1080,4e6,30,"medium")};var Ie,De,Le,Me;!function(e){e.Connected="connected",e.Reconnecting="reconnecting",e.Reconnected="reconnected",e.Disconnected="disconnected",e.ConnectionStateChanged="connectionStateChanged",e.StateChanged="connectionStateChanged",e.MediaDevicesChanged="mediaDevicesChanged",e.ParticipantConnected="participantConnected",e.ParticipantDisconnected="participantDisconnected",e.TrackPublished="trackPublished",e.TrackSubscribed="trackSubscribed",e.TrackSubscriptionFailed="trackSubscriptionFailed",e.TrackUnpublished="trackUnpublished",e.TrackUnsubscribed="trackUnsubscribed",e.TrackMuted="trackMuted",e.TrackUnmuted="trackUnmuted",e.LocalTrackPublished="localTrackPublished",e.LocalTrackUnpublished="localTrackUnpublished",e.LocalAudioSilenceDetected="localAudioSilenceDetected",e.ActiveSpeakersChanged="activeSpeakersChanged",e.ParticipantMetadataChanged="participantMetadataChanged",e.ParticipantNameChanged="participantNameChanged",e.RoomMetadataChanged="roomMetadataChanged",e.DataReceived="dataReceived",e.ConnectionQualityChanged="connectionQualityChanged",e.TrackStreamStateChanged="trackStreamStateChanged",e.TrackSubscriptionPermissionChanged="trackSubscriptionPermissionChanged",e.TrackSubscriptionStatusChanged="trackSubscriptionStatusChanged",e.AudioPlaybackStatusChanged="audioPlaybackChanged",e.MediaDevicesError="mediaDevicesError",e.ParticipantPermissionsChanged="participantPermissionsChanged",e.SignalConnected="signalConnected",e.RecordingStatusChanged="recordingStatusChanged",e.ParticipantEncryptionStatusChanged="participantEncryptionStatusChanged",e.EncryptionError="encryptionError",e.DCBufferStatusChanged="dcBufferStatusChanged",e.ActiveDeviceChanged="activeDeviceChanged"}(Ie||(Ie={})),function(e){e.TrackPublished="trackPublished",e.TrackSubscribed="trackSubscribed",e.TrackSubscriptionFailed="trackSubscriptionFailed",e.TrackUnpublished="trackUnpublished",e.TrackUnsubscribed="trackUnsubscribed",e.TrackMuted="trackMuted",e.TrackUnmuted="trackUnmuted",e.LocalTrackPublished="localTrackPublished",e.LocalTrackUnpublished="localTrackUnpublished",e.ParticipantMetadataChanged="participantMetadataChanged",e.ParticipantNameChanged="participantNameChanged",e.DataReceived="dataReceived",e.IsSpeakingChanged="isSpeakingChanged",e.ConnectionQualityChanged="connectionQualityChanged",e.TrackStreamStateChanged="trackStreamStateChanged",e.TrackSubscriptionPermissionChanged="trackSubscriptionPermissionChanged",e.TrackSubscriptionStatusChanged="trackSubscriptionStatusChanged",e.MediaDevicesError="mediaDevicesError",e.ParticipantPermissionsChanged="participantPermissionsChanged",e.PCTrackAdded="pcTrackAdded"}(De||(De={})),function(e){e.TransportsCreated="transportsCreated",e.Connected="connected",e.Disconnected="disconnected",e.Resuming="resuming",e.Resumed="resumed",e.Restarting="restarting",e.Restarted="restarted",e.SignalResumed="signalResumed",e.SignalRestarted="signalRestarted",e.Closing="closing",e.MediaTrackAdded="mediaTrackAdded",e.ActiveSpeakersUpdate="activeSpeakersUpdate",e.DataPacketReceived="dataPacketReceived",e.RTPVideoMapUpdate="rtpVideoMapUpdate",e.DCBufferStatusChanged="dcBufferStatusChanged",e.ParticipantUpdate="participantUpdate",e.RoomUpdate="roomUpdate",e.SpeakersChanged="speakersChanged",e.StreamStateChanged="streamStateChanged",e.ConnectionQualityUpdate="connectionQualityUpdate",e.SubscriptionError="subscriptionError",e.SubscriptionPermissionUpdate="subscriptionPermissionUpdate"}(Le||(Le={})),function(e){e.Message="message",e.Muted="muted",e.Unmuted="unmuted",e.Restarted="restarted",e.Ended="ended",e.Subscribed="subscribed",e.Unsubscribed="unsubscribed",e.UpdateSettings="updateSettings",e.UpdateSubscription="updateSubscription",e.AudioPlaybackStarted="audioPlaybackStarted",e.AudioPlaybackFailed="audioPlaybackFailed",e.AudioSilenceDetected="audioSilenceDetected",e.VisibilityChanged="visibilityChanged",e.VideoDimensionsChanged="videoDimensionsChanged",e.ElementAttached="elementAttached",e.ElementDetached="elementDetached",e.UpstreamPaused="upstreamPaused",e.UpstreamResumed="upstreamResumed",e.SubscriptionPermissionChanged="subscriptionPermissionChanged",e.SubscriptionStatusChanged="subscriptionStatusChanged",e.SubscriptionFailed="subscriptionFailed"}(Me||(Me={}));const Ae=[];class Track extends ie.EventEmitter{constructor(e,t){super(),this.attachedElements=[],this.isMuted=!1,this.streamState=Track.StreamState.Active,this.isInBackground=!1,this._currentBitrate=0,this.appVisibilityChangedListener=()=>{this.backgroundTimeout&&clearTimeout(this.backgroundTimeout),"hidden"===document.visibilityState?this.backgroundTimeout=setTimeout((()=>this.handleAppVisibilityChanged()),5e3):this.handleAppVisibilityChanged()},this.setMaxListeners(100),this.kind=t,this._mediaStreamTrack=e,this._mediaStreamID=e.id,this.source=Track.Source.Unknown}get currentBitrate(){return this._currentBitrate}get mediaStreamTrack(){return this._mediaStreamTrack}get mediaStreamID(){return this._mediaStreamID}attach(e){let t="audio";this.kind===Track.Kind.Video&&(t="video"),0===this.attachedElements.length&&Track.Kind.Video&&this.addAppVisibilityListener(),e||("audio"===t&&(Ae.forEach((t=>{null!==t.parentElement||e||(e=t)})),e&&Ae.splice(Ae.indexOf(e),1)),e||(e=document.createElement(t))),this.attachedElements.includes(e)||this.attachedElements.push(e),attachToElement(this.mediaStreamTrack,e);const i=e.srcObject.getTracks();return i.some((e=>"audio"===e.kind))&&e.play().then((()=>{this.emit(Me.AudioPlaybackStarted)})).catch((t=>{"NotAllowedError"===t.name?this.emit(Me.AudioPlaybackFailed,t):p.warn("could not playback audio",t),e&&i.some((e=>"video"===e.kind))&&"NotAllowedError"===t.name&&(e.muted=!0,e.play().catch((()=>{})))})),this.emit(Me.ElementAttached,e),e}detach(e){try{if(e){detachTrack(this.mediaStreamTrack,e);const t=this.attachedElements.indexOf(e);return t>=0&&(this.attachedElements.splice(t,1),this.recycleElement(e),this.emit(Me.ElementDetached,e)),e}const t=[];return this.attachedElements.forEach((e=>{detachTrack(this.mediaStreamTrack,e),t.push(e),this.recycleElement(e),this.emit(Me.ElementDetached,e)})),this.attachedElements=[],t}finally{0===this.attachedElements.length&&this.removeAppVisibilityListener()}}stop(){this.stopMonitor(),this._mediaStreamTrack.stop()}enable(){this._mediaStreamTrack.enabled=!0}disable(){this._mediaStreamTrack.enabled=!1}stopMonitor(){this.monitorInterval&&clearInterval(this.monitorInterval)}recycleElement(e){if(e instanceof HTMLAudioElement){let t=!0;e.pause(),Ae.forEach((e=>{e.parentElement||(t=!1)})),t&&Ae.push(e)}}handleAppVisibilityChanged(){return __awaiter(this,void 0,void 0,(function*(){this.isInBackground="hidden"===document.visibilityState}))}addAppVisibilityListener(){isWeb()?(this.isInBackground="hidden"===document.visibilityState,document.addEventListener("visibilitychange",this.appVisibilityChangedListener)):this.isInBackground=!1}removeAppVisibilityListener(){isWeb()&&document.removeEventListener("visibilitychange",this.appVisibilityChangedListener)}}function attachToElement(e,t){let i,n;i=t.srcObject instanceof MediaStream?t.srcObject:new MediaStream,n="audio"===e.kind?i.getAudioTracks():i.getVideoTracks(),n.includes(e)||(n.forEach((e=>{i.removeTrack(e)})),i.addTrack(e)),t.autoplay=!0,t.muted=0===i.getAudioTracks().length,t instanceof HTMLVideoElement&&(t.playsInline=!0),t.srcObject!==i&&(t.srcObject=i,(isSafari()||isFireFox())&&t instanceof HTMLVideoElement&&setTimeout((()=>{t.srcObject=i,t.play().catch((()=>{}))}),0))}function detachTrack(e,t){if(t.srcObject instanceof MediaStream){const i=t.srcObject;i.removeTrack(e),i.getTracks().length>0?t.srcObject=i:t.srcObject=null}}function mergeDefaultOptions(e,t,i){const n=Object.assign({},e);return!0===n.audio&&(n.audio={}),!0===n.video&&(n.video={}),n.audio&&mergeObjectWithoutOverwriting(n.audio,t),n.video&&mergeObjectWithoutOverwriting(n.video,i),n}function mergeObjectWithoutOverwriting(e,t){return Object.keys(t).forEach((i=>{void 0===e[i]&&(e[i]=t[i])})),e}function constraintsForOptions(e){const t={};if(e.video)if("object"==typeof e.video){const i={},n=i,s=e.video;Object.keys(s).forEach((e=>{if("resolution"===e)mergeObjectWithoutOverwriting(n,s.resolution);else n[e]=s[e]})),t.video=i}else t.video=e.video;else t.video=!1;return e.audio?"object"==typeof e.audio?t.audio=e.audio:t.audio=!0:t.audio=!1,t}function getNewAudioContext(){const e="undefined"!=typeof window&&(window.AudioContext||window.webkitAudioContext);if(e)return new e({latencyHint:"interactive"})}function screenCaptureToDisplayMediaStreamOptions(e){var t,i;let n=null===(t=e.video)||void 0===t||t;return e.resolution&&(n="boolean"==typeof n?{}:n,n=isSafari()?Object.assign(Object.assign({},n),{width:{max:e.resolution.width},height:{max:e.resolution.height},frameRate:e.resolution.frameRate}):Object.assign(Object.assign({},n),{width:{ideal:e.resolution.width},height:{ideal:e.resolution.height},frameRate:e.resolution.frameRate})),{audio:null!==(i=e.audio)&&void 0!==i&&i,video:n,controller:e.controller,selfBrowserSurface:e.selfBrowserSurface,surfaceSwitching:e.surfaceSwitching,systemAudio:e.systemAudio}}!function(e){let t,i,n;!function(e){e.Audio="audio",e.Video="video",e.Unknown="unknown"}(t=e.Kind||(e.Kind={})),function(e){e.Camera="camera",e.Microphone="microphone",e.ScreenShare="screen_share",e.ScreenShareAudio="screen_share_audio",e.Unknown="unknown"}(i=e.Source||(e.Source={})),function(e){e.Active="active",e.Paused="paused",e.Unknown="unknown"}(n=e.StreamState||(e.StreamState={})),e.kindToProto=function kindToProto(e){switch(e){case t.Audio:return U.AUDIO;case t.Video:return U.VIDEO;default:return U.DATA}},e.kindFromProto=function kindFromProto(e){switch(e){case U.AUDIO:return t.Audio;case U.VIDEO:return t.Video;default:return t.Unknown}},e.sourceToProto=function sourceToProto(e){switch(e){case i.Camera:return O.CAMERA;case i.Microphone:return O.MICROPHONE;case i.ScreenShare:return O.SCREEN_SHARE;case i.ScreenShareAudio:return O.SCREEN_SHARE_AUDIO;default:return O.UNKNOWN}},e.sourceFromProto=function sourceFromProto(e){switch(e){case O.CAMERA:return i.Camera;case O.MICROPHONE:return i.Microphone;case O.SCREEN_SHARE:return i.ScreenShare;case O.SCREEN_SHARE_AUDIO:return i.ScreenShareAudio;default:return i.Unknown}},e.streamStateFromProto=function streamStateFromProto(e){switch(e){case me.ACTIVE:return n.Active;case me.PAUSED:return n.Paused;default:return n.Unknown}}}(Track||(Track={}));const Ue="https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension";function sleep(e){return __awaiter(this,void 0,void 0,(function*(){return new Promise((t=>setTimeout(t,e)))}))}function supportsTransceiver(){return"addTransceiver"in RTCPeerConnection.prototype}function supportsAddTrack(){return"addTrack"in RTCPeerConnection.prototype}function supportsAdaptiveStream(){return void 0!==typeof ResizeObserver&&void 0!==typeof IntersectionObserver}function supportsDynacast(){return supportsTransceiver()}function supportsAV1(){if(!("getCapabilities"in RTCRtpSender))return!1;const e=RTCRtpSender.getCapabilities("video");let t=!1;if(e)for(const i of e.codecs)if("video/AV1"===i.mimeType){t=!0;break}return t}function supportsVP9(){if(!("getCapabilities"in RTCRtpSender))return!1;const e=RTCRtpSender.getCapabilities("video");let t=!1;if(e)for(const i of e.codecs)if("video/VP9"===i.mimeType){t=!0;break}return t}function isSVCCodec(e){return"av1"===e||"vp9"===e}function supportsSetSinkId(e){return!!document&&(e||(e=document.createElement("audio")),"setSinkId"in e)}const Oe={Chrome:"100",Safari:"15",Firefox:"100"};function isBrowserSupported(){return supportsTransceiver()||supportsAddTrack()}function isFireFox(){var e;return"Firefox"===(null===(e=getBrowser())||void 0===e?void 0:e.name)}function isSafari(){var e;return"Safari"===(null===(e=getBrowser())||void 0===e?void 0:e.name)}function isMobile(){return!!isWeb()&&/Tablet|iPad|Mobile|Android|BlackBerry/.test(navigator.userAgent)}function isWeb(){return"undefined"!=typeof document}function isReactNative(){return"ReactNative"==navigator.product}function isCloud(e){return e.hostname.endsWith(".livekit.cloud")||e.hostname.endsWith(".livekit.run")}function getLKReactNativeInfo(){if(global&&global.LiveKitReactNativeGlobal)return global.LiveKitReactNativeGlobal}function getReactNativeOs(){if(!isReactNative())return;let e=getLKReactNativeInfo();return e?e.platform:void 0}function getDevicePixelRatio(){if(isWeb())return window.devicePixelRatio;if(isReactNative()){let e=getLKReactNativeInfo();if(e)return e.devicePixelRatio}return 1}function compareVersions(e,t){const i=e.split("."),n=t.split("."),s=Math.min(i.length,n.length);for(let e=0;e<s;++e){const t=parseInt(i[e],10),a=parseInt(n[e],10);if(t>a)return 1;if(t<a)return-1;if(e===s-1&&t===a)return 0}return""===e&&""!==t?-1:""===t?1:i.length==n.length?0:i.length<n.length?-1:1}function roDispatchCallback(e){for(const t of e)t.target.handleResize(t)}function ioDispatchCallback(e){for(const t of e)t.target.handleVisibilityChanged(t)}let Ne=null;const getResizeObserver=()=>(Ne||(Ne=new ResizeObserver(roDispatchCallback)),Ne);let xe=null;const getIntersectionObserver=()=>(xe||(xe=new IntersectionObserver(ioDispatchCallback,{root:null,rootMargin:"0px"})),xe);let Fe,Be;function getEmptyVideoStreamTrack(){return Fe||(Fe=createDummyVideoStreamTrack()),Fe.clone()}function createDummyVideoStreamTrack(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s=document.createElement("canvas");s.width=e,s.height=t;const a=s.getContext("2d");null==a||a.fillRect(0,0,s.width,s.height),n&&a&&(a.beginPath(),a.arc(e/2,t/2,50,0,2*Math.PI,!0),a.closePath(),a.fillStyle="grey",a.fill());const o=s.captureStream(),[c]=o.getTracks();if(!c)throw Error("Could not get empty media stream video track");return c.enabled=i,c}function getEmptyAudioStreamTrack(){if(!Be){const e=new AudioContext,t=e.createOscillator(),i=e.createGain();i.gain.setValueAtTime(0,0);const n=e.createMediaStreamDestination();if(t.connect(i),i.connect(n),t.start(),[Be]=n.stream.getAudioTracks(),!Be)throw Error("Could not get empty media stream audio track");Be.enabled=!1}return Be.clone()}class Future{constructor(e,t){this.onFinally=t,this.promise=new Promise(((t,i)=>__awaiter(this,void 0,void 0,(function*(){this.resolve=t,this.reject=i,e&&(yield e(t,i))})))).finally((()=>{var e;return null===(e=this.onFinally)||void 0===e?void 0:e.call(this)}))}}function createAudioAnalyser(e,t){const i=Object.assign({cloneTrack:!1,fftSize:2048,smoothingTimeConstant:.8,minDecibels:-100,maxDecibels:-80},t),n=getNewAudioContext();if(!n)throw new Error("Audio Context not supported on this browser");const s=i.cloneTrack?e.mediaStreamTrack.clone():e.mediaStreamTrack,a=n.createMediaStreamSource(new MediaStream([s])),o=n.createAnalyser();o.minDecibels=i.minDecibels,o.maxDecibels=i.maxDecibels,o.fftSize=i.fftSize,o.smoothingTimeConstant=i.smoothingTimeConstant,a.connect(o);const c=new Uint8Array(o.frequencyBinCount);return{calculateVolume:()=>{o.getByteFrequencyData(c);let e=0;for(const t of c)e+=Math.pow(t/255,2);return Math.sqrt(e/c.length)},analyser:o,cleanup:()=>{n.close(),i.cloneTrack&&s.stop()}}}class Mutex{constructor(){this._locking=Promise.resolve(),this._locks=0}isLocked(){return this._locks>0}lock(){let e;this._locks+=1;const t=new Promise((t=>e=()=>{this._locks-=1,t()})),i=this._locking.then((()=>e));return this._locking=this._locking.then((()=>t)),i}}function unwrapConstraint(e){if("string"==typeof e)return e;if(Array.isArray(e))return e[0];if(e.exact)return Array.isArray(e.exact)?e.exact[0]:e.exact;if(e.ideal)return Array.isArray(e.ideal)?e.ideal[0]:e.ideal;throw Error("could not unwrap constraint")}function toHttpUrl(e){return e.startsWith("ws")?e.replace(/^(ws)/,"http"):e}var Ve;!function(e){e[e.WAITING=0]="WAITING",e[e.RUNNING=1]="RUNNING",e[e.COMPLETED=2]="COMPLETED"}(Ve||(Ve={}));class AsyncQueue{constructor(){this.pendingTasks=new Map,this.taskMutex=new Mutex,this.nextTaskIndex=0}run(e){return __awaiter(this,void 0,void 0,(function*(){const t={id:this.nextTaskIndex++,enqueuedAt:Date.now(),status:Ve.WAITING};this.pendingTasks.set(t.id,t);const i=yield this.taskMutex.lock();try{return t.executedAt=Date.now(),t.status=Ve.RUNNING,yield e()}finally{t.status=Ve.COMPLETED,this.pendingTasks.delete(t.id),i()}}))}flush(){return __awaiter(this,void 0,void 0,(function*(){return this.run((()=>__awaiter(this,void 0,void 0,(function*(){}))))}))}snapshot(){return Array.from(this.pendingTasks.values())}}const Je=["syncState","trickle","offer","answer","simulate","leave"];class SignalClient{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.rtt=0,this.resetCallbacks=()=>{this.onAnswer=void 0,this.onLeave=void 0,this.onLocalTrackPublished=void 0,this.onLocalTrackUnpublished=void 0,this.onNegotiateRequested=void 0,this.onOffer=void 0,this.onRemoteMuteChanged=void 0,this.onSubscribedQualityUpdate=void 0,this.onTokenRefresh=void 0,this.onTrickle=void 0,this.onClose=void 0},this.isConnected=!1,this.isReconnecting=!1,this.useJSON=e,this.requestQueue=new AsyncQueue,this.queuedRequests=[],this.closingLock=new Mutex}join(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){this.isConnected=!1,this.options=i;return yield this.connect(e,t,i,n)}))}reconnect(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){if(!this.options)return void p.warn("attempted to reconnect without signal options being set, ignoring");this.isReconnecting=!0,this.clearPingInterval();return yield this.connect(e,t,Object.assign(Object.assign({},this.options),{reconnect:!0,sid:i,reconnectReason:n}))}))}connect(e,t,i,n){this.connectOptions=i,e=(e=function toWebsocketUrl(e){return e.startsWith("http")?e.replace(/^(http)/,"ws"):e}(e)).replace(/\/$/,""),e+="/rtc";const s=function createConnectionParams(e,t,i){var n;const s=new URLSearchParams;s.set("access_token",e),i.reconnect&&(s.set("reconnect","1"),i.sid&&s.set("sid",i.sid));s.set("auto_subscribe",i.autoSubscribe?"1":"0"),s.set("sdk",isReactNative()?"reactnative":"js"),s.set("version",t.version),s.set("protocol",t.protocol.toString()),t.deviceModel&&s.set("device_model",t.deviceModel);t.os&&s.set("os",t.os);t.osVersion&&s.set("os_version",t.osVersion);t.browser&&s.set("browser",t.browser);t.browserVersion&&s.set("browser_version",t.browserVersion);void 0!==i.publishOnly&&s.set("publish",i.publishOnly);i.adaptiveStream&&s.set("adaptive_stream","1");i.reconnectReason&&s.set("reconnect_reason",i.reconnectReason.toString());(null===(n=navigator.connection)||void 0===n?void 0:n.type)&&s.set("network",navigator.connection.type);return"?".concat(s.toString())}(t,function getClientInfo(){var e;const t=new ClientInfo({sdk:H.JS,protocol:be,version:Te});return isReactNative()&&(t.os=null!==(e=getReactNativeOs())&&void 0!==e?e:""),t}(),i);return new Promise(((t,a)=>__awaiter(this,void 0,void 0,(function*(){const abortHandler=()=>__awaiter(this,void 0,void 0,(function*(){this.close(),clearTimeout(o),a(new ConnectionError("room connection has been cancelled (signal)"))})),o=setTimeout((()=>{this.close(),a(new ConnectionError("room connection has timed out (signal)"))}),i.websocketTimeout);(null==n?void 0:n.aborted)&&abortHandler(),null==n||n.addEventListener("abort",abortHandler),p.debug("connecting to ".concat(e+s)),this.ws&&(yield this.close()),this.ws=new WebSocket(e+s),this.ws.binaryType="arraybuffer",this.ws.onopen=()=>{clearTimeout(o)},this.ws.onerror=t=>__awaiter(this,void 0,void 0,(function*(){if(this.isConnected)this.handleWSError(t);else{clearTimeout(o);try{const t=yield fetch("http".concat(e.substring(2),"/validate").concat(s));if(t.status.toFixed(0).startsWith("4")){const e=yield t.text();a(new ConnectionError(e,0,t.status))}else a(new ConnectionError("Internal error",2,t.status))}catch(e){a(new ConnectionError("server was not reachable",1))}}})),this.ws.onmessage=e=>__awaiter(this,void 0,void 0,(function*(){var s,o,c,u;let l;if("string"==typeof e.data){const t=JSON.parse(e.data);l=SignalResponse.fromJson(t)}else{if(!(e.data instanceof ArrayBuffer))return void p.error("could not decode websocket message: ".concat(typeof e.data));l=SignalResponse.fromBinary(new Uint8Array(e.data))}if(!this.isConnected){let e=!1;if("join"===(null===(s=l.message)||void 0===s?void 0:s.case)?(this.isConnected=!0,null==n||n.removeEventListener("abort",abortHandler),this.pingTimeoutDuration=l.message.value.pingTimeout,this.pingIntervalDuration=l.message.value.pingInterval,this.pingTimeoutDuration&&this.pingTimeoutDuration>0&&(p.debug("ping config",{timeout:this.pingTimeoutDuration,interval:this.pingIntervalDuration}),this.startPingInterval()),t(l.message.value)):i.reconnect?(this.isConnected=!0,null==n||n.removeEventListener("abort",abortHandler),this.startPingInterval(),"reconnect"===(null===(o=l.message)||void 0===o?void 0:o.case)?t(null===(c=l.message)||void 0===c?void 0:c.value):(t(),e=!0)):i.reconnect||a(new ConnectionError("did not receive join response, got ".concat(null===(u=l.message)||void 0===u?void 0:u.case," instead"))),!e)return}this.signalLatency&&(yield sleep(this.signalLatency)),this.handleSignalResponse(l)})),this.ws.onclose=e=>{p.warn("websocket closed",{ev:e}),this.handleOnClose(e.reason)}}))))}close(){return __awaiter(this,void 0,void 0,(function*(){const e=yield this.closingLock.lock();try{if(this.isConnected=!1,this.ws){this.ws.onmessage=null,this.ws.onopen=null,this.ws.onclose=null;const e=new Promise((e=>{this.ws?this.ws.onclose=()=>{e()}:e()}));this.ws.readyState<this.ws.CLOSING&&(this.ws.close(),yield Promise.race([e,sleep(250)])),this.ws=void 0}}finally{this.clearPingInterval(),e()}}))}sendOffer(e){p.debug("sending offer",e),this.sendRequest({case:"offer",value:toProtoSessionDescription(e)})}sendAnswer(e){return p.debug("sending answer"),this.sendRequest({case:"answer",value:toProtoSessionDescription(e)})}sendIceCandidate(e,t){return p.trace("sending ice candidate",e),this.sendRequest({case:"trickle",value:new TrickleRequest({candidateInit:JSON.stringify(e),target:t})})}sendMuteTrack(e,t){return this.sendRequest({case:"mute",value:new MuteTrackRequest({sid:e,muted:t})})}sendAddTrack(e){return this.sendRequest({case:"addTrack",value:e})}sendUpdateLocalMetadata(e,t){return this.sendRequest({case:"updateMetadata",value:new UpdateParticipantMetadata({metadata:e,name:t})})}sendUpdateTrackSettings(e){this.sendRequest({case:"trackSetting",value:e})}sendUpdateSubscription(e){return this.sendRequest({case:"subscription",value:e})}sendSyncState(e){return this.sendRequest({case:"syncState",value:e})}sendUpdateVideoLayers(e,t){return this.sendRequest({case:"updateLayers",value:new UpdateVideoLayers({trackSid:e,layers:t})})}sendUpdateSubscriptionPermissions(e,t){return this.sendRequest({case:"subscriptionPermission",value:new SubscriptionPermission({allParticipants:e,trackPermissions:t})})}sendSimulateScenario(e){return this.sendRequest({case:"simulate",value:e})}sendPing(){return Promise.all([this.sendRequest({case:"ping",value:k.parse(Date.now())}),this.sendRequest({case:"pingReq",value:new Ping({timestamp:k.parse(Date.now()),rtt:k.parse(this.rtt)})})])}sendLeave(){return this.sendRequest({case:"leave",value:new LeaveRequest({canReconnect:!1,reason:B.CLIENT_INITIATED})})}sendRequest(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return __awaiter(this,void 0,void 0,(function*(){const i=!t&&!function canPassThroughQueue(e){const t=Je.indexOf(e.case)>=0;return p.trace("request allowed to bypass queue:",{canPass:t,req:e}),t}(e);if(i&&this.isReconnecting)return void this.queuedRequests.push((()=>__awaiter(this,void 0,void 0,(function*(){yield this.sendRequest(e,!0)}))));if(t||(yield this.requestQueue.flush()),this.signalLatency&&(yield sleep(this.signalLatency)),!this.ws||this.ws.readyState!==this.ws.OPEN)return void p.error("cannot send signal request before connected, type: ".concat(null==e?void 0:e.case));const n=new SignalRequest({message:e});try{this.useJSON?this.ws.send(n.toJsonString()):this.ws.send(n.toBinary())}catch(e){p.error("error sending signal message",{error:e})}}))}handleSignalResponse(e){var t,i;const n=e.message;if(null!=n)if("answer"===n.case){const e=fromProtoSessionDescription(n.value);this.onAnswer&&this.onAnswer(e)}else if("offer"===n.case){const e=fromProtoSessionDescription(n.value);this.onOffer&&this.onOffer(e)}else if("trickle"===n.case){const e=JSON.parse(n.value.candidateInit);this.onTrickle&&this.onTrickle(e,n.value.target)}else"update"===n.case?this.onParticipantUpdate&&this.onParticipantUpdate(null!==(t=n.value.participants)&&void 0!==t?t:[]):"trackPublished"===n.case?this.onLocalTrackPublished&&this.onLocalTrackPublished(n.value):"speakersChanged"===n.case?this.onSpeakersChanged&&this.onSpeakersChanged(null!==(i=n.value.speakers)&&void 0!==i?i:[]):"leave"===n.case?this.onLeave&&this.onLeave(n.value):"mute"===n.case?this.onRemoteMuteChanged&&this.onRemoteMuteChanged(n.value.sid,n.value.muted):"roomUpdate"===n.case?this.onRoomUpdate&&n.value.room&&this.onRoomUpdate(n.value.room):"connectionQuality"===n.case?this.onConnectionQuality&&this.onConnectionQuality(n.value):"streamStateUpdate"===n.case?this.onStreamStateUpdate&&this.onStreamStateUpdate(n.value):"subscribedQualityUpdate"===n.case?this.onSubscribedQualityUpdate&&this.onSubscribedQualityUpdate(n.value):"subscriptionPermissionUpdate"===n.case?this.onSubscriptionPermissionUpdate&&this.onSubscriptionPermissionUpdate(n.value):"refreshToken"===n.case?this.onTokenRefresh&&this.onTokenRefresh(n.value):"trackUnpublished"===n.case?this.onLocalTrackUnpublished&&this.onLocalTrackUnpublished(n.value):"subscriptionResponse"===n.case?this.onSubscriptionError&&this.onSubscriptionError(n.value):"pong"===n.case?this.resetPingTimeout():"pongResp"===n.case?(this.rtt=Date.now()-Number.parseInt(n.value.lastPingTimestamp.toString()),this.resetPingTimeout()):p.debug("unsupported message",n);else p.debug("received unsupported message")}setReconnected(){for(;this.queuedRequests.length>0;){const e=this.queuedRequests.shift();e&&this.requestQueue.run(e)}this.isReconnecting=!1}handleOnClose(e){return __awaiter(this,void 0,void 0,(function*(){if(!this.isConnected)return;const t=this.onClose;yield this.close(),p.debug("websocket connection closed: ".concat(e)),t&&t(e)}))}handleWSError(e){p.error("websocket error",e)}resetPingTimeout(){this.clearPingTimeout(),this.pingTimeoutDuration?this.pingTimeout=CriticalTimers.setTimeout((()=>{p.warn("ping timeout triggered. last pong received at: ".concat(new Date(Date.now()-1e3*this.pingTimeoutDuration).toUTCString())),this.handleOnClose("ping timeout")}),1e3*this.pingTimeoutDuration):p.warn("ping timeout duration not set")}clearPingTimeout(){this.pingTimeout&&CriticalTimers.clearTimeout(this.pingTimeout)}startPingInterval(){this.clearPingInterval(),this.resetPingTimeout(),this.pingIntervalDuration?(p.debug("start ping interval"),this.pingInterval=CriticalTimers.setInterval((()=>{this.sendPing()}),1e3*this.pingIntervalDuration)):p.warn("ping interval duration not set")}clearPingInterval(){p.debug("clearing ping interval"),this.clearPingTimeout(),this.pingInterval&&CriticalTimers.clearInterval(this.pingInterval)}}function fromProtoSessionDescription(e){const t={type:"offer",sdp:e.sdp};switch(e.type){case"answer":case"offer":case"pranswer":case"rollback":t.type=e.type}return t}function toProtoSessionDescription(e){return new SessionDescription({sdp:e.sdp,type:e.type})}const qe="AES-GCM",je="lk_e2ee",We={sharedKey:!1,ratchetSalt:"LKFrameEncryptionKey",ratchetWindowSize:8,failureTolerance:10};var Ke,Ge,He,Qe;function isE2EESupported(){return isInsertableStreamSupported()||isScriptTransformSupported()}function isScriptTransformSupported(){return void 0!==window.RTCRtpScriptTransform}function isInsertableStreamSupported(){return void 0!==window.RTCRtpSender&&void 0!==window.RTCRtpSender.prototype.createEncodedStreams}function isVideoFrame(e){return"type"in e}function importKey(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:qe},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"encrypt";return __awaiter(this,void 0,void 0,(function*(){return crypto.subtle.importKey("raw",e,t,!1,"derive"===i?["deriveBits","deriveKey"]:["encrypt","decrypt"])}))}function createKeyMaterialFromString(e){return __awaiter(this,void 0,void 0,(function*(){let t=new TextEncoder;return yield crypto.subtle.importKey("raw",t.encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])}))}function createKeyMaterialFromBuffer(e){return __awaiter(this,void 0,void 0,(function*(){return yield crypto.subtle.importKey("raw",e,"HKDF",!1,["deriveBits","deriveKey"])}))}function getAlgoOptions(e,t){const i=(new TextEncoder).encode(t);switch(e){case"HKDF":return{name:"HKDF",salt:i,hash:"SHA-256",info:new ArrayBuffer(128)};case"PBKDF2":return{name:"PBKDF2",salt:i,hash:"SHA-256",iterations:1e5};default:throw new Error("algorithm ".concat(e," is currently unsupported"))}}function deriveKeys(e,t){return __awaiter(this,void 0,void 0,(function*(){const i=getAlgoOptions(e.algorithm.name,t),n=yield crypto.subtle.deriveKey(i,e,{name:qe,length:128},!1,["encrypt","decrypt"]);return{material:e,encryptionKey:n}}))}function createE2EEKey(){return window.crypto.getRandomValues(new Uint8Array(32))}function mimeTypeToVideoCodecString(e){const t=e.split("/")[1].toLowerCase();if(!we.includes(t))throw Error("Video codec not supported: ".concat(t));return t}function ratchet(e,t){return __awaiter(this,void 0,void 0,(function*(){const i=getAlgoOptions(e.algorithm.name,t);return crypto.subtle.deriveBits(i,e,256)}))}!function(e){e.SetKey="setKey",e.RatchetRequest="ratchetRequest",e.KeyRatcheted="keyRatcheted"}(Ke||(Ke={})),function(e){e.KeyRatcheted="keyRatcheted"}(Ge||(Ge={})),function(e){e.ParticipantEncryptionStatusChanged="participantEncryptionStatusChanged",e.EncryptionError="encryptionError"}(He||(He={})),function(e){e.Error="cryptorError"}(Qe||(Qe={}));class BaseKeyProvider extends ie.EventEmitter{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.onKeyRatcheted=(e,t)=>{p.debug("key ratcheted event received",{material:e,keyIndex:t})},this.keyInfoMap=new Map,this.options=Object.assign(Object.assign({},We),e),this.on(Ke.KeyRatcheted,this.onKeyRatcheted)}onSetEncryptionKey(e,t,i){const n={key:e,participantIdentity:t,keyIndex:i};this.keyInfoMap.set("".concat(null!=t?t:"shared","-").concat(null!=i?i:0),n),this.emit(Ke.SetKey,n)}getKeys(){return Array.from(this.keyInfoMap.values())}getOptions(){return this.options}ratchetKey(e,t){this.emit(Ke.RatchetRequest,e,t)}}class ExternalE2EEKeyProvider extends BaseKeyProvider{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(Object.assign(Object.assign({},e),{sharedKey:!0,ratchetWindowSize:0,failureTolerance:-1}))}setKey(e){return __awaiter(this,void 0,void 0,(function*(){const t="string"==typeof e?yield createKeyMaterialFromString(e):yield createKeyMaterialFromBuffer(e);this.onSetEncryptionKey(t)}))}}function r(e,t,i){var n,s,a;void 0===t&&(t=50),void 0===i&&(i={});var o=null!=(n=i.isImmediate)&&n,c=null!=(s=i.callback)&&s,u=i.maxWait,l=Date.now(),h=[];function f(){if(void 0!==u){var e=Date.now()-l;if(e+t>=u)return u-e}return t}var d=function(){var t=[].slice.call(arguments),i=this;return new Promise((function(n,s){var u=o&&void 0===a;if(void 0!==a&&clearTimeout(a),a=setTimeout((function(){if(a=void 0,l=Date.now(),!o){var n=e.apply(i,t);c&&c(n),h.forEach((function(e){return(0,e.resolve)(n)})),h=[]}}),f()),u){var p=e.apply(i,t);return c&&c(p),n(p)}h.push({resolve:n,reject:s})}))};return d.cancel=function(e){void 0!==a&&clearTimeout(a),h.forEach((function(t){return(0,t.reject)(e)})),h=[]},d}const ze="default";class DeviceManager{static getInstance(){return void 0===this.instance&&(this.instance=new DeviceManager),this.instance}getDevices(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i;return __awaiter(this,void 0,void 0,(function*(){if((null===(i=DeviceManager.userMediaPromiseMap)||void 0===i?void 0:i.size)>0){p.debug("awaiting getUserMedia promise");try{e?yield DeviceManager.userMediaPromiseMap.get(e):yield Promise.all(DeviceManager.userMediaPromiseMap.values())}catch(e){p.warn("error waiting for media permissons")}}let n=yield navigator.mediaDevices.enumerateDevices();if(t&&(!isSafari()||!this.hasDeviceInUse(e))){if(0===n.length||n.some((t=>{const i=""===t.label,n=!e||t.kind===e;return i&&n}))){const t={video:"audioinput"!==e&&"audiooutput"!==e,audio:"videoinput"!==e},i=yield navigator.mediaDevices.getUserMedia(t);n=yield navigator.mediaDevices.enumerateDevices(),i.getTracks().forEach((e=>{e.stop()}))}}return e&&(n=n.filter((t=>t.kind===e))),n}))}normalizeDeviceId(e,t,i){return __awaiter(this,void 0,void 0,(function*(){if(t!==ze)return t;const n=(yield this.getDevices(e)).find((e=>e.groupId===i&&e.deviceId!==ze));return null==n?void 0:n.deviceId}))}hasDeviceInUse(e){return e?DeviceManager.userMediaPromiseMap.has(e):DeviceManager.userMediaPromiseMap.size>0}}DeviceManager.mediaDeviceKinds=["audioinput","audiooutput","videoinput"],DeviceManager.userMediaPromiseMap=new Map;class LocalTrack extends Track{get constraints(){return this._constraints}constructor(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];super(e,t),this._isUpstreamPaused=!1,this.handleTrackMuteEvent=()=>this.debouncedTrackMuteHandler().catch((()=>p.debug("track mute bounce got cancelled by an unmute event"))),this.debouncedTrackMuteHandler=r((()=>__awaiter(this,void 0,void 0,(function*(){yield this.pauseUpstream()}))),5e3),this.handleTrackUnmuteEvent=()=>__awaiter(this,void 0,void 0,(function*(){this.debouncedTrackMuteHandler.cancel("unmute"),yield this.resumeUpstream()})),this.handleEnded=()=>{this.isInBackground&&(this.reacquireTrack=!0),this._mediaStreamTrack.removeEventListener("mute",this.handleTrackMuteEvent),this._mediaStreamTrack.removeEventListener("unmute",this.handleTrackUnmuteEvent),this.emit(Me.Ended,this)},this.reacquireTrack=!1,this.providedByUser=n,this.muteLock=new Mutex,this.pauseUpstreamLock=new Mutex,this.processorLock=new Mutex,this.setMediaStreamTrack(e,!0),this._constraints=e.getConstraints(),i&&(this._constraints=i)}get id(){return this._mediaStreamTrack.id}get dimensions(){if(this.kind!==Track.Kind.Video)return;const{width:e,height:t}=this._mediaStreamTrack.getSettings();return e&&t?{width:e,height:t}:void 0}get isUpstreamPaused(){return this._isUpstreamPaused}get isUserProvided(){return this.providedByUser}get mediaStreamTrack(){var e,t;return null!==(t=null===(e=this.processor)||void 0===e?void 0:e.processedTrack)&&void 0!==t?t:this._mediaStreamTrack}setMediaStreamTrack(e,t){return __awaiter(this,void 0,void 0,(function*(){if(e===this._mediaStreamTrack&&!t)return;let i;if(this._mediaStreamTrack&&(this.attachedElements.forEach((e=>{detachTrack(this._mediaStreamTrack,e)})),this._mediaStreamTrack.removeEventListener("ended",this.handleEnded),this._mediaStreamTrack.removeEventListener("mute",this.handleTrackMuteEvent),this._mediaStreamTrack.removeEventListener("unmute",this.handleTrackUnmuteEvent),this.providedByUser||this._mediaStreamTrack===e||this._mediaStreamTrack.stop()),this.mediaStream=new MediaStream([e]),e&&(e.addEventListener("ended",this.handleEnded),e.addEventListener("mute",this.handleTrackMuteEvent),e.addEventListener("unmute",this.handleTrackUnmuteEvent),this._constraints=e.getConstraints()),this.processor&&e&&this.processorElement){if(p.debug("restarting processor"),"unknown"===this.kind)throw TypeError("cannot set processor on track of unknown kind");attachToElement(e,this.processorElement),yield this.processor.restart({track:e,kind:this.kind,element:this.processorElement}),i=this.processor.processedTrack}this.sender&&(yield this.sender.replaceTrack(null!=i?i:e)),this._mediaStreamTrack=e,e&&(this._mediaStreamTrack.enabled=!this.isMuted,yield this.resumeUpstream(),this.attachedElements.forEach((t=>{attachToElement(null!=i?i:e,t)})))}))}waitForDimensions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return __awaiter(this,void 0,void 0,(function*(){if(this.kind===Track.Kind.Audio)throw new Error("cannot get dimensions for audio tracks");const t=Date.now();for(;Date.now()-t<e;){const e=this.dimensions;if(e)return e;yield sleep(50)}throw new TrackInvalidError("unable to get track dimensions after timeout")}))}getDeviceId(){return __awaiter(this,void 0,void 0,(function*(){if(this.source===Track.Source.ScreenShare)return;const{deviceId:e,groupId:t}=this._mediaStreamTrack.getSettings(),i=this.kind===Track.Kind.Audio?"audioinput":"videoinput";return DeviceManager.getInstance().normalizeDeviceId(i,e,t)}))}mute(){return __awaiter(this,void 0,void 0,(function*(){return this.setTrackMuted(!0),this}))}unmute(){return __awaiter(this,void 0,void 0,(function*(){return this.setTrackMuted(!1),this}))}replaceTrack(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return __awaiter(this,void 0,void 0,(function*(){if(!this.sender)throw new TrackInvalidError("unable to replace an unpublished track");return p.debug("replace MediaStreamTrack"),yield this.setMediaStreamTrack(e),this.providedByUser=t,this.processor&&(yield this.stopProcessor()),this}))}restart(e){return __awaiter(this,void 0,void 0,(function*(){e||(e=this._constraints),p.debug("restarting track with constraints",e);const t={audio:!1,video:!1};this.kind===Track.Kind.Video?t.video=e:t.audio=e,this.attachedElements.forEach((e=>{detachTrack(this.mediaStreamTrack,e)})),this._mediaStreamTrack.removeEventListener("ended",this.handleEnded),this._mediaStreamTrack.stop();const i=(yield navigator.mediaDevices.getUserMedia(t)).getTracks()[0];return i.addEventListener("ended",this.handleEnded),p.debug("re-acquired MediaStreamTrack"),yield this.setMediaStreamTrack(i),this._constraints=e,this.emit(Me.Restarted,this),this}))}setTrackMuted(e){p.debug("setting ".concat(this.kind," track ").concat(e?"muted":"unmuted")),this.isMuted===e&&this._mediaStreamTrack.enabled!==e||(this.isMuted=e,this._mediaStreamTrack.enabled=!e,this.emit(e?Me.Muted:Me.Unmuted,this))}get needsReAcquisition(){return"live"!==this._mediaStreamTrack.readyState||this._mediaStreamTrack.muted||!this._mediaStreamTrack.enabled||this.reacquireTrack}handleAppVisibilityChanged(){const e=Object.create(null,{handleAppVisibilityChanged:{get:()=>super.handleAppVisibilityChanged}});return __awaiter(this,void 0,void 0,(function*(){yield e.handleAppVisibilityChanged.call(this),isMobile()&&(p.debug("visibility changed, is in Background: ".concat(this.isInBackground)),this.isInBackground||!this.needsReAcquisition||this.isUserProvided||this.isMuted||(p.debug("track needs to be reacquired, restarting ".concat(this.source)),yield this.restart(),this.reacquireTrack=!1))}))}stop(){var e;super.stop(),this._mediaStreamTrack.removeEventListener("ended",this.handleEnded),this._mediaStreamTrack.removeEventListener("mute",this.handleTrackMuteEvent),this._mediaStreamTrack.removeEventListener("unmute",this.handleTrackUnmuteEvent),null===(e=this.processor)||void 0===e||e.destroy(),this.processor=void 0}pauseUpstream(){return __awaiter(this,void 0,void 0,(function*(){const e=yield this.pauseUpstreamLock.lock();try{if(!0===this._isUpstreamPaused)return;if(!this.sender)return void p.warn("unable to pause upstream for an unpublished track");this._isUpstreamPaused=!0,this.emit(Me.UpstreamPaused,this);const t=getBrowser();if("Safari"===(null==t?void 0:t.name)&&compareVersions(t.version,"12.0")<0)throw new DeviceUnsupportedError("pauseUpstream is not supported on Safari < 12.");yield this.sender.replaceTrack(null)}finally{e()}}))}resumeUpstream(){return __awaiter(this,void 0,void 0,(function*(){const e=yield this.pauseUpstreamLock.lock();try{if(!1===this._isUpstreamPaused)return;if(!this.sender)return void p.warn("unable to resume upstream for an unpublished track");this._isUpstreamPaused=!1,this.emit(Me.UpstreamResumed,this),yield this.sender.replaceTrack(this._mediaStreamTrack)}finally{e()}}))}setProcessor(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var i,n;return __awaiter(this,void 0,void 0,(function*(){const s=yield this.processorLock.lock();try{if(p.debug("setting up processor"),this.processor&&(yield this.stopProcessor()),"unknown"===this.kind)throw TypeError("cannot set processor on track of unknown kind");this.processorElement=null!==(i=this.processorElement)&&void 0!==i?i:document.createElement(this.kind),this.processorElement.muted=!0,attachToElement(this._mediaStreamTrack,this.processorElement),this.processorElement.play().catch((e=>p.error("failed to play processor element",{error:e})));const a={kind:this.kind,track:this._mediaStreamTrack,element:this.processorElement};if(yield e.init(a),this.processor=e,this.processor.processedTrack){for(const e of this.attachedElements)e!==this.processorElement&&t&&(detachTrack(this._mediaStreamTrack,e),attachToElement(this.processor.processedTrack,e));yield null===(n=this.sender)||void 0===n?void 0:n.replaceTrack(this.processor.processedTrack)}}finally{s()}}))}getProcessor(){return this.processor}stopProcessor(){var e,t;return __awaiter(this,void 0,void 0,(function*(){this.processor&&(p.debug("stopping processor"),null===(e=this.processor.processedTrack)||void 0===e||e.stop(),yield this.processor.destroy(),this.processor=void 0,null===(t=this.processorElement)||void 0===t||t.remove(),this.processorElement=void 0,yield this.restart())}))}}class E2EEManager extends ie.EventEmitter{constructor(e){super(),this.onWorkerMessage=e=>{var t,i;const{kind:n,data:s}=e.data;switch(n){case"error":p.error(s.error.message),this.emit(He.EncryptionError,s.error);break;case"initAck":s.enabled&&this.keyProvider.getKeys().forEach((e=>{this.postKey(e)}));break;case"enable":if(this.encryptionEnabled!==s.enabled&&s.participantIdentity===(null===(t=this.room)||void 0===t?void 0:t.localParticipant.identity))this.emit(He.ParticipantEncryptionStatusChanged,s.enabled,this.room.localParticipant),this.encryptionEnabled=s.enabled;else if(s.participantIdentity){const e=null===(i=this.room)||void 0===i?void 0:i.getParticipantByIdentity(s.participantIdentity);if(!e)throw TypeError("couldn't set encryption status, participant not found".concat(s.participantIdentity));this.emit(He.ParticipantEncryptionStatusChanged,s.enabled,e)}this.encryptionEnabled&&this.keyProvider.getKeys().forEach((e=>{this.postKey(e)}));break;case"ratchetKey":this.keyProvider.emit(Ke.KeyRatcheted,s.material,s.keyIndex)}},this.onWorkerError=e=>{p.error("e2ee worker encountered an error:",{error:e.error}),this.emit(He.EncryptionError,e.error)},this.keyProvider=e.keyProvider,this.worker=e.worker,this.encryptionEnabled=!1}setup(e){if(!isE2EESupported())throw new DeviceUnsupportedError("tried to setup end-to-end encryption on an unsupported browser");if(p.info("setting up e2ee"),e!==this.room){this.room=e,this.setupEventListeners(e,this.keyProvider);const t={kind:"init",data:{keyProviderOptions:this.keyProvider.getOptions()}};this.worker&&(p.info("initializing worker",{worker:this.worker}),this.worker.onmessage=this.onWorkerMessage,this.worker.onerror=this.onWorkerError,this.worker.postMessage(t))}}setParticipantCryptorEnabled(e,t){p.debug("set e2ee to ".concat(e," for participant ").concat(t)),this.postEnable(e,t)}setSifTrailer(e){e&&0!==e.length?this.postSifTrailer(e):p.warn("ignoring server sent trailer as it's empty")}setupEngine(e){e.on(Le.RTPVideoMapUpdate,(e=>{this.postRTPMap(e)}))}setupEventListeners(e,t){e.on(Ie.TrackPublished,((e,t)=>this.setParticipantCryptorEnabled(e.trackInfo.encryption!==W.NONE,t.identity))),e.on(Ie.ConnectionStateChanged,(t=>{t===Rt.Connected&&e.participants.forEach((e=>{e.tracks.forEach((t=>{this.setParticipantCryptorEnabled(t.trackInfo.encryption!==W.NONE,e.identity)}))}))})).on(Ie.TrackUnsubscribed,((e,t,i)=>{var n;const s={kind:"removeTransform",data:{participantIdentity:i.identity,trackId:e.mediaStreamID}};null===(n=this.worker)||void 0===n||n.postMessage(s)})).on(Ie.TrackSubscribed,((e,t,i)=>{this.setupE2EEReceiver(e,i.identity,t.trackInfo)})).on(Ie.SignalConnected,(()=>{if(!this.room)throw new TypeError("expected room to be present on signal connect");this.setParticipantCryptorEnabled(this.room.localParticipant.isE2EEEnabled,this.room.localParticipant.identity),t.getKeys().forEach((e=>{this.postKey(e)}))})),e.localParticipant.on(De.LocalTrackPublished,(e=>__awaiter(this,void 0,void 0,(function*(){this.setupE2EESender(e.track,e.track.sender)})))),t.on(Ke.SetKey,(e=>this.postKey(e))).on(Ke.RatchetRequest,((e,t)=>this.postRatchetRequest(e,t)))}postRatchetRequest(e,t){if(!this.worker)throw Error("could not ratchet key, worker is missing");const i={kind:"ratchetRequest",data:{participantIdentity:e,keyIndex:t}};this.worker.postMessage(i)}postKey(e){let{key:t,participantIdentity:i,keyIndex:n}=e;var s;if(!this.worker)throw Error("could not set key, worker is missing");const a={kind:"setKey",data:{participantIdentity:i,isPublisher:i===(null===(s=this.room)||void 0===s?void 0:s.localParticipant.identity),key:t,keyIndex:n}};this.worker.postMessage(a)}postEnable(e,t){if(!this.worker)throw new ReferenceError("failed to enable e2ee, worker is not ready");{const i={kind:"enable",data:{enabled:e,participantIdentity:t}};this.worker.postMessage(i)}}postRTPMap(e){var t;if(!this.worker)throw TypeError("could not post rtp map, worker is missing");if(!(null===(t=this.room)||void 0===t?void 0:t.localParticipant.identity))throw TypeError("could not post rtp map, local participant identity is missing");const i={kind:"setRTPMap",data:{map:e,participantIdentity:this.room.localParticipant.identity}};this.worker.postMessage(i)}postSifTrailer(e){if(!this.worker)throw Error("could not post SIF trailer, worker is missing");const t={kind:"setSifTrailer",data:{trailer:e}};this.worker.postMessage(t)}setupE2EEReceiver(e,t,i){if(e.receiver){if(!(null==i?void 0:i.mimeType)||""===i.mimeType)throw new TypeError("MimeType missing from trackInfo, cannot set up E2EE cryptor");this.handleReceiver(e.receiver,e.mediaStreamID,t,"video"===e.kind?mimeTypeToVideoCodecString(i.mimeType):void 0)}}setupE2EESender(e,t){e instanceof LocalTrack&&t?this.handleSender(t,e.mediaStreamID,void 0):t||p.warn("early return because sender is not ready")}handleReceiver(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){if(this.worker){if(isScriptTransformSupported()){const s={kind:"decode",participantIdentity:i,trackId:t,codec:n};e.transform=new RTCRtpScriptTransform(this.worker,s)}else{if(je in e&&n){const e={kind:"updateCodec",data:{trackId:t,codec:n,participantIdentity:i}};return void this.worker.postMessage(e)}let s=e.writableStream,a=e.readableStream;if(!s||!a){const t=e.createEncodedStreams();e.writableStream=t.writable,s=t.writable,e.readableStream=t.readable,a=t.readable}const o={kind:"decode",data:{readableStream:a,writableStream:s,trackId:t,codec:n,participantIdentity:i}};this.worker.postMessage(o,[a,s])}e.lk_e2ee=!0}}))}handleSender(e,t,i){var n;if(!(je in e)&&this.worker){if(!(null===(n=this.room)||void 0===n?void 0:n.localParticipant.identity)||""===this.room.localParticipant.identity)throw TypeError("local identity needs to be known in order to set up encrypted sender");if(isScriptTransformSupported()){p.info("initialize script transform");const n={kind:"encode",participantIdentity:this.room.localParticipant.identity,trackId:t,codec:i};e.transform=new RTCRtpScriptTransform(this.worker,n)}else{p.info("initialize encoded streams");const n=e.createEncodedStreams(),s={kind:"encode",data:{readableStream:n.readable,writableStream:n.writable,codec:i,trackId:t,participantIdentity:this.room.localParticipant.identity}};this.worker.postMessage(s,[n.readable,n.writable])}e.lk_e2ee=!0}}}var $e={},Ye={exports:{}},Xe=Ye.exports={v:[{name:"version",reg:/^(\d*)$/}],o:[{name:"origin",reg:/^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,names:["username","sessionId","sessionVersion","netType","ipVer","address"],format:"%s %s %d %s IP%d %s"}],s:[{name:"name"}],i:[{name:"description"}],u:[{name:"uri"}],e:[{name:"email"}],p:[{name:"phone"}],z:[{name:"timezones"}],r:[{name:"repeats"}],t:[{name:"timing",reg:/^(\d*) (\d*)/,names:["start","stop"],format:"%d %d"}],c:[{name:"connection",reg:/^IN IP(\d) (\S*)/,names:["version","ip"],format:"IN IP%d %s"}],b:[{push:"bandwidth",reg:/^(TIAS|AS|CT|RR|RS):(\d*)/,names:["type","limit"],format:"%s:%s"}],m:[{reg:/^(\w*) (\d*) ([\w/]*)(?: (.*))?/,names:["type","port","protocol","payloads"],format:"%s %d %s %s"}],a:[{push:"rtp",reg:/^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,names:["payload","codec","rate","encoding"],format:function(e){return e.encoding?"rtpmap:%d %s/%s/%s":e.rate?"rtpmap:%d %s/%s":"rtpmap:%d %s"}},{push:"fmtp",reg:/^fmtp:(\d*) ([\S| ]*)/,names:["payload","config"],format:"fmtp:%d %s"},{name:"control",reg:/^control:(.*)/,format:"control:%s"},{name:"rtcp",reg:/^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,names:["port","netType","ipVer","address"],format:function(e){return null!=e.address?"rtcp:%d %s IP%d %s":"rtcp:%d"}},{push:"rtcpFbTrrInt",reg:/^rtcp-fb:(\*|\d*) trr-int (\d*)/,names:["payload","value"],format:"rtcp-fb:%s trr-int %d"},{push:"rtcpFb",reg:/^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,names:["payload","type","subtype"],format:function(e){return null!=e.subtype?"rtcp-fb:%s %s %s":"rtcp-fb:%s %s"}},{push:"ext",reg:/^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,names:["value","direction","encrypt-uri","uri","config"],format:function(e){return"extmap:%d"+(e.direction?"/%s":"%v")+(e["encrypt-uri"]?" %s":"%v")+" %s"+(e.config?" %s":"")}},{name:"extmapAllowMixed",reg:/^(extmap-allow-mixed)/},{push:"crypto",reg:/^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,names:["id","suite","config","sessionConfig"],format:function(e){return null!=e.sessionConfig?"crypto:%d %s %s %s":"crypto:%d %s %s"}},{name:"setup",reg:/^setup:(\w*)/,format:"setup:%s"},{name:"connectionType",reg:/^connection:(new|existing)/,format:"connection:%s"},{name:"mid",reg:/^mid:([^\s]*)/,format:"mid:%s"},{name:"msid",reg:/^msid:(.*)/,format:"msid:%s"},{name:"ptime",reg:/^ptime:(\d*(?:\.\d*)*)/,format:"ptime:%d"},{name:"maxptime",reg:/^maxptime:(\d*(?:\.\d*)*)/,format:"maxptime:%d"},{name:"direction",reg:/^(sendrecv|recvonly|sendonly|inactive)/},{name:"icelite",reg:/^(ice-lite)/},{name:"iceUfrag",reg:/^ice-ufrag:(\S*)/,format:"ice-ufrag:%s"},{name:"icePwd",reg:/^ice-pwd:(\S*)/,format:"ice-pwd:%s"},{name:"fingerprint",reg:/^fingerprint:(\S*) (\S*)/,names:["type","hash"],format:"fingerprint:%s %s"},{push:"candidates",reg:/^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,names:["foundation","component","transport","priority","ip","port","type","raddr","rport","tcptype","generation","network-id","network-cost"],format:function(e){var t="candidate:%s %d %s %d %s %d typ %s";return t+=null!=e.raddr?" raddr %s rport %d":"%v%v",t+=null!=e.tcptype?" tcptype %s":"%v",null!=e.generation&&(t+=" generation %d"),t+=null!=e["network-id"]?" network-id %d":"%v",t+=null!=e["network-cost"]?" network-cost %d":"%v"}},{name:"endOfCandidates",reg:/^(end-of-candidates)/},{name:"remoteCandidates",reg:/^remote-candidates:(.*)/,format:"remote-candidates:%s"},{name:"iceOptions",reg:/^ice-options:(\S*)/,format:"ice-options:%s"},{push:"ssrcs",reg:/^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,names:["id","attribute","value"],format:function(e){var t="ssrc:%d";return null!=e.attribute&&(t+=" %s",null!=e.value&&(t+=":%s")),t}},{push:"ssrcGroups",reg:/^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,names:["semantics","ssrcs"],format:"ssrc-group:%s %s"},{name:"msidSemantic",reg:/^msid-semantic:\s?(\w*) (\S*)/,names:["semantic","token"],format:"msid-semantic: %s %s"},{push:"groups",reg:/^group:(\w*) (.*)/,names:["type","mids"],format:"group:%s %s"},{name:"rtcpMux",reg:/^(rtcp-mux)/},{name:"rtcpRsize",reg:/^(rtcp-rsize)/},{name:"sctpmap",reg:/^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,names:["sctpmapNumber","app","maxMessageSize"],format:function(e){return null!=e.maxMessageSize?"sctpmap:%s %s %s":"sctpmap:%s %s"}},{name:"xGoogleFlag",reg:/^x-google-flag:([^\s]*)/,format:"x-google-flag:%s"},{push:"rids",reg:/^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,names:["id","direction","params"],format:function(e){return e.params?"rid:%s %s %s":"rid:%s %s"}},{push:"imageattrs",reg:new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),names:["pt","dir1","attrs1","dir2","attrs2"],format:function(e){return"imageattr:%s %s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast",reg:new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),names:["dir1","list1","dir2","list2"],format:function(e){return"simulcast:%s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast_03",reg:/^simulcast:[\s\t]+([\S+\s\t]+)$/,names:["value"],format:"simulcast: %s"},{name:"framerate",reg:/^framerate:(\d+(?:$|\.\d+))/,format:"framerate:%s"},{name:"sourceFilter",reg:/^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,names:["filterMode","netType","addressTypes","destAddress","srcList"],format:"source-filter: %s %s %s %s %s"},{name:"bundleOnly",reg:/^(bundle-only)/},{name:"label",reg:/^label:(.+)/,format:"label:%s"},{name:"sctpPort",reg:/^sctp-port:(\d+)$/,format:"sctp-port:%s"},{name:"maxMessageSize",reg:/^max-message-size:(\d+)$/,format:"max-message-size:%s"},{push:"tsRefClocks",reg:/^ts-refclk:([^\s=]*)(?:=(\S*))?/,names:["clksrc","clksrcExt"],format:function(e){return"ts-refclk:%s"+(null!=e.clksrcExt?"=%s":"")}},{name:"mediaClk",reg:/^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,names:["id","mediaClockName","mediaClockValue","rateNumerator","rateDenominator"],format:function(e){var t="mediaclk:";return t+=null!=e.id?"id=%s %s":"%v%s",t+=null!=e.mediaClockValue?"=%s":"",t+=null!=e.rateNumerator?" rate=%s":"",t+=null!=e.rateDenominator?"/%s":""}},{name:"keywords",reg:/^keywds:(.+)$/,format:"keywds:%s"},{name:"content",reg:/^content:(.+)/,format:"content:%s"},{name:"bfcpFloorCtrl",reg:/^floorctrl:(c-only|s-only|c-s)/,format:"floorctrl:%s"},{name:"bfcpConfId",reg:/^confid:(\d+)/,format:"confid:%s"},{name:"bfcpUserId",reg:/^userid:(\d+)/,format:"userid:%s"},{name:"bfcpFloorId",reg:/^floorid:(.+) (?:m-stream|mstrm):(.+)/,names:["id","mStream"],format:"floorid:%s mstrm:%s"},{push:"invalid",names:["value"]}]};Object.keys(Xe).forEach((function(e){Xe[e].forEach((function(e){e.reg||(e.reg=/(.*)/),e.format||(e.format="%s")}))}));var Ze=Ye.exports;!function(e){var toIntIfInt=function(e){return String(Number(e))===e?Number(e):e},parseReg=function(e,t,i){var n=e.name&&e.names;e.push&&!t[e.push]?t[e.push]=[]:n&&!t[e.name]&&(t[e.name]={});var s=e.push?{}:n?t[e.name]:t;!function(e,t,i,n){if(n&&!i)t[n]=toIntIfInt(e[1]);else for(var s=0;s<i.length;s+=1)null!=e[s+1]&&(t[i[s]]=toIntIfInt(e[s+1]))}(i.match(e.reg),s,e.names,e.name),e.push&&t[e.push].push(s)},t=Ze,i=RegExp.prototype.test.bind(/^([a-z])=(.*)/);e.parse=function(e){var n={},s=[],a=n;return e.split(/(\r\n|\r|\n)/).filter(i).forEach((function(e){var i=e[0],n=e.slice(2);"m"===i&&(s.push({rtp:[],fmtp:[]}),a=s[s.length-1]);for(var o=0;o<(t[i]||[]).length;o+=1){var c=t[i][o];if(c.reg.test(n))return parseReg(c,a,n)}})),n.media=s,n};var paramReducer=function(e,t){var i=t.split(/=(.+)/,2);return 2===i.length?e[i[0]]=toIntIfInt(i[1]):1===i.length&&t.length>1&&(e[i[0]]=void 0),e};e.parseParams=function(e){return e.split(/;\s?/).reduce(paramReducer,{})},e.parseFmtpConfig=e.parseParams,e.parsePayloads=function(e){return e.toString().split(" ").map(Number)},e.parseRemoteCandidates=function(e){for(var t=[],i=e.split(" ").map(toIntIfInt),n=0;n<i.length;n+=3)t.push({component:i[n],ip:i[n+1],port:i[n+2]});return t},e.parseImageAttributes=function(e){return e.split(" ").map((function(e){return e.substring(1,e.length-1).split(",").reduce(paramReducer,{})}))},e.parseSimulcastStreamList=function(e){return e.split(";").map((function(e){return e.split(",").map((function(e){var t,i=!1;return"~"!==e[0]?t=toIntIfInt(e):(t=toIntIfInt(e.substring(1,e.length)),i=!0),{scid:t,paused:i}}))}))}}($e);var et=Ze,tt=/%[sdv%]/g,format=function(e){var t=1,i=arguments,n=i.length;return e.replace(tt,(function(e){if(t>=n)return e;var s=i[t];switch(t+=1,e){case"%%":return"%";case"%s":return String(s);case"%d":return Number(s);case"%v":return""}}))},makeLine=function(e,t,i){var n=[e+"="+(t.format instanceof Function?t.format(t.push?i:i[t.name]):t.format)];if(t.names)for(var s=0;s<t.names.length;s+=1){var a=t.names[s];t.name?n.push(i[t.name][a]):n.push(i[t.names[s]])}else n.push(i[t.name]);return format.apply(null,n)},it=["v","o","s","i","u","e","p","c","b","t","r","z","a"],nt=["i","c","b","a"],rt=$e,writer=function(e,t){t=t||{},null==e.version&&(e.version=0),null==e.name&&(e.name=" "),e.media.forEach((function(e){null==e.payloads&&(e.payloads="")}));var i=t.outerOrder||it,n=t.innerOrder||nt,s=[];return i.forEach((function(t){et[t].forEach((function(i){i.name in e&&null!=e[i.name]?s.push(makeLine(t,i,e)):i.push in e&&null!=e[i.push]&&e[i.push].forEach((function(e){s.push(makeLine(t,i,e))}))}))})),e.media.forEach((function(e){s.push(makeLine("m",et.m[0],e)),n.forEach((function(t){et[t].forEach((function(i){i.name in e&&null!=e[i.name]?s.push(makeLine(t,i,e)):i.push in e&&null!=e[i.push]&&e[i.push].forEach((function(e){s.push(makeLine(t,i,e))}))}))}))})),s.join("\r\n")+"\r\n"},st=writer,at=rt.parse;const ot="negotiationStarted",ct="negotiationComplete",dt="rtpVideoPayloadTypes";class PCTransport extends ie.EventEmitter{get pc(){if(this._pc)return this._pc;throw new UnexpectedConnectionState("Expected peer connection to be available")}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),this.pendingCandidates=[],this.restartingIce=!1,this.renegotiate=!1,this.trackBitrates=[],this.remoteStereoMids=[],this.remoteNackMids=[],this.negotiate=r((e=>{this.emit(ot);try{this.createAndSendOffer()}catch(t){if(!e)throw t;e(t)}}),100),this._pc=function isChromiumBased(){var e;return"Chrome"===(null===(e=getBrowser())||void 0===e?void 0:e.name)}()?new RTCPeerConnection(e,t):new RTCPeerConnection(e)}get isICEConnected(){return null!==this._pc&&("connected"===this.pc.iceConnectionState||"completed"===this.pc.iceConnectionState)}addIceCandidate(e){return __awaiter(this,void 0,void 0,(function*(){if(this.pc.remoteDescription&&!this.restartingIce)return this.pc.addIceCandidate(e);this.pendingCandidates.push(e)}))}setRemoteDescription(e){var t;return __awaiter(this,void 0,void 0,(function*(){let i;if("offer"===e.type){let{stereoMids:t,nackMids:i}=function extractStereoAndNackAudioFromOffer(e){var t;const i=[],n=[],s=at(null!==(t=e.sdp)&&void 0!==t?t:"");let a=0;return s.media.forEach((e=>{var t;"audio"===e.type&&(e.rtp.some((e=>"opus"===e.codec&&(a=e.payload,!0))),(null===(t=e.rtcpFb)||void 0===t?void 0:t.some((e=>e.payload===a&&"nack"===e.type)))&&n.push(e.mid),e.fmtp.some((t=>t.payload===a&&(t.config.includes("sprop-stereo=1")&&i.push(e.mid),!0))))})),{stereoMids:i,nackMids:n}}(e);this.remoteStereoMids=t,this.remoteNackMids=i}else if("answer"===e.type){const n=at(null!==(t=e.sdp)&&void 0!==t?t:"");n.media.forEach((e=>{"audio"===e.type&&this.trackBitrates.some((t=>{if(!t.transceiver||e.mid!=t.transceiver.mid)return!1;let i=0;if(e.rtp.some((e=>e.codec.toUpperCase()===t.codec.toUpperCase()&&(i=e.payload,!0))),0===i)return!0;let n=!1;for(const s of e.fmtp)if(s.payload===i){s.config=s.config.split(";").filter((e=>!e.includes("maxaveragebitrate"))).join(";"),t.maxbr>0&&(s.config+=";maxaveragebitrate=".concat(1e3*t.maxbr)),n=!0;break}return n||t.maxbr>0&&e.fmtp.push({payload:i,config:"maxaveragebitrate=".concat(1e3*t.maxbr)}),!0}))})),i=st(n)}if(yield this.setMungedSDP(e,i,!0),this.pendingCandidates.forEach((e=>{this.pc.addIceCandidate(e)})),this.pendingCandidates=[],this.restartingIce=!1,this.renegotiate)this.renegotiate=!1,this.createAndSendOffer();else if("answer"===e.type&&(this.emit(ct),e.sdp)){at(e.sdp).media.forEach((e=>{"video"===e.type&&this.emit(dt,e.rtp)}))}}))}createAndSendOffer(e){var t;return __awaiter(this,void 0,void 0,(function*(){if(void 0===this.onOffer)return;if((null==e?void 0:e.iceRestart)&&(p.debug("restarting ICE"),this.restartingIce=!0),this._pc&&"have-local-offer"===this._pc.signalingState){const t=this.pc.remoteDescription;if(!(null==e?void 0:e.iceRestart)||!t)return void(this.renegotiate=!0);yield this.pc.setRemoteDescription(t)}else if(!this._pc||"closed"===this._pc.signalingState)return void p.warn("could not createOffer with closed peer connection");p.debug("starting to negotiate");const i=yield this.pc.createOffer(e),n=at(null!==(t=i.sdp)&&void 0!==t?t:"");n.media.forEach((e=>{"audio"===e.type?ensureAudioNackAndStereo(e,[],[]):"video"===e.type&&(!function ensureVideoDDExtensionForSVC(e){var t,i,n,s;if(!isSVCCodec(null===(i=null===(t=e.rtp[0])||void 0===t?void 0:t.codec)||void 0===i?void 0:i.toLowerCase()))return;let a=0;(null===(n=e.ext)||void 0===n?void 0:n.some((e=>e.uri===Ue||(e.value>a&&(a=e.value),!1))))||null===(s=e.ext)||void 0===s||s.push({value:a+1,uri:Ue})}(e),this.trackBitrates.some((t=>{if(!e.msid||!t.cid||!e.msid.includes(t.cid))return!1;let i=0;if(e.rtp.some((e=>e.codec.toUpperCase()===t.codec.toUpperCase()&&(i=e.payload,!0))),0===i)return!0;let n=!1;for(const s of e.fmtp)if(s.payload===i){s.config.includes("x-google-start-bitrate")||(s.config+=";x-google-start-bitrate=".concat(.7*t.maxbr)),s.config.includes("x-google-max-bitrate")||(s.config+=";x-google-max-bitrate=".concat(t.maxbr)),n=!0;break}return n||e.fmtp.push({payload:i,config:"x-google-start-bitrate=".concat(.7*t.maxbr,";x-google-max-bitrate=").concat(t.maxbr)}),!0})))})),yield this.setMungedSDP(i,st(n)),this.onOffer(i)}))}createAndSetAnswer(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=yield this.pc.createAnswer(),i=at(null!==(e=t.sdp)&&void 0!==e?e:"");return i.media.forEach((e=>{"audio"===e.type&&ensureAudioNackAndStereo(e,this.remoteStereoMids,this.remoteNackMids)})),yield this.setMungedSDP(t,st(i)),t}))}setTrackCodecBitrate(e){this.trackBitrates.push(e)}close(){this._pc&&(this._pc.close(),this._pc.onconnectionstatechange=null,this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.ondatachannel=null,this._pc.onnegotiationneeded=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ondatachannel=null,this._pc.ontrack=null,this._pc.onconnectionstatechange=null,this._pc.oniceconnectionstatechange=null,this._pc=null)}setMungedSDP(e,t,i){return __awaiter(this,void 0,void 0,(function*(){if(t){const n=e.sdp;e.sdp=t;try{return p.debug("setting munged ".concat(i?"remote":"local"," description")),void(i?yield this.pc.setRemoteDescription(e):yield this.pc.setLocalDescription(e))}catch(i){p.warn("not able to set ".concat(e.type,", falling back to unmodified sdp"),{error:i,sdp:t}),e.sdp=n}}try{i?yield this.pc.setRemoteDescription(e):yield this.pc.setLocalDescription(e)}catch(t){let n="unknown error";t instanceof Error?n=t.message:"string"==typeof t&&(n=t);const s={error:n,sdp:e.sdp};throw!i&&this.pc.remoteDescription&&(s.remoteSdp=this.pc.remoteDescription),p.error("unable to set ".concat(e.type),s),new NegotiationError(n)}}))}}function ensureAudioNackAndStereo(e,t,i){let n=0;e.rtp.some((e=>"opus"===e.codec&&(n=e.payload,!0))),n>0&&(e.rtcpFb||(e.rtcpFb=[]),i.includes(e.mid)&&!e.rtcpFb.some((e=>e.payload===n&&"nack"===e.type))&&e.rtcpFb.push({payload:n,type:"nack"}),t.includes(e.mid)&&e.fmtp.some((e=>e.payload===n&&(e.config.includes("stereo=1")||(e.config+=";stereo=1"),!0))))}const ut={audioBitrate:Ee.music.maxBitrate,audioPreset:Ee.music,dtx:!0,red:!0,forceStereo:!1,simulcast:!0,screenShareEncoding:_e.h1080fps15.encoding,stopMicTrackOnMute:!1,videoCodec:"vp8",backupCodec:!1},lt={autoGainControl:!0,echoCancellation:!0,noiseSuppression:!0},ht={resolution:Pe.h720.resolution},pt={adaptiveStream:!1,dynacast:!1,stopLocalTrackOnUnpublish:!0,reconnectPolicy:new DefaultReconnectPolicy,disconnectOnPageLeave:!0,expWebAudioMix:!1},mt={autoSubscribe:!0,maxRetries:1,peerConnectionTimeout:15e3,websocketTimeout:15e3},ft="_lossy",gt="_reliable",vt="leave-reconnect";var kt;!function(e){e[e.New=0]="New",e[e.Connected=1]="Connected",e[e.Disconnected=2]="Disconnected",e[e.Reconnecting=3]="Reconnecting",e[e.Closed=4]="Closed"}(kt||(kt={}));class RTCEngine extends ie.EventEmitter{get isClosed(){return this._isClosed}constructor(e){super(),this.options=e,this.rtcConfig={},this.peerConnectionTimeout=mt.peerConnectionTimeout,this.fullReconnectOnNext=!1,this.subscriberPrimary=!1,this.pcState=kt.New,this._isClosed=!0,this.pendingTrackResolvers={},this.hasPublished=!1,this.reconnectAttempts=0,this.reconnectStart=0,this.attemptingReconnect=!1,this.joinAttempts=0,this.maxJoinAttempts=1,this.shouldFailNext=!1,this.handleDataChannel=e=>{let{channel:t}=e;return __awaiter(this,void 0,void 0,(function*(){if(t){if(t.label===gt)this.reliableDCSub=t;else{if(t.label!==ft)return;this.lossyDCSub=t}p.debug("on data channel ".concat(t.id,", ").concat(t.label)),t.onmessage=this.handleDataMessage}}))},this.handleDataMessage=e=>__awaiter(this,void 0,void 0,(function*(){var t,i;const n=yield this.dataProcessLock.lock();try{let s;if(e.data instanceof ArrayBuffer)s=e.data;else{if(!(e.data instanceof Blob))return void p.error("unsupported data type",e.data);s=yield e.data.arrayBuffer()}const a=DataPacket.fromBinary(new Uint8Array(s));"speaker"===(null===(t=a.value)||void 0===t?void 0:t.case)?this.emit(Le.ActiveSpeakersUpdate,a.value.value.speakers):"user"===(null===(i=a.value)||void 0===i?void 0:i.case)&&this.emit(Le.DataPacketReceived,a.value.value,a.kind)}finally{n()}})),this.handleDataError=e=>{const t=0===e.currentTarget.maxRetransmits?"lossy":"reliable";if(e instanceof ErrorEvent&&e.error){const{error:i}=e.error;p.error("DataChannel error on ".concat(t,": ").concat(e.message),i)}else p.error("Unknown DataChannel error on ".concat(t),e)},this.handleBufferedAmountLow=e=>{const t=0===e.currentTarget.maxRetransmits?K.LOSSY:K.RELIABLE;this.updateAndEmitDCBufferStatus(t)},this.handleDisconnect=(e,t)=>{if(this._isClosed)return;p.warn("".concat(e," disconnected")),0===this.reconnectAttempts&&(this.reconnectStart=Date.now());const disconnect=e=>{p.warn("could not recover connection after ".concat(this.reconnectAttempts," attempts, ").concat(e,"ms. giving up")),this.emit(Le.Disconnected),this.close()},i=Date.now()-this.reconnectStart;let n=this.getNextRetryDelay({elapsedMs:i,retryCount:this.reconnectAttempts});null!==n?(e===vt&&(n=0),p.debug("reconnecting in ".concat(n,"ms")),this.clearReconnectTimeout(),this.token&&this.regionUrlProvider&&this.regionUrlProvider.updateToken(this.token),this.reconnectTimeout=CriticalTimers.setTimeout((()=>this.attemptReconnect(t)),n)):disconnect(i)},this.waitForRestarted=()=>new Promise(((e,t)=>{this.pcState===kt.Connected&&e();const onRestarted=()=>{this.off(Le.Disconnected,onDisconnected),e()},onDisconnected=()=>{this.off(Le.Restarted,onRestarted),t()};this.once(Le.Restarted,onRestarted),this.once(Le.Disconnected,onDisconnected)})),this.updateAndEmitDCBufferStatus=e=>{const t=this.isBufferStatusLow(e);void 0!==t&&t!==this.dcBufferStatus.get(e)&&(this.dcBufferStatus.set(e,t),this.emit(Le.DCBufferStatusChanged,t,e))},this.isBufferStatusLow=e=>{const t=this.dataChannelForKind(e);if(t)return t.bufferedAmount<=t.bufferedAmountLowThreshold},this.handleBrowserOnLine=()=>{this.client.isReconnecting&&(this.clearReconnectTimeout(),this.attemptReconnect(V.RR_SIGNAL_DISCONNECTED))},this.client=new SignalClient,this.client.signalLatency=this.options.expSignalLatency,this.reconnectPolicy=this.options.reconnectPolicy,this.registerOnLineListener(),this.closingLock=new Mutex,this.dataProcessLock=new Mutex,this.dcBufferStatus=new Map([[K.LOSSY,!0],[K.RELIABLE,!0]]),this.client.onParticipantUpdate=e=>this.emit(Le.ParticipantUpdate,e),this.client.onConnectionQuality=e=>this.emit(Le.ConnectionQualityUpdate,e),this.client.onRoomUpdate=e=>this.emit(Le.RoomUpdate,e),this.client.onSubscriptionError=e=>this.emit(Le.SubscriptionError,e),this.client.onSubscriptionPermissionUpdate=e=>this.emit(Le.SubscriptionPermissionUpdate,e),this.client.onSpeakersChanged=e=>this.emit(Le.SpeakersChanged,e),this.client.onStreamStateUpdate=e=>this.emit(Le.StreamStateChanged,e)}join(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){this.url=e,this.token=t,this.signalOpts=i,this.maxJoinAttempts=i.maxRetries;try{this.joinAttempts+=1,this.setupSignalClientCallbacks();const s=yield this.client.join(e,t,i,n);return this._isClosed=!1,this.latestJoinResponse=s,this.subscriberPrimary=s.subscriberPrimary,this.publisher||this.configure(s),this.subscriberPrimary||this.negotiate(),this.clientConfiguration=s.clientConfiguration,s}catch(s){if(s instanceof ConnectionError&&1===s.reason&&(p.warn("Couldn't connect to server, attempt ".concat(this.joinAttempts," of ").concat(this.maxJoinAttempts)),this.joinAttempts<this.maxJoinAttempts))return this.join(e,t,i,n);throw s}}))}close(){return __awaiter(this,void 0,void 0,(function*(){const e=yield this.closingLock.lock();if(this.isClosed)e();else try{this._isClosed=!0,this.emit(Le.Closing),this.removeAllListeners(),this.deregisterOnLineListener(),this.clearPendingReconnect(),yield this.cleanupPeerConnections(),yield this.cleanupClient()}finally{e()}}))}cleanupPeerConnections(){return __awaiter(this,void 0,void 0,(function*(){this.publisher&&"closed"!==this.publisher.pc.signalingState&&this.publisher.pc.getSenders().forEach((e=>{var t,i;try{(null===(t=this.publisher)||void 0===t?void 0:t.pc.removeTrack)&&(null===(i=this.publisher)||void 0===i||i.pc.removeTrack(e))}catch(e){p.warn("could not removeTrack",{error:e})}})),this.publisher&&(this.publisher.close(),this.publisher=void 0),this.subscriber&&(this.subscriber.close(),this.subscriber=void 0),this.primaryPC=void 0;const dcCleanup=e=>{e&&(e.close(),e.onbufferedamountlow=null,e.onclose=null,e.onclosing=null,e.onerror=null,e.onmessage=null,e.onopen=null)};dcCleanup(this.lossyDC),dcCleanup(this.lossyDCSub),dcCleanup(this.reliableDC),dcCleanup(this.reliableDCSub),this.lossyDC=void 0,this.lossyDCSub=void 0,this.reliableDC=void 0,this.reliableDCSub=void 0}))}cleanupClient(){return __awaiter(this,void 0,void 0,(function*(){yield this.client.close(),this.client.resetCallbacks()}))}addTrack(e){if(this.pendingTrackResolvers[e.cid])throw new TrackInvalidError("a track with the same ID has already been published");return new Promise(((t,i)=>{const n=setTimeout((()=>{delete this.pendingTrackResolvers[e.cid],i(new ConnectionError("publication of local track timed out, no response from server"))}),1e4);this.pendingTrackResolvers[e.cid]={resolve:e=>{clearTimeout(n),t(e)},reject:()=>{clearTimeout(n),i(new Error("Cancelled publication by calling unpublish"))}},this.client.sendAddTrack(e)}))}removeTrack(e){var t;if(e.track&&this.pendingTrackResolvers[e.track.id]){const{reject:t}=this.pendingTrackResolvers[e.track.id];t&&t(),delete this.pendingTrackResolvers[e.track.id]}try{return null===(t=this.publisher)||void 0===t||t.pc.removeTrack(e),!0}catch(e){p.warn("failed to remove track",{error:e,method:"removeTrack"})}return!1}updateMuteStatus(e,t){this.client.sendMuteTrack(e,t)}get dataSubscriberReadyState(){var e;return null===(e=this.reliableDCSub)||void 0===e?void 0:e.readyState}getConnectedServerAddress(){return __awaiter(this,void 0,void 0,(function*(){if(void 0!==this.primaryPC)return function getConnectedAddress(e){var t;return __awaiter(this,void 0,void 0,(function*(){let i="";const n=new Map,s=new Map;if((yield e.getStats()).forEach((e=>{switch(e.type){case"transport":i=e.selectedCandidatePairId;break;case"candidate-pair":""===i&&e.selected&&(i=e.id),n.set(e.id,e);break;case"remote-candidate":s.set(e.id,"".concat(e.address,":").concat(e.port))}})),""===i)return;const a=null===(t=n.get(i))||void 0===t?void 0:t.remoteCandidateId;return void 0!==a?s.get(a):void 0}))}(this.primaryPC)}))}setRegionUrlProvider(e){this.regionUrlProvider=e}configure(e){var t,i;if(this.publisher||this.subscriber)return;this.participantSid=null===(t=e.participant)||void 0===t?void 0:t.sid;const n=this.makeRTCConfiguration(e);(null===(i=this.signalOpts)||void 0===i?void 0:i.e2eeEnabled)&&(p.debug("E2EE - setting up transports with insertable streams"),n.encodedInsertableStreams=!0);this.publisher=new PCTransport(n,{optional:[{googDscp:!0}]}),this.subscriber=new PCTransport(n),this.emit(Le.TransportsCreated,this.publisher,this.subscriber),this.publisher.pc.onicecandidate=e=>{e.candidate&&(p.trace("adding ICE candidate for peer",e.candidate),this.client.sendIceCandidate(e.candidate,pe.PUBLISHER))},this.subscriber.pc.onicecandidate=e=>{e.candidate&&this.client.sendIceCandidate(e.candidate,pe.SUBSCRIBER)},this.publisher.onOffer=e=>{this.client.sendOffer(e)};let s=this.publisher.pc,a=this.subscriber.pc,o=e.subscriberPrimary;o&&(s=this.subscriber.pc,a=this.publisher.pc,this.subscriber.pc.ondatachannel=this.handleDataChannel),this.primaryPC=s,s.onconnectionstatechange=()=>__awaiter(this,void 0,void 0,(function*(){if(p.debug("primary PC state changed ".concat(s.connectionState)),"connected"===s.connectionState){const t=this.pcState===kt.New;this.pcState=kt.Connected,t&&this.emit(Le.Connected,e)}else"failed"===s.connectionState&&this.pcState===kt.Connected&&(this.pcState=kt.Disconnected,this.handleDisconnect("primary peerconnection",o?V.RR_SUBSCRIBER_FAILED:V.RR_PUBLISHER_FAILED))})),a.onconnectionstatechange=()=>__awaiter(this,void 0,void 0,(function*(){p.debug("secondary PC state changed ".concat(a.connectionState)),"failed"===a.connectionState&&this.handleDisconnect("secondary peerconnection",o?V.RR_PUBLISHER_FAILED:V.RR_SUBSCRIBER_FAILED)})),this.subscriber.pc.ontrack=e=>{this.emit(Le.MediaTrackAdded,e.track,e.streams[0],e.receiver)},this.createDataChannels()}setupSignalClientCallbacks(){this.client.onAnswer=e=>__awaiter(this,void 0,void 0,(function*(){this.publisher&&(p.debug("received server answer",{RTCSdpType:e.type,signalingState:this.publisher.pc.signalingState.toString()}),yield this.publisher.setRemoteDescription(e))})),this.client.onTrickle=(e,t)=>{this.publisher&&this.subscriber&&(p.trace("got ICE candidate from peer",{candidate:e,target:t}),t===pe.PUBLISHER?this.publisher.addIceCandidate(e):this.subscriber.addIceCandidate(e))},this.client.onOffer=e=>__awaiter(this,void 0,void 0,(function*(){if(!this.subscriber)return;p.debug("received server offer",{RTCSdpType:e.type,signalingState:this.subscriber.pc.signalingState.toString()}),yield this.subscriber.setRemoteDescription(e);const t=yield this.subscriber.createAndSetAnswer();this.client.sendAnswer(t)})),this.client.onLocalTrackPublished=e=>{if(p.debug("received trackPublishedResponse",e),!this.pendingTrackResolvers[e.cid])return void p.error("missing track resolver for ".concat(e.cid));const{resolve:t}=this.pendingTrackResolvers[e.cid];delete this.pendingTrackResolvers[e.cid],t(e.track)},this.client.onTokenRefresh=e=>{this.token=e},this.client.onClose=()=>{this.handleDisconnect("signal",V.RR_SIGNAL_DISCONNECTED)},this.client.onLeave=e=>{(null==e?void 0:e.canReconnect)?(this.fullReconnectOnNext=!0,this.primaryPC=void 0,this.handleDisconnect(vt)):(this.emit(Le.Disconnected,null==e?void 0:e.reason),this.close()),p.trace("leave request",{leave:e})}}makeRTCConfiguration(e){const t=Object.assign({},this.rtcConfig);if(e.iceServers&&!t.iceServers){const i=[];e.iceServers.forEach((e=>{const t={urls:e.urls};e.username&&(t.username=e.username),e.credential&&(t.credential=e.credential),i.push(t)})),t.iceServers=i}return e.clientConfiguration&&e.clientConfiguration.forceRelay===F.ENABLED&&(t.iceTransportPolicy="relay"),t.sdpSemantics="unified-plan",t.continualGatheringPolicy="gather_continually",t}createDataChannels(){this.publisher&&(this.lossyDC&&(this.lossyDC.onmessage=null,this.lossyDC.onerror=null),this.reliableDC&&(this.reliableDC.onmessage=null,this.reliableDC.onerror=null),this.lossyDC=this.publisher.pc.createDataChannel(ft,{ordered:!0,maxRetransmits:0}),this.reliableDC=this.publisher.pc.createDataChannel(gt,{ordered:!0}),this.lossyDC.onmessage=this.handleDataMessage,this.reliableDC.onmessage=this.handleDataMessage,this.lossyDC.onerror=this.handleDataError,this.reliableDC.onerror=this.handleDataError,this.lossyDC.bufferedAmountLowThreshold=65535,this.reliableDC.bufferedAmountLowThreshold=65535,this.lossyDC.onbufferedamountlow=this.handleBufferedAmountLow,this.reliableDC.onbufferedamountlow=this.handleBufferedAmountLow)}setPreferredCodec(e,t,i){if(!("getCapabilities"in RTCRtpSender))return;const n=RTCRtpSender.getCapabilities(t);if(!n)return;p.debug("get capabilities",n);const s=[],a=[],o=[];n.codecs.forEach((e=>{const t=e.mimeType.toLowerCase();if("audio/opus"===t)return void s.push(e);t==="video/".concat(i)?"h264"!==i||e.sdpFmtpLine&&e.sdpFmtpLine.includes("profile-level-id=42e01f")?s.push(e):a.push(e):o.push(e)})),function supportsSetCodecPreferences(e){if(!isWeb())return!1;if(!("setCodecPreferences"in e))return!1;const t=getBrowser();if(!(null==t?void 0:t.name)||!t.version)return!1;const i=Oe[t.name];return!!i&&compareVersions(t.version,i)>=0}(e)&&e.setCodecPreferences(s.concat(a,o))}createSender(e,t,i){return __awaiter(this,void 0,void 0,(function*(){if(supportsTransceiver()){return yield this.createTransceiverRTCRtpSender(e,t,i)}if(supportsAddTrack()){p.warn("using add-track fallback");return yield this.createRTCRtpSender(e.mediaStreamTrack)}throw new UnexpectedConnectionState("Required webRTC APIs not supported on this device")}))}createSimulcastSender(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){if(supportsTransceiver())return this.createSimulcastTransceiverSender(e,t,i,n);if(supportsAddTrack())return p.debug("using add-track fallback"),this.createRTCRtpSender(e.mediaStreamTrack);throw new UnexpectedConnectionState("Cannot stream on this device")}))}createTransceiverRTCRtpSender(e,t,i){return __awaiter(this,void 0,void 0,(function*(){if(!this.publisher)throw new UnexpectedConnectionState("publisher is closed");const n=[];e.mediaStream&&n.push(e.mediaStream);const s={direction:"sendonly",streams:n};i&&(s.sendEncodings=i);const a=yield this.publisher.pc.addTransceiver(e.mediaStreamTrack,s);return e.kind===Track.Kind.Video&&t.videoCodec&&(this.setPreferredCodec(a,e.kind,t.videoCodec),e.codec=t.videoCodec),a.sender}))}createSimulcastTransceiverSender(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){if(!this.publisher)throw new UnexpectedConnectionState("publisher is closed");const s={direction:"sendonly"};n&&(s.sendEncodings=n);const a=yield this.publisher.pc.addTransceiver(t.mediaStreamTrack,s);if(i.videoCodec)return this.setPreferredCodec(a,e.kind,i.videoCodec),e.setSimulcastTrackSender(i.videoCodec,a.sender),a.sender}))}createRTCRtpSender(e){return __awaiter(this,void 0,void 0,(function*(){if(!this.publisher)throw new UnexpectedConnectionState("publisher is closed");return this.publisher.pc.addTrack(e)}))}attemptReconnect(e){var t,i,n;return __awaiter(this,void 0,void 0,(function*(){if(!this._isClosed&&!this.attemptingReconnect){(null===(t=this.clientConfiguration)||void 0===t?void 0:t.resumeConnection)!==F.DISABLED&&"closed"!==(null!==(n=null===(i=this.primaryPC)||void 0===i?void 0:i.signalingState)&&void 0!==n?n:"closed")||(this.fullReconnectOnNext=!0);try{this.attemptingReconnect=!0,this.fullReconnectOnNext?yield this.restartConnection():yield this.resumeConnection(e),this.clearPendingReconnect(),this.fullReconnectOnNext=!1}catch(e){this.reconnectAttempts+=1;let t=!0;e instanceof UnexpectedConnectionState?(p.debug("received unrecoverable error",{error:e}),t=!1):e instanceof SignalReconnectError||(this.fullReconnectOnNext=!0),t?this.handleDisconnect("reconnect",V.RR_UNKNOWN):(p.info("could not recover connection after ".concat(this.reconnectAttempts," attempts, ").concat(Date.now()-this.reconnectStart,"ms. giving up")),this.emit(Le.Disconnected),yield this.close())}finally{this.attemptingReconnect=!1}}}))}getNextRetryDelay(e){try{return this.reconnectPolicy.nextRetryDelayInMs(e)}catch(e){p.warn("encountered error in reconnect policy",{error:e})}return null}restartConnection(e){var t,i,n;return __awaiter(this,void 0,void 0,(function*(){try{if(!this.url||!this.token)throw new UnexpectedConnectionState("could not reconnect, url or token not saved");let i;p.info("reconnecting, attempt: ".concat(this.reconnectAttempts)),this.emit(Le.Restarting),this.client.isConnected&&(yield this.client.sendLeave()),yield this.cleanupPeerConnections(),yield this.cleanupClient();try{if(!this.signalOpts)throw p.warn("attempted connection restart, without signal options present"),new SignalReconnectError;i=yield this.join(null!=e?e:this.url,this.token,this.signalOpts)}catch(e){if(e instanceof ConnectionError&&0===e.reason)throw new UnexpectedConnectionState("could not reconnect, token might be expired");throw new SignalReconnectError}if(this.shouldFailNext)throw this.shouldFailNext=!1,new Error("simulated failure");this.client.setReconnected(),this.emit(Le.SignalRestarted,i),yield this.waitForPCReconnected(),null===(t=this.regionUrlProvider)||void 0===t||t.resetAttempts(),this.emit(Le.Restarted)}catch(e){const t=yield null===(i=this.regionUrlProvider)||void 0===i?void 0:i.getNextBestRegionUrl();if(t)return void(yield this.restartConnection(t));throw null===(n=this.regionUrlProvider)||void 0===n||n.resetAttempts(),e}}))}resumeConnection(e){var t;return __awaiter(this,void 0,void 0,(function*(){if(!this.url||!this.token)throw new UnexpectedConnectionState("could not reconnect, url or token not saved");if(!this.publisher||!this.subscriber)throw new UnexpectedConnectionState("publisher and subscriber connections unset");p.info("resuming signal connection, attempt ".concat(this.reconnectAttempts)),this.emit(Le.Resuming);try{this.setupSignalClientCallbacks();const t=yield this.client.reconnect(this.url,this.token,this.participantSid,e);if(t){const e=this.makeRTCConfiguration(t);this.publisher.pc.setConfiguration(e),this.subscriber.pc.setConfiguration(e)}}catch(e){let t="";if(e instanceof Error&&(t=e.message),e instanceof ConnectionError&&0===e.reason)throw new UnexpectedConnectionState("could not reconnect, token might be expired");throw new SignalReconnectError(t)}if(this.emit(Le.SignalResumed),this.shouldFailNext)throw this.shouldFailNext=!1,new Error("simulated failure");this.subscriber.restartingIce=!0,this.hasPublished&&(yield this.publisher.createAndSendOffer({iceRestart:!0})),yield this.waitForPCReconnected(),this.client.setReconnected(),"open"===(null===(t=this.reliableDC)||void 0===t?void 0:t.readyState)&&null===this.reliableDC.id&&this.createDataChannels(),this.emit(Le.Resumed)}))}waitForPCInitialConnection(e,t){return __awaiter(this,void 0,void 0,(function*(){if(this.pcState!==kt.Connected){if(this.pcState!==kt.New)throw new UnexpectedConnectionState("Expected peer connection to be new on initial connection");return new Promise(((i,n)=>{const abortHandler=()=>{p.warn("closing engine"),CriticalTimers.clearTimeout(s),n(new ConnectionError("room connection has been cancelled",3))};(null==t?void 0:t.signal.aborted)&&abortHandler(),null==t||t.signal.addEventListener("abort",abortHandler);const onConnected=()=>{CriticalTimers.clearTimeout(s),null==t||t.signal.removeEventListener("abort",abortHandler),i()},s=CriticalTimers.setTimeout((()=>{this.off(Le.Connected,onConnected),n(new ConnectionError("could not establish pc connection"))}),null!=e?e:this.peerConnectionTimeout);this.once(Le.Connected,onConnected)}))}}))}waitForPCReconnected(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=Date.now();let i=t;for(this.pcState=kt.Reconnecting,p.debug("waiting for peer connection to reconnect");i-t<this.peerConnectionTimeout&&void 0!==this.primaryPC;){if(i-t>2e3&&"connected"===(null===(e=this.primaryPC)||void 0===e?void 0:e.connectionState)&&(this.pcState=kt.Connected),this.pcState===kt.Connected)return;yield sleep(100),i=Date.now()}throw new ConnectionError("could not establish PC connection")}))}sendDataPacket(e,t){return __awaiter(this,void 0,void 0,(function*(){const i=e.toBinary();yield this.ensurePublisherConnected(t);const n=this.dataChannelForKind(t);n&&n.send(i),this.updateAndEmitDCBufferStatus(t)}))}ensureDataTransportConnected(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.subscriberPrimary;var i,n,s;return __awaiter(this,void 0,void 0,(function*(){const a=t?this.subscriber:this.publisher,o=t?"Subscriber":"Publisher";if(!a)throw new ConnectionError("".concat(o," connection not set"));t||(null===(i=this.publisher)||void 0===i?void 0:i.isICEConnected)||"checking"===(null===(n=this.publisher)||void 0===n?void 0:n.pc.iceConnectionState)||this.negotiate();const c=this.dataChannelForKind(e,t);if("open"===(null==c?void 0:c.readyState))return;const u=(new Date).getTime()+this.peerConnectionTimeout;for(;(new Date).getTime()<u;){if(a.isICEConnected&&"open"===(null===(s=this.dataChannelForKind(e,t))||void 0===s?void 0:s.readyState))return;yield sleep(50)}throw new ConnectionError("could not establish ".concat(o," connection, state: ").concat(a.pc.iceConnectionState))}))}ensurePublisherConnected(e){return __awaiter(this,void 0,void 0,(function*(){yield this.ensureDataTransportConnected(e,!1)}))}verifyTransport(){if(!this.primaryPC)return!1;if("closed"===this.primaryPC.connectionState||"failed"===this.primaryPC.connectionState)return!1;if(this.hasPublished&&this.subscriberPrimary){if(!this.publisher)return!1;if("closed"===this.publisher.pc.connectionState||"failed"===this.publisher.pc.connectionState)return!1}return!(!this.client.ws||this.client.ws.readyState===WebSocket.CLOSED)}negotiate(){return new Promise(((e,t)=>{if(!this.publisher)return void t(new NegotiationError("publisher is not defined"));this.hasPublished=!0;const handleClosed=()=>{p.debug("engine disconnected while negotiation was ongoing"),cleanup(),e()};this.isClosed&&t("cannot negotiate on closed engine"),this.on(Le.Closing,handleClosed);const i=setTimeout((()=>{t("negotiation timed out"),this.handleDisconnect("negotiation",V.RR_SIGNAL_DISCONNECTED)}),this.peerConnectionTimeout),cleanup=()=>{clearTimeout(i),this.off(Le.Closing,handleClosed)};this.publisher.once(ot,(()=>{var t;null===(t=this.publisher)||void 0===t||t.once(ct,(()=>{cleanup(),e()}))})),this.publisher.once(dt,(e=>{const t=new Map;e.forEach((e=>{const i=e.codec.toLowerCase();(function isVideoCodec(e){return we.includes(e)})(i)&&t.set(e.payload,i)})),this.emit(Le.RTPVideoMapUpdate,t)})),this.publisher.negotiate((e=>{cleanup(),t(e),e instanceof NegotiationError&&(this.fullReconnectOnNext=!0),this.handleDisconnect("negotiation",V.RR_UNKNOWN)}))}))}dataChannelForKind(e,t){if(t){if(e===K.LOSSY)return this.lossyDCSub;if(e===K.RELIABLE)return this.reliableDCSub}else{if(e===K.LOSSY)return this.lossyDC;if(e===K.RELIABLE)return this.reliableDC}}failNext(){this.shouldFailNext=!0}clearReconnectTimeout(){this.reconnectTimeout&&CriticalTimers.clearTimeout(this.reconnectTimeout)}clearPendingReconnect(){this.clearReconnectTimeout(),this.reconnectAttempts=0}registerOnLineListener(){isWeb()&&window.addEventListener("online",this.handleBrowserOnLine)}deregisterOnLineListener(){isWeb()&&window.removeEventListener("online",this.handleBrowserOnLine)}}class SignalReconnectError extends Error{}class RegionUrlProvider{constructor(e,t){this.lastUpdateAt=0,this.settingsCacheTime=3e3,this.attemptedRegions=[],this.serverUrl=new URL(e),this.token=t}updateToken(e){this.token=e}isCloud(){return isCloud(this.serverUrl)}getServerUrl(){return this.serverUrl}getNextBestRegionUrl(e){return __awaiter(this,void 0,void 0,(function*(){if(!this.isCloud())throw Error("region availability is only supported for LiveKit Cloud domains");(!this.regionSettings||Date.now()-this.lastUpdateAt>this.settingsCacheTime)&&(this.regionSettings=yield this.fetchRegionSettings(e));const t=this.regionSettings.regions.filter((e=>!this.attemptedRegions.find((t=>t.url===e.url))));if(t.length>0){const e=t[0];return this.attemptedRegions.push(e),p.debug("next region: ".concat(e.region)),e.url}return null}))}resetAttempts(){this.attemptedRegions=[]}fetchRegionSettings(e){return __awaiter(this,void 0,void 0,(function*(){const t=yield fetch("".concat(function getCloudConfigUrl(e){return"".concat(e.protocol.replace("ws","http"),"//").concat(e.host,"/settings")}(this.serverUrl),"/regions"),{headers:{authorization:"Bearer ".concat(this.token)},signal:e});if(t.ok){const e=yield t.json();return this.lastUpdateAt=Date.now(),e}throw new ConnectionError("Could not fetch region settings: ".concat(t.statusText),401===t.status?0:void 0,t.status)}))}}const yt=2e3;function computeBitrate(e,t){if(!t)return 0;let i,n;return"bytesReceived"in e?(i=e.bytesReceived,n=t.bytesReceived):"bytesSent"in e&&(i=e.bytesSent,n=t.bytesSent),void 0===i||void 0===n||void 0===e.timestamp||void 0===t.timestamp?0:8*(i-n)*1e3/(e.timestamp-t.timestamp)}class LocalAudioTrack extends LocalTrack{constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3?arguments[3]:void 0;super(e,Track.Kind.Audio,t,i),this.stopOnMute=!1,this.monitorSender=()=>__awaiter(this,void 0,void 0,(function*(){if(!this.sender)return void(this._currentBitrate=0);let e;try{e=yield this.getSenderStats()}catch(e){return void p.error("could not get audio sender stats",{error:e})}e&&this.prevStats&&(this._currentBitrate=computeBitrate(e,this.prevStats)),this.prevStats=e})),this.audioContext=n,this.checkForSilence()}setDeviceId(e){return __awaiter(this,void 0,void 0,(function*(){return this._constraints.deviceId===e||(this._constraints.deviceId=e,this.isMuted||(yield this.restartTrack()),this.isMuted||unwrapConstraint(e)===this.mediaStreamTrack.getSettings().deviceId)}))}mute(){const e=Object.create(null,{mute:{get:()=>super.mute}});return __awaiter(this,void 0,void 0,(function*(){const t=yield this.muteLock.lock();try{return this.source===Track.Source.Microphone&&this.stopOnMute&&!this.isUserProvided&&(p.debug("stopping mic track"),this._mediaStreamTrack.stop()),yield e.mute.call(this),this}finally{t()}}))}unmute(){const e=Object.create(null,{unmute:{get:()=>super.unmute}});return __awaiter(this,void 0,void 0,(function*(){const t=yield this.muteLock.lock();try{const i=this._constraints.deviceId&&this._mediaStreamTrack.getSettings().deviceId!==unwrapConstraint(this._constraints.deviceId);return this.source!==Track.Source.Microphone||!this.stopOnMute&&"ended"!==this._mediaStreamTrack.readyState&&!i||this.isUserProvided||(p.debug("reacquiring mic track"),yield this.restartTrack()),yield e.unmute.call(this),this}finally{t()}}))}restartTrack(e){return __awaiter(this,void 0,void 0,(function*(){let t;if(e){const i=constraintsForOptions({audio:e});"boolean"!=typeof i.audio&&(t=i.audio)}yield this.restart(t)}))}restart(e){const t=Object.create(null,{restart:{get:()=>super.restart}});return __awaiter(this,void 0,void 0,(function*(){const i=yield t.restart.call(this,e);return this.checkForSilence(),i}))}startMonitor(){isWeb()&&(this.monitorInterval||(this.monitorInterval=setInterval((()=>{this.monitorSender()}),yt)))}setProcessor(e){var t;return __awaiter(this,void 0,void 0,(function*(){const i=yield this.processorLock.lock();try{if(!this.audioContext)throw Error("Audio context needs to be set on LocalAudioTrack in order to enable processors");if(this.processor&&(yield this.stopProcessor()),"unknown"===this.kind)throw TypeError("cannot set processor on track of unknown kind");const n={kind:this.kind,track:this._mediaStreamTrack,audioContext:this.audioContext};p.debug("setting up audio processor ".concat(e.name)),yield e.init(n),this.processor=e,this.processor.processedTrack&&(yield null===(t=this.sender)||void 0===t?void 0:t.replaceTrack(this.processor.processedTrack))}finally{i()}}))}setAudioContext(e){this.audioContext=e}getSenderStats(){var e;return __awaiter(this,void 0,void 0,(function*(){if(!(null===(e=this.sender)||void 0===e?void 0:e.getStats))return;let t;return(yield this.sender.getStats()).forEach((e=>{"outbound-rtp"===e.type&&(t={type:"audio",streamId:e.id,packetsSent:e.packetsSent,packetsLost:e.packetsLost,bytesSent:e.bytesSent,timestamp:e.timestamp,roundTripTime:e.roundTripTime,jitter:e.jitter})})),t}))}checkForSilence(){return __awaiter(this,void 0,void 0,(function*(){const e=yield function detectSilence(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return __awaiter(this,void 0,void 0,(function*(){const i=getNewAudioContext();if(i){const n=i.createAnalyser();n.fftSize=2048;const s=n.frequencyBinCount,a=new Uint8Array(s);i.createMediaStreamSource(new MediaStream([e.mediaStreamTrack])).connect(n),yield sleep(t),n.getByteTimeDomainData(a);const o=a.some((e=>128!==e&&0!==e));return i.close(),!o}return!1}))}(this);return e&&(this.isMuted||p.warn("silence detected on local audio track"),this.emit(Me.AudioSilenceDetected)),e}))}}function mediaTrackToLocalTrack(e,t){switch(e.kind){case"audio":return new LocalAudioTrack(e,t,!1);case"video":return new LocalVideoTrack(e,t,!1);default:throw new TrackInvalidError("unsupported track type: ".concat(e.kind))}}const St=Object.values(Pe),Tt=Object.values(Re),bt=Object.values(_e),Ct=[Pe.h180,Pe.h360],wt=[Re.h180,Re.h360],Et=["q","h","f"];function computeVideoEncodings(e,t,i,n){var s,a;let o=null==n?void 0:n.videoEncoding;e&&(o=null==n?void 0:n.screenShareEncoding);const c=null==n?void 0:n.simulcast,u=null==n?void 0:n.scalabilityMode,l=null==n?void 0:n.videoCodec;if(!o&&!c&&!u||!t||!i)return[{}];o||(o=function determineAppropriateEncoding(e,t,i,n){const s=function presetsForResolution(e,t,i){if(e)return bt;const n=t>i?t/i:i/t;if(Math.abs(n-16/9)<Math.abs(n-4/3))return St;return Tt}(e,t,i);let{encoding:a}=s[0];const o=Math.max(t,i);for(let e=0;e<s.length;e+=1){const t=s[e];if(a=t.encoding,t.width>=o)break}if(n)switch(n){case"av1":a=Object.assign({},a),a.maxBitrate=.7*a.maxBitrate;break;case"vp9":a=Object.assign({},a),a.maxBitrate=.85*a.maxBitrate}return a}(e,t,i,l),p.debug("using video encoding",o));const h=new VideoPreset(t,i,o.maxBitrate,o.maxFramerate,o.priority);if(u&&isSVCCodec(l)){p.debug("using svc with scalabilityMode ".concat(u));const e=new ScalabilityMode(u),t=[];if(e.spatial>3)throw new Error("unsupported scalabilityMode: ".concat(u));for(let i=0;i<e.spatial;i+=1)t.push({rid:Et[2-i],maxBitrate:o.maxBitrate/Math.pow(3,i),maxFramerate:h.encoding.maxFramerate});return t[0].scalabilityMode=u,p.debug("encodings",t),t}if(!c)return[o];let m,g=[];if(g=e?null!==(s=sortPresets(null==n?void 0:n.screenShareSimulcastLayers))&&void 0!==s?s:defaultSimulcastLayers(e,h):null!==(a=sortPresets(null==n?void 0:n.videoSimulcastLayers))&&void 0!==a?a:defaultSimulcastLayers(e,h),g.length>0){const e=g[0];g.length>1&&([,m]=g);const n=Math.max(t,i);if(n>=960&&m)return encodingsFromPresets(t,i,[e,m,h]);if(n>=480)return encodingsFromPresets(t,i,[e,h])}return encodingsFromPresets(t,i,[h])}function computeTrackBackupEncodings(e,t,i){var n,s,a,o;if(!i.backupCodec||i.backupCodec.codec===i.videoCodec)return;t!==i.backupCodec.codec&&p.warn("requested a different codec than specified as backup",{serverRequested:t,backup:i.backupCodec.codec}),i.videoCodec=t,i.videoEncoding=i.backupCodec.encoding;const c=e.mediaStreamTrack.getSettings(),u=null!==(n=c.width)&&void 0!==n?n:null===(s=e.dimensions)||void 0===s?void 0:s.width,l=null!==(a=c.height)&&void 0!==a?a:null===(o=e.dimensions)||void 0===o?void 0:o.height;return computeVideoEncodings(e.source===Track.Source.ScreenShare,u,l,i)}function defaultSimulcastLayers(e,t){if(e)return i=t,[{scaleResolutionDownBy:2,fps:3}].map((e=>{var t;return new VideoPreset(Math.floor(i.width/e.scaleResolutionDownBy),Math.floor(i.height/e.scaleResolutionDownBy),Math.max(15e4,Math.floor(i.encoding.maxBitrate/(Math.pow(e.scaleResolutionDownBy,2)*((null!==(t=i.encoding.maxFramerate)&&void 0!==t?t:30)/e.fps)))),e.fps,i.encoding.priority)}));var i;const{width:n,height:s}=t,a=n>s?n/s:s/n;return Math.abs(a-16/9)<Math.abs(a-4/3)?Ct:wt}function encodingsFromPresets(e,t,i){const n=[];if(i.forEach(((i,s)=>{if(s>=Et.length)return;const a=Math.min(e,t),o={rid:Et[s],scaleResolutionDownBy:Math.max(1,a/Math.min(i.width,i.height)),maxBitrate:i.encoding.maxBitrate};i.encoding.maxFramerate&&(o.maxFramerate=i.encoding.maxFramerate);const c=isFireFox()||0===s;i.encoding.priority&&c&&(o.priority=i.encoding.priority,o.networkPriority=i.encoding.priority),n.push(o)})),isReactNative()&&"ios"===getReactNativeOs()){let e;n.forEach((t=>{e?t.maxFramerate&&t.maxFramerate>e&&(e=t.maxFramerate):e=t.maxFramerate}));let t=!0;n.forEach((i=>{var n;i.maxFramerate!=e&&(t&&(t=!1,p.info("Simulcast on iOS React-Native requires all encodings to share the same framerate.")),p.info('Setting framerate of encoding "'.concat(null!==(n=i.rid)&&void 0!==n?n:"",'" to ').concat(e)),i.maxFramerate=e)}))}return n}function sortPresets(e){if(e)return e.sort(((e,t)=>{const{encoding:i}=e,{encoding:n}=t;return i.maxBitrate>n.maxBitrate?1:i.maxBitrate<n.maxBitrate?-1:i.maxBitrate===n.maxBitrate&&i.maxFramerate&&n.maxFramerate?i.maxFramerate>n.maxFramerate?1:-1:0}))}class ScalabilityMode{constructor(e){const t=e.match(/^L(\d)T(\d)(h|_KEY|_KEY_SHIFT){0,1}$/);if(!t)throw new Error("invalid scalability mode");if(this.spatial=parseInt(t[1]),this.temporal=parseInt(t[2]),t.length>3)switch(t[3]){case"h":case"_KEY":case"_KEY_SHIFT":this.suffix=t[3]}}toString(){var e;return"L".concat(this.spatial,"T").concat(this.temporal).concat(null!==(e=this.suffix)&&void 0!==e?e:"")}}class LocalVideoTrack extends LocalTrack{constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,Track.Kind.Video,t,i),this.simulcastCodecs=new Map,this.monitorSender=()=>__awaiter(this,void 0,void 0,(function*(){if(!this.sender)return void(this._currentBitrate=0);let e;try{e=yield this.getSenderStats()}catch(e){return void p.error("could not get audio sender stats",{error:e})}const t=new Map(e.map((e=>[e.rid,e])));if(this.prevStats){let e=0;t.forEach(((t,i)=>{var n;const s=null===(n=this.prevStats)||void 0===n?void 0:n.get(i);e+=computeBitrate(t,s)})),this._currentBitrate=e}this.prevStats=t})),this.senderLock=new Mutex}get isSimulcast(){return!!(this.sender&&this.sender.getParameters().encodings.length>1)}startMonitor(e){var t;if(this.signalClient=e,!isWeb())return;const i=null===(t=this.sender)||void 0===t?void 0:t.getParameters();i&&(this.encodings=i.encodings),this.monitorInterval||(this.monitorInterval=setInterval((()=>{this.monitorSender()}),yt))}stop(){this._mediaStreamTrack.getConstraints(),this.simulcastCodecs.forEach((e=>{e.mediaStreamTrack.stop()})),super.stop()}pauseUpstream(){const e=Object.create(null,{pauseUpstream:{get:()=>super.pauseUpstream}});var t,i,n,s,a;return __awaiter(this,void 0,void 0,(function*(){yield e.pauseUpstream.call(this);try{for(var o,c=!0,u=__asyncValues(this.simulcastCodecs.values());o=yield u.next(),!(t=o.done);c=!0){s=o.value,c=!1;const e=s;yield null===(a=e.sender)||void 0===a?void 0:a.replaceTrack(null)}}catch(e){i={error:e}}finally{try{c||t||!(n=u.return)||(yield n.call(u))}finally{if(i)throw i.error}}}))}resumeUpstream(){const e=Object.create(null,{resumeUpstream:{get:()=>super.resumeUpstream}});var t,i,n,s,a;return __awaiter(this,void 0,void 0,(function*(){yield e.resumeUpstream.call(this);try{for(var o,c=!0,u=__asyncValues(this.simulcastCodecs.values());o=yield u.next(),!(t=o.done);c=!0){s=o.value,c=!1;const e=s;yield null===(a=e.sender)||void 0===a?void 0:a.replaceTrack(e.mediaStreamTrack)}}catch(e){i={error:e}}finally{try{c||t||!(n=u.return)||(yield n.call(u))}finally{if(i)throw i.error}}}))}mute(){const e=Object.create(null,{mute:{get:()=>super.mute}});return __awaiter(this,void 0,void 0,(function*(){const t=yield this.muteLock.lock();try{return this.source!==Track.Source.Camera||this.isUserProvided||(p.debug("stopping camera track"),this._mediaStreamTrack.stop()),yield e.mute.call(this),this}finally{t()}}))}unmute(){const e=Object.create(null,{unmute:{get:()=>super.unmute}});return __awaiter(this,void 0,void 0,(function*(){const t=yield this.muteLock.lock();try{return this.source!==Track.Source.Camera||this.isUserProvided||(p.debug("reacquiring camera track"),yield this.restartTrack()),yield e.unmute.call(this),this}finally{t()}}))}setTrackMuted(e){super.setTrackMuted(e);for(const t of this.simulcastCodecs.values())t.mediaStreamTrack.enabled=!e}getSenderStats(){var e;return __awaiter(this,void 0,void 0,(function*(){if(!(null===(e=this.sender)||void 0===e?void 0:e.getStats))return[];const t=[],i=yield this.sender.getStats();return i.forEach((e=>{var n;if("outbound-rtp"===e.type){const s={type:"video",streamId:e.id,frameHeight:e.frameHeight,frameWidth:e.frameWidth,firCount:e.firCount,pliCount:e.pliCount,nackCount:e.nackCount,packetsSent:e.packetsSent,bytesSent:e.bytesSent,framesSent:e.framesSent,timestamp:e.timestamp,rid:null!==(n=e.rid)&&void 0!==n?n:e.id,retransmittedPacketsSent:e.retransmittedPacketsSent,qualityLimitationReason:e.qualityLimitationReason,qualityLimitationResolutionChanges:e.qualityLimitationResolutionChanges},a=i.get(e.remoteId);a&&(s.jitter=a.jitter,s.packetsLost=a.packetsLost,s.roundTripTime=a.roundTripTime),t.push(s)}})),t}))}setPublishingQuality(e){const t=[];for(let i=N.LOW;i<=N.HIGH;i+=1)t.push(new SubscribedQuality({quality:i,enabled:i<=e}));p.debug("setting publishing quality. max quality ".concat(e)),this.setPublishingLayers(t)}setDeviceId(e){return __awaiter(this,void 0,void 0,(function*(){return this._constraints.deviceId===e&&this._mediaStreamTrack.getSettings().deviceId===unwrapConstraint(e)||(this._constraints.deviceId=e,this.isMuted||(yield this.restartTrack()),this.isMuted||unwrapConstraint(e)===this._mediaStreamTrack.getSettings().deviceId)}))}restartTrack(e){var t,i,n,s;return __awaiter(this,void 0,void 0,(function*(){let a;if(e){const t=constraintsForOptions({video:e});"boolean"!=typeof t.video&&(a=t.video)}yield this.restart(a);try{for(var o,c=!0,u=__asyncValues(this.simulcastCodecs.values());o=yield u.next(),!(t=o.done);c=!0){s=o.value,c=!1;const e=s;e.sender&&(e.mediaStreamTrack=this.mediaStreamTrack.clone(),yield e.sender.replaceTrack(e.mediaStreamTrack))}}catch(e){i={error:e}}finally{try{c||t||!(n=u.return)||(yield n.call(u))}finally{if(i)throw i.error}}}))}setProcessor(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=Object.create(null,{setProcessor:{get:()=>super.setProcessor}});var n,s,a,o,c,u;return __awaiter(this,void 0,void 0,(function*(){if(yield i.setProcessor.call(this,e,t),null===(c=this.processor)||void 0===c?void 0:c.processedTrack)try{for(var l,h=!0,p=__asyncValues(this.simulcastCodecs.values());l=yield p.next(),!(n=l.done);h=!0){o=l.value,h=!1;const e=o;yield null===(u=e.sender)||void 0===u?void 0:u.replaceTrack(this.processor.processedTrack)}}catch(e){s={error:e}}finally{try{h||n||!(a=p.return)||(yield a.call(p))}finally{if(s)throw s.error}}}))}addSimulcastTrack(e,t){if(this.simulcastCodecs.has(e))throw new Error("".concat(e," already added"));const i={codec:e,mediaStreamTrack:this.mediaStreamTrack.clone(),sender:void 0,encodings:t};return this.simulcastCodecs.set(e,i),i}setSimulcastTrackSender(e,t){const i=this.simulcastCodecs.get(e);i&&(i.sender=t,setTimeout((()=>{this.subscribedCodecs&&this.setPublishingCodecs(this.subscribedCodecs)}),5e3))}setPublishingCodecs(e){var t,i,n,s,a,o,c;return __awaiter(this,void 0,void 0,(function*(){if(p.debug("setting publishing codecs",{codecs:e,currentCodec:this.codec}),!this.codec&&e.length>0)return yield this.setPublishingLayers(e[0].qualities),[];this.subscribedCodecs=e;const u=[];try{for(t=!0,i=__asyncValues(e);n=yield i.next(),!(s=n.done);t=!0){c=n.value,t=!1;const e=c;if(this.codec&&this.codec!==e.codec){const t=this.simulcastCodecs.get(e.codec);if(p.debug("try setPublishingCodec for ".concat(e.codec),t),t&&t.sender)t.encodings&&(p.debug("try setPublishingLayersForSender ".concat(e.codec)),yield setPublishingLayersForSender(t.sender,t.encodings,e.qualities,this.senderLock));else for(const t of e.qualities)if(t.enabled){u.push(e.codec);break}}else yield this.setPublishingLayers(e.qualities)}}catch(e){a={error:e}}finally{try{t||s||!(o=i.return)||(yield o.call(i))}finally{if(a)throw a.error}}return u}))}setPublishingLayers(e){return __awaiter(this,void 0,void 0,(function*(){p.debug("setting publishing layers",e),this.sender&&this.encodings&&(yield setPublishingLayersForSender(this.sender,this.encodings,e,this.senderLock))}))}handleAppVisibilityChanged(){const e=Object.create(null,{handleAppVisibilityChanged:{get:()=>super.handleAppVisibilityChanged}});return __awaiter(this,void 0,void 0,(function*(){yield e.handleAppVisibilityChanged.call(this),isMobile()&&this.isInBackground&&this.source===Track.Source.Camera&&(this._mediaStreamTrack.enabled=!1)}))}}function setPublishingLayersForSender(e,t,i,n){return __awaiter(this,void 0,void 0,(function*(){const s=yield n.lock();p.debug("setPublishingLayersForSender",{sender:e,qualities:i,senderEncodings:t});try{const n=e.getParameters(),{encodings:a}=n;if(!a)return;if(a.length!==t.length)return void p.warn("cannot set publishing layers, encodings mismatch");let o=!1;!1&&a[0].scalabilityMode||a.forEach(((e,n)=>{var s;let a=null!==(s=e.rid)&&void 0!==s?s:"";""===a&&(a="q");const c=videoQualityForRid(a),u=i.find((e=>e.quality===c));u&&e.active!==u.enabled&&(o=!0,e.active=u.enabled,p.debug("setting layer ".concat(u.quality," to ").concat(e.active?"enabled":"disabled")),isFireFox()&&(u.enabled?(e.scaleResolutionDownBy=t[n].scaleResolutionDownBy,e.maxBitrate=t[n].maxBitrate,e.maxFrameRate=t[n].maxFrameRate):(e.scaleResolutionDownBy=4,e.maxBitrate=10,e.maxFrameRate=2)))})),o&&(n.encodings=a,p.debug("setting encodings",n.encodings),yield e.setParameters(n))}finally{s()}}))}function videoQualityForRid(e){switch(e){case"f":default:return N.HIGH;case"h":return N.MEDIUM;case"q":return N.LOW}}function videoLayersFromEncodings(e,t,i,n){if(!i)return[new VideoLayer({quality:N.HIGH,width:e,height:t,bitrate:0,ssrc:0})];if(n){const n=i[0].scalabilityMode,s=new ScalabilityMode(n),a=[];for(let n=0;n<s.spatial;n+=1)a.push(new VideoLayer({quality:N.HIGH-n,width:Math.ceil(e/Math.pow(2,n)),height:Math.ceil(t/Math.pow(2,n)),bitrate:i[0].maxBitrate?Math.ceil(i[0].maxBitrate/Math.pow(3,n)):0,ssrc:0}));return a}return i.map((i=>{var n,s,a;const o=null!==(n=i.scaleResolutionDownBy)&&void 0!==n?n:1;let c=videoQualityForRid(null!==(s=i.rid)&&void 0!==s?s:"");return new VideoLayer({quality:c,width:Math.ceil(e/o),height:Math.ceil(t/o),bitrate:null!==(a=i.maxBitrate)&&void 0!==a?a:0,ssrc:0})}))}class RemoteTrack extends Track{constructor(e,t,i,n){super(e,i),this.sid=t,this.receiver=n}setMuted(e){this.isMuted!==e&&(this.isMuted=e,this._mediaStreamTrack.enabled=!e,this.emit(e?Me.Muted:Me.Unmuted,this))}setMediaStream(e){this.mediaStream=e,e.onremovetrack=()=>{this.receiver=void 0,this._currentBitrate=0,this.emit(Me.Ended,this)}}start(){this.startMonitor(),super.enable()}stop(){this.stopMonitor(),super.disable()}startMonitor(){this.monitorInterval||(this.monitorInterval=setInterval((()=>this.monitorReceiver()),yt))}}class RemoteAudioTrack extends RemoteTrack{constructor(e,t,i,n,s){super(e,t,Track.Kind.Audio,i),this.monitorReceiver=()=>__awaiter(this,void 0,void 0,(function*(){if(!this.receiver)return void(this._currentBitrate=0);const e=yield this.getReceiverStats();e&&this.prevStats&&this.receiver&&(this._currentBitrate=computeBitrate(e,this.prevStats)),this.prevStats=e})),this.audioContext=n,this.webAudioPluginNodes=[],s&&(this.sinkId=s.deviceId)}setVolume(e){var t;for(const i of this.attachedElements)this.audioContext?null===(t=this.gainNode)||void 0===t||t.gain.setTargetAtTime(e,0,.1):i.volume=e;isReactNative()&&this._mediaStreamTrack._setVolume(e),this.elementVolume=e}getVolume(){if(this.elementVolume)return this.elementVolume;if(isReactNative())return 1;let e=0;return this.attachedElements.forEach((t=>{t.volume>e&&(e=t.volume)})),e}setSinkId(e){return __awaiter(this,void 0,void 0,(function*(){this.sinkId=e,yield Promise.all(this.attachedElements.map((t=>{if(supportsSetSinkId(t))return t.setSinkId(e)})))}))}attach(e){const t=0===this.attachedElements.length;return e?super.attach(e):e=super.attach(),this.elementVolume&&(e.volume=this.elementVolume),this.sinkId&&supportsSetSinkId(e)&&e.setSinkId(this.sinkId),this.audioContext&&t&&(p.debug("using audio context mapping"),this.connectWebAudio(this.audioContext,e),e.volume=0,e.muted=!0),e}detach(e){let t;return e?(t=super.detach(e),this.audioContext&&(this.attachedElements.length>0?this.connectWebAudio(this.audioContext,this.attachedElements[0]):this.disconnectWebAudio())):(t=super.detach(),this.disconnectWebAudio()),t}setAudioContext(e){this.audioContext=e,e&&this.attachedElements.length>0?this.connectWebAudio(e,this.attachedElements[0]):e||this.disconnectWebAudio()}setWebAudioPlugins(e){this.webAudioPluginNodes=e,this.attachedElements.length>0&&this.audioContext&&this.connectWebAudio(this.audioContext,this.attachedElements[0])}connectWebAudio(e,t){this.disconnectWebAudio(),this.sourceNode=e.createMediaStreamSource(t.srcObject);let i=this.sourceNode;this.webAudioPluginNodes.forEach((e=>{i.connect(e),i=e})),this.gainNode=e.createGain(),i.connect(this.gainNode),this.gainNode.connect(e.destination),this.elementVolume&&this.gainNode.gain.setTargetAtTime(this.elementVolume,0,.1),"running"!==e.state&&e.resume().then((()=>{"running"!==e.state&&this.emit(Me.AudioPlaybackFailed,new Error("Audio Context couldn't be started automatically"))})).catch((e=>{this.emit(Me.AudioPlaybackFailed,e)}))}disconnectWebAudio(){var e,t;null===(e=this.gainNode)||void 0===e||e.disconnect(),null===(t=this.sourceNode)||void 0===t||t.disconnect(),this.gainNode=void 0,this.sourceNode=void 0}getReceiverStats(){return __awaiter(this,void 0,void 0,(function*(){if(!this.receiver||!this.receiver.getStats)return;let e;return(yield this.receiver.getStats()).forEach((t=>{"inbound-rtp"===t.type&&(e={type:"audio",timestamp:t.timestamp,jitter:t.jitter,bytesReceived:t.bytesReceived,concealedSamples:t.concealedSamples,concealmentEvents:t.concealmentEvents,silentConcealedSamples:t.silentConcealedSamples,silentConcealmentEvents:t.silentConcealmentEvents,totalAudioEnergy:t.totalAudioEnergy,totalSamplesDuration:t.totalSamplesDuration})})),e}))}}class RemoteVideoTrack extends RemoteTrack{constructor(e,t,i,n){super(e,t,Track.Kind.Video,i),this.elementInfos=[],this.monitorReceiver=()=>__awaiter(this,void 0,void 0,(function*(){if(!this.receiver)return void(this._currentBitrate=0);const e=yield this.getReceiverStats();e&&this.prevStats&&this.receiver&&(this._currentBitrate=computeBitrate(e,this.prevStats)),this.prevStats=e})),this.debouncedHandleResize=r((()=>{this.updateDimensions()}),100),this.adaptiveStreamSettings=n}get isAdaptiveStream(){return void 0!==this.adaptiveStreamSettings}get mediaStreamTrack(){return this._mediaStreamTrack}setMuted(e){super.setMuted(e),this.attachedElements.forEach((t=>{e?detachTrack(this._mediaStreamTrack,t):attachToElement(this._mediaStreamTrack,t)}))}attach(e){if(e?super.attach(e):e=super.attach(),this.adaptiveStreamSettings&&void 0===this.elementInfos.find((t=>t.element===e))){const t=new HTMLElementInfo(e);this.observeElementInfo(t)}return e}observeElementInfo(e){this.adaptiveStreamSettings&&void 0===this.elementInfos.find((t=>t===e))?(e.handleResize=()=>{this.debouncedHandleResize()},e.handleVisibilityChanged=()=>{this.updateVisibility()},this.elementInfos.push(e),e.observe(),this.debouncedHandleResize(),this.updateVisibility()):p.warn("visibility resize observer not triggered")}stopObservingElementInfo(e){if(!this.isAdaptiveStream)return void p.warn("stopObservingElementInfo ignored");const t=this.elementInfos.filter((t=>t===e));for(const e of t)e.stopObserving();this.elementInfos=this.elementInfos.filter((t=>t!==e)),this.updateVisibility(),this.debouncedHandleResize()}detach(e){let t=[];if(e)return this.stopObservingElement(e),super.detach(e);t=super.detach();for(const e of t)this.stopObservingElement(e);return t}getDecoderImplementation(){var e;return null===(e=this.prevStats)||void 0===e?void 0:e.decoderImplementation}getReceiverStats(){return __awaiter(this,void 0,void 0,(function*(){if(!this.receiver||!this.receiver.getStats)return;let e;return(yield this.receiver.getStats()).forEach((t=>{"inbound-rtp"===t.type&&(e={type:"video",framesDecoded:t.framesDecoded,framesDropped:t.framesDropped,framesReceived:t.framesReceived,packetsReceived:t.packetsReceived,packetsLost:t.packetsLost,frameWidth:t.frameWidth,frameHeight:t.frameHeight,pliCount:t.pliCount,firCount:t.firCount,nackCount:t.nackCount,jitter:t.jitter,timestamp:t.timestamp,bytesReceived:t.bytesReceived,decoderImplementation:t.decoderImplementation})})),e}))}stopObservingElement(e){const t=this.elementInfos.filter((t=>t.element===e));for(const e of t)this.stopObservingElementInfo(e)}handleAppVisibilityChanged(){const e=Object.create(null,{handleAppVisibilityChanged:{get:()=>super.handleAppVisibilityChanged}});return __awaiter(this,void 0,void 0,(function*(){yield e.handleAppVisibilityChanged.call(this),this.isAdaptiveStream&&this.updateVisibility()}))}updateVisibility(){var e,t;const i=this.elementInfos.reduce(((e,t)=>Math.max(e,t.visibilityChangedAt||0)),0),n=!(null!==(t=null===(e=this.adaptiveStreamSettings)||void 0===e?void 0:e.pauseVideoInBackground)&&void 0!==t&&!t)&&this.isInBackground,s=this.elementInfos.some((e=>e.pictureInPicture)),a=this.elementInfos.some((e=>e.visible))&&!n||s;this.lastVisible!==a&&(!a&&Date.now()-i<100?CriticalTimers.setTimeout((()=>{this.updateVisibility()}),100):(this.lastVisible=a,this.emit(Me.VisibilityChanged,a,this)))}updateDimensions(){var e,t;let i=0,n=0;const s=this.getPixelDensity();for(const e of this.elementInfos){const t=e.width()*s,a=e.height()*s;t+a>i+n&&(i=t,n=a)}(null===(e=this.lastDimensions)||void 0===e?void 0:e.width)===i&&(null===(t=this.lastDimensions)||void 0===t?void 0:t.height)===n||(this.lastDimensions={width:i,height:n},this.emit(Me.VideoDimensionsChanged,this.lastDimensions,this))}getPixelDensity(){var e;const t=null===(e=this.adaptiveStreamSettings)||void 0===e?void 0:e.pixelDensity;if("screen"===t)return getDevicePixelRatio();if(!t){return getDevicePixelRatio()>2?2:1}return t}}class HTMLElementInfo{get visible(){return this.isPiP||this.isIntersecting}get pictureInPicture(){return this.isPiP}constructor(e,t){this.onVisibilityChanged=e=>{var t;const{target:i,isIntersecting:n}=e;i===this.element&&(this.isIntersecting=n,this.visibilityChangedAt=Date.now(),null===(t=this.handleVisibilityChanged)||void 0===t||t.call(this))},this.onEnterPiP=()=>{var e;this.isPiP=!0,null===(e=this.handleVisibilityChanged)||void 0===e||e.call(this)},this.onLeavePiP=()=>{var e;this.isPiP=!1,null===(e=this.handleVisibilityChanged)||void 0===e||e.call(this)},this.element=e,this.isIntersecting=null!=t?t:isElementInViewport(e),this.isPiP=isWeb()&&document.pictureInPictureElement===e,this.visibilityChangedAt=0}width(){return this.element.clientWidth}height(){return this.element.clientHeight}observe(){this.isIntersecting=isElementInViewport(this.element),this.isPiP=document.pictureInPictureElement===this.element,this.element.handleResize=()=>{var e;null===(e=this.handleResize)||void 0===e||e.call(this)},this.element.handleVisibilityChanged=this.onVisibilityChanged,getIntersectionObserver().observe(this.element),getResizeObserver().observe(this.element),this.element.addEventListener("enterpictureinpicture",this.onEnterPiP),this.element.addEventListener("leavepictureinpicture",this.onLeavePiP)}stopObserving(){var e,t;null===(e=getIntersectionObserver())||void 0===e||e.unobserve(this.element),null===(t=getResizeObserver())||void 0===t||t.unobserve(this.element),this.element.removeEventListener("enterpictureinpicture",this.onEnterPiP),this.element.removeEventListener("leavepictureinpicture",this.onLeavePiP)}}function isElementInViewport(e){let t=e.offsetTop,i=e.offsetLeft;const n=e.offsetWidth,s=e.offsetHeight,{hidden:a}=e,{opacity:o,display:c}=getComputedStyle(e);for(;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,i+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&i<window.pageXOffset+window.innerWidth&&t+s>window.pageYOffset&&i+n>window.pageXOffset&&!a&&(""===o||parseFloat(o)>0)&&"none"!==c}class TrackPublication extends ie.EventEmitter{constructor(e,t,i){super(),this.metadataMuted=!1,this.encryption=W.NONE,this.handleMuted=()=>{this.emit(Me.Muted)},this.handleUnmuted=()=>{this.emit(Me.Unmuted)},this.setMaxListeners(100),this.kind=e,this.trackSid=t,this.trackName=i,this.source=Track.Source.Unknown}setTrack(e){this.track&&(this.track.off(Me.Muted,this.handleMuted),this.track.off(Me.Unmuted,this.handleUnmuted)),this.track=e,e&&(e.on(Me.Muted,this.handleMuted),e.on(Me.Unmuted,this.handleUnmuted))}get isMuted(){return this.metadataMuted}get isEnabled(){return!0}get isSubscribed(){return void 0!==this.track}get isEncrypted(){return this.encryption!==W.NONE}get audioTrack(){if(this.track instanceof LocalAudioTrack||this.track instanceof RemoteAudioTrack)return this.track}get videoTrack(){if(this.track instanceof LocalVideoTrack||this.track instanceof RemoteVideoTrack)return this.track}updateInfo(e){this.trackSid=e.sid,this.trackName=e.name,this.source=Track.sourceFromProto(e.source),this.mimeType=e.mimeType,this.kind===Track.Kind.Video&&e.width>0&&(this.dimensions={width:e.width,height:e.height},this.simulcasted=e.simulcast),this.encryption=e.encryption,this.trackInfo=e,p.debug("update publication info",{info:e})}}!function(e){var t,i;(t=e.SubscriptionStatus||(e.SubscriptionStatus={})).Desired="desired",t.Subscribed="subscribed",t.Unsubscribed="unsubscribed",(i=e.PermissionStatus||(e.PermissionStatus={})).Allowed="allowed",i.NotAllowed="not_allowed"}(TrackPublication||(TrackPublication={}));class LocalTrackPublication extends TrackPublication{get isUpstreamPaused(){var e;return null===(e=this.track)||void 0===e?void 0:e.isUpstreamPaused}constructor(e,t,i){super(e,t.sid,t.name),this.track=void 0,this.handleTrackEnded=()=>{this.emit(Me.Ended)},this.updateInfo(t),this.setTrack(i)}setTrack(e){this.track&&this.track.off(Me.Ended,this.handleTrackEnded),super.setTrack(e),e&&e.on(Me.Ended,this.handleTrackEnded)}get isMuted(){return this.track?this.track.isMuted:super.isMuted}get audioTrack(){return super.audioTrack}get videoTrack(){return super.videoTrack}mute(){var e;return __awaiter(this,void 0,void 0,(function*(){return null===(e=this.track)||void 0===e?void 0:e.mute()}))}unmute(){var e;return __awaiter(this,void 0,void 0,(function*(){return null===(e=this.track)||void 0===e?void 0:e.unmute()}))}pauseUpstream(){var e;return __awaiter(this,void 0,void 0,(function*(){yield null===(e=this.track)||void 0===e?void 0:e.pauseUpstream()}))}resumeUpstream(){var e;return __awaiter(this,void 0,void 0,(function*(){yield null===(e=this.track)||void 0===e?void 0:e.resumeUpstream()}))}}var Pt,Rt;!function(e){e.Excellent="excellent",e.Good="good",e.Poor="poor",e.Unknown="unknown"}(Pt||(Pt={}));class Participant extends ie.EventEmitter{get isEncrypted(){return this.tracks.size>0&&Array.from(this.tracks.values()).every((e=>e.isEncrypted))}constructor(e,t,i,n){super(),this.audioLevel=0,this.isSpeaking=!1,this._connectionQuality=Pt.Unknown,this.setMaxListeners(100),this.sid=e,this.identity=t,this.name=i,this.metadata=n,this.audioTracks=new Map,this.videoTracks=new Map,this.tracks=new Map}getTracks(){return Array.from(this.tracks.values())}getTrack(e){for(const[,t]of this.tracks)if(t.source===e)return t}getTrackByName(e){for(const[,t]of this.tracks)if(t.trackName===e)return t}get connectionQuality(){return this._connectionQuality}get isCameraEnabled(){var e;const t=this.getTrack(Track.Source.Camera);return!(null===(e=null==t?void 0:t.isMuted)||void 0===e||e)}get isMicrophoneEnabled(){var e;const t=this.getTrack(Track.Source.Microphone);return!(null===(e=null==t?void 0:t.isMuted)||void 0===e||e)}get isScreenShareEnabled(){return!!this.getTrack(Track.Source.ScreenShare)}get isLocal(){return!1}get joinedAt(){return this.participantInfo?new Date(1e3*Number.parseInt(this.participantInfo.joinedAt.toString())):new Date}updateInfo(e){return!(this.participantInfo&&this.participantInfo.sid===e.sid&&this.participantInfo.version>e.version)&&(this.identity=e.identity,this.sid=e.sid,this.setName(e.name),this.setMetadata(e.metadata),e.permission&&this.setPermissions(e.permission),this.participantInfo=e,p.trace("update participant info",{info:e}),!0)}setMetadata(e){const t=this.metadata!==e,i=this.metadata;this.metadata=e,t&&this.emit(De.ParticipantMetadataChanged,i)}setName(e){const t=this.name!==e;this.name=e,t&&this.emit(De.ParticipantNameChanged,e)}setPermissions(e){var t,i,n,s,a;const o=this.permissions,c=e.canPublish!==(null===(t=this.permissions)||void 0===t?void 0:t.canPublish)||e.canSubscribe!==(null===(i=this.permissions)||void 0===i?void 0:i.canSubscribe)||e.canPublishData!==(null===(n=this.permissions)||void 0===n?void 0:n.canPublishData)||e.hidden!==(null===(s=this.permissions)||void 0===s?void 0:s.hidden)||e.recorder!==(null===(a=this.permissions)||void 0===a?void 0:a.recorder)||e.canPublishSources.length!==this.permissions.canPublishSources.length||e.canPublishSources.some(((e,t)=>{var i;return e!==(null===(i=this.permissions)||void 0===i?void 0:i.canPublishSources[t])}));return this.permissions=e,c&&this.emit(De.ParticipantPermissionsChanged,o),c}setIsSpeaking(e){e!==this.isSpeaking&&(this.isSpeaking=e,e&&(this.lastSpokeAt=new Date),this.emit(De.IsSpeakingChanged,e))}setConnectionQuality(e){const t=this._connectionQuality;this._connectionQuality=function qualityFromProto(e){switch(e){case x.EXCELLENT:return Pt.Excellent;case x.GOOD:return Pt.Good;case x.POOR:return Pt.Poor;default:return Pt.Unknown}}(e),t!==this._connectionQuality&&this.emit(De.ConnectionQualityChanged,this._connectionQuality)}setAudioContext(e){this.audioContext=e,this.audioTracks.forEach((t=>(t.track instanceof RemoteAudioTrack||t.track instanceof LocalAudioTrack)&&t.track.setAudioContext(e)))}addTrackPublication(e){e.on(Me.Muted,(()=>{this.emit(De.TrackMuted,e)})),e.on(Me.Unmuted,(()=>{this.emit(De.TrackUnmuted,e)}));const t=e;switch(t.track&&(t.track.sid=e.trackSid),this.tracks.set(e.trackSid,e),e.kind){case Track.Kind.Audio:this.audioTracks.set(e.trackSid,e);break;case Track.Kind.Video:this.videoTracks.set(e.trackSid,e)}}}class RemoteTrackPublication extends TrackPublication{constructor(e,t,i){super(e,t.sid,t.name),this.track=void 0,this.allowed=!0,this.disabled=!1,this.currentVideoQuality=N.HIGH,this.handleEnded=e=>{this.setTrack(void 0),this.emit(Me.Ended,e)},this.handleVisibilityChange=e=>{p.debug("adaptivestream video visibility ".concat(this.trackSid,", visible=").concat(e),{trackSid:this.trackSid}),this.disabled=!e,this.emitTrackUpdate()},this.handleVideoDimensionsChange=e=>{p.debug("adaptivestream video dimensions ".concat(e.width,"x").concat(e.height),{trackSid:this.trackSid}),this.videoDimensions=e,this.emitTrackUpdate()},this.subscribed=i,this.updateInfo(t)}setSubscribed(e){const t=this.subscriptionStatus,i=this.permissionStatus;this.subscribed=e,e&&(this.allowed=!0);const n=new UpdateSubscription({trackSids:[this.trackSid],subscribe:this.subscribed,participantTracks:[new ParticipantTracks({participantSid:"",trackSids:[this.trackSid]})]});this.emit(Me.UpdateSubscription,n),this.emitSubscriptionUpdateIfChanged(t),this.emitPermissionUpdateIfChanged(i)}get subscriptionStatus(){return!1===this.subscribed?TrackPublication.SubscriptionStatus.Unsubscribed:super.isSubscribed?TrackPublication.SubscriptionStatus.Subscribed:TrackPublication.SubscriptionStatus.Desired}get permissionStatus(){return this.allowed?TrackPublication.PermissionStatus.Allowed:TrackPublication.PermissionStatus.NotAllowed}get isSubscribed(){return!1!==this.subscribed&&super.isSubscribed}get isDesired(){return!1!==this.subscribed}get isEnabled(){return!this.disabled}setEnabled(e){this.isManualOperationAllowed()&&this.disabled!==!e&&(this.disabled=!e,this.emitTrackUpdate())}setVideoQuality(e){this.isManualOperationAllowed()&&this.currentVideoQuality!==e&&(this.currentVideoQuality=e,this.videoDimensions=void 0,this.emitTrackUpdate())}setVideoDimensions(e){var t,i;this.isManualOperationAllowed()&&((null===(t=this.videoDimensions)||void 0===t?void 0:t.width)===e.width&&(null===(i=this.videoDimensions)||void 0===i?void 0:i.height)===e.height||(this.track instanceof RemoteVideoTrack&&(this.videoDimensions=e),this.currentVideoQuality=void 0,this.emitTrackUpdate()))}setVideoFPS(e){this.isManualOperationAllowed()&&this.track instanceof RemoteVideoTrack&&this.fps!==e&&(this.fps=e,this.emitTrackUpdate())}get videoQuality(){return this.currentVideoQuality}setTrack(e){const t=this.subscriptionStatus,i=this.permissionStatus,n=this.track;n!==e&&(n&&(n.off(Me.VideoDimensionsChanged,this.handleVideoDimensionsChange),n.off(Me.VisibilityChanged,this.handleVisibilityChange),n.off(Me.Ended,this.handleEnded),n.detach(),n.stopMonitor(),this.emit(Me.Unsubscribed,n)),super.setTrack(e),e&&(e.sid=this.trackSid,e.on(Me.VideoDimensionsChanged,this.handleVideoDimensionsChange),e.on(Me.VisibilityChanged,this.handleVisibilityChange),e.on(Me.Ended,this.handleEnded),this.emit(Me.Subscribed,e)),this.emitPermissionUpdateIfChanged(i),this.emitSubscriptionUpdateIfChanged(t))}setAllowed(e){const t=this.subscriptionStatus,i=this.permissionStatus;this.allowed=e,this.emitPermissionUpdateIfChanged(i),this.emitSubscriptionUpdateIfChanged(t)}setSubscriptionError(e){this.emit(Me.SubscriptionFailed,e)}updateInfo(e){super.updateInfo(e);const t=this.metadataMuted;this.metadataMuted=e.muted,this.track?this.track.setMuted(e.muted):t!==e.muted&&this.emit(e.muted?Me.Muted:Me.Unmuted)}emitSubscriptionUpdateIfChanged(e){const t=this.subscriptionStatus;e!==t&&this.emit(Me.SubscriptionStatusChanged,t,e)}emitPermissionUpdateIfChanged(e){this.permissionStatus!==e&&this.emit(Me.SubscriptionPermissionChanged,this.permissionStatus,e)}isManualOperationAllowed(){return this.kind===Track.Kind.Video&&this.isAdaptiveStream?(p.warn("adaptive stream is enabled, cannot change video track settings",{trackSid:this.trackSid}),!1):!!this.isDesired||(p.warn("cannot update track settings when not subscribed",{trackSid:this.trackSid}),!1)}get isAdaptiveStream(){return this.track instanceof RemoteVideoTrack&&this.track.isAdaptiveStream}emitTrackUpdate(){const e=new UpdateTrackSettings({trackSids:[this.trackSid],disabled:this.disabled,fps:this.fps});this.videoDimensions?(e.width=Math.ceil(this.videoDimensions.width),e.height=Math.ceil(this.videoDimensions.height)):void 0!==this.currentVideoQuality?e.quality=this.currentVideoQuality:e.quality=N.HIGH,this.emit(Me.UpdateSettings,e)}}class RemoteParticipant extends Participant{static fromParticipantInfo(e,t){return new RemoteParticipant(e,t.sid,t.identity,t.name,t.metadata)}constructor(e,t,i,n,s){super(t,i||"",n,s),this.signalClient=e,this.tracks=new Map,this.audioTracks=new Map,this.videoTracks=new Map,this.volumeMap=new Map}addTrackPublication(e){super.addTrackPublication(e),e.on(Me.UpdateSettings,(e=>{p.debug("send update settings",e),this.signalClient.sendUpdateTrackSettings(e)})),e.on(Me.UpdateSubscription,(e=>{e.participantTracks.forEach((e=>{e.participantSid=this.sid})),this.signalClient.sendUpdateSubscription(e)})),e.on(Me.SubscriptionPermissionChanged,(t=>{this.emit(De.TrackSubscriptionPermissionChanged,e,t)})),e.on(Me.SubscriptionStatusChanged,(t=>{this.emit(De.TrackSubscriptionStatusChanged,e,t)})),e.on(Me.Subscribed,(t=>{this.emit(De.TrackSubscribed,t,e)})),e.on(Me.Unsubscribed,(t=>{this.emit(De.TrackUnsubscribed,t,e)})),e.on(Me.SubscriptionFailed,(t=>{this.emit(De.TrackSubscriptionFailed,e.trackSid,t)}))}getTrack(e){const t=super.getTrack(e);if(t)return t}getTrackByName(e){const t=super.getTrackByName(e);if(t)return t}setVolume(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Track.Source.Microphone;this.volumeMap.set(t,e);const i=this.getTrack(t);i&&i.track&&i.track.setVolume(e)}getVolume(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Track.Source.Microphone;const t=this.getTrack(e);return t&&t.track?t.track.getVolume():this.volumeMap.get(e)}addSubscribedMediaTrack(e,t,i,n,s,a){let o=this.getTrackPublication(t);if(o||t.startsWith("TR")||this.tracks.forEach((t=>{o||e.kind!==t.kind.toString()||(o=t)})),!o)return 0===a?(p.error("could not find published track",{participant:this.sid,trackSid:t}),void this.emit(De.TrackSubscriptionFailed,t)):(void 0===a&&(a=20),void setTimeout((()=>{this.addSubscribedMediaTrack(e,t,i,n,s,a-1)}),150));if("ended"===e.readyState)return p.error("unable to subscribe because MediaStreamTrack is ended. Do not call MediaStreamTrack.stop()",{participant:this.sid,trackSid:t}),void this.emit(De.TrackSubscriptionFailed,t);let c;return c="video"===e.kind?new RemoteVideoTrack(e,t,n,s):new RemoteAudioTrack(e,t,n,this.audioContext,this.audioOutput),c.source=o.source,c.isMuted=o.isMuted,c.setMediaStream(i),c.start(),o.setTrack(c),this.volumeMap.has(o.source)&&c instanceof RemoteAudioTrack&&c.setVolume(this.volumeMap.get(o.source)),o}get hasMetadata(){return!!this.participantInfo}getTrackPublication(e){return this.tracks.get(e)}updateInfo(e){if(!super.updateInfo(e))return!1;const t=new Map,i=new Map;return e.tracks.forEach((n=>{var s;let a=this.getTrackPublication(n.sid);if(a)a.updateInfo(n);else{const t=Track.kindFromProto(n.type);if(!t)return;a=new RemoteTrackPublication(t,n,null===(s=this.signalClient.connectOptions)||void 0===s?void 0:s.autoSubscribe),a.updateInfo(n),i.set(n.sid,a);const o=Array.from(this.tracks.values()).find((e=>e.source===(null==a?void 0:a.source)));o&&a.source!==Track.Source.Unknown&&p.debug("received a second track publication for ".concat(this.identity," with the same source: ").concat(a.source),{oldTrack:o,newTrack:a,participant:this,participantInfo:e}),this.addTrackPublication(a)}t.set(n.sid,a)})),this.tracks.forEach((e=>{t.has(e.trackSid)||(p.trace("detected removed track on remote participant, unpublishing",{publication:e,participantSid:this.sid}),this.unpublishTrack(e.trackSid,!0))})),i.forEach((e=>{this.emit(De.TrackPublished,e)})),!0}unpublishTrack(e,t){const i=this.tracks.get(e);if(!i)return;const{track:n}=i;switch(n&&(n.stop(),i.setTrack(void 0)),this.tracks.delete(e),i.kind){case Track.Kind.Audio:this.audioTracks.delete(e);break;case Track.Kind.Video:this.videoTracks.delete(e)}t&&this.emit(De.TrackUnpublished,i)}setAudioOutput(e){return __awaiter(this,void 0,void 0,(function*(){this.audioOutput=e;const t=[];this.audioTracks.forEach((i=>{var n;i.track instanceof RemoteAudioTrack&&t.push(i.track.setSinkId(null!==(n=e.deviceId)&&void 0!==n?n:"default"))})),yield Promise.all(t)}))}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return p.trace("participant event",{participant:this.sid,event:e,args:i}),super.emit(e,...i)}}class LocalParticipant extends Participant{constructor(e,t,i,n){super(e,t),this.pendingPublishing=new Set,this.pendingPublishPromises=new Map,this.participantTrackPermissions=[],this.allParticipantsAllowedToSubscribe=!0,this.encryptionType=W.NONE,this.handleReconnecting=()=>{this.reconnectFuture||(this.reconnectFuture=new Future)},this.handleReconnected=()=>{var e,t;null===(t=null===(e=this.reconnectFuture)||void 0===e?void 0:e.resolve)||void 0===t||t.call(e),this.reconnectFuture=void 0,this.updateTrackSubscriptionPermissions()},this.handleDisconnected=()=>{var e,t;this.reconnectFuture&&(this.reconnectFuture.promise.catch((e=>p.warn(e))),null===(t=null===(e=this.reconnectFuture)||void 0===e?void 0:e.reject)||void 0===t||t.call(e,"Got disconnected during reconnection attempt"),this.reconnectFuture=void 0)},this.updateTrackSubscriptionPermissions=()=>{p.debug("updating track subscription permissions",{allParticipantsAllowed:this.allParticipantsAllowedToSubscribe,participantTrackPermissions:this.participantTrackPermissions}),this.engine.client.sendUpdateSubscriptionPermissions(this.allParticipantsAllowedToSubscribe,this.participantTrackPermissions.map((e=>function trackPermissionToProto(e){var t,i,n;if(!e.participantSid&&!e.participantIdentity)throw new Error("Invalid track permission, must provide at least one of participantIdentity and participantSid");return new TrackPermission({participantIdentity:null!==(t=e.participantIdentity)&&void 0!==t?t:"",participantSid:null!==(i=e.participantSid)&&void 0!==i?i:"",allTracks:null!==(n=e.allowAll)&&void 0!==n&&n,trackSids:e.allowedTrackSids||[]})}(e))))},this.onTrackUnmuted=e=>{this.onTrackMuted(e,e.isUpstreamPaused)},this.onTrackMuted=(e,t)=>{void 0===t&&(t=!0),e.sid?this.engine.updateMuteStatus(e.sid,t):p.error("could not update mute status for unpublished track",e)},this.onTrackUpstreamPaused=e=>{p.debug("upstream paused"),this.onTrackMuted(e,!0)},this.onTrackUpstreamResumed=e=>{p.debug("upstream resumed"),this.onTrackMuted(e,e.isMuted)},this.handleSubscribedQualityUpdate=e=>__awaiter(this,void 0,void 0,(function*(){var t,i,n,s,a,o;if(!(null===(a=this.roomOptions)||void 0===a?void 0:a.dynacast))return;const c=this.videoTracks.get(e.trackSid);if(c)if(e.subscribedCodecs.length>0){if(!c.videoTrack)return;const a=yield c.videoTrack.setPublishingCodecs(e.subscribedCodecs);try{for(var u,l=!0,h=__asyncValues(a);!(t=(u=yield h.next()).done);l=!0){s=u.value,l=!1;const e=s;isBackupCodec(e)&&(p.debug("publish ".concat(e," for ").concat(c.videoTrack.sid)),yield this.publishAdditionalCodecForTrack(c.videoTrack,e,c.options))}}catch(e){i={error:e}}finally{try{l||t||!(n=h.return)||(yield n.call(h))}finally{if(i)throw i.error}}}else e.subscribedQualities.length>0&&(yield null===(o=c.videoTrack)||void 0===o?void 0:o.setPublishingLayers(e.subscribedQualities));else p.warn("received subscribed quality update for unknown track",{method:"handleSubscribedQualityUpdate",sid:e.trackSid})})),this.handleLocalTrackUnpublished=e=>{const t=this.tracks.get(e.trackSid);t?this.unpublishTrack(t.track):p.warn("received unpublished event for unknown track",{method:"handleLocalTrackUnpublished",trackSid:e.trackSid})},this.handleTrackEnded=e=>__awaiter(this,void 0,void 0,(function*(){if(e.source===Track.Source.ScreenShare||e.source===Track.Source.ScreenShareAudio)p.debug("unpublishing local track due to TrackEnded",{track:e.sid}),this.unpublishTrack(e);else if(e.isUserProvided)yield e.mute();else if(e instanceof LocalAudioTrack||e instanceof LocalVideoTrack)try{if(isWeb())try{const t=yield null===navigator||void 0===navigator?void 0:navigator.permissions.query({name:e.source===Track.Source.Camera?"camera":"microphone"});if(t&&"denied"===t.state)throw p.warn("user has revoked access to ".concat(e.source)),t.onchange=()=>{"denied"!==t.state&&(e.isMuted||e.restartTrack(),t.onchange=null)},new Error("GetUserMedia Permission denied")}catch(e){}e.isMuted||(p.debug("track ended, attempting to use a different device"),yield e.restartTrack())}catch(t){p.warn("could not restart track, muting instead"),yield e.mute()}})),this.audioTracks=new Map,this.videoTracks=new Map,this.tracks=new Map,this.engine=i,this.roomOptions=n,this.setupEngine(i),this.activeDeviceMap=new Map}get lastCameraError(){return this.cameraError}get lastMicrophoneError(){return this.microphoneError}get isE2EEEnabled(){return this.encryptionType!==W.NONE}getTrack(e){const t=super.getTrack(e);if(t)return t}getTrackByName(e){const t=super.getTrackByName(e);if(t)return t}setupEngine(e){this.engine=e,this.engine.client.onRemoteMuteChanged=(e,t)=>{const i=this.tracks.get(e);i&&i.track&&(t?i.mute():i.unmute())},this.engine.client.onSubscribedQualityUpdate=this.handleSubscribedQualityUpdate,this.engine.client.onLocalTrackUnpublished=this.handleLocalTrackUnpublished,this.engine.on(Le.Connected,this.handleReconnected).on(Le.Restarted,this.handleReconnected).on(Le.Resumed,this.handleReconnected).on(Le.Restarting,this.handleReconnecting).on(Le.Resuming,this.handleReconnecting).on(Le.Disconnected,this.handleDisconnected)}setMetadata(e){var t;super.setMetadata(e),this.engine.client.sendUpdateLocalMetadata(e,null!==(t=this.name)&&void 0!==t?t:"")}setName(e){var t;super.setName(e),this.engine.client.sendUpdateLocalMetadata(null!==(t=this.metadata)&&void 0!==t?t:"",e)}setCameraEnabled(e,t,i){return this.setTrackEnabled(Track.Source.Camera,e,t,i)}setMicrophoneEnabled(e,t,i){return this.setTrackEnabled(Track.Source.Microphone,e,t,i)}setScreenShareEnabled(e,t,i){return this.setTrackEnabled(Track.Source.ScreenShare,e,t,i)}setPermissions(e){const t=this.permissions,i=super.setPermissions(e);return i&&t&&this.emit(De.ParticipantPermissionsChanged,t),i}setE2EEEnabled(e){return __awaiter(this,void 0,void 0,(function*(){this.encryptionType=e?W.GCM:W.NONE,yield this.republishAllTracks(void 0,!1)}))}setTrackEnabled(e,t,i,n){var s,a;return __awaiter(this,void 0,void 0,(function*(){p.debug("setTrackEnabled",{source:e,enabled:t});let o=this.getTrack(e);if(t)if(o)yield o.unmute();else{let t;if(this.pendingPublishing.has(e))return void p.info("skipping duplicate published source",{source:e});this.pendingPublishing.add(e);try{switch(e){case Track.Source.Camera:t=yield this.createTracks({video:null===(s=i)||void 0===s||s});break;case Track.Source.Microphone:t=yield this.createTracks({audio:null===(a=i)||void 0===a||a});break;case Track.Source.ScreenShare:t=yield this.createScreenTracks(Object.assign({},i));break;default:throw new TrackInvalidError(e)}const c=[];for(const e of t)p.info("publishing track",{localTrack:e}),c.push(this.publishTrack(e,n));const u=yield Promise.all(c);[o]=u}catch(e){throw null==t||t.forEach((e=>{e.stop()})),e instanceof Error&&!(e instanceof TrackInvalidError)&&this.emit(De.MediaDevicesError,e),e}finally{this.pendingPublishing.delete(e)}}else if(o&&o.track)if(e===Track.Source.ScreenShare){o=yield this.unpublishTrack(o.track);const e=this.getTrack(Track.Source.ScreenShareAudio);e&&e.track&&this.unpublishTrack(e.track)}else yield o.mute();return o}))}enableCameraAndMicrophone(){return __awaiter(this,void 0,void 0,(function*(){if(!this.pendingPublishing.has(Track.Source.Camera)&&!this.pendingPublishing.has(Track.Source.Microphone)){this.pendingPublishing.add(Track.Source.Camera),this.pendingPublishing.add(Track.Source.Microphone);try{const e=yield this.createTracks({audio:!0,video:!0});yield Promise.all(e.map((e=>this.publishTrack(e))))}finally{this.pendingPublishing.delete(Track.Source.Camera),this.pendingPublishing.delete(Track.Source.Microphone)}}}))}createTracks(e){var t,i;return __awaiter(this,void 0,void 0,(function*(){const n=constraintsForOptions(mergeDefaultOptions(e,null===(t=this.roomOptions)||void 0===t?void 0:t.audioCaptureDefaults,null===(i=this.roomOptions)||void 0===i?void 0:i.videoCaptureDefaults));let s;try{s=yield navigator.mediaDevices.getUserMedia(n)}catch(e){throw e instanceof Error&&(n.audio&&(this.microphoneError=e),n.video&&(this.cameraError=e)),e}return n.audio&&(this.microphoneError=void 0),n.video&&(this.cameraError=void 0),s.getTracks().map((t=>{const i="audio"===t.kind;let a;i?e.audio:e.video;const o=i?n.audio:n.video;"boolean"!=typeof o&&(a=o);const c=mediaTrackToLocalTrack(t,a);return c.kind===Track.Kind.Video?c.source=Track.Source.Camera:c.kind===Track.Kind.Audio&&(c.source=Track.Source.Microphone),c.mediaStream=s,c}))}))}createScreenTracks(e){return __awaiter(this,void 0,void 0,(function*(){if(void 0===e&&(e={}),void 0===e.resolution&&(e.resolution=_e.h1080fps15.resolution),void 0===navigator.mediaDevices.getDisplayMedia)throw new DeviceUnsupportedError("getDisplayMedia not supported");const t=screenCaptureToDisplayMediaStreamOptions(e),i=yield navigator.mediaDevices.getDisplayMedia(t),n=i.getVideoTracks();if(0===n.length)throw new TrackInvalidError("no video track found");const s=new LocalVideoTrack(n[0],void 0,!1);s.source=Track.Source.ScreenShare;const a=[s];if(i.getAudioTracks().length>0){const e=new LocalAudioTrack(i.getAudioTracks()[0],void 0,!1,this.audioContext);e.source=Track.Source.ScreenShareAudio,a.push(e)}return a}))}publishTrack(e,t){var i,n,s,a;return __awaiter(this,void 0,void 0,(function*(){let o,c;if(yield null===(i=this.reconnectFuture)||void 0===i?void 0:i.promise,e instanceof LocalTrack&&this.pendingPublishPromises.has(e)&&(yield this.pendingPublishPromises.get(e)),e instanceof MediaStreamTrack)o=e.getConstraints();else{let t;switch(o=e.constraints,e.source){case Track.Source.Microphone:t="audioinput";break;case Track.Source.Camera:t="videoinput"}t&&this.activeDeviceMap.has(t)&&(o=Object.assign(Object.assign({},o),{deviceId:this.activeDeviceMap.get(t)}))}if(e instanceof MediaStreamTrack)switch(e.kind){case"audio":e=new LocalAudioTrack(e,o,!0,this.audioContext);break;case"video":e=new LocalVideoTrack(e,o,!0);break;default:throw new TrackInvalidError("unsupported MediaStreamTrack kind ".concat(e.kind))}if(e instanceof LocalAudioTrack&&e.setAudioContext(this.audioContext),this.tracks.forEach((t=>{t.track&&t.track===e&&(c=t)})),c)return p.warn("track has already been published, skipping"),c;const u="channelCount"in e.mediaStreamTrack.getSettings()&&2===e.mediaStreamTrack.getSettings().channelCount||2===e.mediaStreamTrack.getConstraints().channelCount,l=null!==(n=null==t?void 0:t.forceStereo)&&void 0!==n?n:u;l&&(t||(t={}),void 0===t.dtx&&p.info("Opus DTX will be disabled for stereo tracks by default. Enable them explicitly to make it work."),void 0===t.red&&p.info("Opus RED will be disabled for stereo tracks by default. Enable them explicitly to make it work."),null!==(s=t.dtx)&&void 0!==s||(t.dtx=!1),null!==(a=t.red)&&void 0!==a||(t.red=!1));const h=Object.assign(Object.assign({},this.roomOptions.publishDefaults),t);isSafari()&&this.roomOptions.e2ee&&(p.info("End-to-end encryption is set up, simulcast publishing will be disabled on Safari"),h.simulcast=!1),h.source&&(e.source=h.source);const m=this.publish(e,h,l);this.pendingPublishPromises.set(e,m);try{return yield m}catch(e){throw e}finally{this.pendingPublishPromises.delete(e)}}))}publish(e,t,i){var n,s,a,o,c,u,l,h,m,g,v,k,y,S;return __awaiter(this,void 0,void 0,(function*(){const T=Array.from(this.tracks.values()).find((t=>e instanceof LocalTrack&&t.source===e.source));if(T&&e.source!==Track.Source.Unknown)try{throw Error("publishing a second track with the same source: ".concat(e.source))}catch(t){t instanceof Error&&p.warn(t.message,{oldTrack:T,newTrack:e,trace:t.stack})}t.stopMicTrackOnMute&&e instanceof LocalAudioTrack&&(e.stopOnMute=!0),e.source===Track.Source.ScreenShare&&isFireFox()&&(t.simulcast=!1),"av1"!==t.videoCodec||supportsAV1()||(t.videoCodec=void 0),"vp9"!==t.videoCodec||supportsVP9()||(t.videoCodec=void 0),e.on(Me.Muted,this.onTrackMuted),e.on(Me.Unmuted,this.onTrackUnmuted),e.on(Me.Ended,this.handleTrackEnded),e.on(Me.UpstreamPaused,this.onTrackUpstreamPaused),e.on(Me.UpstreamResumed,this.onTrackUpstreamResumed);const b=new AddTrackRequest({cid:e.mediaStreamTrack.id,name:t.name,type:Track.kindToProto(e.kind),muted:e.isMuted,source:Track.sourceToProto(e.source),disableDtx:!(null===(n=t.dtx)||void 0===n||n),encryption:this.encryptionType,stereo:i,disableRed:!(null===(s=t.red)||void 0===s||s)});let C,w;if(e.kind===Track.Kind.Video){let i={width:0,height:0};try{i=yield e.waitForDimensions()}catch(e){const t=null!==(o=null===(a=this.roomOptions.videoCaptureDefaults)||void 0===a?void 0:a.resolution)&&void 0!==o?o:Pe.h720.resolution;i={width:t.width,height:t.height},p.error("could not determine track dimensions, using defaults",i)}if(b.width=i.width,b.height=i.height,e instanceof LocalVideoTrack)if(isSVCCodec(t.videoCodec)&&(t.scalabilityMode=null!==(c=t.scalabilityMode)&&void 0!==c?c:"L3T3_KEY"),t.videoCodec&&t.backupCodec&&t.videoCodec!==t.backupCodec.codec){this.roomOptions.dynacast||(this.roomOptions.dynacast=!0);const i=Object.assign({},t);i.simulcast=!0,w=computeTrackBackupEncodings(e,t.backupCodec.codec,i),b.simulcastCodecs=[new SimulcastCodec({codec:t.videoCodec,cid:e.mediaStreamTrack.id,enableSimulcastLayers:!0}),new SimulcastCodec({codec:t.backupCodec.codec,cid:"",enableSimulcastLayers:!0})]}else t.videoCodec&&(b.simulcastCodecs=[new SimulcastCodec({codec:t.videoCodec,cid:e.mediaStreamTrack.id,enableSimulcastLayers:null!==(u=t.simulcast)&&void 0!==u&&u})]);C=computeVideoEncodings(e.source===Track.Source.ScreenShare,i.width,i.height,t),b.layers=videoLayersFromEncodings(b.width,b.height,C,isSVCCodec(t.videoCodec))}else e.kind===Track.Kind.Audio&&(C=[{maxBitrate:null!==(h=null===(l=t.audioPreset)||void 0===l?void 0:l.maxBitrate)&&void 0!==h?h:t.audioBitrate,priority:null!==(g=null===(m=t.audioPreset)||void 0===m?void 0:m.priority)&&void 0!==g?g:"high",networkPriority:null!==(k=null===(v=t.audioPreset)||void 0===v?void 0:v.priority)&&void 0!==k?k:"high"}]);if(!this.engine||this.engine.isClosed)throw new UnexpectedConnectionState("cannot publish track when not connected");const E=yield this.engine.addTrack(b);let P=!1,R=!1;if(E.codecs.forEach((e=>{isCodecEqual(e.mimeType,t.videoCodec)?P=!0:t.backupCodec&&isCodecEqual(e.mimeType,t.backupCodec.codec)&&(R=!0)})),b.simulcastCodecs.length>0){if(!P&&!R)throw Error("cannot publish track, codec not supported by server");if(!P&&t.backupCodec){const e=t.backupCodec;t=Object.assign({},t),p.debug("primary codec ".concat(t.videoCodec," not supported, fallback to ").concat(e.codec)),t.videoCodec=e.codec,t.videoEncoding=e.encoding,C=w}}const _=new LocalTrackPublication(e.kind,E,e);if(_.options=t,e.sid=E.sid,!this.engine.publisher)throw new UnexpectedConnectionState("publisher is closed");if(p.debug("publishing ".concat(e.kind," with encodings"),{encodings:C,trackInfo:E}),e.sender=yield this.engine.createSender(e,t,C),C)if(isFireFox()&&e.kind===Track.Kind.Audio){let t;for(const i of this.engine.publisher.pc.getTransceivers())if(i.sender===e.sender){t=i;break}t&&this.engine.publisher.setTrackCodecBitrate({transceiver:t,codec:"opus",maxbr:(null===(y=C[0])||void 0===y?void 0:y.maxBitrate)?C[0].maxBitrate/1e3:0})}else e.codec&&isSVCCodec(e.codec)&&(null===(S=C[0])||void 0===S?void 0:S.maxBitrate)&&this.engine.publisher.setTrackCodecBitrate({cid:b.cid,codec:e.codec,maxbr:C[0].maxBitrate/1e3});return yield this.engine.negotiate(),e instanceof LocalVideoTrack?e.startMonitor(this.engine.client):e instanceof LocalAudioTrack&&e.startMonitor(),this.addTrackPublication(_),this.emit(De.LocalTrackPublished,_),_}))}get isLocal(){return!0}publishAdditionalCodecForTrack(e,t,i){var n;return __awaiter(this,void 0,void 0,(function*(){let s;if(this.tracks.forEach((t=>{t.track&&t.track===e&&(s=t)})),!s)throw new TrackInvalidError("track is not published");if(!(e instanceof LocalVideoTrack))throw new TrackInvalidError("track is not a video track");const a=Object.assign(Object.assign({},null===(n=this.roomOptions)||void 0===n?void 0:n.publishDefaults),i),o=computeTrackBackupEncodings(e,t,a);if(!o)return void p.info("backup codec has been disabled, ignoring request to add additional codec for track");const c=e.addSimulcastTrack(t,o),u=new AddTrackRequest({cid:c.mediaStreamTrack.id,type:Track.kindToProto(e.kind),muted:e.isMuted,source:Track.sourceToProto(e.source),sid:e.sid,simulcastCodecs:[{codec:a.videoCodec,cid:c.mediaStreamTrack.id,enableSimulcastLayers:a.simulcast}]});if(u.layers=videoLayersFromEncodings(u.width,u.height,o),!this.engine||this.engine.isClosed)throw new UnexpectedConnectionState("cannot publish track when not connected");const l=yield this.engine.addTrack(u);yield this.engine.createSimulcastSender(e,c,a,o),yield this.engine.negotiate(),p.debug("published ".concat(t," for track ").concat(e.sid),{encodings:o,trackInfo:l})}))}unpublishTrack(e,t){var i,n;return __awaiter(this,void 0,void 0,(function*(){const s=this.getPublicationForTrack(e);if(p.debug("unpublishing track",{track:e,method:"unpublishTrack"}),!s||!s.track)return void p.warn("track was not unpublished because no publication was found",{track:e,method:"unpublishTrack"});(e=s.track).off(Me.Muted,this.onTrackMuted),e.off(Me.Unmuted,this.onTrackUnmuted),e.off(Me.Ended,this.handleTrackEnded),e.off(Me.UpstreamPaused,this.onTrackUpstreamPaused),e.off(Me.UpstreamResumed,this.onTrackUpstreamResumed),void 0===t&&(t=null===(n=null===(i=this.roomOptions)||void 0===i?void 0:i.stopLocalTrackOnUnpublish)||void 0===n||n),t&&e.stop();let a=!1;const o=e.sender;if(e.sender=void 0,this.engine.publisher&&"closed"!==this.engine.publisher.pc.connectionState&&o)try{for(const e of this.engine.publisher.pc.getTransceivers())e.sender===o&&(e.direction="inactive",a=!0);if(this.engine.removeTrack(o)&&(a=!0),e instanceof LocalVideoTrack){for(const[,t]of e.simulcastCodecs)t.sender&&(this.engine.removeTrack(t.sender)&&(a=!0),t.sender=void 0);e.simulcastCodecs.clear()}}catch(e){p.warn("failed to unpublish track",{error:e,method:"unpublishTrack"})}switch(this.tracks.delete(s.trackSid),s.kind){case Track.Kind.Audio:this.audioTracks.delete(s.trackSid);break;case Track.Kind.Video:this.videoTracks.delete(s.trackSid)}return this.emit(De.LocalTrackUnpublished,s),s.setTrack(void 0),a&&(yield this.engine.negotiate()),s}))}unpublishTracks(e){return __awaiter(this,void 0,void 0,(function*(){return(yield Promise.all(e.map((e=>this.unpublishTrack(e))))).filter((e=>e instanceof LocalTrackPublication))}))}republishAllTracks(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return __awaiter(this,void 0,void 0,(function*(){const i=[];this.tracks.forEach((t=>{t.track&&(e&&(t.options=Object.assign(Object.assign({},t.options),e)),i.push(t))})),yield Promise.all(i.map((e=>__awaiter(this,void 0,void 0,(function*(){const i=e.track;yield this.unpublishTrack(i,!1),t&&!i.isMuted&&(i instanceof LocalAudioTrack||i instanceof LocalVideoTrack)&&!i.isUserProvided&&(p.debug("restarting existing track",{track:e.trackSid}),yield i.restartTrack()),yield this.publishTrack(i,e.options)})))))}))}publishData(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return __awaiter(this,void 0,void 0,(function*(){const n=Array.isArray(i)?i:null==i?void 0:i.destination,s=[],a=Array.isArray(i)?void 0:i.topic;void 0!==n&&n.forEach((e=>{e instanceof RemoteParticipant?s.push(e.sid):s.push(e)}));const o=new DataPacket({kind:t,value:{case:"user",value:new UserPacket({participantSid:this.sid,payload:e,destinationSids:s,topic:a})}});yield this.engine.sendDataPacket(o,t)}))}setTrackSubscriptionPermissions(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.participantTrackPermissions=t,this.allParticipantsAllowedToSubscribe=e,this.engine.client.isConnected&&this.updateTrackSubscriptionPermissions()}updateInfo(e){return e.sid===this.sid&&(!!super.updateInfo(e)&&(e.tracks.forEach((e=>{var t,i;const n=this.tracks.get(e.sid);if(n){const s=n.isMuted||null!==(i=null===(t=n.track)||void 0===t?void 0:t.isUpstreamPaused)&&void 0!==i&&i;s!==e.muted&&(p.debug("updating server mute state after reconcile",{sid:e.sid,muted:s}),this.engine.client.sendMuteTrack(e.sid,s))}})),!0))}getPublicationForTrack(e){let t;return this.tracks.forEach((i=>{const n=i.track;n&&(e instanceof MediaStreamTrack?(n instanceof LocalAudioTrack||n instanceof LocalVideoTrack)&&n.mediaStreamTrack===e&&(t=i):e===n&&(t=i))})),t}publishedTracksInfo(){const e=[];return this.tracks.forEach((t=>{void 0!==t.track&&e.push(new TrackPublishedResponse({cid:t.track.mediaStreamID,track:t.trackInfo}))})),e}dataChannelsInfo(){const e=[],getInfo=(t,i)=>{void 0!==(null==t?void 0:t.id)&&null!==t.id&&e.push(new DataChannelInfo({label:t.label,id:t.id,target:i}))};return getInfo(this.engine.dataChannelForKind(K.LOSSY),pe.PUBLISHER),getInfo(this.engine.dataChannelForKind(K.RELIABLE),pe.PUBLISHER),getInfo(this.engine.dataChannelForKind(K.LOSSY,!0),pe.SUBSCRIBER),getInfo(this.engine.dataChannelForKind(K.RELIABLE,!0),pe.SUBSCRIBER),e}}!function(e){e.Disconnected="disconnected",e.Connecting="connecting",e.Connected="connected",e.Reconnecting="reconnecting"}(Rt||(Rt={}));const _t=Rt;class Room extends ie.EventEmitter{constructor(e){var t,i;super(),t=this,this.state=Rt.Disconnected,this.activeSpeakers=[],this.isE2EEEnabled=!1,this.audioEnabled=!0,this.connect=(e,t,i)=>__awaiter(this,void 0,void 0,(function*(){var n;const s=yield this.disconnectLock.lock();if(this.state===Rt.Connected)return p.info("already connected to room ".concat(this.name)),s(),Promise.resolve();if(this.connectFuture)return s(),this.connectFuture.promise;this.setAndEmitConnectionState(Rt.Connecting),(null===(n=this.regionUrlProvider)||void 0===n?void 0:n.getServerUrl().toString())!==e&&(this.regionUrl=void 0,this.regionUrlProvider=void 0),isCloud(new URL(e))&&(void 0===this.regionUrlProvider?this.regionUrlProvider=new RegionUrlProvider(e,t):this.regionUrlProvider.updateToken(t),this.regionUrlProvider.fetchRegionSettings().catch((e=>{p.warn("could not fetch region settings",{error:e})})));const connectFn=(n,a,o)=>__awaiter(this,void 0,void 0,(function*(){var c;this.abortController&&this.abortController.abort();const u=new AbortController;this.abortController=u,null==s||s();try{yield this.attemptConnection(null!=o?o:e,t,i,u),this.abortController=void 0,n()}catch(e){if(this.regionUrlProvider&&e instanceof ConnectionError&&3!==e.reason&&0!==e.reason){let t=null;try{t=yield this.regionUrlProvider.getNextBestRegionUrl(null===(c=this.abortController)||void 0===c?void 0:c.signal)}catch(e){if(e instanceof ConnectionError&&(401===e.status||3===e.reason))return void a(e)}t?(p.info("initial connection failed, retrying with another region",{nextUrl:t}),yield connectFn(n,a,t)):a(e)}else a(e)}})),a=this.regionUrl;return this.regionUrl=void 0,this.connectFuture=new Future(((e,t)=>{connectFn(e,t,a)}),(()=>{this.clearConnectionFutures()})),this.connectFuture.promise})),this.connectSignal=(e,t,i,n,s,a)=>__awaiter(this,void 0,void 0,(function*(){const o=yield i.join(e,t,{autoSubscribe:n.autoSubscribe,publishOnly:n.publishOnly,adaptiveStream:"object"==typeof s.adaptiveStream||s.adaptiveStream,maxRetries:n.maxRetries,e2eeEnabled:!!this.e2eeManager,websocketTimeout:n.websocketTimeout},a.signal);let c=o.serverInfo;if(c||(c={version:o.serverVersion,region:o.serverRegion}),p.debug("connected to Livekit Server ".concat(Object.entries(c).map((e=>{let[t,i]=e;return"".concat(t,": ").concat(i)})).join(", "))),!o.serverVersion)throw new UnsupportedServer("unknown server version");return"0.15.1"===o.serverVersion&&this.options.dynacast&&(p.debug("disabling dynacast due to server version"),s.dynacast=!1),o})),this.applyJoinResponse=e=>{const t=e.participant;this.localParticipant.sid=t.sid,this.localParticipant.identity=t.identity,this.handleParticipantUpdates([t,...e.otherParticipants]),e.room&&this.handleRoomUpdate(e.room),this.options.e2ee&&this.e2eeManager&&this.e2eeManager.setSifTrailer(e.sifTrailer)},this.attemptConnection=(e,t,i,n)=>__awaiter(this,void 0,void 0,(function*(){var s,a;this.state===Rt.Reconnecting?(p.info("Reconnection attempt replaced by new connection attempt"),this.recreateEngine()):this.maybeCreateEngine(),(null===(s=this.regionUrlProvider)||void 0===s?void 0:s.isCloud())&&this.engine.setRegionUrlProvider(this.regionUrlProvider),this.acquireAudioContext(),this.connOptions=Object.assign(Object.assign({},mt),i),this.connOptions.rtcConfig&&(this.engine.rtcConfig=this.connOptions.rtcConfig),this.connOptions.peerConnectionTimeout&&(this.engine.peerConnectionTimeout=this.connOptions.peerConnectionTimeout);try{const i=yield this.connectSignal(e,t,this.engine,this.connOptions,this.options,n);this.applyJoinResponse(i),this.setupLocalParticipantEvents(),this.emit(Ie.SignalConnected)}catch(e){this.recreateEngine(),this.handleDisconnect(this.options.stopLocalTrackOnUnpublish);const t=new ConnectionError("could not establish signal connection");throw e instanceof Error&&(t.message="".concat(t.message,": ").concat(e.message)),e instanceof ConnectionError&&(t.reason=e.reason,t.status=e.status),p.debug("error trying to establish signal connection",{error:e}),t}if(n.signal.aborted)throw this.recreateEngine(),this.handleDisconnect(this.options.stopLocalTrackOnUnpublish),new ConnectionError("Connection attempt aborted");try{yield this.engine.waitForPCInitialConnection(this.connOptions.peerConnectionTimeout,n)}catch(e){throw this.recreateEngine(),this.handleDisconnect(this.options.stopLocalTrackOnUnpublish),e}isWeb()&&this.options.disconnectOnPageLeave&&(window.addEventListener("pagehide",this.onPageLeave),window.addEventListener("beforeunload",this.onPageLeave)),isWeb()&&(document.addEventListener("freeze",this.onPageLeave),null===(a=navigator.mediaDevices)||void 0===a||a.addEventListener("devicechange",this.handleDeviceChange)),this.setAndEmitConnectionState(Rt.Connected),this.emit(Ie.Connected),this.registerConnectionReconcile()})),this.disconnect=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return __awaiter(t,void 0,void 0,(function*(){var t,i,n,s;const a=yield this.disconnectLock.lock();try{if(this.state===Rt.Disconnected)return void p.debug("already disconnected");p.info("disconnect from room",{identity:this.localParticipant.identity}),this.state!==Rt.Connecting&&this.state!==Rt.Reconnecting||(p.warn("abort connection attempt"),null===(t=this.abortController)||void 0===t||t.abort(),null===(n=null===(i=this.connectFuture)||void 0===i?void 0:i.reject)||void 0===n||n.call(i,new ConnectionError("Client initiated disconnect")),this.connectFuture=void 0),(null===(s=this.engine)||void 0===s?void 0:s.client.isConnected)&&(yield this.engine.client.sendLeave()),this.engine&&(yield this.engine.close()),this.handleDisconnect(e,B.CLIENT_INITIATED),this.engine=void 0}finally{a()}}))},this.onPageLeave=()=>__awaiter(this,void 0,void 0,(function*(){yield this.disconnect()})),this.handleRestarting=()=>{this.clearConnectionReconcile();for(const e of this.participants.values())this.handleParticipantDisconnected(e.sid,e);this.setAndEmitConnectionState(Rt.Reconnecting)&&this.emit(Ie.Reconnecting)},this.handleSignalRestarted=e=>__awaiter(this,void 0,void 0,(function*(){p.debug("signal reconnected to server",{region:e.serverRegion}),this.cachedParticipantSids=[],this.applyJoinResponse(e);try{const e=[];this.localParticipant.tracks.forEach((t=>{t.track&&e.push(t)})),yield Promise.all(e.map((e=>__awaiter(this,void 0,void 0,(function*(){const t=e.track;this.localParticipant.unpublishTrack(t,!1),t.isMuted||((t instanceof LocalAudioTrack||t instanceof LocalVideoTrack)&&t.source!==Track.Source.ScreenShare&&t.source!==Track.Source.ScreenShareAudio&&!t.isUserProvided&&(p.debug("restarting existing track",{track:e.trackSid}),yield t.restartTrack()),p.debug("publishing new track",{track:e.trackSid}),yield this.localParticipant.publishTrack(t,e.options))})))))}catch(e){p.error("error trying to re-publish tracks after reconnection",{error:e})}try{yield this.engine.waitForRestarted(),p.debug("fully reconnected to server",{region:e.serverRegion})}catch(e){return}this.setAndEmitConnectionState(Rt.Connected),this.emit(Ie.Reconnected),this.registerConnectionReconcile(),this.participants.forEach((e=>{this.emit(Ie.ParticipantConnected,e)}))})),this.handleParticipantUpdates=e=>{e.forEach((e=>{if(e.identity===this.localParticipant.identity)return void this.localParticipant.updateInfo(e);const t=this.identityToSid.get(e.identity);t&&t!==e.sid&&this.handleParticipantDisconnected(t,this.participants.get(t));let i=this.participants.get(e.sid);const n=!i;e.state===j.DISCONNECTED?this.handleParticipantDisconnected(e.sid,i):(i=this.getOrCreateParticipant(e.sid,e),n||i.updateInfo(e))}))},this.handleActiveSpeakersUpdate=e=>{const t=[],i={};e.forEach((e=>{if(i[e.sid]=!0,e.sid===this.localParticipant.sid)this.localParticipant.audioLevel=e.level,this.localParticipant.setIsSpeaking(!0),t.push(this.localParticipant);else{const i=this.participants.get(e.sid);i&&(i.audioLevel=e.level,i.setIsSpeaking(!0),t.push(i))}})),i[this.localParticipant.sid]||(this.localParticipant.audioLevel=0,this.localParticipant.setIsSpeaking(!1)),this.participants.forEach((e=>{i[e.sid]||(e.audioLevel=0,e.setIsSpeaking(!1))})),this.activeSpeakers=t,this.emitWhenConnected(Ie.ActiveSpeakersChanged,t)},this.handleSpeakersChanged=e=>{const t=new Map;this.activeSpeakers.forEach((e=>{t.set(e.sid,e)})),e.forEach((e=>{let i=this.participants.get(e.sid);e.sid===this.localParticipant.sid&&(i=this.localParticipant),i&&(i.audioLevel=e.level,i.setIsSpeaking(e.active),e.active?t.set(e.sid,i):t.delete(e.sid))}));const i=Array.from(t.values());i.sort(((e,t)=>t.audioLevel-e.audioLevel)),this.activeSpeakers=i,this.emitWhenConnected(Ie.ActiveSpeakersChanged,i)},this.handleStreamStateUpdate=e=>{e.streamStates.forEach((e=>{const t=this.participants.get(e.participantSid);if(!t)return;const i=t.getTrackPublication(e.trackSid);i&&i.track&&(i.track.streamState=Track.streamStateFromProto(e.state),t.emit(De.TrackStreamStateChanged,i,i.track.streamState),this.emitWhenConnected(Ie.TrackStreamStateChanged,i,i.track.streamState,t))}))},this.handleSubscriptionPermissionUpdate=e=>{const t=this.participants.get(e.participantSid);if(!t)return;const i=t.getTrackPublication(e.trackSid);i&&i.setAllowed(e.allowed)},this.handleSubscriptionError=e=>{const t=Array.from(this.participants.values()).find((t=>t.tracks.has(e.trackSid)));if(!t)return;const i=t.getTrackPublication(e.trackSid);i&&i.setSubscriptionError(e.err)},this.handleDataPacket=(e,t)=>{const i=this.participants.get(e.participantSid);this.emit(Ie.DataReceived,e.payload,i,t,e.topic),null==i||i.emit(De.DataReceived,e.payload,t)},this.handleAudioPlaybackStarted=()=>{this.canPlaybackAudio||(this.audioEnabled=!0,this.emit(Ie.AudioPlaybackStatusChanged,!0))},this.handleAudioPlaybackFailed=e=>{p.warn("could not playback audio",e),this.canPlaybackAudio&&(this.audioEnabled=!1,this.emit(Ie.AudioPlaybackStatusChanged,!1))},this.handleDeviceChange=()=>__awaiter(this,void 0,void 0,(function*(){this.emit(Ie.MediaDevicesChanged)})),this.handleRoomUpdate=e=>{const t=this.roomInfo;this.roomInfo=e,t&&t.metadata!==e.metadata&&this.emitWhenConnected(Ie.RoomMetadataChanged,e.metadata),(null==t?void 0:t.activeRecording)!==e.activeRecording&&this.emitWhenConnected(Ie.RecordingStatusChanged,e.activeRecording)},this.handleConnectionQualityUpdate=e=>{e.updates.forEach((e=>{if(e.participantSid===this.localParticipant.sid)return void this.localParticipant.setConnectionQuality(e.quality);const t=this.participants.get(e.participantSid);t&&t.setConnectionQuality(e.quality)}))},this.onLocalParticipantMetadataChanged=e=>{this.emit(Ie.ParticipantMetadataChanged,e,this.localParticipant)},this.onLocalParticipantNameChanged=e=>{this.emit(Ie.ParticipantNameChanged,e,this.localParticipant)},this.onLocalTrackMuted=e=>{this.emit(Ie.TrackMuted,e,this.localParticipant)},this.onLocalTrackUnmuted=e=>{this.emit(Ie.TrackUnmuted,e,this.localParticipant)},this.onLocalTrackPublished=e=>__awaiter(this,void 0,void 0,(function*(){var t;if(this.emit(Ie.LocalTrackPublished,e,this.localParticipant),e.track instanceof LocalAudioTrack){(yield e.track.checkForSilence())&&this.emit(Ie.LocalAudioSilenceDetected,e)}const i=yield null===(t=e.track)||void 0===t?void 0:t.getDeviceId(),n=function sourceToKind(e){return e===Track.Source.Microphone?"audioinput":e===Track.Source.Camera?"videoinput":void 0}(e.source);n&&i&&i!==this.localParticipant.activeDeviceMap.get(n)&&(this.localParticipant.activeDeviceMap.set(n,i),this.emit(Ie.ActiveDeviceChanged,n,i))})),this.onLocalTrackUnpublished=e=>{this.emit(Ie.LocalTrackUnpublished,e,this.localParticipant)},this.onLocalConnectionQualityChanged=e=>{this.emit(Ie.ConnectionQualityChanged,e,this.localParticipant)},this.onMediaDevicesError=e=>{this.emit(Ie.MediaDevicesError,e)},this.onLocalParticipantPermissionsChanged=e=>{this.emit(Ie.ParticipantPermissionsChanged,e,this.localParticipant)},this.setMaxListeners(100),this.participants=new Map,this.cachedParticipantSids=[],this.identityToSid=new Map,this.options=Object.assign(Object.assign({},pt),e),this.options.audioCaptureDefaults=Object.assign(Object.assign({},lt),null==e?void 0:e.audioCaptureDefaults),this.options.videoCaptureDefaults=Object.assign(Object.assign({},ht),null==e?void 0:e.videoCaptureDefaults),this.options.publishDefaults=Object.assign(Object.assign({},ut),null==e?void 0:e.publishDefaults),this.maybeCreateEngine(),this.disconnectLock=new Mutex,this.localParticipant=new LocalParticipant("","",this.engine,this.options),this.options.videoCaptureDefaults.deviceId&&this.localParticipant.activeDeviceMap.set("videoinput",unwrapConstraint(this.options.videoCaptureDefaults.deviceId)),this.options.audioCaptureDefaults.deviceId&&this.localParticipant.activeDeviceMap.set("audioinput",unwrapConstraint(this.options.audioCaptureDefaults.deviceId)),(null===(i=this.options.audioOutput)||void 0===i?void 0:i.deviceId)&&this.switchActiveDevice("audiooutput",unwrapConstraint(this.options.audioOutput.deviceId)),this.options.e2ee&&this.setupE2EE()}setE2EEEnabled(e){return __awaiter(this,void 0,void 0,(function*(){if(!this.e2eeManager)throw Error("e2ee not configured, please set e2ee settings within the room options");yield Promise.all([this.localParticipant.setE2EEEnabled(e)]),""!==this.localParticipant.identity&&this.e2eeManager.setParticipantCryptorEnabled(e,this.localParticipant.identity)}))}setupE2EE(){var e;this.options.e2ee&&(this.e2eeManager=new E2EEManager(this.options.e2ee),this.e2eeManager.on(He.ParticipantEncryptionStatusChanged,((e,t)=>{t instanceof LocalParticipant&&(this.isE2EEEnabled=e),this.emit(Ie.ParticipantEncryptionStatusChanged,e,t)})),this.e2eeManager.on(He.EncryptionError,(e=>this.emit(Ie.EncryptionError,e))),null===(e=this.e2eeManager)||void 0===e||e.setup(this))}get isRecording(){var e,t;return null!==(t=null===(e=this.roomInfo)||void 0===e?void 0:e.activeRecording)&&void 0!==t&&t}get sid(){var e,t;return null!==(t=null===(e=this.roomInfo)||void 0===e?void 0:e.sid)&&void 0!==t?t:""}get name(){var e,t;return null!==(t=null===(e=this.roomInfo)||void 0===e?void 0:e.name)&&void 0!==t?t:""}get metadata(){var e;return null===(e=this.roomInfo)||void 0===e?void 0:e.metadata}get numParticipants(){var e,t;return null!==(t=null===(e=this.roomInfo)||void 0===e?void 0:e.numParticipants)&&void 0!==t?t:0}get numPublishers(){var e,t;return null!==(t=null===(e=this.roomInfo)||void 0===e?void 0:e.numPublishers)&&void 0!==t?t:0}maybeCreateEngine(){this.engine&&!this.engine.isClosed||(this.engine=new RTCEngine(this.options),this.engine.on(Le.ParticipantUpdate,this.handleParticipantUpdates).on(Le.RoomUpdate,this.handleRoomUpdate).on(Le.SpeakersChanged,this.handleSpeakersChanged).on(Le.StreamStateChanged,this.handleStreamStateUpdate).on(Le.ConnectionQualityUpdate,this.handleConnectionQualityUpdate).on(Le.SubscriptionError,this.handleSubscriptionError).on(Le.SubscriptionPermissionUpdate,this.handleSubscriptionPermissionUpdate).on(Le.MediaTrackAdded,((e,t,i)=>{this.onTrackAdded(e,t,i)})).on(Le.Disconnected,(e=>{this.handleDisconnect(this.options.stopLocalTrackOnUnpublish,e)})).on(Le.ActiveSpeakersUpdate,this.handleActiveSpeakersUpdate).on(Le.DataPacketReceived,this.handleDataPacket).on(Le.Resuming,(()=>{this.clearConnectionReconcile(),this.setAndEmitConnectionState(Rt.Reconnecting)&&this.emit(Ie.Reconnecting),this.cachedParticipantSids=Array.from(this.participants.keys())})).on(Le.Resumed,(()=>{this.setAndEmitConnectionState(Rt.Connected),this.emit(Ie.Reconnected),this.registerConnectionReconcile(),this.updateSubscriptions();Array.from(this.participants.values()).filter((e=>!this.cachedParticipantSids.includes(e.sid))).forEach((e=>this.emit(Ie.ParticipantConnected,e))),this.cachedParticipantSids=[]})).on(Le.SignalResumed,(()=>{this.state===Rt.Reconnecting&&this.sendSyncState()})).on(Le.Restarting,this.handleRestarting).on(Le.SignalRestarted,this.handleSignalRestarted).on(Le.DCBufferStatusChanged,((e,t)=>{this.emit(Ie.DCBufferStatusChanged,e,t)})),this.localParticipant&&this.localParticipant.setupEngine(this.engine),this.e2eeManager&&this.e2eeManager.setupEngine(this.engine))}static getLocalDevices(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return DeviceManager.getInstance().getDevices(e,t)}prepareConnection(e,t){return __awaiter(this,void 0,void 0,(function*(){if(this.state===Rt.Disconnected){p.debug("prepareConnection to ".concat(e));try{if(isCloud(new URL(e))&&t){this.regionUrlProvider=new RegionUrlProvider(e,t);const i=yield this.regionUrlProvider.getNextBestRegionUrl();i&&this.state===Rt.Disconnected&&(this.regionUrl=i,yield fetch(toHttpUrl(i),{method:"HEAD"}),p.debug("prepared connection to ".concat(i)))}else yield fetch(toHttpUrl(e),{method:"HEAD"})}catch(e){p.warn("could not prepare connection",{error:e})}}}))}getParticipantByIdentity(e){if(this.localParticipant.identity===e)return this.localParticipant;const t=this.identityToSid.get(e);return t?this.participants.get(t):void 0}clearConnectionFutures(){this.connectFuture=void 0}simulateScenario(e,t){return __awaiter(this,void 0,void 0,(function*(){let i,postAction=()=>{};switch(e){case"signal-reconnect":yield this.engine.client.handleOnClose("simulate disconnect");break;case"speaker":i=new SimulateScenario({scenario:{case:"speakerUpdate",value:3}});break;case"node-failure":i=new SimulateScenario({scenario:{case:"nodeFailure",value:!0}});break;case"server-leave":i=new SimulateScenario({scenario:{case:"serverLeave",value:!0}});break;case"migration":i=new SimulateScenario({scenario:{case:"migration",value:!0}});break;case"resume-reconnect":this.engine.failNext(),yield this.engine.client.handleOnClose("simulate resume-disconnect");break;case"full-reconnect":this.engine.fullReconnectOnNext=!0,yield this.engine.client.handleOnClose("simulate full-reconnect");break;case"force-tcp":case"force-tls":i=new SimulateScenario({scenario:{case:"switchCandidateProtocol",value:"force-tls"===e?2:1}}),postAction=()=>__awaiter(this,void 0,void 0,(function*(){const e=this.engine.client.onLeave;e&&e(new LeaveRequest({reason:B.CLIENT_INITIATED,canReconnect:!0}))}));break;case"subscriber-bandwidth":if(void 0===t||"number"!=typeof t)throw new Error("subscriber-bandwidth requires a number as argument");i=new SimulateScenario({scenario:{case:"subscriberBandwidth",value:BigInt(t)}})}i&&(this.engine.client.sendSimulateScenario(i),postAction())}))}startAudio(){return __awaiter(this,void 0,void 0,(function*(){const e=[],t=getBrowser();if(t&&"iOS"===t.os){const t="livekit-dummy-audio-el";let i=document.getElementById(t);if(!i){i=document.createElement("audio"),i.id=t,i.autoplay=!0,i.hidden=!0;const e=getEmptyAudioStreamTrack();e.enabled=!0;const n=new MediaStream([e]);i.srcObject=n,document.addEventListener("visibilitychange",(()=>{i&&(i.srcObject=document.hidden?null:n)})),document.body.append(i),this.once(Ie.Disconnected,(()=>{null==i||i.remove()}))}e.push(i)}this.participants.forEach((t=>{t.audioTracks.forEach((t=>{t.track&&t.track.attachedElements.forEach((t=>{e.push(t)}))}))}));try{yield Promise.all([this.acquireAudioContext(),...e.map((e=>(e.muted=!1,e.play())))]),this.handleAudioPlaybackStarted()}catch(e){throw this.handleAudioPlaybackFailed(e),e}}))}get canPlaybackAudio(){return this.audioEnabled}getActiveAudioOutputDevice(){var e,t;return null!==(t=null===(e=this.options.audioOutput)||void 0===e?void 0:e.deviceId)&&void 0!==t?t:""}getActiveDevice(e){return this.localParticipant.activeDeviceMap.get(e)}switchActiveDevice(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n,s,a;return __awaiter(this,void 0,void 0,(function*(){let o=!1,c=!0;const u=i?{exact:t}:t;if("audioinput"===e){const e=this.options.audioCaptureDefaults.deviceId;this.options.audioCaptureDefaults.deviceId=u,o=e!==u;const t=Array.from(this.localParticipant.audioTracks.values()).filter((e=>e.source===Track.Source.Microphone));try{c=(yield Promise.all(t.map((e=>{var t;return null===(t=e.audioTrack)||void 0===t?void 0:t.setDeviceId(u)})))).every((e=>!0===e))}catch(t){throw this.options.audioCaptureDefaults.deviceId=e,t}}else if("videoinput"===e){const e=this.options.videoCaptureDefaults.deviceId;this.options.videoCaptureDefaults.deviceId=u,o=e!==u;const t=Array.from(this.localParticipant.videoTracks.values()).filter((e=>e.source===Track.Source.Camera));try{c=(yield Promise.all(t.map((e=>{var t;return null===(t=e.videoTrack)||void 0===t?void 0:t.setDeviceId(u)})))).every((e=>!0===e))}catch(t){throw this.options.videoCaptureDefaults.deviceId=e,t}}else if("audiooutput"===e){if(!supportsSetSinkId()&&!this.options.expWebAudioMix||this.options.expWebAudioMix&&this.audioContext&&!("setSinkId"in this.audioContext))throw new Error("cannot switch audio output, setSinkId not supported");null!==(n=(a=this.options).audioOutput)&&void 0!==n||(a.audioOutput={});const e=this.options.audioOutput.deviceId;this.options.audioOutput.deviceId=t,o=e!==u;try{this.options.expWebAudioMix?null===(s=this.audioContext)||void 0===s||s.setSinkId(t):yield Promise.all(Array.from(this.participants.values()).map((e=>e.setAudioOutput({deviceId:t}))))}catch(t){throw this.options.audioOutput.deviceId=e,t}}return o&&c&&(this.localParticipant.activeDeviceMap.set(e,t),this.emit(Ie.ActiveDeviceChanged,e,t)),c}))}setupLocalParticipantEvents(){this.localParticipant.on(De.ParticipantMetadataChanged,this.onLocalParticipantMetadataChanged).on(De.ParticipantNameChanged,this.onLocalParticipantNameChanged).on(De.TrackMuted,this.onLocalTrackMuted).on(De.TrackUnmuted,this.onLocalTrackUnmuted).on(De.LocalTrackPublished,this.onLocalTrackPublished).on(De.LocalTrackUnpublished,this.onLocalTrackUnpublished).on(De.ConnectionQualityChanged,this.onLocalConnectionQualityChanged).on(De.MediaDevicesError,this.onMediaDevicesError).on(De.ParticipantPermissionsChanged,this.onLocalParticipantPermissionsChanged)}recreateEngine(){var e;null===(e=this.engine)||void 0===e||e.close(),this.engine=void 0,this.participants.clear(),this.maybeCreateEngine()}onTrackAdded(e,t,i){if(this.state===Rt.Connecting||this.state===Rt.Reconnecting){const reconnectedHandler=()=>{this.onTrackAdded(e,t,i),cleanup()},cleanup=()=>{this.off(Ie.Reconnected,reconnectedHandler),this.off(Ie.Connected,reconnectedHandler),this.off(Ie.Disconnected,cleanup)};return this.once(Ie.Reconnected,reconnectedHandler),this.once(Ie.Connected,reconnectedHandler),void this.once(Ie.Disconnected,cleanup)}if(this.state===Rt.Disconnected)return void p.warn("skipping incoming track after Room disconnected");const n=function unpackStreamId(e){const t=e.split("|");return t.length>1?[t[0],e.substr(t[0].length+1)]:[e,""]}(t.id),s=n[0];let a=n[1];if(a&&""!==a||(a=e.id),s===this.localParticipant.sid)return void p.warn("tried to create RemoteParticipant for local participant");const o=this.participants.get(s);if(!o)return void p.error("Tried to add a track for a participant, that's not present. Sid: ".concat(s));let c;this.options.adaptiveStream&&(c="object"==typeof this.options.adaptiveStream?this.options.adaptiveStream:{}),o.addSubscribedMediaTrack(e,a,t,i,c)}handleDisconnect(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;var i;if(this.clearConnectionReconcile(),this.state!==Rt.Disconnected){this.regionUrl=void 0;try{this.participants.forEach((e=>{e.tracks.forEach((t=>{e.unpublishTrack(t.trackSid)}))})),this.localParticipant.tracks.forEach((t=>{var i,n;t.track&&this.localParticipant.unpublishTrack(t.track,e),e&&(null===(i=t.track)||void 0===i||i.detach(),null===(n=t.track)||void 0===n||n.stop())})),this.localParticipant.off(De.ParticipantMetadataChanged,this.onLocalParticipantMetadataChanged).off(De.ParticipantNameChanged,this.onLocalParticipantNameChanged).off(De.TrackMuted,this.onLocalTrackMuted).off(De.TrackUnmuted,this.onLocalTrackUnmuted).off(De.LocalTrackPublished,this.onLocalTrackPublished).off(De.LocalTrackUnpublished,this.onLocalTrackUnpublished).off(De.ConnectionQualityChanged,this.onLocalConnectionQualityChanged).off(De.MediaDevicesError,this.onMediaDevicesError).off(De.ParticipantPermissionsChanged,this.onLocalParticipantPermissionsChanged),this.localParticipant.tracks.clear(),this.localParticipant.videoTracks.clear(),this.localParticipant.audioTracks.clear(),this.participants.clear(),this.activeSpeakers=[],this.audioContext&&"boolean"==typeof this.options.expWebAudioMix&&(this.audioContext.close(),this.audioContext=void 0),isWeb()&&(window.removeEventListener("beforeunload",this.onPageLeave),window.removeEventListener("pagehide",this.onPageLeave),window.removeEventListener("freeze",this.onPageLeave),null===(i=navigator.mediaDevices)||void 0===i||i.removeEventListener("devicechange",this.handleDeviceChange))}finally{this.setAndEmitConnectionState(Rt.Disconnected),this.emit(Ie.Disconnected,t)}}}handleParticipantDisconnected(e,t){this.participants.delete(e),t&&(this.identityToSid.delete(t.identity),t.tracks.forEach((e=>{t.unpublishTrack(e.trackSid,!0)})),this.emit(Ie.ParticipantDisconnected,t))}acquireAudioContext(){var e,t;return __awaiter(this,void 0,void 0,(function*(){if("boolean"!=typeof this.options.expWebAudioMix&&this.options.expWebAudioMix.audioContext?this.audioContext=this.options.expWebAudioMix.audioContext:this.audioContext&&"closed"!==this.audioContext.state||(this.audioContext=null!==(e=getNewAudioContext())&&void 0!==e?e:void 0),this.audioContext&&"suspended"===this.audioContext.state)try{yield this.audioContext.resume()}catch(e){p.warn(e)}this.options.expWebAudioMix&&this.participants.forEach((e=>e.setAudioContext(this.audioContext))),this.localParticipant.setAudioContext(this.audioContext);const i="running"===(null===(t=this.audioContext)||void 0===t?void 0:t.state);i!==this.canPlaybackAudio&&(this.audioEnabled=i,this.emit(Ie.AudioPlaybackStatusChanged,i))}))}createParticipant(e,t){let i;return i=t?RemoteParticipant.fromParticipantInfo(this.engine.client,t):new RemoteParticipant(this.engine.client,e,"",void 0,void 0),this.options.expWebAudioMix&&i.setAudioContext(this.audioContext),i}getOrCreateParticipant(e,t){if(this.participants.has(e))return this.participants.get(e);const i=this.createParticipant(e,t);return this.participants.set(e,i),this.identityToSid.set(t.identity,t.sid),this.emitWhenConnected(Ie.ParticipantConnected,i),i.on(De.TrackPublished,(e=>{this.emitWhenConnected(Ie.TrackPublished,e,i)})).on(De.TrackSubscribed,((e,t)=>{e.kind===Track.Kind.Audio&&(e.on(Me.AudioPlaybackStarted,this.handleAudioPlaybackStarted),e.on(Me.AudioPlaybackFailed,this.handleAudioPlaybackFailed)),this.emit(Ie.TrackSubscribed,e,t,i)})).on(De.TrackUnpublished,(e=>{this.emit(Ie.TrackUnpublished,e,i)})).on(De.TrackUnsubscribed,((e,t)=>{this.emit(Ie.TrackUnsubscribed,e,t,i)})).on(De.TrackSubscriptionFailed,(e=>{this.emit(Ie.TrackSubscriptionFailed,e,i)})).on(De.TrackMuted,(e=>{this.emitWhenConnected(Ie.TrackMuted,e,i)})).on(De.TrackUnmuted,(e=>{this.emitWhenConnected(Ie.TrackUnmuted,e,i)})).on(De.ParticipantMetadataChanged,(e=>{this.emitWhenConnected(Ie.ParticipantMetadataChanged,e,i)})).on(De.ParticipantNameChanged,(e=>{this.emitWhenConnected(Ie.ParticipantNameChanged,e,i)})).on(De.ConnectionQualityChanged,(e=>{this.emitWhenConnected(Ie.ConnectionQualityChanged,e,i)})).on(De.ParticipantPermissionsChanged,(e=>{this.emitWhenConnected(Ie.ParticipantPermissionsChanged,e,i)})).on(De.TrackSubscriptionStatusChanged,((e,t)=>{this.emitWhenConnected(Ie.TrackSubscriptionStatusChanged,e,t,i)})).on(De.TrackSubscriptionFailed,((e,t)=>{this.emit(Ie.TrackSubscriptionFailed,e,i,t)})).on(De.TrackSubscriptionPermissionChanged,((e,t)=>{this.emitWhenConnected(Ie.TrackSubscriptionPermissionChanged,e,t,i)})),t&&i.updateInfo(t),i}sendSyncState(){var e,t;if(void 0===this.engine.subscriber||null===this.engine.subscriber.pc.localDescription)return;const i=this.engine.subscriber.pc.localDescription,n=this.engine.subscriber.pc.remoteDescription,s=null===(t=null===(e=this.connOptions)||void 0===e?void 0:e.autoSubscribe)||void 0===t||t,a=new Array;this.participants.forEach((e=>{e.tracks.forEach((e=>{e.isDesired!==s&&a.push(e.trackSid)}))})),this.engine.client.sendSyncState(new SyncState({answer:toProtoSessionDescription({sdp:i.sdp,type:i.type}),offer:n?toProtoSessionDescription({sdp:n.sdp,type:n.type}):void 0,subscription:new UpdateSubscription({trackSids:a,subscribe:!s,participantTracks:[]}),publishTracks:this.localParticipant.publishedTracksInfo(),dataChannels:this.localParticipant.dataChannelsInfo()}))}updateSubscriptions(){for(const e of this.participants.values())for(const t of e.videoTracks.values())t.isSubscribed&&t instanceof RemoteTrackPublication&&t.emitTrackUpdate()}registerConnectionReconcile(){this.clearConnectionReconcile();let e=0;this.connectionReconcileInterval=CriticalTimers.setInterval((()=>{this.engine&&!this.engine.isClosed&&this.engine.verifyTransport()?e=0:(e++,p.warn("detected connection state mismatch",{numFailures:e}),e>=3&&(this.recreateEngine(),this.handleDisconnect(this.options.stopLocalTrackOnUnpublish,B.STATE_MISMATCH)))}),2e3)}clearConnectionReconcile(){this.connectionReconcileInterval&&CriticalTimers.clearInterval(this.connectionReconcileInterval)}setAndEmitConnectionState(e){return e!==this.state&&(this.state=e,this.emit(Ie.ConnectionStateChanged,this.state),!0)}emitWhenConnected(e){if(this.state===Rt.Connected){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return this.emit(e,...i)}return!1}simulateParticipants(e){var t,i;return __awaiter(this,void 0,void 0,(function*(){const n=Object.assign({audio:!0,video:!0,useRealTracks:!1},e.publish),s=Object.assign({count:9,audio:!1,video:!0,aspectRatios:[1.66,1.7,1.3]},e.participants);if(this.handleDisconnect(),this.roomInfo=new q({sid:"RM_SIMULATED",name:"simulated-room",emptyTimeout:0,maxParticipants:0,creationTime:k.parse((new Date).getTime()),metadata:"",numParticipants:1,numPublishers:1,turnPassword:"",enabledCodecs:[],activeRecording:!1}),this.localParticipant.updateInfo(new ParticipantInfo({identity:"simulated-local",name:"local-name"})),this.setupLocalParticipantEvents(),this.emit(Ie.SignalConnected),this.emit(Ie.Connected),this.setAndEmitConnectionState(Rt.Connected),n.video){const e=new LocalTrackPublication(Track.Kind.Video,new TrackInfo({source:O.CAMERA,sid:Math.floor(1e4*Math.random()).toString(),type:U.AUDIO,name:"video-dummy"}),new LocalVideoTrack(n.useRealTracks?(yield window.navigator.mediaDevices.getUserMedia({video:!0})).getVideoTracks()[0]:createDummyVideoStreamTrack(null!==(t=160*s.aspectRatios[0])&&void 0!==t?t:1,160,!0,!0)));this.localParticipant.addTrackPublication(e),this.localParticipant.emit(De.LocalTrackPublished,e)}if(n.audio){const e=new LocalTrackPublication(Track.Kind.Audio,new TrackInfo({source:O.MICROPHONE,sid:Math.floor(1e4*Math.random()).toString(),type:U.AUDIO}),new LocalAudioTrack(n.useRealTracks?(yield navigator.mediaDevices.getUserMedia({audio:!0})).getAudioTracks()[0]:getEmptyAudioStreamTrack()));this.localParticipant.addTrackPublication(e),this.localParticipant.emit(De.LocalTrackPublished,e)}for(let e=0;e<s.count-1;e+=1){let t=new ParticipantInfo({sid:Math.floor(1e4*Math.random()).toString(),identity:"simulated-".concat(e),state:j.ACTIVE,tracks:[],joinedAt:k.parse(Date.now())});const n=this.getOrCreateParticipant(t.identity,t);if(s.video){const a=createDummyVideoStreamTrack(null!==(i=160*s.aspectRatios[e%s.aspectRatios.length])&&void 0!==i?i:1,160,!1,!0),o=new TrackInfo({source:O.CAMERA,sid:Math.floor(1e4*Math.random()).toString(),type:U.AUDIO});n.addSubscribedMediaTrack(a,o.sid,new MediaStream([a])),t.tracks=[...t.tracks,o]}if(s.audio){const e=getEmptyAudioStreamTrack(),i=new TrackInfo({source:O.MICROPHONE,sid:Math.floor(1e4*Math.random()).toString(),type:U.AUDIO});n.addSubscribedMediaTrack(e,i.sid,new MediaStream([e])),t.tracks=[...t.tracks,i]}n.updateInfo(t)}}))}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e!==Ie.ActiveSpeakersChanged&&p.debug("room event ".concat(e),{event:e,args:i}),super.emit(e,...i)}}var It;!function(e){e[e.IDLE=0]="IDLE",e[e.RUNNING=1]="RUNNING",e[e.SKIPPED=2]="SKIPPED",e[e.SUCCESS=3]="SUCCESS",e[e.FAILED=4]="FAILED"}(It||(It={}));class Checker extends ie.EventEmitter{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};super(),this.status=It.IDLE,this.logs=[],this.errorsAsWarnings=!1,this.url=e,this.token=t,this.name=this.constructor.name,this.room=new Room(i.roomOptions),this.connectOptions=i.connectOptions,i.errorsAsWarnings&&(this.errorsAsWarnings=i.errorsAsWarnings)}run(e){return __awaiter(this,void 0,void 0,(function*(){if(this.status!==It.IDLE)throw Error("check is running already");this.setStatus(It.RUNNING);try{yield this.perform()}catch(e){e instanceof Error&&(this.errorsAsWarnings?this.appendWarning(e.message):this.appendError(e.message))}return yield this.disconnect(),yield new Promise((e=>setTimeout(e,500))),this.status!==It.SKIPPED&&this.setStatus(this.isSuccess()?It.SUCCESS:It.FAILED),e&&e(),this.getInfo()}))}isSuccess(){return!this.logs.some((e=>"error"===e.level))}connect(){return __awaiter(this,void 0,void 0,(function*(){return this.room.state===Rt.Connected||(yield this.room.connect(this.url,this.token)),this.room}))}disconnect(){return __awaiter(this,void 0,void 0,(function*(){this.room&&this.room.state!==Rt.Disconnected&&(yield this.room.disconnect(),yield new Promise((e=>setTimeout(e,500))))}))}skip(){this.setStatus(It.SKIPPED)}appendMessage(e){this.logs.push({level:"info",message:e}),this.emit("update",this.getInfo())}appendWarning(e){this.logs.push({level:"warning",message:e}),this.emit("update",this.getInfo())}appendError(e){this.logs.push({level:"error",message:e}),this.emit("update",this.getInfo())}setStatus(e){this.status=e,this.emit("update",this.getInfo())}get engine(){var e;return null===(e=this.room)||void 0===e?void 0:e.engine}getInfo(){return{logs:this.logs,name:this.name,status:this.status,description:this.description}}}function createLocalTracks(e){var t,i;return __awaiter(this,void 0,void 0,(function*(){null!=e||(e={}),null!==(t=e.audio)&&void 0!==t||(e.audio=!0),null!==(i=e.video)&&void 0!==i||(e.video=!0);const n=constraintsForOptions(mergeDefaultOptions(e,lt,ht)),s=navigator.mediaDevices.getUserMedia(n);e.audio&&(DeviceManager.userMediaPromiseMap.set("audioinput",s),s.catch((()=>DeviceManager.userMediaPromiseMap.delete("audioinput")))),e.video&&(DeviceManager.userMediaPromiseMap.set("videoinput",s),s.catch((()=>DeviceManager.userMediaPromiseMap.delete("videoinput"))));const a=yield s;return a.getTracks().map((t=>{const i="audio"===t.kind;let s;i?e.audio:e.video;const o=i?n.audio:n.video;"boolean"!=typeof o&&(s=o),s?s.deviceId=t.getSettings().deviceId:s={deviceId:t.getSettings().deviceId};const c=mediaTrackToLocalTrack(t,s);return c.kind===Track.Kind.Video?c.source=Track.Source.Camera:c.kind===Track.Kind.Audio&&(c.source=Track.Source.Microphone),c.mediaStream=a,c}))}))}function createLocalVideoTrack(e){return __awaiter(this,void 0,void 0,(function*(){return(yield createLocalTracks({audio:!1,video:e}))[0]}))}function createLocalAudioTrack(e){return __awaiter(this,void 0,void 0,(function*(){return(yield createLocalTracks({audio:e,video:!1}))[0]}))}function createLocalScreenTracks(e){return __awaiter(this,void 0,void 0,(function*(){if(void 0===e&&(e={}),void 0===e.resolution&&(e.resolution=_e.h1080fps15.resolution),void 0===navigator.mediaDevices.getDisplayMedia)throw new DeviceUnsupportedError("getDisplayMedia not supported");const t=screenCaptureToDisplayMediaStreamOptions(e),i=yield navigator.mediaDevices.getDisplayMedia(t),n=i.getVideoTracks();if(0===n.length)throw new TrackInvalidError("no video track found");const s=new LocalVideoTrack(n[0],void 0,!1);s.source=Track.Source.ScreenShare;const a=[s];if(i.getAudioTracks().length>0){const e=new LocalAudioTrack(i.getAudioTracks()[0],void 0,!1);e.source=Track.Source.ScreenShareAudio,a.push(e)}return a}))}class PublishAudioCheck extends Checker{get description(){return"Can publish audio"}perform(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=yield this.connect(),i=yield createLocalAudioTrack();t.localParticipant.publishTrack(i),yield new Promise((e=>setTimeout(e,3e3)));const n=yield null===(e=i.sender)||void 0===e?void 0:e.getStats();if(!n)throw new Error("Could not get RTCStats");let s=0;if(n.forEach((e=>{"outbound-rtp"===e.type&&"audio"===e.mediaType&&(s=e.packetsSent)})),0===s)throw new Error("Could not determine packets are sent");this.appendMessage("published ".concat(s," audio packets"))}))}}class PublishVideoCheck extends Checker{get description(){return"Can publish video"}perform(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=yield this.connect(),i=yield createLocalVideoTrack();t.localParticipant.publishTrack(i),yield new Promise((e=>setTimeout(e,3e3)));const n=yield null===(e=i.sender)||void 0===e?void 0:e.getStats();if(!n)throw new Error("Could not get RTCStats");let s=0;if(n.forEach((e=>{"outbound-rtp"===e.type&&"video"===e.mediaType&&(s=e.packetsSent)})),0===s)throw new Error("Could not determine packets are sent");this.appendMessage("published ".concat(s," video packets"))}))}}class ReconnectCheck extends Checker{get description(){return"Resuming connection after interruption"}perform(){var e;return __awaiter(this,void 0,void 0,(function*(){const t=yield this.connect();let i,n=!1,s=!1;const a=new Promise((e=>{setTimeout(e,5e3),i=e}));t.on(Ie.Reconnecting,(()=>{n=!0})).on(Ie.Reconnected,(()=>{s=!0,i(!0)})),null===(e=t.engine.client.ws)||void 0===e||e.close();const o=t.engine.client.onClose;if(o&&o(""),yield a,!n)throw new Error("Did not attempt to reconnect");if(!s||t.state!==Rt.Connected)throw this.appendWarning("reconnection is only possible in Redis-based configurations"),new Error("Not able to reconnect")}))}}class TURNCheck extends Checker{get description(){return"Can connect via TURN"}perform(){var e,t;return __awaiter(this,void 0,void 0,(function*(){const i=new SignalClient,n=yield i.join(this.url,this.token,{autoSubscribe:!0,maxRetries:0,e2eeEnabled:!1,websocketTimeout:15e3});let s=!1,a=!1,o=!1;for(let e of n.iceServers)for(let t of e.urls)t.startsWith("turn:")?(a=!0,o=!0):t.startsWith("turns:")&&(a=!0,o=!0,s=!0),t.startsWith("stun:")&&(o=!0);o?a&&!s&&this.appendWarning("TURN is configured server side, but TURN/TLS is unavailable."):this.appendWarning("No STUN servers configured on server side."),yield i.close(),(null===(t=null===(e=this.connectOptions)||void 0===e?void 0:e.rtcConfig)||void 0===t?void 0:t.iceServers)||a?yield this.room.connect(this.url,this.token,{rtcConfig:{iceTransportPolicy:"relay"}}):(this.appendWarning("No TURN servers configured."),this.skip(),yield new Promise((e=>setTimeout(e,0))))}))}}class WebRTCCheck extends Checker{get description(){return"Establishing WebRTC connection"}perform(){return __awaiter(this,void 0,void 0,(function*(){let e=!1,t=!1;this.room.on(Ie.SignalConnected,(()=>{const i=this.room.engine.client.onTrickle;this.room.engine.client.onTrickle=(n,s)=>{if(n.candidate){const i=new RTCIceCandidate(n);let s="".concat(i.protocol," ").concat(i.address,":").concat(i.port," ").concat(i.type);i.address&&(!function isIPPrivate(e){const t=e.split(".");if(4===t.length){if("10"===t[0])return!0;if("192"===t[0]&&"168"===t[1])return!0;if("172"===t[0]){const e=parseInt(t[1],10);if(e>=16&&e<=31)return!0}}return!1}(i.address)?"tcp"===i.protocol&&"passive"===i.tcpType?(e=!0,s+=" (passive)"):"udp"===i.protocol&&(t=!0):s+=" (private)"),this.appendMessage(s)}i&&i(n,s)},this.room.engine.subscriber&&(this.room.engine.subscriber.pc.onicecandidateerror=e=>{e instanceof RTCPeerConnectionIceErrorEvent&&this.appendWarning("error with ICE candidate: ".concat(e.errorCode," ").concat(e.errorText," ").concat(e.url))})}));try{yield this.connect(),p.info("now the room is connected")}catch(e){throw this.appendWarning("ports need to be open on firewall in order to connect."),e}e||this.appendWarning("Server is not configured for ICE/TCP"),t||this.appendWarning("No public IPv4 UDP candidates were found. Your server is likely not configured correctly")}))}}class WebSocketCheck extends Checker{get description(){return"Connecting to signal connection via WebSocket"}perform(){var e,t,i;return __awaiter(this,void 0,void 0,(function*(){(this.url.startsWith("ws:")||this.url.startsWith("http:"))&&this.appendWarning("Server is insecure, clients may block connections to it");let n=new SignalClient;const s=yield n.join(this.url,this.token,{autoSubscribe:!0,maxRetries:0,e2eeEnabled:!1,websocketTimeout:15e3});this.appendMessage("Connected to server, version ".concat(s.serverVersion,".")),(null===(e=s.serverInfo)||void 0===e?void 0:e.edition)===G.Cloud&&(null===(t=s.serverInfo)||void 0===t?void 0:t.region)&&this.appendMessage("LiveKit Cloud: ".concat(null===(i=s.serverInfo)||void 0===i?void 0:i.region)),yield n.close()}))}}class ConnectionCheck extends ie.EventEmitter{constructor(e,t){super(),this.checkResults=new Map,this.url=e,this.token=t}getNextCheckId(){const e=this.checkResults.size;return this.checkResults.set(e,{logs:[],status:It.IDLE,name:"",description:""}),e}updateCheck(e,t){this.checkResults.set(e,t),this.emit("checkUpdate",e,t)}isSuccess(){return Array.from(this.checkResults.values()).every((e=>e.status!==It.FAILED))}getResults(){return Array.from(this.checkResults.values())}createAndRunCheck(e){return __awaiter(this,void 0,void 0,(function*(){const t=this.getNextCheckId(),i=new e(this.url,this.token),handleUpdate=e=>{this.updateCheck(t,e)};i.on("update",handleUpdate);const n=yield i.run();return i.off("update",handleUpdate),n}))}checkWebsocket(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(WebSocketCheck)}))}checkWebRTC(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(WebRTCCheck)}))}checkTURN(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(TURNCheck)}))}checkReconnect(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(ReconnectCheck)}))}checkPublishAudio(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(PublishAudioCheck)}))}checkPublishVideo(){return __awaiter(this,void 0,void 0,(function*(){return this.createAndRunCheck(PublishVideoCheck)}))}}function facingModeFromLocalTrack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var i;const n=e instanceof LocalTrack?e.mediaStreamTrack:e,s=n.getSettings();let a={facingMode:null!==(i=t.defaultFacingMode)&&void 0!==i?i:"user",confidence:"low"};if("facingMode"in s){const e=s.facingMode;p.debug("rawFacingMode",{rawFacingMode:e}),e&&"string"==typeof e&&isFacingModeValue(e)&&(a={facingMode:e,confidence:"high"})}if(["low","medium"].includes(a.confidence)){p.debug("Try to get facing mode from device label: (".concat(n.label,")"));const e=facingModeFromDeviceLabel(n.label);void 0!==e&&(a=e)}return a}const Dt=new Map([["obs virtual camera",{facingMode:"environment",confidence:"medium"}]]),Lt=new Map([["iphone",{facingMode:"environment",confidence:"medium"}],["ipad",{facingMode:"environment",confidence:"medium"}]]);function facingModeFromDeviceLabel(e){var t;const i=e.trim().toLowerCase();if(""!==i)return Dt.has(i)?Dt.get(i):null===(t=Array.from(Lt.entries()).find((e=>{let[t]=e;return i.includes(t)})))||void 0===t?void 0:t[1]}function isFacingModeValue(e){return void 0===e||["user","environment","left","right"].includes(e)}n=__webpack_require__.O(n),window.livekit=n})()


function Pointer_stringify(s, len) {
 warnOnce("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
 return UTF8ToString(s, len);
}

Module["Pointer_stringify"] = Pointer_stringify;

var stackTraceReference = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)";

var stackTraceReferenceMatch = jsStackTrace().match(new RegExp(stackTraceReference));

if (stackTraceReferenceMatch) Module.stackTraceRegExp = new RegExp(stackTraceReference.replace("([^\\n]+)", stackTraceReferenceMatch[4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));

var abort = function(what) {
 if (ABORT) return;
 ABORT = true;
 EXITSTATUS = 1;
 if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) console.error("Pthread aborting at " + new Error().stack);
 if (what !== undefined) {
  out(what);
  err(what);
  what = JSON.stringify(what);
 } else {
  what = "";
 }
 var message = "abort(" + what + ") at " + stackTrace();
 if (Module.abortHandler && Module.abortHandler(message)) return;
 throw message;
};

Module["SetFullscreen"] = function(fullscreen) {
 if (typeof runtimeInitialized === "undefined" || !runtimeInitialized) {
  console.log("Runtime not initialized yet.");
 } else if (typeof JSEvents === "undefined") {
  console.log("Player not loaded yet.");
 } else {
  var tmp = JSEvents.canPerformEventHandlerRequests;
  JSEvents.canPerformEventHandlerRequests = function() {
   return 1;
  };
  Module.ccall("SetFullscreen", null, [ "number" ], [ fullscreen ]);
  JSEvents.canPerformEventHandlerRequests = tmp;
 }
};

if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
 Module["preRun"].push(function() {
  var unityFileSystemInit = Module["unityFileSystemInit"] || function() {
   FS.mkdir("/idbfs");
   FS.mount(IDBFS, {}, "/idbfs");
   Module.addRunDependency("JS_FileSystem_Mount");
   FS.syncfs(true, function(err) {
    if (err) console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
    Module.removeRunDependency("JS_FileSystem_Mount");
   });
  };
  unityFileSystemInit();
 });
}

var videoInputDevices = [];

var removeEnumerateMediaDevicesRunDependency;

function matchToOldDevice(newDevice) {
 var oldDevices = Object.keys(videoInputDevices);
 for (var i = 0; i < oldDevices.length; ++i) {
  var old = videoInputDevices[oldDevices[i]];
  if (old.deviceId && old.deviceId == newDevice.deviceId) return old;
 }
 for (var i = 0; i < oldDevices.length; ++i) {
  var old = videoInputDevices[oldDevices[i]];
  if (old == newDevice) return old;
 }
 for (var i = 0; i < oldDevices.length; ++i) {
  var old = videoInputDevices[oldDevices[i]];
  if (old.label && old.label == newDevice.label) return old;
 }
 for (var i = 0; i < oldDevices.length; ++i) {
  var old = videoInputDevices[oldDevices[i]];
  if (old.groupId && old.kind && old.groupId == newDevice.groupId && old.kind == newDevice.kind) return old;
 }
}

function assignNewVideoInputId() {
 for (var i = 0; ;++i) {
  if (!videoInputDevices[i]) return i;
 }
}

function updateVideoInputDevices(devices) {
 removeEnumerateMediaDevicesRunDependency();
 videoInputDevices = [];
 var retainedDevices = {};
 var newDevices = [];
 devices.forEach(function(device) {
  if (device.kind === "videoinput") {
   var oldDevice = matchToOldDevice(device);
   if (oldDevice) {
    retainedDevices[oldDevice.id] = oldDevice;
   } else {
    newDevices.push(device);
   }
  }
 });
 videoInputDevices = retainedDevices;
 newDevices.forEach(function(device) {
  if (!device.id) {
   device.id = assignNewVideoInputId();
   device.name = device.label || "Video input #" + (device.id + 1);
   device.isFrontFacing = device.name.toLowerCase().includes("front") || !device.name.toLowerCase().includes("front") && !device.name.toLowerCase().includes("back");
   videoInputDevices[device.id] = device;
  }
 });
}

function enumerateMediaDeviceList() {
 if (!videoInputDevices) return;
 navigator.mediaDevices.enumerateDevices().then(function(devices) {
  updateVideoInputDevices(devices);
 }).catch(function(e) {
  console.warn("Unable to enumerate media devices: " + e + "\nWebcams will not be available.");
  disableAccessToMediaDevices();
 });
 if (/Firefox/.test(navigator.userAgent)) {
  setTimeout(enumerateMediaDeviceList, 6e4);
  warnOnce("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
 }
}

function disableAccessToMediaDevices() {
 if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
  navigator.mediaDevices.removeEventListener("devicechange", enumerateMediaDeviceList);
 }
 videoInputDevices = null;
}

Module["disableAccessToMediaDevices"] = disableAccessToMediaDevices;

if (!navigator.mediaDevices) {
 console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
 disableAccessToMediaDevices();
} else if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) setTimeout(function() {
 try {
  addRunDependency("enumerateMediaDevices");
  removeEnumerateMediaDevicesRunDependency = function() {
   removeRunDependency("enumerateMediaDevices");
   if (navigator.mediaDevices) console.log("navigator.mediaDevices support available");
   removeEnumerateMediaDevicesRunDependency = function() {};
  };
  enumerateMediaDeviceList();
  navigator.mediaDevices.addEventListener("devicechange", enumerateMediaDeviceList);
 } catch (e) {
  console.warn("Unable to enumerate media devices: " + e);
  disableAccessToMediaDevices();
 }
}, 0);

function SendMessage(gameObject, func, param) {
 if (param === undefined) Module.ccall("SendMessage", null, [ "string", "string" ], [ gameObject, func ]); else if (typeof param === "string") Module.ccall("SendMessageString", null, [ "string", "string", "string" ], [ gameObject, func, param ]); else if (typeof param === "number") Module.ccall("SendMessageFloat", null, [ "string", "string", "number" ], [ gameObject, func, param ]); else throw "" + param + " is does not have a type which is supported by SendMessage.";
}

Module["SendMessage"] = SendMessage;

var moduleOverrides = {};

var key;

for (key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = function(status, toThrow) {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = false;

var ENVIRONMENT_IS_WORKER = false;

var ENVIRONMENT_IS_NODE = false;

var ENVIRONMENT_IS_SHELL = false;

ENVIRONMENT_IS_WEB = typeof window === "object";

ENVIRONMENT_IS_WORKER = typeof importScripts === "function";

ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";

ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

var nodeFS;

var nodePath;

if (ENVIRONMENT_IS_NODE) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = require("path").dirname(scriptDirectory) + "/";
 } else {
  scriptDirectory = __dirname + "/";
 }
 read_ = function shell_read(filename, binary) {
  if (!nodeFS) nodeFS = require("fs");
  if (!nodePath) nodePath = require("path");
  filename = nodePath["normalize"](filename);
  return nodeFS["readFileSync"](filename, binary ? null : "utf8");
 };
 readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
   ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
 };
 if (process["argv"].length > 1) {
  thisProgram = process["argv"][1].replace(/\\/g, "/");
 }
 arguments_ = process["argv"].slice(2);
 if (typeof module !== "undefined") {
  module["exports"] = Module;
 }
 process["on"]("uncaughtException", function(ex) {
  if (!(ex instanceof ExitStatus)) {
   throw ex;
  }
 });
 process["on"]("unhandledRejection", abort);
 quit_ = function(status) {
  process["exit"](status);
 };
 Module["inspect"] = function() {
  return "[Emscripten Module object]";
 };
} else if (ENVIRONMENT_IS_SHELL) {
 if (typeof read != "undefined") {
  read_ = function shell_read(f) {
   return read(f);
  };
 }
 readBinary = function readBinary(f) {
  var data;
  if (typeof readbuffer === "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data === "object");
  return data;
 };
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit === "function") {
  quit_ = function(status) {
   quit(status);
  };
 }
 if (typeof print !== "undefined") {
  if (typeof console === "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document !== "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 {
  read_ = function(url) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = function(url, onload, onerror) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = function() {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = function(title) {
  document.title = title;
 };
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

for (key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
 Object.defineProperty(Module, "arguments", {
  configurable: true,
  get: function() {
   abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
 Object.defineProperty(Module, "thisProgram", {
  configurable: true,
  get: function() {
   abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["quit"]) quit_ = Module["quit"];

if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
 Object.defineProperty(Module, "quit", {
  configurable: true,
  get: function() {
   abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

if (!Object.getOwnPropertyDescriptor(Module, "read")) {
 Object.defineProperty(Module, "read", {
  configurable: true,
  get: function() {
   abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
 Object.defineProperty(Module, "readAsync", {
  configurable: true,
  get: function() {
   abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
 Object.defineProperty(Module, "readBinary", {
  configurable: true,
  get: function() {
   abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
 Object.defineProperty(Module, "setWindowTitle", {
  configurable: true,
  get: function() {
   abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var STACK_ALIGN = 16;

function alignMemory(size, factor) {
 if (!factor) factor = STACK_ALIGN;
 return Math.ceil(size / factor) * factor;
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function === "function") {
  var typeNames = {
   "i": "i32",
   "j": "i64",
   "f": "f32",
   "d": "f64"
  };
  var type = {
   parameters: [],
   results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
   type.parameters.push(typeNames[sig[i]]);
  }
  return new WebAssembly.Function(type, func);
 }
 var typeSection = [ 1, 0, 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection.push(sigParam.length);
 for (var i = 0; i < sigParam.length; ++i) {
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection[1] = typeSection.length - 2;
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function getEmptyTableSlot() {
 if (freeTableIndexes.length) {
  return freeTableIndexes.pop();
 }
 try {
  wasmTable.grow(1);
 } catch (err) {
  if (!(err instanceof RangeError)) {
   throw err;
  }
  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
 }
 return wasmTable.length - 1;
}

function addFunctionWasm(func, sig) {
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  for (var i = 0; i < wasmTable.length; i++) {
   var item = wasmTable.get(i);
   if (item) {
    functionsInTableMap.set(item, i);
   }
  }
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 var ret = getEmptyTableSlot();
 try {
  wasmTable.set(ret, func);
 } catch (err) {
  if (!(err instanceof TypeError)) {
   throw err;
  }
  assert(typeof sig !== "undefined", "Missing signature argument to addFunction: " + func);
  var wrapped = convertJsFunctionToWasm(func, sig);
  wasmTable.set(ret, wrapped);
 }
 functionsInTableMap.set(func, ret);
 return ret;
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
 tempRet0 = value;
};

var getTempRet0 = function() {
 return tempRet0;
};

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
 Object.defineProperty(Module, "wasmBinary", {
  configurable: true,
  get: function() {
   abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var noExitRuntime = Module["noExitRuntime"] || true;

if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
 Object.defineProperty(Module, "noExitRuntime", {
  configurable: true,
  get: function() {
   abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (typeof WebAssembly !== "object") {
 abort("no native wasm support detected");
}

var wasmMemory;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 assert(returnType !== "array", 'Return type should not be "array".');
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 ret = convertReturnValue(ret);
 if (stack !== 0) stackRestore(stack);
 return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_STACK = 1;

var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
  return UTF8Decoder.decode(heap.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = heap[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = heap[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = heap[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | u >> 6;
   heap[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | u >> 12;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u >= 2097152) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).");
   heap[outIdx++] = 240 | u >> 18;
   heap[outIdx++] = 128 | u >> 12 & 63;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function writeArrayToMemory(array, buffer) {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
  HEAP8[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}

function alignUp(x, multiple) {
 if (x % multiple > 0) {
  x += multiple - x % multiple;
 }
 return x;
}

var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;

if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
 Object.defineProperty(Module, "INITIAL_MEMORY", {
  configurable: true,
  get: function() {
   abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, "JS engine does not provide full typed array support");

assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");

assert(INITIAL_MEMORY == 33554432, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");

var wasmTable;

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 HEAPU32[(max >> 2) + 1] = 34821223;
 HEAPU32[(max >> 2) + 2] = 2310721022;
 HEAP32[0] = 1668509029;
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 var cookie1 = HEAPU32[(max >> 2) + 1];
 var cookie2 = HEAPU32[(max >> 2) + 2];
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
 }
 if (HEAP32[0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeExited = false;

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 checkStackCookie();
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 TTY.init();
 SOCKFS.root = FS.mount(SOCKFS, {}, null);
 PIPEFS.root = FS.mount(PIPEFS, {}, null);
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 checkStackCookie();
 FS.ignorePermissions = false;
 callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
 checkStackCookie();
 runtimeExited = true;
}

function postRun() {
 checkStackCookie();
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
   runDependencyWatcher = setInterval(function() {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }, 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

Module["preloadedImages"] = {};

Module["preloadedAudios"] = {};

function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 what += "";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var output = "abort(" + what + ") at " + stackTrace();
 what = output;
 var e = new WebAssembly.RuntimeError(what);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile = "build.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
 try {
  if (file == wasmBinaryFile && wasmBinary) {
   return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
   return readBinary(file);
  } else {
   throw "both async and sync fetching of the wasm failed";
  }
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(function() {
    return getBinary(wasmBinaryFile);
   });
  } else {
   if (readAsync) {
    return new Promise(function(resolve, reject) {
     readAsync(wasmBinaryFile, function(response) {
      resolve(new Uint8Array(response));
     }, reject);
    });
   }
  }
 }
 return Promise.resolve().then(function() {
  return getBinary(wasmBinaryFile);
 });
}

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  Module["asm"] = exports;
  wasmMemory = Module["asm"]["memory"];
  assert(wasmMemory, "memory not found in wasm exports");
  updateGlobalBufferAndViews(wasmMemory.buffer);
  wasmTable = Module["asm"]["__indirect_function_table"];
  assert(wasmTable, "table not found in wasm exports");
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  removeRunDependency("wasm-instantiate");
 }
 addRunDependency("wasm-instantiate");
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   var result = WebAssembly.instantiate(binary, info);
   return result;
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   if (isFileURI(wasmBinaryFile)) {
    err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
   }
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    return result.then(receiveInstantiationResult, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiationResult);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiationResult);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync();
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {
 3501332: function() {
  Module["emscripten_get_now_backup"] = performance.now;
 },
 3501387: function($0) {
  performance.now = function() {
   return $0;
  };
 },
 3501435: function($0) {
  performance.now = function() {
   return $0;
  };
 },
 3501483: function() {
  performance.now = Module["emscripten_get_now_backup"];
 },
 3501538: function() {
  return Module.webglContextAttributes.premultipliedAlpha;
 },
 3501599: function() {
  return Module.webglContextAttributes.preserveDrawingBuffer;
 }
};

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback(Module);
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    (function() {
     dynCall_v.call(null, func);
    })();
   } else {
    (function(a1) {
     dynCall_vi.apply(null, [ func, a1 ]);
    })(callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

function demangle(func) {
 demangle.recursionGuard = (demangle.recursionGuard | 0) + 1;
 if (demangle.recursionGuard > 1) return func;
 var __cxa_demangle_func = Module["___cxa_demangle"] || Module["__cxa_demangle"];
 assert(__cxa_demangle_func);
 var stackTop = stackSave();
 try {
  var s = func;
  if (s.startsWith("__Z")) s = s.substr(1);
  var len = lengthBytesUTF8(s) + 1;
  var buf = stackAlloc(len);
  stringToUTF8(s, buf, len);
  var status = stackAlloc(4);
  var ret = __cxa_demangle_func(buf, 0, 0, status);
  if (HEAP32[status >> 2] === 0 && ret) {
   return UTF8ToString(ret);
  }
 } catch (e) {} finally {
  _free(ret);
  stackRestore(stackTop);
  if (demangle.recursionGuard < 2) --demangle.recursionGuard;
 }
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

function dynCallLegacy(sig, ptr, args) {
 assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
 if (args && args.length) {
  assert(args.length === sig.substring(1).replace(/j/g, "--").length);
 } else {
  assert(sig.length == 1);
 }
 var f = Module["dynCall_" + sig];
 return args && args.length ? f.apply(null, [ ptr ].concat(args)) : f.call(null, ptr);
}

function dynCall(sig, ptr, args) {
 return dynCallLegacy(sig, ptr, args);
}

function jsStackTrace() {
 var error = new Error();
 if (!error.stack) {
  try {
   throw new Error();
  } catch (e) {
   error = e;
  }
  if (!error.stack) {
   return "(no stack trace available)";
  }
 }
 return error.stack.toString();
}

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
 return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

var LKBridge = {
 Data: null,
 Pointers: null,
 RefCount: null,
 Debug: false,
 RefIndex: 1,
 Stack: [],
 StackCSharp: [],
 FunctionInstance: null,
 NullPtr: 0,
 DynCall: function(sig, fnc, args) {
  if (typeof Runtime !== "undefined") {
   Runtime.dynCall(sig, fnc, args);
  } else {
   dynCall(sig, fnc, args);
  }
 },
 NewRef: function() {
  var nPtr = LKBridge.RefIndex++;
  LKBridge.RefCount.set(nPtr, 0);
  LKBridge.SetRef(nPtr, null);
  return nPtr;
 },
 FreeRef: function(ptr) {
  var obj = LKBridge.Data.get(ptr);
  LKBridge.Data.delete(ptr);
  LKBridge.RefCount.delete(ptr);
  LKBridge.Pointers.delete(obj);
 },
 SetRef: function(ptr, obj) {
  LKBridge.Data.set(ptr, obj);
  if (typeof obj === "object" && obj !== null) {
   LKBridge.Pointers.set(obj, ptr);
  }
 },
 GetOrNewRef: function(obj) {
  var ptr = LKBridge.Pointers.get(obj);
  if (ptr === undefined || typeof obj !== "object" || obj === null) {
   ptr = LKBridge.NewRef();
   LKBridge.SetRef(ptr, obj);
  }
  return ptr;
 },
 AddRef: function(ptr) {
  LKBridge.RefCount.set(ptr, LKBridge.RefCount.get(ptr) + 1);
  return ptr;
 },
 RemRef: function(ptr) {
  var count = LKBridge.RefCount.get(ptr) - 1;
  LKBridge.RefCount.set(ptr, count);
  if (count < 0) {
   console.error("LKBridge: The ref count of " + ptr + "(obj: " + LKBridge.Data.get(ptr) + ") is negative ( Ptr management is wrong ! )");
  }
  if (count <= 0) {
   LKBridge.FreeRef(ptr);
  }
  return ptr;
 }
};

function _AttachVideo(videoPtr, texId) {
 var tex = GL.textures[texId];
 var lastTime = -1;
 var initialVideo = LKBridge.Data.get(videoPtr);
 initialVideo.style.opacity = 0;
 initialVideo.style.width = 0;
 initialVideo.style.height = 0;
 setTimeout(function() {
  initialVideo.play();
 }, 0);
 initialVideo.addEventListener("canplay", event => {
  initialVideo.play();
 });
 document.body.appendChild(initialVideo);
 var updateVideo = function() {
  var video = LKBridge.Data.get(videoPtr);
  if (video === undefined) {
   initialVideo.remove();
   return;
  }
  var time = video.currentTime;
  if (!video.paused && video.srcObject !== null && time !== lastTime) {
   lastTime = time;
   GLctx.bindTexture(GLctx.TEXTURE_2D, tex);
   GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, true);
   GLctx.texImage2D(GLctx.TEXTURE_2D, 0, GLctx.RGBA, GLctx.RGBA, GLctx.UNSIGNED_BYTE, video);
   GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, false);
   GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_MAG_FILTER, GLctx.LINEAR);
   GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_MIN_FILTER, GLctx.LINEAR);
   GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_S, GLctx.CLAMP_TO_EDGE);
   GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_T, GLctx.CLAMP_TO_EDGE);
  }
  requestAnimationFrame(updateVideo);
 };
 requestAnimationFrame(updateVideo);
}

function _BrowserFireEvent(eventName, eventValue) {
 var e = UTF8ToString(eventName);
 var v = UTF8ToString(eventValue);
 BrowserInteraction.FireEventLocal(e, v);
}

function _CallMethod(ptr, str) {
 var stack = LKBridge.Stack;
 LKBridge.Stack = [];
 var obj = LKBridge.Data.get(ptr);
 var mName = UTF8ToString(str);
 var fnc = obj[mName];
 var result = undefined;
 try {
  result = fnc.apply(obj, stack);
 } catch (e) {
  console.error("Internal issue when calling " + mName + "\n", "Stack: ", stack, e);
 }
 return LKBridge.AddRef(LKBridge.GetOrNewRef(result));
}

var SimpleWeb = {
 webSockets: [],
 next: 1,
 GetWebSocket: function(index) {
  return SimpleWeb.webSockets[index];
 },
 AddNextSocket: function(webSocket) {
  var index = SimpleWeb.next;
  SimpleWeb.next++;
  SimpleWeb.webSockets[index] = webSocket;
  return index;
 },
 RemoveSocket: function(index) {
  SimpleWeb.webSockets[index] = undefined;
 }
};

function _Connect(addressPtr, openCallbackPtr, closeCallBackPtr, messageCallbackPtr, errorCallbackPtr) {
 if (typeof Runtime === "undefined") {
  Runtime = {
   dynCall: dynCall
  };
 }
 const address = UTF8ToString(addressPtr);
 console.log("Connecting to " + address);
 webSocket = new WebSocket(address);
 webSocket.binaryType = "arraybuffer";
 const index = SimpleWeb.AddNextSocket(webSocket);
 webSocket.addEventListener("open", function(event) {
  console.log("Connected to " + address);
  Runtime.dynCall("vi", openCallbackPtr, [ index ]);
 });
 webSocket.addEventListener("close", function(event) {
  console.log("Disconnected from " + address);
  Runtime.dynCall("vi", closeCallBackPtr, [ index ]);
 });
 webSocket.addEventListener("message", function(event) {
  if (event.data instanceof ArrayBuffer) {
   var array = new Uint8Array(event.data);
   var arrayLength = array.length;
   var bufferPtr = _malloc(arrayLength);
   var dataBuffer = new Uint8Array(HEAPU8.buffer, bufferPtr, arrayLength);
   dataBuffer.set(array);
   Runtime.dynCall("viii", messageCallbackPtr, [ index, bufferPtr, arrayLength ]);
   _free(bufferPtr);
  } else {
   console.error("message type not supported");
  }
 });
 webSocket.addEventListener("error", function(event) {
  console.error("Socket Error", event);
  Runtime.dynCall("vi", errorCallbackPtr, [ index ]);
 });
 return index;
}

function _CopyData(ptr, buff, offset, count) {
 var value = LKBridge.Data.get(ptr);
 var arr = new Uint8Array(value, offset, count);
 HEAPU8.set(arr, buff);
}

function _DestroyTexture(id) {
 GLctx.deleteTexture(GL.textures[id]);
}

function _Disconnect(index) {
 var webSocket = SimpleWeb.GetWebSocket(index);
 if (webSocket) {
  webSocket.close(1e3, "Disconnect Called by Mirror");
 }
 SimpleWeb.RemoveSocket(index);
}

function _GetBoolean(ptr) {
 return LKBridge.Data.get(ptr);
}

function _GetFunctionInstance() {
 var v = LKBridge.FunctionInstance;
 return LKBridge.AddRef(LKBridge.GetOrNewRef(v));
}

function _GetNumber(ptr) {
 return LKBridge.Data.get(ptr);
}

function _GetProperty(ptr) {
 var key = LKBridge.Stack[0];
 LKBridge.Stack = [];
 var p = LKBridge.Data.get(ptr);
 var obj = p[key];
 return LKBridge.AddRef(LKBridge.GetOrNewRef(obj));
}

function _GetString(ptr) {
 var value = LKBridge.Data.get(ptr);
 if (value === undefined || value === null) return null;
 var bufferSize = lengthBytesUTF8(value) + 1;
 var buffer = _malloc(bufferSize);
 stringToUTF8(value, buffer, bufferSize);
 return buffer;
}

function _HideReadyPlayerMeFrame() {
 hideRpm();
}

function _Home() {
 window.location.href = "https://custmeet.com";
}

function _InitLiveKit(debug) {
 LKBridge.Debug = debug === 1;
 LKBridge.Data = new Map();
 LKBridge.Pointers = new Map();
 LKBridge.RefCount = new Map();
 window.lkinternal = LKBridge;
}

function _IsBoolean(ptr) {
 var obj = LKBridge.Data.get(ptr);
 return typeof obj === "boolean";
}

function _IsNull(ptr) {
 return LKBridge.Data.get(ptr) === null;
}

function _IsNumber(ptr) {
 var obj = LKBridge.Data.get(ptr);
 return typeof obj === "number" && !isNaN(obj);
}

function _IsObject(ptr) {
 var obj = LKBridge.Data.get(ptr);
 return typeof obj === "object" && obj !== null;
}

function _IsString(ptr) {
 var obj = LKBridge.Data.get(ptr);
 return typeof obj === "string" || obj instanceof String;
}

function _IsUndefined(ptr) {
 return LKBridge.Data.get(ptr) === undefined;
}

var JS_Accelerometer = null;

var JS_Accelerometer_callback = 0;

function _JS_Accelerometer_IsRunning() {
 return JS_Accelerometer && JS_Accelerometer.activated || JS_Accelerometer_callback != 0;
}

var JS_Accelerometer_multiplier = 1;

var JS_Accelerometer_lastValue = {
 x: 0,
 y: 0,
 z: 0
};

function JS_Accelerometer_eventHandler() {
 JS_Accelerometer_lastValue = {
  x: JS_Accelerometer.x * JS_Accelerometer_multiplier,
  y: JS_Accelerometer.y * JS_Accelerometer_multiplier,
  z: JS_Accelerometer.z * JS_Accelerometer_multiplier
 };
 if (JS_Accelerometer_callback != 0) dynCall_vfff(JS_Accelerometer_callback, JS_Accelerometer_lastValue.x, JS_Accelerometer_lastValue.y, JS_Accelerometer_lastValue.z);
}

var JS_Accelerometer_frequencyRequest = 0;

var JS_Accelerometer_frequency = 0;

var JS_LinearAccelerationSensor_callback = 0;

var JS_GravitySensor_callback = 0;

var JS_Gyroscope_callback = 0;

function JS_ComputeGravity(accelerometerValue, linearAccelerationValue) {
 var difference = {
  x: accelerometerValue.x - linearAccelerationValue.x,
  y: accelerometerValue.y - linearAccelerationValue.y,
  z: accelerometerValue.z - linearAccelerationValue.z
 };
 var differenceMagnitudeSq = difference.x * difference.x + difference.y * difference.y + difference.z * difference.z;
 var sum = {
  x: accelerometerValue.x + linearAccelerationValue.x,
  y: accelerometerValue.y + linearAccelerationValue.y,
  z: accelerometerValue.z + linearAccelerationValue.z
 };
 var sumMagnitudeSq = sum.x * sum.x + sum.y * sum.y + sum.z * sum.z;
 return differenceMagnitudeSq <= sumMagnitudeSq ? difference : sum;
}

function JS_DeviceMotion_eventHandler(event) {
 var accelerometerValue = {
  x: event.accelerationIncludingGravity.x * JS_Accelerometer_multiplier,
  y: event.accelerationIncludingGravity.y * JS_Accelerometer_multiplier,
  z: event.accelerationIncludingGravity.z * JS_Accelerometer_multiplier
 };
 if (JS_Accelerometer_callback != 0) dynCall_vfff(JS_Accelerometer_callback, accelerometerValue.x, accelerometerValue.y, accelerometerValue.z);
 var linearAccelerationValue = {
  x: event.acceleration.x * JS_Accelerometer_multiplier,
  y: event.acceleration.y * JS_Accelerometer_multiplier,
  z: event.acceleration.z * JS_Accelerometer_multiplier
 };
 if (JS_LinearAccelerationSensor_callback != 0) dynCall_vfff(JS_LinearAccelerationSensor_callback, linearAccelerationValue.x, linearAccelerationValue.y, linearAccelerationValue.z);
 if (JS_GravitySensor_callback != 0) {
  assert(typeof GravitySensor === "undefined");
  var gravityValue = JS_ComputeGravity(accelerometerValue, linearAccelerationValue);
  dynCall_vfff(JS_GravitySensor_callback, gravityValue.x, gravityValue.y, gravityValue.z);
 }
 if (JS_Gyroscope_callback != 0) {
  var degToRad = Math.PI / 180;
  dynCall_vfff(JS_Gyroscope_callback, event.rotationRate.alpha * degToRad, event.rotationRate.beta * degToRad, event.rotationRate.gamma * degToRad);
 }
}

var JS_DeviceSensorPermissions = 0;

function JS_RequestDeviceSensorPermissions(permissions) {
 if (permissions & 1) {
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
   DeviceOrientationEvent.requestPermission().then(function(permissionState) {
    if (permissionState === "granted") {
     JS_DeviceSensorPermissions &= ~1;
    } else {
     warnOnce("DeviceOrientationEvent permission not granted");
    }
   }).catch(function(err) {
    warnOnce(err);
    JS_DeviceSensorPermissions |= 1;
   });
  }
 }
 if (permissions & 2) {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
   DeviceMotionEvent.requestPermission().then(function(permissionState) {
    if (permissionState === "granted") {
     JS_DeviceSensorPermissions &= ~2;
    } else {
     warnOnce("DeviceMotionEvent permission not granted");
    }
   }).catch(function(err) {
    warnOnce(err);
    JS_DeviceSensorPermissions |= 2;
   });
  }
 }
}

function JS_DeviceMotion_add() {
 if (JS_Accelerometer_callback == 0 && JS_LinearAccelerationSensor_callback == 0 && JS_GravitySensor_callback == 0 && JS_Gyroscope_callback == 0) {
  JS_RequestDeviceSensorPermissions(2);
  window.addEventListener("devicemotion", JS_DeviceMotion_eventHandler);
 }
}

function JS_DefineAccelerometerMultiplier() {
 var g = 9.80665;
 JS_Accelerometer_multiplier = /(iPhone|iPad|Macintosh)/i.test(navigator.userAgent) ? 1 / g : -1 / g;
}

function _JS_Accelerometer_Start(callback, frequency) {
 JS_DefineAccelerometerMultiplier();
 if (typeof Accelerometer === "undefined") {
  JS_DeviceMotion_add();
  if (callback != 0) JS_Accelerometer_callback = callback;
  return;
 }
 if (callback != 0) JS_Accelerometer_callback = callback;
 function InitializeAccelerometer(frequency) {
  JS_Accelerometer = new Accelerometer({
   frequency: frequency,
   referenceFrame: "device"
  });
  JS_Accelerometer.addEventListener("reading", JS_Accelerometer_eventHandler);
  JS_Accelerometer.addEventListener("error", function(e) {
   warnOnce(e.error ? e.error : e);
  });
  JS_Accelerometer.start();
  JS_Accelerometer_frequency = frequency;
 }
 if (JS_Accelerometer) {
  if (JS_Accelerometer_frequency != frequency) {
   JS_Accelerometer.stop();
   JS_Accelerometer.removeEventListener("reading", JS_Accelerometer_eventHandler);
   InitializeAccelerometer(frequency);
  }
 } else if (JS_Accelerometer_frequencyRequest != 0) {
  JS_Accelerometer_frequencyRequest = frequency;
 } else {
  JS_Accelerometer_frequencyRequest = frequency;
  navigator.permissions.query({
   name: "accelerometer"
  }).then(function(result) {
   if (result.state === "granted") {
    InitializeAccelerometer(JS_Accelerometer_frequencyRequest);
   } else {
    warnOnce("No permission to use Accelerometer.");
   }
   JS_Accelerometer_frequencyRequest = 0;
  });
 }
}

function JS_DeviceMotion_remove() {
 if (JS_Accelerometer_callback == 0 && JS_LinearAccelerationSensor_callback == 0 && JS_GravitySensor_callback == 0 && JS_Gyroscope_callback == 0) {
  window.removeEventListener("devicemotion", JS_DeviceOrientation_eventHandler);
 }
}

function _JS_Accelerometer_Stop() {
 if (JS_Accelerometer) {
  if (typeof GravitySensor !== "undefined" || JS_GravitySensor_callback == 0) {
   JS_Accelerometer.stop();
   JS_Accelerometer.removeEventListener("reading", JS_Accelerometer_eventHandler);
   JS_Accelerometer = null;
  }
  JS_Accelerometer_callback = 0;
  JS_Accelerometer_frequency = 0;
 } else if (JS_Accelerometer_callback != 0) {
  JS_Accelerometer_callback = 0;
  JS_DeviceMotion_remove();
 }
}

function _JS_Cursor_SetImage(ptr, length) {
 var binary = "";
 for (var i = 0; i < length; i++) binary += String.fromCharCode(HEAPU8[ptr + i]);
 Module.canvas.style.cursor = "url(data:image/cur;base64," + btoa(binary) + "),default";
}

function _JS_Cursor_SetShow(show) {
 Module.canvas.style.cursor = show ? "default" : "none";
}

function jsDomCssEscapeId(id) {
 if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
  return window.CSS.escape(id);
 }
 return id.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
}

function _JS_DOM_MapViewportCoordinateToElementLocalCoordinate(viewportX, viewportY, targetX, targetY) {
 var canvasId = Module["canvas"] ? Module["canvas"].id : "unity-canvas";
 var canvasSelector = "#" + jsDomCssEscapeId(canvasId);
 var canvas = document.querySelector(canvasSelector);
 var rect = canvas.getBoundingClientRect();
 HEAPU32[targetX >> 2] = viewportX - rect.left;
 HEAPU32[targetY >> 2] = viewportY - rect.top;
}

function stringToNewUTF8(jsString) {
 var length = lengthBytesUTF8(jsString) + 1;
 var cString = _malloc(length);
 stringToUTF8(jsString, cString, length);
 return cString;
}

function _JS_DOM_UnityCanvasSelector() {
 if (Module["canvas"] && !Module["canvas"].id) throw 'Module["canvas"] must have a CSS ID associated with it!';
 if (!_JS_DOM_UnityCanvasSelector.ptr) {
  var canvasId = Module["canvas"] ? Module["canvas"].id : "unity-canvas";
  var canvasSelector = "#" + jsDomCssEscapeId(canvasId);
  _JS_DOM_UnityCanvasSelector.ptr = stringToNewUTF8(canvasSelector);
 }
 return _JS_DOM_UnityCanvasSelector.ptr;
}

function _JS_Eval_OpenURL(ptr) {
 var str = UTF8ToString(ptr);
 window.open(str, "_blank", "");
}

var fs = {
 numPendingSync: 0,
 syncInternal: 1e3,
 syncInProgress: false,
 sync: function(onlyPendingSync) {
  if (onlyPendingSync) {
   if (fs.numPendingSync == 0) return;
  } else if (fs.syncInProgress) {
   fs.numPendingSync++;
   return;
  }
  fs.syncInProgress = true;
  FS.syncfs(false, function(err) {
   fs.syncInProgress = false;
  });
  fs.numPendingSync = 0;
 }
};

function _JS_FileSystem_Initialize() {
 Module.setInterval(function() {
  fs.sync(true);
 }, fs.syncInternal);
}

function _JS_FileSystem_Sync() {
 fs.sync(false);
}

function _JS_Focus_Window() {
 var activeElem = document.activeElement;
 var canvasId = Module["canvas"] ? Module["canvas"].id : "unity-canvas";
 var canvasSelector = "#" + jsDomCssEscapeId(canvasId);
 var canvas = document.querySelector(canvasSelector);
 if (activeElem != canvas && activeElem != window && activeElem != document.body) {
  window.focus();
 }
}

var JS_GravitySensor = null;

function _JS_GravitySensor_IsRunning() {
 return typeof GravitySensor !== "undefined" ? JS_GravitySensor && JS_GravitySensor.activated : JS_GravitySensor_callback != 0;
}

function JS_GravitySensor_eventHandler() {
 if (JS_GravitySensor_callback != 0) dynCall_vfff(JS_GravitySensor_callback, JS_GravitySensor.x * JS_Accelerometer_multiplier, JS_GravitySensor.y * JS_Accelerometer_multiplier, JS_GravitySensor.z * JS_Accelerometer_multiplier);
}

var JS_GravitySensor_frequencyRequest = 0;

var JS_LinearAccelerationSensor = null;

function JS_LinearAccelerationSensor_eventHandler() {
 var linearAccelerationValue = {
  x: JS_LinearAccelerationSensor.x * JS_Accelerometer_multiplier,
  y: JS_LinearAccelerationSensor.y * JS_Accelerometer_multiplier,
  z: JS_LinearAccelerationSensor.z * JS_Accelerometer_multiplier
 };
 if (JS_LinearAccelerationSensor_callback != 0) dynCall_vfff(JS_LinearAccelerationSensor_callback, linearAccelerationValue.x, linearAccelerationValue.y, linearAccelerationValue.z);
 if (JS_GravitySensor_callback != 0 && typeof GravitySensor === "undefined") {
  var gravityValue = JS_ComputeGravity(JS_Accelerometer_lastValue, linearAccelerationValue);
  dynCall_vfff(JS_GravitySensor_callback, gravityValue.x, gravityValue.y, gravityValue.z);
 }
}

var JS_LinearAccelerationSensor_frequencyRequest = 0;

var JS_LinearAccelerationSensor_frequency = 0;

function _JS_LinearAccelerationSensor_Start(callback, frequency) {
 JS_DefineAccelerometerMultiplier();
 if (typeof LinearAccelerationSensor === "undefined") {
  JS_DeviceMotion_add();
  if (callback != 0) JS_LinearAccelerationSensor_callback = callback;
  return;
 }
 if (callback != 0) JS_LinearAccelerationSensor_callback = callback;
 function InitializeLinearAccelerationSensor(frequency) {
  JS_LinearAccelerationSensor = new LinearAccelerationSensor({
   frequency: frequency,
   referenceFrame: "device"
  });
  JS_LinearAccelerationSensor.addEventListener("reading", JS_LinearAccelerationSensor_eventHandler);
  JS_LinearAccelerationSensor.addEventListener("error", function(e) {
   warnOnce(e.error ? e.error : e);
  });
  JS_LinearAccelerationSensor.start();
  JS_LinearAccelerationSensor_frequency = frequency;
 }
 if (JS_LinearAccelerationSensor) {
  if (JS_LinearAccelerationSensor_frequency != frequency) {
   JS_LinearAccelerationSensor.stop();
   JS_LinearAccelerationSensor.removeEventListener("reading", JS_LinearAccelerationSensor_eventHandler);
   InitializeLinearAccelerationSensor(frequency);
  }
 } else if (JS_LinearAccelerationSensor_frequencyRequest != 0) {
  JS_LinearAccelerationSensor_frequencyRequest = frequency;
 } else {
  JS_LinearAccelerationSensor_frequencyRequest = frequency;
  navigator.permissions.query({
   name: "accelerometer"
  }).then(function(result) {
   if (result.state === "granted") {
    InitializeLinearAccelerationSensor(JS_LinearAccelerationSensor_frequencyRequest);
   } else {
    warnOnce("No permission to use LinearAccelerationSensor.");
   }
   JS_LinearAccelerationSensor_frequencyRequest = 0;
  });
 }
}

function _JS_GravitySensor_Start(callback, frequency) {
 assert(callback != 0, "Invalid callback passed to JS_GravitySensor_Start");
 if (typeof GravitySensor === "undefined") {
  _JS_Accelerometer_Start(0, Math.max(frequency, JS_Accelerometer_frequency));
  _JS_LinearAccelerationSensor_Start(0, Math.max(frequency, JS_LinearAccelerationSensor_frequency));
  JS_GravitySensor_callback = callback;
  return;
 }
 JS_DefineAccelerometerMultiplier();
 JS_GravitySensor_callback = callback;
 function InitializeGravitySensor(frequency) {
  JS_GravitySensor = new GravitySensor({
   frequency: frequency,
   referenceFrame: "device"
  });
  JS_GravitySensor.addEventListener("reading", JS_GravitySensor_eventHandler);
  JS_GravitySensor.addEventListener("error", function(e) {
   warnOnce(e.error ? e.error : e);
  });
  JS_GravitySensor.start();
 }
 if (JS_GravitySensor) {
  JS_GravitySensor.stop();
  JS_GravitySensor.removeEventListener("reading", JS_GravitySensor_eventHandler);
  InitializeGravitySensor(frequency);
 } else if (JS_GravitySensor_frequencyRequest != 0) {
  JS_GravitySensor_frequencyRequest = frequency;
 } else {
  JS_GravitySensor_frequencyRequest = frequency;
  navigator.permissions.query({
   name: "accelerometer"
  }).then(function(result) {
   if (result.state === "granted") {
    InitializeGravitySensor(JS_GravitySensor_frequencyRequest);
   } else {
    warnOnce("No permission to use GravitySensor.");
   }
   JS_GravitySensor_frequencyRequest = 0;
  });
 }
}

function _JS_LinearAccelerationSensor_Stop() {
 if (JS_LinearAccelerationSensor) {
  if (typeof GravitySensor !== "undefined" || JS_GravitySensor_callback == 0) {
   JS_LinearAccelerationSensor.stop();
   JS_LinearAccelerationSensor.removeEventListener("reading", JS_LinearAccelerationSensor_eventHandler);
   JS_LinearAccelerationSensor = null;
  }
  JS_LinearAccelerationSensor_callback = 0;
  JS_LinearAccelerationSensor_frequency = 0;
 } else if (JS_LinearAccelerationSensor_callback != 0) {
  JS_LinearAccelerationSensor_callback = 0;
  JS_DeviceMotion_remove();
 }
}

function _JS_GravitySensor_Stop() {
 JS_GravitySensor_callback = 0;
 if (typeof GravitySensor === "undefined") {
  if (JS_Accelerometer_callback == 0) _JS_Accelerometer_Stop();
  if (JS_LinearAccelerationSensor_callback == 0) _JS_LinearAccelerationSensor_Stop();
  return;
 }
 if (JS_GravitySensor) {
  JS_GravitySensor.stop();
  JS_GravitySensor.removeEventListener("reading", JS_GravitySensor_eventHandler);
  JS_GravitySensor = null;
 }
}

var JS_Gyroscope = null;

function _JS_Gyroscope_IsRunning() {
 return JS_Gyroscope && JS_Gyroscope.activated || JS_Gyroscope_callback != 0;
}

function JS_Gyroscope_eventHandler() {
 if (JS_Gyroscope_callback != 0) dynCall_vfff(JS_Gyroscope_callback, JS_Gyroscope.x, JS_Gyroscope.y, JS_Gyroscope.z);
}

var JS_Gyroscope_frequencyRequest = 0;

function _JS_Gyroscope_Start(callback, frequency) {
 assert(callback != 0, "Invalid callback passed to JS_Gyroscope_Start");
 if (typeof Gyroscope === "undefined") {
  JS_DeviceMotion_add();
  JS_Gyroscope_callback = callback;
  return;
 }
 JS_Gyroscope_callback = callback;
 function InitializeGyroscope(frequency) {
  JS_Gyroscope = new Gyroscope({
   frequency: frequency,
   referenceFrame: "device"
  });
  JS_Gyroscope.addEventListener("reading", JS_Gyroscope_eventHandler);
  JS_Gyroscope.addEventListener("error", function(e) {
   warnOnce(e.error ? e.error : e);
  });
  JS_Gyroscope.start();
 }
 if (JS_Gyroscope) {
  JS_Gyroscope.stop();
  JS_Gyroscope.removeEventListener("reading", JS_Gyroscope_eventHandler);
  InitializeGyroscope(frequency);
 } else if (JS_Gyroscope_frequencyRequest != 0) {
  JS_Gyroscope_frequencyRequest = frequency;
 } else {
  JS_Gyroscope_frequencyRequest = frequency;
  navigator.permissions.query({
   name: "gyroscope"
  }).then(function(result) {
   if (result.state === "granted") {
    InitializeGyroscope(JS_Gyroscope_frequencyRequest);
   } else {
    warnOnce("No permission to use Gyroscope.");
   }
   JS_Gyroscope_frequencyRequest = 0;
  });
 }
}

function _JS_Gyroscope_Stop() {
 if (JS_Gyroscope) {
  JS_Gyroscope.stop();
  JS_Gyroscope.removeEventListener("reading", JS_Gyroscope_eventHandler);
  JS_Gyroscope = null;
  JS_Gyroscope_callback = 0;
 } else if (JS_Gyroscope_callback != 0) {
  JS_Gyroscope_callback = 0;
  JS_DeviceMotion_remove();
 }
}

function _JS_LinearAccelerationSensor_IsRunning() {
 return JS_LinearAccelerationSensor && JS_LinearAccelerationSensor.activated || JS_LinearAccelerationSensor_callback != 0;
}

function _JS_Log_Dump(ptr, type) {
 var str = UTF8ToString(ptr);
 if (typeof dump == "function") dump(str);
 switch (type) {
 case 0:
 case 1:
 case 4:
  console.error(str);
  return;

 case 2:
  console.warn(str);
  return;

 case 3:
 case 5:
  console.log(str);
  return;

 default:
  console.error("Unknown console message type!");
  console.error(str);
 }
}

function _JS_Log_StackTrace(buffer, bufferSize) {
 var trace = stackTrace();
 if (buffer) stringToUTF8(trace, buffer, bufferSize);
 return lengthBytesUTF8(trace);
}

var JS_OrientationSensor = null;

var JS_OrientationSensor_callback = 0;

function _JS_OrientationSensor_IsRunning() {
 return JS_OrientationSensor && JS_OrientationSensor.activated || JS_OrientationSensor_callback != 0;
}

function JS_OrientationSensor_eventHandler() {
 if (JS_OrientationSensor_callback != 0) dynCall_vffff(JS_OrientationSensor_callback, JS_OrientationSensor.quaternion[0], JS_OrientationSensor.quaternion[1], JS_OrientationSensor.quaternion[2], JS_OrientationSensor.quaternion[3]);
}

var JS_OrientationSensor_frequencyRequest = 0;

function JS_DeviceOrientation_eventHandler(event) {
 if (JS_OrientationSensor_callback) {
  var degToRad = Math.PI / 180;
  var x = event.beta * degToRad;
  var y = event.gamma * degToRad;
  var z = event.alpha * degToRad;
  var cx = Math.cos(x / 2);
  var sx = Math.sin(x / 2);
  var cy = Math.cos(y / 2);
  var sy = Math.sin(y / 2);
  var cz = Math.cos(z / 2);
  var sz = Math.sin(z / 2);
  var qx = sx * cy * cz - cx * sy * sz;
  var qy = cx * sy * cz + sx * cy * sz;
  var qz = cx * cy * sz + sx * sy * cz;
  var qw = cx * cy * cz - sx * sy * sz;
  dynCall_vffff(JS_OrientationSensor_callback, qx, qy, qz, qw);
 }
}

function _JS_OrientationSensor_Start(callback, frequency) {
 assert(callback != 0, "Invalid callback passed to JS_OrientationSensor_Start");
 if (typeof RelativeOrientationSensor === "undefined") {
  if (JS_OrientationSensor_callback == 0) {
   JS_OrientationSensor_callback = callback;
   JS_RequestDeviceSensorPermissions(1);
   window.addEventListener("deviceorientation", JS_DeviceOrientation_eventHandler);
  }
  return;
 }
 JS_OrientationSensor_callback = callback;
 function InitializeOrientationSensor(frequency) {
  JS_OrientationSensor = new RelativeOrientationSensor({
   frequency: frequency,
   referenceFrame: "device"
  });
  JS_OrientationSensor.addEventListener("reading", JS_OrientationSensor_eventHandler);
  JS_OrientationSensor.addEventListener("error", function(e) {
   warnOnce(e.error ? e.error : e);
  });
  JS_OrientationSensor.start();
 }
 if (JS_OrientationSensor) {
  JS_OrientationSensor.stop();
  JS_OrientationSensor.removeEventListener("reading", JS_OrientationSensor_eventHandler);
  InitializeOrientationSensor(frequency);
 } else if (JS_OrientationSensor_frequencyRequest != 0) {
  JS_OrientationSensor_frequencyRequest = frequency;
 } else {
  JS_OrientationSensor_frequencyRequest = frequency;
  Promise.all([ navigator.permissions.query({
   name: "accelerometer"
  }), navigator.permissions.query({
   name: "gyroscope"
  }) ]).then(function(results) {
   if (results.every(function(result) {
    return result.state === "granted";
   })) {
    InitializeOrientationSensor(JS_OrientationSensor_frequencyRequest);
   } else {
    warnOnce("No permissions to use RelativeOrientationSensor.");
   }
   JS_OrientationSensor_frequencyRequest = 0;
  });
 }
}

function _JS_OrientationSensor_Stop() {
 if (JS_OrientationSensor) {
  JS_OrientationSensor.stop();
  JS_OrientationSensor.removeEventListener("reading", JS_OrientationSensor_eventHandler);
  JS_OrientationSensor = null;
 } else if (JS_OrientationSensor_callback != 0) {
  window.removeEventListener("deviceorientation", JS_DeviceOrientation_eventHandler);
 }
 JS_OrientationSensor_callback = 0;
}

function _JS_Profiler_InjectJobs() {
 for (var jobname in Module["Jobs"]) {
  var job = Module["Jobs"][jobname];
  if (typeof job["endtime"] != "undefined") Module.ccall("InjectProfilerSample", null, [ "string", "number", "number" ], [ jobname, job.starttime, job.endtime ]);
 }
}

function _JS_RequestDeviceSensorPermissionsOnTouch() {
 if (JS_DeviceSensorPermissions == 0) return;
 JS_RequestDeviceSensorPermissions(JS_DeviceSensorPermissions);
}

function _JS_RunQuitCallbacks() {
 Module.QuitCleanup();
}

var JS_ScreenOrientation_callback = 0;

function JS_ScreenOrientation_eventHandler() {
 if (JS_ScreenOrientation_callback) dynCall_viii(JS_ScreenOrientation_callback, window.innerWidth, window.innerHeight, screen.orientation ? screen.orientation.angle : window.orientation);
}

function _JS_ScreenOrientation_DeInit() {
 JS_ScreenOrientation_callback = 0;
 window.removeEventListener("resize", JS_ScreenOrientation_eventHandler);
 if (screen.orientation) {
  screen.orientation.removeEventListener("change", JS_ScreenOrientation_eventHandler);
 }
}

function _JS_ScreenOrientation_Init(callback) {
 if (!JS_ScreenOrientation_callback) {
  if (screen.orientation) {
   screen.orientation.addEventListener("change", JS_ScreenOrientation_eventHandler);
  }
  window.addEventListener("resize", JS_ScreenOrientation_eventHandler);
  JS_ScreenOrientation_callback = callback;
  setTimeout(JS_ScreenOrientation_eventHandler, 0);
 }
}

var JS_ScreenOrientation_requestedLockType = -1;

var JS_ScreenOrientation_appliedLockType = -1;

var JS_ScreenOrientation_timeoutID = -1;

function _JS_ScreenOrientation_Lock(orientationLockType) {
 if (!screen.orientation) {
  return;
 }
 function applyLock() {
  JS_ScreenOrientation_appliedLockType = JS_ScreenOrientation_requestedLockType;
  var screenOrientations = [ "any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary" ];
  var type = screenOrientations[JS_ScreenOrientation_appliedLockType];
  assert(type, "Invalid orientationLockType passed to JS_ScreenOrientation_Lock");
  screen.orientation.lock(type).then(function() {
   if (JS_ScreenOrientation_requestedLockType != JS_ScreenOrientation_appliedLockType) {
    JS_ScreenOrientation_timeoutID = setTimeout(applyLock, 0);
   } else {
    JS_ScreenOrientation_timeoutID = -1;
   }
  }).catch(function(err) {
   warnOnce(err);
   JS_ScreenOrientation_timeoutID = -1;
  });
 }
 JS_ScreenOrientation_requestedLockType = orientationLockType;
 if (JS_ScreenOrientation_timeoutID == -1 && orientationLockType != JS_ScreenOrientation_appliedLockType) {
  JS_ScreenOrientation_timeoutID = setTimeout(applyLock, 0);
 }
}

var WEBAudio = {
 audioInstanceIdCounter: 0,
 audioInstances: {},
 audioContext: null,
 audioWebEnabled: 0,
 audioCache: [],
 pendingAudioSources: {}
};

function jsAudioMixinSetPitch(source) {
 source.estimatePlaybackPosition = function() {
  var t = (WEBAudio.audioContext.currentTime - source.playbackStartTime) * source.playbackRate.value;
  if (source.loop && t >= source.loopStart) {
   t = (t - source.loopStart) % (source.loopEnd - source.loopStart) + source.loopStart;
  }
  return t;
 };
 source.setPitch = function(newPitch) {
  var curPosition = source.estimatePlaybackPosition();
  if (curPosition >= 0) {
   source.playbackStartTime = WEBAudio.audioContext.currentTime - curPosition / newPitch;
  }
  if (source.playbackRate.value !== newPitch) source.playbackRate.value = newPitch;
 };
}

function jsAudioCreateUncompressedSoundClip(buffer, error) {
 var soundClip = {
  buffer: buffer,
  error: error
 };
 soundClip.release = function() {};
 soundClip.getLength = function() {
  if (!this.buffer) {
   console.log("Trying to get length of sound which is not loaded.");
   return 0;
  }
  var sampleRateRatio = 44100 / this.buffer.sampleRate;
  return this.buffer.length * sampleRateRatio;
 };
 soundClip.getData = function(ptr, length) {
  if (!this.buffer) {
   console.log("Trying to get data of sound which is not loaded.");
   return 0;
  }
  var startOutputBuffer = ptr >> 2;
  var output = HEAPF32.subarray(startOutputBuffer, startOutputBuffer + (length >> 2));
  var numMaxSamples = Math.floor((length >> 2) / this.buffer.numberOfChannels);
  var numReadSamples = Math.min(this.buffer.length, numMaxSamples);
  for (var i = 0; i < this.buffer.numberOfChannels; i++) {
   var channelData = this.buffer.getChannelData(i).subarray(0, numReadSamples);
   output.set(channelData, i * numReadSamples);
  }
  return numReadSamples * this.buffer.numberOfChannels * 4;
 };
 soundClip.getNumberOfChannels = function() {
  if (!this.buffer) {
   console.log("Trying to get metadata of sound which is not loaded.");
   return 0;
  }
  return this.buffer.numberOfChannels;
 };
 soundClip.getFrequency = function() {
  if (!this.buffer) {
   console.log("Trying to get metadata of sound which is not loaded.");
   return 0;
  }
  return this.buffer.sampleRate;
 };
 soundClip.createSourceNode = function() {
  if (!this.buffer) {
   console.log("Trying to play sound which is not loaded.");
  }
  var source = WEBAudio.audioContext.createBufferSource();
  source.buffer = this.buffer;
  jsAudioMixinSetPitch(source);
  return source;
 };
 return soundClip;
}

function jsAudioCreateChannel(callback, userData) {
 var channel = {
  callback: callback,
  userData: userData,
  source: null,
  gain: WEBAudio.audioContext.createGain(),
  panner: WEBAudio.audioContext.createPanner(),
  threeD: false,
  loop: false,
  loopStart: 0,
  loopEnd: 0,
  pitch: 1
 };
 channel.panner.rolloffFactor = 0;
 channel.release = function() {
  this.disconnectSource();
  this.gain.disconnect();
  this.panner.disconnect();
 };
 channel.playSoundClip = function(soundClip, startTime, startOffset) {
  try {
   var self = this;
   this.source = soundClip.createSourceNode();
   this.setupPanning();
   this.source.onended = function() {
    self.disconnectSource();
    if (self.callback) {
     dynCall("vi", self.callback, [ self.userData ]);
    }
   };
   this.source.loop = this.loop;
   this.source.loopStart = this.loopStart;
   this.source.loopEnd = this.loopEnd;
   this.source.start(startTime, startOffset);
   this.source.scheduledStartTime = startTime;
   this.source.playbackStartTime = startTime - startOffset / this.source.playbackRate.value;
   this.source.setPitch(this.pitch);
  } catch (e) {
   console.error("Channel.playSoundClip error. Exception: " + e);
  }
 };
 channel.stop = function(delay) {
  if (!this.source) {
   return;
  }
  if (this.source.isPausedMockNode) {
   delete this.source;
   return;
  }
  try {
   channel.source.stop(WEBAudio.audioContext.currentTime + delay);
  } catch (e) {}
  if (delay == 0) {
   this.disconnectSource();
  }
 };
 channel.isPaused = function() {
  if (!this.source) {
   return true;
  }
  if (this.source.isPausedMockNode) {
   return true;
  }
  if (this.source.mediaElement) {
   return this.source.mediaElement.paused || this.source.pauseRequested;
  }
  return false;
 };
 channel.pause = function() {
  if (!this.source || this.source.isPausedMockNode) {
   return;
  }
  if (this.source.mediaElement) {
   this.source._pauseMediaElement();
   return;
  }
  var pausedSource = {
   isPausedMockNode: true,
   buffer: this.source.buffer,
   loop: this.source.loop,
   loopStart: this.source.loopStart,
   loopEnd: this.source.loopEnd,
   playbackRate: this.source.playbackRate.value,
   scheduledStartTime: this.source.scheduledStartTime,
   playbackPausedAtPosition: this.source.estimatePlaybackPosition(),
   setPitch: function(v) {
    this.playbackRate = v;
   }
  };
  this.stop(0);
  this.disconnectSource();
  this.source = pausedSource;
 };
 channel.resume = function() {
  if (this.source && this.source.mediaElement) {
   this.source.start();
   return;
  }
  if (!this.source || !this.source.isPausedMockNode) {
   return;
  }
  var pausedSource = this.source;
  var soundClip = jsAudioCreateUncompressedSoundClip(pausedSource.buffer, false);
  this.playSoundClip(soundClip, pausedSource.scheduledStartTime, Math.max(0, pausedSource.playbackPausedAtPosition));
  this.source.loop = pausedSource.loop;
  this.source.loopStart = pausedSource.loopStart;
  this.source.loopEnd = pausedSource.loopEnd;
  this.source.setPitch(pausedSource.playbackRate);
 };
 channel.setLoop = function(loop) {
  this.loop = loop;
  if (!this.source || this.source.loop == loop) {
   return;
  }
  this.source.loop = loop;
 };
 channel.setLoopPoints = function(loopStart, loopEnd) {
  this.loopStart = loopStart;
  this.loopEnd = loopEnd;
  if (!this.source) {
   return;
  }
  if (this.source.loopStart !== loopStart) {
   this.source.loopStart = loopStart;
  }
  if (this.source.loopEnd !== loopEnd) {
   this.source.loopEnd = loopEnd;
  }
 };
 channel.set3D = function(threeD) {
  if (this.threeD == threeD) {
   return;
  }
  this.threeD = threeD;
  if (!this.source) {
   return;
  }
  this.setupPanning();
 };
 channel.setPitch = function(pitch) {
  this.pitch = pitch;
  if (!this.source) {
   return;
  }
  this.source.setPitch(pitch);
 };
 channel.setVolume = function(volume) {
  if (this.gain.gain.value == volume) {
   return;
  }
  this.gain.gain.value = volume;
 };
 channel.setPosition = function(x, y, z) {
  var p = this.panner;
  if (p.positionX) {
   if (p.positionX.value !== x) p.positionX.value = x;
   if (p.positionY.value !== y) p.positionY.value = y;
   if (p.positionZ.value !== z) p.positionZ.value = z;
  } else if (p._x !== x || p._y !== y || p._z !== z) {
   p.setPosition(x, y, z);
   p._x = x;
   p._y = y;
   p._z = z;
  }
 };
 channel.disconnectSource = function() {
  if (!this.source || this.source.isPausedMockNode) {
   return;
  }
  if (this.source.mediaElement) {
   this.source._pauseMediaElement();
  }
  this.source.onended = null;
  this.source.disconnect();
  delete this.source;
 };
 channel.setupPanning = function() {
  if (this.source.isPausedMockNode) return;
  this.source.disconnect();
  this.panner.disconnect();
  this.gain.disconnect();
  if (this.threeD) {
   this.source.connect(this.panner);
   this.panner.connect(this.gain);
  } else {
   this.source.connect(this.gain);
  }
  this.gain.connect(WEBAudio.audioContext.destination);
 };
 return channel;
}

function _JS_Sound_Create_Channel(callback, userData) {
 if (WEBAudio.audioWebEnabled == 0) return;
 WEBAudio.audioInstances[++WEBAudio.audioInstanceIdCounter] = jsAudioCreateChannel(callback, userData);
 return WEBAudio.audioInstanceIdCounter;
}

function _JS_Sound_GetData(bufferInstance, ptr, length) {
 if (WEBAudio.audioWebEnabled == 0) return 0;
 var soundClip = WEBAudio.audioInstances[bufferInstance];
 if (!soundClip) return 0;
 return soundClip.getData(ptr, length);
}

function _JS_Sound_GetLength(bufferInstance) {
 if (WEBAudio.audioWebEnabled == 0) return 0;
 var soundClip = WEBAudio.audioInstances[bufferInstance];
 if (!soundClip) return 0;
 return soundClip.getLength();
}

function _JS_Sound_GetLoadState(bufferInstance) {
 if (WEBAudio.audioWebEnabled == 0) return 2;
 var sound = WEBAudio.audioInstances[bufferInstance];
 if (sound.error) return 2;
 if (sound.buffer || sound.url) return 0;
 return 1;
}

function _JS_Sound_GetMetaData(bufferInstance, metaData) {
 if (WEBAudio.audioWebEnabled == 0) {
  HEAPU32[metaData >> 2] = 0;
  HEAPU32[(metaData >> 2) + 1] = 0;
  return false;
 }
 var soundClip = WEBAudio.audioInstances[bufferInstance];
 if (!soundClip) {
  HEAPU32[metaData >> 2] = 0;
  HEAPU32[(metaData >> 2) + 1] = 0;
  return false;
 }
 HEAPU32[metaData >> 2] = soundClip.getNumberOfChannels();
 HEAPU32[(metaData >> 2) + 1] = soundClip.getFrequency();
 return true;
}

function jsAudioPlayPendingBlockedAudio(soundId) {
 var pendingAudio = WEBAudio.pendingAudioSources[soundId];
 pendingAudio.sourceNode._startPlayback(pendingAudio.offset);
 delete WEBAudio.pendingAudioSources[soundId];
}

function jsAudioPlayBlockedAudios() {
 Object.keys(WEBAudio.pendingAudioSources).forEach(function(audioId) {
  jsAudioPlayPendingBlockedAudio(audioId);
 });
}

function _JS_Sound_Init() {
 try {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  WEBAudio.audioContext = new AudioContext();
  var tryToResumeAudioContext = function() {
   if (WEBAudio.audioContext.state === "suspended") WEBAudio.audioContext.resume(); else Module.clearInterval(resumeInterval);
  };
  var resumeInterval = Module.setInterval(tryToResumeAudioContext, 400);
  WEBAudio.audioWebEnabled = 1;
  var _userEventCallback = function() {
   try {
    if (WEBAudio.audioContext.state !== "running") {
     WEBAudio.audioContext.resume();
    }
    jsAudioPlayBlockedAudios();
    var audioCacheSize = 20;
    while (WEBAudio.audioCache.length < audioCacheSize) {
     var audio = new Audio();
     audio.autoplay = false;
     WEBAudio.audioCache.push(audio);
    }
   } catch (e) {}
  };
  window.addEventListener("mousedown", _userEventCallback);
  window.addEventListener("touchstart", _userEventCallback);
  Module.deinitializers.push(function() {
   window.removeEventListener("mousedown", _userEventCallback);
   window.removeEventListener("touchstart", _userEventCallback);
  });
 } catch (e) {
  alert("Web Audio API is not supported in this browser");
 }
}

function jsAudioCreateUncompressedSoundClipFromCompressedAudio(audioData) {
 var soundClip = jsAudioCreateUncompressedSoundClip(null, false);
 WEBAudio.audioContext.decodeAudioData(audioData, function(_buffer) {
  soundClip.buffer = _buffer;
 }, function(_error) {
  soundClip.error = true;
  console.log("Decode error: " + _error);
 });
 return soundClip;
}

function jsAudioAddPendingBlockedAudio(sourceNode, offset) {
 WEBAudio.pendingAudioSources[sourceNode.mediaElement.src] = {
  sourceNode: sourceNode,
  offset: offset
 };
}

function jsAudioCreateCompressedSoundClip(audioData) {
 var blob = new Blob([ audioData ], {
  type: "audio/mp4"
 });
 var soundClip = {
  url: URL.createObjectURL(blob),
  error: false,
  mediaElement: new Audio()
 };
 soundClip.mediaElement.preload = "metadata";
 soundClip.mediaElement.src = soundClip.url;
 soundClip.release = function() {
  if (!this.mediaElement) {
   return;
  }
  this.mediaElement.src = "";
  URL.revokeObjectURL(this.url);
  delete this.mediaElement;
  delete this.url;
 };
 soundClip.getLength = function() {
  return this.mediaElement.duration * 44100;
 };
 soundClip.getData = function(ptr, length) {
  console.warn("getData() is not supported for compressed sound.");
  return 0;
 };
 soundClip.getNumberOfChannels = function() {
  console.warn("getNumberOfChannels() is not supported for compressed sound.");
  return 0;
 };
 soundClip.getFrequency = function() {
  console.warn("getFrequency() is not supported for compressed sound.");
  return 0;
 };
 soundClip.createSourceNode = function() {
  var self = this;
  var mediaElement = WEBAudio.audioCache.length ? WEBAudio.audioCache.pop() : new Audio();
  mediaElement.preload = "metadata";
  mediaElement.src = this.url;
  var source = WEBAudio.audioContext.createMediaElementSource(mediaElement);
  Object.defineProperty(source, "loop", {
   get: function() {
    return source.mediaElement.loop;
   },
   set: function(v) {
    if (source.mediaElement.loop !== v) source.mediaElement.loop = v;
   }
  });
  source.playbackRate = {};
  Object.defineProperty(source.playbackRate, "value", {
   get: function() {
    return source.mediaElement.playbackRate;
   },
   set: function(v) {
    if (source.mediaElement.playbackRate !== v) source.mediaElement.playbackRate = v;
   }
  });
  Object.defineProperty(source, "currentTime", {
   get: function() {
    return source.mediaElement.currentTime;
   },
   set: function(v) {
    if (source.mediaElement.currentTime !== v) source.mediaElement.currentTime = v;
   }
  });
  Object.defineProperty(source, "mute", {
   get: function() {
    return source.mediaElement.mute;
   },
   set: function(v) {
    if (source.mediaElement.mute !== v) source.mediaElement.mute = v;
   }
  });
  source.playPromise = null;
  source.playTimeout = null;
  source.pauseRequested = false;
  source._pauseMediaElement = function() {
   if (source.playPromise || source.playTimeout) {
    source.pauseRequested = true;
   } else {
    source.mediaElement.pause();
   }
  };
  source._startPlayback = function(offset) {
   if (source.playPromise || source.playTimeout) {
    source.mediaElement.currentTime = offset;
    source.pauseRequested = false;
    return;
   }
   source.mediaElement.currentTime = offset;
   source.playPromise = source.mediaElement.play();
   if (source.playPromise) {
    source.playPromise.then(function() {
     if (source.pauseRequested) {
      source.mediaElement.pause();
      source.pauseRequested = false;
     }
     source.playPromise = null;
    }).catch(function(error) {
     source.playPromise = null;
     if (error.name !== "NotAllowedError") throw error;
     jsAudioAddPendingBlockedAudio(source, offset);
    });
   }
  };
  source.start = function(startTime, offset) {
   if (typeof startTime === "undefined") {
    startTime = WEBAudio.audioContext.currentTime;
   }
   if (typeof offset === "undefined") {
    offset = 0;
   }
   var startDelayThresholdMS = 4;
   var startDelayMS = (startTime - WEBAudio.audioContext.currentTime) * 1e3;
   if (startDelayMS > startDelayThresholdMS) {
    source.playTimeout = setTimeout(function() {
     source.playTimeout = null;
     source._startPlayback(offset);
    }, startDelayMS);
   } else {
    source._startPlayback(offset);
   }
  };
  source.stop = function(stopTime) {
   if (typeof stopTime === "undefined") {
    stopTime = WEBAudio.audioContext.currentTime;
   }
   var stopDelayThresholdMS = 4;
   var stopDelayMS = (stopTime - WEBAudio.audioContext.currentTime) * 1e3;
   if (stopDelayMS > stopDelayThresholdMS) {
    setTimeout(function() {
     source._pauseMediaElement();
    }, stopDelayMS);
   } else {
    source._pauseMediaElement();
   }
  };
  jsAudioMixinSetPitch(source);
  return source;
 };
 return soundClip;
}

function _JS_Sound_Load(ptr, length, decompress) {
 if (WEBAudio.audioWebEnabled == 0) return 0;
 var audioData = HEAPU8.buffer.slice(ptr, ptr + length);
 if (length < 131072) decompress = 1;
 var sound;
 if (decompress) {
  sound = jsAudioCreateUncompressedSoundClipFromCompressedAudio(audioData);
 } else {
  sound = jsAudioCreateCompressedSoundClip(audioData);
 }
 WEBAudio.audioInstances[++WEBAudio.audioInstanceIdCounter] = sound;
 return WEBAudio.audioInstanceIdCounter;
}

function jsAudioCreateUncompressedSoundClipFromPCM(channels, length, sampleRate, ptr) {
 var buffer = WEBAudio.audioContext.createBuffer(channels, length, sampleRate);
 for (var i = 0; i < channels; i++) {
  var offs = (ptr >> 2) + length * i;
  var copyToChannel = buffer["copyToChannel"] || function(source, channelNumber, startInChannel) {
   var clipped = source.subarray(0, Math.min(source.length, this.length - (startInChannel | 0)));
   this.getChannelData(channelNumber | 0).set(clipped, startInChannel | 0);
  };
  copyToChannel.apply(buffer, [ HEAPF32.subarray(offs, offs + length), i, 0 ]);
 }
 return jsAudioCreateUncompressedSoundClip(buffer, false);
}

function _JS_Sound_Load_PCM(channels, length, sampleRate, ptr) {
 if (WEBAudio.audioWebEnabled == 0) return 0;
 var sound = jsAudioCreateUncompressedSoundClipFromPCM(channels, length, sampleRate, ptr);
 WEBAudio.audioInstances[++WEBAudio.audioInstanceIdCounter] = sound;
 return WEBAudio.audioInstanceIdCounter;
}

function _JS_Sound_Play(bufferInstance, channelInstance, offset, delay) {
 if (WEBAudio.audioWebEnabled == 0) return;
 _JS_Sound_Stop(channelInstance, 0);
 var soundClip = WEBAudio.audioInstances[bufferInstance];
 var channel = WEBAudio.audioInstances[channelInstance];
 if (!soundClip) {
  console.log("Trying to play sound which is not loaded.");
  return;
 }
 try {
  channel.playSoundClip(soundClip, WEBAudio.audioContext.currentTime + delay, offset);
 } catch (error) {
  console.error("playSoundClip error. Exception: " + e);
 }
}

function _JS_Sound_ReleaseInstance(instance) {
 var object = WEBAudio.audioInstances[instance];
 if (object) {
  object.release();
 }
 delete WEBAudio.audioInstances[instance];
}

function _JS_Sound_ResumeIfNeeded() {
 if (WEBAudio.audioWebEnabled == 0) return;
 if (WEBAudio.audioContext.state === "suspended") WEBAudio.audioContext.resume();
}

function _JS_Sound_Set3D(channelInstance, threeD) {
 var channel = WEBAudio.audioInstances[channelInstance];
 channel.set3D(threeD);
}

function _JS_Sound_SetListenerOrientation(x, y, z, xUp, yUp, zUp) {
 if (WEBAudio.audioWebEnabled == 0) return;
 x = -x;
 y = -y;
 z = -z;
 var l = WEBAudio.audioContext.listener;
 if (l.forwardX) {
  if (l.forwardX.value !== x) l.forwardX.value = x;
  if (l.forwardY.value !== y) l.forwardY.value = y;
  if (l.forwardZ.value !== z) l.forwardZ.value = z;
  if (l.upX.value !== xUp) l.upX.value = xUp;
  if (l.upY.value !== yUp) l.upY.value = yUp;
  if (l.upZ.value !== zUp) l.upZ.value = zUp;
 } else if (l._forwardX !== x || l._forwardY !== y || l._forwardZ !== z || l._upX !== xUp || l._upY !== yUp || l._upZ !== zUp) {
  l.setOrientation(x, y, z, xUp, yUp, zUp);
  l._forwardX = x;
  l._forwardY = y;
  l._forwardZ = z;
  l._upX = xUp;
  l._upY = yUp;
  l._upZ = zUp;
 }
}

function _JS_Sound_SetListenerPosition(x, y, z) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var l = WEBAudio.audioContext.listener;
 if (l.positionX) {
  if (l.positionX.value !== x) l.positionX.value = x;
  if (l.positionY.value !== y) l.positionY.value = y;
  if (l.positionZ.value !== z) l.positionZ.value = z;
 } else if (l._positionX !== x || l._positionY !== y || l._positionZ !== z) {
  l.setPosition(x, y, z);
  l._positionX = x;
  l._positionY = y;
  l._positionZ = z;
 }
}

function _JS_Sound_SetLoop(channelInstance, loop) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var channel = WEBAudio.audioInstances[channelInstance];
 channel.setLoop(loop);
}

function _JS_Sound_SetLoopPoints(channelInstance, loopStart, loopEnd) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var channel = WEBAudio.audioInstances[channelInstance];
 channel.setLoopPoints(loopStart, loopEnd);
}

function _JS_Sound_SetPaused(channelInstance, paused) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var channel = WEBAudio.audioInstances[channelInstance];
 if (paused != channel.isPaused()) {
  if (paused) channel.pause(); else channel.resume();
 }
}

function _JS_Sound_SetPitch(channelInstance, v) {
 if (WEBAudio.audioWebEnabled == 0) return;
 try {
  var channel = WEBAudio.audioInstances[channelInstance];
  channel.setPitch(v);
 } catch (e) {
  console.error("JS_Sound_SetPitch(channel=" + channelInstance + ", pitch=" + v + ") threw an exception: " + e);
 }
}

function _JS_Sound_SetPosition(channelInstance, x, y, z) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var channel = WEBAudio.audioInstances[channelInstance];
 channel.setPosition(x, y, z);
}

function _JS_Sound_SetVolume(channelInstance, v) {
 if (WEBAudio.audioWebEnabled == 0) return;
 try {
  var channel = WEBAudio.audioInstances[channelInstance];
  channel.setVolume(v);
 } catch (e) {
  console.error("JS_Sound_SetVolume(channel=" + channelInstance + ", volume=" + v + ") threw an exception: " + e);
 }
}

function _JS_Sound_Stop(channelInstance, delay) {
 if (WEBAudio.audioWebEnabled == 0) return;
 var channel = WEBAudio.audioInstances[channelInstance];
 channel.stop(delay);
}

function _JS_SystemInfo_GetBrowserName(buffer, bufferSize) {
 var browser = Module.SystemInfo.browser;
 if (buffer) stringToUTF8(browser, buffer, bufferSize);
 return lengthBytesUTF8(browser);
}

function _JS_SystemInfo_GetBrowserVersionString(buffer, bufferSize) {
 var browserVer = Module.SystemInfo.browserVersion;
 if (buffer) stringToUTF8(browserVer, buffer, bufferSize);
 return lengthBytesUTF8(browserVer);
}

function _JS_SystemInfo_GetCanvasClientSize(domElementSelector, outWidth, outHeight) {
 var selector = UTF8ToString(domElementSelector);
 var canvas = selector == "#canvas" ? Module["canvas"] : document.querySelector(selector);
 var w = 0, h = 0;
 if (canvas) {
  var size = canvas.getBoundingClientRect();
  w = size.width;
  h = size.height;
 }
 HEAPF64[outWidth >> 3] = w;
 HEAPF64[outHeight >> 3] = h;
}

function _JS_SystemInfo_GetDocumentURL(buffer, bufferSize) {
 if (buffer) stringToUTF8(document.URL, buffer, bufferSize);
 return lengthBytesUTF8(document.URL);
}

function _JS_SystemInfo_GetGPUInfo(buffer, bufferSize) {
 var gpuinfo = Module.SystemInfo.gpu;
 if (buffer) stringToUTF8(gpuinfo, buffer, bufferSize);
 return lengthBytesUTF8(gpuinfo);
}

function _JS_SystemInfo_GetLanguage(buffer, bufferSize) {
 var language = Module.SystemInfo.language;
 if (buffer) stringToUTF8(language, buffer, bufferSize);
 return lengthBytesUTF8(language);
}

function _JS_SystemInfo_GetMatchWebGLToCanvasSize() {
 return Module.matchWebGLToCanvasSize || Module.matchWebGLToCanvasSize === undefined;
}

function _JS_SystemInfo_GetMemory() {
 return HEAPU8.length / (1024 * 1024);
}

function _JS_SystemInfo_GetOS(buffer, bufferSize) {
 var browser = Module.SystemInfo.os + " " + Module.SystemInfo.osVersion;
 if (buffer) stringToUTF8(browser, buffer, bufferSize);
 return lengthBytesUTF8(browser);
}

function _JS_SystemInfo_GetPreferredDevicePixelRatio() {
 return Module.matchWebGLToCanvasSize == false ? 1 : Module.devicePixelRatio || window.devicePixelRatio || 1;
}

function _JS_SystemInfo_GetScreenSize(outWidth, outHeight) {
 HEAPF64[outWidth >> 3] = Module.SystemInfo.width;
 HEAPF64[outHeight >> 3] = Module.SystemInfo.height;
}

function _JS_SystemInfo_GetStreamingAssetsURL(buffer, bufferSize) {
 if (buffer) stringToUTF8(Module.streamingAssetsUrl, buffer, bufferSize);
 return lengthBytesUTF8(Module.streamingAssetsUrl);
}

function _JS_SystemInfo_HasAstcHdr() {
 var ext = GLctx.getExtension("WEBGL_compressed_texture_astc");
 if (ext && ext.getSupportedProfiles) {
  return ext.getSupportedProfiles().includes("hdr");
 }
 return false;
}

function _JS_SystemInfo_HasCursorLock() {
 return Module.SystemInfo.hasCursorLock;
}

function _JS_SystemInfo_HasFullscreen() {
 return Module.SystemInfo.hasFullscreen;
}

function _JS_SystemInfo_HasWebGL() {
 return Module.SystemInfo.hasWebGL;
}

function _JS_UnityEngineShouldQuit() {
 return !!Module.shouldQuit;
}

var videoInstances = {};

var jsSupportedVideoFormats = [];

var jsUnsupportedVideoFormats = [];

function _JS_Video_CanPlayFormat(format) {
 format = UTF8ToString(format);
 if (jsSupportedVideoFormats.indexOf(format) != -1) return true;
 if (jsUnsupportedVideoFormats.indexOf(format) != -1) return false;
 var video = document.createElement("video");
 var canPlay = video.canPlayType(format);
 if (canPlay) jsSupportedVideoFormats.push(format); else jsUnsupportedVideoFormats.push(format);
 return !!canPlay;
}

var videoInstanceIdCounter = 0;

function jsVideoEnded() {
 if (this.onendedCallback) {
  dynCall_vi(this.onendedCallback, this.onendedRef);
 }
}

var hasSRGBATextures = null;

function _JS_Video_Create(url) {
 var str = UTF8ToString(url);
 var video = document.createElement("video");
 video.style.display = "none";
 video.src = str;
 video.muted = true;
 video.setAttribute("muted", "");
 video.setAttribute("playsinline", "");
 video.crossOrigin = "anonymous";
 videoInstances[++videoInstanceIdCounter] = video;
 if (hasSRGBATextures == null) hasSRGBATextures = Module.SystemInfo.browser == "Chrome" || Module.SystemInfo.browser == "Edge";
 return videoInstanceIdCounter;
}

var jsVideoPendingBlockedVideos = {};

function jsVideoPlayPendingBlockedVideo(video) {
 jsVideoPendingBlockedVideos[video].play().then(function() {
  jsVideoRemovePendingBlockedVideo(video);
 });
}

function jsVideoAttemptToPlayBlockedVideos() {
 for (var i in jsVideoPendingBlockedVideos) {
  if (jsVideoPendingBlockedVideos.hasOwnProperty(i)) jsVideoPlayPendingBlockedVideo(i);
 }
}

function jsVideoRemovePendingBlockedVideo(video) {
 delete jsVideoPendingBlockedVideos[video];
 if (Object.keys(jsVideoPendingBlockedVideos).length == 0) {
  window.removeEventListener("mousedown", jsVideoAttemptToPlayBlockedVideos);
 }
}

function _JS_Video_Destroy(video) {
 var v = videoInstances[video];
 if (v.loopEndPollInterval) {
  clearInterval(v.loopEndPollInterval);
 }
 jsVideoRemovePendingBlockedVideo(video);
 v.src = "";
 delete v.onendedCallback;
 v.onended = v.onerror = v.oncanplay = v.onseeked = null;
 delete videoInstances[video];
}

function _JS_Video_Duration(video) {
 return videoInstances[video].duration;
}

function _JS_Video_EnableAudioTrack(video, trackIndex, enabled) {
 var v = videoInstances[video];
 if (!v.enabledTracks) v.enabledTracks = [];
 while (v.enabledTracks.length <= trackIndex) v.enabledTracks.push(true);
 v.enabledTracks[trackIndex] = enabled;
 var tracks = v.audioTracks;
 if (!tracks) return;
 var track = tracks[trackIndex];
 if (track) track.enabled = enabled ? true : false;
}

function _JS_Video_GetAudioLanguageCode(video, trackIndex) {
 var tracks = videoInstances[video].audioTracks;
 if (!tracks) return "";
 var track = tracks[trackIndex];
 return track ? track.language : "";
}

function _JS_Video_GetNumAudioTracks(video) {
 var tracks = videoInstances[video].audioTracks;
 return tracks ? tracks.length : 1;
}

function _JS_Video_Height(video) {
 return videoInstances[video].videoHeight;
}

function _JS_Video_IsPlaying(video) {
 var v = videoInstances[video];
 return !v.paused && !v.ended;
}

function _JS_Video_IsReady(video) {
 var v = videoInstances[video];
 var targetReadyState = /(iPhone|iPad)/i.test(navigator.userAgent) ? v.HAVE_METADATA : v.HAVE_ENOUGH_DATA;
 if (!v.isReady && v.readyState >= targetReadyState) v.isReady = true;
 return v.isReady;
}

function _JS_Video_Pause(video) {
 var v = videoInstances[video];
 v.pause();
 jsVideoRemovePendingBlockedVideo(video);
 if (v.loopEndPollInterval) {
  clearInterval(v.loopEndPollInterval);
 }
}

function _JS_Video_SetLoop(video, loop) {
 var v = videoInstances[video];
 if (v.loopEndPollInterval) {
  clearInterval(v.loopEndPollInterval);
 }
 v.loop = loop;
 if (loop) {
  v.loopEndPollInterval = setInterval(function() {
   if (v.currentTime < v.lastSeenPlaybackTime) {
    jsVideoEnded.apply(v);
   }
   v.lastSeenPlaybackTime = v.currentTime;
  }, 1e3 / 30);
  v.lastSeenPlaybackTime = v.currentTime;
  v.onended = null;
 } else {
  v.onended = jsVideoEnded;
 }
}

function jsVideoAllAudioTracksAreDisabled(v) {
 if (!v.enabledTracks) return false;
 for (var i = 0; i < v.enabledTracks.length; ++i) {
  if (v.enabledTracks[i]) return false;
 }
 return true;
}

function jsVideoAddPendingBlockedVideo(video, v) {
 if (Object.keys(jsVideoPendingBlockedVideos).length == 0) window.addEventListener("mousedown", jsVideoAttemptToPlayBlockedVideos);
 jsVideoPendingBlockedVideos[video] = v;
}

function _JS_Video_Play(video, muted) {
 var v = videoInstances[video];
 v.muted = muted || jsVideoAllAudioTracksAreDisabled(v);
 var promise = v.play();
 if (promise) promise.catch(function(e) {
  if (e.name == "NotAllowedError") jsVideoAddPendingBlockedVideo(video, v);
 });
 _JS_Video_SetLoop(video, v.loop);
}

function _JS_Video_Seek(video, time) {
 var v = videoInstances[video];
 v.lastSeenPlaybackTime = v.currentTime = time;
}

function _JS_Video_SetEndedHandler(video, ref, onended) {
 var v = videoInstances[video];
 v.onendedCallback = onended;
 v.onendedRef = ref;
}

function _JS_Video_SetErrorHandler(video, ref, onerror) {
 videoInstances[video].onerror = function(evt) {
  dynCall_vii(onerror, ref, evt.target.error.code);
 };
}

function _JS_Video_SetMute(video, muted) {
 var v = videoInstances[video];
 v.muted = muted || jsVideoAllAudioTracksAreDisabled(v);
}

function _JS_Video_SetPlaybackRate(video, rate) {
 videoInstances[video].playbackRate = rate;
}

function _JS_Video_SetReadyHandler(video, ref, onready) {
 videoInstances[video].oncanplay = function() {
  dynCall_vi(onready, ref);
 };
}

function _JS_Video_SetSeekedOnceHandler(video, ref, onseeked) {
 videoInstances[video].onseeked = function() {
  dynCall_vi(onseeked, ref);
 };
}

function _JS_Video_SetVolume(video, volume) {
 videoInstances[video].volume = volume;
}

function _JS_Video_Time(video) {
 return videoInstances[video].currentTime;
}

function _JS_Video_UpdateToTexture(video, tex, adjustToLinearspace) {
 var v = videoInstances[video];
 if (!(v.videoWidth > 0 && v.videoHeight > 0)) return false;
 if (v.lastUpdateTextureTime === v.currentTime) return false;
 v.lastUpdateTextureTime = v.currentTime;
 GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, true);
 var internalFormat = adjustToLinearspace ? hasSRGBATextures ? GLctx.SRGB8_ALPHA8 : GLctx.SRGB8 : GLctx.RGBA;
 var format = adjustToLinearspace ? hasSRGBATextures ? GLctx.RGBA : GLctx.RGB : GLctx.RGBA;
 if (v.previousUploadedWidth != v.videoWidth || v.previousUploadedHeight != v.videoHeight) {
  GLctx.deleteTexture(GL.textures[tex]);
  var t = GLctx.createTexture();
  t.name = tex;
  GL.textures[tex] = t;
  GLctx.bindTexture(GLctx.TEXTURE_2D, t);
  GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_S, GLctx.CLAMP_TO_EDGE);
  GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_WRAP_T, GLctx.CLAMP_TO_EDGE);
  GLctx.texParameteri(GLctx.TEXTURE_2D, GLctx.TEXTURE_MIN_FILTER, GLctx.LINEAR);
  GLctx.texImage2D(GLctx.TEXTURE_2D, 0, internalFormat, format, GLctx.UNSIGNED_BYTE, v);
  v.previousUploadedWidth = v.videoWidth;
  v.previousUploadedHeight = v.videoHeight;
 } else {
  GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[tex]);
  GLctx.texImage2D(GLctx.TEXTURE_2D, 0, internalFormat, format, GLctx.UNSIGNED_BYTE, v);
 }
 GLctx.pixelStorei(GLctx.UNPACK_FLIP_Y_WEBGL, false);
 return true;
}

function _JS_Video_Width(video) {
 return videoInstances[video].videoWidth;
}

var activeWebCams = {};

function _JS_WebCamVideo_CanPlay(deviceId) {
 var webcam = activeWebCams[deviceId];
 return webcam && webcam.video.videoWidth > 0 && webcam.video.videoHeight > 0;
}

function _JS_WebCamVideo_GetDeviceName(deviceId, buffer, bufferSize) {
 var webcam = videoInputDevices[deviceId];
 var name = webcam ? webcam.name : "(disconnected input #" + (deviceId + 1) + ")";
 if (buffer) stringToUTF8(name, buffer, bufferSize);
 return lengthBytesUTF8(name);
}

function _JS_WebCamVideo_GetNativeHeight(deviceId) {
 return activeWebCams[deviceId] && activeWebCams[deviceId].video.videoHeight;
}

function _JS_WebCamVideo_GetNativeWidth(deviceId) {
 return activeWebCams[deviceId] && activeWebCams[deviceId].video.videoWidth;
}

function _JS_WebCamVideo_GetNumDevices() {
 var numDevices = 0;
 Object.keys(videoInputDevices).forEach(function(i) {
  numDevices = Math.max(numDevices, videoInputDevices[i].id + 1);
 });
 return numDevices;
}

function _JS_WebCamVideo_GrabFrame(deviceId, buffer, destWidth, destHeight) {
 var webcam = activeWebCams[deviceId];
 if (!webcam) return;
 var timeNow = performance.now();
 if (timeNow < webcam.nextFrameAvailableTime) {
  return;
 }
 webcam.nextFrameAvailableTime += webcam.frameLengthInMsecs;
 if (webcam.nextFrameAvailableTime < timeNow) {
  webcam.nextFrameAvailableTime = timeNow + webcam.frameLengthInMsecs;
 }
 var canvas = webcam.canvas;
 if (canvas.width != destWidth || canvas.height != destHeight || !webcam.context2d) {
  canvas.width = destWidth;
  canvas.height = destHeight;
  webcam.context2d = canvas.getContext("2d");
 }
 var context = webcam.context2d;
 context.drawImage(webcam.video, 0, 0, webcam.video.videoWidth, webcam.video.videoHeight, 0, 0, destWidth, destHeight);
 HEAPU8.set(context.getImageData(0, 0, destWidth, destHeight).data, buffer);
 return 1;
}

function _JS_WebCamVideo_IsFrontFacing(deviceId) {
 return videoInputDevices[deviceId].isFrontFacing;
}

function _JS_WebCamVideo_Start(deviceId) {
 if (activeWebCams[deviceId]) {
  ++activeWebCams[deviceId].refCount;
  return;
 }
 if (!videoInputDevices[deviceId]) {
  console.error("Cannot start video input with ID " + deviceId + ". No such ID exists! Existing video inputs are:");
  console.dir(videoInputDevices);
  return;
 }
 navigator.mediaDevices.getUserMedia({
  audio: false,
  video: videoInputDevices[deviceId].deviceId ? {
   deviceId: {
    exact: videoInputDevices[deviceId].deviceId
   }
  } : true
 }).then(function(stream) {
  var video = document.createElement("video");
  video.srcObject = stream;
  if (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) {
   warnOnce("Applying iOS Safari specific workaround to video playback: https://bugs.webkit.org/show_bug.cgi?id=217578");
   video.setAttribute("playsinline", "");
  }
  video.play();
  var canvas = document.createElement("canvas");
  activeWebCams[deviceId] = {
   video: video,
   canvas: document.createElement("canvas"),
   stream: stream,
   frameLengthInMsecs: 1e3 / stream.getVideoTracks()[0].getSettings().frameRate,
   nextFrameAvailableTime: 0,
   refCount: 1
  };
 }).catch(function(e) {
  console.error("Unable to start video input! " + e);
 });
}

function _JS_WebCamVideo_Stop(deviceId) {
 var webcam = activeWebCams[deviceId];
 if (!webcam) return;
 if (--webcam.refCount <= 0) {
  webcam.video.pause();
  webcam.video.srcObject = null;
  webcam.stream.getVideoTracks().forEach(function(track) {
   track.stop();
  });
  delete activeWebCams[deviceId];
 }
}

function _JS_WebCam_IsSupported() {
 return !!navigator.mediaDevices;
}

var wr = {
 requests: {},
 responses: {},
 abortControllers: {},
 timer: {},
 nextRequestId: 1
};

function _JS_WebRequest_Abort(requestId) {
 var abortController = wr.abortControllers[requestId];
 if (!abortController || abortController.signal.aborted) {
  return;
 }
 abortController.abort();
}

function _JS_WebRequest_Create(url, method) {
 var _url = UTF8ToString(url);
 var _method = UTF8ToString(method);
 var abortController = new AbortController();
 var requestOptions = {
  url: _url,
  init: {
   method: _method,
   signal: abortController.signal,
   headers: {}
  }
 };
 wr.abortControllers[wr.nextRequestId] = abortController;
 wr.requests[wr.nextRequestId] = requestOptions;
 return wr.nextRequestId++;
}

function jsWebRequestGetResponseHeaderString(requestId) {
 var response = wr.responses[requestId];
 if (!response) {
  return "";
 }
 if (response.headerString) {
  return response.headerString;
 }
 var headers = "";
 var entries = response.headers.entries();
 for (var result = entries.next(); !result.done; result = entries.next()) {
  headers += result.value[0] + ": " + result.value[1] + "\r\n";
 }
 response.headerString = headers;
 return headers;
}

function _JS_WebRequest_GetResponseMetaData(requestId, headerBuffer, headerSize, responseUrlBuffer, responseUrlSize) {
 var response = wr.responses[requestId];
 if (!response) {
  stringToUTF8("", headerBuffer, headerSize);
  stringToUTF8("", responseUrlBuffer, responseUrlSize);
  return;
 }
 if (headerBuffer) {
  var headers = jsWebRequestGetResponseHeaderString(requestId);
  stringToUTF8(headers, headerBuffer, headerSize);
 }
 if (responseUrlBuffer) {
  stringToUTF8(response.url, responseUrlBuffer, responseUrlSize);
 }
}

function _JS_WebRequest_GetResponseMetaDataLengths(requestId, buffer) {
 var response = wr.responses[requestId];
 if (!response) {
  HEAPU32[buffer >> 2] = 0;
  HEAPU32[(buffer >> 2) + 1] = 0;
  return;
 }
 var headers = jsWebRequestGetResponseHeaderString(requestId);
 HEAPU32[buffer >> 2] = lengthBytesUTF8(headers);
 HEAPU32[(buffer >> 2) + 1] = lengthBytesUTF8(response.url);
}

function _JS_WebRequest_Release(requestId) {
 if (wr.timer[requestId]) {
  clearTimeout(wr.timer[requestId]);
 }
 delete wr.requests[requestId];
 delete wr.responses[requestId];
 delete wr.abortControllers[requestId];
 delete wr.timer[requestId];
}

function _JS_WebRequest_Send(requestId, ptr, length, arg, onresponse, onprogress) {
 var requestOptions = wr.requests[requestId];
 var abortController = wr.abortControllers[requestId];
 function ClearTimeout() {
  if (wr.timer[requestId]) {
   clearTimeout(wr.timer[requestId]);
   delete wr.timer[requestId];
  }
 }
 function HandleSuccess(response, body) {
  ClearTimeout();
  if (!onresponse) {
   return;
  }
  var kWebRequestOK = 0;
  if (body.length != 0) {
   var buffer = _malloc(body.length);
   HEAPU8.set(body, buffer);
   dynCall("viiiiii", onresponse, [ arg, response.status, buffer, body.length, 0, kWebRequestOK ]);
  } else {
   dynCall("viiiiii", onresponse, [ arg, response.status, 0, 0, 0, kWebRequestOK ]);
  }
 }
 function HandleError(err, code) {
  ClearTimeout();
  if (!onresponse) {
   return;
  }
  var len = lengthBytesUTF8(err) + 1;
  var buffer = _malloc(len);
  stringToUTF8(err, buffer, len);
  dynCall("viiiiii", onresponse, [ arg, 500, 0, 0, buffer, code ]);
  _free(buffer);
 }
 function HandleProgress(e) {
  if (!onprogress || !e.lengthComputable) {
   return;
  }
  dynCall("viii", onprogress, [ arg, e.loaded, e.total ]);
 }
 try {
  if (length > 0) {
   var postData = HEAPU8.subarray(ptr, ptr + length);
   requestOptions.init.body = new Blob([ postData ]);
  }
  if (requestOptions.timeout) {
   wr.timer[requestId] = setTimeout(function() {
    requestOptions.isTimedOut = true;
    abortController.abort();
   }, requestOptions.timeout);
  }
  var fetchImpl = Module.fetchWithProgress;
  requestOptions.init.onProgress = HandleProgress;
  if (Module.companyName && Module.productName && Module.cachedFetch) {
   fetchImpl = Module.cachedFetch;
   requestOptions.init.companyName = Module.companyName;
   requestOptions.init.productName = Module.productName;
   requestOptions.control = Module.cacheControl(requestOptions.url);
  }
  fetchImpl(requestOptions.url, requestOptions.init).then(function(response) {
   wr.responses[requestId] = response;
   HandleSuccess(response, response.parsedBody);
  }).catch(function(error) {
   var kWebErrorUnknown = 2;
   var kWebErrorAborted = 17;
   var kWebErrorTimeout = 14;
   if (requestOptions.isTimedOut) {
    HandleError("Connection timed out.", kWebErrorTimeout);
   } else if (abortController.signal.aborted) {
    HandleError("Aborted.", kWebErrorAborted);
   } else {
    HandleError(error.message, kWebErrorUnknown);
   }
  });
 } catch (error) {
  var kWebErrorUnknown = 2;
  HandleError(error.message, kWebErrorUnknown);
 }
}

function _JS_WebRequest_SetRedirectLimit(request, redirectLimit) {
 var requestOptions = wr.requests[request];
 if (!requestOptions) {
  return;
 }
 requestOptions.init.redirect = redirectLimit === 0 ? "error" : "follow";
}

function _JS_WebRequest_SetRequestHeader(requestId, header, value) {
 var requestOptions = wr.requests[requestId];
 if (!requestOptions) {
  return;
 }
 var _header = UTF8ToString(header);
 var _value = UTF8ToString(value);
 requestOptions.init.headers[_header] = _value;
}

function _JS_WebRequest_SetTimeout(requestId, timeout) {
 var requestOptions = wr.requests[requestId];
 if (!requestOptions) {
  return;
 }
 requestOptions.timeout = timeout;
}

function _NewInstance(ptr, toPtr, clazz) {
 var stack = LKBridge.Stack;
 LKBridge.Stack = [];
 var obj;
 if (ptr === 0) {
  obj = window;
 } else {
  obj = LKBridge.Data.get(ptr);
 }
 var clazz = UTF8ToString(clazz);
 var inst = undefined;
 try {
  inst = new (Function.prototype.bind.apply(obj[clazz], stack))();
 } catch (e) {
  console.error("Internal issue when trying to instantiate " + clazz + "\n", "Stack: ", stack, e);
 }
 LKBridge.SetRef(toPtr, inst);
}

function _NewRef() {
 return LKBridge.AddRef(LKBridge.NewRef());
}

function _NewTexture() {
 var tex = GLctx.createTexture();
 if (!tex) {
  console.error("Failed to create a new texture for VideoReceiving");
  return LKBridge.NullPtr;
 }
 var id = GL.getNewId(GL.textures);
 tex.name = id;
 GL.textures[id] = tex;
 return id;
}

function _PushBoolean(bool) {
 LKBridge.Stack.push(bool === 1);
}

function _PushFunction(ptr, fnc, labelPtr) {
 var label = UTF8ToString(labelPtr);
 LKBridge.Stack.push(function() {
  if (!LKBridge.Data.has(ptr)) {
   console.warn("Trying to fire an event on a freed object", ptr, fnc, label);
   return;
  }
  try {
   LKBridge.StackCSharp = Array.from(arguments);
   LKBridge.FunctionInstance = this;
   LKBridge.DynCall("vi", fnc, [ LKBridge.AddRef(ptr) ]);
   LKBridge.FunctionInstance = null;
   LKBridge.StackCSharp = [];
  } catch (e) {
   console.error("An error occured when calling C# callback", fnc, e, label, "StackCSharp:", LKBridge.StackCSharp);
  }
 });
}

function _PushNull() {
 LKBridge.Stack.push(null);
}

function _PushNumber(nb) {
 LKBridge.Stack.push(nb);
}

function _PushObject(ptr) {
 LKBridge.Stack.push(LKBridge.Data.get(ptr));
}

function _PushString(str) {
 LKBridge.Stack.push(UTF8ToString(str));
}

function _PushStruct(json) {
 LKBridge.Stack.push(JSON.parse(UTF8ToString(json)));
}

function _PushUndefined() {
 LKBridge.Stack.push(undefined);
}

function _RemRef(ptr) {
 LKBridge.RemRef(ptr);
 return true;
}

function _RetrieveBridgeObject() {
 return LKBridge.AddRef(LKBridge.GetOrNewRef(LKBridge));
}

function _RetrieveWindowObject() {
 return LKBridge.AddRef(LKBridge.GetOrNewRef(window));
}

function _Send(index, arrayPtr, offset, length) {
 var webSocket = SimpleWeb.GetWebSocket(index);
 if (webSocket) {
  const start = arrayPtr + offset;
  const end = start + length;
  const data = HEAPU8.buffer.slice(start, end);
  webSocket.send(data);
  return true;
 }
 return false;
}

function _SetProperty(ptr) {
 var key = LKBridge.Stack[0];
 var value = LKBridge.Stack[1];
 LKBridge.Stack = [];
 var obj = LKBridge.Data.get(ptr);
 obj[key] = value;
}

function _SetRef(ptr) {
 var value = LKBridge.Stack[0];
 LKBridge.Stack = [];
 LKBridge.SetRef(ptr, value);
}

function _SetupRpm(url, targetGameObjectName) {
 setupRpmFrame(UTF8ToString(url), UTF8ToString(targetGameObjectName));
}

function _ShiftStack() {
 var v = LKBridge.StackCSharp.shift();
 return LKBridge.AddRef(LKBridge.GetOrNewRef(v));
}

function _ShowReadyPlayerMeFrame() {
 showRpm();
}

var ExceptionInfoAttrs = {
 DESTRUCTOR_OFFSET: 0,
 REFCOUNT_OFFSET: 4,
 TYPE_OFFSET: 8,
 CAUGHT_OFFSET: 12,
 RETHROWN_OFFSET: 13,
 SIZE: 16
};

function ___cxa_allocate_exception(size) {
 return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
}

function _atexit(func, arg) {}

function ___cxa_atexit(a0, a1) {
 return _atexit(a0, a1);
}

function ExceptionInfo(excPtr) {
 this.excPtr = excPtr;
 this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
 this.set_type = function(type) {
  HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2] = type;
 };
 this.get_type = function() {
  return HEAP32[this.ptr + ExceptionInfoAttrs.TYPE_OFFSET >> 2];
 };
 this.set_destructor = function(destructor) {
  HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2] = destructor;
 };
 this.get_destructor = function() {
  return HEAP32[this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET >> 2];
 };
 this.set_refcount = function(refcount) {
  HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = refcount;
 };
 this.set_caught = function(caught) {
  caught = caught ? 1 : 0;
  HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] = caught;
 };
 this.get_caught = function() {
  return HEAP8[this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET >> 0] != 0;
 };
 this.set_rethrown = function(rethrown) {
  rethrown = rethrown ? 1 : 0;
  HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] = rethrown;
 };
 this.get_rethrown = function() {
  return HEAP8[this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET >> 0] != 0;
 };
 this.init = function(type, destructor) {
  this.set_type(type);
  this.set_destructor(destructor);
  this.set_refcount(0);
  this.set_caught(false);
  this.set_rethrown(false);
 };
 this.add_ref = function() {
  var value = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
  HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = value + 1;
 };
 this.release_ref = function() {
  var prev = HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2];
  HEAP32[this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET >> 2] = prev - 1;
  assert(prev > 0);
  return prev === 1;
 };
}

function CatchInfo(ptr) {
 this.free = function() {
  _free(this.ptr);
  this.ptr = 0;
 };
 this.set_base_ptr = function(basePtr) {
  HEAP32[this.ptr >> 2] = basePtr;
 };
 this.get_base_ptr = function() {
  return HEAP32[this.ptr >> 2];
 };
 this.set_adjusted_ptr = function(adjustedPtr) {
  var ptrSize = 4;
  HEAP32[this.ptr + ptrSize >> 2] = adjustedPtr;
 };
 this.get_adjusted_ptr = function() {
  var ptrSize = 4;
  return HEAP32[this.ptr + ptrSize >> 2];
 };
 this.get_exception_ptr = function() {
  var isPointer = ___cxa_is_pointer_type(this.get_exception_info().get_type());
  if (isPointer) {
   return HEAP32[this.get_base_ptr() >> 2];
  }
  var adjusted = this.get_adjusted_ptr();
  if (adjusted !== 0) return adjusted;
  return this.get_base_ptr();
 };
 this.get_exception_info = function() {
  return new ExceptionInfo(this.get_base_ptr());
 };
 if (ptr === undefined) {
  this.ptr = _malloc(8);
  this.set_adjusted_ptr(0);
 } else {
  this.ptr = ptr;
 }
}

var exceptionCaught = [];

function exception_addRef(info) {
 info.add_ref();
}

var uncaughtExceptionCount = 0;

function ___cxa_begin_catch(ptr) {
 var catchInfo = new CatchInfo(ptr);
 var info = catchInfo.get_exception_info();
 if (!info.get_caught()) {
  info.set_caught(true);
  uncaughtExceptionCount--;
 }
 info.set_rethrown(false);
 exceptionCaught.push(catchInfo);
 exception_addRef(info);
 return catchInfo.get_exception_ptr();
}

var exceptionLast = 0;

function ___cxa_free_exception(ptr) {
 try {
  return _free(new ExceptionInfo(ptr).ptr);
 } catch (e) {
  err("exception during cxa_free_exception: " + e);
 }
}

function exception_decRef(info) {
 if (info.release_ref() && !info.get_rethrown()) {
  var destructor = info.get_destructor();
  if (destructor) {
   (function(a1) {
    return dynCall_ii.apply(null, [ destructor, a1 ]);
   })(info.excPtr);
  }
  ___cxa_free_exception(info.excPtr);
 }
}

function ___cxa_end_catch() {
 _setThrew(0);
 assert(exceptionCaught.length > 0);
 var catchInfo = exceptionCaught.pop();
 exception_decRef(catchInfo.get_exception_info());
 catchInfo.free();
 exceptionLast = 0;
}

function ___resumeException(catchInfoPtr) {
 var catchInfo = new CatchInfo(catchInfoPtr);
 var ptr = catchInfo.get_base_ptr();
 if (!exceptionLast) {
  exceptionLast = ptr;
 }
 catchInfo.free();
 throw ptr;
}

function ___cxa_find_matching_catch_2() {
 var thrown = exceptionLast;
 if (!thrown) {
  setTempRet0(0);
  return 0 | 0;
 }
 var info = new ExceptionInfo(thrown);
 var thrownType = info.get_type();
 var catchInfo = new CatchInfo();
 catchInfo.set_base_ptr(thrown);
 if (!thrownType) {
  setTempRet0(0);
  return catchInfo.ptr | 0;
 }
 var typeArray = Array.prototype.slice.call(arguments);
 var stackTop = stackSave();
 var exceptionThrowBuf = stackAlloc(4);
 HEAP32[exceptionThrowBuf >> 2] = thrown;
 for (var i = 0; i < typeArray.length; i++) {
  var caughtType = typeArray[i];
  if (caughtType === 0 || caughtType === thrownType) {
   break;
  }
  if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
   var adjusted = HEAP32[exceptionThrowBuf >> 2];
   if (thrown !== adjusted) {
    catchInfo.set_adjusted_ptr(adjusted);
   }
   setTempRet0(caughtType);
   return catchInfo.ptr | 0;
  }
 }
 stackRestore(stackTop);
 setTempRet0(thrownType);
 return catchInfo.ptr | 0;
}

function ___cxa_find_matching_catch_3() {
 var thrown = exceptionLast;
 if (!thrown) {
  setTempRet0(0);
  return 0 | 0;
 }
 var info = new ExceptionInfo(thrown);
 var thrownType = info.get_type();
 var catchInfo = new CatchInfo();
 catchInfo.set_base_ptr(thrown);
 if (!thrownType) {
  setTempRet0(0);
  return catchInfo.ptr | 0;
 }
 var typeArray = Array.prototype.slice.call(arguments);
 var stackTop = stackSave();
 var exceptionThrowBuf = stackAlloc(4);
 HEAP32[exceptionThrowBuf >> 2] = thrown;
 for (var i = 0; i < typeArray.length; i++) {
  var caughtType = typeArray[i];
  if (caughtType === 0 || caughtType === thrownType) {
   break;
  }
  if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
   var adjusted = HEAP32[exceptionThrowBuf >> 2];
   if (thrown !== adjusted) {
    catchInfo.set_adjusted_ptr(adjusted);
   }
   setTempRet0(caughtType);
   return catchInfo.ptr | 0;
  }
 }
 stackRestore(stackTop);
 setTempRet0(thrownType);
 return catchInfo.ptr | 0;
}

function ___cxa_find_matching_catch_4() {
 var thrown = exceptionLast;
 if (!thrown) {
  setTempRet0(0);
  return 0 | 0;
 }
 var info = new ExceptionInfo(thrown);
 var thrownType = info.get_type();
 var catchInfo = new CatchInfo();
 catchInfo.set_base_ptr(thrown);
 if (!thrownType) {
  setTempRet0(0);
  return catchInfo.ptr | 0;
 }
 var typeArray = Array.prototype.slice.call(arguments);
 var stackTop = stackSave();
 var exceptionThrowBuf = stackAlloc(4);
 HEAP32[exceptionThrowBuf >> 2] = thrown;
 for (var i = 0; i < typeArray.length; i++) {
  var caughtType = typeArray[i];
  if (caughtType === 0 || caughtType === thrownType) {
   break;
  }
  if (___cxa_can_catch(caughtType, thrownType, exceptionThrowBuf)) {
   var adjusted = HEAP32[exceptionThrowBuf >> 2];
   if (thrown !== adjusted) {
    catchInfo.set_adjusted_ptr(adjusted);
   }
   setTempRet0(caughtType);
   return catchInfo.ptr | 0;
  }
 }
 stackRestore(stackTop);
 setTempRet0(thrownType);
 return catchInfo.ptr | 0;
}

function ___cxa_rethrow() {
 var catchInfo = exceptionCaught.pop();
 if (!catchInfo) {
  abort("no exception to throw");
 }
 var info = catchInfo.get_exception_info();
 var ptr = catchInfo.get_base_ptr();
 if (!info.get_rethrown()) {
  exceptionCaught.push(catchInfo);
  info.set_rethrown(true);
  info.set_caught(false);
  uncaughtExceptionCount++;
 } else {
  catchInfo.free();
 }
 exceptionLast = ptr;
 throw ptr;
}

function ___cxa_throw(ptr, type, destructor) {
 var info = new ExceptionInfo(ptr);
 info.init(type, destructor);
 exceptionLast = ptr;
 uncaughtExceptionCount++;
 throw ptr;
}

function _gmtime_r(time, tmPtr) {
 var date = new Date(HEAP32[time >> 2] * 1e3);
 HEAP32[tmPtr >> 2] = date.getUTCSeconds();
 HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
 HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
 HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
 HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
 HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
 HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
 HEAP32[tmPtr + 36 >> 2] = 0;
 HEAP32[tmPtr + 32 >> 2] = 0;
 var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
 var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
 HEAP32[tmPtr + 40 >> 2] = _gmtime_r.GMTString;
 return tmPtr;
}

function ___gmtime_r(a0, a1) {
 return _gmtime_r(a0, a1);
}

function _tzset() {
 if (_tzset.called) return;
 _tzset.called = true;
 var currentYear = new Date().getFullYear();
 var winter = new Date(currentYear, 0, 1);
 var summer = new Date(currentYear, 6, 1);
 var winterOffset = winter.getTimezoneOffset();
 var summerOffset = summer.getTimezoneOffset();
 var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
 HEAP32[__get_timezone() >> 2] = stdTimezoneOffset * 60;
 HEAP32[__get_daylight() >> 2] = Number(winterOffset != summerOffset);
 function extractZone(date) {
  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
  return match ? match[1] : "GMT";
 }
 var winterName = extractZone(winter);
 var summerName = extractZone(summer);
 var winterNamePtr = allocateUTF8(winterName);
 var summerNamePtr = allocateUTF8(summerName);
 if (summerOffset < winterOffset) {
  HEAP32[__get_tzname() >> 2] = winterNamePtr;
  HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
 } else {
  HEAP32[__get_tzname() >> 2] = summerNamePtr;
  HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
 }
}

function _localtime_r(time, tmPtr) {
 _tzset();
 var date = new Date(HEAP32[time >> 2] * 1e3);
 HEAP32[tmPtr >> 2] = date.getSeconds();
 HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
 HEAP32[tmPtr + 8 >> 2] = date.getHours();
 HEAP32[tmPtr + 12 >> 2] = date.getDate();
 HEAP32[tmPtr + 16 >> 2] = date.getMonth();
 HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
 HEAP32[tmPtr + 24 >> 2] = date.getDay();
 var start = new Date(date.getFullYear(), 0, 1);
 var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
 var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
 HEAP32[tmPtr + 32 >> 2] = dst;
 var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
 HEAP32[tmPtr + 40 >> 2] = zonePtr;
 return tmPtr;
}

function ___localtime_r(a0, a1) {
 return _localtime_r(a0, a1);
}

var PATH = {
 splitPath: function(filename) {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: function(parts, allowAboveRoot) {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: function(path) {
  var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(function(p) {
   return !!p;
  }), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: function(path) {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: function(path) {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 extname: function(path) {
  return PATH.splitPath(path)[3];
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return PATH.normalize(paths.join("/"));
 },
 join2: function(l, r) {
  return PATH.normalize(l + "/" + r);
 }
};

function getRandomDevice() {
 if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
  var randomBuffer = new Uint8Array(1);
  return function() {
   crypto.getRandomValues(randomBuffer);
   return randomBuffer[0];
  };
 } else if (ENVIRONMENT_IS_NODE) {
  try {
   var crypto_module = require("crypto");
   return function() {
    return crypto_module["randomBytes"](1)[0];
   };
  } catch (e) {}
 }
 return function() {
  abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
 };
}

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = i >= 0 ? arguments[i] : FS.cwd();
   if (typeof path !== "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = path.charAt(0) === "/";
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
   return !!p;
  }), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
 },
 relative: function(from, to) {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var TTY = {
 ttys: [],
 init: function() {},
 shutdown: function() {},
 register: function(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open: function(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  flush: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  read: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char: function(tty) {
   if (!tty.input.length) {
    var result = null;
    if (ENVIRONMENT_IS_NODE) {
     var BUFSIZE = 256;
     var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
     var bytesRead = 0;
     try {
      bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
     } catch (e) {
      if (e.toString().includes("EOF")) bytesRead = 0; else throw e;
     }
     if (bytesRead > 0) {
      result = buf.slice(0, bytesRead).toString("utf-8");
     } else {
      result = null;
     }
    } else if (typeof window != "undefined" && typeof window.prompt == "function") {
     result = window.prompt("Input: ");
     if (result !== null) {
      result += "\n";
     }
    } else if (typeof readline == "function") {
     result = readline();
     if (result !== null) {
      result += "\n";
     }
    }
    if (!result) {
     return null;
    }
    tty.input = intArrayFromString(result, true);
   }
   return tty.input.shift();
  },
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 },
 default_tty1_ops: {
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

function mmapAlloc(size) {
 var alignedSize = alignMemory(size, 65536);
 var ptr = _malloc(alignedSize);
 while (size < alignedSize) HEAP8[ptr + size++] = 0;
 return ptr;
}

var MEMFS = {
 ops_table: null,
 mount: function(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, 0);
 },
 createNode: function(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray: function(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage: function(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage: function(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr: function(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr: function(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup: function(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod: function(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename: function(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink: function(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir: function(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir: function(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink: function(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink: function(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read: function(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   assert(size >= 0);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write: function(stream, buffer, offset, length, position, canOwn) {
   assert(!(buffer instanceof ArrayBuffer));
   if (buffer.buffer === HEAP8.buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     assert(position === 0, "canOwn must imply no weird position inside the file");
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek: function(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate: function(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap: function(stream, address, length, position, prot, flags) {
   if (address !== 0) {
    throw new FS.ErrnoError(28);
   }
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    HEAP8.set(contents, ptr);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync: function(stream, buffer, offset, length, mmapFlags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   if (mmapFlags & 2) {
    return 0;
   }
   var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

var IDBFS = {
 dbs: {},
 indexedDB: function() {
  if (typeof indexedDB !== "undefined") return indexedDB;
  var ret = null;
  if (typeof window === "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  assert(ret, "IDBFS used, but indexedDB not supported");
  return ret;
 },
 DB_VERSION: 21,
 DB_STORE_NAME: "FILE_DATA",
 mount: function(mount) {
  return MEMFS.mount.apply(null, arguments);
 },
 syncfs: function(mount, populate, callback) {
  IDBFS.getLocalSet(mount, function(err, local) {
   if (err) return callback(err);
   IDBFS.getRemoteSet(mount, function(err, remote) {
    if (err) return callback(err);
    var src = populate ? remote : local;
    var dst = populate ? local : remote;
    IDBFS.reconcile(src, dst, callback);
   });
  });
 },
 getDB: function(name, callback) {
  var db = IDBFS.dbs[name];
  if (db) {
   return callback(null, db);
  }
  var req;
  try {
   req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
  } catch (e) {
   return callback(e);
  }
  if (!req) {
   return callback("Unable to connect to IndexedDB");
  }
  req.onupgradeneeded = function(e) {
   var db = e.target.result;
   var transaction = e.target.transaction;
   var fileStore;
   if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
    fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
   } else {
    fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
   }
   if (!fileStore.indexNames.contains("timestamp")) {
    fileStore.createIndex("timestamp", "timestamp", {
     unique: false
    });
   }
  };
  req.onsuccess = function() {
   db = req.result;
   IDBFS.dbs[name] = db;
   callback(null, db);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 getLocalSet: function(mount, callback) {
  var entries = {};
  function isRealDir(p) {
   return p !== "." && p !== "..";
  }
  function toAbsolute(root) {
   return function(p) {
    return PATH.join2(root, p);
   };
  }
  var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  while (check.length) {
   var path = check.pop();
   var stat;
   try {
    stat = FS.stat(path);
   } catch (e) {
    return callback(e);
   }
   if (FS.isDir(stat.mode)) {
    check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
   }
   entries[path] = {
    "timestamp": stat.mtime
   };
  }
  return callback(null, {
   type: "local",
   entries: entries
  });
 },
 getRemoteSet: function(mount, callback) {
  var entries = {};
  IDBFS.getDB(mount.mountpoint, function(err, db) {
   if (err) return callback(err);
   try {
    var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readonly");
    transaction.onerror = function(e) {
     callback(this.error);
     e.preventDefault();
    };
    var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
    var index = store.index("timestamp");
    index.openKeyCursor().onsuccess = function(event) {
     var cursor = event.target.result;
     if (!cursor) {
      return callback(null, {
       type: "remote",
       db: db,
       entries: entries
      });
     }
     entries[cursor.primaryKey] = {
      "timestamp": cursor.key
     };
     cursor.continue();
    };
   } catch (e) {
    return callback(e);
   }
  });
 },
 loadLocalEntry: function(path, callback) {
  var stat, node;
  try {
   var lookup = FS.lookupPath(path);
   node = lookup.node;
   stat = FS.stat(path);
  } catch (e) {
   return callback(e);
  }
  if (FS.isDir(stat.mode)) {
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode
   });
  } else if (FS.isFile(stat.mode)) {
   node.contents = MEMFS.getFileDataAsTypedArray(node);
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode,
    "contents": node.contents
   });
  } else {
   return callback(new Error("node type not supported"));
  }
 },
 storeLocalEntry: function(path, entry, callback) {
  try {
   if (FS.isDir(entry["mode"])) {
    FS.mkdirTree(path, entry["mode"]);
   } else if (FS.isFile(entry["mode"])) {
    FS.writeFile(path, entry["contents"], {
     canOwn: true
    });
   } else {
    return callback(new Error("node type not supported"));
   }
   FS.chmod(path, entry["mode"]);
   FS.utime(path, entry["timestamp"], entry["timestamp"]);
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 removeLocalEntry: function(path, callback) {
  try {
   var lookup = FS.lookupPath(path);
   var stat = FS.stat(path);
   if (FS.isDir(stat.mode)) {
    FS.rmdir(path);
   } else if (FS.isFile(stat.mode)) {
    FS.unlink(path);
   }
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 loadRemoteEntry: function(store, path, callback) {
  var req = store.get(path);
  req.onsuccess = function(event) {
   callback(null, event.target.result);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 storeRemoteEntry: function(store, path, entry, callback) {
  var req = store.put(entry, path);
  req.onsuccess = function() {
   callback(null);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 removeRemoteEntry: function(store, path, callback) {
  var req = store.delete(path);
  req.onsuccess = function() {
   callback(null);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 reconcile: function(src, dst, callback) {
  var total = 0;
  var create = [];
  Object.keys(src.entries).forEach(function(key) {
   var e = src.entries[key];
   var e2 = dst.entries[key];
   if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
    create.push(key);
    total++;
   }
  });
  var remove = [];
  Object.keys(dst.entries).forEach(function(key) {
   if (!src.entries[key]) {
    remove.push(key);
    total++;
   }
  });
  if (!total) {
   return callback(null);
  }
  var errored = false;
  var db = src.type === "remote" ? src.db : dst.db;
  var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readwrite");
  var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  function done(err) {
   if (err && !errored) {
    errored = true;
    return callback(err);
   }
  }
  transaction.onerror = function(e) {
   done(this.error);
   e.preventDefault();
  };
  transaction.oncomplete = function(e) {
   if (!errored) {
    callback(null);
   }
  };
  create.sort().forEach(function(path) {
   if (dst.type === "local") {
    IDBFS.loadRemoteEntry(store, path, function(err, entry) {
     if (err) return done(err);
     IDBFS.storeLocalEntry(path, entry, done);
    });
   } else {
    IDBFS.loadLocalEntry(path, function(err, entry) {
     if (err) return done(err);
     IDBFS.storeRemoteEntry(store, path, entry, done);
    });
   }
  });
  remove.sort().reverse().forEach(function(path) {
   if (dst.type === "local") {
    IDBFS.removeLocalEntry(path, done);
   } else {
    IDBFS.removeRemoteEntry(store, path, done);
   }
  });
 }
};

var ERRNO_MESSAGES = {
 0: "Success",
 1: "Arg list too long",
 2: "Permission denied",
 3: "Address already in use",
 4: "Address not available",
 5: "Address family not supported by protocol family",
 6: "No more processes",
 7: "Socket already connected",
 8: "Bad file number",
 9: "Trying to read unreadable message",
 10: "Mount device busy",
 11: "Operation canceled",
 12: "No children",
 13: "Connection aborted",
 14: "Connection refused",
 15: "Connection reset by peer",
 16: "File locking deadlock error",
 17: "Destination address required",
 18: "Math arg out of domain of func",
 19: "Quota exceeded",
 20: "File exists",
 21: "Bad address",
 22: "File too large",
 23: "Host is unreachable",
 24: "Identifier removed",
 25: "Illegal byte sequence",
 26: "Connection already in progress",
 27: "Interrupted system call",
 28: "Invalid argument",
 29: "I/O error",
 30: "Socket is already connected",
 31: "Is a directory",
 32: "Too many symbolic links",
 33: "Too many open files",
 34: "Too many links",
 35: "Message too long",
 36: "Multihop attempted",
 37: "File or path name too long",
 38: "Network interface is not configured",
 39: "Connection reset by network",
 40: "Network is unreachable",
 41: "Too many open files in system",
 42: "No buffer space available",
 43: "No such device",
 44: "No such file or directory",
 45: "Exec format error",
 46: "No record locks available",
 47: "The link has been severed",
 48: "Not enough core",
 49: "No message of desired type",
 50: "Protocol not available",
 51: "No space left on device",
 52: "Function not implemented",
 53: "Socket is not connected",
 54: "Not a directory",
 55: "Directory not empty",
 56: "State not recoverable",
 57: "Socket operation on non-socket",
 59: "Not a typewriter",
 60: "No such device or address",
 61: "Value too large for defined data type",
 62: "Previous owner died",
 63: "Not super-user",
 64: "Broken pipe",
 65: "Protocol error",
 66: "Unknown protocol",
 67: "Protocol wrong type for socket",
 68: "Math result not representable",
 69: "Read only file system",
 70: "Illegal seek",
 71: "No such process",
 72: "Stale file handle",
 73: "Connection timed out",
 74: "Text file busy",
 75: "Cross-device link",
 100: "Device not a stream",
 101: "Bad font file fmt",
 102: "Invalid slot",
 103: "Invalid request code",
 104: "No anode",
 105: "Block device required",
 106: "Channel number out of range",
 107: "Level 3 halted",
 108: "Level 3 reset",
 109: "Link number out of range",
 110: "Protocol driver not attached",
 111: "No CSI structure available",
 112: "Level 2 halted",
 113: "Invalid exchange",
 114: "Invalid request descriptor",
 115: "Exchange full",
 116: "No data (for no delay io)",
 117: "Timer expired",
 118: "Out of streams resources",
 119: "Machine is not on the network",
 120: "Package not installed",
 121: "The object is remote",
 122: "Advertise error",
 123: "Srmount error",
 124: "Communication error on send",
 125: "Cross mount point (not really error)",
 126: "Given log. name not unique",
 127: "f.d. invalid for this operation",
 128: "Remote address changed",
 129: "Can   access a needed shared lib",
 130: "Accessing a corrupted shared lib",
 131: ".lib section in a.out corrupted",
 132: "Attempting to link in too many libs",
 133: "Attempting to exec a shared library",
 135: "Streams pipe error",
 136: "Too many users",
 137: "Socket type not supported",
 138: "Not supported",
 139: "Protocol family not supported",
 140: "Can't send after socket shutdown",
 141: "Too many references",
 142: "Host is down",
 148: "No medium (in tape drive)",
 156: "Level 2 not synchronized"
};

var ERRNO_CODES = {
 EPERM: 63,
 ENOENT: 44,
 ESRCH: 71,
 EINTR: 27,
 EIO: 29,
 ENXIO: 60,
 E2BIG: 1,
 ENOEXEC: 45,
 EBADF: 8,
 ECHILD: 12,
 EAGAIN: 6,
 EWOULDBLOCK: 6,
 ENOMEM: 48,
 EACCES: 2,
 EFAULT: 21,
 ENOTBLK: 105,
 EBUSY: 10,
 EEXIST: 20,
 EXDEV: 75,
 ENODEV: 43,
 ENOTDIR: 54,
 EISDIR: 31,
 EINVAL: 28,
 ENFILE: 41,
 EMFILE: 33,
 ENOTTY: 59,
 ETXTBSY: 74,
 EFBIG: 22,
 ENOSPC: 51,
 ESPIPE: 70,
 EROFS: 69,
 EMLINK: 34,
 EPIPE: 64,
 EDOM: 18,
 ERANGE: 68,
 ENOMSG: 49,
 EIDRM: 24,
 ECHRNG: 106,
 EL2NSYNC: 156,
 EL3HLT: 107,
 EL3RST: 108,
 ELNRNG: 109,
 EUNATCH: 110,
 ENOCSI: 111,
 EL2HLT: 112,
 EDEADLK: 16,
 ENOLCK: 46,
 EBADE: 113,
 EBADR: 114,
 EXFULL: 115,
 ENOANO: 104,
 EBADRQC: 103,
 EBADSLT: 102,
 EDEADLOCK: 16,
 EBFONT: 101,
 ENOSTR: 100,
 ENODATA: 116,
 ETIME: 117,
 ENOSR: 118,
 ENONET: 119,
 ENOPKG: 120,
 EREMOTE: 121,
 ENOLINK: 47,
 EADV: 122,
 ESRMNT: 123,
 ECOMM: 124,
 EPROTO: 65,
 EMULTIHOP: 36,
 EDOTDOT: 125,
 EBADMSG: 9,
 ENOTUNIQ: 126,
 EBADFD: 127,
 EREMCHG: 128,
 ELIBACC: 129,
 ELIBBAD: 130,
 ELIBSCN: 131,
 ELIBMAX: 132,
 ELIBEXEC: 133,
 ENOSYS: 52,
 ENOTEMPTY: 55,
 ENAMETOOLONG: 37,
 ELOOP: 32,
 EOPNOTSUPP: 138,
 EPFNOSUPPORT: 139,
 ECONNRESET: 15,
 ENOBUFS: 42,
 EAFNOSUPPORT: 5,
 EPROTOTYPE: 67,
 ENOTSOCK: 57,
 ENOPROTOOPT: 50,
 ESHUTDOWN: 140,
 ECONNREFUSED: 14,
 EADDRINUSE: 3,
 ECONNABORTED: 13,
 ENETUNREACH: 40,
 ENETDOWN: 38,
 ETIMEDOUT: 73,
 EHOSTDOWN: 142,
 EHOSTUNREACH: 23,
 EINPROGRESS: 26,
 EALREADY: 7,
 EDESTADDRREQ: 17,
 EMSGSIZE: 35,
 EPROTONOSUPPORT: 66,
 ESOCKTNOSUPPORT: 137,
 EADDRNOTAVAIL: 4,
 ENETRESET: 39,
 EISCONN: 30,
 ENOTCONN: 53,
 ETOOMANYREFS: 141,
 EUSERS: 136,
 EDQUOT: 19,
 ESTALE: 72,
 ENOTSUP: 138,
 ENOMEDIUM: 148,
 EILSEQ: 25,
 EOVERFLOW: 61,
 ECANCELED: 11,
 ENOTRECOVERABLE: 56,
 EOWNERDEAD: 62,
 ESTRPIPE: 135
};

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 trackingDelegate: {},
 tracking: {
  openFlags: {
   READ: 1,
   WRITE: 2
  }
 },
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath: function(path, opts) {
  path = PATH_FS.resolve(FS.cwd(), path);
  opts = opts || {};
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  for (var key in defaults) {
   if (opts[key] === undefined) {
    opts[key] = defaults[key];
   }
  }
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
   return !!p;
  }), false);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = i === parts.length - 1;
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || islast && opts.follow_mount) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath: function(node) {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
   }
   path = path ? node.name + "/" + path : node.name;
   node = node.parent;
  }
 },
 hashName: function(parentid, name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
  }
  return (parentid + hash >>> 0) % FS.nameTable.length;
 },
 hashAddNode: function(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode: function(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode: function(parent, name) {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode: function(parent, name, mode, rdev) {
  assert(typeof parent === "object");
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode: function(node) {
  FS.hashRemoveNode(node);
 },
 isRoot: function(node) {
  return node === node.parent;
 },
 isMountpoint: function(node) {
  return !!node.mounted;
 },
 isFile: function(mode) {
  return (mode & 61440) === 32768;
 },
 isDir: function(mode) {
  return (mode & 61440) === 16384;
 },
 isLink: function(mode) {
  return (mode & 61440) === 40960;
 },
 isChrdev: function(mode) {
  return (mode & 61440) === 8192;
 },
 isBlkdev: function(mode) {
  return (mode & 61440) === 24576;
 },
 isFIFO: function(mode) {
  return (mode & 61440) === 4096;
 },
 isSocket: function(mode) {
  return (mode & 49152) === 49152;
 },
 flagModes: {
  "r": 0,
  "r+": 2,
  "w": 577,
  "w+": 578,
  "a": 1089,
  "a+": 1090
 },
 modeStringToFlags: function(str) {
  var flags = FS.flagModes[str];
  if (typeof flags === "undefined") {
   throw new Error("Unknown file open mode: " + str);
  }
  return flags;
 },
 flagsToPermissionString: function(flag) {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if (flag & 512) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions: function(node, perms) {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup: function(dir) {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate: function(dir, name) {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete: function(dir, name, isdir) {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen: function(node, flags) {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd: function(fd_start, fd_end) {
  fd_start = fd_start || 0;
  fd_end = fd_end || FS.MAX_OPEN_FDS;
  for (var fd = fd_start; fd <= fd_end; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStream: function(fd) {
  return FS.streams[fd];
 },
 createStream: function(stream, fd_start, fd_end) {
  if (!FS.FSStream) {
   FS.FSStream = function() {};
   FS.FSStream.prototype = {
    object: {
     get: function() {
      return this.node;
     },
     set: function(val) {
      this.node = val;
     }
    },
    isRead: {
     get: function() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     get: function() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     get: function() {
      return this.flags & 1024;
     }
    }
   };
  }
  var newStream = new FS.FSStream();
  for (var p in stream) {
   newStream[p] = stream[p];
  }
  stream = newStream;
  var fd = FS.nextfd(fd_start, fd_end);
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream: function(fd) {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open: function(stream) {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek: function() {
   throw new FS.ErrnoError(70);
  }
 },
 major: function(dev) {
  return dev >> 8;
 },
 minor: function(dev) {
  return dev & 255;
 },
 makedev: function(ma, mi) {
  return ma << 8 | mi;
 },
 registerDevice: function(dev, ops) {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: function(dev) {
  return FS.devices[dev];
 },
 getMounts: function(mount) {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs: function(populate, callback) {
  if (typeof populate === "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   assert(FS.syncFSRequests > 0);
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(function(mount) {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount: function(type, opts, mountpoint) {
  if (typeof type === "string") {
   throw type;
  }
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount: function(mountpoint) {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(function(hash) {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  assert(idx !== -1);
  node.mount.mounts.splice(idx, 1);
 },
 lookup: function(parent, name) {
  return parent.node_ops.lookup(parent, name);
 },
 mknod: function(path, mode, dev) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create: function(path, mode) {
  mode = mode !== undefined ? mode : 438;
  mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir: function(path, mode) {
  mode = mode !== undefined ? mode : 511;
  mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree: function(path, mode) {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev: function(path, mode, dev) {
  if (typeof dev === "undefined") {
   dev = mode;
   mode = 438;
  }
  mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink: function(oldpath, newpath) {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename: function(old_path, new_path) {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  try {
   if (FS.trackingDelegate["willMovePath"]) {
    FS.trackingDelegate["willMovePath"](old_path, new_path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
  try {
   if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
  } catch (e) {
   err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
  }
 },
 rmdir: function(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  try {
   if (FS.trackingDelegate["willDeletePath"]) {
    FS.trackingDelegate["willDeletePath"](path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
  try {
   if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
  } catch (e) {
   err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
  }
 },
 readdir: function(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink: function(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  try {
   if (FS.trackingDelegate["willDeletePath"]) {
    FS.trackingDelegate["willDeletePath"](path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
  try {
   if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
  } catch (e) {
   err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
  }
 },
 readlink: function(path) {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat: function(path, dontFollow) {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat: function(path) {
  return FS.stat(path, true);
 },
 chmod: function(path, mode, dontFollow) {
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: mode & 4095 | node.mode & ~4095,
   timestamp: Date.now()
  });
 },
 lchmod: function(path, mode) {
  FS.chmod(path, mode, true);
 },
 fchmod: function(fd, mode) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chmod(stream.node, mode);
 },
 chown: function(path, uid, gid, dontFollow) {
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown: function(path, uid, gid) {
  FS.chown(path, uid, gid, true);
 },
 fchown: function(fd, uid, gid) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chown(stream.node, uid, gid);
 },
 truncate: function(path, len) {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate: function(fd, len) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime: function(path, atime, mtime) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open: function(path, flags, mode, fd_start, fd_end) {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
  mode = typeof mode === "undefined" ? 438 : mode;
  if (flags & 64) {
   mode = mode & 4095 | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path === "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if (flags & 64) {
   if (node) {
    if (flags & 128) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if (flags & 65536 && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if (flags & 512) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  }, fd_start, fd_end);
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
    err("FS.trackingDelegate error on read file: " + path);
   }
  }
  try {
   if (FS.trackingDelegate["onOpenFile"]) {
    var trackingFlags = 0;
    if ((flags & 2097155) !== 1) {
     trackingFlags |= FS.tracking.openFlags.READ;
    }
    if ((flags & 2097155) !== 0) {
     trackingFlags |= FS.tracking.openFlags.WRITE;
    }
    FS.trackingDelegate["onOpenFile"](path, trackingFlags);
   }
  } catch (e) {
   err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
  }
  return stream;
 },
 close: function(stream) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed: function(stream) {
  return stream.fd === null;
 },
 llseek: function(stream, offset, whence) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read: function(stream, buffer, offset, length, position) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position !== "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write: function(stream, buffer, offset, length, position, canOwn) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position !== "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  try {
   if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
  } catch (e) {
   err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
  }
  return bytesWritten;
 },
 allocate: function(stream, offset, length) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap: function(stream, address, length, position, prot, flags) {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
 },
 msync: function(stream, buffer, offset, length, mmapFlags) {
  if (!stream || !stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: function(stream) {
  return 0;
 },
 ioctl: function(stream, cmd, arg) {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile: function(path, opts) {
  opts = opts || {};
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error('Invalid encoding type "' + opts.encoding + '"');
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile: function(path, data, opts) {
  opts = opts || {};
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data === "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: function() {
  return FS.currentPath;
 },
 chdir: function(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories: function() {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices: function() {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: function() {
    return 0;
   },
   write: function(stream, buffer, offset, length, pos) {
    return length;
   }
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var random_device = getRandomDevice();
  FS.createDevice("/dev", "random", random_device);
  FS.createDevice("/dev", "urandom", random_device);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories: function() {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount: function() {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
    node.node_ops = {
     lookup: function(parent, name) {
      var fd = +name;
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: function() {
         return stream.path;
        }
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams: function() {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
  assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
  assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
  assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
 },
 ensureErrnoError: function() {
  if (FS.ErrnoError) return;
  FS.ErrnoError = function ErrnoError(errno, node) {
   this.node = node;
   this.setErrno = function(errno) {
    this.errno = errno;
    for (var key in ERRNO_CODES) {
     if (ERRNO_CODES[key] === errno) {
      this.code = key;
      break;
     }
    }
   };
   this.setErrno(errno);
   this.message = ERRNO_MESSAGES[errno];
   if (this.stack) {
    Object.defineProperty(this, "stack", {
     value: new Error().stack,
     writable: true
    });
    this.stack = demangleAll(this.stack);
   }
  };
  FS.ErrnoError.prototype = new Error();
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach(function(code) {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
 },
 staticInit: function() {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS,
   "IDBFS": IDBFS
  };
 },
 init: function(input, output, error) {
  assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit: function() {
  FS.init.initialized = false;
  var fflush = Module["_fflush"];
  if (fflush) fflush(0);
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 getMode: function(canRead, canWrite) {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
 },
 findObject: function(path, dontResolveLastLink) {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (ret.exists) {
   return ret.object;
  } else {
   return null;
  }
 },
 analyzePath: function(path, dontResolveLastLink) {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath: function(parent, path, canRead, canWrite) {
  parent = typeof parent === "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile: function(parent, name, properties, canRead, canWrite) {
  var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
  var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
  var mode = FS.getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data === "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
  return node;
 },
 createDevice: function(parent, name, input, output) {
  var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open: function(stream) {
    stream.seekable = false;
   },
   close: function(stream) {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read: function(stream, buffer, offset, length, pos) {
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write: function(stream, buffer, offset, length, pos) {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile: function(obj) {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest !== "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile: function(parent, name, url, canRead, canWrite) {
  function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = idx / this.chunkSize | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest();
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = function(from, to) {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    if (typeof Uint8Array != "undefined") xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(xhr.response || []);
    } else {
     return intArrayFromString(xhr.responseText || "", true);
    }
   };
   var lazyArray = this;
   lazyArray.setDataGetter(function(chunkNum) {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] === "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   });
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest !== "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array();
   Object.defineProperties(lazyArray, {
    length: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(function(key) {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  });
  stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
   FS.forceLoadFile(node);
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   assert(size >= 0);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  };
  node.stream_ops = stream_ops;
  return node;
 },
 createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
  Browser.init();
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency("cp " + fullname);
  function processData(byteArray) {
   function finish(byteArray) {
    if (preFinish) preFinish();
    if (!dontCreateFile) {
     FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
    if (onload) onload();
    removeRunDependency(dep);
   }
   var handled = false;
   Module["preloadPlugins"].forEach(function(plugin) {
    if (handled) return;
    if (plugin["canHandle"](fullname)) {
     plugin["handle"](byteArray, fullname, finish, function() {
      if (onerror) onerror();
      removeRunDependency(dep);
     });
     handled = true;
    }
   });
   if (!handled) finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
   Browser.asyncLoad(url, function(byteArray) {
    processData(byteArray);
   }, onerror);
  } else {
   processData(url);
  }
 },
 indexedDB: function() {
  return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 },
 DB_NAME: function() {
  return "EM_FS_" + window.location.pathname;
 },
 DB_VERSION: 20,
 DB_STORE_NAME: "FILE_DATA",
 saveFilesToDB: function(paths, onload, onerror) {
  onload = onload || function() {};
  onerror = onerror || function() {};
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
   out("creating db");
   var db = openRequest.result;
   db.createObjectStore(FS.DB_STORE_NAME);
  };
  openRequest.onsuccess = function openRequest_onsuccess() {
   var db = openRequest.result;
   var transaction = db.transaction([ FS.DB_STORE_NAME ], "readwrite");
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(function(path) {
    var putRequest = files.put(FS.analyzePath(path).object.contents, path);
    putRequest.onsuccess = function putRequest_onsuccess() {
     ok++;
     if (ok + fail == total) finish();
    };
    putRequest.onerror = function putRequest_onerror() {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 loadFilesFromDB: function(paths, onload, onerror) {
  onload = onload || function() {};
  onerror = onerror || function() {};
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = onerror;
  openRequest.onsuccess = function openRequest_onsuccess() {
   var db = openRequest.result;
   try {
    var transaction = db.transaction([ FS.DB_STORE_NAME ], "readonly");
   } catch (e) {
    onerror(e);
    return;
   }
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(function(path) {
    var getRequest = files.get(path);
    getRequest.onsuccess = function getRequest_onsuccess() {
     if (FS.analyzePath(path).exists) {
      FS.unlink(path);
     }
     FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
     ok++;
     if (ok + fail == total) finish();
    };
    getRequest.onerror = function getRequest_onerror() {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 absolutePath: function() {
  abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
 },
 createFolder: function() {
  abort("FS.createFolder has been removed; use FS.mkdir instead");
 },
 createLink: function() {
  abort("FS.createLink has been removed; use FS.symlink instead");
 },
 joinPath: function() {
  abort("FS.joinPath has been removed; use PATH.join instead");
 },
 mmapAlloc: function() {
  abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
 },
 standardizePath: function() {
  abort("FS.standardizePath has been removed; use PATH.normalize instead");
 }
};

var SYSCALLS = {
 mappings: {},
 DEFAULT_POLLMASK: 5,
 umask: 511,
 calculateAt: function(dirfd, path, allowEmpty) {
  if (path[0] === "/") {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = FS.getStream(dirfd);
   if (!dirstream) throw new FS.ErrnoError(8);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat: function(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  HEAP32[buf >> 2] = stat.dev;
  HEAP32[buf + 4 >> 2] = 0;
  HEAP32[buf + 8 >> 2] = stat.ino;
  HEAP32[buf + 12 >> 2] = stat.mode;
  HEAP32[buf + 16 >> 2] = stat.nlink;
  HEAP32[buf + 20 >> 2] = stat.uid;
  HEAP32[buf + 24 >> 2] = stat.gid;
  HEAP32[buf + 28 >> 2] = stat.rdev;
  HEAP32[buf + 32 >> 2] = 0;
  tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
  HEAP32[buf + 48 >> 2] = 4096;
  HEAP32[buf + 52 >> 2] = stat.blocks;
  HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
  HEAP32[buf + 60 >> 2] = 0;
  HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
  HEAP32[buf + 68 >> 2] = 0;
  HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
  HEAP32[buf + 76 >> 2] = 0;
  tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[buf + 80 >> 2] = tempI64[0], HEAP32[buf + 84 >> 2] = tempI64[1];
  return 0;
 },
 doMsync: function(addr, stream, len, flags, offset) {
  var buffer = HEAPU8.slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 doMkdir: function(path, mode) {
  path = PATH.normalize(path);
  if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
  FS.mkdir(path, mode, 0);
  return 0;
 },
 doMknod: function(path, mode, dev) {
  switch (mode & 61440) {
  case 32768:
  case 8192:
  case 24576:
  case 4096:
  case 49152:
   break;

  default:
   return -28;
  }
  FS.mknod(path, mode, dev);
  return 0;
 },
 doReadlink: function(path, buf, bufsize) {
  if (bufsize <= 0) return -28;
  var ret = FS.readlink(path);
  var len = Math.min(bufsize, lengthBytesUTF8(ret));
  var endChar = HEAP8[buf + len];
  stringToUTF8(ret, buf, bufsize + 1);
  HEAP8[buf + len] = endChar;
  return len;
 },
 doAccess: function(path, amode) {
  if (amode & ~7) {
   return -28;
  }
  var node;
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  node = lookup.node;
  if (!node) {
   return -44;
  }
  var perms = "";
  if (amode & 4) perms += "r";
  if (amode & 2) perms += "w";
  if (amode & 1) perms += "x";
  if (perms && FS.nodePermissions(node, perms)) {
   return -2;
  }
  return 0;
 },
 doDup: function(path, flags, suggestFD) {
  var suggest = FS.getStream(suggestFD);
  if (suggest) FS.close(suggest);
  return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
 },
 doReadv: function(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
   var ptr = HEAP32[iov + i * 8 >> 2];
   var len = HEAP32[iov + (i * 8 + 4) >> 2];
   var curr = FS.read(stream, HEAP8, ptr, len, offset);
   if (curr < 0) return -1;
   ret += curr;
   if (curr < len) break;
  }
  return ret;
 },
 doWritev: function(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
   var ptr = HEAP32[iov + i * 8 >> 2];
   var len = HEAP32[iov + (i * 8 + 4) >> 2];
   var curr = FS.write(stream, HEAP8, ptr, len, offset);
   if (curr < 0) return -1;
   ret += curr;
  }
  return ret;
 },
 varargs: undefined,
 get: function() {
  assert(SYSCALLS.varargs != undefined);
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream) throw new FS.ErrnoError(8);
  return stream;
 },
 get64: function(low, high) {
  if (low >= 0) assert(high === 0); else assert(high === -1);
  return low;
 }
};

function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {
 try {
  assert(nfds <= 64, "nfds must be less than or equal to 64");
  assert(!exceptfds, "exceptfds not supported");
  var total = 0;
  var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0, srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
  var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0, srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
  var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
  var dstReadLow = 0, dstReadHigh = 0;
  var dstWriteLow = 0, dstWriteHigh = 0;
  var dstExceptLow = 0, dstExceptHigh = 0;
  var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
  var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
  var check = function(fd, low, high, val) {
   return fd < 32 ? low & val : high & val;
  };
  for (var fd = 0; fd < nfds; fd++) {
   var mask = 1 << fd % 32;
   if (!check(fd, allLow, allHigh, mask)) {
    continue;
   }
   var stream = FS.getStream(fd);
   if (!stream) throw new FS.ErrnoError(8);
   var flags = SYSCALLS.DEFAULT_POLLMASK;
   if (stream.stream_ops.poll) {
    flags = stream.stream_ops.poll(stream);
   }
   if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
    fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
    total++;
   }
   if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
    fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
    total++;
   }
   if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
    fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
    total++;
   }
  }
  if (readfds) {
   HEAP32[readfds >> 2] = dstReadLow;
   HEAP32[readfds + 4 >> 2] = dstReadHigh;
  }
  if (writefds) {
   HEAP32[writefds >> 2] = dstWriteLow;
   HEAP32[writefds + 4 >> 2] = dstWriteHigh;
  }
  if (exceptfds) {
   HEAP32[exceptfds >> 2] = dstExceptLow;
   HEAP32[exceptfds + 4 >> 2] = dstExceptHigh;
  }
  return total;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var SOCKFS = {
 mount: function(mount) {
  Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
  Module["websocket"]._callbacks = {};
  Module["websocket"]["on"] = function(event, callback) {
   if ("function" === typeof callback) {
    this._callbacks[event] = callback;
   }
   return this;
  };
  Module["websocket"].emit = function(event, param) {
   if ("function" === typeof this._callbacks[event]) {
    this._callbacks[event].call(this, param);
   }
  };
  return FS.createNode(null, "/", 16384 | 511, 0);
 },
 createSocket: function(family, type, protocol) {
  type &= ~526336;
  var streaming = type == 1;
  if (protocol) {
   assert(streaming == (protocol == 6));
  }
  var sock = {
   family: family,
   type: type,
   protocol: protocol,
   server: null,
   error: null,
   peers: {},
   pending: [],
   recv_queue: [],
   sock_ops: SOCKFS.websocket_sock_ops
  };
  var name = SOCKFS.nextname();
  var node = FS.createNode(SOCKFS.root, name, 49152, 0);
  node.sock = sock;
  var stream = FS.createStream({
   path: name,
   node: node,
   flags: 2,
   seekable: false,
   stream_ops: SOCKFS.stream_ops
  });
  sock.stream = stream;
  return sock;
 },
 getSocket: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream || !FS.isSocket(stream.node.mode)) {
   return null;
  }
  return stream.node.sock;
 },
 stream_ops: {
  poll: function(stream) {
   var sock = stream.node.sock;
   return sock.sock_ops.poll(sock);
  },
  ioctl: function(stream, request, varargs) {
   var sock = stream.node.sock;
   return sock.sock_ops.ioctl(sock, request, varargs);
  },
  read: function(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   var msg = sock.sock_ops.recvmsg(sock, length);
   if (!msg) {
    return 0;
   }
   buffer.set(msg.buffer, offset);
   return msg.buffer.length;
  },
  write: function(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   return sock.sock_ops.sendmsg(sock, buffer, offset, length);
  },
  close: function(stream) {
   var sock = stream.node.sock;
   sock.sock_ops.close(sock);
  }
 },
 nextname: function() {
  if (!SOCKFS.nextname.current) {
   SOCKFS.nextname.current = 0;
  }
  return "socket[" + SOCKFS.nextname.current++ + "]";
 },
 websocket_sock_ops: {
  createPeer: function(sock, addr, port) {
   var ws;
   if (typeof addr === "object") {
    ws = addr;
    addr = null;
    port = null;
   }
   if (ws) {
    if (ws._socket) {
     addr = ws._socket.remoteAddress;
     port = ws._socket.remotePort;
    } else {
     var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
     if (!result) {
      throw new Error("WebSocket URL must be in the format ws(s)://address:port");
     }
     addr = result[1];
     port = parseInt(result[2], 10);
    }
   } else {
    try {
     var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
     var url = "ws:#".replace("#", "//");
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["url"]) {
       url = Module["websocket"]["url"];
      }
     }
     if (url === "ws://" || url === "wss://") {
      var parts = addr.split("/");
      url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
     }
     var subProtocols = "binary";
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["subprotocol"]) {
       subProtocols = Module["websocket"]["subprotocol"];
      }
     }
     var opts = undefined;
     if (subProtocols !== "null") {
      subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
      opts = ENVIRONMENT_IS_NODE ? {
       "protocol": subProtocols.toString()
      } : subProtocols;
     }
     if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
      subProtocols = "null";
      opts = undefined;
     }
     var WebSocketConstructor;
     if (ENVIRONMENT_IS_NODE) {
      WebSocketConstructor = require("ws");
     } else {
      WebSocketConstructor = WebSocket;
     }
     ws = new WebSocketConstructor(url, opts);
     ws.binaryType = "arraybuffer";
    } catch (e) {
     throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
    }
   }
   var peer = {
    addr: addr,
    port: port,
    socket: ws,
    dgram_send_queue: []
   };
   SOCKFS.websocket_sock_ops.addPeer(sock, peer);
   SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
   if (sock.type === 2 && typeof sock.sport !== "undefined") {
    peer.dgram_send_queue.push(new Uint8Array([ 255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255 ]));
   }
   return peer;
  },
  getPeer: function(sock, addr, port) {
   return sock.peers[addr + ":" + port];
  },
  addPeer: function(sock, peer) {
   sock.peers[peer.addr + ":" + peer.port] = peer;
  },
  removePeer: function(sock, peer) {
   delete sock.peers[peer.addr + ":" + peer.port];
  },
  handlePeerEvents: function(sock, peer) {
   var first = true;
   var handleOpen = function() {
    Module["websocket"].emit("open", sock.stream.fd);
    try {
     var queued = peer.dgram_send_queue.shift();
     while (queued) {
      peer.socket.send(queued);
      queued = peer.dgram_send_queue.shift();
     }
    } catch (e) {
     peer.socket.close();
    }
   };
   function handleMessage(data) {
    if (typeof data === "string") {
     var encoder = new TextEncoder();
     data = encoder.encode(data);
    } else {
     assert(data.byteLength !== undefined);
     if (data.byteLength == 0) {
      return;
     } else {
      data = new Uint8Array(data);
     }
    }
    var wasfirst = first;
    first = false;
    if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
     var newport = data[8] << 8 | data[9];
     SOCKFS.websocket_sock_ops.removePeer(sock, peer);
     peer.port = newport;
     SOCKFS.websocket_sock_ops.addPeer(sock, peer);
     return;
    }
    sock.recv_queue.push({
     addr: peer.addr,
     port: peer.port,
     data: data
    });
    Module["websocket"].emit("message", sock.stream.fd);
   }
   if (ENVIRONMENT_IS_NODE) {
    peer.socket.on("open", handleOpen);
    peer.socket.on("message", function(data, flags) {
     if (!flags.binary) {
      return;
     }
     handleMessage(new Uint8Array(data).buffer);
    });
    peer.socket.on("close", function() {
     Module["websocket"].emit("close", sock.stream.fd);
    });
    peer.socket.on("error", function(error) {
     sock.error = ERRNO_CODES.ECONNREFUSED;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    });
   } else {
    peer.socket.onopen = handleOpen;
    peer.socket.onclose = function() {
     Module["websocket"].emit("close", sock.stream.fd);
    };
    peer.socket.onmessage = function peer_socket_onmessage(event) {
     handleMessage(event.data);
    };
    peer.socket.onerror = function(error) {
     sock.error = ERRNO_CODES.ECONNREFUSED;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    };
   }
  },
  poll: function(sock) {
   if (sock.type === 1 && sock.server) {
    return sock.pending.length ? 64 | 1 : 0;
   }
   var mask = 0;
   var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
   if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 64 | 1;
   }
   if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
    mask |= 4;
   }
   if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 16;
   }
   return mask;
  },
  ioctl: function(sock, request, arg) {
   switch (request) {
   case 21531:
    var bytes = 0;
    if (sock.recv_queue.length) {
     bytes = sock.recv_queue[0].data.length;
    }
    HEAP32[arg >> 2] = bytes;
    return 0;

   default:
    return ERRNO_CODES.EINVAL;
   }
  },
  close: function(sock) {
   if (sock.server) {
    try {
     sock.server.close();
    } catch (e) {}
    sock.server = null;
   }
   var peers = Object.keys(sock.peers);
   for (var i = 0; i < peers.length; i++) {
    var peer = sock.peers[peers[i]];
    try {
     peer.socket.close();
    } catch (e) {}
    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
   }
   return 0;
  },
  bind: function(sock, addr, port) {
   if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
    throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
   }
   sock.saddr = addr;
   sock.sport = port;
   if (sock.type === 2) {
    if (sock.server) {
     sock.server.close();
     sock.server = null;
    }
    try {
     sock.sock_ops.listen(sock, 0);
    } catch (e) {
     if (!(e instanceof FS.ErrnoError)) throw e;
     if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
    }
   }
  },
  connect: function(sock, addr, port) {
   if (sock.server) {
    throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
   }
   if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
    if (dest) {
     if (dest.socket.readyState === dest.socket.CONNECTING) {
      throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
     } else {
      throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
     }
    }
   }
   var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
   sock.daddr = peer.addr;
   sock.dport = peer.port;
   throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
  },
  listen: function(sock, backlog) {
   if (!ENVIRONMENT_IS_NODE) {
    throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
   }
   if (sock.server) {
    throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
   }
   var WebSocketServer = require("ws").Server;
   var host = sock.saddr;
   sock.server = new WebSocketServer({
    host: host,
    port: sock.sport
   });
   Module["websocket"].emit("listen", sock.stream.fd);
   sock.server.on("connection", function(ws) {
    if (sock.type === 1) {
     var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
     var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
     newsock.daddr = peer.addr;
     newsock.dport = peer.port;
     sock.pending.push(newsock);
     Module["websocket"].emit("connection", newsock.stream.fd);
    } else {
     SOCKFS.websocket_sock_ops.createPeer(sock, ws);
     Module["websocket"].emit("connection", sock.stream.fd);
    }
   });
   sock.server.on("closed", function() {
    Module["websocket"].emit("close", sock.stream.fd);
    sock.server = null;
   });
   sock.server.on("error", function(error) {
    sock.error = ERRNO_CODES.EHOSTUNREACH;
    Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable" ]);
   });
  },
  accept: function(listensock) {
   if (!listensock.server) {
    throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
   }
   var newsock = listensock.pending.shift();
   newsock.stream.flags = listensock.stream.flags;
   return newsock;
  },
  getname: function(sock, peer) {
   var addr, port;
   if (peer) {
    if (sock.daddr === undefined || sock.dport === undefined) {
     throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
    }
    addr = sock.daddr;
    port = sock.dport;
   } else {
    addr = sock.saddr || 0;
    port = sock.sport || 0;
   }
   return {
    addr: addr,
    port: port
   };
  },
  sendmsg: function(sock, buffer, offset, length, addr, port) {
   if (sock.type === 2) {
    if (addr === undefined || port === undefined) {
     addr = sock.daddr;
     port = sock.dport;
    }
    if (addr === undefined || port === undefined) {
     throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
    }
   } else {
    addr = sock.daddr;
    port = sock.dport;
   }
   var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
   if (sock.type === 1) {
    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
     throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
    } else if (dest.socket.readyState === dest.socket.CONNECTING) {
     throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
    }
   }
   if (ArrayBuffer.isView(buffer)) {
    offset += buffer.byteOffset;
    buffer = buffer.buffer;
   }
   var data;
   data = buffer.slice(offset, offset + length);
   if (sock.type === 2) {
    if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
     if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
     }
     dest.dgram_send_queue.push(data);
     return length;
    }
   }
   try {
    dest.socket.send(data);
    return length;
   } catch (e) {
    throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
   }
  },
  recvmsg: function(sock, length) {
   if (sock.type === 1 && sock.server) {
    throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
   }
   var queued = sock.recv_queue.shift();
   if (!queued) {
    if (sock.type === 1) {
     var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
     if (!dest) {
      throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
     } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      return null;
     } else {
      throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
     }
    } else {
     throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
    }
   }
   var queuedLength = queued.data.byteLength || queued.data.length;
   var queuedOffset = queued.data.byteOffset || 0;
   var queuedBuffer = queued.data.buffer || queued.data;
   var bytesRead = Math.min(length, queuedLength);
   var res = {
    buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
    addr: queued.addr,
    port: queued.port
   };
   if (sock.type === 1 && bytesRead < queuedLength) {
    var bytesRemaining = queuedLength - bytesRead;
    queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
    sock.recv_queue.unshift(queued);
   }
   return res;
  }
 }
};

function getSocketFromFD(fd) {
 var socket = SOCKFS.getSocket(fd);
 if (!socket) throw new FS.ErrnoError(8);
 return socket;
}

function setErrNo(value) {
 HEAP32[___errno_location() >> 2] = value;
 return value;
}

function inetPton4(str) {
 var b = str.split(".");
 for (var i = 0; i < 4; i++) {
  var tmp = Number(b[i]);
  if (isNaN(tmp)) return null;
  b[i] = tmp;
 }
 return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
}

function jstoi_q(str) {
 return parseInt(str);
}

function inetPton6(str) {
 var words;
 var w, offset, z;
 var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
 var parts = [];
 if (!valid6regx.test(str)) {
  return null;
 }
 if (str === "::") {
  return [ 0, 0, 0, 0, 0, 0, 0, 0 ];
 }
 if (str.startsWith("::")) {
  str = str.replace("::", "Z:");
 } else {
  str = str.replace("::", ":Z:");
 }
 if (str.indexOf(".") > 0) {
  str = str.replace(new RegExp("[.]", "g"), ":");
  words = str.split(":");
  words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
  words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
  words = words.slice(0, words.length - 2);
 } else {
  words = str.split(":");
 }
 offset = 0;
 z = 0;
 for (w = 0; w < words.length; w++) {
  if (typeof words[w] === "string") {
   if (words[w] === "Z") {
    for (z = 0; z < 8 - words.length + 1; z++) {
     parts[w + z] = 0;
    }
    offset = z - 1;
   } else {
    parts[w + offset] = _htons(parseInt(words[w], 16));
   }
  } else {
   parts[w + offset] = words[w];
  }
 }
 return [ parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6] ];
}

function writeSockaddr(sa, family, addr, port, addrlen) {
 switch (family) {
 case 2:
  addr = inetPton4(addr);
  if (addrlen) {
   HEAP32[addrlen >> 2] = 16;
  }
  HEAP16[sa >> 1] = family;
  HEAP32[sa + 4 >> 2] = addr;
  HEAP16[sa + 2 >> 1] = _htons(port);
  tempI64 = [ 0 >>> 0, (tempDouble = 0, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[sa + 8 >> 2] = tempI64[0], HEAP32[sa + 12 >> 2] = tempI64[1];
  break;

 case 10:
  addr = inetPton6(addr);
  if (addrlen) {
   HEAP32[addrlen >> 2] = 28;
  }
  HEAP32[sa >> 2] = family;
  HEAP32[sa + 8 >> 2] = addr[0];
  HEAP32[sa + 12 >> 2] = addr[1];
  HEAP32[sa + 16 >> 2] = addr[2];
  HEAP32[sa + 20 >> 2] = addr[3];
  HEAP16[sa + 2 >> 1] = _htons(port);
  HEAP32[sa + 4 >> 2] = 0;
  HEAP32[sa + 24 >> 2] = 0;
  break;

 default:
  return 5;
 }
 return 0;
}

var DNS = {
 address_map: {
  id: 1,
  addrs: {},
  names: {}
 },
 lookup_name: function(name) {
  var res = inetPton4(name);
  if (res !== null) {
   return name;
  }
  res = inetPton6(name);
  if (res !== null) {
   return name;
  }
  var addr;
  if (DNS.address_map.addrs[name]) {
   addr = DNS.address_map.addrs[name];
  } else {
   var id = DNS.address_map.id++;
   assert(id < 65535, "exceeded max address mappings of 65535");
   addr = "172.29." + (id & 255) + "." + (id & 65280);
   DNS.address_map.names[addr] = name;
   DNS.address_map.addrs[name] = addr;
  }
  return addr;
 },
 lookup_addr: function(addr) {
  if (DNS.address_map.names[addr]) {
   return DNS.address_map.names[addr];
  }
  return null;
 }
};

function ___sys_accept4(fd, addr, addrlen, flags) {
 try {
  var sock = getSocketFromFD(fd);
  var newsock = sock.sock_ops.accept(sock);
  if (addr) {
   var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
   assert(!errno);
  }
  return newsock.stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_access(path, amode) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doAccess(path, amode);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function inetNtop4(addr) {
 return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
}

function inetNtop6(ints) {
 var str = "";
 var word = 0;
 var longest = 0;
 var lastzero = 0;
 var zstart = 0;
 var len = 0;
 var i = 0;
 var parts = [ ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16 ];
 var hasipv4 = true;
 var v4part = "";
 for (i = 0; i < 5; i++) {
  if (parts[i] !== 0) {
   hasipv4 = false;
   break;
  }
 }
 if (hasipv4) {
  v4part = inetNtop4(parts[6] | parts[7] << 16);
  if (parts[5] === -1) {
   str = "::ffff:";
   str += v4part;
   return str;
  }
  if (parts[5] === 0) {
   str = "::";
   if (v4part === "0.0.0.0") v4part = "";
   if (v4part === "0.0.0.1") v4part = "1";
   str += v4part;
   return str;
  }
 }
 for (word = 0; word < 8; word++) {
  if (parts[word] === 0) {
   if (word - lastzero > 1) {
    len = 0;
   }
   lastzero = word;
   len++;
  }
  if (len > longest) {
   longest = len;
   zstart = word - longest + 1;
  }
 }
 for (word = 0; word < 8; word++) {
  if (longest > 1) {
   if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
    if (word === zstart) {
     str += ":";
     if (zstart === 0) str += ":";
    }
    continue;
   }
  }
  str += Number(_ntohs(parts[word] & 65535)).toString(16);
  str += word < 7 ? ":" : "";
 }
 return str;
}

function readSockaddr(sa, salen) {
 var family = HEAP16[sa >> 1];
 var port = _ntohs(HEAPU16[sa + 2 >> 1]);
 var addr;
 switch (family) {
 case 2:
  if (salen !== 16) {
   return {
    errno: 28
   };
  }
  addr = HEAP32[sa + 4 >> 2];
  addr = inetNtop4(addr);
  break;

 case 10:
  if (salen !== 28) {
   return {
    errno: 28
   };
  }
  addr = [ HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2] ];
  addr = inetNtop6(addr);
  break;

 default:
  return {
   errno: 5
  };
 }
 return {
  family: family,
  addr: addr,
  port: port
 };
}

function getSocketAddress(addrp, addrlen, allowNull) {
 if (allowNull && addrp === 0) return null;
 var info = readSockaddr(addrp, addrlen);
 if (info.errno) throw new FS.ErrnoError(info.errno);
 info.addr = DNS.lookup_addr(info.addr) || info.addr;
 return info;
}

function ___sys_bind(fd, addr, addrlen) {
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.bind(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_chmod(path, mode) {
 try {
  path = SYSCALLS.getStr(path);
  FS.chmod(path, mode);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_connect(fd, addr, addrlen) {
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.connect(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_dup2(oldfd, suggestFD) {
 try {
  var old = SYSCALLS.getStreamFromFD(oldfd);
  if (old.fd === suggestFD) return suggestFD;
  return SYSCALLS.doDup(old.path, old.flags, suggestFD);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_fcntl64(fd, cmd, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    var newStream;
    newStream = FS.open(stream.path, stream.flags, 0, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 12:
   {
    var arg = SYSCALLS.get();
    var offset = 0;
    HEAP16[arg + offset >> 1] = 2;
    return 0;
   }

  case 13:
  case 14:
   return 0;

  case 16:
  case 8:
   return -28;

  case 9:
   setErrNo(28);
   return -1;

  default:
   {
    return -28;
   }
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_fstat64(fd, buf) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return SYSCALLS.doStat(FS.stat, stream.path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_ftruncate64(fd, zero, low, high) {
 try {
  var length = SYSCALLS.get64(low, high);
  FS.ftruncate(fd, length);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getcwd(buf, size) {
 try {
  if (size === 0) return -28;
  var cwd = FS.cwd();
  var cwdLengthInBytes = lengthBytesUTF8(cwd);
  if (size < cwdLengthInBytes + 1) return -68;
  stringToUTF8(cwd, buf, size);
  return buf;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getdents64(fd, dirp, count) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  if (!stream.getdents) {
   stream.getdents = FS.readdir(stream.path);
  }
  var struct_size = 280;
  var pos = 0;
  var off = FS.llseek(stream, 0, 1);
  var idx = Math.floor(off / struct_size);
  while (idx < stream.getdents.length && pos + struct_size <= count) {
   var id;
   var type;
   var name = stream.getdents[idx];
   if (name[0] === ".") {
    id = 1;
    type = 4;
   } else {
    var child = FS.lookupNode(stream.node, name);
    id = child.id;
    type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
   }
   tempI64 = [ id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
   tempI64 = [ (idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, 
   +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
   HEAP16[dirp + pos + 16 >> 1] = 280;
   HEAP8[dirp + pos + 18 >> 0] = type;
   stringToUTF8(name, dirp + pos + 19, 256);
   pos += struct_size;
   idx += 1;
  }
  FS.llseek(stream, idx * struct_size, 0);
  return pos;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getegid32() {
 return 0;
}

function ___sys_geteuid32() {
 return ___sys_getegid32();
}

function ___sys_getpeername(fd, addr, addrlen) {
 try {
  var sock = getSocketFromFD(fd);
  if (!sock.daddr) {
   return -53;
  }
  var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
  assert(!errno);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getrusage(who, usage) {
 try {
  _memset(usage, 0, 136);
  HEAP32[usage >> 2] = 1;
  HEAP32[usage + 4 >> 2] = 2;
  HEAP32[usage + 8 >> 2] = 3;
  HEAP32[usage + 12 >> 2] = 4;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getsockname(fd, addr, addrlen) {
 try {
  err("__sys_getsockname " + fd);
  var sock = getSocketFromFD(fd);
  var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
  assert(!errno);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getsockopt(fd, level, optname, optval, optlen) {
 try {
  var sock = getSocketFromFD(fd);
  if (level === 1) {
   if (optname === 4) {
    HEAP32[optval >> 2] = sock.error;
    HEAP32[optlen >> 2] = 4;
    sock.error = null;
    return 0;
   }
  }
  return -50;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getuid32() {
 return ___sys_getegid32();
}

function ___sys_ioctl(fd, op, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
  case 21505:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.get();
    HEAP32[argp >> 2] = 0;
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.get();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   abort("bad ioctl syscall " + op);
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_listen(fd, backlog) {
 try {
  var sock = getSocketFromFD(fd);
  sock.sock_ops.listen(sock, backlog);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_lstat64(path, buf) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_mkdir(path, mode) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doMkdir(path, mode);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function syscallMmap2(addr, len, prot, flags, fd, off) {
 off <<= 12;
 var ptr;
 var allocated = false;
 if ((flags & 16) !== 0 && addr % 65536 !== 0) {
  return -28;
 }
 if ((flags & 32) !== 0) {
  ptr = _memalign(65536, len);
  if (!ptr) return -48;
  _memset(ptr, 0, len);
  allocated = true;
 } else {
  var info = FS.getStream(fd);
  if (!info) return -8;
  var res = FS.mmap(info, addr, len, off, prot, flags);
  ptr = res.ptr;
  allocated = res.allocated;
 }
 SYSCALLS.mappings[ptr] = {
  malloc: ptr,
  len: len,
  allocated: allocated,
  fd: fd,
  prot: prot,
  flags: flags,
  offset: off
 };
 return ptr;
}

function ___sys_mmap2(addr, len, prot, flags, fd, off) {
 try {
  return syscallMmap2(addr, len, prot, flags, fd, off);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function syscallMunmap(addr, len) {
 if ((addr | 0) === -1 || len === 0) {
  return -28;
 }
 var info = SYSCALLS.mappings[addr];
 if (!info) return 0;
 if (len === info.len) {
  var stream = FS.getStream(info.fd);
  if (stream) {
   if (info.prot & 2) {
    SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
   }
   FS.munmap(stream);
  }
  SYSCALLS.mappings[addr] = null;
  if (info.allocated) {
   _free(info.malloc);
  }
 }
 return 0;
}

function ___sys_munmap(addr, len) {
 try {
  return syscallMunmap(addr, len);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_open(path, flags, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var pathname = SYSCALLS.getStr(path);
  var mode = varargs ? SYSCALLS.get() : 0;
  var stream = FS.open(pathname, flags, mode);
  return stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var PIPEFS = {
 BUCKET_BUFFER_SIZE: 8192,
 mount: function(mount) {
  return FS.createNode(null, "/", 16384 | 511, 0);
 },
 createPipe: function() {
  var pipe = {
   buckets: []
  };
  pipe.buckets.push({
   buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
   offset: 0,
   roffset: 0
  });
  var rName = PIPEFS.nextname();
  var wName = PIPEFS.nextname();
  var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
  var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
  rNode.pipe = pipe;
  wNode.pipe = pipe;
  var readableStream = FS.createStream({
   path: rName,
   node: rNode,
   flags: 0,
   seekable: false,
   stream_ops: PIPEFS.stream_ops
  });
  rNode.stream = readableStream;
  var writableStream = FS.createStream({
   path: wName,
   node: wNode,
   flags: 1,
   seekable: false,
   stream_ops: PIPEFS.stream_ops
  });
  wNode.stream = writableStream;
  return {
   readable_fd: readableStream.fd,
   writable_fd: writableStream.fd
  };
 },
 stream_ops: {
  poll: function(stream) {
   var pipe = stream.node.pipe;
   if ((stream.flags & 2097155) === 1) {
    return 256 | 4;
   } else {
    if (pipe.buckets.length > 0) {
     for (var i = 0; i < pipe.buckets.length; i++) {
      var bucket = pipe.buckets[i];
      if (bucket.offset - bucket.roffset > 0) {
       return 64 | 1;
      }
     }
    }
   }
   return 0;
  },
  ioctl: function(stream, request, varargs) {
   return ERRNO_CODES.EINVAL;
  },
  fsync: function(stream) {
   return ERRNO_CODES.EINVAL;
  },
  read: function(stream, buffer, offset, length, position) {
   var pipe = stream.node.pipe;
   var currentLength = 0;
   for (var i = 0; i < pipe.buckets.length; i++) {
    var bucket = pipe.buckets[i];
    currentLength += bucket.offset - bucket.roffset;
   }
   assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
   var data = buffer.subarray(offset, offset + length);
   if (length <= 0) {
    return 0;
   }
   if (currentLength == 0) {
    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
   }
   var toRead = Math.min(currentLength, length);
   var totalRead = toRead;
   var toRemove = 0;
   for (var i = 0; i < pipe.buckets.length; i++) {
    var currBucket = pipe.buckets[i];
    var bucketSize = currBucket.offset - currBucket.roffset;
    if (toRead <= bucketSize) {
     var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
     if (toRead < bucketSize) {
      tmpSlice = tmpSlice.subarray(0, toRead);
      currBucket.roffset += toRead;
     } else {
      toRemove++;
     }
     data.set(tmpSlice);
     break;
    } else {
     var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
     data.set(tmpSlice);
     data = data.subarray(tmpSlice.byteLength);
     toRead -= tmpSlice.byteLength;
     toRemove++;
    }
   }
   if (toRemove && toRemove == pipe.buckets.length) {
    toRemove--;
    pipe.buckets[toRemove].offset = 0;
    pipe.buckets[toRemove].roffset = 0;
   }
   pipe.buckets.splice(0, toRemove);
   return totalRead;
  },
  write: function(stream, buffer, offset, length, position) {
   var pipe = stream.node.pipe;
   assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
   var data = buffer.subarray(offset, offset + length);
   var dataLen = data.byteLength;
   if (dataLen <= 0) {
    return 0;
   }
   var currBucket = null;
   if (pipe.buckets.length == 0) {
    currBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: 0,
     roffset: 0
    };
    pipe.buckets.push(currBucket);
   } else {
    currBucket = pipe.buckets[pipe.buckets.length - 1];
   }
   assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
   var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
   if (freeBytesInCurrBuffer >= dataLen) {
    currBucket.buffer.set(data, currBucket.offset);
    currBucket.offset += dataLen;
    return dataLen;
   } else if (freeBytesInCurrBuffer > 0) {
    currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
    currBucket.offset += freeBytesInCurrBuffer;
    data = data.subarray(freeBytesInCurrBuffer, data.byteLength);
   }
   var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0;
   var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
   for (var i = 0; i < numBuckets; i++) {
    var newBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: PIPEFS.BUCKET_BUFFER_SIZE,
     roffset: 0
    };
    pipe.buckets.push(newBucket);
    newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
    data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength);
   }
   if (remElements > 0) {
    var newBucket = {
     buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
     offset: data.byteLength,
     roffset: 0
    };
    pipe.buckets.push(newBucket);
    newBucket.buffer.set(data);
   }
   return dataLen;
  },
  close: function(stream) {
   var pipe = stream.node.pipe;
   pipe.buckets = null;
  }
 },
 nextname: function() {
  if (!PIPEFS.nextname.current) {
   PIPEFS.nextname.current = 0;
  }
  return "pipe[" + PIPEFS.nextname.current++ + "]";
 }
};

function ___sys_pipe(fdPtr) {
 try {
  if (fdPtr == 0) {
   throw new FS.ErrnoError(21);
  }
  var res = PIPEFS.createPipe();
  HEAP32[fdPtr >> 2] = res.readable_fd;
  HEAP32[fdPtr + 4 >> 2] = res.writable_fd;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_poll(fds, nfds, timeout) {
 try {
  var nonzero = 0;
  for (var i = 0; i < nfds; i++) {
   var pollfd = fds + 8 * i;
   var fd = HEAP32[pollfd >> 2];
   var events = HEAP16[pollfd + 4 >> 1];
   var mask = 32;
   var stream = FS.getStream(fd);
   if (stream) {
    mask = SYSCALLS.DEFAULT_POLLMASK;
    if (stream.stream_ops.poll) {
     mask = stream.stream_ops.poll(stream);
    }
   }
   mask &= events | 8 | 16;
   if (mask) nonzero++;
   HEAP16[pollfd + 6 >> 1] = mask;
  }
  return nonzero;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_readlink(path, buf, bufsize) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doReadlink(path, buf, bufsize);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {
 try {
  var sock = getSocketFromFD(fd);
  var msg = sock.sock_ops.recvmsg(sock, len);
  if (!msg) return 0;
  if (addr) {
   var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
   assert(!errno);
  }
  HEAPU8.set(msg.buffer, buf);
  return msg.buffer.byteLength;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_recvmsg(fd, message, flags) {
 try {
  var sock = getSocketFromFD(fd);
  var iov = HEAP32[message + 8 >> 2];
  var num = HEAP32[message + 12 >> 2];
  var total = 0;
  for (var i = 0; i < num; i++) {
   total += HEAP32[iov + (8 * i + 4) >> 2];
  }
  var msg = sock.sock_ops.recvmsg(sock, total);
  if (!msg) return 0;
  var name = HEAP32[message >> 2];
  if (name) {
   var errno = writeSockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port);
   assert(!errno);
  }
  var bytesRead = 0;
  var bytesRemaining = msg.buffer.byteLength;
  for (var i = 0; bytesRemaining > 0 && i < num; i++) {
   var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
   var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
   if (!iovlen) {
    continue;
   }
   var length = Math.min(iovlen, bytesRemaining);
   var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
   HEAPU8.set(buf, iovbase + bytesRead);
   bytesRead += length;
   bytesRemaining -= length;
  }
  return bytesRead;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_rename(old_path, new_path) {
 try {
  old_path = SYSCALLS.getStr(old_path);
  new_path = SYSCALLS.getStr(new_path);
  FS.rename(old_path, new_path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_rmdir(path) {
 try {
  path = SYSCALLS.getStr(path);
  FS.rmdir(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_sendmsg(fd, message, flags) {
 try {
  var sock = getSocketFromFD(fd);
  var iov = HEAP32[message + 8 >> 2];
  var num = HEAP32[message + 12 >> 2];
  var addr, port;
  var name = HEAP32[message >> 2];
  var namelen = HEAP32[message + 4 >> 2];
  if (name) {
   var info = readSockaddr(name, namelen);
   if (info.errno) return -info.errno;
   port = info.port;
   addr = DNS.lookup_addr(info.addr) || info.addr;
  }
  var total = 0;
  for (var i = 0; i < num; i++) {
   total += HEAP32[iov + (8 * i + 4) >> 2];
  }
  var view = new Uint8Array(total);
  var offset = 0;
  for (var i = 0; i < num; i++) {
   var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
   var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
   for (var j = 0; j < iovlen; j++) {
    view[offset++] = HEAP8[iovbase + j >> 0];
   }
  }
  return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_sendto(fd, message, length, flags, addr, addr_len) {
 try {
  var sock = getSocketFromFD(fd);
  var dest = getSocketAddress(addr, addr_len, true);
  if (!dest) {
   return FS.write(sock.stream, HEAP8, message, length);
  } else {
   return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port);
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_setsockopt(fd) {
 try {
  return -50;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_shutdown(fd, how) {
 try {
  getSocketFromFD(fd);
  return -52;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_socket(domain, type, protocol) {
 try {
  var sock = SOCKFS.createSocket(domain, type, protocol);
  assert(sock.stream.fd < 64);
  return sock.stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_stat64(path, buf) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.stat, path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_statfs64(path, size, buf) {
 try {
  path = SYSCALLS.getStr(path);
  assert(size === 64);
  HEAP32[buf + 4 >> 2] = 4096;
  HEAP32[buf + 40 >> 2] = 4096;
  HEAP32[buf + 8 >> 2] = 1e6;
  HEAP32[buf + 12 >> 2] = 5e5;
  HEAP32[buf + 16 >> 2] = 5e5;
  HEAP32[buf + 20 >> 2] = FS.nextInode;
  HEAP32[buf + 24 >> 2] = 1e6;
  HEAP32[buf + 28 >> 2] = 42;
  HEAP32[buf + 44 >> 2] = 2;
  HEAP32[buf + 36 >> 2] = 255;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_truncate64(path, zero, low, high) {
 try {
  path = SYSCALLS.getStr(path);
  var length = SYSCALLS.get64(low, high);
  FS.truncate(path, length);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_uname(buf) {
 try {
  if (!buf) return -21;
  var layout = {
   "__size__": 390,
   "domainname": 325,
   "machine": 260,
   "nodename": 65,
   "release": 130,
   "sysname": 0,
   "version": 195
  };
  var copyString = function(element, value) {
   var offset = layout[element];
   writeAsciiToMemory(value, buf + offset);
  };
  copyString("sysname", "Emscripten");
  copyString("nodename", "emscripten");
  copyString("release", "1.0");
  copyString("version", "#1");
  copyString("machine", "wasm32");
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_unlink(path) {
 try {
  path = SYSCALLS.getStr(path);
  FS.unlink(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function _abort() {
 abort();
}

function _clock() {
 if (_clock.start === undefined) _clock.start = Date.now();
 return (Date.now() - _clock.start) * (1e6 / 1e3) | 0;
}

function _emscripten_get_now_res() {
 if (ENVIRONMENT_IS_NODE) {
  return 1;
 } else if (typeof dateNow !== "undefined") {
  return 1e3;
 } else return 1e3;
}

var _emscripten_get_now_is_monotonic = true;

function _clock_getres(clk_id, res) {
 var nsec;
 if (clk_id === 0) {
  nsec = 1e3 * 1e3;
 } else if (clk_id === 1 && _emscripten_get_now_is_monotonic) {
  nsec = _emscripten_get_now_res();
 } else {
  setErrNo(28);
  return -1;
 }
 HEAP32[res >> 2] = nsec / 1e9 | 0;
 HEAP32[res + 4 >> 2] = nsec;
 return 0;
}

var _emscripten_get_now;

if (ENVIRONMENT_IS_NODE) {
 _emscripten_get_now = function() {
  var t = process["hrtime"]();
  return t[0] * 1e3 + t[1] / 1e6;
 };
} else if (typeof dateNow !== "undefined") {
 _emscripten_get_now = dateNow;
} else _emscripten_get_now = function() {
 return performance.now();
};

function _clock_gettime(clk_id, tp) {
 var now;
 if (clk_id === 0) {
  now = Date.now();
 } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
  now = _emscripten_get_now();
 } else {
  setErrNo(28);
  return -1;
 }
 HEAP32[tp >> 2] = now / 1e3 | 0;
 HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
 return 0;
}

function _difftime(time1, time0) {
 return time1 - time0;
}

function _dlclose(handle) {}

function _dlerror() {
 return 0;
}

function _dlopen(filename, flag) {
 warnOnce("Unable to open DLL " + UTF8ToString(filename) + "! Dynamic linking is not supported in WebAssembly builds due to limitations to performance and code size. Please statically link in the needed libraries.");
}

function _dlsym(handle, symbol) {
 return 0;
}

var readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
 assert(Array.isArray(readAsmConstArgsArray));
 assert(buf % 16 == 0);
 readAsmConstArgsArray.length = 0;
 var ch;
 buf >>= 2;
 while (ch = HEAPU8[sigPtr++]) {
  assert(ch === 100 || ch === 102 || ch === 105);
  var double = ch < 105;
  if (double && buf & 1) buf++;
  readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
  ++buf;
 }
 return readAsmConstArgsArray;
}

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 if (!ASM_CONSTS.hasOwnProperty(code)) abort("No EM_ASM constant found at address " + code);
 return ASM_CONSTS[code].apply(null, args);
}

function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 if (!ASM_CONSTS.hasOwnProperty(code)) abort("No EM_ASM constant found at address " + code);
 return ASM_CONSTS[code].apply(null, args);
}

function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
 return mainThreadEM_ASM(code, sigPtr, argbuf, 1);
}

function _emscripten_set_main_loop_timing(mode, value) {
 Browser.mainLoop.timingMode = mode;
 Browser.mainLoop.timingValue = value;
 if (!Browser.mainLoop.func) {
  console.error("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  return 1;
 }
 if (!Browser.mainLoop.running) {
  Browser.mainLoop.running = true;
 }
 if (mode == 0) {
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
   var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
   setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
  };
  Browser.mainLoop.method = "timeout";
 } else if (mode == 1) {
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
   Browser.requestAnimationFrame(Browser.mainLoop.runner);
  };
  Browser.mainLoop.method = "rAF";
 } else if (mode == 2) {
  if (typeof setImmediate === "undefined") {
   var setImmediates = [];
   var emscriptenMainLoopMessageId = "setimmediate";
   var Browser_setImmediate_messageHandler = function(event) {
    if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
     event.stopPropagation();
     setImmediates.shift()();
    }
   };
   addEventListener("message", Browser_setImmediate_messageHandler, true);
   setImmediate = function Browser_emulated_setImmediate(func) {
    setImmediates.push(func);
    if (ENVIRONMENT_IS_WORKER) {
     if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
     Module["setImmediates"].push(func);
     postMessage({
      target: emscriptenMainLoopMessageId
     });
    } else postMessage(emscriptenMainLoopMessageId, "*");
   };
  }
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
   setImmediate(Browser.mainLoop.runner);
  };
  Browser.mainLoop.method = "immediate";
 }
 return 0;
}

function _exit(status) {
 exit(status);
}

function maybeExit() {
 if (!keepRuntimeAlive()) {
  try {
   _exit(EXITSTATUS);
  } catch (e) {
   if (e instanceof ExitStatus) {
    return;
   }
   throw e;
  }
 }
}

function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
 assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
 Browser.mainLoop.func = browserIterationFunc;
 Browser.mainLoop.arg = arg;
 var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
 function checkIsRunning() {
  if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
   maybeExit();
   return false;
  }
  return true;
 }
 Browser.mainLoop.running = false;
 Browser.mainLoop.runner = function Browser_mainLoop_runner() {
  if (ABORT) return;
  if (Browser.mainLoop.queue.length > 0) {
   var start = Date.now();
   var blocker = Browser.mainLoop.queue.shift();
   blocker.func(blocker.arg);
   if (Browser.mainLoop.remainingBlockers) {
    var remaining = Browser.mainLoop.remainingBlockers;
    var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
    if (blocker.counted) {
     Browser.mainLoop.remainingBlockers = next;
    } else {
     next = next + .5;
     Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
    }
   }
   console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
   Browser.mainLoop.updateStatus();
   if (!checkIsRunning()) return;
   setTimeout(Browser.mainLoop.runner, 0);
   return;
  }
  if (!checkIsRunning()) return;
  Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
  if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
   Browser.mainLoop.scheduler();
   return;
  } else if (Browser.mainLoop.timingMode == 0) {
   Browser.mainLoop.tickStartTime = _emscripten_get_now();
  }
  GL.newRenderingFrameStarted();
  if (Browser.mainLoop.method === "timeout" && Module.ctx) {
   warnOnce("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");
   Browser.mainLoop.method = "";
  }
  Browser.mainLoop.runIter(browserIterationFunc);
  checkStackCookie();
  if (!checkIsRunning()) return;
  if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  Browser.mainLoop.scheduler();
 };
 if (!noSetTiming) {
  if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps); else _emscripten_set_main_loop_timing(1, 1);
  Browser.mainLoop.scheduler();
 }
 if (simulateInfiniteLoop) {
  throw "unwind";
 }
}

function callUserCallback(func, synchronous) {
 if (ABORT) {
  err("user callback triggered after application aborted.  Ignoring.");
  return;
 }
 if (synchronous) {
  func();
  return;
 }
 try {
  func();
 } catch (e) {
  if (e instanceof ExitStatus) {
   return;
  } else if (e !== "unwind") {
   if (e && typeof e === "object" && e.stack) err("exception thrown: " + [ e, e.stack ]);
   throw e;
  }
 }
}

var Browser = {
 mainLoop: {
  running: false,
  scheduler: null,
  method: "",
  currentlyRunningMainloop: 0,
  func: null,
  arg: 0,
  timingMode: 0,
  timingValue: 0,
  currentFrameNumber: 0,
  queue: [],
  pause: function() {
   Browser.mainLoop.scheduler = null;
   Browser.mainLoop.currentlyRunningMainloop++;
  },
  resume: function() {
   Browser.mainLoop.currentlyRunningMainloop++;
   var timingMode = Browser.mainLoop.timingMode;
   var timingValue = Browser.mainLoop.timingValue;
   var func = Browser.mainLoop.func;
   Browser.mainLoop.func = null;
   setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
   _emscripten_set_main_loop_timing(timingMode, timingValue);
   Browser.mainLoop.scheduler();
  },
  updateStatus: function() {
   if (Module["setStatus"]) {
    var message = Module["statusMessage"] || "Please wait...";
    var remaining = Browser.mainLoop.remainingBlockers;
    var expected = Browser.mainLoop.expectedBlockers;
    if (remaining) {
     if (remaining < expected) {
      Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
     } else {
      Module["setStatus"](message);
     }
    } else {
     Module["setStatus"]("");
    }
   }
  },
  runIter: function(func) {
   if (ABORT) return;
   if (Module["preMainLoop"]) {
    var preRet = Module["preMainLoop"]();
    if (preRet === false) {
     return;
    }
   }
   callUserCallback(func);
   if (Module["postMainLoop"]) Module["postMainLoop"]();
  }
 },
 isFullscreen: false,
 pointerLock: false,
 moduleContextCreatedCallbacks: [],
 workers: [],
 init: function() {
  if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
  if (Browser.initted) return;
  Browser.initted = true;
  try {
   new Blob();
   Browser.hasBlobConstructor = true;
  } catch (e) {
   Browser.hasBlobConstructor = false;
   console.log("warning: no blob constructor, cannot create blobs with mimetypes");
  }
  Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
  Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
  if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
   console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
   Module.noImageDecoding = true;
  }
  var imagePlugin = {};
  imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
   return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
  };
  imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
   var b = null;
   if (Browser.hasBlobConstructor) {
    try {
     b = new Blob([ byteArray ], {
      type: Browser.getMimetype(name)
     });
     if (b.size !== byteArray.length) {
      b = new Blob([ new Uint8Array(byteArray).buffer ], {
       type: Browser.getMimetype(name)
      });
     }
    } catch (e) {
     warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
    }
   }
   if (!b) {
    var bb = new Browser.BlobBuilder();
    bb.append(new Uint8Array(byteArray).buffer);
    b = bb.getBlob();
   }
   var url = Browser.URLObject.createObjectURL(b);
   assert(typeof url == "string", "createObjectURL must return a url as a string");
   var img = new Image();
   img.onload = function img_onload() {
    assert(img.complete, "Image " + name + " could not be decoded");
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    Module["preloadedImages"][name] = canvas;
    Browser.URLObject.revokeObjectURL(url);
    if (onload) onload(byteArray);
   };
   img.onerror = function img_onerror(event) {
    console.log("Image " + url + " could not be decoded");
    if (onerror) onerror();
   };
   img.src = url;
  };
  Module["preloadPlugins"].push(imagePlugin);
  var audioPlugin = {};
  audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
   return !Module.noAudioDecoding && name.substr(-4) in {
    ".ogg": 1,
    ".wav": 1,
    ".mp3": 1
   };
  };
  audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
   var done = false;
   function finish(audio) {
    if (done) return;
    done = true;
    Module["preloadedAudios"][name] = audio;
    if (onload) onload(byteArray);
   }
   function fail() {
    if (done) return;
    done = true;
    Module["preloadedAudios"][name] = new Audio();
    if (onerror) onerror();
   }
   if (Browser.hasBlobConstructor) {
    try {
     var b = new Blob([ byteArray ], {
      type: Browser.getMimetype(name)
     });
    } catch (e) {
     return fail();
    }
    var url = Browser.URLObject.createObjectURL(b);
    assert(typeof url == "string", "createObjectURL must return a url as a string");
    var audio = new Audio();
    audio.addEventListener("canplaythrough", function() {
     finish(audio);
    }, false);
    audio.onerror = function audio_onerror(event) {
     if (done) return;
     console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");
     function encode64(data) {
      var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var PAD = "=";
      var ret = "";
      var leftchar = 0;
      var leftbits = 0;
      for (var i = 0; i < data.length; i++) {
       leftchar = leftchar << 8 | data[i];
       leftbits += 8;
       while (leftbits >= 6) {
        var curr = leftchar >> leftbits - 6 & 63;
        leftbits -= 6;
        ret += BASE[curr];
       }
      }
      if (leftbits == 2) {
       ret += BASE[(leftchar & 3) << 4];
       ret += PAD + PAD;
      } else if (leftbits == 4) {
       ret += BASE[(leftchar & 15) << 2];
       ret += PAD;
      }
      return ret;
     }
     audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
     finish(audio);
    };
    audio.src = url;
    Browser.safeSetTimeout(function() {
     finish(audio);
    }, 1e4);
   } else {
    return fail();
   }
  };
  Module["preloadPlugins"].push(audioPlugin);
  function pointerLockChange() {
   Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
  }
  var canvas = Module["canvas"];
  if (canvas) {
   canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function() {};
   canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function() {};
   canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
   document.addEventListener("pointerlockchange", pointerLockChange, false);
   document.addEventListener("mozpointerlockchange", pointerLockChange, false);
   document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
   document.addEventListener("mspointerlockchange", pointerLockChange, false);
   if (Module["elementPointerLock"]) {
    canvas.addEventListener("click", function(ev) {
     if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
      Module["canvas"].requestPointerLock();
      ev.preventDefault();
     }
    }, false);
   }
  }
 },
 createContext: function(canvas, useWebGL, setInModule, webGLContextAttributes) {
  if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
  var ctx;
  var contextHandle;
  if (useWebGL) {
   var contextAttributes = {
    antialias: false,
    alpha: false,
    majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
   };
   if (webGLContextAttributes) {
    for (var attribute in webGLContextAttributes) {
     contextAttributes[attribute] = webGLContextAttributes[attribute];
    }
   }
   if (typeof GL !== "undefined") {
    contextHandle = GL.createContext(canvas, contextAttributes);
    if (contextHandle) {
     ctx = GL.getContext(contextHandle).GLctx;
    }
   }
  } else {
   ctx = canvas.getContext("2d");
  }
  if (!ctx) return null;
  if (setInModule) {
   if (!useWebGL) assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
   Module.ctx = ctx;
   if (useWebGL) GL.makeContextCurrent(contextHandle);
   Module.useWebGL = useWebGL;
   Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
    callback();
   });
   Browser.init();
  }
  return ctx;
 },
 destroyContext: function(canvas, useWebGL, setInModule) {},
 fullscreenHandlersInstalled: false,
 lockPointer: undefined,
 resizeCanvas: undefined,
 requestFullscreen: function(lockPointer, resizeCanvas) {
  Browser.lockPointer = lockPointer;
  Browser.resizeCanvas = resizeCanvas;
  if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;
  if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;
  var canvas = Module["canvas"];
  function fullscreenChange() {
   Browser.isFullscreen = false;
   var canvasContainer = canvas.parentNode;
   if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
    canvas.exitFullscreen = Browser.exitFullscreen;
    if (Browser.lockPointer) canvas.requestPointerLock();
    Browser.isFullscreen = true;
    if (Browser.resizeCanvas) {
     Browser.setFullscreenCanvasSize();
    } else {
     Browser.updateCanvasDimensions(canvas);
    }
   } else {
    canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
    canvasContainer.parentNode.removeChild(canvasContainer);
    if (Browser.resizeCanvas) {
     Browser.setWindowedCanvasSize();
    } else {
     Browser.updateCanvasDimensions(canvas);
    }
   }
   if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
   if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
  }
  if (!Browser.fullscreenHandlersInstalled) {
   Browser.fullscreenHandlersInstalled = true;
   document.addEventListener("fullscreenchange", fullscreenChange, false);
   document.addEventListener("mozfullscreenchange", fullscreenChange, false);
   document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
   document.addEventListener("MSFullscreenChange", fullscreenChange, false);
  }
  var canvasContainer = document.createElement("div");
  canvas.parentNode.insertBefore(canvasContainer, canvas);
  canvasContainer.appendChild(canvas);
  canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function() {
   canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
  } : null) || (canvasContainer["webkitRequestFullScreen"] ? function() {
   canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
  } : null);
  canvasContainer.requestFullscreen();
 },
 requestFullScreen: function() {
  abort("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
 },
 exitFullscreen: function() {
  if (!Browser.isFullscreen) {
   return false;
  }
  var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {};
  CFS.apply(document, []);
  return true;
 },
 nextRAF: 0,
 fakeRequestAnimationFrame: function(func) {
  var now = Date.now();
  if (Browser.nextRAF === 0) {
   Browser.nextRAF = now + 1e3 / 60;
  } else {
   while (now + 2 >= Browser.nextRAF) {
    Browser.nextRAF += 1e3 / 60;
   }
  }
  var delay = Math.max(Browser.nextRAF - now, 0);
  setTimeout(func, delay);
 },
 requestAnimationFrame: function(func) {
  if (typeof requestAnimationFrame === "function") {
   requestAnimationFrame(func);
   return;
  }
  var RAF = Browser.fakeRequestAnimationFrame;
  RAF(func);
 },
 safeRequestAnimationFrame: function(func) {
  return Browser.requestAnimationFrame(function() {
   callUserCallback(func);
  });
 },
 safeSetTimeout: function(func, timeout) {
  return setTimeout(function() {
   callUserCallback(func);
  }, timeout);
 },
 getMimetype: function(name) {
  return {
   "jpg": "image/jpeg",
   "jpeg": "image/jpeg",
   "png": "image/png",
   "bmp": "image/bmp",
   "ogg": "audio/ogg",
   "wav": "audio/wav",
   "mp3": "audio/mpeg"
  }[name.substr(name.lastIndexOf(".") + 1)];
 },
 getUserMedia: function(func) {
  if (!window.getUserMedia) {
   window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
  }
  window.getUserMedia(func);
 },
 getMovementX: function(event) {
  return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
 },
 getMovementY: function(event) {
  return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
 },
 getMouseWheelDelta: function(event) {
  var delta = 0;
  switch (event.type) {
  case "DOMMouseScroll":
   delta = event.detail / 3;
   break;

  case "mousewheel":
   delta = event.wheelDelta / 120;
   break;

  case "wheel":
   delta = event.deltaY;
   switch (event.deltaMode) {
   case 0:
    delta /= 100;
    break;

   case 1:
    delta /= 3;
    break;

   case 2:
    delta *= 80;
    break;

   default:
    throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
   }
   break;

  default:
   throw "unrecognized mouse wheel event: " + event.type;
  }
  return delta;
 },
 mouseX: 0,
 mouseY: 0,
 mouseMovementX: 0,
 mouseMovementY: 0,
 touches: {},
 lastTouches: {},
 calculateMouseEvent: function(event) {
  if (Browser.pointerLock) {
   if (event.type != "mousemove" && "mozMovementX" in event) {
    Browser.mouseMovementX = Browser.mouseMovementY = 0;
   } else {
    Browser.mouseMovementX = Browser.getMovementX(event);
    Browser.mouseMovementY = Browser.getMovementY(event);
   }
   if (typeof SDL != "undefined") {
    Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
    Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
   } else {
    Browser.mouseX += Browser.mouseMovementX;
    Browser.mouseY += Browser.mouseMovementY;
   }
  } else {
   var rect = Module["canvas"].getBoundingClientRect();
   var cw = Module["canvas"].width;
   var ch = Module["canvas"].height;
   var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
   var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
   assert(typeof scrollX !== "undefined" && typeof scrollY !== "undefined", "Unable to retrieve scroll position, mouse positions likely broken.");
   if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
    var touch = event.touch;
    if (touch === undefined) {
     return;
    }
    var adjustedX = touch.pageX - (scrollX + rect.left);
    var adjustedY = touch.pageY - (scrollY + rect.top);
    adjustedX = adjustedX * (cw / rect.width);
    adjustedY = adjustedY * (ch / rect.height);
    var coords = {
     x: adjustedX,
     y: adjustedY
    };
    if (event.type === "touchstart") {
     Browser.lastTouches[touch.identifier] = coords;
     Browser.touches[touch.identifier] = coords;
    } else if (event.type === "touchend" || event.type === "touchmove") {
     var last = Browser.touches[touch.identifier];
     if (!last) last = coords;
     Browser.lastTouches[touch.identifier] = last;
     Browser.touches[touch.identifier] = coords;
    }
    return;
   }
   var x = event.pageX - (scrollX + rect.left);
   var y = event.pageY - (scrollY + rect.top);
   x = x * (cw / rect.width);
   y = y * (ch / rect.height);
   Browser.mouseMovementX = x - Browser.mouseX;
   Browser.mouseMovementY = y - Browser.mouseY;
   Browser.mouseX = x;
   Browser.mouseY = y;
  }
 },
 asyncLoad: function(url, onload, onerror, noRunDep) {
  var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
  readAsync(url, function(arrayBuffer) {
   assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
   onload(new Uint8Array(arrayBuffer));
   if (dep) removeRunDependency(dep);
  }, function(event) {
   if (onerror) {
    onerror();
   } else {
    throw 'Loading data file "' + url + '" failed.';
   }
  });
  if (dep) addRunDependency(dep);
 },
 resizeListeners: [],
 updateResizeListeners: function() {
  var canvas = Module["canvas"];
  Browser.resizeListeners.forEach(function(listener) {
   listener(canvas.width, canvas.height);
  });
 },
 setCanvasSize: function(width, height, noUpdates) {
  var canvas = Module["canvas"];
  Browser.updateCanvasDimensions(canvas, width, height);
  if (!noUpdates) Browser.updateResizeListeners();
 },
 windowedWidth: 0,
 windowedHeight: 0,
 setFullscreenCanvasSize: function() {
  if (typeof SDL != "undefined") {
   var flags = HEAPU32[SDL.screen >> 2];
   flags = flags | 8388608;
   HEAP32[SDL.screen >> 2] = flags;
  }
  Browser.updateCanvasDimensions(Module["canvas"]);
  Browser.updateResizeListeners();
 },
 setWindowedCanvasSize: function() {
  if (typeof SDL != "undefined") {
   var flags = HEAPU32[SDL.screen >> 2];
   flags = flags & ~8388608;
   HEAP32[SDL.screen >> 2] = flags;
  }
  Browser.updateCanvasDimensions(Module["canvas"]);
  Browser.updateResizeListeners();
 },
 updateCanvasDimensions: function(canvas, wNative, hNative) {
  if (wNative && hNative) {
   canvas.widthNative = wNative;
   canvas.heightNative = hNative;
  } else {
   wNative = canvas.widthNative;
   hNative = canvas.heightNative;
  }
  var w = wNative;
  var h = hNative;
  if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
   if (w / h < Module["forcedAspectRatio"]) {
    w = Math.round(h * Module["forcedAspectRatio"]);
   } else {
    h = Math.round(w / Module["forcedAspectRatio"]);
   }
  }
  if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
   var factor = Math.min(screen.width / w, screen.height / h);
   w = Math.round(w * factor);
   h = Math.round(h * factor);
  }
  if (Browser.resizeCanvas) {
   if (canvas.width != w) canvas.width = w;
   if (canvas.height != h) canvas.height = h;
   if (typeof canvas.style != "undefined") {
    canvas.style.removeProperty("width");
    canvas.style.removeProperty("height");
   }
  } else {
   if (canvas.width != wNative) canvas.width = wNative;
   if (canvas.height != hNative) canvas.height = hNative;
   if (typeof canvas.style != "undefined") {
    if (w != wNative || h != hNative) {
     canvas.style.setProperty("width", w + "px", "important");
     canvas.style.setProperty("height", h + "px", "important");
    } else {
     canvas.style.removeProperty("width");
     canvas.style.removeProperty("height");
    }
   }
  }
 },
 wgetRequests: {},
 nextWgetRequestHandle: 0,
 getNextWgetRequestHandle: function() {
  var handle = Browser.nextWgetRequestHandle;
  Browser.nextWgetRequestHandle++;
  return handle;
 }
};

function _emscripten_cancel_main_loop() {
 Browser.mainLoop.pause();
 Browser.mainLoop.func = null;
}

function _emscripten_clear_interval(id) {
 clearInterval(id);
}

var JSEvents = {
 inEventHandler: 0,
 removeAllEventListeners: function() {
  for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
   JSEvents._removeHandler(i);
  }
  JSEvents.eventHandlers = [];
  JSEvents.deferredCalls = [];
 },
 registerRemoveEventListeners: function() {
  if (!JSEvents.removeEventListenersRegistered) {
   __ATEXIT__.push(JSEvents.removeAllEventListeners);
   JSEvents.removeEventListenersRegistered = true;
  }
 },
 deferredCalls: [],
 deferCall: function(targetFunction, precedence, argsList) {
  function arraysHaveEqualContent(arrA, arrB) {
   if (arrA.length != arrB.length) return false;
   for (var i in arrA) {
    if (arrA[i] != arrB[i]) return false;
   }
   return true;
  }
  for (var i in JSEvents.deferredCalls) {
   var call = JSEvents.deferredCalls[i];
   if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
    return;
   }
  }
  JSEvents.deferredCalls.push({
   targetFunction: targetFunction,
   precedence: precedence,
   argsList: argsList
  });
  JSEvents.deferredCalls.sort(function(x, y) {
   return x.precedence < y.precedence;
  });
 },
 removeDeferredCalls: function(targetFunction) {
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
    JSEvents.deferredCalls.splice(i, 1);
    --i;
   }
  }
 },
 canPerformEventHandlerRequests: function() {
  return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
 },
 runDeferredCalls: function() {
  if (!JSEvents.canPerformEventHandlerRequests()) {
   return;
  }
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   var call = JSEvents.deferredCalls[i];
   JSEvents.deferredCalls.splice(i, 1);
   --i;
   call.targetFunction.apply(null, call.argsList);
  }
 },
 eventHandlers: [],
 removeAllHandlersOnTarget: function(target, eventTypeString) {
  for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
   if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
    JSEvents._removeHandler(i--);
   }
  }
 },
 _removeHandler: function(i) {
  var h = JSEvents.eventHandlers[i];
  h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
  JSEvents.eventHandlers.splice(i, 1);
 },
 registerOrRemoveHandler: function(eventHandler) {
  var jsEventHandler = function jsEventHandler(event) {
   ++JSEvents.inEventHandler;
   JSEvents.currentEventHandler = eventHandler;
   JSEvents.runDeferredCalls();
   eventHandler.handlerFunc(event);
   JSEvents.runDeferredCalls();
   --JSEvents.inEventHandler;
  };
  if (eventHandler.callbackfunc) {
   eventHandler.eventListenerFunc = jsEventHandler;
   eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
   JSEvents.eventHandlers.push(eventHandler);
   JSEvents.registerRemoveEventListeners();
  } else {
   for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
    if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
     JSEvents._removeHandler(i--);
    }
   }
  }
 },
 getNodeNameForTarget: function(target) {
  if (!target) return "";
  if (target == window) return "#window";
  if (target == screen) return "#screen";
  return target && target.nodeName ? target.nodeName : "";
 },
 fullscreenEnabled: function() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
 }
};

var currentFullscreenStrategy = {};

function maybeCStringToJsString(cString) {
 return cString > 2 ? UTF8ToString(cString) : cString;
}

var specialHTMLTargets = [ 0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0 ];

function findEventTarget(target) {
 target = maybeCStringToJsString(target);
 var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : undefined);
 return domElement;
}

function findCanvasEventTarget(target) {
 return findEventTarget(target);
}

function _emscripten_get_canvas_element_size(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (!canvas) return -4;
 HEAP32[width >> 2] = canvas.width;
 HEAP32[height >> 2] = canvas.height;
}

function getCanvasElementSize(target) {
 var stackTop = stackSave();
 var w = stackAlloc(8);
 var h = w + 4;
 var targetInt = stackAlloc(target.id.length + 1);
 stringToUTF8(target.id, targetInt, target.id.length + 1);
 var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
 var size = [ HEAP32[w >> 2], HEAP32[h >> 2] ];
 stackRestore(stackTop);
 return size;
}

function _emscripten_set_canvas_element_size(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (!canvas) return -4;
 canvas.width = width;
 canvas.height = height;
 return 0;
}

function setCanvasElementSize(target, width, height) {
 if (!target.controlTransferredOffscreen) {
  target.width = width;
  target.height = height;
 } else {
  var stackTop = stackSave();
  var targetInt = stackAlloc(target.id.length + 1);
  stringToUTF8(target.id, targetInt, target.id.length + 1);
  _emscripten_set_canvas_element_size(targetInt, width, height);
  stackRestore(stackTop);
 }
}

function registerRestoreOldStyle(canvas) {
 var canvasSize = getCanvasElementSize(canvas);
 var oldWidth = canvasSize[0];
 var oldHeight = canvasSize[1];
 var oldCssWidth = canvas.style.width;
 var oldCssHeight = canvas.style.height;
 var oldBackgroundColor = canvas.style.backgroundColor;
 var oldDocumentBackgroundColor = document.body.style.backgroundColor;
 var oldPaddingLeft = canvas.style.paddingLeft;
 var oldPaddingRight = canvas.style.paddingRight;
 var oldPaddingTop = canvas.style.paddingTop;
 var oldPaddingBottom = canvas.style.paddingBottom;
 var oldMarginLeft = canvas.style.marginLeft;
 var oldMarginRight = canvas.style.marginRight;
 var oldMarginTop = canvas.style.marginTop;
 var oldMarginBottom = canvas.style.marginBottom;
 var oldDocumentBodyMargin = document.body.style.margin;
 var oldDocumentOverflow = document.documentElement.style.overflow;
 var oldDocumentScroll = document.body.scroll;
 var oldImageRendering = canvas.style.imageRendering;
 function restoreOldStyle() {
  var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  if (!fullscreenElement) {
   document.removeEventListener("fullscreenchange", restoreOldStyle);
   document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
   setCanvasElementSize(canvas, oldWidth, oldHeight);
   canvas.style.width = oldCssWidth;
   canvas.style.height = oldCssHeight;
   canvas.style.backgroundColor = oldBackgroundColor;
   if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = "white";
   document.body.style.backgroundColor = oldDocumentBackgroundColor;
   canvas.style.paddingLeft = oldPaddingLeft;
   canvas.style.paddingRight = oldPaddingRight;
   canvas.style.paddingTop = oldPaddingTop;
   canvas.style.paddingBottom = oldPaddingBottom;
   canvas.style.marginLeft = oldMarginLeft;
   canvas.style.marginRight = oldMarginRight;
   canvas.style.marginTop = oldMarginTop;
   canvas.style.marginBottom = oldMarginBottom;
   document.body.style.margin = oldDocumentBodyMargin;
   document.documentElement.style.overflow = oldDocumentOverflow;
   document.body.scroll = oldDocumentScroll;
   canvas.style.imageRendering = oldImageRendering;
   if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
   if (currentFullscreenStrategy.canvasResizedCallback) {
    (function(a1, a2, a3) {
     return dynCall_iiii.apply(null, [ currentFullscreenStrategy.canvasResizedCallback, a1, a2, a3 ]);
    })(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData);
   }
  }
 }
 document.addEventListener("fullscreenchange", restoreOldStyle);
 document.addEventListener("webkitfullscreenchange", restoreOldStyle);
 return restoreOldStyle;
}

function setLetterbox(element, topBottom, leftRight) {
 element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
 element.style.paddingTop = element.style.paddingBottom = topBottom + "px";
}

function getBoundingClientRect(e) {
 return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
  "left": 0,
  "top": 0
 };
}

function _JSEvents_resizeCanvasForFullscreen(target, strategy) {
 var restoreOldStyle = registerRestoreOldStyle(target);
 var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
 var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
 var rect = getBoundingClientRect(target);
 var windowedCssWidth = rect.width;
 var windowedCssHeight = rect.height;
 var canvasSize = getCanvasElementSize(target);
 var windowedRttWidth = canvasSize[0];
 var windowedRttHeight = canvasSize[1];
 if (strategy.scaleMode == 3) {
  setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
  cssWidth = windowedCssWidth;
  cssHeight = windowedCssHeight;
 } else if (strategy.scaleMode == 2) {
  if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
   var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
   setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
   cssHeight = desiredCssHeight;
  } else {
   var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
   setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
   cssWidth = desiredCssWidth;
  }
 }
 if (!target.style.backgroundColor) target.style.backgroundColor = "black";
 if (!document.body.style.backgroundColor) document.body.style.backgroundColor = "black";
 target.style.width = cssWidth + "px";
 target.style.height = cssHeight + "px";
 if (strategy.filteringMode == 1) {
  target.style.imageRendering = "optimizeSpeed";
  target.style.imageRendering = "-moz-crisp-edges";
  target.style.imageRendering = "-o-crisp-edges";
  target.style.imageRendering = "-webkit-optimize-contrast";
  target.style.imageRendering = "optimize-contrast";
  target.style.imageRendering = "crisp-edges";
  target.style.imageRendering = "pixelated";
 }
 var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
 if (strategy.canvasResolutionScaleMode != 0) {
  var newWidth = cssWidth * dpiScale | 0;
  var newHeight = cssHeight * dpiScale | 0;
  setCanvasElementSize(target, newWidth, newHeight);
  if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight);
 }
 return restoreOldStyle;
}

function _JSEvents_requestFullscreen(target, strategy) {
 if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
  _JSEvents_resizeCanvasForFullscreen(target, strategy);
 }
 if (target.requestFullscreen) {
  target.requestFullscreen();
 } else if (target.webkitRequestFullscreen) {
  target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
 } else {
  return JSEvents.fullscreenEnabled() ? -3 : -1;
 }
 currentFullscreenStrategy = strategy;
 if (strategy.canvasResizedCallback) {
  (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ strategy.canvasResizedCallback, a1, a2, a3 ]);
  })(37, 0, strategy.canvasResizedCallbackUserData);
 }
 return 0;
}

function _emscripten_exit_fullscreen() {
 if (!JSEvents.fullscreenEnabled()) return -1;
 JSEvents.removeDeferredCalls(_JSEvents_requestFullscreen);
 var d = specialHTMLTargets[1];
 if (d.exitFullscreen) {
  d.fullscreenElement && d.exitFullscreen();
 } else if (d.webkitExitFullscreen) {
  d.webkitFullscreenElement && d.webkitExitFullscreen();
 } else {
  return -1;
 }
 return 0;
}

function requestPointerLock(target) {
 if (target.requestPointerLock) {
  target.requestPointerLock();
 } else if (target.msRequestPointerLock) {
  target.msRequestPointerLock();
 } else {
  if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
   return -3;
  } else {
   return -1;
  }
 }
 return 0;
}

function _emscripten_exit_pointerlock() {
 JSEvents.removeDeferredCalls(requestPointerLock);
 if (document.exitPointerLock) {
  document.exitPointerLock();
 } else if (document.msExitPointerLock) {
  document.msExitPointerLock();
 } else {
  return -1;
 }
 return 0;
}

function fillFullscreenChangeEventData(eventStruct) {
 var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
 var isFullscreen = !!fullscreenElement;
 HEAP32[eventStruct >> 2] = isFullscreen;
 HEAP32[eventStruct + 4 >> 2] = JSEvents.fullscreenEnabled();
 var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
 var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
 var id = reportedElement && reportedElement.id ? reportedElement.id : "";
 stringToUTF8(nodeName, eventStruct + 8, 128);
 stringToUTF8(id, eventStruct + 136, 128);
 HEAP32[eventStruct + 264 >> 2] = reportedElement ? reportedElement.clientWidth : 0;
 HEAP32[eventStruct + 268 >> 2] = reportedElement ? reportedElement.clientHeight : 0;
 HEAP32[eventStruct + 272 >> 2] = screen.width;
 HEAP32[eventStruct + 276 >> 2] = screen.height;
 if (isFullscreen) {
  JSEvents.previousFullscreenElement = fullscreenElement;
 }
}

function _emscripten_get_fullscreen_status(fullscreenStatus) {
 if (!JSEvents.fullscreenEnabled()) return -1;
 fillFullscreenChangeEventData(fullscreenStatus);
 return 0;
}

function fillGamepadEventData(eventStruct, e) {
 HEAPF64[eventStruct >> 3] = e.timestamp;
 for (var i = 0; i < e.axes.length; ++i) {
  HEAPF64[eventStruct + i * 8 + 16 >> 3] = e.axes[i];
 }
 for (var i = 0; i < e.buttons.length; ++i) {
  if (typeof e.buttons[i] === "object") {
   HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i].value;
  } else {
   HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i];
  }
 }
 for (var i = 0; i < e.buttons.length; ++i) {
  if (typeof e.buttons[i] === "object") {
   HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i].pressed;
  } else {
   HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i] == 1;
  }
 }
 HEAP32[eventStruct + 1296 >> 2] = e.connected;
 HEAP32[eventStruct + 1300 >> 2] = e.index;
 HEAP32[eventStruct + 8 >> 2] = e.axes.length;
 HEAP32[eventStruct + 12 >> 2] = e.buttons.length;
 stringToUTF8(e.id, eventStruct + 1304, 64);
 stringToUTF8(e.mapping, eventStruct + 1368, 64);
}

function _emscripten_get_gamepad_status(index, gamepadState) {
 if (!JSEvents.lastGamepadState) throw "emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
 if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
 if (!JSEvents.lastGamepadState[index]) return -7;
 fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
 return 0;
}

function _emscripten_get_heap_max() {
 return 2147483648;
}

function _emscripten_get_num_gamepads() {
 if (!JSEvents.lastGamepadState) throw "emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!";
 return JSEvents.lastGamepadState.length;
}

function _emscripten_html5_remove_all_event_listeners() {
 JSEvents.removeAllEventListeners();
}

function _emscripten_is_webgl_context_lost(contextHandle) {
 return !GL.contexts[contextHandle] || GL.contexts[contextHandle].GLctx.isContextLost();
}

function reallyNegative(x) {
 return x < 0 || x === 0 && 1 / x === -Infinity;
}

function convertI32PairToI53(lo, hi) {
 assert(hi === (hi | 0));
 return (lo >>> 0) + hi * 4294967296;
}

function convertU32PairToI53(lo, hi) {
 return (lo >>> 0) + (hi >>> 0) * 4294967296;
}

function reSign(value, bits) {
 if (value <= 0) {
  return value;
 }
 var half = bits <= 32 ? Math.abs(1 << bits - 1) : Math.pow(2, bits - 1);
 if (value >= half && (bits <= 32 || value > half)) {
  value = -2 * half + value;
 }
 return value;
}

function unSign(value, bits) {
 if (value >= 0) {
  return value;
 }
 return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value;
}

function formatString(format, varargs) {
 assert((varargs & 3) === 0);
 var textIndex = format;
 var argIndex = varargs;
 function prepVararg(ptr, type) {
  if (type === "double" || type === "i64") {
   if (ptr & 7) {
    assert((ptr & 7) === 4);
    ptr += 4;
   }
  } else {
   assert((ptr & 3) === 0);
  }
  return ptr;
 }
 function getNextArg(type) {
  var ret;
  argIndex = prepVararg(argIndex, type);
  if (type === "double") {
   ret = HEAPF64[argIndex >> 3];
   argIndex += 8;
  } else if (type == "i64") {
   ret = [ HEAP32[argIndex >> 2], HEAP32[argIndex + 4 >> 2] ];
   argIndex += 8;
  } else {
   assert((argIndex & 3) === 0);
   type = "i32";
   ret = HEAP32[argIndex >> 2];
   argIndex += 4;
  }
  return ret;
 }
 var ret = [];
 var curr, next, currArg;
 while (1) {
  var startTextIndex = textIndex;
  curr = HEAP8[textIndex >> 0];
  if (curr === 0) break;
  next = HEAP8[textIndex + 1 >> 0];
  if (curr == 37) {
   var flagAlwaysSigned = false;
   var flagLeftAlign = false;
   var flagAlternative = false;
   var flagZeroPad = false;
   var flagPadSign = false;
   flagsLoop: while (1) {
    switch (next) {
    case 43:
     flagAlwaysSigned = true;
     break;

    case 45:
     flagLeftAlign = true;
     break;

    case 35:
     flagAlternative = true;
     break;

    case 48:
     if (flagZeroPad) {
      break flagsLoop;
     } else {
      flagZeroPad = true;
      break;
     }

    case 32:
     flagPadSign = true;
     break;

    default:
     break flagsLoop;
    }
    textIndex++;
    next = HEAP8[textIndex + 1 >> 0];
   }
   var width = 0;
   if (next == 42) {
    width = getNextArg("i32");
    textIndex++;
    next = HEAP8[textIndex + 1 >> 0];
   } else {
    while (next >= 48 && next <= 57) {
     width = width * 10 + (next - 48);
     textIndex++;
     next = HEAP8[textIndex + 1 >> 0];
    }
   }
   var precisionSet = false, precision = -1;
   if (next == 46) {
    precision = 0;
    precisionSet = true;
    textIndex++;
    next = HEAP8[textIndex + 1 >> 0];
    if (next == 42) {
     precision = getNextArg("i32");
     textIndex++;
    } else {
     while (1) {
      var precisionChr = HEAP8[textIndex + 1 >> 0];
      if (precisionChr < 48 || precisionChr > 57) break;
      precision = precision * 10 + (precisionChr - 48);
      textIndex++;
     }
    }
    next = HEAP8[textIndex + 1 >> 0];
   }
   if (precision < 0) {
    precision = 6;
    precisionSet = false;
   }
   var argSize;
   switch (String.fromCharCode(next)) {
   case "h":
    var nextNext = HEAP8[textIndex + 2 >> 0];
    if (nextNext == 104) {
     textIndex++;
     argSize = 1;
    } else {
     argSize = 2;
    }
    break;

   case "l":
    var nextNext = HEAP8[textIndex + 2 >> 0];
    if (nextNext == 108) {
     textIndex++;
     argSize = 8;
    } else {
     argSize = 4;
    }
    break;

   case "L":
   case "q":
   case "j":
    argSize = 8;
    break;

   case "z":
   case "t":
   case "I":
    argSize = 4;
    break;

   default:
    argSize = null;
   }
   if (argSize) textIndex++;
   next = HEAP8[textIndex + 1 >> 0];
   switch (String.fromCharCode(next)) {
   case "d":
   case "i":
   case "u":
   case "o":
   case "x":
   case "X":
   case "p":
    {
     var signed = next == 100 || next == 105;
     argSize = argSize || 4;
     currArg = getNextArg("i" + argSize * 8);
     var argText;
     if (argSize == 8) {
      currArg = next == 117 ? convertU32PairToI53(currArg[0], currArg[1]) : convertI32PairToI53(currArg[0], currArg[1]);
     }
     if (argSize <= 4) {
      var limit = Math.pow(256, argSize) - 1;
      currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
     }
     var currAbsArg = Math.abs(currArg);
     var prefix = "";
     if (next == 100 || next == 105) {
      argText = reSign(currArg, 8 * argSize, 1).toString(10);
     } else if (next == 117) {
      argText = unSign(currArg, 8 * argSize, 1).toString(10);
      currArg = Math.abs(currArg);
     } else if (next == 111) {
      argText = (flagAlternative ? "0" : "") + currAbsArg.toString(8);
     } else if (next == 120 || next == 88) {
      prefix = flagAlternative && currArg != 0 ? "0x" : "";
      if (currArg < 0) {
       currArg = -currArg;
       argText = (currAbsArg - 1).toString(16);
       var buffer = [];
       for (var i = 0; i < argText.length; i++) {
        buffer.push((15 - parseInt(argText[i], 16)).toString(16));
       }
       argText = buffer.join("");
       while (argText.length < argSize * 2) argText = "f" + argText;
      } else {
       argText = currAbsArg.toString(16);
      }
      if (next == 88) {
       prefix = prefix.toUpperCase();
       argText = argText.toUpperCase();
      }
     } else if (next == 112) {
      if (currAbsArg === 0) {
       argText = "(nil)";
      } else {
       prefix = "0x";
       argText = currAbsArg.toString(16);
      }
     }
     if (precisionSet) {
      while (argText.length < precision) {
       argText = "0" + argText;
      }
     }
     if (currArg >= 0) {
      if (flagAlwaysSigned) {
       prefix = "+" + prefix;
      } else if (flagPadSign) {
       prefix = " " + prefix;
      }
     }
     if (argText.charAt(0) == "-") {
      prefix = "-" + prefix;
      argText = argText.substr(1);
     }
     while (prefix.length + argText.length < width) {
      if (flagLeftAlign) {
       argText += " ";
      } else {
       if (flagZeroPad) {
        argText = "0" + argText;
       } else {
        prefix = " " + prefix;
       }
      }
     }
     argText = prefix + argText;
     argText.split("").forEach(function(chr) {
      ret.push(chr.charCodeAt(0));
     });
     break;
    }

   case "f":
   case "F":
   case "e":
   case "E":
   case "g":
   case "G":
    {
     currArg = getNextArg("double");
     var argText;
     if (isNaN(currArg)) {
      argText = "nan";
      flagZeroPad = false;
     } else if (!isFinite(currArg)) {
      argText = (currArg < 0 ? "-" : "") + "inf";
      flagZeroPad = false;
     } else {
      var isGeneral = false;
      var effectivePrecision = Math.min(precision, 20);
      if (next == 103 || next == 71) {
       isGeneral = true;
       precision = precision || 1;
       var exponent = parseInt(currArg.toExponential(effectivePrecision).split("e")[1], 10);
       if (precision > exponent && exponent >= -4) {
        next = (next == 103 ? "f" : "F").charCodeAt(0);
        precision -= exponent + 1;
       } else {
        next = (next == 103 ? "e" : "E").charCodeAt(0);
        precision--;
       }
       effectivePrecision = Math.min(precision, 20);
      }
      if (next == 101 || next == 69) {
       argText = currArg.toExponential(effectivePrecision);
       if (/[eE][-+]\d$/.test(argText)) {
        argText = argText.slice(0, -1) + "0" + argText.slice(-1);
       }
      } else if (next == 102 || next == 70) {
       argText = currArg.toFixed(effectivePrecision);
       if (currArg === 0 && reallyNegative(currArg)) {
        argText = "-" + argText;
       }
      }
      var parts = argText.split("e");
      if (isGeneral && !flagAlternative) {
       while (parts[0].length > 1 && parts[0].includes(".") && (parts[0].slice(-1) == "0" || parts[0].slice(-1) == ".")) {
        parts[0] = parts[0].slice(0, -1);
       }
      } else {
       if (flagAlternative && argText.indexOf(".") == -1) parts[0] += ".";
       while (precision > effectivePrecision++) parts[0] += "0";
      }
      argText = parts[0] + (parts.length > 1 ? "e" + parts[1] : "");
      if (next == 69) argText = argText.toUpperCase();
      if (currArg >= 0) {
       if (flagAlwaysSigned) {
        argText = "+" + argText;
       } else if (flagPadSign) {
        argText = " " + argText;
       }
      }
     }
     while (argText.length < width) {
      if (flagLeftAlign) {
       argText += " ";
      } else {
       if (flagZeroPad && (argText[0] == "-" || argText[0] == "+")) {
        argText = argText[0] + "0" + argText.slice(1);
       } else {
        argText = (flagZeroPad ? "0" : " ") + argText;
       }
      }
     }
     if (next < 97) argText = argText.toUpperCase();
     argText.split("").forEach(function(chr) {
      ret.push(chr.charCodeAt(0));
     });
     break;
    }

   case "s":
    {
     var arg = getNextArg("i8*");
     var argLength = arg ? _strlen(arg) : "(null)".length;
     if (precisionSet) argLength = Math.min(argLength, precision);
     if (!flagLeftAlign) {
      while (argLength < width--) {
       ret.push(32);
      }
     }
     if (arg) {
      for (var i = 0; i < argLength; i++) {
       ret.push(HEAPU8[arg++ >> 0]);
      }
     } else {
      ret = ret.concat(intArrayFromString("(null)".substr(0, argLength), true));
     }
     if (flagLeftAlign) {
      while (argLength < width--) {
       ret.push(32);
      }
     }
     break;
    }

   case "c":
    {
     if (flagLeftAlign) ret.push(getNextArg("i8"));
     while (--width > 0) {
      ret.push(32);
     }
     if (!flagLeftAlign) ret.push(getNextArg("i8"));
     break;
    }

   case "n":
    {
     var ptr = getNextArg("i32*");
     HEAP32[ptr >> 2] = ret.length;
     break;
    }

   case "%":
    {
     ret.push(curr);
     break;
    }

   default:
    {
     for (var i = startTextIndex; i < textIndex + 2; i++) {
      ret.push(HEAP8[i >> 0]);
     }
    }
   }
   textIndex += 2;
  } else {
   ret.push(curr);
   textIndex += 1;
  }
 }
 return ret;
}

function traverseStack(args) {
 if (!args || !args.callee || !args.callee.name) {
  return [ null, "", "" ];
 }
 var funstr = args.callee.toString();
 var funcname = args.callee.name;
 var str = "(";
 var first = true;
 for (var i in args) {
  var a = args[i];
  if (!first) {
   str += ", ";
  }
  first = false;
  if (typeof a === "number" || typeof a === "string") {
   str += a;
  } else {
   str += "(" + typeof a + ")";
  }
 }
 str += ")";
 var caller = args.callee.caller;
 args = caller ? caller.arguments : [];
 if (first) str = "";
 return [ args, funcname, str ];
}

function _emscripten_get_callstack_js(flags) {
 var callstack = jsStackTrace();
 var iThisFunc = callstack.lastIndexOf("_emscripten_log");
 var iThisFunc2 = callstack.lastIndexOf("_emscripten_get_callstack");
 var iNextLine = callstack.indexOf("\n", Math.max(iThisFunc, iThisFunc2)) + 1;
 callstack = callstack.slice(iNextLine);
 if (flags & 32) {
  warnOnce("EM_LOG_DEMANGLE is deprecated; ignoring");
 }
 if (flags & 8 && typeof emscripten_source_map === "undefined") {
  warnOnce('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.');
  flags ^= 8;
  flags |= 16;
 }
 var stack_args = null;
 if (flags & 128) {
  stack_args = traverseStack(arguments);
  while (stack_args[1].includes("_emscripten_")) stack_args = traverseStack(stack_args[0]);
 }
 var lines = callstack.split("\n");
 callstack = "";
 var newFirefoxRe = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
 var firefoxRe = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
 var chromeRe = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
 for (var l in lines) {
  var line = lines[l];
  var symbolName = "";
  var file = "";
  var lineno = 0;
  var column = 0;
  var parts = chromeRe.exec(line);
  if (parts && parts.length == 5) {
   symbolName = parts[1];
   file = parts[2];
   lineno = parts[3];
   column = parts[4];
  } else {
   parts = newFirefoxRe.exec(line);
   if (!parts) parts = firefoxRe.exec(line);
   if (parts && parts.length >= 4) {
    symbolName = parts[1];
    file = parts[2];
    lineno = parts[3];
    column = parts[4] | 0;
   } else {
    callstack += line + "\n";
    continue;
   }
  }
  var haveSourceMap = false;
  if (flags & 8) {
   var orig = emscripten_source_map.originalPositionFor({
    line: lineno,
    column: column
   });
   haveSourceMap = orig && orig.source;
   if (haveSourceMap) {
    if (flags & 64) {
     orig.source = orig.source.substring(orig.source.replace(/\\/g, "/").lastIndexOf("/") + 1);
    }
    callstack += "    at " + symbolName + " (" + orig.source + ":" + orig.line + ":" + orig.column + ")\n";
   }
  }
  if (flags & 16 || !haveSourceMap) {
   if (flags & 64) {
    file = file.substring(file.replace(/\\/g, "/").lastIndexOf("/") + 1);
   }
   callstack += (haveSourceMap ? "     = " + symbolName : "    at " + symbolName) + " (" + file + ":" + lineno + ":" + column + ")\n";
  }
  if (flags & 128 && stack_args[0]) {
   if (stack_args[1] == symbolName && stack_args[2].length > 0) {
    callstack = callstack.replace(/\s+$/, "");
    callstack += " with values: " + stack_args[1] + stack_args[2] + "\n";
   }
   stack_args = traverseStack(stack_args[0]);
  }
 }
 callstack = callstack.replace(/\s+$/, "");
 return callstack;
}

function _emscripten_log_js(flags, str) {
 if (flags & 24) {
  str = str.replace(/\s+$/, "");
  str += (str.length > 0 ? "\n" : "") + _emscripten_get_callstack_js(flags);
 }
 if (flags & 1) {
  if (flags & 4) {
   console.error(str);
  } else if (flags & 2) {
   console.warn(str);
  } else if (flags & 512) {
   console.info(str);
  } else if (flags & 256) {
   console.debug(str);
  } else {
   console.log(str);
  }
 } else if (flags & 6) {
  err(str);
 } else {
  out(str);
 }
}

function _emscripten_log(flags, format, varargs) {
 var result = formatString(format, varargs);
 var str = UTF8ArrayToString(result, 0);
 _emscripten_log_js(flags, str);
}

function _longjmp(env, value) {
 _setThrew(env, value || 1);
 throw "longjmp";
}

function _emscripten_longjmp(a0, a1) {
 return _longjmp(a0, a1);
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.copyWithin(dest, src, src + num);
}

function doRequestFullscreen(target, strategy) {
 if (!JSEvents.fullscreenEnabled()) return -1;
 target = findEventTarget(target);
 if (!target) return -4;
 if (!target.requestFullscreen && !target.webkitRequestFullscreen) {
  return -3;
 }
 var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
 if (!canPerformRequests) {
  if (strategy.deferUntilInEventHandler) {
   JSEvents.deferCall(_JSEvents_requestFullscreen, 1, [ target, strategy ]);
   return 1;
  } else {
   return -2;
  }
 }
 return _JSEvents_requestFullscreen(target, strategy);
}

function _emscripten_request_fullscreen(target, deferUntilInEventHandler) {
 var strategy = {
  scaleMode: 0,
  canvasResolutionScaleMode: 0,
  filteringMode: 0,
  deferUntilInEventHandler: deferUntilInEventHandler,
  canvasResizedCallbackTargetThread: 2
 };
 return doRequestFullscreen(target, strategy);
}

function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
 target = findEventTarget(target);
 if (!target) return -4;
 if (!target.requestPointerLock && !target.msRequestPointerLock) {
  return -1;
 }
 var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
 if (!canPerformRequests) {
  if (deferUntilInEventHandler) {
   JSEvents.deferCall(requestPointerLock, 2, [ target ]);
   return 1;
  } else {
   return -2;
  }
 }
 return requestPointerLock(target);
}

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {
  console.error("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
 }
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 assert(requestedSize > oldSize);
 var maxHeapSize = 2147483648;
 if (requestedSize > maxHeapSize) {
  err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
  return false;
 }
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = emscripten_realloc_buffer(newSize);
  if (replacement) {
   return true;
  }
 }
 err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
 return false;
}

function _emscripten_sample_gamepad_data() {
 return (JSEvents.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1;
}

function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc(256);
 var focusEventHandlerFunc = function(ev) {
  var e = ev || event;
  var nodeName = JSEvents.getNodeNameForTarget(e.target);
  var id = e.target.id ? e.target.id : "";
  var focusEvent = JSEvents.focusEvent;
  stringToUTF8(nodeName, focusEvent + 0, 128);
  stringToUTF8(id, focusEvent + 128, 128);
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, focusEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: findEventTarget(target),
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: focusEventHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
 return 0;
}

function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
 return 0;
}

function registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc(280);
 var fullscreenChangeEventhandlerFunc = function(ev) {
  var e = ev || event;
  var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
  fillFullscreenChangeEventData(fullscreenChangeEvent);
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: target,
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: fullscreenChangeEventhandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 if (!JSEvents.fullscreenEnabled()) return -1;
 target = findEventTarget(target);
 if (!target) return -4;
 registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
 registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
 return 0;
}

function registerGamepadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc(1432);
 var gamepadEventHandlerFunc = function(ev) {
  var e = ev || event;
  var gamepadEvent = JSEvents.gamepadEvent;
  fillGamepadEventData(gamepadEvent, e["gamepad"]);
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, gamepadEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: findEventTarget(target),
  allowsDeferredCalls: true,
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: gamepadEventHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
 if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
 registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
 return 0;
}

function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
 if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
 registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
 return 0;
}

function _emscripten_set_interval(cb, msecs, userData) {
 return setInterval(function() {
  (function(a1) {
   dynCall_vi.apply(null, [ cb, a1 ]);
  })(userData);
 }, msecs);
}

function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc(164);
 var keyEventHandlerFunc = function(e) {
  assert(e);
  var keyEventData = JSEvents.keyEvent;
  var idx = keyEventData >> 2;
  HEAP32[idx + 0] = e.location;
  HEAP32[idx + 1] = e.ctrlKey;
  HEAP32[idx + 2] = e.shiftKey;
  HEAP32[idx + 3] = e.altKey;
  HEAP32[idx + 4] = e.metaKey;
  HEAP32[idx + 5] = e.repeat;
  HEAP32[idx + 6] = e.charCode;
  HEAP32[idx + 7] = e.keyCode;
  HEAP32[idx + 8] = e.which;
  stringToUTF8(e.key || "", keyEventData + 36, 32);
  stringToUTF8(e.code || "", keyEventData + 68, 32);
  stringToUTF8(e.char || "", keyEventData + 100, 32);
  stringToUTF8(e.locale || "", keyEventData + 132, 32);
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, keyEventData, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: findEventTarget(target),
  allowsDeferredCalls: true,
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: keyEventHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
 return 0;
}

function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
 return 0;
}

function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
 return 0;
}

function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
 var browserIterationFunc = function() {
  dynCall_v.call(null, func);
 };
 setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
}

function fillMouseEventData(eventStruct, e, target) {
 assert(eventStruct % 4 == 0);
 var idx = eventStruct >> 2;
 HEAP32[idx + 0] = e.screenX;
 HEAP32[idx + 1] = e.screenY;
 HEAP32[idx + 2] = e.clientX;
 HEAP32[idx + 3] = e.clientY;
 HEAP32[idx + 4] = e.ctrlKey;
 HEAP32[idx + 5] = e.shiftKey;
 HEAP32[idx + 6] = e.altKey;
 HEAP32[idx + 7] = e.metaKey;
 HEAP16[idx * 2 + 16] = e.button;
 HEAP16[idx * 2 + 17] = e.buttons;
 HEAP32[idx + 9] = e["movementX"];
 HEAP32[idx + 10] = e["movementY"];
 var rect = getBoundingClientRect(target);
 HEAP32[idx + 11] = e.clientX - rect.left;
 HEAP32[idx + 12] = e.clientY - rect.top;
}

function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(64);
 target = findEventTarget(target);
 var mouseEventHandlerFunc = function(ev) {
  var e = ev || event;
  fillMouseEventData(JSEvents.mouseEvent, e, target);
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: target,
  allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: mouseEventHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
 return 0;
}

function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
 return 0;
}

function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
 return 0;
}

function registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc(1684);
 target = findEventTarget(target);
 var touchEventHandlerFunc = function(e) {
  assert(e);
  var t, touches = {}, et = e.touches;
  for (var i = 0; i < et.length; ++i) {
   t = et[i];
   t.isChanged = t.onTarget = 0;
   touches[t.identifier] = t;
  }
  for (var i = 0; i < e.changedTouches.length; ++i) {
   t = e.changedTouches[i];
   t.isChanged = 1;
   touches[t.identifier] = t;
  }
  for (var i = 0; i < e.targetTouches.length; ++i) {
   touches[e.targetTouches[i].identifier].onTarget = 1;
  }
  var touchEvent = JSEvents.touchEvent;
  var idx = touchEvent >> 2;
  HEAP32[idx + 1] = e.ctrlKey;
  HEAP32[idx + 2] = e.shiftKey;
  HEAP32[idx + 3] = e.altKey;
  HEAP32[idx + 4] = e.metaKey;
  idx += 5;
  var targetRect = getBoundingClientRect(target);
  var numTouches = 0;
  for (var i in touches) {
   var t = touches[i];
   HEAP32[idx + 0] = t.identifier;
   HEAP32[idx + 1] = t.screenX;
   HEAP32[idx + 2] = t.screenY;
   HEAP32[idx + 3] = t.clientX;
   HEAP32[idx + 4] = t.clientY;
   HEAP32[idx + 5] = t.pageX;
   HEAP32[idx + 6] = t.pageY;
   HEAP32[idx + 7] = t.isChanged;
   HEAP32[idx + 8] = t.onTarget;
   HEAP32[idx + 9] = t.clientX - targetRect.left;
   HEAP32[idx + 10] = t.clientY - targetRect.top;
   idx += 13;
   if (++numTouches > 31) {
    break;
   }
  }
  HEAP32[touchEvent >> 2] = numTouches;
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, touchEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: target,
  allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: touchEventHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
 return 0;
}

function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
 return 0;
}

function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
 return 0;
}

function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
 return 0;
}

function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
 if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc(96);
 var wheelHandlerFunc = function(ev) {
  var e = ev || event;
  var wheelEvent = JSEvents.wheelEvent;
  fillMouseEventData(wheelEvent, e, target);
  HEAPF64[wheelEvent + 64 >> 3] = e["deltaX"];
  HEAPF64[wheelEvent + 72 >> 3] = e["deltaY"];
  HEAPF64[wheelEvent + 80 >> 3] = e["deltaZ"];
  HEAP32[wheelEvent + 88 >> 2] = e["deltaMode"];
  if (function(a1, a2, a3) {
   return dynCall_iiii.apply(null, [ callbackfunc, a1, a2, a3 ]);
  }(eventTypeId, wheelEvent, userData)) e.preventDefault();
 };
 var eventHandler = {
  target: target,
  allowsDeferredCalls: true,
  eventTypeString: eventTypeString,
  callbackfunc: callbackfunc,
  handlerFunc: wheelHandlerFunc,
  useCapture: useCapture
 };
 JSEvents.registerOrRemoveHandler(eventHandler);
}

function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
 target = findEventTarget(target);
 if (typeof target.onwheel !== "undefined") {
  registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
  return 0;
 } else {
  return -1;
 }
}

function _emscripten_thread_sleep(msecs) {
 var start = _emscripten_get_now();
 while (_emscripten_get_now() - start < msecs) {}
}

function __webgl_enable_ANGLE_instanced_arrays(ctx) {
 var ext = ctx.getExtension("ANGLE_instanced_arrays");
 if (ext) {
  ctx["vertexAttribDivisor"] = function(index, divisor) {
   ext["vertexAttribDivisorANGLE"](index, divisor);
  };
  ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
   ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
  };
  ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
   ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
  };
  return 1;
 }
}

function __webgl_enable_OES_vertex_array_object(ctx) {
 var ext = ctx.getExtension("OES_vertex_array_object");
 if (ext) {
  ctx["createVertexArray"] = function() {
   return ext["createVertexArrayOES"]();
  };
  ctx["deleteVertexArray"] = function(vao) {
   ext["deleteVertexArrayOES"](vao);
  };
  ctx["bindVertexArray"] = function(vao) {
   ext["bindVertexArrayOES"](vao);
  };
  ctx["isVertexArray"] = function(vao) {
   return ext["isVertexArrayOES"](vao);
  };
  return 1;
 }
}

function __webgl_enable_WEBGL_draw_buffers(ctx) {
 var ext = ctx.getExtension("WEBGL_draw_buffers");
 if (ext) {
  ctx["drawBuffers"] = function(n, bufs) {
   ext["drawBuffersWEBGL"](n, bufs);
  };
  return 1;
 }
}

function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
 return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
}

function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
 return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
}

function __webgl_enable_WEBGL_multi_draw(ctx) {
 return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
}

var GL = {
 counter: 1,
 buffers: [],
 mappedBuffers: {},
 programs: [],
 framebuffers: [],
 renderbuffers: [],
 textures: [],
 shaders: [],
 vaos: [],
 contexts: [],
 offscreenCanvases: {},
 queries: [],
 samplers: [],
 transformFeedbacks: [],
 syncs: [],
 byteSizeByTypeRoot: 5120,
 byteSizeByType: [ 1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8 ],
 stringCache: {},
 stringiCache: {},
 unpackAlignment: 4,
 recordError: function recordError(errorCode) {
  if (!GL.lastError) {
   GL.lastError = errorCode;
  }
 },
 getNewId: function(table) {
  var ret = GL.counter++;
  for (var i = table.length; i < ret; i++) {
   table[i] = null;
  }
  return ret;
 },
 MAX_TEMP_BUFFER_SIZE: 2097152,
 numTempVertexBuffersPerSize: 64,
 log2ceilLookup: function(i) {
  return 32 - Math.clz32(i === 0 ? 0 : i - 1);
 },
 generateTempBuffers: function(quads, context) {
  var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
  context.tempVertexBufferCounters1 = [];
  context.tempVertexBufferCounters2 = [];
  context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex + 1;
  context.tempVertexBuffers1 = [];
  context.tempVertexBuffers2 = [];
  context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex + 1;
  context.tempIndexBuffers = [];
  context.tempIndexBuffers.length = largestIndex + 1;
  for (var i = 0; i <= largestIndex; ++i) {
   context.tempIndexBuffers[i] = null;
   context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
   var ringbufferLength = GL.numTempVertexBuffersPerSize;
   context.tempVertexBuffers1[i] = [];
   context.tempVertexBuffers2[i] = [];
   var ringbuffer1 = context.tempVertexBuffers1[i];
   var ringbuffer2 = context.tempVertexBuffers2[i];
   ringbuffer1.length = ringbuffer2.length = ringbufferLength;
   for (var j = 0; j < ringbufferLength; ++j) {
    ringbuffer1[j] = ringbuffer2[j] = null;
   }
  }
  if (quads) {
   context.tempQuadIndexBuffer = GLctx.createBuffer();
   context.GLctx.bindBuffer(34963, context.tempQuadIndexBuffer);
   var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
   var quadIndexes = new Uint16Array(numIndexes);
   var i = 0, v = 0;
   while (1) {
    quadIndexes[i++] = v;
    if (i >= numIndexes) break;
    quadIndexes[i++] = v + 1;
    if (i >= numIndexes) break;
    quadIndexes[i++] = v + 2;
    if (i >= numIndexes) break;
    quadIndexes[i++] = v;
    if (i >= numIndexes) break;
    quadIndexes[i++] = v + 2;
    if (i >= numIndexes) break;
    quadIndexes[i++] = v + 3;
    if (i >= numIndexes) break;
    v += 4;
   }
   context.GLctx.bufferData(34963, quadIndexes, 35044);
   context.GLctx.bindBuffer(34963, null);
  }
 },
 getTempVertexBuffer: function getTempVertexBuffer(sizeBytes) {
  var idx = GL.log2ceilLookup(sizeBytes);
  var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
  var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
  GL.currentContext.tempVertexBufferCounters1[idx] = GL.currentContext.tempVertexBufferCounters1[idx] + 1 & GL.numTempVertexBuffersPerSize - 1;
  var vbo = ringbuffer[nextFreeBufferIndex];
  if (vbo) {
   return vbo;
  }
  var prevVBO = GLctx.getParameter(34964);
  ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
  GLctx.bindBuffer(34962, ringbuffer[nextFreeBufferIndex]);
  GLctx.bufferData(34962, 1 << idx, 35048);
  GLctx.bindBuffer(34962, prevVBO);
  return ringbuffer[nextFreeBufferIndex];
 },
 getTempIndexBuffer: function getTempIndexBuffer(sizeBytes) {
  var idx = GL.log2ceilLookup(sizeBytes);
  var ibo = GL.currentContext.tempIndexBuffers[idx];
  if (ibo) {
   return ibo;
  }
  var prevIBO = GLctx.getParameter(34965);
  GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
  GLctx.bindBuffer(34963, GL.currentContext.tempIndexBuffers[idx]);
  GLctx.bufferData(34963, 1 << idx, 35048);
  GLctx.bindBuffer(34963, prevIBO);
  return GL.currentContext.tempIndexBuffers[idx];
 },
 newRenderingFrameStarted: function newRenderingFrameStarted() {
  if (!GL.currentContext) {
   return;
  }
  var vb = GL.currentContext.tempVertexBuffers1;
  GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
  GL.currentContext.tempVertexBuffers2 = vb;
  vb = GL.currentContext.tempVertexBufferCounters1;
  GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
  GL.currentContext.tempVertexBufferCounters2 = vb;
  var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
  for (var i = 0; i <= largestIndex; ++i) {
   GL.currentContext.tempVertexBufferCounters1[i] = 0;
  }
 },
 getSource: function(shader, count, string, length) {
  var source = "";
  for (var i = 0; i < count; ++i) {
   var len = length ? HEAP32[length + i * 4 >> 2] : -1;
   source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len);
  }
  return source;
 },
 calcBufLength: function calcBufLength(size, type, stride, count) {
  if (stride > 0) {
   return count * stride;
  }
  var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
  return size * typeSize * count;
 },
 usedTempBuffers: [],
 preDrawHandleClientVertexAttribBindings: function preDrawHandleClientVertexAttribBindings(count) {
  GL.resetBufferBinding = false;
  for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
   var cb = GL.currentContext.clientBuffers[i];
   if (!cb.clientside || !cb.enabled) continue;
   GL.resetBufferBinding = true;
   var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
   var buf = GL.getTempVertexBuffer(size);
   GLctx.bindBuffer(34962, buf);
   GLctx.bufferSubData(34962, 0, HEAPU8.subarray(cb.ptr, cb.ptr + size));
   cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0);
  }
 },
 postDrawHandleClientVertexAttribBindings: function postDrawHandleClientVertexAttribBindings() {
  if (GL.resetBufferBinding) {
   GLctx.bindBuffer(34962, GL.buffers[GLctx.currentArrayBufferBinding]);
  }
 },
 createContext: function(canvas, webGLContextAttributes) {
  if (!canvas.getContextSafariWebGL2Fixed) {
   canvas.getContextSafariWebGL2Fixed = canvas.getContext;
   canvas.getContext = function(ver, attrs) {
    var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
    return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null;
   };
  }
  var ctx = webGLContextAttributes.majorVersion > 1 ? canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes);
  if (!ctx) return 0;
  var handle = GL.registerContext(ctx, webGLContextAttributes);
  return handle;
 },
 registerContext: function(ctx, webGLContextAttributes) {
  var handle = GL.getNewId(GL.contexts);
  var context = {
   handle: handle,
   attributes: webGLContextAttributes,
   version: webGLContextAttributes.majorVersion,
   GLctx: ctx
  };
  if (ctx.canvas) ctx.canvas.GLctxObject = context;
  GL.contexts[handle] = context;
  if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
   GL.initExtensions(context);
  }
  context.maxVertexAttribs = context.GLctx.getParameter(34921);
  context.clientBuffers = [];
  for (var i = 0; i < context.maxVertexAttribs; i++) {
   context.clientBuffers[i] = {
    enabled: false,
    clientside: false,
    size: 0,
    type: 0,
    normalized: 0,
    stride: 0,
    ptr: 0,
    vertexAttribPointerAdaptor: null
   };
  }
  GL.generateTempBuffers(false, context);
  return handle;
 },
 makeContextCurrent: function(contextHandle) {
  GL.currentContext = GL.contexts[contextHandle];
  Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
  return !(contextHandle && !GLctx);
 },
 getContext: function(contextHandle) {
  return GL.contexts[contextHandle];
 },
 deleteContext: function(contextHandle) {
  if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
  if (typeof JSEvents === "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
  if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
  GL.contexts[contextHandle] = null;
 },
 initExtensions: function(context) {
  if (!context) context = GL.currentContext;
  if (context.initExtensionsDone) return;
  context.initExtensionsDone = true;
  var GLctx = context.GLctx;
  __webgl_enable_ANGLE_instanced_arrays(GLctx);
  __webgl_enable_OES_vertex_array_object(GLctx);
  __webgl_enable_WEBGL_draw_buffers(GLctx);
  __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
  __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  if (context.version >= 2) {
   GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
  }
  if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
   GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
  }
  __webgl_enable_WEBGL_multi_draw(GLctx);
  var exts = GLctx.getSupportedExtensions() || [];
  exts.forEach(function(ext) {
   if (!ext.includes("lose_context") && !ext.includes("debug")) {
    GLctx.getExtension(ext);
   }
  });
 }
};

var __emscripten_webgl_power_preferences = [ "default", "low-power", "high-performance" ];

function _emscripten_webgl_do_create_context(target, attributes) {
 assert(attributes);
 var a = attributes >> 2;
 var powerPreference = HEAP32[a + (24 >> 2)];
 var contextAttributes = {
  "alpha": !!HEAP32[a + (0 >> 2)],
  "depth": !!HEAP32[a + (4 >> 2)],
  "stencil": !!HEAP32[a + (8 >> 2)],
  "antialias": !!HEAP32[a + (12 >> 2)],
  "premultipliedAlpha": !!HEAP32[a + (16 >> 2)],
  "preserveDrawingBuffer": !!HEAP32[a + (20 >> 2)],
  "powerPreference": __emscripten_webgl_power_preferences[powerPreference],
  "failIfMajorPerformanceCaveat": !!HEAP32[a + (28 >> 2)],
  majorVersion: HEAP32[a + (32 >> 2)],
  minorVersion: HEAP32[a + (36 >> 2)],
  enableExtensionsByDefault: HEAP32[a + (40 >> 2)],
  explicitSwapControl: HEAP32[a + (44 >> 2)],
  proxyContextToMainThread: HEAP32[a + (48 >> 2)],
  renderViaOffscreenBackBuffer: HEAP32[a + (52 >> 2)]
 };
 var canvas = findCanvasEventTarget(target);
 if (!canvas) {
  return 0;
 }
 if (contextAttributes.explicitSwapControl) {
  return 0;
 }
 var contextHandle = GL.createContext(canvas, contextAttributes);
 return contextHandle;
}

function _emscripten_webgl_create_context(a0, a1) {
 return _emscripten_webgl_do_create_context(a0, a1);
}

function _emscripten_webgl_do_get_current_context() {
 return GL.currentContext ? GL.currentContext.handle : 0;
}

function _emscripten_webgl_get_current_context() {
 return _emscripten_webgl_do_get_current_context();
}

Module["_emscripten_webgl_get_current_context"] = _emscripten_webgl_get_current_context;

function _emscripten_webgl_make_context_current(contextHandle) {
 var success = GL.makeContextCurrent(contextHandle);
 return success ? 0 : -5;
}

Module["_emscripten_webgl_make_context_current"] = _emscripten_webgl_make_context_current;

function _emscripten_webgl_destroy_context(contextHandle) {
 if (GL.currentContext == contextHandle) GL.currentContext = 0;
 GL.deleteContext(contextHandle);
}

function _emscripten_webgl_enable_extension(contextHandle, extension) {
 var context = GL.getContext(contextHandle);
 var extString = UTF8ToString(extension);
 if (extString.startsWith("GL_")) extString = extString.substr(3);
 if (extString == "ANGLE_instanced_arrays") __webgl_enable_ANGLE_instanced_arrays(GLctx);
 if (extString == "OES_vertex_array_object") __webgl_enable_OES_vertex_array_object(GLctx);
 if (extString == "WEBGL_draw_buffers") __webgl_enable_WEBGL_draw_buffers(GLctx);
 if (extString == "WEBGL_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
 if (extString == "WEBGL_multi_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
 if (extString == "WEBGL_multi_draw") __webgl_enable_WEBGL_multi_draw(GLctx);
 var ext = context.GLctx.getExtension(extString);
 return !!ext;
}

function _emscripten_webgl_init_context_attributes(attributes) {
 assert(attributes);
 var a = attributes >> 2;
 for (var i = 0; i < 56 >> 2; ++i) {
  HEAP32[a + i] = 0;
 }
 HEAP32[a + (0 >> 2)] = HEAP32[a + (4 >> 2)] = HEAP32[a + (12 >> 2)] = HEAP32[a + (16 >> 2)] = HEAP32[a + (32 >> 2)] = HEAP32[a + (40 >> 2)] = 1;
}

var ENV = {};

function getExecutableName() {
 return thisProgram || "./this.program";
}

function getEnvStrings() {
 if (!getEnvStrings.strings) {
  var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(x + "=" + env[x]);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
}

function _environ_get(__environ, environ_buf) {
 try {
  var bufSize = 0;
  getEnvStrings().forEach(function(string, i) {
   var ptr = environ_buf + bufSize;
   HEAP32[__environ + i * 4 >> 2] = ptr;
   writeAsciiToMemory(string, ptr);
   bufSize += string.length + 1;
  });
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
 try {
  var strings = getEnvStrings();
  HEAP32[penviron_count >> 2] = strings.length;
  var bufSize = 0;
  strings.forEach(function(string) {
   bufSize += string.length + 1;
  });
  HEAP32[penviron_buf_size >> 2] = bufSize;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_close(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_fdstat_get(fd, pbuf) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
  HEAP8[pbuf >> 0] = type;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_read(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = SYSCALLS.doReadv(stream, iov, iovcnt);
  HEAP32[pnum >> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var HIGH_OFFSET = 4294967296;
  var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  var DOUBLE_LIMIT = 9007199254740992;
  if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
   return -61;
  }
  FS.llseek(stream, offset, whence);
  tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_write(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = SYSCALLS.doWritev(stream, iov, iovcnt);
  HEAP32[pnum >> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _flock(fd, operation) {
 return 0;
}

function _getTempRet0() {
 return getTempRet0();
}

function _getaddrinfo(node, service, hint, out) {
 var addr = 0;
 var port = 0;
 var flags = 0;
 var family = 0;
 var type = 0;
 var proto = 0;
 var ai;
 function allocaddrinfo(family, type, proto, canon, addr, port) {
  var sa, salen, ai;
  var errno;
  salen = family === 10 ? 28 : 16;
  addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
  sa = _malloc(salen);
  errno = writeSockaddr(sa, family, addr, port);
  assert(!errno);
  ai = _malloc(32);
  HEAP32[ai + 4 >> 2] = family;
  HEAP32[ai + 8 >> 2] = type;
  HEAP32[ai + 12 >> 2] = proto;
  HEAP32[ai + 24 >> 2] = canon;
  HEAP32[ai + 20 >> 2] = sa;
  if (family === 10) {
   HEAP32[ai + 16 >> 2] = 28;
  } else {
   HEAP32[ai + 16 >> 2] = 16;
  }
  HEAP32[ai + 28 >> 2] = 0;
  return ai;
 }
 if (hint) {
  flags = HEAP32[hint >> 2];
  family = HEAP32[hint + 4 >> 2];
  type = HEAP32[hint + 8 >> 2];
  proto = HEAP32[hint + 12 >> 2];
 }
 if (type && !proto) {
  proto = type === 2 ? 17 : 6;
 }
 if (!type && proto) {
  type = proto === 17 ? 2 : 1;
 }
 if (proto === 0) {
  proto = 6;
 }
 if (type === 0) {
  type = 1;
 }
 if (!node && !service) {
  return -2;
 }
 if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
  return -1;
 }
 if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
  return -1;
 }
 if (flags & 32) {
  return -2;
 }
 if (type !== 0 && type !== 1 && type !== 2) {
  return -7;
 }
 if (family !== 0 && family !== 2 && family !== 10) {
  return -6;
 }
 if (service) {
  service = UTF8ToString(service);
  port = parseInt(service, 10);
  if (isNaN(port)) {
   if (flags & 1024) {
    return -2;
   }
   return -8;
  }
 }
 if (!node) {
  if (family === 0) {
   family = 2;
  }
  if ((flags & 1) === 0) {
   if (family === 2) {
    addr = _htonl(2130706433);
   } else {
    addr = [ 0, 0, 0, 1 ];
   }
  }
  ai = allocaddrinfo(family, type, proto, null, addr, port);
  HEAP32[out >> 2] = ai;
  return 0;
 }
 node = UTF8ToString(node);
 addr = inetPton4(node);
 if (addr !== null) {
  if (family === 0 || family === 2) {
   family = 2;
  } else if (family === 10 && flags & 8) {
   addr = [ 0, 0, _htonl(65535), addr ];
   family = 10;
  } else {
   return -2;
  }
 } else {
  addr = inetPton6(node);
  if (addr !== null) {
   if (family === 0 || family === 10) {
    family = 10;
   } else {
    return -2;
   }
  }
 }
 if (addr != null) {
  ai = allocaddrinfo(family, type, proto, node, addr, port);
  HEAP32[out >> 2] = ai;
  return 0;
 }
 if (flags & 4) {
  return -2;
 }
 node = DNS.lookup_name(node);
 addr = inetPton4(node);
 if (family === 0) {
  family = 2;
 } else if (family === 10) {
  addr = [ 0, 0, _htonl(65535), addr ];
 }
 ai = allocaddrinfo(family, type, proto, null, addr, port);
 HEAP32[out >> 2] = ai;
 return 0;
}

function getHostByName(name) {
 var ret = _malloc(20);
 var nameBuf = _malloc(name.length + 1);
 stringToUTF8(name, nameBuf, name.length + 1);
 HEAP32[ret >> 2] = nameBuf;
 var aliasesBuf = _malloc(4);
 HEAP32[aliasesBuf >> 2] = 0;
 HEAP32[ret + 4 >> 2] = aliasesBuf;
 var afinet = 2;
 HEAP32[ret + 8 >> 2] = afinet;
 HEAP32[ret + 12 >> 2] = 4;
 var addrListBuf = _malloc(12);
 HEAP32[addrListBuf >> 2] = addrListBuf + 8;
 HEAP32[addrListBuf + 4 >> 2] = 0;
 HEAP32[addrListBuf + 8 >> 2] = inetPton4(DNS.lookup_name(name));
 HEAP32[ret + 16 >> 2] = addrListBuf;
 return ret;
}

function _gethostbyaddr(addr, addrlen, type) {
 if (type !== 2) {
  setErrNo(5);
  return null;
 }
 addr = HEAP32[addr >> 2];
 var host = inetNtop4(addr);
 var lookup = DNS.lookup_addr(host);
 if (lookup) {
  host = lookup;
 }
 return getHostByName(host);
}

function _gethostbyname(name) {
 return getHostByName(UTF8ToString(name));
}

function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
 var info = readSockaddr(sa, salen);
 if (info.errno) {
  return -6;
 }
 var port = info.port;
 var addr = info.addr;
 var overflowed = false;
 if (node && nodelen) {
  var lookup;
  if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
   if (flags & 8) {
    return -2;
   }
  } else {
   addr = lookup;
  }
  var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  if (numBytesWrittenExclNull + 1 >= nodelen) {
   overflowed = true;
  }
 }
 if (serv && servlen) {
  port = "" + port;
  var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  if (numBytesWrittenExclNull + 1 >= servlen) {
   overflowed = true;
  }
 }
 if (overflowed) {
  return -12;
 }
 return 0;
}

function _getpwuid() {
 throw "getpwuid: TODO";
}

function _gettimeofday(ptr) {
 var now = Date.now();
 HEAP32[ptr >> 2] = now / 1e3 | 0;
 HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
 return 0;
}

function _glActiveTexture(x0) {
 GLctx["activeTexture"](x0);
}

function _glAttachShader(program, shader) {
 program = GL.programs[program];
 shader = GL.shaders[shader];
 program[shader.shaderType] = shader;
 GLctx.attachShader(program, shader);
}

function _glBeginQuery(target, id) {
 GLctx["beginQuery"](target, GL.queries[id]);
}

function _glBeginTransformFeedback(x0) {
 GLctx["beginTransformFeedback"](x0);
}

function _glBindAttribLocation(program, index, name) {
 GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
}

function _glBindBuffer(target, buffer) {
 if (target == 34962) {
  GLctx.currentArrayBufferBinding = buffer;
 } else if (target == 34963) {
  GLctx.currentElementArrayBufferBinding = buffer;
 }
 if (target == 35051) {
  GLctx.currentPixelPackBufferBinding = buffer;
 } else if (target == 35052) {
  GLctx.currentPixelUnpackBufferBinding = buffer;
 }
 GLctx.bindBuffer(target, GL.buffers[buffer]);
}

function _glBindBufferBase(target, index, buffer) {
 GLctx["bindBufferBase"](target, index, GL.buffers[buffer]);
}

function _glBindBufferRange(target, index, buffer, offset, ptrsize) {
 GLctx["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize);
}

function _glBindFramebuffer(target, framebuffer) {
 GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
}

function _glBindRenderbuffer(target, renderbuffer) {
 GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
}

function _glBindSampler(unit, sampler) {
 GLctx["bindSampler"](unit, GL.samplers[sampler]);
}

function _glBindTexture(target, texture) {
 GLctx.bindTexture(target, GL.textures[texture]);
}

function _glBindTransformFeedback(target, id) {
 GLctx["bindTransformFeedback"](target, GL.transformFeedbacks[id]);
}

function _glBindVertexArray(vao) {
 GLctx["bindVertexArray"](GL.vaos[vao]);
 var ibo = GLctx.getParameter(34965);
 GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0;
}

function _glBlendEquation(x0) {
 GLctx["blendEquation"](x0);
}

function _glBlendEquationSeparate(x0, x1) {
 GLctx["blendEquationSeparate"](x0, x1);
}

function _glBlendFuncSeparate(x0, x1, x2, x3) {
 GLctx["blendFuncSeparate"](x0, x1, x2, x3);
}

function _glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
 GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
}

function _glBufferData(target, size, data, usage) {
 if (GL.currentContext.version >= 2) {
  if (data) {
   GLctx.bufferData(target, HEAPU8, usage, data, size);
  } else {
   GLctx.bufferData(target, size, usage);
  }
 } else {
  GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage);
 }
}

function _glBufferSubData(target, offset, size, data) {
 if (GL.currentContext.version >= 2) {
  GLctx.bufferSubData(target, offset, HEAPU8, data, size);
  return;
 }
 GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size));
}

function _glCheckFramebufferStatus(x0) {
 return GLctx["checkFramebufferStatus"](x0);
}

function _glClear(x0) {
 GLctx["clear"](x0);
}

function _glClearBufferfi(x0, x1, x2, x3) {
 GLctx["clearBufferfi"](x0, x1, x2, x3);
}

function _glClearBufferfv(buffer, drawbuffer, value) {
 GLctx["clearBufferfv"](buffer, drawbuffer, HEAPF32, value >> 2);
}

function _glClearBufferuiv(buffer, drawbuffer, value) {
 GLctx["clearBufferuiv"](buffer, drawbuffer, HEAPU32, value >> 2);
}

function _glClearColor(x0, x1, x2, x3) {
 GLctx["clearColor"](x0, x1, x2, x3);
}

function _glClearDepthf(x0) {
 GLctx["clearDepth"](x0);
}

function _glClearStencil(x0) {
 GLctx["clearStencil"](x0);
}

function _glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
 return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi));
}

function _glColorMask(red, green, blue, alpha) {
 GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
}

function _glCompileShader(shader) {
 GLctx.compileShader(GL.shaders[shader]);
}

function _glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data);
  } else {
   GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize);
  }
  return;
 }
 GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null);
}

function _glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, imageSize, data);
 } else {
  GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize);
 }
}

function _glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data);
  } else {
   GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize);
  }
  return;
 }
 GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null);
}

function _glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data);
 } else {
  GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize);
 }
}

function _glCopyBufferSubData(x0, x1, x2, x3, x4) {
 GLctx["copyBufferSubData"](x0, x1, x2, x3, x4);
}

function _glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
 GLctx["copyTexImage2D"](x0, x1, x2, x3, x4, x5, x6, x7);
}

function _glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
 GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7);
}

function _glCreateProgram() {
 var id = GL.getNewId(GL.programs);
 var program = GLctx.createProgram();
 program.name = id;
 program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
 program.uniformIdCounter = 1;
 GL.programs[id] = program;
 return id;
}

function _glCreateShader(shaderType) {
 var id = GL.getNewId(GL.shaders);
 GL.shaders[id] = GLctx.createShader(shaderType);
 GL.shaders[id].shaderType = shaderType & 1 ? "vs" : "fs";
 return id;
}

function _glCullFace(x0) {
 GLctx["cullFace"](x0);
}

function _glDeleteBuffers(n, buffers) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[buffers + i * 4 >> 2];
  var buffer = GL.buffers[id];
  if (!buffer) continue;
  GLctx.deleteBuffer(buffer);
  buffer.name = 0;
  GL.buffers[id] = null;
  if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
  if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
  if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
  if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
 }
}

function _glDeleteFramebuffers(n, framebuffers) {
 for (var i = 0; i < n; ++i) {
  var id = HEAP32[framebuffers + i * 4 >> 2];
  var framebuffer = GL.framebuffers[id];
  if (!framebuffer) continue;
  GLctx.deleteFramebuffer(framebuffer);
  framebuffer.name = 0;
  GL.framebuffers[id] = null;
 }
}

function _glDeleteProgram(id) {
 if (!id) return;
 var program = GL.programs[id];
 if (!program) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteProgram(program);
 program.name = 0;
 GL.programs[id] = null;
}

function _glDeleteQueries(n, ids) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[ids + i * 4 >> 2];
  var query = GL.queries[id];
  if (!query) continue;
  GLctx["deleteQuery"](query);
  GL.queries[id] = null;
 }
}

function _glDeleteRenderbuffers(n, renderbuffers) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[renderbuffers + i * 4 >> 2];
  var renderbuffer = GL.renderbuffers[id];
  if (!renderbuffer) continue;
  GLctx.deleteRenderbuffer(renderbuffer);
  renderbuffer.name = 0;
  GL.renderbuffers[id] = null;
 }
}

function _glDeleteSamplers(n, samplers) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[samplers + i * 4 >> 2];
  var sampler = GL.samplers[id];
  if (!sampler) continue;
  GLctx["deleteSampler"](sampler);
  sampler.name = 0;
  GL.samplers[id] = null;
 }
}

function _glDeleteShader(id) {
 if (!id) return;
 var shader = GL.shaders[id];
 if (!shader) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteShader(shader);
 GL.shaders[id] = null;
}

function _glDeleteSync(id) {
 if (!id) return;
 var sync = GL.syncs[id];
 if (!sync) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteSync(sync);
 sync.name = 0;
 GL.syncs[id] = null;
}

function _glDeleteTextures(n, textures) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[textures + i * 4 >> 2];
  var texture = GL.textures[id];
  if (!texture) continue;
  GLctx.deleteTexture(texture);
  texture.name = 0;
  GL.textures[id] = null;
 }
}

function _glDeleteTransformFeedbacks(n, ids) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[ids + i * 4 >> 2];
  var transformFeedback = GL.transformFeedbacks[id];
  if (!transformFeedback) continue;
  GLctx["deleteTransformFeedback"](transformFeedback);
  transformFeedback.name = 0;
  GL.transformFeedbacks[id] = null;
 }
}

function _glDeleteVertexArrays(n, vaos) {
 for (var i = 0; i < n; i++) {
  var id = HEAP32[vaos + i * 4 >> 2];
  GLctx["deleteVertexArray"](GL.vaos[id]);
  GL.vaos[id] = null;
 }
}

function _glDepthFunc(x0) {
 GLctx["depthFunc"](x0);
}

function _glDepthMask(flag) {
 GLctx.depthMask(!!flag);
}

function _glDetachShader(program, shader) {
 GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
}

function _glDisable(x0) {
 GLctx["disable"](x0);
}

function _glDisableVertexAttribArray(index) {
 var cb = GL.currentContext.clientBuffers[index];
 cb.enabled = false;
 GLctx.disableVertexAttribArray(index);
}

function _glDrawArrays(mode, first, count) {
 GL.preDrawHandleClientVertexAttribBindings(first + count);
 GLctx.drawArrays(mode, first, count);
 GL.postDrawHandleClientVertexAttribBindings();
}

function _glDrawArraysInstanced(mode, first, count, primcount) {
 GLctx["drawArraysInstanced"](mode, first, count, primcount);
}

var tempFixedLengthArray = [];

function _glDrawBuffers(n, bufs) {
 var bufArray = tempFixedLengthArray[n];
 for (var i = 0; i < n; i++) {
  bufArray[i] = HEAP32[bufs + i * 4 >> 2];
 }
 GLctx["drawBuffers"](bufArray);
}

function _glDrawElements(mode, count, type, indices) {
 var buf;
 if (!GLctx.currentElementArrayBufferBinding) {
  var size = GL.calcBufLength(1, type, 0, count);
  buf = GL.getTempIndexBuffer(size);
  GLctx.bindBuffer(34963, buf);
  GLctx.bufferSubData(34963, 0, HEAPU8.subarray(indices, indices + size));
  indices = 0;
 }
 GL.preDrawHandleClientVertexAttribBindings(count);
 GLctx.drawElements(mode, count, type, indices);
 GL.postDrawHandleClientVertexAttribBindings(count);
 if (!GLctx.currentElementArrayBufferBinding) {
  GLctx.bindBuffer(34963, null);
 }
}

function _glDrawElementsInstanced(mode, count, type, indices, primcount) {
 GLctx["drawElementsInstanced"](mode, count, type, indices, primcount);
}

function _glEnable(x0) {
 GLctx["enable"](x0);
}

function _glEnableVertexAttribArray(index) {
 var cb = GL.currentContext.clientBuffers[index];
 cb.enabled = true;
 GLctx.enableVertexAttribArray(index);
}

function _glEndQuery(x0) {
 GLctx["endQuery"](x0);
}

function _glEndTransformFeedback() {
 GLctx["endTransformFeedback"]();
}

function _glFenceSync(condition, flags) {
 var sync = GLctx.fenceSync(condition, flags);
 if (sync) {
  var id = GL.getNewId(GL.syncs);
  sync.name = id;
  GL.syncs[id] = sync;
  return id;
 } else {
  return 0;
 }
}

function _glFinish() {
 GLctx["finish"]();
}

function _glFlush() {
 GLctx["flush"]();
}

function emscriptenWebGLGetBufferBinding(target) {
 switch (target) {
 case 34962:
  target = 34964;
  break;

 case 34963:
  target = 34965;
  break;

 case 35051:
  target = 35053;
  break;

 case 35052:
  target = 35055;
  break;

 case 35982:
  target = 35983;
  break;

 case 36662:
  target = 36662;
  break;

 case 36663:
  target = 36663;
  break;

 case 35345:
  target = 35368;
  break;
 }
 var buffer = GLctx.getParameter(target);
 if (buffer) return buffer.name | 0; else return 0;
}

function emscriptenWebGLValidateMapBufferTarget(target) {
 switch (target) {
 case 34962:
 case 34963:
 case 36662:
 case 36663:
 case 35051:
 case 35052:
 case 35882:
 case 35982:
 case 35345:
  return true;

 default:
  return false;
 }
}

function _glFlushMappedBufferRange(target, offset, length) {
 if (!emscriptenWebGLValidateMapBufferTarget(target)) {
  GL.recordError(1280);
  err("GL_INVALID_ENUM in glFlushMappedBufferRange");
  return;
 }
 var mapping = GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)];
 if (!mapping) {
  GL.recordError(1282);
  err("buffer was never mapped in glFlushMappedBufferRange");
  return;
 }
 if (!(mapping.access & 16)) {
  GL.recordError(1282);
  err("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
  return;
 }
 if (offset < 0 || length < 0 || offset + length > mapping.length) {
  GL.recordError(1281);
  err("invalid range in glFlushMappedBufferRange");
  return;
 }
 GLctx.bufferSubData(target, mapping.offset, HEAPU8.subarray(mapping.mem + offset, mapping.mem + offset + length));
}

function _glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
 GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
}

function _glFramebufferTexture2D(target, attachment, textarget, texture, level) {
 GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
}

function _glFramebufferTextureLayer(target, attachment, texture, level, layer) {
 GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
}

function _glFrontFace(x0) {
 GLctx["frontFace"](x0);
}

function __glGenObject(n, buffers, createFunction, objectTable) {
 for (var i = 0; i < n; i++) {
  var buffer = GLctx[createFunction]();
  var id = buffer && GL.getNewId(objectTable);
  if (buffer) {
   buffer.name = id;
   objectTable[id] = buffer;
  } else {
   GL.recordError(1282);
  }
  HEAP32[buffers + i * 4 >> 2] = id;
 }
}

function _glGenBuffers(n, buffers) {
 __glGenObject(n, buffers, "createBuffer", GL.buffers);
}

function _glGenFramebuffers(n, ids) {
 __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
}

function _glGenQueries(n, ids) {
 __glGenObject(n, ids, "createQuery", GL.queries);
}

function _glGenRenderbuffers(n, renderbuffers) {
 __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
}

function _glGenSamplers(n, samplers) {
 __glGenObject(n, samplers, "createSampler", GL.samplers);
}

function _glGenTextures(n, textures) {
 __glGenObject(n, textures, "createTexture", GL.textures);
}

function _glGenTransformFeedbacks(n, ids) {
 __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks);
}

function _glGenVertexArrays(n, arrays) {
 __glGenObject(n, arrays, "createVertexArray", GL.vaos);
}

function _glGenerateMipmap(x0) {
 GLctx["generateMipmap"](x0);
}

function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
 program = GL.programs[program];
 var info = GLctx[funcName](program, index);
 if (info) {
  var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
  if (size) HEAP32[size >> 2] = info.size;
  if (type) HEAP32[type >> 2] = info.type;
 }
}

function _glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
 __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name);
}

function _glGetActiveUniform(program, index, bufSize, length, size, type, name) {
 __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name);
}

function _glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
 program = GL.programs[program];
 var result = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
 if (!result) return;
 if (uniformBlockName && bufSize > 0) {
  var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
  if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
 } else {
  if (length) HEAP32[length >> 2] = 0;
 }
}

function _glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 if (pname == 35393) {
  var name = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
  HEAP32[params >> 2] = name.length + 1;
  return;
 }
 var result = GLctx["getActiveUniformBlockParameter"](program, uniformBlockIndex, pname);
 if (result === null) return;
 if (pname == 35395) {
  for (var i = 0; i < result.length; i++) {
   HEAP32[params + i * 4 >> 2] = result[i];
  }
 } else {
  HEAP32[params >> 2] = result;
 }
}

function _glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 if (uniformCount > 0 && uniformIndices == 0) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 var ids = [];
 for (var i = 0; i < uniformCount; i++) {
  ids.push(HEAP32[uniformIndices + i * 4 >> 2]);
 }
 var result = GLctx["getActiveUniforms"](program, ids, pname);
 if (!result) return;
 var len = result.length;
 for (var i = 0; i < len; i++) {
  HEAP32[params + i * 4 >> 2] = result[i];
 }
}

function _glGetAttribLocation(program, name) {
 return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
}

function _glGetError() {
 var error = GLctx.getError() || GL.lastError;
 GL.lastError = 0;
 return error;
}

function _glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
 var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
 if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
  result = result.name | 0;
 }
 HEAP32[params >> 2] = result;
}

function readI53FromI64(ptr) {
 return HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296;
}

function readI53FromU64(ptr) {
 return HEAPU32[ptr >> 2] + HEAPU32[ptr + 4 >> 2] * 4294967296;
}

function writeI53ToI64(ptr, num) {
 HEAPU32[ptr >> 2] = num;
 HEAPU32[ptr + 4 >> 2] = (num - HEAPU32[ptr >> 2]) / 4294967296;
 var deserialized = num >= 0 ? readI53FromU64(ptr) : readI53FromI64(ptr);
 if (deserialized != num) warnOnce("writeI53ToI64() out of range: serialized JS Number " + num + " to Wasm heap as bytes lo=0x" + HEAPU32[ptr >> 2].toString(16) + ", hi=0x" + HEAPU32[ptr + 4 >> 2].toString(16) + ", which deserializes back to " + deserialized + " instead!");
}

function emscriptenWebGLGetIndexed(target, index, data, type) {
 if (!data) {
  GL.recordError(1281);
  return;
 }
 var result = GLctx["getIndexedParameter"](target, index);
 var ret;
 switch (typeof result) {
 case "boolean":
  ret = result ? 1 : 0;
  break;

 case "number":
  ret = result;
  break;

 case "object":
  if (result === null) {
   switch (target) {
   case 35983:
   case 35368:
    ret = 0;
    break;

   default:
    {
     GL.recordError(1280);
     return;
    }
   }
  } else if (result instanceof WebGLBuffer) {
   ret = result.name | 0;
  } else {
   GL.recordError(1280);
   return;
  }
  break;

 default:
  GL.recordError(1280);
  return;
 }
 switch (type) {
 case 1:
  writeI53ToI64(data, ret);
  break;

 case 0:
  HEAP32[data >> 2] = ret;
  break;

 case 2:
  HEAPF32[data >> 2] = ret;
  break;

 case 4:
  HEAP8[data >> 0] = ret ? 1 : 0;
  break;

 default:
  throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type;
 }
}

function _glGetIntegeri_v(target, index, data) {
 emscriptenWebGLGetIndexed(target, index, data, 0);
}

function emscriptenWebGLGet(name_, p, type) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 var ret = undefined;
 switch (name_) {
 case 36346:
  ret = 1;
  break;

 case 36344:
  if (type != 0 && type != 1) {
   GL.recordError(1280);
  }
  return;

 case 34814:
 case 36345:
  ret = 0;
  break;

 case 34466:
  var formats = GLctx.getParameter(34467);
  ret = formats ? formats.length : 0;
  break;

 case 33390:
  ret = 1048576;
  break;

 case 33309:
  if (GL.currentContext.version < 2) {
   GL.recordError(1282);
   return;
  }
  var exts = GLctx.getSupportedExtensions() || [];
  ret = 2 * exts.length;
  break;

 case 33307:
 case 33308:
  if (GL.currentContext.version < 2) {
   GL.recordError(1280);
   return;
  }
  ret = name_ == 33307 ? 3 : 0;
  break;
 }
 if (ret === undefined) {
  var result = GLctx.getParameter(name_);
  switch (typeof result) {
  case "number":
   ret = result;
   break;

  case "boolean":
   ret = result ? 1 : 0;
   break;

  case "string":
   GL.recordError(1280);
   return;

  case "object":
   if (result === null) {
    switch (name_) {
    case 34964:
    case 35725:
    case 34965:
    case 36006:
    case 36007:
    case 32873:
    case 34229:
    case 36662:
    case 36663:
    case 35053:
    case 35055:
    case 36010:
    case 35097:
    case 35869:
    case 32874:
    case 36389:
    case 35983:
    case 35368:
    case 34068:
     {
      ret = 0;
      break;
     }

    default:
     {
      GL.recordError(1280);
      return;
     }
    }
   } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
    for (var i = 0; i < result.length; ++i) {
     switch (type) {
     case 0:
      HEAP32[p + i * 4 >> 2] = result[i];
      break;

     case 2:
      HEAPF32[p + i * 4 >> 2] = result[i];
      break;

     case 4:
      HEAP8[p + i >> 0] = result[i] ? 1 : 0;
      break;
     }
    }
    return;
   } else {
    try {
     ret = result.name | 0;
    } catch (e) {
     GL.recordError(1280);
     err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
     return;
    }
   }
   break;

  default:
   GL.recordError(1280);
   err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
   return;
  }
 }
 switch (type) {
 case 1:
  writeI53ToI64(p, ret);
  break;

 case 0:
  HEAP32[p >> 2] = ret;
  break;

 case 2:
  HEAPF32[p >> 2] = ret;
  break;

 case 4:
  HEAP8[p >> 0] = ret ? 1 : 0;
  break;
 }
}

function _glGetIntegerv(name_, p) {
 emscriptenWebGLGet(name_, p, 0);
}

function _glGetInternalformativ(target, internalformat, pname, bufSize, params) {
 if (bufSize < 0) {
  GL.recordError(1281);
  return;
 }
 if (!params) {
  GL.recordError(1281);
  return;
 }
 var ret = GLctx["getInternalformatParameter"](target, internalformat, pname);
 if (ret === null) return;
 for (var i = 0; i < ret.length && i < bufSize; ++i) {
  HEAP32[params + i * 4 >> 2] = ret[i];
 }
}

function _glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
 GL.recordError(1282);
}

function _glGetProgramInfoLog(program, maxLength, length, infoLog) {
 var log = GLctx.getProgramInfoLog(GL.programs[program]);
 if (log === null) log = "(unknown error)";
 var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
 if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
}

function _glGetProgramiv(program, pname, p) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 if (program >= GL.counter) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 if (pname == 35716) {
  var log = GLctx.getProgramInfoLog(program);
  if (log === null) log = "(unknown error)";
  HEAP32[p >> 2] = log.length + 1;
 } else if (pname == 35719) {
  if (!program.maxUniformLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
    program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1);
   }
  }
  HEAP32[p >> 2] = program.maxUniformLength;
 } else if (pname == 35722) {
  if (!program.maxAttributeLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
    program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1);
   }
  }
  HEAP32[p >> 2] = program.maxAttributeLength;
 } else if (pname == 35381) {
  if (!program.maxUniformBlockNameLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
    program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1);
   }
  }
  HEAP32[p >> 2] = program.maxUniformBlockNameLength;
 } else {
  HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname);
 }
}

function _glGetQueryObjectuiv(id, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 var query = GL.queries[id];
 var param = GLctx["getQueryParameter"](query, pname);
 var ret;
 if (typeof param == "boolean") {
  ret = param ? 1 : 0;
 } else {
  ret = param;
 }
 HEAP32[params >> 2] = ret;
}

function _glGetQueryiv(target, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 HEAP32[params >> 2] = GLctx["getQuery"](target, pname);
}

function _glGetRenderbufferParameteriv(target, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname);
}

function _glGetShaderInfoLog(shader, maxLength, length, infoLog) {
 var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
 if (log === null) log = "(unknown error)";
 var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
 if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
}

function _glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
 var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
 HEAP32[range >> 2] = result.rangeMin;
 HEAP32[range + 4 >> 2] = result.rangeMax;
 HEAP32[precision >> 2] = result.precision;
}

function _glGetShaderSource(shader, bufSize, length, source) {
 var result = GLctx.getShaderSource(GL.shaders[shader]);
 if (!result) return;
 var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
 if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
}

function _glGetShaderiv(shader, pname, p) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 if (pname == 35716) {
  var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
  if (log === null) log = "(unknown error)";
  var logLength = log ? log.length + 1 : 0;
  HEAP32[p >> 2] = logLength;
 } else if (pname == 35720) {
  var source = GLctx.getShaderSource(GL.shaders[shader]);
  var sourceLength = source ? source.length + 1 : 0;
  HEAP32[p >> 2] = sourceLength;
 } else {
  HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname);
 }
}

function _glGetString(name_) {
 var ret = GL.stringCache[name_];
 if (!ret) {
  switch (name_) {
  case 7939:
   var exts = GLctx.getSupportedExtensions() || [];
   exts = exts.concat(exts.map(function(e) {
    return "GL_" + e;
   }));
   ret = stringToNewUTF8(exts.join(" "));
   break;

  case 7936:
  case 7937:
  case 37445:
  case 37446:
   var s = GLctx.getParameter(name_);
   if (!s) {
    GL.recordError(1280);
   }
   ret = s && stringToNewUTF8(s);
   break;

  case 7938:
   var glVersion = GLctx.getParameter(7938);
   if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")"; else {
    glVersion = "OpenGL ES 2.0 (" + glVersion + ")";
   }
   ret = stringToNewUTF8(glVersion);
   break;

  case 35724:
   var glslVersion = GLctx.getParameter(35724);
   var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
   var ver_num = glslVersion.match(ver_re);
   if (ver_num !== null) {
    if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
    glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")";
   }
   ret = stringToNewUTF8(glslVersion);
   break;

  default:
   GL.recordError(1280);
  }
  GL.stringCache[name_] = ret;
 }
 return ret;
}

function _glGetStringi(name, index) {
 if (GL.currentContext.version < 2) {
  GL.recordError(1282);
  return 0;
 }
 var stringiCache = GL.stringiCache[name];
 if (stringiCache) {
  if (index < 0 || index >= stringiCache.length) {
   GL.recordError(1281);
   return 0;
  }
  return stringiCache[index];
 }
 switch (name) {
 case 7939:
  var exts = GLctx.getSupportedExtensions() || [];
  exts = exts.concat(exts.map(function(e) {
   return "GL_" + e;
  }));
  exts = exts.map(function(e) {
   return stringToNewUTF8(e);
  });
  stringiCache = GL.stringiCache[name] = exts;
  if (index < 0 || index >= stringiCache.length) {
   GL.recordError(1281);
   return 0;
  }
  return stringiCache[index];

 default:
  GL.recordError(1280);
  return 0;
 }
}

function _glGetTexParameteriv(target, pname, params) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 HEAP32[params >> 2] = GLctx.getTexParameter(target, pname);
}

function _glGetUniformBlockIndex(program, uniformBlockName) {
 return GLctx["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName));
}

function _glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
 if (!uniformIndices) {
  GL.recordError(1281);
  return;
 }
 if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 var names = [];
 for (var i = 0; i < uniformCount; i++) names.push(UTF8ToString(HEAP32[uniformNames + i * 4 >> 2]));
 var result = GLctx["getUniformIndices"](program, names);
 if (!result) return;
 var len = result.length;
 for (var i = 0; i < len; i++) {
  HEAP32[uniformIndices + i * 4 >> 2] = result[i];
 }
}

function _glGetUniformLocation(program, name) {
 function getLeftBracePos(name) {
  return name.slice(-1) == "]" && name.lastIndexOf("[");
 }
 name = UTF8ToString(name);
 if (program = GL.programs[program]) {
  var uniformLocsById = program.uniformLocsById;
  var uniformSizeAndIdsByName = program.uniformSizeAndIdsByName;
  var i, j;
  var arrayIndex = 0;
  var uniformBaseName = name;
  var leftBrace = getLeftBracePos(name);
  if (!uniformLocsById) {
   program.uniformLocsById = uniformLocsById = {};
   program.uniformArrayNamesById = {};
   for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
    var u = GLctx.getActiveUniform(program, i);
    var nm = u.name;
    var sz = u.size;
    var lb = getLeftBracePos(nm);
    var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
    var id = uniformSizeAndIdsByName[arrayName] ? uniformSizeAndIdsByName[arrayName][1] : program.uniformIdCounter;
    program.uniformIdCounter = Math.max(id + sz, program.uniformIdCounter);
    uniformSizeAndIdsByName[arrayName] = [ sz, id ];
    for (j = 0; j < sz; ++j) {
     uniformLocsById[id] = j;
     program.uniformArrayNamesById[id++] = arrayName;
    }
   }
  }
  if (leftBrace > 0) {
   arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
   uniformBaseName = name.slice(0, leftBrace);
  }
  var sizeAndId = uniformSizeAndIdsByName[uniformBaseName];
  if (sizeAndId && arrayIndex < sizeAndId[0]) {
   arrayIndex += sizeAndId[1];
   if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
    return arrayIndex;
   }
  }
 } else {
  GL.recordError(1281);
 }
 return -1;
}

function webglGetUniformLocation(location) {
 var p = GLctx.currentProgram;
 if (p) {
  var webglLoc = p.uniformLocsById[location];
  if (typeof webglLoc === "number") {
   p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""));
  }
  return webglLoc;
 } else {
  GL.recordError(1282);
 }
}

function emscriptenWebGLGetUniform(program, location, params, type) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 var data = GLctx.getUniform(program, webglGetUniformLocation(location));
 if (typeof data == "number" || typeof data == "boolean") {
  switch (type) {
  case 0:
   HEAP32[params >> 2] = data;
   break;

  case 2:
   HEAPF32[params >> 2] = data;
   break;
  }
 } else {
  for (var i = 0; i < data.length; i++) {
   switch (type) {
   case 0:
    HEAP32[params + i * 4 >> 2] = data[i];
    break;

   case 2:
    HEAPF32[params + i * 4 >> 2] = data[i];
    break;
   }
  }
 }
}

function _glGetUniformiv(program, location, params) {
 emscriptenWebGLGetUniform(program, location, params, 0);
}

function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
 if (!params) {
  GL.recordError(1281);
  return;
 }
 if (GL.currentContext.clientBuffers[index].enabled) {
  err("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
 }
 var data = GLctx.getVertexAttrib(index, pname);
 if (pname == 34975) {
  HEAP32[params >> 2] = data && data["name"];
 } else if (typeof data == "number" || typeof data == "boolean") {
  switch (type) {
  case 0:
   HEAP32[params >> 2] = data;
   break;

  case 2:
   HEAPF32[params >> 2] = data;
   break;

  case 5:
   HEAP32[params >> 2] = Math.fround(data);
   break;
  }
 } else {
  for (var i = 0; i < data.length; i++) {
   switch (type) {
   case 0:
    HEAP32[params + i * 4 >> 2] = data[i];
    break;

   case 2:
    HEAPF32[params + i * 4 >> 2] = data[i];
    break;

   case 5:
    HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
    break;
   }
  }
 }
}

function _glGetVertexAttribiv(index, pname, params) {
 emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
}

function _glInvalidateFramebuffer(target, numAttachments, attachments) {
 var list = tempFixedLengthArray[numAttachments];
 for (var i = 0; i < numAttachments; i++) {
  list[i] = HEAP32[attachments + i * 4 >> 2];
 }
 GLctx["invalidateFramebuffer"](target, list);
}

function _glIsEnabled(x0) {
 return GLctx["isEnabled"](x0);
}

function _glIsVertexArray(array) {
 var vao = GL.vaos[array];
 if (!vao) return 0;
 return GLctx["isVertexArray"](vao);
}

function _glLinkProgram(program) {
 program = GL.programs[program];
 GLctx.linkProgram(program);
 program.uniformLocsById = 0;
 program.uniformSizeAndIdsByName = {};
 [ program["vs"], program["fs"] ].forEach(function(s) {
  Object.keys(s.explicitUniformLocations).forEach(function(shaderLocation) {
   var loc = s.explicitUniformLocations[shaderLocation];
   program.uniformSizeAndIdsByName[shaderLocation] = [ 1, loc ];
   program.uniformIdCounter = Math.max(program.uniformIdCounter, loc + 1);
  });
 });
 function copyKeys(dst, src) {
  Object.keys(src).forEach(function(key) {
   dst[key] = src[key];
  });
 }
 program.explicitUniformBindings = {};
 program.explicitSamplerBindings = {};
 [ program["vs"], program["fs"] ].forEach(function(s) {
  copyKeys(program.explicitUniformBindings, s.explicitUniformBindings);
  copyKeys(program.explicitSamplerBindings, s.explicitSamplerBindings);
 });
 program.explicitProgramBindingsApplied = 0;
}

function _glMapBufferRange(target, offset, length, access) {
 if (access != 26 && access != 10) {
  err("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER");
  return 0;
 }
 if (!emscriptenWebGLValidateMapBufferTarget(target)) {
  GL.recordError(1280);
  err("GL_INVALID_ENUM in glMapBufferRange");
  return 0;
 }
 var mem = _malloc(length);
 if (!mem) return 0;
 GL.mappedBuffers[emscriptenWebGLGetBufferBinding(target)] = {
  offset: offset,
  length: length,
  mem: mem,
  access: access
 };
 return mem;
}

function _glPixelStorei(pname, param) {
 if (pname == 3317) {
  GL.unpackAlignment = param;
 }
 GLctx.pixelStorei(pname, param);
}

function _glPolygonOffset(x0, x1) {
 GLctx["polygonOffset"](x0, x1);
}

function _glProgramBinary(program, binaryFormat, binary, length) {
 GL.recordError(1280);
}

function _glProgramParameteri(program, pname, value) {
 GL.recordError(1280);
}

function _glReadBuffer(x0) {
 GLctx["readBuffer"](x0);
}

function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
 function roundedToNextMultipleOf(x, y) {
  return x + y - 1 & -y;
 }
 var plainRowSize = width * sizePerPixel;
 var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
 return height * alignedRowSize;
}

function __colorChannelsInGlTextureFormat(format) {
 var colorChannels = {
  5: 3,
  6: 4,
  8: 2,
  29502: 3,
  29504: 4,
  26917: 2,
  26918: 2,
  29846: 3,
  29847: 4
 };
 return colorChannels[format - 6402] || 1;
}

function heapObjectForWebGLType(type) {
 type -= 5120;
 if (type == 0) return HEAP8;
 if (type == 1) return HEAPU8;
 if (type == 2) return HEAP16;
 if (type == 4) return HEAP32;
 if (type == 6) return HEAPF32;
 if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
 return HEAPU16;
}

function heapAccessShiftForWebGLHeap(heap) {
 return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
}

function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
 var heap = heapObjectForWebGLType(type);
 var shift = heapAccessShiftForWebGLHeap(heap);
 var byteSize = 1 << shift;
 var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
 var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
 return heap.subarray(pixels >> shift, pixels + bytes >> shift);
}

function _glReadPixels(x, y, width, height, format, type, pixels) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelPackBufferBinding) {
   GLctx.readPixels(x, y, width, height, format, type, pixels);
  } else {
   var heap = heapObjectForWebGLType(type);
   GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  }
  return;
 }
 var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
 if (!pixelData) {
  GL.recordError(1280);
  return;
 }
 GLctx.readPixels(x, y, width, height, format, type, pixelData);
}

function _glRenderbufferStorage(x0, x1, x2, x3) {
 GLctx["renderbufferStorage"](x0, x1, x2, x3);
}

function _glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
 GLctx["renderbufferStorageMultisample"](x0, x1, x2, x3, x4);
}

function _glSamplerParameteri(sampler, pname, param) {
 GLctx["samplerParameteri"](GL.samplers[sampler], pname, param);
}

function _glScissor(x0, x1, x2, x3) {
 GLctx["scissor"](x0, x1, x2, x3);
}

function find_closing_parens_index(arr, i, opening = "(", closing = ")") {
 for (var nesting = 0; i < arr.length; ++i) {
  if (arr[i] == opening) ++nesting;
  if (arr[i] == closing && --nesting == 0) {
   return i;
  }
 }
}

function preprocess_c_code(code) {
 var i = 0, len = code.length, out = "", stack = [ 1 ], defs = {
  "defined": function(args) {
   assert(args.length == 1);
   return defs[args[0]] ? 1 : 0;
  },
  "GL_FRAGMENT_PRECISION_HIGH": function() {
   return 1;
  }
 };
 function isWhitespace(str, i) {
  return !(str.charCodeAt(i) > 32);
 }
 function nextWhitespace(str, i) {
  while (!isWhitespace(str, i)) ++i;
  return i;
 }
 function classifyChar(str, idx) {
  var cc = str.charCodeAt(idx);
  assert(!(cc > 127), "Only 7-bit ASCII can be used in preprocessor #if/#ifdef/#define statements!");
  if (cc > 32) {
   if (cc < 48) return 1;
   if (cc < 58) return 2;
   if (cc < 65) return 1;
   if (cc < 91 || cc == 95) return 3;
   if (cc < 97) return 1;
   if (cc < 123) return 3;
   return 1;
  }
  return cc < 33 ? 0 : 4;
 }
 function tokenize(exprString, keepWhitespace) {
  var out = [], len = exprString.length;
  for (var i = 0; i <= len; ++i) {
   var kind = classifyChar(exprString, i);
   if (kind == 2 || kind == 3) {
    for (var j = i + 1; j <= len; ++j) {
     var kind2 = classifyChar(exprString, j);
     if (kind2 != kind && (kind2 != 2 || kind != 3)) {
      out.push(exprString.substring(i, j));
      i = j - 1;
      break;
     }
    }
   } else if (kind == 1) {
    var op2 = exprString.substr(i, 2);
    if ([ "<=", ">=", "==", "!=", "&&", "||" ].includes(op2)) {
     out.push(op2);
     ++i;
    } else {
     out.push(exprString[i]);
    }
   }
  }
  return out;
 }
 function expandMacros(str, lineStart, lineEnd) {
  if (lineEnd === undefined) lineEnd = str.length;
  var len = str.length;
  var out = "";
  for (var i = lineStart; i < lineEnd; ++i) {
   var kind = classifyChar(str, i);
   if (kind == 3) {
    for (var j = i + 1; j <= lineEnd; ++j) {
     var kind2 = classifyChar(str, j);
     if (kind2 != 2 && kind2 != 3) {
      var symbol = str.substring(i, j);
      var pp = defs[symbol];
      if (pp) {
       var expanded = str.substring(lineStart, i);
       if (pp.length && str[j] == "(") {
        var closeParens = find_closing_parens_index(str, j);
        assert(str[closeParens] == ")");
        expanded += pp(str.substring(j + 1, closeParens).split(",")) + str.substring(closeParens + 1, lineEnd);
       } else {
        expanded += pp() + str.substring(j, lineEnd);
       }
       return expandMacros(expanded, 0);
      } else {
       out += symbol;
       i = j - 1;
       break;
      }
     }
    }
   } else {
    out += str[i];
   }
  }
  return out;
 }
 function buildExprTree(tokens) {
  while (tokens.length > 1 || typeof tokens[0] != "function") {
   tokens = function(tokens) {
    var i, j, p, operatorAndPriority = -2;
    for (j = 0; j < tokens.length; ++j) {
     if ((p = [ "*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "(" ].indexOf(tokens[j])) > operatorAndPriority) {
      i = j;
      operatorAndPriority = p;
     }
    }
    if (operatorAndPriority == 13) {
     var j = find_closing_parens_index(tokens, i);
     if (j) {
      tokens.splice(i, j + 1 - i, buildExprTree(tokens.slice(i + 1, j)));
      return tokens;
     }
    }
    if (operatorAndPriority == 4) {
     i = tokens.lastIndexOf("!");
     var innerExpr = buildExprTree(tokens.slice(i + 1, i + 2));
     tokens.splice(i, 2, function() {
      return !innerExpr();
     });
     return tokens;
    }
    if (operatorAndPriority >= 0) {
     var left = buildExprTree(tokens.slice(0, i));
     var right = buildExprTree(tokens.slice(i + 1));
     switch (tokens[i]) {
     case "&&":
      return [ function() {
       return left() && right();
      } ];

     case "||":
      return [ function() {
       return left() || right();
      } ];

     case "==":
      return [ function() {
       return left() == right();
      } ];

     case "!=":
      return [ function() {
       return left() != right();
      } ];

     case "<":
      return [ function() {
       return left() < right();
      } ];

     case "<=":
      return [ function() {
       return left() <= right();
      } ];

     case ">":
      return [ function() {
       return left() > right();
      } ];

     case ">=":
      return [ function() {
       return left() >= right();
      } ];

     case "+":
      return [ function() {
       return left() + right();
      } ];

     case "-":
      return [ function() {
       return left() - right();
      } ];

     case "*":
      return [ function() {
       return left() * right();
      } ];

     case "/":
      return [ function() {
       return Math.floor(left() / right());
      } ];
     }
    }
    if (tokens[i] == ")") throw "Parsing failure, mismatched parentheses in parsing!" + tokens.toString();
    assert(operatorAndPriority == -1);
    var num = jstoi_q(tokens[i]);
    return [ function() {
     return num;
    } ];
   }(tokens);
  }
  return tokens[0];
 }
 for (;i < len; ++i) {
  var lineStart = i;
  i = code.indexOf("\n", i);
  if (i < 0) i = len;
  for (var j = lineStart; j < i && isWhitespace(code, j); ++j) ;
  var thisLineIsInActivePreprocessingBlock = stack[stack.length - 1];
  if (code[j] != "#") {
   if (thisLineIsInActivePreprocessingBlock) {
    out += expandMacros(code, lineStart, i) + "\n";
   }
   continue;
  }
  var space = nextWhitespace(code, j);
  var directive = code.substring(j + 1, space);
  var expression = code.substring(space, i).trim();
  switch (directive) {
  case "if":
   var tokens = tokenize(expandMacros(expression, 0));
   var exprTree = buildExprTree(tokens);
   var evaluated = exprTree();
   stack.push(!!evaluated * stack[stack.length - 1]);
   break;

  case "ifdef":
   stack.push(!!defs[expression] * stack[stack.length - 1]);
   break;

  case "ifndef":
   stack.push(!defs[expression] * stack[stack.length - 1]);
   break;

  case "else":
   stack[stack.length - 1] = 1 - stack[stack.length - 1];
   break;

  case "endif":
   stack.pop();
   break;

  case "define":
   if (thisLineIsInActivePreprocessingBlock) {
    var macroStart = expression.indexOf("(");
    var firstWs = nextWhitespace(expression, 0);
    if (firstWs < macroStart) macroStart = 0;
    if (macroStart > 0) {
     var macroEnd = expression.indexOf(")", macroStart);
     let params = expression.substring(macroStart + 1, macroEnd).split(",").map(x => x.trim());
     let value = tokenize(expression.substring(macroEnd + 1).trim());
     defs[expression.substring(0, macroStart)] = function(args) {
      var ret = "";
      value.forEach(x => {
       var argIndex = params.indexOf(x);
       ret += argIndex >= 0 ? args[argIndex] : x;
      });
      return ret;
     };
    } else {
     let value = expandMacros(expression.substring(firstWs + 1).trim(), 0);
     defs[expression.substring(0, firstWs)] = function() {
      return value;
     };
    }
   }
   break;

  case "undef":
   if (thisLineIsInActivePreprocessingBlock) delete defs[expression];
   break;

  default:
   if (directive != "version" && directive != "pragma" && directive != "extension") {
    console.error("Unrecognized preprocessor directive #" + directive + "!");
   }
   out += expandMacros(code, lineStart, i) + "\n";
  }
 }
 return out;
}

function remove_cpp_comments_in_shaders(code) {
 var i = 0, out = "", ch, next, len = code.length;
 for (;i < len; ++i) {
  ch = code[i];
  if (ch == "/") {
   next = code[i + 1];
   if (next == "/") {
    while (i < len && code[i + 1] != "\n") ++i;
   } else if (next == "*") {
    while (i < len && (code[i - 1] != "*" || code[i] != "/")) ++i;
   } else {
    out += ch;
   }
  } else {
   out += ch;
  }
 }
 return out;
}

function _glShaderSource(shader, count, string, length) {
 var source = GL.getSource(shader, count, string, length);
 source = preprocess_c_code(remove_cpp_comments_in_shaders(source));
 var regex = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g, explicitUniformLocations = {}, match;
 while (match = regex.exec(source)) {
  explicitUniformLocations[match[5]] = jstoi_q(match[1]);
  if (!(explicitUniformLocations[match[5]] >= 0 && explicitUniformLocations[match[5]] < 1048576)) {
   console.error('Specified an out of range layout(location=x) directive "' + explicitUniformLocations[match[5]] + '"! (' + match[0] + ")");
   GL.recordError(1281);
   return;
  }
 }
 source = source.replace(regex, "$2");
 GL.shaders[shader].explicitUniformLocations = explicitUniformLocations;
 var bindingRegex = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g, samplerBindings = {}, uniformBindings = {}, bindingMatch;
 while (bindingMatch = bindingRegex.exec(source)) {
  var arrayLength = 1;
  for (var i = bindingMatch.index; i < source.length && source[i] != ";"; ++i) {
   if (source[i] == "[") {
    arrayLength = jstoi_q(source.slice(i + 1));
    break;
   }
   if (source[i] == "{") i = find_closing_parens_index(source, i, "{", "}") - 1;
  }
  var binding = jstoi_q(bindingMatch[1]);
  var bindingsType = 34930;
  if (bindingMatch[3] && bindingMatch[2].indexOf("sampler") != -1) {
   samplerBindings[bindingMatch[3]] = [ binding, arrayLength ];
  } else {
   bindingsType = 35374;
   uniformBindings[bindingMatch[2]] = [ binding, arrayLength ];
  }
  var numBindingPoints = GLctx.getParameter(bindingsType);
  if (!(binding >= 0 && binding + arrayLength <= numBindingPoints)) {
   console.error('Specified an out of range layout(binding=x) directive "' + binding + '"! (' + bindingMatch[0] + "). Valid range is [0, " + numBindingPoints + "-1]");
   GL.recordError(1281);
   return;
  }
 }
 source = source.replace(/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, "");
 source = source.replace(/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)");
 source = source.replace(/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)");
 GL.shaders[shader].explicitSamplerBindings = samplerBindings;
 GL.shaders[shader].explicitUniformBindings = uniformBindings;
 GLctx.shaderSource(GL.shaders[shader], source);
}

function _glStencilFuncSeparate(x0, x1, x2, x3) {
 GLctx["stencilFuncSeparate"](x0, x1, x2, x3);
}

function _glStencilMask(x0) {
 GLctx["stencilMask"](x0);
}

function _glStencilOpSeparate(x0, x1, x2, x3) {
 GLctx["stencilOpSeparate"](x0, x1, x2, x3);
}

function _glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
  } else if (pixels) {
   var heap = heapObjectForWebGLType(type);
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  } else {
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
  }
  return;
 }
 GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
}

function _glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels);
 } else if (pixels) {
  var heap = heapObjectForWebGLType(type);
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
 } else {
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null);
 }
}

function _glTexParameterf(x0, x1, x2) {
 GLctx["texParameterf"](x0, x1, x2);
}

function _glTexParameteri(x0, x1, x2) {
 GLctx["texParameteri"](x0, x1, x2);
}

function _glTexParameteriv(target, pname, params) {
 var param = HEAP32[params >> 2];
 GLctx.texParameteri(target, pname, param);
}

function _glTexStorage2D(x0, x1, x2, x3, x4) {
 GLctx["texStorage2D"](x0, x1, x2, x3, x4);
}

function _glTexStorage3D(x0, x1, x2, x3, x4, x5) {
 GLctx["texStorage3D"](x0, x1, x2, x3, x4, x5);
}

function _glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
  } else if (pixels) {
   var heap = heapObjectForWebGLType(type);
   GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  } else {
   GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null);
  }
  return;
 }
 var pixelData = null;
 if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
 GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
}

function _glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
 } else if (pixels) {
  var heap = heapObjectForWebGLType(type);
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
 } else {
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
 }
}

function _glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
 program = GL.programs[program];
 var vars = [];
 for (var i = 0; i < count; i++) vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
 GLctx["transformFeedbackVaryings"](program, vars, bufferMode);
}

var miniTempWebGLFloatBuffers = [];

function _glUniform1fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count);
  return;
 }
 if (count <= 288) {
  var view = miniTempWebGLFloatBuffers[count - 1];
  for (var i = 0; i < count; ++i) {
   view[i] = HEAPF32[value + 4 * i >> 2];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2);
 }
 GLctx.uniform1fv(webglGetUniformLocation(location), view);
}

function _glUniform1i(location, v0) {
 GLctx.uniform1i(webglGetUniformLocation(location), v0);
}

var __miniTempWebGLIntBuffers = [];

function _glUniform1iv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
  return;
 }
 if (count <= 288) {
  var view = __miniTempWebGLIntBuffers[count - 1];
  for (var i = 0; i < count; ++i) {
   view[i] = HEAP32[value + 4 * i >> 2];
  }
 } else {
  var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2);
 }
 GLctx.uniform1iv(webglGetUniformLocation(location), view);
}

function _glUniform1uiv(location, count, value) {
 GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count);
}

function _glUniform2fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
  return;
 }
 if (count <= 144) {
  var view = miniTempWebGLFloatBuffers[2 * count - 1];
  for (var i = 0; i < 2 * count; i += 2) {
   view[i] = HEAPF32[value + 4 * i >> 2];
   view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2);
 }
 GLctx.uniform2fv(webglGetUniformLocation(location), view);
}

function _glUniform2iv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
  return;
 }
 if (count <= 144) {
  var view = __miniTempWebGLIntBuffers[2 * count - 1];
  for (var i = 0; i < 2 * count; i += 2) {
   view[i] = HEAP32[value + 4 * i >> 2];
   view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
  }
 } else {
  var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2);
 }
 GLctx.uniform2iv(webglGetUniformLocation(location), view);
}

function _glUniform2uiv(location, count, value) {
 GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 2);
}

function _glUniform3fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
  return;
 }
 if (count <= 96) {
  var view = miniTempWebGLFloatBuffers[3 * count - 1];
  for (var i = 0; i < 3 * count; i += 3) {
   view[i] = HEAPF32[value + 4 * i >> 2];
   view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
   view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2);
 }
 GLctx.uniform3fv(webglGetUniformLocation(location), view);
}

function _glUniform3iv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 3);
  return;
 }
 if (count <= 96) {
  var view = __miniTempWebGLIntBuffers[3 * count - 1];
  for (var i = 0; i < 3 * count; i += 3) {
   view[i] = HEAP32[value + 4 * i >> 2];
   view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
   view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
  }
 } else {
  var view = HEAP32.subarray(value >> 2, value + count * 12 >> 2);
 }
 GLctx.uniform3iv(webglGetUniformLocation(location), view);
}

function _glUniform3uiv(location, count, value) {
 GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 3);
}

function _glUniform4fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
  return;
 }
 if (count <= 72) {
  var view = miniTempWebGLFloatBuffers[4 * count - 1];
  var heap = HEAPF32;
  value >>= 2;
  for (var i = 0; i < 4 * count; i += 4) {
   var dst = value + i;
   view[i] = heap[dst];
   view[i + 1] = heap[dst + 1];
   view[i + 2] = heap[dst + 2];
   view[i + 3] = heap[dst + 3];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2);
 }
 GLctx.uniform4fv(webglGetUniformLocation(location), view);
}

function _glUniform4iv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 4);
  return;
 }
 if (count <= 72) {
  var view = __miniTempWebGLIntBuffers[4 * count - 1];
  for (var i = 0; i < 4 * count; i += 4) {
   view[i] = HEAP32[value + 4 * i >> 2];
   view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
   view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
   view[i + 3] = HEAP32[value + (4 * i + 12) >> 2];
  }
 } else {
  var view = HEAP32.subarray(value >> 2, value + count * 16 >> 2);
 }
 GLctx.uniform4iv(webglGetUniformLocation(location), view);
}

function _glUniform4uiv(location, count, value) {
 GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 4);
}

function _glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
 program = GL.programs[program];
 GLctx["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding);
}

function _glUniformMatrix3fv(location, count, transpose, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
  return;
 }
 if (count <= 32) {
  var view = miniTempWebGLFloatBuffers[9 * count - 1];
  for (var i = 0; i < 9 * count; i += 9) {
   view[i] = HEAPF32[value + 4 * i >> 2];
   view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
   view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
   view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
   view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
   view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
   view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
   view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
   view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2);
 }
 GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
}

function _glUniformMatrix4fv(location, count, transpose, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
  return;
 }
 if (count <= 18) {
  var view = miniTempWebGLFloatBuffers[16 * count - 1];
  var heap = HEAPF32;
  value >>= 2;
  for (var i = 0; i < 16 * count; i += 16) {
   var dst = value + i;
   view[i] = heap[dst];
   view[i + 1] = heap[dst + 1];
   view[i + 2] = heap[dst + 2];
   view[i + 3] = heap[dst + 3];
   view[i + 4] = heap[dst + 4];
   view[i + 5] = heap[dst + 5];
   view[i + 6] = heap[dst + 6];
   view[i + 7] = heap[dst + 7];
   view[i + 8] = heap[dst + 8];
   view[i + 9] = heap[dst + 9];
   view[i + 10] = heap[dst + 10];
   view[i + 11] = heap[dst + 11];
   view[i + 12] = heap[dst + 12];
   view[i + 13] = heap[dst + 13];
   view[i + 14] = heap[dst + 14];
   view[i + 15] = heap[dst + 15];
  }
 } else {
  var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2);
 }
 GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
}

function _glUnmapBuffer(target) {
 if (!emscriptenWebGLValidateMapBufferTarget(target)) {
  GL.recordError(1280);
  err("GL_INVALID_ENUM in glUnmapBuffer");
  return 0;
 }
 var buffer = emscriptenWebGLGetBufferBinding(target);
 var mapping = GL.mappedBuffers[buffer];
 if (!mapping) {
  GL.recordError(1282);
  err("buffer was never mapped in glUnmapBuffer");
  return 0;
 }
 GL.mappedBuffers[buffer] = null;
 if (!(mapping.access & 16)) if (GL.currentContext.version >= 2) {
  GLctx.bufferSubData(target, mapping.offset, HEAPU8, mapping.mem, mapping.length);
 } else {
  GLctx.bufferSubData(target, mapping.offset, HEAPU8.subarray(mapping.mem, mapping.mem + mapping.length));
 }
 _free(mapping.mem);
 return 1;
}

function webglApplyExplicitProgramBindings() {
 var p = GLctx.currentProgram;
 if (!p.explicitProgramBindingsApplied) {
  if (GL.currentContext.version >= 2) {
   Object.keys(p.explicitUniformBindings).forEach(function(ubo) {
    var bindings = p.explicitUniformBindings[ubo];
    for (var i = 0; i < bindings[1]; ++i) {
     var blockIndex = GLctx.getUniformBlockIndex(p, ubo + (bindings[1] > 1 ? "[" + i + "]" : ""));
     GLctx.uniformBlockBinding(p, blockIndex, bindings[0] + i);
    }
   });
  }
  Object.keys(p.explicitSamplerBindings).forEach(function(sampler) {
   var bindings = p.explicitSamplerBindings[sampler];
   for (var i = 0; i < bindings[1]; ++i) {
    GLctx.uniform1i(GLctx.getUniformLocation(p, sampler + (i ? "[" + i + "]" : "")), bindings[0] + i);
   }
  });
  p.explicitProgramBindingsApplied = 1;
 }
}

function _glUseProgram(program) {
 program = GL.programs[program];
 GLctx.useProgram(program);
 if (GLctx.currentProgram = program) {
  webglApplyExplicitProgramBindings();
 }
}

function _glValidateProgram(program) {
 GLctx.validateProgram(GL.programs[program]);
}

function _glVertexAttrib4f(x0, x1, x2, x3, x4) {
 GLctx["vertexAttrib4f"](x0, x1, x2, x3, x4);
}

function _glVertexAttrib4fv(index, v) {
 GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2]);
}

function _glVertexAttribIPointer(index, size, type, stride, ptr) {
 var cb = GL.currentContext.clientBuffers[index];
 if (!GLctx.currentArrayBufferBinding) {
  cb.size = size;
  cb.type = type;
  cb.normalized = false;
  cb.stride = stride;
  cb.ptr = ptr;
  cb.clientside = true;
  cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
   this.vertexAttribIPointer(index, size, type, stride, ptr);
  };
  return;
 }
 cb.clientside = false;
 GLctx["vertexAttribIPointer"](index, size, type, stride, ptr);
}

function _glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
 var cb = GL.currentContext.clientBuffers[index];
 if (!GLctx.currentArrayBufferBinding) {
  cb.size = size;
  cb.type = type;
  cb.normalized = normalized;
  cb.stride = stride;
  cb.ptr = ptr;
  cb.clientside = true;
  cb.vertexAttribPointerAdaptor = function(index, size, type, normalized, stride, ptr) {
   this.vertexAttribPointer(index, size, type, normalized, stride, ptr);
  };
  return;
 }
 cb.clientside = false;
 GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
}

function _glViewport(x0, x1, x2, x3) {
 GLctx["viewport"](x0, x1, x2, x3);
}

function _llvm_eh_typeid_for(type) {
 return type;
}

function _mktime(tmPtr) {
 _tzset();
 var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
 var dst = HEAP32[tmPtr + 32 >> 2];
 var guessedOffset = date.getTimezoneOffset();
 var start = new Date(date.getFullYear(), 0, 1);
 var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dstOffset = Math.min(winterOffset, summerOffset);
 if (dst < 0) {
  HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
 } else if (dst > 0 != (dstOffset == guessedOffset)) {
  var nonDstOffset = Math.max(winterOffset, summerOffset);
  var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
  date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
 }
 HEAP32[tmPtr + 24 >> 2] = date.getDay();
 var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 HEAP32[tmPtr >> 2] = date.getSeconds();
 HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
 HEAP32[tmPtr + 8 >> 2] = date.getHours();
 HEAP32[tmPtr + 12 >> 2] = date.getDate();
 HEAP32[tmPtr + 16 >> 2] = date.getMonth();
 return date.getTime() / 1e3 | 0;
}

function _setTempRet0(val) {
 setTempRet0(val);
}

function _sigaction(signum, act, oldact) {
 err("Calling stub instead of sigaction()");
 return 0;
}

function _sigemptyset(set) {
 HEAP32[set >> 2] = 0;
 return 0;
}

function __isLeapYear(year) {
 return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function __arraySum(array, index) {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) {}
 return sum;
}

var __MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var __MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

function __addDays(date, days) {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = __isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= daysInCurrentMonth - newDate.getDate() + 1;
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
}

function _strftime(s, maxsize, format, tm) {
 var tm_zone = HEAP32[tm + 40 >> 2];
 var date = {
  tm_sec: HEAP32[tm >> 2],
  tm_min: HEAP32[tm + 4 >> 2],
  tm_hour: HEAP32[tm + 8 >> 2],
  tm_mday: HEAP32[tm + 12 >> 2],
  tm_mon: HEAP32[tm + 16 >> 2],
  tm_year: HEAP32[tm + 20 >> 2],
  tm_wday: HEAP32[tm + 24 >> 2],
  tm_yday: HEAP32[tm + 28 >> 2],
  tm_isdst: HEAP32[tm + 32 >> 2],
  tm_gmtoff: HEAP32[tm + 36 >> 2],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S",
  "%Ec": "%c",
  "%EC": "%C",
  "%Ex": "%m/%d/%y",
  "%EX": "%H:%M:%S",
  "%Ey": "%y",
  "%EY": "%Y",
  "%Od": "%d",
  "%Oe": "%e",
  "%OH": "%H",
  "%OI": "%I",
  "%Om": "%m",
  "%OM": "%M",
  "%OS": "%S",
  "%Ou": "%u",
  "%OU": "%U",
  "%OV": "%V",
  "%Ow": "%w",
  "%OW": "%W",
  "%Oy": "%y"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value === "number" ? value.toString() : value || "";
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : value > 0 ? 1 : 0;
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   } else {
    return thisDate.getFullYear();
   }
  } else {
   return thisDate.getFullYear() - 1;
  }
 }
 var EXPANSION_RULES_2 = {
  "%a": function(date) {
   return WEEKDAYS[date.tm_wday].substring(0, 3);
  },
  "%A": function(date) {
   return WEEKDAYS[date.tm_wday];
  },
  "%b": function(date) {
   return MONTHS[date.tm_mon].substring(0, 3);
  },
  "%B": function(date) {
   return MONTHS[date.tm_mon];
  },
  "%C": function(date) {
   var year = date.tm_year + 1900;
   return leadingNulls(year / 100 | 0, 2);
  },
  "%d": function(date) {
   return leadingNulls(date.tm_mday, 2);
  },
  "%e": function(date) {
   return leadingSomething(date.tm_mday, 2, " ");
  },
  "%g": function(date) {
   return getWeekBasedYear(date).toString().substring(2);
  },
  "%G": function(date) {
   return getWeekBasedYear(date);
  },
  "%H": function(date) {
   return leadingNulls(date.tm_hour, 2);
  },
  "%I": function(date) {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": function(date) {
   return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3);
  },
  "%m": function(date) {
   return leadingNulls(date.tm_mon + 1, 2);
  },
  "%M": function(date) {
   return leadingNulls(date.tm_min, 2);
  },
  "%n": function() {
   return "\n";
  },
  "%p": function(date) {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   } else {
    return "PM";
   }
  },
  "%S": function(date) {
   return leadingNulls(date.tm_sec, 2);
  },
  "%t": function() {
   return "\t";
  },
  "%u": function(date) {
   return date.tm_wday || 7;
  },
  "%U": function(date) {
   var janFirst = new Date(date.tm_year + 1900, 0, 1);
   var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstSunday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
    var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
  },
  "%V": function(date) {
   var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
   var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
   var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
   var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
   var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
   if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
    return "53";
   }
   if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
    return "01";
   }
   var daysDifference;
   if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
    daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
   } else {
    daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
   }
   return leadingNulls(Math.ceil(daysDifference / 7), 2);
  },
  "%w": function(date) {
   return date.tm_wday;
  },
  "%W": function(date) {
   var janFirst = new Date(date.tm_year, 0, 1);
   var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstMonday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
    var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
  },
  "%y": function(date) {
   return (date.tm_year + 1900).toString().substring(2);
  },
  "%Y": function(date) {
   return date.tm_year + 1900;
  },
  "%z": function(date) {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = off / 60 * 100 + off % 60;
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": function(date) {
   return date.tm_zone;
  },
  "%%": function() {
   return "%";
  }
 };
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.includes(rule)) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
}

function _time(ptr) {
 var ret = Date.now() / 1e3 | 0;
 if (ptr) {
  HEAP32[ptr >> 2] = ret;
 }
 return ret;
}

function setFileTime(path, time) {
 path = UTF8ToString(path);
 try {
  FS.utime(path, time, time);
  return 0;
 } catch (e) {
  if (!(e instanceof FS.ErrnoError)) throw e + " : " + stackTrace();
  setErrNo(e.errno);
  return -1;
 }
}

function _utime(path, times) {
 var time;
 if (times) {
  time = HEAP32[times + 4 >> 2] * 1e3;
 } else {
  time = Date.now();
 }
 return setFileTime(path, time);
}

var FSNode = function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | 73;

var writeMode = 146;

Object.defineProperties(FSNode.prototype, {
 read: {
  get: function() {
   return (this.mode & readMode) === readMode;
  },
  set: function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.staticInit();

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
 Browser.requestFullscreen(lockPointer, resizeCanvas);
};

Module["requestFullScreen"] = function Module_requestFullScreen() {
 Browser.requestFullScreen();
};

Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
 Browser.requestAnimationFrame(func);
};

Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
 Browser.setCanvasSize(width, height, noUpdates);
};

Module["pauseMainLoop"] = function Module_pauseMainLoop() {
 Browser.mainLoop.pause();
};

Module["resumeMainLoop"] = function Module_resumeMainLoop() {
 Browser.mainLoop.resume();
};

Module["getUserMedia"] = function Module_getUserMedia() {
 Browser.getUserMedia();
};

Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
 return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
};

var GLctx;

for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));

var miniTempWebGLFloatBuffersStorage = new Float32Array(288);

for (var i = 0; i < 288; ++i) {
 miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1);
}

var __miniTempWebGLIntBuffersStorage = new Int32Array(288);

for (var i = 0; i < 288; ++i) {
 __miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i + 1);
}

var ASSERTIONS = true;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

var asmLibraryArg = {
 "AttachVideo": _AttachVideo,
 "BrowserFireEvent": _BrowserFireEvent,
 "CallMethod": _CallMethod,
 "Connect": _Connect,
 "CopyData": _CopyData,
 "DestroyTexture": _DestroyTexture,
 "Disconnect": _Disconnect,
 "GetBoolean": _GetBoolean,
 "GetFunctionInstance": _GetFunctionInstance,
 "GetNumber": _GetNumber,
 "GetProperty": _GetProperty,
 "GetString": _GetString,
 "HideReadyPlayerMeFrame": _HideReadyPlayerMeFrame,
 "Home": _Home,
 "InitLiveKit": _InitLiveKit,
 "IsBoolean": _IsBoolean,
 "IsNull": _IsNull,
 "IsNumber": _IsNumber,
 "IsObject": _IsObject,
 "IsString": _IsString,
 "IsUndefined": _IsUndefined,
 "JS_Accelerometer_IsRunning": _JS_Accelerometer_IsRunning,
 "JS_Accelerometer_Start": _JS_Accelerometer_Start,
 "JS_Accelerometer_Stop": _JS_Accelerometer_Stop,
 "JS_Cursor_SetImage": _JS_Cursor_SetImage,
 "JS_Cursor_SetShow": _JS_Cursor_SetShow,
 "JS_DOM_MapViewportCoordinateToElementLocalCoordinate": _JS_DOM_MapViewportCoordinateToElementLocalCoordinate,
 "JS_DOM_UnityCanvasSelector": _JS_DOM_UnityCanvasSelector,
 "JS_Eval_OpenURL": _JS_Eval_OpenURL,
 "JS_FileSystem_Initialize": _JS_FileSystem_Initialize,
 "JS_FileSystem_Sync": _JS_FileSystem_Sync,
 "JS_Focus_Window": _JS_Focus_Window,
 "JS_GravitySensor_IsRunning": _JS_GravitySensor_IsRunning,
 "JS_GravitySensor_Start": _JS_GravitySensor_Start,
 "JS_GravitySensor_Stop": _JS_GravitySensor_Stop,
 "JS_Gyroscope_IsRunning": _JS_Gyroscope_IsRunning,
 "JS_Gyroscope_Start": _JS_Gyroscope_Start,
 "JS_Gyroscope_Stop": _JS_Gyroscope_Stop,
 "JS_LinearAccelerationSensor_IsRunning": _JS_LinearAccelerationSensor_IsRunning,
 "JS_LinearAccelerationSensor_Start": _JS_LinearAccelerationSensor_Start,
 "JS_LinearAccelerationSensor_Stop": _JS_LinearAccelerationSensor_Stop,
 "JS_Log_Dump": _JS_Log_Dump,
 "JS_Log_StackTrace": _JS_Log_StackTrace,
 "JS_OrientationSensor_IsRunning": _JS_OrientationSensor_IsRunning,
 "JS_OrientationSensor_Start": _JS_OrientationSensor_Start,
 "JS_OrientationSensor_Stop": _JS_OrientationSensor_Stop,
 "JS_Profiler_InjectJobs": _JS_Profiler_InjectJobs,
 "JS_RequestDeviceSensorPermissionsOnTouch": _JS_RequestDeviceSensorPermissionsOnTouch,
 "JS_RunQuitCallbacks": _JS_RunQuitCallbacks,
 "JS_ScreenOrientation_DeInit": _JS_ScreenOrientation_DeInit,
 "JS_ScreenOrientation_Init": _JS_ScreenOrientation_Init,
 "JS_ScreenOrientation_Lock": _JS_ScreenOrientation_Lock,
 "JS_Sound_Create_Channel": _JS_Sound_Create_Channel,
 "JS_Sound_GetData": _JS_Sound_GetData,
 "JS_Sound_GetLength": _JS_Sound_GetLength,
 "JS_Sound_GetLoadState": _JS_Sound_GetLoadState,
 "JS_Sound_GetMetaData": _JS_Sound_GetMetaData,
 "JS_Sound_Init": _JS_Sound_Init,
 "JS_Sound_Load": _JS_Sound_Load,
 "JS_Sound_Load_PCM": _JS_Sound_Load_PCM,
 "JS_Sound_Play": _JS_Sound_Play,
 "JS_Sound_ReleaseInstance": _JS_Sound_ReleaseInstance,
 "JS_Sound_ResumeIfNeeded": _JS_Sound_ResumeIfNeeded,
 "JS_Sound_Set3D": _JS_Sound_Set3D,
 "JS_Sound_SetListenerOrientation": _JS_Sound_SetListenerOrientation,
 "JS_Sound_SetListenerPosition": _JS_Sound_SetListenerPosition,
 "JS_Sound_SetLoop": _JS_Sound_SetLoop,
 "JS_Sound_SetLoopPoints": _JS_Sound_SetLoopPoints,
 "JS_Sound_SetPaused": _JS_Sound_SetPaused,
 "JS_Sound_SetPitch": _JS_Sound_SetPitch,
 "JS_Sound_SetPosition": _JS_Sound_SetPosition,
 "JS_Sound_SetVolume": _JS_Sound_SetVolume,
 "JS_Sound_Stop": _JS_Sound_Stop,
 "JS_SystemInfo_GetBrowserName": _JS_SystemInfo_GetBrowserName,
 "JS_SystemInfo_GetBrowserVersionString": _JS_SystemInfo_GetBrowserVersionString,
 "JS_SystemInfo_GetCanvasClientSize": _JS_SystemInfo_GetCanvasClientSize,
 "JS_SystemInfo_GetDocumentURL": _JS_SystemInfo_GetDocumentURL,
 "JS_SystemInfo_GetGPUInfo": _JS_SystemInfo_GetGPUInfo,
 "JS_SystemInfo_GetLanguage": _JS_SystemInfo_GetLanguage,
 "JS_SystemInfo_GetMatchWebGLToCanvasSize": _JS_SystemInfo_GetMatchWebGLToCanvasSize,
 "JS_SystemInfo_GetMemory": _JS_SystemInfo_GetMemory,
 "JS_SystemInfo_GetOS": _JS_SystemInfo_GetOS,
 "JS_SystemInfo_GetPreferredDevicePixelRatio": _JS_SystemInfo_GetPreferredDevicePixelRatio,
 "JS_SystemInfo_GetScreenSize": _JS_SystemInfo_GetScreenSize,
 "JS_SystemInfo_GetStreamingAssetsURL": _JS_SystemInfo_GetStreamingAssetsURL,
 "JS_SystemInfo_HasAstcHdr": _JS_SystemInfo_HasAstcHdr,
 "JS_SystemInfo_HasCursorLock": _JS_SystemInfo_HasCursorLock,
 "JS_SystemInfo_HasFullscreen": _JS_SystemInfo_HasFullscreen,
 "JS_SystemInfo_HasWebGL": _JS_SystemInfo_HasWebGL,
 "JS_UnityEngineShouldQuit": _JS_UnityEngineShouldQuit,
 "JS_Video_CanPlayFormat": _JS_Video_CanPlayFormat,
 "JS_Video_Create": _JS_Video_Create,
 "JS_Video_Destroy": _JS_Video_Destroy,
 "JS_Video_Duration": _JS_Video_Duration,
 "JS_Video_EnableAudioTrack": _JS_Video_EnableAudioTrack,
 "JS_Video_GetAudioLanguageCode": _JS_Video_GetAudioLanguageCode,
 "JS_Video_GetNumAudioTracks": _JS_Video_GetNumAudioTracks,
 "JS_Video_Height": _JS_Video_Height,
 "JS_Video_IsPlaying": _JS_Video_IsPlaying,
 "JS_Video_IsReady": _JS_Video_IsReady,
 "JS_Video_Pause": _JS_Video_Pause,
 "JS_Video_Play": _JS_Video_Play,
 "JS_Video_Seek": _JS_Video_Seek,
 "JS_Video_SetEndedHandler": _JS_Video_SetEndedHandler,
 "JS_Video_SetErrorHandler": _JS_Video_SetErrorHandler,
 "JS_Video_SetLoop": _JS_Video_SetLoop,
 "JS_Video_SetMute": _JS_Video_SetMute,
 "JS_Video_SetPlaybackRate": _JS_Video_SetPlaybackRate,
 "JS_Video_SetReadyHandler": _JS_Video_SetReadyHandler,
 "JS_Video_SetSeekedOnceHandler": _JS_Video_SetSeekedOnceHandler,
 "JS_Video_SetVolume": _JS_Video_SetVolume,
 "JS_Video_Time": _JS_Video_Time,
 "JS_Video_UpdateToTexture": _JS_Video_UpdateToTexture,
 "JS_Video_Width": _JS_Video_Width,
 "JS_WebCamVideo_CanPlay": _JS_WebCamVideo_CanPlay,
 "JS_WebCamVideo_GetDeviceName": _JS_WebCamVideo_GetDeviceName,
 "JS_WebCamVideo_GetNativeHeight": _JS_WebCamVideo_GetNativeHeight,
 "JS_WebCamVideo_GetNativeWidth": _JS_WebCamVideo_GetNativeWidth,
 "JS_WebCamVideo_GetNumDevices": _JS_WebCamVideo_GetNumDevices,
 "JS_WebCamVideo_GrabFrame": _JS_WebCamVideo_GrabFrame,
 "JS_WebCamVideo_IsFrontFacing": _JS_WebCamVideo_IsFrontFacing,
 "JS_WebCamVideo_Start": _JS_WebCamVideo_Start,
 "JS_WebCamVideo_Stop": _JS_WebCamVideo_Stop,
 "JS_WebCam_IsSupported": _JS_WebCam_IsSupported,
 "JS_WebRequest_Abort": _JS_WebRequest_Abort,
 "JS_WebRequest_Create": _JS_WebRequest_Create,
 "JS_WebRequest_GetResponseMetaData": _JS_WebRequest_GetResponseMetaData,
 "JS_WebRequest_GetResponseMetaDataLengths": _JS_WebRequest_GetResponseMetaDataLengths,
 "JS_WebRequest_Release": _JS_WebRequest_Release,
 "JS_WebRequest_Send": _JS_WebRequest_Send,
 "JS_WebRequest_SetRedirectLimit": _JS_WebRequest_SetRedirectLimit,
 "JS_WebRequest_SetRequestHeader": _JS_WebRequest_SetRequestHeader,
 "JS_WebRequest_SetTimeout": _JS_WebRequest_SetTimeout,
 "NewInstance": _NewInstance,
 "NewRef": _NewRef,
 "NewTexture": _NewTexture,
 "PushBoolean": _PushBoolean,
 "PushFunction": _PushFunction,
 "PushNull": _PushNull,
 "PushNumber": _PushNumber,
 "PushObject": _PushObject,
 "PushString": _PushString,
 "PushStruct": _PushStruct,
 "PushUndefined": _PushUndefined,
 "RemRef": _RemRef,
 "RetrieveBridgeObject": _RetrieveBridgeObject,
 "RetrieveWindowObject": _RetrieveWindowObject,
 "Send": _Send,
 "SetProperty": _SetProperty,
 "SetRef": _SetRef,
 "SetupRpm": _SetupRpm,
 "ShiftStack": _ShiftStack,
 "ShowReadyPlayerMeFrame": _ShowReadyPlayerMeFrame,
 "__cxa_allocate_exception": ___cxa_allocate_exception,
 "__cxa_atexit": ___cxa_atexit,
 "__cxa_begin_catch": ___cxa_begin_catch,
 "__cxa_end_catch": ___cxa_end_catch,
 "__cxa_find_matching_catch_2": ___cxa_find_matching_catch_2,
 "__cxa_find_matching_catch_3": ___cxa_find_matching_catch_3,
 "__cxa_find_matching_catch_4": ___cxa_find_matching_catch_4,
 "__cxa_free_exception": ___cxa_free_exception,
 "__cxa_rethrow": ___cxa_rethrow,
 "__cxa_throw": ___cxa_throw,
 "__gmtime_r": ___gmtime_r,
 "__localtime_r": ___localtime_r,
 "__resumeException": ___resumeException,
 "__sys__newselect": ___sys__newselect,
 "__sys_accept4": ___sys_accept4,
 "__sys_access": ___sys_access,
 "__sys_bind": ___sys_bind,
 "__sys_chmod": ___sys_chmod,
 "__sys_connect": ___sys_connect,
 "__sys_dup2": ___sys_dup2,
 "__sys_fcntl64": ___sys_fcntl64,
 "__sys_fstat64": ___sys_fstat64,
 "__sys_ftruncate64": ___sys_ftruncate64,
 "__sys_getcwd": ___sys_getcwd,
 "__sys_getdents64": ___sys_getdents64,
 "__sys_getegid32": ___sys_getegid32,
 "__sys_geteuid32": ___sys_geteuid32,
 "__sys_getpeername": ___sys_getpeername,
 "__sys_getrusage": ___sys_getrusage,
 "__sys_getsockname": ___sys_getsockname,
 "__sys_getsockopt": ___sys_getsockopt,
 "__sys_getuid32": ___sys_getuid32,
 "__sys_ioctl": ___sys_ioctl,
 "__sys_listen": ___sys_listen,
 "__sys_lstat64": ___sys_lstat64,
 "__sys_mkdir": ___sys_mkdir,
 "__sys_mmap2": ___sys_mmap2,
 "__sys_munmap": ___sys_munmap,
 "__sys_open": ___sys_open,
 "__sys_pipe": ___sys_pipe,
 "__sys_poll": ___sys_poll,
 "__sys_readlink": ___sys_readlink,
 "__sys_recvfrom": ___sys_recvfrom,
 "__sys_recvmsg": ___sys_recvmsg,
 "__sys_rename": ___sys_rename,
 "__sys_rmdir": ___sys_rmdir,
 "__sys_sendmsg": ___sys_sendmsg,
 "__sys_sendto": ___sys_sendto,
 "__sys_setsockopt": ___sys_setsockopt,
 "__sys_shutdown": ___sys_shutdown,
 "__sys_socket": ___sys_socket,
 "__sys_stat64": ___sys_stat64,
 "__sys_statfs64": ___sys_statfs64,
 "__sys_truncate64": ___sys_truncate64,
 "__sys_uname": ___sys_uname,
 "__sys_unlink": ___sys_unlink,
 "abort": _abort,
 "atexit": _atexit,
 "clock": _clock,
 "clock_getres": _clock_getres,
 "clock_gettime": _clock_gettime,
 "difftime": _difftime,
 "dlclose": _dlclose,
 "dlerror": _dlerror,
 "dlopen": _dlopen,
 "dlsym": _dlsym,
 "emscripten_asm_const_int": _emscripten_asm_const_int,
 "emscripten_asm_const_int_sync_on_main_thread": _emscripten_asm_const_int_sync_on_main_thread,
 "emscripten_cancel_main_loop": _emscripten_cancel_main_loop,
 "emscripten_clear_interval": _emscripten_clear_interval,
 "emscripten_exit_fullscreen": _emscripten_exit_fullscreen,
 "emscripten_exit_pointerlock": _emscripten_exit_pointerlock,
 "emscripten_get_canvas_element_size": _emscripten_get_canvas_element_size,
 "emscripten_get_fullscreen_status": _emscripten_get_fullscreen_status,
 "emscripten_get_gamepad_status": _emscripten_get_gamepad_status,
 "emscripten_get_heap_max": _emscripten_get_heap_max,
 "emscripten_get_now": _emscripten_get_now,
 "emscripten_get_num_gamepads": _emscripten_get_num_gamepads,
 "emscripten_html5_remove_all_event_listeners": _emscripten_html5_remove_all_event_listeners,
 "emscripten_is_webgl_context_lost": _emscripten_is_webgl_context_lost,
 "emscripten_log": _emscripten_log,
 "emscripten_longjmp": _emscripten_longjmp,
 "emscripten_memcpy_big": _emscripten_memcpy_big,
 "emscripten_request_fullscreen": _emscripten_request_fullscreen,
 "emscripten_request_pointerlock": _emscripten_request_pointerlock,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "emscripten_sample_gamepad_data": _emscripten_sample_gamepad_data,
 "emscripten_set_blur_callback_on_thread": _emscripten_set_blur_callback_on_thread,
 "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
 "emscripten_set_focus_callback_on_thread": _emscripten_set_focus_callback_on_thread,
 "emscripten_set_fullscreenchange_callback_on_thread": _emscripten_set_fullscreenchange_callback_on_thread,
 "emscripten_set_gamepadconnected_callback_on_thread": _emscripten_set_gamepadconnected_callback_on_thread,
 "emscripten_set_gamepaddisconnected_callback_on_thread": _emscripten_set_gamepaddisconnected_callback_on_thread,
 "emscripten_set_interval": _emscripten_set_interval,
 "emscripten_set_keydown_callback_on_thread": _emscripten_set_keydown_callback_on_thread,
 "emscripten_set_keypress_callback_on_thread": _emscripten_set_keypress_callback_on_thread,
 "emscripten_set_keyup_callback_on_thread": _emscripten_set_keyup_callback_on_thread,
 "emscripten_set_main_loop": _emscripten_set_main_loop,
 "emscripten_set_main_loop_timing": _emscripten_set_main_loop_timing,
 "emscripten_set_mousedown_callback_on_thread": _emscripten_set_mousedown_callback_on_thread,
 "emscripten_set_mousemove_callback_on_thread": _emscripten_set_mousemove_callback_on_thread,
 "emscripten_set_mouseup_callback_on_thread": _emscripten_set_mouseup_callback_on_thread,
 "emscripten_set_touchcancel_callback_on_thread": _emscripten_set_touchcancel_callback_on_thread,
 "emscripten_set_touchend_callback_on_thread": _emscripten_set_touchend_callback_on_thread,
 "emscripten_set_touchmove_callback_on_thread": _emscripten_set_touchmove_callback_on_thread,
 "emscripten_set_touchstart_callback_on_thread": _emscripten_set_touchstart_callback_on_thread,
 "emscripten_set_wheel_callback_on_thread": _emscripten_set_wheel_callback_on_thread,
 "emscripten_thread_sleep": _emscripten_thread_sleep,
 "emscripten_webgl_create_context": _emscripten_webgl_create_context,
 "emscripten_webgl_destroy_context": _emscripten_webgl_destroy_context,
 "emscripten_webgl_enable_extension": _emscripten_webgl_enable_extension,
 "emscripten_webgl_get_current_context": _emscripten_webgl_get_current_context,
 "emscripten_webgl_init_context_attributes": _emscripten_webgl_init_context_attributes,
 "emscripten_webgl_make_context_current": _emscripten_webgl_make_context_current,
 "environ_get": _environ_get,
 "environ_sizes_get": _environ_sizes_get,
 "exit": _exit,
 "fd_close": _fd_close,
 "fd_fdstat_get": _fd_fdstat_get,
 "fd_read": _fd_read,
 "fd_seek": _fd_seek,
 "fd_write": _fd_write,
 "flock": _flock,
 "getTempRet0": _getTempRet0,
 "getaddrinfo": _getaddrinfo,
 "gethostbyaddr": _gethostbyaddr,
 "gethostbyname": _gethostbyname,
 "getnameinfo": _getnameinfo,
 "getpwuid": _getpwuid,
 "gettimeofday": _gettimeofday,
 "glActiveTexture": _glActiveTexture,
 "glAttachShader": _glAttachShader,
 "glBeginQuery": _glBeginQuery,
 "glBeginTransformFeedback": _glBeginTransformFeedback,
 "glBindAttribLocation": _glBindAttribLocation,
 "glBindBuffer": _glBindBuffer,
 "glBindBufferBase": _glBindBufferBase,
 "glBindBufferRange": _glBindBufferRange,
 "glBindFramebuffer": _glBindFramebuffer,
 "glBindRenderbuffer": _glBindRenderbuffer,
 "glBindSampler": _glBindSampler,
 "glBindTexture": _glBindTexture,
 "glBindTransformFeedback": _glBindTransformFeedback,
 "glBindVertexArray": _glBindVertexArray,
 "glBlendEquation": _glBlendEquation,
 "glBlendEquationSeparate": _glBlendEquationSeparate,
 "glBlendFuncSeparate": _glBlendFuncSeparate,
 "glBlitFramebuffer": _glBlitFramebuffer,
 "glBufferData": _glBufferData,
 "glBufferSubData": _glBufferSubData,
 "glCheckFramebufferStatus": _glCheckFramebufferStatus,
 "glClear": _glClear,
 "glClearBufferfi": _glClearBufferfi,
 "glClearBufferfv": _glClearBufferfv,
 "glClearBufferuiv": _glClearBufferuiv,
 "glClearColor": _glClearColor,
 "glClearDepthf": _glClearDepthf,
 "glClearStencil": _glClearStencil,
 "glClientWaitSync": _glClientWaitSync,
 "glColorMask": _glColorMask,
 "glCompileShader": _glCompileShader,
 "glCompressedTexImage2D": _glCompressedTexImage2D,
 "glCompressedTexImage3D": _glCompressedTexImage3D,
 "glCompressedTexSubImage2D": _glCompressedTexSubImage2D,
 "glCompressedTexSubImage3D": _glCompressedTexSubImage3D,
 "glCopyBufferSubData": _glCopyBufferSubData,
 "glCopyTexImage2D": _glCopyTexImage2D,
 "glCopyTexSubImage2D": _glCopyTexSubImage2D,
 "glCreateProgram": _glCreateProgram,
 "glCreateShader": _glCreateShader,
 "glCullFace": _glCullFace,
 "glDeleteBuffers": _glDeleteBuffers,
 "glDeleteFramebuffers": _glDeleteFramebuffers,
 "glDeleteProgram": _glDeleteProgram,
 "glDeleteQueries": _glDeleteQueries,
 "glDeleteRenderbuffers": _glDeleteRenderbuffers,
 "glDeleteSamplers": _glDeleteSamplers,
 "glDeleteShader": _glDeleteShader,
 "glDeleteSync": _glDeleteSync,
 "glDeleteTextures": _glDeleteTextures,
 "glDeleteTransformFeedbacks": _glDeleteTransformFeedbacks,
 "glDeleteVertexArrays": _glDeleteVertexArrays,
 "glDepthFunc": _glDepthFunc,
 "glDepthMask": _glDepthMask,
 "glDetachShader": _glDetachShader,
 "glDisable": _glDisable,
 "glDisableVertexAttribArray": _glDisableVertexAttribArray,
 "glDrawArrays": _glDrawArrays,
 "glDrawArraysInstanced": _glDrawArraysInstanced,
 "glDrawBuffers": _glDrawBuffers,
 "glDrawElements": _glDrawElements,
 "glDrawElementsInstanced": _glDrawElementsInstanced,
 "glEnable": _glEnable,
 "glEnableVertexAttribArray": _glEnableVertexAttribArray,
 "glEndQuery": _glEndQuery,
 "glEndTransformFeedback": _glEndTransformFeedback,
 "glFenceSync": _glFenceSync,
 "glFinish": _glFinish,
 "glFlush": _glFlush,
 "glFlushMappedBufferRange": _glFlushMappedBufferRange,
 "glFramebufferRenderbuffer": _glFramebufferRenderbuffer,
 "glFramebufferTexture2D": _glFramebufferTexture2D,
 "glFramebufferTextureLayer": _glFramebufferTextureLayer,
 "glFrontFace": _glFrontFace,
 "glGenBuffers": _glGenBuffers,
 "glGenFramebuffers": _glGenFramebuffers,
 "glGenQueries": _glGenQueries,
 "glGenRenderbuffers": _glGenRenderbuffers,
 "glGenSamplers": _glGenSamplers,
 "glGenTextures": _glGenTextures,
 "glGenTransformFeedbacks": _glGenTransformFeedbacks,
 "glGenVertexArrays": _glGenVertexArrays,
 "glGenerateMipmap": _glGenerateMipmap,
 "glGetActiveAttrib": _glGetActiveAttrib,
 "glGetActiveUniform": _glGetActiveUniform,
 "glGetActiveUniformBlockName": _glGetActiveUniformBlockName,
 "glGetActiveUniformBlockiv": _glGetActiveUniformBlockiv,
 "glGetActiveUniformsiv": _glGetActiveUniformsiv,
 "glGetAttribLocation": _glGetAttribLocation,
 "glGetError": _glGetError,
 "glGetFramebufferAttachmentParameteriv": _glGetFramebufferAttachmentParameteriv,
 "glGetIntegeri_v": _glGetIntegeri_v,
 "glGetIntegerv": _glGetIntegerv,
 "glGetInternalformativ": _glGetInternalformativ,
 "glGetProgramBinary": _glGetProgramBinary,
 "glGetProgramInfoLog": _glGetProgramInfoLog,
 "glGetProgramiv": _glGetProgramiv,
 "glGetQueryObjectuiv": _glGetQueryObjectuiv,
 "glGetQueryiv": _glGetQueryiv,
 "glGetRenderbufferParameteriv": _glGetRenderbufferParameteriv,
 "glGetShaderInfoLog": _glGetShaderInfoLog,
 "glGetShaderPrecisionFormat": _glGetShaderPrecisionFormat,
 "glGetShaderSource": _glGetShaderSource,
 "glGetShaderiv": _glGetShaderiv,
 "glGetString": _glGetString,
 "glGetStringi": _glGetStringi,
 "glGetTexParameteriv": _glGetTexParameteriv,
 "glGetUniformBlockIndex": _glGetUniformBlockIndex,
 "glGetUniformIndices": _glGetUniformIndices,
 "glGetUniformLocation": _glGetUniformLocation,
 "glGetUniformiv": _glGetUniformiv,
 "glGetVertexAttribiv": _glGetVertexAttribiv,
 "glInvalidateFramebuffer": _glInvalidateFramebuffer,
 "glIsEnabled": _glIsEnabled,
 "glIsVertexArray": _glIsVertexArray,
 "glLinkProgram": _glLinkProgram,
 "glMapBufferRange": _glMapBufferRange,
 "glPixelStorei": _glPixelStorei,
 "glPolygonOffset": _glPolygonOffset,
 "glProgramBinary": _glProgramBinary,
 "glProgramParameteri": _glProgramParameteri,
 "glReadBuffer": _glReadBuffer,
 "glReadPixels": _glReadPixels,
 "glRenderbufferStorage": _glRenderbufferStorage,
 "glRenderbufferStorageMultisample": _glRenderbufferStorageMultisample,
 "glSamplerParameteri": _glSamplerParameteri,
 "glScissor": _glScissor,
 "glShaderSource": _glShaderSource,
 "glStencilFuncSeparate": _glStencilFuncSeparate,
 "glStencilMask": _glStencilMask,
 "glStencilOpSeparate": _glStencilOpSeparate,
 "glTexImage2D": _glTexImage2D,
 "glTexImage3D": _glTexImage3D,
 "glTexParameterf": _glTexParameterf,
 "glTexParameteri": _glTexParameteri,
 "glTexParameteriv": _glTexParameteriv,
 "glTexStorage2D": _glTexStorage2D,
 "glTexStorage3D": _glTexStorage3D,
 "glTexSubImage2D": _glTexSubImage2D,
 "glTexSubImage3D": _glTexSubImage3D,
 "glTransformFeedbackVaryings": _glTransformFeedbackVaryings,
 "glUniform1fv": _glUniform1fv,
 "glUniform1i": _glUniform1i,
 "glUniform1iv": _glUniform1iv,
 "glUniform1uiv": _glUniform1uiv,
 "glUniform2fv": _glUniform2fv,
 "glUniform2iv": _glUniform2iv,
 "glUniform2uiv": _glUniform2uiv,
 "glUniform3fv": _glUniform3fv,
 "glUniform3iv": _glUniform3iv,
 "glUniform3uiv": _glUniform3uiv,
 "glUniform4fv": _glUniform4fv,
 "glUniform4iv": _glUniform4iv,
 "glUniform4uiv": _glUniform4uiv,
 "glUniformBlockBinding": _glUniformBlockBinding,
 "glUniformMatrix3fv": _glUniformMatrix3fv,
 "glUniformMatrix4fv": _glUniformMatrix4fv,
 "glUnmapBuffer": _glUnmapBuffer,
 "glUseProgram": _glUseProgram,
 "glValidateProgram": _glValidateProgram,
 "glVertexAttrib4f": _glVertexAttrib4f,
 "glVertexAttrib4fv": _glVertexAttrib4fv,
 "glVertexAttribIPointer": _glVertexAttribIPointer,
 "glVertexAttribPointer": _glVertexAttribPointer,
 "glViewport": _glViewport,
 "invoke_dddi": invoke_dddi,
 "invoke_dii": invoke_dii,
 "invoke_diii": invoke_diii,
 "invoke_diiii": invoke_diiii,
 "invoke_dji": invoke_dji,
 "invoke_fffi": invoke_fffi,
 "invoke_fi": invoke_fi,
 "invoke_fii": invoke_fii,
 "invoke_fiii": invoke_fiii,
 "invoke_fiiii": invoke_fiiii,
 "invoke_i": invoke_i,
 "invoke_idi": invoke_idi,
 "invoke_ifi": invoke_ifi,
 "invoke_ii": invoke_ii,
 "invoke_iidi": invoke_iidi,
 "invoke_iifi": invoke_iifi,
 "invoke_iii": invoke_iii,
 "invoke_iiidi": invoke_iiidi,
 "invoke_iiifi": invoke_iiifi,
 "invoke_iiifii": invoke_iiifii,
 "invoke_iiii": invoke_iiii,
 "invoke_iiiif": invoke_iiiif,
 "invoke_iiiii": invoke_iiiii,
 "invoke_iiiiii": invoke_iiiiii,
 "invoke_iiiiiii": invoke_iiiiiii,
 "invoke_iiiiiiii": invoke_iiiiiiii,
 "invoke_iiiiiiiii": invoke_iiiiiiiii,
 "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
 "invoke_iiiiiiiiiii": invoke_iiiiiiiiiii,
 "invoke_iiiiiiiiiiiii": invoke_iiiiiiiiiiiii,
 "invoke_iiiiiiiiiji": invoke_iiiiiiiiiji,
 "invoke_iiiiij": invoke_iiiiij,
 "invoke_iiiijjii": invoke_iiiijjii,
 "invoke_iiij": invoke_iiij,
 "invoke_iiiji": invoke_iiiji,
 "invoke_iiijiii": invoke_iiijiii,
 "invoke_iij": invoke_iij,
 "invoke_iiji": invoke_iiji,
 "invoke_iijii": invoke_iijii,
 "invoke_iijiii": invoke_iijiii,
 "invoke_iijiiiiii": invoke_iijiiiiii,
 "invoke_iijji": invoke_iijji,
 "invoke_iijjiiiiii": invoke_iijjiiiiii,
 "invoke_iji": invoke_iji,
 "invoke_ijii": invoke_ijii,
 "invoke_ijji": invoke_ijji,
 "invoke_j": invoke_j,
 "invoke_jdi": invoke_jdi,
 "invoke_jfi": invoke_jfi,
 "invoke_ji": invoke_ji,
 "invoke_jii": invoke_jii,
 "invoke_jiii": invoke_jiii,
 "invoke_jiiii": invoke_jiiii,
 "invoke_jiiiii": invoke_jiiiii,
 "invoke_jiiiiiiiiii": invoke_jiiiiiiiiii,
 "invoke_jiiji": invoke_jiiji,
 "invoke_jiji": invoke_jiji,
 "invoke_jijiii": invoke_jijiii,
 "invoke_jijj": invoke_jijj,
 "invoke_jji": invoke_jji,
 "invoke_jjii": invoke_jjii,
 "invoke_jjji": invoke_jjji,
 "invoke_v": invoke_v,
 "invoke_vi": invoke_vi,
 "invoke_vidd": invoke_vidd,
 "invoke_vidi": invoke_vidi,
 "invoke_vifi": invoke_vifi,
 "invoke_vifii": invoke_vifii,
 "invoke_vifiiiii": invoke_vifiiiii,
 "invoke_vii": invoke_vii,
 "invoke_viiff": invoke_viiff,
 "invoke_viiffi": invoke_viiffi,
 "invoke_viifi": invoke_viifi,
 "invoke_viififii": invoke_viififii,
 "invoke_viii": invoke_viii,
 "invoke_viiii": invoke_viiii,
 "invoke_viiiif": invoke_viiiif,
 "invoke_viiiifi": invoke_viiiifi,
 "invoke_viiiii": invoke_viiiii,
 "invoke_viiiiii": invoke_viiiiii,
 "invoke_viiiiiii": invoke_viiiiiii,
 "invoke_viiiiiiifiifiii": invoke_viiiiiiifiifiii,
 "invoke_viiiiiiii": invoke_viiiiiiii,
 "invoke_viiiiiiiii": invoke_viiiiiiiii,
 "invoke_viiiiiiiiifi": invoke_viiiiiiiiifi,
 "invoke_viiiiiiiiii": invoke_viiiiiiiiii,
 "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii,
 "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii,
 "invoke_viiiiiiiiiiiii": invoke_viiiiiiiiiiiii,
 "invoke_viiiiij": invoke_viiiiij,
 "invoke_viiiij": invoke_viiiij,
 "invoke_viiij": invoke_viiij,
 "invoke_viiiji": invoke_viiiji,
 "invoke_viij": invoke_viij,
 "invoke_viiji": invoke_viiji,
 "invoke_viijii": invoke_viijii,
 "invoke_viijiiiiii": invoke_viijiiiiii,
 "invoke_viijiiijiiii": invoke_viijiiijiiii,
 "invoke_viji": invoke_viji,
 "invoke_vijii": invoke_vijii,
 "invoke_vijiii": invoke_vijiii,
 "invoke_vijjji": invoke_vijjji,
 "invoke_vji": invoke_vji,
 "invoke_vjiiiii": invoke_vjiiiii,
 "invoke_vjjjiiii": invoke_vjjjiiii,
 "llvm_eh_typeid_for": _llvm_eh_typeid_for,
 "mktime": _mktime,
 "setTempRet0": _setTempRet0,
 "sigaction": _sigaction,
 "sigemptyset": _sigemptyset,
 "strftime": _strftime,
 "time": _time,
 "utime": _utime
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

var _browserinteraction_set_callbacks = Module["_browserinteraction_set_callbacks"] = createExportWrapper("browserinteraction_set_callbacks");

var _call_cb_vs = Module["_call_cb_vs"] = createExportWrapper("call_cb_vs");

var _SendMessageFloat = Module["_SendMessageFloat"] = createExportWrapper("SendMessageFloat");

var _SendMessageString = Module["_SendMessageString"] = createExportWrapper("SendMessageString");

var _SendMessage = Module["_SendMessage"] = createExportWrapper("SendMessage");

var _SetFullscreen = Module["_SetFullscreen"] = createExportWrapper("SetFullscreen");

var _main = Module["_main"] = createExportWrapper("main");

var _InjectProfilerSample = Module["_InjectProfilerSample"] = createExportWrapper("InjectProfilerSample");

var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

var _htonl = Module["_htonl"] = createExportWrapper("htonl");

var _htons = Module["_htons"] = createExportWrapper("htons");

var _ntohs = Module["_ntohs"] = createExportWrapper("ntohs");

var _fflush = Module["_fflush"] = createExportWrapper("fflush");

var __get_tzname = Module["__get_tzname"] = createExportWrapper("_get_tzname");

var __get_daylight = Module["__get_daylight"] = createExportWrapper("_get_daylight");

var __get_timezone = Module["__get_timezone"] = createExportWrapper("_get_timezone");

var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
 return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
 return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
 return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

var ___cxa_demangle = Module["___cxa_demangle"] = createExportWrapper("__cxa_demangle");

var ___cxa_can_catch = Module["___cxa_can_catch"] = createExportWrapper("__cxa_can_catch");

var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type");

var _malloc = Module["_malloc"] = createExportWrapper("malloc");

var _free = Module["_free"] = createExportWrapper("free");

var _memalign = Module["_memalign"] = createExportWrapper("memalign");

var _memset = Module["_memset"] = createExportWrapper("memset");

var _strlen = Module["_strlen"] = createExportWrapper("strlen");

var dynCall_iii = Module["dynCall_iii"] = createExportWrapper("dynCall_iii");

var dynCall_iidiiii = Module["dynCall_iidiiii"] = createExportWrapper("dynCall_iidiiii");

var dynCall_vii = Module["dynCall_vii"] = createExportWrapper("dynCall_vii");

var dynCall_iiii = Module["dynCall_iiii"] = createExportWrapper("dynCall_iiii");

var dynCall_iiiii = Module["dynCall_iiiii"] = createExportWrapper("dynCall_iiiii");

var dynCall_i = Module["dynCall_i"] = createExportWrapper("dynCall_i");

var dynCall_v = Module["dynCall_v"] = createExportWrapper("dynCall_v");

var dynCall_vi = Module["dynCall_vi"] = createExportWrapper("dynCall_vi");

var dynCall_ii = Module["dynCall_ii"] = createExportWrapper("dynCall_ii");

var dynCall_viiiiii = Module["dynCall_viiiiii"] = createExportWrapper("dynCall_viiiiii");

var dynCall_viiiii = Module["dynCall_viiiii"] = createExportWrapper("dynCall_viiiii");

var dynCall_viiii = Module["dynCall_viiii"] = createExportWrapper("dynCall_viiii");

var dynCall_iiiiii = Module["dynCall_iiiiii"] = createExportWrapper("dynCall_iiiiii");

var dynCall_viii = Module["dynCall_viii"] = createExportWrapper("dynCall_viii");

var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

var dynCall_iiij = Module["dynCall_iiij"] = createExportWrapper("dynCall_iiij");

var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = createExportWrapper("dynCall_iiiiiiii");

var dynCall_iiijiii = Module["dynCall_iiijiii"] = createExportWrapper("dynCall_iiijiii");

var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");

var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = createExportWrapper("dynCall_iiiiiii");

var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = createExportWrapper("dynCall_viiiiiii");

var dynCall_fiiffi = Module["dynCall_fiiffi"] = createExportWrapper("dynCall_fiiffi");

var dynCall_viiififii = Module["dynCall_viiififii"] = createExportWrapper("dynCall_viiififii");

var dynCall_viiff = Module["dynCall_viiff"] = createExportWrapper("dynCall_viiff");

var dynCall_fii = Module["dynCall_fii"] = createExportWrapper("dynCall_fii");

var dynCall_viiiiiiiiifi = Module["dynCall_viiiiiiiiifi"] = createExportWrapper("dynCall_viiiiiiiiifi");

var dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiii");

var dynCall_fi = Module["dynCall_fi"] = createExportWrapper("dynCall_fi");

var dynCall_iiifi = Module["dynCall_iiifi"] = createExportWrapper("dynCall_iiifi");

var dynCall_iiiifi = Module["dynCall_iiiifi"] = createExportWrapper("dynCall_iiiifi");

var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

var dynCall_vifi = Module["dynCall_vifi"] = createExportWrapper("dynCall_vifi");

var dynCall_jiiiiiiiiii = Module["dynCall_jiiiiiiiiii"] = createExportWrapper("dynCall_jiiiiiiiiii");

var dynCall_viiiiij = Module["dynCall_viiiiij"] = createExportWrapper("dynCall_viiiiij");

var dynCall_jiii = Module["dynCall_jiii"] = createExportWrapper("dynCall_jiii");

var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiii");

var dynCall_iiiif = Module["dynCall_iiiif"] = createExportWrapper("dynCall_iiiif");

var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiii");

var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = createExportWrapper("dynCall_viiiiiiii");

var dynCall_iifi = Module["dynCall_iifi"] = createExportWrapper("dynCall_iifi");

var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiii");

var dynCall_ijji = Module["dynCall_ijji"] = createExportWrapper("dynCall_ijji");

var dynCall_jdi = Module["dynCall_jdi"] = createExportWrapper("dynCall_jdi");

var dynCall_jjji = Module["dynCall_jjji"] = createExportWrapper("dynCall_jjji");

var dynCall_vijjji = Module["dynCall_vijjji"] = createExportWrapper("dynCall_vijjji");

var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiii");

var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

var dynCall_jiiji = Module["dynCall_jiiji"] = createExportWrapper("dynCall_jiiji");

var dynCall_dii = Module["dynCall_dii"] = createExportWrapper("dynCall_dii");

var dynCall_viijiiijiiii = Module["dynCall_viijiiijiiii"] = createExportWrapper("dynCall_viijiiijiiii");

var dynCall_iiijii = Module["dynCall_iiijii"] = createExportWrapper("dynCall_iiijii");

var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");

var dynCall_iijiiii = Module["dynCall_iijiiii"] = createExportWrapper("dynCall_iijiiii");

var dynCall_jijiii = Module["dynCall_jijiii"] = createExportWrapper("dynCall_jijiii");

var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

var dynCall_iijiiiiii = Module["dynCall_iijiiiiii"] = createExportWrapper("dynCall_iijiiiiii");

var dynCall_iijjiiiiii = Module["dynCall_iijjiiiiii"] = createExportWrapper("dynCall_iijjiiiiii");

var dynCall_iiiijjii = Module["dynCall_iiiijjii"] = createExportWrapper("dynCall_iiiijjii");

var dynCall_iijii = Module["dynCall_iijii"] = createExportWrapper("dynCall_iijii");

var dynCall_vijii = Module["dynCall_vijii"] = createExportWrapper("dynCall_vijii");

var dynCall_iijiii = Module["dynCall_iijiii"] = createExportWrapper("dynCall_iijiii");

var dynCall_j = Module["dynCall_j"] = createExportWrapper("dynCall_j");

var dynCall_jijj = Module["dynCall_jijj"] = createExportWrapper("dynCall_jijj");

var dynCall_iiiiiiiiiji = Module["dynCall_iiiiiiiiiji"] = createExportWrapper("dynCall_iiiiiiiiiji");

var dynCall_vji = Module["dynCall_vji"] = createExportWrapper("dynCall_vji");

var dynCall_viifi = Module["dynCall_viifi"] = createExportWrapper("dynCall_viifi");

var dynCall_fiii = Module["dynCall_fiii"] = createExportWrapper("dynCall_fiii");

var dynCall_viiij = Module["dynCall_viiij"] = createExportWrapper("dynCall_viiij");

var dynCall_viiiifi = Module["dynCall_viiiifi"] = createExportWrapper("dynCall_viiiifi");

var dynCall_ifi = Module["dynCall_ifi"] = createExportWrapper("dynCall_ifi");

var dynCall_idi = Module["dynCall_idi"] = createExportWrapper("dynCall_idi");

var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiii");

var dynCall_diii = Module["dynCall_diii"] = createExportWrapper("dynCall_diii");

var dynCall_viji = Module["dynCall_viji"] = createExportWrapper("dynCall_viji");

var dynCall_iiiiji = Module["dynCall_iiiiji"] = createExportWrapper("dynCall_iiiiji");

var dynCall_viiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiii");

var dynCall_vidi = Module["dynCall_vidi"] = createExportWrapper("dynCall_vidi");

var dynCall_fffi = Module["dynCall_fffi"] = createExportWrapper("dynCall_fffi");

var dynCall_jji = Module["dynCall_jji"] = createExportWrapper("dynCall_jji");

var dynCall_dddi = Module["dynCall_dddi"] = createExportWrapper("dynCall_dddi");

var dynCall_diiii = Module["dynCall_diiii"] = createExportWrapper("dynCall_diiii");

var dynCall_iidi = Module["dynCall_iidi"] = createExportWrapper("dynCall_iidi");

var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiii");

var dynCall_jjii = Module["dynCall_jjii"] = createExportWrapper("dynCall_jjii");

var dynCall_dji = Module["dynCall_dji"] = createExportWrapper("dynCall_dji");

var dynCall_iji = Module["dynCall_iji"] = createExportWrapper("dynCall_iji");

var dynCall_viiiif = Module["dynCall_viiiif"] = createExportWrapper("dynCall_viiiif");

var dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiii");

var dynCall_viiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiiii");

var dynCall_viiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiiiii");

var dynCall_viiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiiiiii");

var dynCall_viiiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiiiiiii");

var dynCall_viiiiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiiiiiiiiii");

var dynCall_jfi = Module["dynCall_jfi"] = createExportWrapper("dynCall_jfi");

var dynCall_fiffffi = Module["dynCall_fiffffi"] = createExportWrapper("dynCall_fiffffi");

var dynCall_viiiiiiifiifiii = Module["dynCall_viiiiiiifiifiii"] = createExportWrapper("dynCall_viiiiiiifiifiii");

var dynCall_iijji = Module["dynCall_iijji"] = createExportWrapper("dynCall_iijji");

var dynCall_fiiii = Module["dynCall_fiiii"] = createExportWrapper("dynCall_fiiii");

var dynCall_viiffi = Module["dynCall_viiffi"] = createExportWrapper("dynCall_viiffi");

var dynCall_iiiifii = Module["dynCall_iiiifii"] = createExportWrapper("dynCall_iiiifii");

var dynCall_iiifii = Module["dynCall_iiifii"] = createExportWrapper("dynCall_iiifii");

var dynCall_viiiifii = Module["dynCall_viiiifii"] = createExportWrapper("dynCall_viiiifii");

var dynCall_viiiji = Module["dynCall_viiiji"] = createExportWrapper("dynCall_viiiji");

var dynCall_vifii = Module["dynCall_vifii"] = createExportWrapper("dynCall_vifii");

var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiii");

var dynCall_viijiiiiii = Module["dynCall_viijiiiiii"] = createExportWrapper("dynCall_viijiiiiii");

var dynCall_vijiii = Module["dynCall_vijiii"] = createExportWrapper("dynCall_vijiii");

var dynCall_vjjjiiii = Module["dynCall_vjjjiiii"] = createExportWrapper("dynCall_vjjjiiii");

var dynCall_vjiiiii = Module["dynCall_vjiiiii"] = createExportWrapper("dynCall_vjiiiii");

var dynCall_jiiiii = Module["dynCall_jiiiii"] = createExportWrapper("dynCall_jiiiii");

var dynCall_viij = Module["dynCall_viij"] = createExportWrapper("dynCall_viij");

var dynCall_viiiij = Module["dynCall_viiiij"] = createExportWrapper("dynCall_viiiij");

var dynCall_iiiiifii = Module["dynCall_iiiiifii"] = createExportWrapper("dynCall_iiiiifii");

var dynCall_viijjii = Module["dynCall_viijjii"] = createExportWrapper("dynCall_viijjii");

var dynCall_iiiji = Module["dynCall_iiiji"] = createExportWrapper("dynCall_iiiji");

var dynCall_iiidi = Module["dynCall_iiidi"] = createExportWrapper("dynCall_iiidi");

var dynCall_viiji = Module["dynCall_viiji"] = createExportWrapper("dynCall_viiji");

var dynCall_viidi = Module["dynCall_viidi"] = createExportWrapper("dynCall_viidi");

var dynCall_vifiiiii = Module["dynCall_vifiiiii"] = createExportWrapper("dynCall_vifiiiii");

var dynCall_viifii = Module["dynCall_viifii"] = createExportWrapper("dynCall_viifii");

var dynCall_viiifii = Module["dynCall_viiifii"] = createExportWrapper("dynCall_viiifii");

var dynCall_iifii = Module["dynCall_iifii"] = createExportWrapper("dynCall_iifii");

var dynCall_viffi = Module["dynCall_viffi"] = createExportWrapper("dynCall_viffi");

var dynCall_iifffi = Module["dynCall_iifffi"] = createExportWrapper("dynCall_iifffi");

var dynCall_vifffi = Module["dynCall_vifffi"] = createExportWrapper("dynCall_vifffi");

var dynCall_ijii = Module["dynCall_ijii"] = createExportWrapper("dynCall_ijii");

var dynCall_fiiiii = Module["dynCall_fiiiii"] = createExportWrapper("dynCall_fiiiii");

var dynCall_iifiiiiii = Module["dynCall_iifiiiiii"] = createExportWrapper("dynCall_iifiiiiii");

var dynCall_iifiiiii = Module["dynCall_iifiiiii"] = createExportWrapper("dynCall_iifiiiii");

var dynCall_iiffiiiii = Module["dynCall_iiffiiiii"] = createExportWrapper("dynCall_iiffiiiii");

var dynCall_fifi = Module["dynCall_fifi"] = createExportWrapper("dynCall_fifi");

var dynCall_iifiii = Module["dynCall_iifiii"] = createExportWrapper("dynCall_iifiii");

var dynCall_fiifii = Module["dynCall_fiifii"] = createExportWrapper("dynCall_fiifii");

var dynCall_viiiiiifiifiiii = Module["dynCall_viiiiiifiifiiii"] = createExportWrapper("dynCall_viiiiiifiifiiii");

var dynCall_diidi = Module["dynCall_diidi"] = createExportWrapper("dynCall_diidi");

var dynCall_fiifdi = Module["dynCall_fiifdi"] = createExportWrapper("dynCall_fiifdi");

var dynCall_viiiiiifddfiiii = Module["dynCall_viiiiiifddfiiii"] = createExportWrapper("dynCall_viiiiiifddfiiii");

var dynCall_fiifji = Module["dynCall_fiifji"] = createExportWrapper("dynCall_fiifji");

var dynCall_viiiiiifjjfiiii = Module["dynCall_viiiiiifjjfiiii"] = createExportWrapper("dynCall_viiiiiifjjfiiii");

var dynCall_viiiifiii = Module["dynCall_viiiifiii"] = createExportWrapper("dynCall_viiiifiii");

var dynCall_fiifi = Module["dynCall_fiifi"] = createExportWrapper("dynCall_fiifi");

var dynCall_viiiiiiffffiiii = Module["dynCall_viiiiiiffffiiii"] = createExportWrapper("dynCall_viiiiiiffffiiii");

var dynCall_iiffii = Module["dynCall_iiffii"] = createExportWrapper("dynCall_iiffii");

var dynCall_fffffi = Module["dynCall_fffffi"] = createExportWrapper("dynCall_fffffi");

var dynCall_fiiffffi = Module["dynCall_fiiffffi"] = createExportWrapper("dynCall_fiiffffi");

var dynCall_fffifffi = Module["dynCall_fffifffi"] = createExportWrapper("dynCall_fffifffi");

var dynCall_vdi = Module["dynCall_vdi"] = createExportWrapper("dynCall_vdi");

var dynCall_iddi = Module["dynCall_iddi"] = createExportWrapper("dynCall_iddi");

var dynCall_ddddi = Module["dynCall_ddddi"] = createExportWrapper("dynCall_ddddi");

var dynCall_viiijiii = Module["dynCall_viiijiii"] = createExportWrapper("dynCall_viiijiii");

var dynCall_viiijii = Module["dynCall_viiijii"] = createExportWrapper("dynCall_viiijii");

var dynCall_di = Module["dynCall_di"] = createExportWrapper("dynCall_di");

var dynCall_ddddddi = Module["dynCall_ddddddi"] = createExportWrapper("dynCall_ddddddi");

var dynCall_vdidi = Module["dynCall_vdidi"] = createExportWrapper("dynCall_vdidi");

var dynCall_viddi = Module["dynCall_viddi"] = createExportWrapper("dynCall_viddi");

var dynCall_iddii = Module["dynCall_iddii"] = createExportWrapper("dynCall_iddii");

var dynCall_iffii = Module["dynCall_iffii"] = createExportWrapper("dynCall_iffii");

var dynCall_iifiiii = Module["dynCall_iifiiii"] = createExportWrapper("dynCall_iifiiii");

var dynCall_fjfi = Module["dynCall_fjfi"] = createExportWrapper("dynCall_fjfi");

var dynCall_vijjjfi = Module["dynCall_vijjjfi"] = createExportWrapper("dynCall_vijjjfi");

var dynCall_ifffiii = Module["dynCall_ifffiii"] = createExportWrapper("dynCall_ifffiii");

var dynCall_fiiiffi = Module["dynCall_fiiiffi"] = createExportWrapper("dynCall_fiiiffi");

var dynCall_vijji = Module["dynCall_vijji"] = createExportWrapper("dynCall_vijji");

var dynCall_ddi = Module["dynCall_ddi"] = createExportWrapper("dynCall_ddi");

var dynCall_viififii = Module["dynCall_viififii"] = createExportWrapper("dynCall_viififii");

var dynCall_viidiiii = Module["dynCall_viidiiii"] = createExportWrapper("dynCall_viidiiii");

var dynCall_iidddi = Module["dynCall_iidddi"] = createExportWrapper("dynCall_iidddi");

var dynCall_vidddiiii = Module["dynCall_vidddiiii"] = createExportWrapper("dynCall_vidddiiii");

var dynCall_viddiiii = Module["dynCall_viddiiii"] = createExportWrapper("dynCall_viddiiii");

var dynCall_viiidi = Module["dynCall_viiidi"] = createExportWrapper("dynCall_viiidi");

var dynCall_viidiijjfdddddi = Module["dynCall_viidiijjfdddddi"] = createExportWrapper("dynCall_viidiijjfdddddi");

var dynCall_vidii = Module["dynCall_vidii"] = createExportWrapper("dynCall_vidii");

var dynCall_viidiiiii = Module["dynCall_viidiiiii"] = createExportWrapper("dynCall_viidiiiii");

var dynCall_viidiii = Module["dynCall_viidiii"] = createExportWrapper("dynCall_viidiii");

var dynCall_vifdddddi = Module["dynCall_vifdddddi"] = createExportWrapper("dynCall_vifdddddi");

var dynCall_viddii = Module["dynCall_viddii"] = createExportWrapper("dynCall_viddii");

var dynCall_fiiifi = Module["dynCall_fiiifi"] = createExportWrapper("dynCall_fiiifi");

var dynCall_vidiii = Module["dynCall_vidiii"] = createExportWrapper("dynCall_vidiii");

var dynCall_ifiiii = Module["dynCall_ifiiii"] = createExportWrapper("dynCall_ifiiii");

var dynCall_idiiiii = Module["dynCall_idiiiii"] = createExportWrapper("dynCall_idiiiii");

var dynCall_idiiii = Module["dynCall_idiiii"] = createExportWrapper("dynCall_idiiii");

var dynCall_idii = Module["dynCall_idii"] = createExportWrapper("dynCall_idii");

var dynCall_vijiiii = Module["dynCall_vijiiii"] = createExportWrapper("dynCall_vijiiii");

var dynCall_iiijiiii = Module["dynCall_iiijiiii"] = createExportWrapper("dynCall_iiijiiii");

var dynCall_vjiiii = Module["dynCall_vjiiii"] = createExportWrapper("dynCall_vjiiii");

var dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiii");

var dynCall_iiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiii");

var dynCall_fifffi = Module["dynCall_fifffi"] = createExportWrapper("dynCall_fifffi");

var dynCall_jijii = Module["dynCall_jijii"] = createExportWrapper("dynCall_jijii");

var dynCall_iiiiiji = Module["dynCall_iiiiiji"] = createExportWrapper("dynCall_iiiiiji");

var dynCall_viijiii = Module["dynCall_viijiii"] = createExportWrapper("dynCall_viijiii");

var dynCall_ijjiiii = Module["dynCall_ijjiiii"] = createExportWrapper("dynCall_ijjiiii");

var dynCall_vdiiiii = Module["dynCall_vdiiiii"] = createExportWrapper("dynCall_vdiiiii");

var dynCall_diiji = Module["dynCall_diiji"] = createExportWrapper("dynCall_diiji");

var dynCall_vjiiiiiiii = Module["dynCall_vjiiiiiiii"] = createExportWrapper("dynCall_vjiiiiiiii");

var dynCall_vjiiiiiii = Module["dynCall_vjiiiiiii"] = createExportWrapper("dynCall_vjiiiiiii");

var dynCall_ijiiii = Module["dynCall_ijiiii"] = createExportWrapper("dynCall_ijiiii");

var dynCall_iidii = Module["dynCall_iidii"] = createExportWrapper("dynCall_iidii");

var dynCall_iidiii = Module["dynCall_iidiii"] = createExportWrapper("dynCall_iidiii");

var dynCall_jidi = Module["dynCall_jidi"] = createExportWrapper("dynCall_jidi");

var dynCall_diji = Module["dynCall_diji"] = createExportWrapper("dynCall_diji");

var dynCall_fidi = Module["dynCall_fidi"] = createExportWrapper("dynCall_fidi");

var dynCall_vijiiiii = Module["dynCall_vijiiiii"] = createExportWrapper("dynCall_vijiiiii");

var dynCall_ijiiiii = Module["dynCall_ijiiiii"] = createExportWrapper("dynCall_ijiiiii");

var dynCall_viiifi = Module["dynCall_viiifi"] = createExportWrapper("dynCall_viiifi");

var dynCall_ijiii = Module["dynCall_ijiii"] = createExportWrapper("dynCall_ijiii");

var dynCall_viffffi = Module["dynCall_viffffi"] = createExportWrapper("dynCall_viffffi");

var dynCall_viffffffi = Module["dynCall_viffffffi"] = createExportWrapper("dynCall_viffffffi");

var dynCall_iffffi = Module["dynCall_iffffi"] = createExportWrapper("dynCall_iffffi");

var dynCall_vfffi = Module["dynCall_vfffi"] = createExportWrapper("dynCall_vfffi");

var dynCall_vffi = Module["dynCall_vffi"] = createExportWrapper("dynCall_vffi");

var dynCall_vffffi = Module["dynCall_vffffi"] = createExportWrapper("dynCall_vffffi");

var dynCall_viifiiii = Module["dynCall_viifiiii"] = createExportWrapper("dynCall_viifiiii");

var dynCall_viiiiffi = Module["dynCall_viiiiffi"] = createExportWrapper("dynCall_viiiiffi");

var dynCall_viiiffii = Module["dynCall_viiiffii"] = createExportWrapper("dynCall_viiiffii");

var dynCall_vifffii = Module["dynCall_vifffii"] = createExportWrapper("dynCall_vifffii");

var dynCall_vffffffii = Module["dynCall_vffffffii"] = createExportWrapper("dynCall_vffffffii");

var dynCall_viiiifffi = Module["dynCall_viiiifffi"] = createExportWrapper("dynCall_viiiifffi");

var dynCall_vfiii = Module["dynCall_vfiii"] = createExportWrapper("dynCall_vfiii");

var dynCall_ffi = Module["dynCall_ffi"] = createExportWrapper("dynCall_ffi");

var dynCall_ffffi = Module["dynCall_ffffi"] = createExportWrapper("dynCall_ffffi");

var dynCall_iffi = Module["dynCall_iffi"] = createExportWrapper("dynCall_iffi");

var dynCall_fffifi = Module["dynCall_fffifi"] = createExportWrapper("dynCall_fffifi");

var dynCall_vfii = Module["dynCall_vfii"] = createExportWrapper("dynCall_vfii");

var dynCall_viffffffffi = Module["dynCall_viffffffffi"] = createExportWrapper("dynCall_viffffffffi");

var dynCall_iiiifiiiii = Module["dynCall_iiiifiiiii"] = createExportWrapper("dynCall_iiiifiiiii");

var dynCall_iiiifiiii = Module["dynCall_iiiifiiii"] = createExportWrapper("dynCall_iiiifiiii");

var dynCall_iiiifiii = Module["dynCall_iiiifiii"] = createExportWrapper("dynCall_iiiifiii");

var dynCall_vijjii = Module["dynCall_vijjii"] = createExportWrapper("dynCall_vijjii");

var dynCall_viiiiiiifi = Module["dynCall_viiiiiiifi"] = createExportWrapper("dynCall_viiiiiiifi");

var dynCall_fifffiii = Module["dynCall_fifffiii"] = createExportWrapper("dynCall_fifffiii");

var dynCall_fiffffiiiiii = Module["dynCall_fiffffiiiiii"] = createExportWrapper("dynCall_fiffffiiiiii");

var dynCall_fiffffii = Module["dynCall_fiffffii"] = createExportWrapper("dynCall_fiffffii");

var dynCall_viiiiiffii = Module["dynCall_viiiiiffii"] = createExportWrapper("dynCall_viiiiiffii");

var dynCall_ffffii = Module["dynCall_ffffii"] = createExportWrapper("dynCall_ffffii");

var dynCall_ffffiiii = Module["dynCall_ffffiiii"] = createExportWrapper("dynCall_ffffiiii");

var dynCall_fffffii = Module["dynCall_fffffii"] = createExportWrapper("dynCall_fffffii");

var dynCall_fffffiii = Module["dynCall_fffffiii"] = createExportWrapper("dynCall_fffffiii");

var dynCall_viffiii = Module["dynCall_viffiii"] = createExportWrapper("dynCall_viffiii");

var dynCall_viffffiii = Module["dynCall_viffffiii"] = createExportWrapper("dynCall_viffffiii");

var dynCall_viffffii = Module["dynCall_viffffii"] = createExportWrapper("dynCall_viffffii");

var dynCall_viiffffiiiiii = Module["dynCall_viiffffiiiiii"] = createExportWrapper("dynCall_viiffffiiiiii");

var dynCall_iiifiii = Module["dynCall_iiifiii"] = createExportWrapper("dynCall_iiifiii");

var dynCall_viiifiii = Module["dynCall_viiifiii"] = createExportWrapper("dynCall_viiifiii");

var dynCall_viiififi = Module["dynCall_viiififi"] = createExportWrapper("dynCall_viiififi");

var dynCall_viiififfi = Module["dynCall_viiififfi"] = createExportWrapper("dynCall_viiififfi");

var dynCall_iiiiifi = Module["dynCall_iiiiifi"] = createExportWrapper("dynCall_iiiiifi");

var dynCall_iiiiifiii = Module["dynCall_iiiiifiii"] = createExportWrapper("dynCall_iiiiifiii");

var dynCall_iiifiiii = Module["dynCall_iiifiiii"] = createExportWrapper("dynCall_iiifiiii");

var dynCall_vifffffi = Module["dynCall_vifffffi"] = createExportWrapper("dynCall_vifffffi");

var dynCall_viiiiifi = Module["dynCall_viiiiifi"] = createExportWrapper("dynCall_viiiiifi");

var dynCall_viffiiii = Module["dynCall_viffiiii"] = createExportWrapper("dynCall_viffiiii");

var dynCall_viiiiffffiiii = Module["dynCall_viiiiffffiiii"] = createExportWrapper("dynCall_viiiiffffiiii");

var dynCall_viifiiiii = Module["dynCall_viifiiiii"] = createExportWrapper("dynCall_viifiiiii");

var dynCall_iiiiiiffiiiiiiiiiffffiiii = Module["dynCall_iiiiiiffiiiiiiiiiffffiiii"] = createExportWrapper("dynCall_iiiiiiffiiiiiiiiiffffiiii");

var dynCall_iiiiiiffiiiiiiiiiiiiiii = Module["dynCall_iiiiiiffiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiffiiiiiiiiiiiiiii");

var dynCall_viijji = Module["dynCall_viijji"] = createExportWrapper("dynCall_viijji");

var dynCall_iiiffiiii = Module["dynCall_iiiffiiii"] = createExportWrapper("dynCall_iiiffiiii");

var dynCall_iiiiffiiii = Module["dynCall_iiiiffiiii"] = createExportWrapper("dynCall_iiiiffiiii");

var dynCall_vjii = Module["dynCall_vjii"] = createExportWrapper("dynCall_vjii");

var dynCall_viiffffi = Module["dynCall_viiffffi"] = createExportWrapper("dynCall_viiffffi");

var dynCall_fffffffi = Module["dynCall_fffffffi"] = createExportWrapper("dynCall_fffffffi");

var dynCall_viffifi = Module["dynCall_viffifi"] = createExportWrapper("dynCall_viffifi");

var dynCall_viiffifi = Module["dynCall_viiffifi"] = createExportWrapper("dynCall_viiffifi");

var dynCall_ifffi = Module["dynCall_ifffi"] = createExportWrapper("dynCall_ifffi");

var dynCall_viiififiii = Module["dynCall_viiififiii"] = createExportWrapper("dynCall_viiififiii");

var dynCall_vifiii = Module["dynCall_vifiii"] = createExportWrapper("dynCall_vifiii");

var dynCall_viiffiiiiiiiii = Module["dynCall_viiffiiiiiiiii"] = createExportWrapper("dynCall_viiffiiiiiiiii");

var dynCall_viiiiiffiii = Module["dynCall_viiiiiffiii"] = createExportWrapper("dynCall_viiiiiffiii");

var dynCall_viiffiii = Module["dynCall_viiffiii"] = createExportWrapper("dynCall_viiffiii");

var dynCall_viiffiiiiiii = Module["dynCall_viiffiiiiiii"] = createExportWrapper("dynCall_viiffiiiiiii");

var dynCall_viiffii = Module["dynCall_viiffii"] = createExportWrapper("dynCall_viiffii");

var dynCall_fffffffffi = Module["dynCall_fffffffffi"] = createExportWrapper("dynCall_fffffffffi");

var dynCall_vifiiiiii = Module["dynCall_vifiiiiii"] = createExportWrapper("dynCall_vifiiiiii");

var dynCall_viifiiiiiii = Module["dynCall_viifiiiiiii"] = createExportWrapper("dynCall_viifiiiiiii");

var dynCall_viiififfiiiiiii = Module["dynCall_viiififfiiiiiii"] = createExportWrapper("dynCall_viiififfiiiiiii");

var dynCall_viiffiifiiiiiii = Module["dynCall_viiffiifiiiiiii"] = createExportWrapper("dynCall_viiffiifiiiiiii");

var dynCall_viifiiiiii = Module["dynCall_viifiiiiii"] = createExportWrapper("dynCall_viifiiiiii");

var dynCall_viiifiiiiii = Module["dynCall_viiifiiiiii"] = createExportWrapper("dynCall_viiifiiiiii");

var dynCall_viiiifiiiiii = Module["dynCall_viiiifiiiiii"] = createExportWrapper("dynCall_viiiifiiiiii");

var dynCall_viififiiiiii = Module["dynCall_viififiiiiii"] = createExportWrapper("dynCall_viififiiiiii");

var dynCall_viiiffiifiiiiiii = Module["dynCall_viiiffiifiiiiiii"] = createExportWrapper("dynCall_viiiffiifiiiiiii");

var dynCall_viiiiiifiiiiii = Module["dynCall_viiiiiifiiiiii"] = createExportWrapper("dynCall_viiiiiifiiiiii");

var dynCall_ffii = Module["dynCall_ffii"] = createExportWrapper("dynCall_ffii");

var dynCall_viffii = Module["dynCall_viffii"] = createExportWrapper("dynCall_viffii");

var dynCall_vififiii = Module["dynCall_vififiii"] = createExportWrapper("dynCall_vififiii");

var dynCall_fiffi = Module["dynCall_fiffi"] = createExportWrapper("dynCall_fiffi");

var dynCall_viiiiiiiijiiii = Module["dynCall_viiiiiiiijiiii"] = createExportWrapper("dynCall_viiiiiiiijiiii");

var dynCall_viifiii = Module["dynCall_viifiii"] = createExportWrapper("dynCall_viifiii");

var dynCall_fifii = Module["dynCall_fifii"] = createExportWrapper("dynCall_fifii");

var dynCall_viiiffi = Module["dynCall_viiiffi"] = createExportWrapper("dynCall_viiiffi");

var dynCall_viiifffi = Module["dynCall_viiifffi"] = createExportWrapper("dynCall_viiifffi");

var dynCall_viiiiiffi = Module["dynCall_viiiiiffi"] = createExportWrapper("dynCall_viiiiiffi");

var dynCall_viiidii = Module["dynCall_viiidii"] = createExportWrapper("dynCall_viiidii");

var dynCall_ijiiiiiiiii = Module["dynCall_ijiiiiiiiii"] = createExportWrapper("dynCall_ijiiiiiiiii");

var dynCall_ijjiii = Module["dynCall_ijjiii"] = createExportWrapper("dynCall_ijjiii");

var dynCall_vifffffffffi = Module["dynCall_vifffffffffi"] = createExportWrapper("dynCall_vifffffffffi");

var dynCall_viffffffffffffffffi = Module["dynCall_viffffffffffffffffi"] = createExportWrapper("dynCall_viffffffffffffffffi");

var dynCall_viiiiifii = Module["dynCall_viiiiifii"] = createExportWrapper("dynCall_viiiiifii");

var dynCall_viiiffffi = Module["dynCall_viiiffffi"] = createExportWrapper("dynCall_viiiffffi");

var dynCall_viifffi = Module["dynCall_viifffi"] = createExportWrapper("dynCall_viifffi");

var dynCall_viifffffi = Module["dynCall_viifffffi"] = createExportWrapper("dynCall_viifffffi");

var dynCall_viiffffffi = Module["dynCall_viiffffffi"] = createExportWrapper("dynCall_viiffffffi");

var dynCall_viifffffffi = Module["dynCall_viifffffffi"] = createExportWrapper("dynCall_viifffffffi");

var dynCall_viiffffffffi = Module["dynCall_viiffffffffi"] = createExportWrapper("dynCall_viiffffffffi");

var dynCall_vifiiii = Module["dynCall_vifiiii"] = createExportWrapper("dynCall_vifiiii");

var dynCall_viiffffffffiii = Module["dynCall_viiffffffffiii"] = createExportWrapper("dynCall_viiffffffffiii");

var dynCall_viiiiffffii = Module["dynCall_viiiiffffii"] = createExportWrapper("dynCall_viiiiffffii");

var dynCall_fiiiiii = Module["dynCall_fiiiiii"] = createExportWrapper("dynCall_fiiiiii");

var dynCall_viifffiii = Module["dynCall_viifffiii"] = createExportWrapper("dynCall_viifffiii");

var dynCall_viififfii = Module["dynCall_viififfii"] = createExportWrapper("dynCall_viififfii");

var dynCall_vijiiiiiii = Module["dynCall_vijiiiiiii"] = createExportWrapper("dynCall_vijiiiiiii");

var dynCall_vijiiiiiiii = Module["dynCall_vijiiiiiiii"] = createExportWrapper("dynCall_vijiiiiiiii");

var dynCall_jjiiii = Module["dynCall_jjiiii"] = createExportWrapper("dynCall_jjiiii");

var dynCall_jjiiiii = Module["dynCall_jjiiiii"] = createExportWrapper("dynCall_jjiiiii");

var dynCall_jijjji = Module["dynCall_jijjji"] = createExportWrapper("dynCall_jijjji");

var dynCall_jijjjii = Module["dynCall_jijjjii"] = createExportWrapper("dynCall_jijjjii");

var dynCall_jjiii = Module["dynCall_jjiii"] = createExportWrapper("dynCall_jjiii");

var dynCall_ijijiiiii = Module["dynCall_ijijiiiii"] = createExportWrapper("dynCall_ijijiiiii");

var dynCall_ijjjiii = Module["dynCall_ijjjiii"] = createExportWrapper("dynCall_ijjjiii");

var dynCall_vijjjiijii = Module["dynCall_vijjjiijii"] = createExportWrapper("dynCall_vijjjiijii");

var dynCall_ijjjiijii = Module["dynCall_ijjjiijii"] = createExportWrapper("dynCall_ijjjiijii");

var dynCall_vijiiiiii = Module["dynCall_vijiiiiii"] = createExportWrapper("dynCall_vijiiiiii");

var dynCall_fji = Module["dynCall_fji"] = createExportWrapper("dynCall_fji");

var dynCall_fdi = Module["dynCall_fdi"] = createExportWrapper("dynCall_fdi");

var dynCall_dfi = Module["dynCall_dfi"] = createExportWrapper("dynCall_dfi");

var dynCall_jidii = Module["dynCall_jidii"] = createExportWrapper("dynCall_jidii");

var dynCall_viiiiiiiji = Module["dynCall_viiiiiiiji"] = createExportWrapper("dynCall_viiiiiiiji");

var dynCall_viiiiiiiiji = Module["dynCall_viiiiiiiiji"] = createExportWrapper("dynCall_viiiiiiiiji");

var dynCall_viiiiiiiiiji = Module["dynCall_viiiiiiiiiji"] = createExportWrapper("dynCall_viiiiiiiiiji");

var dynCall_ijiijii = Module["dynCall_ijiijii"] = createExportWrapper("dynCall_ijiijii");

var dynCall_vjjiiiii = Module["dynCall_vjjiiiii"] = createExportWrapper("dynCall_vjjiiiii");

var dynCall_vjjii = Module["dynCall_vjjii"] = createExportWrapper("dynCall_vjjii");

var dynCall_ijiiji = Module["dynCall_ijiiji"] = createExportWrapper("dynCall_ijiiji");

var dynCall_ijiiiiji = Module["dynCall_ijiiiiji"] = createExportWrapper("dynCall_ijiiiiji");

var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = createExportWrapper("dynCall_jiiiiii");

var dynCall_ddiii = Module["dynCall_ddiii"] = createExportWrapper("dynCall_ddiii");

var dynCall_ddii = Module["dynCall_ddii"] = createExportWrapper("dynCall_ddii");

var dynCall_idiii = Module["dynCall_idiii"] = createExportWrapper("dynCall_idiii");

var dynCall_ifiii = Module["dynCall_ifiii"] = createExportWrapper("dynCall_ifiii");

var dynCall_ifiiiii = Module["dynCall_ifiiiii"] = createExportWrapper("dynCall_ifiiiii");

var dynCall_jjjii = Module["dynCall_jjjii"] = createExportWrapper("dynCall_jjjii");

var dynCall_vdiii = Module["dynCall_vdiii"] = createExportWrapper("dynCall_vdiii");

var dynCall_jdii = Module["dynCall_jdii"] = createExportWrapper("dynCall_jdii");

var dynCall_vdii = Module["dynCall_vdii"] = createExportWrapper("dynCall_vdii");

var dynCall_iiiijii = Module["dynCall_iiiijii"] = createExportWrapper("dynCall_iiiijii");

var dynCall_jijji = Module["dynCall_jijji"] = createExportWrapper("dynCall_jijji");

var dynCall_diddi = Module["dynCall_diddi"] = createExportWrapper("dynCall_diddi");

var dynCall_didi = Module["dynCall_didi"] = createExportWrapper("dynCall_didi");

var dynCall_viiiijii = Module["dynCall_viiiijii"] = createExportWrapper("dynCall_viiiijii");

var dynCall_viiijji = Module["dynCall_viiijji"] = createExportWrapper("dynCall_viiijji");

var dynCall_iijjii = Module["dynCall_iijjii"] = createExportWrapper("dynCall_iijjii");

var dynCall_jjjji = Module["dynCall_jjjji"] = createExportWrapper("dynCall_jjjji");

var dynCall_viijijii = Module["dynCall_viijijii"] = createExportWrapper("dynCall_viijijii");

var dynCall_viijijiii = Module["dynCall_viijijiii"] = createExportWrapper("dynCall_viijijiii");

var dynCall_vijiji = Module["dynCall_vijiji"] = createExportWrapper("dynCall_vijiji");

var dynCall_viijiijiii = Module["dynCall_viijiijiii"] = createExportWrapper("dynCall_viijiijiii");

var dynCall_viiiijiiii = Module["dynCall_viiiijiiii"] = createExportWrapper("dynCall_viiiijiiii");

var dynCall_jiiiiiiiii = Module["dynCall_jiiiiiiiii"] = createExportWrapper("dynCall_jiiiiiiiii");

var dynCall_jiiiiiii = Module["dynCall_jiiiiiii"] = createExportWrapper("dynCall_jiiiiiii");

var dynCall_viidii = Module["dynCall_viidii"] = createExportWrapper("dynCall_viidii");

var dynCall_iiddiiii = Module["dynCall_iiddiiii"] = createExportWrapper("dynCall_iiddiiii");

var dynCall_viiiiifdddiffii = Module["dynCall_viiiiifdddiffii"] = createExportWrapper("dynCall_viiiiifdddiffii");

var dynCall_vidiiii = Module["dynCall_vidiiii"] = createExportWrapper("dynCall_vidiiii");

var dynCall_vididiiii = Module["dynCall_vididiiii"] = createExportWrapper("dynCall_vididiiii");

var dynCall_iiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiiii");

var dynCall_iiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiiiii");

var dynCall_iiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiiiiii");

var dynCall_iiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiiiiiii");

var dynCall_iiiiiiiiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiiiiiiiii"] = createExportWrapper("dynCall_iiiiiiiiiiiiiiiiiii");

var dynCall_iiijjii = Module["dynCall_iiijjii"] = createExportWrapper("dynCall_iiijjii");

var dynCall_iiffi = Module["dynCall_iiffi"] = createExportWrapper("dynCall_iiffi");

var dynCall_fff = Module["dynCall_fff"] = createExportWrapper("dynCall_fff");

var dynCall_ijj = Module["dynCall_ijj"] = createExportWrapper("dynCall_ijj");

var dynCall_vjji = Module["dynCall_vjji"] = createExportWrapper("dynCall_vjji");

var dynCall_ij = Module["dynCall_ij"] = createExportWrapper("dynCall_ij");

var dynCall_viffff = Module["dynCall_viffff"] = createExportWrapper("dynCall_viffff");

var dynCall_vif = Module["dynCall_vif"] = createExportWrapper("dynCall_vif");

var dynCall_viif = Module["dynCall_viif"] = createExportWrapper("dynCall_viif");

var dynCall_viiiiiji = Module["dynCall_viiiiiji"] = createExportWrapper("dynCall_viiiiiji");

var dynCall_viiiiiif = Module["dynCall_viiiiiif"] = createExportWrapper("dynCall_viiiiiif");

var dynCall_viiiiif = Module["dynCall_viiiiif"] = createExportWrapper("dynCall_viiiiif");

var dynCall_vifff = Module["dynCall_vifff"] = createExportWrapper("dynCall_vifff");

var dynCall_viifff = Module["dynCall_viifff"] = createExportWrapper("dynCall_viifff");

var dynCall_viff = Module["dynCall_viff"] = createExportWrapper("dynCall_viff");

var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");

var dynCall_vid = Module["dynCall_vid"] = createExportWrapper("dynCall_vid");

var dynCall_iiiijiii = Module["dynCall_iiiijiii"] = createExportWrapper("dynCall_iiiijiii");

var dynCall_iiiij = Module["dynCall_iiiij"] = createExportWrapper("dynCall_iiiij");

var dynCall_iiif = Module["dynCall_iiif"] = createExportWrapper("dynCall_iiif");

var dynCall_fif = Module["dynCall_fif"] = createExportWrapper("dynCall_fif");

var dynCall_iiiiiifff = Module["dynCall_iiiiiifff"] = createExportWrapper("dynCall_iiiiiifff");

var dynCall_iiiiiifiif = Module["dynCall_iiiiiifiif"] = createExportWrapper("dynCall_iiiiiifiif");

var dynCall_iiiiiifiii = Module["dynCall_iiiiiifiii"] = createExportWrapper("dynCall_iiiiiifiii");

var dynCall_iiiiiiifiif = Module["dynCall_iiiiiiifiif"] = createExportWrapper("dynCall_iiiiiiifiif");

var dynCall_fiff = Module["dynCall_fiff"] = createExportWrapper("dynCall_fiff");

var dynCall_fiiiiiifiifif = Module["dynCall_fiiiiiifiifif"] = createExportWrapper("dynCall_fiiiiiifiifif");

var dynCall_fiiiiiifiiiif = Module["dynCall_fiiiiiifiiiif"] = createExportWrapper("dynCall_fiiiiiifiiiif");

var dynCall_iifiiiijii = Module["dynCall_iifiiiijii"] = createExportWrapper("dynCall_iifiiiijii");

var dynCall_vifijii = Module["dynCall_vifijii"] = createExportWrapper("dynCall_vifijii");

var dynCall_iiiifffiii = Module["dynCall_iiiifffiii"] = createExportWrapper("dynCall_iiiifffiii");

var dynCall_iiiifffffi = Module["dynCall_iiiifffffi"] = createExportWrapper("dynCall_iiiifffffi");

var dynCall_viffiiiif = Module["dynCall_viffiiiif"] = createExportWrapper("dynCall_viffiiiif");

var dynCall_viffiifffffiii = Module["dynCall_viffiifffffiii"] = createExportWrapper("dynCall_viffiifffffiii");

var dynCall_viffffiifffiiiiif = Module["dynCall_viffffiifffiiiiif"] = createExportWrapper("dynCall_viffffiifffiiiiif");

var dynCall_iiiifffffii = Module["dynCall_iiiifffffii"] = createExportWrapper("dynCall_iiiifffffii");

var dynCall_viiiiiiiiiiifii = Module["dynCall_viiiiiiiiiiifii"] = createExportWrapper("dynCall_viiiiiiiiiiifii");

var dynCall_iiiiifiiiiif = Module["dynCall_iiiiifiiiiif"] = createExportWrapper("dynCall_iiiiifiiiiif");

var dynCall_viiifiiiii = Module["dynCall_viiifiiiii"] = createExportWrapper("dynCall_viiifiiiii");

var dynCall_viiiifiiiiif = Module["dynCall_viiiifiiiiif"] = createExportWrapper("dynCall_viiiifiiiiif");

var dynCall_iifff = Module["dynCall_iifff"] = createExportWrapper("dynCall_iifff");

var dynCall_iif = Module["dynCall_iif"] = createExportWrapper("dynCall_iif");

var dynCall_viijijj = Module["dynCall_viijijj"] = createExportWrapper("dynCall_viijijj");

var dynCall_viijj = Module["dynCall_viijj"] = createExportWrapper("dynCall_viijj");

var dynCall_iiijji = Module["dynCall_iiijji"] = createExportWrapper("dynCall_iiijji");

var dynCall_ijjiiiii = Module["dynCall_ijjiiiii"] = createExportWrapper("dynCall_ijjiiiii");

var dynCall_viijjji = Module["dynCall_viijjji"] = createExportWrapper("dynCall_viijjji");

var dynCall_vidd = Module["dynCall_vidd"] = createExportWrapper("dynCall_vidd");

var dynCall_iiiiiifffiiifiii = Module["dynCall_iiiiiifffiiifiii"] = createExportWrapper("dynCall_iiiiiifffiiifiii");

var dynCall_viiif = Module["dynCall_viiif"] = createExportWrapper("dynCall_viiif");

var dynCall_fiiiif = Module["dynCall_fiiiif"] = createExportWrapper("dynCall_fiiiif");

var dynCall_viiifffiiij = Module["dynCall_viiifffiiij"] = createExportWrapper("dynCall_viiifffiiij");

var dynCall_viiffiiii = Module["dynCall_viiffiiii"] = createExportWrapper("dynCall_viiffiiii");

var dynCall_viffffffffffffiiii = Module["dynCall_viffffffffffffiiii"] = createExportWrapper("dynCall_viffffffffffffiiii");

var dynCall_ff = Module["dynCall_ff"] = createExportWrapper("dynCall_ff");

var dynCall_iiiiiff = Module["dynCall_iiiiiff"] = createExportWrapper("dynCall_iiiiiff");

var dynCall_viid = Module["dynCall_viid"] = createExportWrapper("dynCall_viid");

var dynCall_vf = Module["dynCall_vf"] = createExportWrapper("dynCall_vf");

var dynCall_vffff = Module["dynCall_vffff"] = createExportWrapper("dynCall_vffff");

var dynCall_vff = Module["dynCall_vff"] = createExportWrapper("dynCall_vff");

var dynCall_vfff = Module["dynCall_vfff"] = createExportWrapper("dynCall_vfff");

var dynCall_f = Module["dynCall_f"] = createExportWrapper("dynCall_f");

var dynCall_vffffffi = Module["dynCall_vffffffi"] = createExportWrapper("dynCall_vffffffi");

var dynCall_vfi = Module["dynCall_vfi"] = createExportWrapper("dynCall_vfi");

var dynCall_d = Module["dynCall_d"] = createExportWrapper("dynCall_d");

var dynCall_iiid = Module["dynCall_iiid"] = createExportWrapper("dynCall_iiid");

var dynCall_fiif = Module["dynCall_fiif"] = createExportWrapper("dynCall_fiif");

var dynCall_iiiiiiffiiiiiiiiiffffiii = Module["dynCall_iiiiiiffiiiiiiiiiffffiii"] = createExportWrapper("dynCall_iiiiiiffiiiiiiiiiffffiii");

var dynCall_viififi = Module["dynCall_viififi"] = createExportWrapper("dynCall_viififi");

var dynCall_viiiiiiiijiii = Module["dynCall_viiiiiiiijiii"] = createExportWrapper("dynCall_viiiiiiiijiii");

function invoke_ii(index, a1) {
 var sp = stackSave();
 try {
  return dynCall_ii(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  dynCall_vii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiiiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_iii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_viii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iiii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_fiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_fiii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_diii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_diii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vi(index, a1) {
 var sp = stackSave();
 try {
  dynCall_vi(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_i(index) {
 var sp = stackSave();
 try {
  return dynCall_i(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_v(index) {
 var sp = stackSave();
 try {
  dynCall_v(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiff(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viiff(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_fii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_fii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiifi(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_fi(index, a1) {
 var sp = stackSave();
 try {
  return dynCall_fi(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiifi(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiifi(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vifi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_vifi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiif(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiiif(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iifi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iifi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_dii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_dii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viifi(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viifi(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiifi(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiifi(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiif(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiiif(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_ifi(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_ifi(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_idi(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_idi(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vidi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_vidi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_fffi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_fffi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_dddi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_dddi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iidi(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iidi(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_diiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_diiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiiiifiifiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
 var sp = stackSave();
 try {
  dynCall_viiiiiiifiifiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_fiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_fiiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiffi(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiffi(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vifii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_vifii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiidi(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiidi(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vifiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_vifiiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viififii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viififii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiifii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiifii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vidd(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_vidd(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_jiiii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_ji(index, a1) {
 var sp = stackSave();
 try {
  return dynCall_ji(index, a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jii(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_jii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiij(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiij(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_j(index) {
 var sp = stackSave();
 try {
  return dynCall_j(index);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iij(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iij(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiijiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  return dynCall_iiijiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiiij(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_viiiiij(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  return dynCall_jiiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_ijji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_ijji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_jiii(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_iiji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jdi(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_jdi(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jjji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_jjji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8) {
 var sp = stackSave();
 try {
  dynCall_vijjji(index, a1, a2, a3, a4, a5, a6, a7, a8);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiij(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iiiiij(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiiji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_jiiji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
 var sp = stackSave();
 try {
  dynCall_viijiiijiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iijii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return dynCall_iiiijjii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viijii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_vijii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iijiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijjiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  return dynCall_iijjiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return dynCall_iijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jijj(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_jijj(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
 var sp = stackSave();
 try {
  return dynCall_iiiiiiiiiji(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vji(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  dynCall_vji(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiij(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiij(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jji(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_jji(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jjii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_jjii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_dji(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_dji(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iji(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return dynCall_iji(index, a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jfi(index, a1, a2) {
 var sp = stackSave();
 try {
  return dynCall_jfi(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiji(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_jiji(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iijji(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_iijji(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiji(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiji(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vijiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_vijiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vjjjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  dynCall_vjjjiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vjiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 var sp = stackSave();
 try {
  dynCall_vjiiiii(index, a1, a2, a3, a4, a5, a6, a7);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
 var sp = stackSave();
 try {
  dynCall_viijiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jijiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return dynCall_jijiii(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_jiiiii(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_jiiiii(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viij(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  dynCall_viij(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiiij(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  dynCall_viiiij(index, a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  return dynCall_iiiji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiji(index, a1, a2, a3, a4, a5) {
 var sp = stackSave();
 try {
  dynCall_viiji(index, a1, a2, a3, a4, a5);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_ijii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return dynCall_ijii(index, a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() {
 abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() {
 abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["ccall"] = ccall;

Module["cwrap"] = cwrap;

if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() {
 abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() {
 abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() {
 abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() {
 abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() {
 abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() {
 abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() {
 abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() {
 abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["stackTrace"] = stackTrace;

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() {
 abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() {
 abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() {
 abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() {
 abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() {
 abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() {
 abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() {
 abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() {
 abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["addRunDependency"] = addRunDependency;

Module["removeRunDependency"] = removeRunDependency;

if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() {
 abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["FS_createPath"] = FS.createPath;

Module["FS_createDataFile"] = FS.createDataFile;

if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() {
 abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() {
 abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() {
 abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() {
 abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() {
 abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() {
 abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() {
 abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() {
 abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() {
 abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() {
 abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() {
 abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() {
 abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() {
 abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() {
 abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() {
 abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() {
 abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() {
 abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() {
 abort("'callMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() {
 abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() {
 abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() {
 abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() {
 abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() {
 abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() {
 abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() {
 abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() {
 abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() {
 abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() {
 abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() {
 abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() {
 abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() {
 abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() {
 abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() {
 abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() {
 abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() {
 abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() {
 abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() {
 abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() {
 abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() {
 abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() {
 abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() {
 abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() {
 abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() {
 abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() {
 abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() {
 abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() {
 abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() {
 abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() {
 abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() {
 abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() {
 abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() {
 abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() {
 abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepaliveCounter")) Module["runtimeKeepaliveCounter"] = function() {
 abort("'runtimeKeepaliveCounter' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "keepRuntimeAlive")) Module["keepRuntimeAlive"] = function() {
 abort("'keepRuntimeAlive' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() {
 abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() {
 abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() {
 abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() {
 abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() {
 abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() {
 abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() {
 abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() {
 abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() {
 abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() {
 abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() {
 abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() {
 abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() {
 abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() {
 abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() {
 abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() {
 abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() {
 abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() {
 abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() {
 abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() {
 abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() {
 abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() {
 abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() {
 abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() {
 abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() {
 abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() {
 abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() {
 abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() {
 abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() {
 abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() {
 abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() {
 abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() {
 abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() {
 abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() {
 abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() {
 abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() {
 abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() {
 abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() {
 abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() {
 abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() {
 abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() {
 abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() {
 abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() {
 abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() {
 abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() {
 abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() {
 abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() {
 abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() {
 abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() {
 abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() {
 abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() {
 abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() {
 abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() {
 abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() {
 abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() {
 abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() {
 abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() {
 abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() {
 abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() {
 abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() {
 abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() {
 abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() {
 abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() {
 abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() {
 abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["stackTrace"] = stackTrace;

if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() {
 abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() {
 abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() {
 abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() {
 abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() {
 abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() {
 abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() {
 abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() {
 abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() {
 abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() {
 abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() {
 abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() {
 abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() {
 abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() {
 abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfoAttrs")) Module["ExceptionInfoAttrs"] = function() {
 abort("'ExceptionInfoAttrs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() {
 abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() {
 abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() {
 abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() {
 abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() {
 abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() {
 abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() {
 abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() {
 abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() {
 abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() {
 abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() {
 abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() {
 abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() {
 abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() {
 abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() {
 abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() {
 abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() {
 abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() {
 abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() {
 abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() {
 abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() {
 abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() {
 abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() {
 abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() {
 abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() {
 abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglApplyExplicitProgramBindings")) Module["webglApplyExplicitProgramBindings"] = function() {
 abort("'webglApplyExplicitProgramBindings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetBufferBinding")) Module["emscriptenWebGLGetBufferBinding"] = function() {
 abort("'emscriptenWebGLGetBufferBinding' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLValidateMapBufferTarget")) Module["emscriptenWebGLValidateMapBufferTarget"] = function() {
 abort("'emscriptenWebGLValidateMapBufferTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() {
 abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() {
 abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() {
 abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() {
 abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() {
 abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() {
 abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() {
 abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() {
 abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() {
 abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() {
 abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() {
 abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() {
 abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() {
 abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() {
 abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "WEBAudio")) Module["WEBAudio"] = function() {
 abort("'WEBAudio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioAddPendingBlockedAudio")) Module["jsAudioAddPendingBlockedAudio"] = function() {
 abort("'jsAudioAddPendingBlockedAudio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioPlayPendingBlockedAudio")) Module["jsAudioPlayPendingBlockedAudio"] = function() {
 abort("'jsAudioPlayPendingBlockedAudio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioPlayBlockedAudios")) Module["jsAudioPlayBlockedAudios"] = function() {
 abort("'jsAudioPlayBlockedAudios' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioMixinSetPitch")) Module["jsAudioMixinSetPitch"] = function() {
 abort("'jsAudioMixinSetPitch' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioCreateCompressedSoundClip")) Module["jsAudioCreateCompressedSoundClip"] = function() {
 abort("'jsAudioCreateCompressedSoundClip' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioCreateUncompressedSoundClip")) Module["jsAudioCreateUncompressedSoundClip"] = function() {
 abort("'jsAudioCreateUncompressedSoundClip' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioCreateUncompressedSoundClipFromPCM")) Module["jsAudioCreateUncompressedSoundClipFromPCM"] = function() {
 abort("'jsAudioCreateUncompressedSoundClipFromPCM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioCreateUncompressedSoundClipFromCompressedAudio")) Module["jsAudioCreateUncompressedSoundClipFromCompressedAudio"] = function() {
 abort("'jsAudioCreateUncompressedSoundClipFromCompressedAudio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsAudioCreateChannel")) Module["jsAudioCreateChannel"] = function() {
 abort("'jsAudioCreateChannel' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsDomCssEscapeId")) Module["jsDomCssEscapeId"] = function() {
 abort("'jsDomCssEscapeId' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fs")) Module["fs"] = function() {
 abort("'fs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ScreenOrientation_callback")) Module["JS_ScreenOrientation_callback"] = function() {
 abort("'JS_ScreenOrientation_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ScreenOrientation_eventHandler")) Module["JS_ScreenOrientation_eventHandler"] = function() {
 abort("'JS_ScreenOrientation_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ScreenOrientation_requestedLockType")) Module["JS_ScreenOrientation_requestedLockType"] = function() {
 abort("'JS_ScreenOrientation_requestedLockType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ScreenOrientation_appliedLockType")) Module["JS_ScreenOrientation_appliedLockType"] = function() {
 abort("'JS_ScreenOrientation_appliedLockType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ScreenOrientation_timeoutID")) Module["JS_ScreenOrientation_timeoutID"] = function() {
 abort("'JS_ScreenOrientation_timeoutID' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_OrientationSensor_frequencyRequest")) Module["JS_OrientationSensor_frequencyRequest"] = function() {
 abort("'JS_OrientationSensor_frequencyRequest' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_OrientationSensor_callback")) Module["JS_OrientationSensor_callback"] = function() {
 abort("'JS_OrientationSensor_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_OrientationSensor")) Module["JS_OrientationSensor"] = function() {
 abort("'JS_OrientationSensor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_frequencyRequest")) Module["JS_Accelerometer_frequencyRequest"] = function() {
 abort("'JS_Accelerometer_frequencyRequest' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_callback")) Module["JS_Accelerometer_callback"] = function() {
 abort("'JS_Accelerometer_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer")) Module["JS_Accelerometer"] = function() {
 abort("'JS_Accelerometer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_multiplier")) Module["JS_Accelerometer_multiplier"] = function() {
 abort("'JS_Accelerometer_multiplier' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_LinearAccelerationSensor_frequencyRequest")) Module["JS_LinearAccelerationSensor_frequencyRequest"] = function() {
 abort("'JS_LinearAccelerationSensor_frequencyRequest' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_LinearAccelerationSensor_callback")) Module["JS_LinearAccelerationSensor_callback"] = function() {
 abort("'JS_LinearAccelerationSensor_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_LinearAccelerationSensor")) Module["JS_LinearAccelerationSensor"] = function() {
 abort("'JS_LinearAccelerationSensor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_GravitySensor_frequencyRequest")) Module["JS_GravitySensor_frequencyRequest"] = function() {
 abort("'JS_GravitySensor_frequencyRequest' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_GravitySensor_callback")) Module["JS_GravitySensor_callback"] = function() {
 abort("'JS_GravitySensor_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_GravitySensor")) Module["JS_GravitySensor"] = function() {
 abort("'JS_GravitySensor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_frequency")) Module["JS_Accelerometer_frequency"] = function() {
 abort("'JS_Accelerometer_frequency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_lastValue")) Module["JS_Accelerometer_lastValue"] = function() {
 abort("'JS_Accelerometer_lastValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_LinearAccelerationSensor_frequency")) Module["JS_LinearAccelerationSensor_frequency"] = function() {
 abort("'JS_LinearAccelerationSensor_frequency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Gyroscope_frequencyRequest")) Module["JS_Gyroscope_frequencyRequest"] = function() {
 abort("'JS_Gyroscope_frequencyRequest' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Gyroscope_callback")) Module["JS_Gyroscope_callback"] = function() {
 abort("'JS_Gyroscope_callback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Gyroscope")) Module["JS_Gyroscope"] = function() {
 abort("'JS_Gyroscope' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DeviceSensorPermissions")) Module["JS_DeviceSensorPermissions"] = function() {
 abort("'JS_DeviceSensorPermissions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DefineAccelerometerMultiplier")) Module["JS_DefineAccelerometerMultiplier"] = function() {
 abort("'JS_DefineAccelerometerMultiplier' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_RequestDeviceSensorPermissions")) Module["JS_RequestDeviceSensorPermissions"] = function() {
 abort("'JS_RequestDeviceSensorPermissions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_OrientationSensor_eventHandler")) Module["JS_OrientationSensor_eventHandler"] = function() {
 abort("'JS_OrientationSensor_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Accelerometer_eventHandler")) Module["JS_Accelerometer_eventHandler"] = function() {
 abort("'JS_Accelerometer_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_ComputeGravity")) Module["JS_ComputeGravity"] = function() {
 abort("'JS_ComputeGravity' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_LinearAccelerationSensor_eventHandler")) Module["JS_LinearAccelerationSensor_eventHandler"] = function() {
 abort("'JS_LinearAccelerationSensor_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_GravitySensor_eventHandler")) Module["JS_GravitySensor_eventHandler"] = function() {
 abort("'JS_GravitySensor_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_Gyroscope_eventHandler")) Module["JS_Gyroscope_eventHandler"] = function() {
 abort("'JS_Gyroscope_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DeviceOrientation_eventHandler")) Module["JS_DeviceOrientation_eventHandler"] = function() {
 abort("'JS_DeviceOrientation_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DeviceMotion_eventHandler")) Module["JS_DeviceMotion_eventHandler"] = function() {
 abort("'JS_DeviceMotion_eventHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DeviceMotion_add")) Module["JS_DeviceMotion_add"] = function() {
 abort("'JS_DeviceMotion_add' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JS_DeviceMotion_remove")) Module["JS_DeviceMotion_remove"] = function() {
 abort("'JS_DeviceMotion_remove' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UNETWebSocketsInstances")) Module["UNETWebSocketsInstances"] = function() {
 abort("'UNETWebSocketsInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "videoInstances")) Module["videoInstances"] = function() {
 abort("'videoInstances' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "videoInstanceIdCounter")) Module["videoInstanceIdCounter"] = function() {
 abort("'videoInstanceIdCounter' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "hasSRGBATextures")) Module["hasSRGBATextures"] = function() {
 abort("'hasSRGBATextures' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoEnded")) Module["jsVideoEnded"] = function() {
 abort("'jsVideoEnded' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoAllAudioTracksAreDisabled")) Module["jsVideoAllAudioTracksAreDisabled"] = function() {
 abort("'jsVideoAllAudioTracksAreDisabled' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoPendingBlockedVideos")) Module["jsVideoPendingBlockedVideos"] = function() {
 abort("'jsVideoPendingBlockedVideos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoAddPendingBlockedVideo")) Module["jsVideoAddPendingBlockedVideo"] = function() {
 abort("'jsVideoAddPendingBlockedVideo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoPlayPendingBlockedVideo")) Module["jsVideoPlayPendingBlockedVideo"] = function() {
 abort("'jsVideoPlayPendingBlockedVideo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoRemovePendingBlockedVideo")) Module["jsVideoRemovePendingBlockedVideo"] = function() {
 abort("'jsVideoRemovePendingBlockedVideo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsVideoAttemptToPlayBlockedVideos")) Module["jsVideoAttemptToPlayBlockedVideos"] = function() {
 abort("'jsVideoAttemptToPlayBlockedVideos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsSupportedVideoFormats")) Module["jsSupportedVideoFormats"] = function() {
 abort("'jsSupportedVideoFormats' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsUnsupportedVideoFormats")) Module["jsUnsupportedVideoFormats"] = function() {
 abort("'jsUnsupportedVideoFormats' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "activeWebCams")) Module["activeWebCams"] = function() {
 abort("'activeWebCams' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "cameraAccess")) Module["cameraAccess"] = function() {
 abort("'cameraAccess' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "wr")) Module["wr"] = function() {
 abort("'wr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsWebRequestGetResponseHeaderString")) Module["jsWebRequestGetResponseHeaderString"] = function() {
 abort("'jsWebRequestGetResponseHeaderString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDBFS")) Module["IDBFS"] = function() {
 abort("'IDBFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "LKBridge")) Module["LKBridge"] = function() {
 abort("'LKBridge' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SimpleWeb")) Module["SimpleWeb"] = function() {
 abort("'SimpleWeb' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetIndexed")) Module["emscriptenWebGLGetIndexed"] = function() {
 abort("'emscriptenWebGLGetIndexed' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "remove_cpp_comments_in_shaders")) Module["remove_cpp_comments_in_shaders"] = function() {
 abort("'remove_cpp_comments_in_shaders' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "find_closing_parens_index")) Module["find_closing_parens_index"] = function() {
 abort("'find_closing_parens_index' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "preprocess_c_code")) Module["preprocess_c_code"] = function() {
 abort("'preprocess_c_code' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() {
 abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() {
 abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() {
 abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() {
 abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() {
 abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() {
 abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() {
 abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() {
 abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() {
 abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() {
 abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() {
 abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() {
 abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() {
 abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() {
 abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["writeStackCookie"] = writeStackCookie;

Module["checkStackCookie"] = checkStackCookie;

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", {
 configurable: true,
 get: function() {
  abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", {
 configurable: true,
 get: function() {
  abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function callMain(args) {
 assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
 assert(__ATPRERUN__.length == 0, "cannot call main when preRun functions remain to be called");
 var entryFunction = Module["_main"];
 args = args || [];
 var argc = args.length + 1;
 var argv = stackAlloc((argc + 1) * 4);
 HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
 for (var i = 1; i < argc; i++) {
  HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
 }
 HEAP32[(argv >> 2) + argc] = 0;
 try {
  var ret = entryFunction(argc, argv);
  exit(ret, true);
 } catch (e) {
  if (e instanceof ExitStatus) {
   return;
  } else if (e == "unwind") {
   return;
  } else {
   var toLog = e;
   if (e && typeof e === "object" && e.stack) {
    toLog = [ e, e.stack ];
   }
   err("exception thrown: " + toLog);
   quit_(1, e);
  }
 } finally {
  calledMain = true;
 }
}

function stackCheckInit() {
 _emscripten_stack_init();
 writeStackCookie();
}

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 stackCheckInit();
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  preMain();
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (shouldRunNow) callMain(args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

Module["run"] = run;

function checkUnflushedContent() {
 var oldOut = out;
 var oldErr = err;
 var has = false;
 out = err = function(x) {
  has = true;
 };
 try {
  var flush = Module["_fflush"];
  if (flush) flush(0);
  [ "stdout", "stderr" ].forEach(function(name) {
   var info = FS.analyzePath("/dev/" + name);
   if (!info) return;
   var stream = info.object;
   var rdev = stream.rdev;
   var tty = TTY.ttys[rdev];
   if (tty && tty.output && tty.output.length) {
    has = true;
   }
  });
 } catch (e) {}
 out = oldOut;
 err = oldErr;
 if (has) {
  warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
 }
}

function exit(status, implicit) {
 EXITSTATUS = status;
 checkUnflushedContent();
 if (implicit && keepRuntimeAlive() && status === 0) {
  return;
 }
 if (keepRuntimeAlive()) {
  if (!implicit) {
   var msg = "program exited (with status: " + status + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
   err(msg);
  }
 } else {
  exitRuntime();
  if (Module["onExit"]) Module["onExit"](status);
  ABORT = true;
 }
 quit_(status, new ExitStatus(status));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

var shouldRunNow = true;

if (Module["noInitialRun"]) shouldRunNow = false;

run();

}
