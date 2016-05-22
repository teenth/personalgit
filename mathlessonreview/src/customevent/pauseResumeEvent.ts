/**
 * Created by oo on 2016/1/18.
 */
class pauseResumeEvent extends egret.Event{
    public static PAUSERESUME:string = "pauseresume";
    public eventType:any;//事件类型
    public eventObj:any;//事件对象
    public static PAUSE:string = "pause";
    public static RESUME:string = "resume";
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false){
        super(type,bubbles,cancelable);
    }
}