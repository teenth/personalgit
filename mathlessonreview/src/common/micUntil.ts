/**
 * Created by oo on 2016/1/20.
 */
class micUntil extends egret.Sprite{
    public constructor(){
        super();
        this.addMic();
    }
    private static instance:micUntil;
    private micsheet;
    private copymichheight;
    //红色麦克风
    private mich;
    //覆盖的麦克风
    private copymich;
    //单列模式
    public static getInstance(){
        if (micUntil.instance == null) {
            micUntil.instance = new micUntil();
        }

        return micUntil.instance;
    }
    //情况实例
    public static setInstance(){
        micUntil.instance = null;
    }
    //添加麦克风
    private addMic(){
        this.setXY();
        //麦克风大圈
        var largemic = egretUntil.createBitmapByName("y");
        this.addChild(largemic);

        //麦克风底层的圈
        var mic3 = egretUntil.createBitmapByName("y1");
        this.addChild(mic3);
        mic3.x = 13;
        mic3.y = (largemic.height-mic3.height)/2;

        //两个麦克风图标
        var mic1 = egretUntil.createBitmapByName("h1");
        this.addChild(mic1);
        mic1.x = (mic3.width-mic1.width)/2+mic3.x;
        mic1.y = (mic3.height-mic1.height)/2+mic3.y;
        var mic2 = egretUntil.createBitmapByName("h2");
        this.addChild(mic2);
        mic2.x = (mic3.width-mic2.width)/2+mic3.x;
        mic2.y = (mic3.height-mic2.height)/2+mic3.y;

        //红色麦克风图标
        this.mich = egretUntil.createBitmapByName("h3");
        this.addChild(this.mich);
        this.mich.x = (mic3.width-this.mich.width)/2+mic3.x;
        this.mich.y = (mic3.height-this.mich.height)/2+mic3.y;
        this.mich.fillMode = egret.BitmapFillMode.REPEAT;

        //覆盖在红色麦克风上的图标
        this.copymich = mic2;
        this.copymichheight = mic2.height;
        this.copymich.fillMode = egret.BitmapFillMode.REPEAT;

    }
    //初始化坐标
    private setXY(){
        this.x= egretUntil.getStageWidth();
        this.y = 10;
    }
    //麦克风闪烁
    private static micShanshuo(){
        micUntil.instance.copymich.visible = true;
        micUntil.instance.addChild(micUntil.instance.copymich);
        //this.mich.height = 0;
        mathfat.setTweenarr(micUntil.instance.copymich);
        egret.Tween.get(micUntil.instance.copymich,{loop:true}).to({height:0},1000).to({height:micUntil.instance.copymichheight},50);
    }
    //麦克风停止闪烁 并显示红色麦克风
    private static micStopShanshuo(){
        egret.Tween.removeTweens(micUntil.instance.copymich);
        micUntil.instance.copymich.height = micUntil.instance.copymichheight;
        micUntil.instance.copymich.visible = false;
    }
    //显示mic
    public showMic(){
        mathfat.setTweenarr(micUntil.instance);
        egret.Tween.get(micUntil.instance).to({x:egretUntil.getStageWidth()-micUntil.instance.width},300).
            call(micUntil.micShanshuo,this);
    }
    //隐藏mic
    public hiddenMic(){
        egret.Tween.get(micUntil.instance).call(micUntil.micStopShanshuo,this).wait(300).to({x:egretUntil.getStageWidth()},300);
    }
}