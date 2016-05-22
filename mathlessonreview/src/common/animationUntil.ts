/**
 * Created by oo on 2016/1/20.
 */
class animationUntil extends egret.Sprite{
    constructor (){
        super();
    }
    //闪烁
    public static shanshuo(name:string,x:number,y:number,obj){
        var num2 = egretUntil.createBitmapByName(name);
        num2.alpha = 0;
        num2.x = x;
        num2.y = y;
        obj.addChild(num2);
        mathfat.setTweenarr(num2);
        //高斯模糊的图片
        egret.Tween.get(num2,{loop:true}).wait(200).to({alpha:1},200).wait(200).to({alpha:0},200);
    }
    //跳跃 obj 目标数字
    public static numJump(desy:number,obj){
        var starty = obj.y;
        egret.Tween.get(obj,{loop:true}).to({y:desy},600).to({y:starty},600);
    }
    //按钮的果冻效果
    //public static effectJelly(obj){
    //    egret.Tween.get(obj).to({scaleX:1.2,scaleY:0.8},130).//100
    //        to({scaleX:0.8,scaleY:1.2},130)
    //        .to({scaleX:1,scaleY:1},130);
    //}
    //旋转
    public static spinLoop(obj){
        egret.Tween.get(obj,{loop:true}).to({rotation:360},10000);
    }
    //青蛙跳出来
    public static jumpOut(obj,desy:number){
        egret.Tween.get(obj).to({y:desy},500,egret.Ease.backOut);
    }
    //动画上升的过程逐渐变小
    public static topingChangeSmall(obj,desy:number){
        egret.Tween.get(obj,{loop:true}).to({y:desy,scaleX:0.6,scaleY:0.6},3000);
    }
    //按钮的果冻效果
    public static effectJelly(obj,loop:boolean =false,waittime:number = 0){
        egret.Tween.get(obj,{loop:loop}).wait(waittime).to({scaleX:1.2,scaleY:0.8},130).//100
            to({scaleX:0.8,scaleY:1.2},130)
            .to({scaleX:1,scaleY:1},130);
    }
}