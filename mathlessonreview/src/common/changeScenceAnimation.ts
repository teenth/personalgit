/**
 * Created by oo on 2016/1/18.
 */
class changeScenceAnimation {
    //拉幕从上到下 obj缓动对象 playname要播放的过场动画的声音 callback动画结束后的回调
    //objthis那个类调用的
    public static pullSceenUpToDown(obj,playname,callback,objthis){
        obj.setProXY(0,-580);
        egret.setTimeout(function(){
             playSoundEffect(playname);
        },objthis,2000,"egret");
        saveLog("changeScenceAnimation","进来了 "+staticVarUntil.numbersign);
        egret.Tween.get(obj).wait(2000).call(function(){
            saveLog("obj",obj);
        }).to({y:0},1300,egret.Ease.cubicIn).wait(150).call(callback,objthis);
    }
    //从又往左的拉幕
    public static pullSceenRightToLeft(obj,playname,callback,objthis){
        try{
            obj.setProXY(980,0);
        }catch(e){
            obj.x = 980;
            obj.y = 0;
        }

        egret.setTimeout(function(){
            playSoundEffect(playname);
        },objthis,2000,"egret");
        egret.Tween.get(obj).wait(2000).to({x:0},1300,egret.Ease.cubicIn).wait(150).call(callback,objthis);
    }
}