/**
 * Created by oo on 2016/3/14.
 */
class englishfat extends egret.DisplayObjectContainer{
    public constructor(){
        super();
    }
    //mc的数组
    private static mcarr=[];
    //缓动动画的数组
    private static tweenarr =[];
    //心跳函数数组 骨骼动画
    private static tickerarr=[];
    public everytitletime = new timerUntil();
    //事件对象
    private viewmanagerevent:viewManagerEvent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    //添加个各类相同的属性
    public addCommonPer(eventType:string,numbersign:string,obj){
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        staticVarUntil.numbersign = numbersign;
        staticVarUntil.mathunitnum = numbersign;
       // this.everytitletime.setEveryTitleTime();
    }
    //得到要发送的事件
    public getViewmanagerevent(){
        //停止声音的播放
        stopSoundEffect();
        return this.viewmanagerevent;
    }

    public static setMcarr(mcname:string,mc:egret.MovieClip,times:number=0){
        englishfat.mcarr.push({"mcname":mcname,"mcplaying":mc.isPlaying,"mcobj":mc,"playtimes":times});
    }
    //设置播放次数
    public static setMcTimes(mcname:string,times:number){
        for(var i = 0;i<englishfat.mcarr.length;i++){
            if(englishfat.mcarr[i].mcname == mcname){
                englishfat.mcarr[i].playtimes = times;
                return;
            }
        }
    }
    public static getMcarr(){
        return englishfat.mcarr;
    }
    public static setTweenarr(tw){
        englishfat.tweenarr.push(tw);
    }
    public static getTweenarr(){
        return englishfat.tweenarr;
    }
    public static setTick(callback,obj){
        englishfat.tickerarr.push({"funtick":callback,"obj":obj});
    }
    //暂停所有动画
    public static PauseAllAnimation(){
        for(var i = 0;i<englishfat.mcarr.length;i++){
            //有父级 说明存在
            if(englishfat.mcarr[i].mcobj.parent && englishfat.mcarr[i].mcobj.isPlaying){
                //表示暂停了正在播放的动画 下一次启动刚暂停的动画
                englishfat.mcarr[i].mcplaying = true;
                englishfat.mcarr[i].mcobj.stop();
            }
        }
        for(var i = 0;i<englishfat.tweenarr.length;i++){
            //有父级 说明存在
            if(englishfat.tweenarr[i].parent){
               egret.Tween.pauseTweens(englishfat.tweenarr[i]);
            }
        }

            for(var i = 0;i<englishfat.tickerarr.length;i++){
                try{
                egret.stopTick(englishfat.tickerarr[i].funtick,englishfat.tickerarr[i].obj);
                }catch(e){}
            }

    }

    //重启所有动画
    public static resumeAllAnimation(){
        for(var i = 0;i<englishfat.mcarr.length;i++){
            //有父级 说明存在
            if(englishfat.mcarr[i].mcobj.parent && englishfat.mcarr[i].mcplaying){
                //唤醒后变为false 如果在这段动画 没播放完成之前暂停了 暂停的方法会把它置为true
                englishfat.mcarr[i].mcplaying = false;
                englishfat.mcarr[i].mcobj.play(englishfat.mcarr[i].playtimes);
            }
        }
        for(var i = 0;i<englishfat.tweenarr.length;i++){
            //有父级 说明存在
            if(englishfat.tweenarr[i].parent){
                egret.Tween.resumeTweens(englishfat.tweenarr[i]);
            }
        }
        for(var i = 0;i<englishfat.tickerarr.length;i++){
            try{
                egret.startTick(englishfat.tickerarr[i].funtick,englishfat.tickerarr[i].obj);
            }catch(e){}
        }
    }
    //初始化所有 数组
    public static initArr(){
        englishfat.mcarr = [];
        englishfat.tweenarr = [];
    }
}