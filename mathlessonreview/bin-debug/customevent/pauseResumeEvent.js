/**
 * Created by oo on 2016/1/18.
 */
var pauseResumeEvent = (function (_super) {
    __extends(pauseResumeEvent, _super);
    function pauseResumeEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
    }
    var d = __define,c=pauseResumeEvent,p=c.prototype;
    pauseResumeEvent.PAUSERESUME = "pauseresume";
    pauseResumeEvent.PAUSE = "pause";
    pauseResumeEvent.RESUME = "resume";
    return pauseResumeEvent;
}(egret.Event));
egret.registerClass(pauseResumeEvent,'pauseResumeEvent');
