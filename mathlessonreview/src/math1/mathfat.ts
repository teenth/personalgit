/**
 * Created by oo on 2016/3/14.
 */
class mathfat extends egret.DisplayObjectContainer{
    public constructor(){
        super();
    }
    //mc的数组
    private static mcarr=[];
    //缓动动画的数组
    private static tweenarr =[];
    //心跳函数数组 骨骼动画
    private static tickerarr=[];
    //粒子系统
    private static particlearr=[];
    //定时器
    private static timerarr=[];
    //事件对象
    private viewmanagerevent:viewManagerEvent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    //添加个各类相同的属性
    public addCommonPer(eventType:string,numbersign:string,obj){
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        if(staticVarUntil.numbersign.indexOf("math1unit1")>=0){
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_1;
        }else if(staticVarUntil.numbersign.indexOf("math1unit2")>=0){
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_2;
        }else if(staticVarUntil.numbersign.indexOf("math1unit3")>=0){
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_3;
        }

        staticVarUntil.numbersign = numbersign;
    }
    //得到要发送的事件
    public getViewmanagerevent(){
        //停止声音的播放
        stopSoundEffect();
        return this.viewmanagerevent;
    }

    public static setMcarr(mcname:string,mc:egret.MovieClip,times:number=0){
        mathfat.mcarr.push({"mcname":mcname,"mcplaying":mc.isPlaying,"mcobj":mc,"playtimes":times});
    }
    //设置播放次数
    public static setMcTimes(mcname:string,times:number){
        for(var i = 0;i<mathfat.mcarr.length;i++){
            if(mathfat.mcarr[i].mcname == mcname){
                mathfat.mcarr[i].playtimes = times;
                return;
            }
        }
    }
    public static getMcarr(){
        return mathfat.mcarr;
    }
    public static setTweenarr(tw){
        mathfat.tweenarr.push(tw);
    }
    public static getTweenarr(){
        return mathfat.tweenarr;
    }
    public static setTick(callback,obj){
        mathfat.tickerarr.push({"funtick":callback,"obj":obj});
    }
    public static setparticlearr(particle){
        mathfat.particlearr.push(particle);
    }
    public static setTimerArr(timer){
        mathfat.timerarr.push(timer);
    }
    //暂停所有动画
    public static PauseAllAnimation(){
        for(var i = 0;i<mathfat.mcarr.length;i++){
            //有父级 说明存在
            if(mathfat.mcarr[i].mcobj.parent && mathfat.mcarr[i].mcobj.isPlaying){
                //表示暂停了正在播放的动画 下一次启动刚暂停的动画
                mathfat.mcarr[i].mcplaying = true;
                mathfat.mcarr[i].mcobj.stop();
            }
        }
        for(var i = 0;i<mathfat.tweenarr.length;i++){
            //有父级 说明存在
            if(mathfat.tweenarr[i].parent){
               egret.Tween.pauseTweens(mathfat.tweenarr[i]);
            }
        }

            for(var i = 0;i<mathfat.tickerarr.length;i++){
                try{
                egret.stopTick(mathfat.tickerarr[i].funtick,mathfat.tickerarr[i].obj);
                }catch(e){}
            }
            for(var i = 0;i<mathfat.particlearr.length;i++){
                mathfat.particlearr[i].stop();
            }
        for(var i = 0;i<mathfat.timerarr.length;i++){
            egret.clearTimeout(mathfat.timerarr[i]);
        }

    }

    //重启所有动画
    public static resumeAllAnimation(){
        for(var i = 0;i<mathfat.mcarr.length;i++){
            //有父级 说明存在
            if(mathfat.mcarr[i].mcobj.parent && mathfat.mcarr[i].mcplaying){
                //唤醒后变为false 如果在这段动画 没播放完成之前暂停了 暂停的方法会把它置为true
                mathfat.mcarr[i].mcplaying = false;
                mathfat.mcarr[i].mcobj.play(mathfat.mcarr[i].playtimes);
            }
        }
        for(var i = 0;i<mathfat.tweenarr.length;i++){
            //有父级 说明存在
            if(mathfat.tweenarr[i].parent){
                egret.Tween.resumeTweens(mathfat.tweenarr[i]);
            }
        }
        for(var i = 0;i<mathfat.tickerarr.length;i++){
            try{
                egret.startTick(mathfat.tickerarr[i].funtick,mathfat.tickerarr[i].obj);
            }catch(e){}
        }
    }
    //初始化所有 数组
    public static initArr(){
        mathfat.mcarr = [];
        mathfat.tweenarr = [];
    }
}