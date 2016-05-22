/**
 * Created by oo on 2016/4/15.
 */
class english1Unit1Study extends englishfat{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    //添加场景
    private addScence(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
        this.addCommonPer(staticVarUntil.ENDVIEW,staticVarUntil.ENGLISH_1_UNIT_1_STUDY,this);
        var bg = egretUntil.createBitmapByName("family_png");
        this.addChild(bg);
        egret.setTimeout(this.playEndImage,this,1000,"egret");
    }
    //mp4播放结束后的图片
    private playEndImage(){
        var img = egretUntil.createBitmapByName("familyend_png");
        this.addChild(img);
    }
    public setProXY(x,y){
        this.x = x;
        this.y = y;
    }
}