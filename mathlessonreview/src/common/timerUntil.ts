/**
 * Created by oo on 2016/1/20.
 */
class timerUntil extends egret.Sprite{
    constructor(){
        super();
        this.asrtimer = new egret.Timer(5000,3);
        this.asrtimer.addEventListener(egret.TimerEvent.TIMER,this.asrtimerListening,this);
    }
    //监听asr是否有说话
    public  asrtimer;

    private asrtimerListening(){
        egret.log(this.asrtimer.currentCount+" timer");
        stopAsr(true);
        if(staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST){
            if(this.asrtimer.currentCount == 1){
                playSoundEffect("english/english1/unit2/onceremind.ogg");
            }else if(this.asrtimer.currentCount == 2){
                playSoundEffect("english/english1/unit2/twiceremind.ogg");
            }else if(this.asrtimer.currentCount == 3){
                playSoundEffect("english/english1/unit2/thirdremind.ogg");
            }
        }else{
            if(this.asrtimer.currentCount == 1){
                playSoundEffect("common/timer/wait10swarn.ogg");
            }else if(this.asrtimer.currentCount == 2){
                playSoundEffect("common/timer/wait20swarn.ogg");
            }else if(this.asrtimer.currentCount == 3){
                playSoundEffect("common/timer/wait30swarn.ogg");
            }
        }

    }
}