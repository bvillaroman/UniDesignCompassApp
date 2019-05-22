
var INITED = 'INITED';
var PLAYING = 'PLAYING';
var PAUSED = 'PAUSED';
var STOPPED = 'STOPPED';
var TimerState = /** @class */ (function () {
    function TimerState(onChangeStatus) {
        var _this = this;
        if (onChangeStatus === void 0) { onChangeStatus = function (obj) { }; }
        this.state = INITED;
        this.onChange = function () { return onChangeStatus({ timerState: _this.state }); };
        this.state = INITED;
    }
    TimerState.prototype.getState = function () {
        return this.state;
    };
    TimerState.prototype.setInited = function () {
        if (this.state === INITED) {
            return false;
        }
        this.state = INITED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isInited = function () {
        return this.state === INITED;
    };
    TimerState.prototype.setPlaying = function () {
        if (this.state === PLAYING) {
            return false;
        }
        this.state = PLAYING;
        this.onChange();
        return true;
    };
    TimerState.prototype.isPlaying = function () {
        return this.state === PLAYING;
    };
    TimerState.prototype.setPaused = function () {
        if (this.state !== PLAYING) {
            return false;
        }
        this.state = PAUSED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isPaused = function () {
        return this.state === PAUSED;
    };
    TimerState.prototype.setStopped = function () {
        if (this.state === INITED) {
            return false;
        }
        this.state = STOPPED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isStopped = function () {
        return this.state === STOPPED;
    };
    return TimerState;
}());
module.exports={
    TimerState,
    INITED,
    PLAYING,
    PAUSED,
    STOPPED
}
//# sourceMappingURL=TimerState.js.map