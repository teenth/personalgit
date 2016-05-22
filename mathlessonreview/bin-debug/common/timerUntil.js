/**
 * Created by oo on 2016/1/20.
 */
var timerUntil = (function (_super) {
    __extends(timerUntil, _super);
    function timerUntil() {
        _super.call(this);
        this.asrtimer = new egret.Timer(5000, 3);
        this.asrtimer.addEventListener(egret.TimerEvent.TIMER, this.asrtimerListening, this);
    }
    var d = __define,c=timerUntil,p=c.prototype;
    p.asrtimerListening = function () {
        egret.log(this.asrtimer.currentCount + " timer");
        stopAsr(true);
        if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST) {
            if (this.asrtimer.currentCount == 1) {
                playSoundEffect("english/english1/unit2/onceremind.ogg");
            }
            else if (this.asrtimer.currentCount == 2) {
                playSoundEffect("english/english1/unit2/twiceremind.ogg");
            }
            else if (this.asrtimer.currentCount == 3) {
                playSoundEffect("english/english1/unit2/thirdremind.ogg");
            }
        }
        else {
            if (this.asrtimer.currentCount == 1) {
                playSoundEffect("common/timer/wait10swarn.ogg");
            }
            else if (this.asrtimer.currentCount == 2) {
                playSoundEffect("common/timer/wait20swarn.ogg");
            }
            else if (this.asrtimer.currentCount == 3) {
                playSoundEffect("common/timer/wait30swarn.ogg");
            }
        }
    };
    return timerUntil;
}(egret.Sprite));
egret.registerClass(timerUntil,'timerUntil');
