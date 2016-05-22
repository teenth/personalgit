/**
 * Created by oo on 2016/1/20.
 */
var animationUntil = (function (_super) {
    __extends(animationUntil, _super);
    function animationUntil() {
        _super.call(this);
    }
    var d = __define,c=animationUntil,p=c.prototype;
    //闪烁
    animationUntil.shanshuo = function (name, x, y, obj) {
        var num2 = egretUntil.createBitmapByName(name);
        num2.alpha = 0;
        num2.x = x;
        num2.y = y;
        obj.addChild(num2);
        mathfat.setTweenarr(num2);
        //高斯模糊的图片
        egret.Tween.get(num2, { loop: true }).wait(200).to({ alpha: 1 }, 200).wait(200).to({ alpha: 0 }, 200);
    };
    //跳跃 obj 目标数字
    animationUntil.numJump = function (desy, obj) {
        var starty = obj.y;
        egret.Tween.get(obj, { loop: true }).to({ y: desy }, 600).to({ y: starty }, 600);
    };
    //按钮的果冻效果
    //public static effectJelly(obj){
    //    egret.Tween.get(obj).to({scaleX:1.2,scaleY:0.8},130).//100
    //        to({scaleX:0.8,scaleY:1.2},130)
    //        .to({scaleX:1,scaleY:1},130);
    //}
    //旋转
    animationUntil.spinLoop = function (obj) {
        egret.Tween.get(obj, { loop: true }).to({ rotation: 360 }, 10000);
    };
    //青蛙跳出来
    animationUntil.jumpOut = function (obj, desy) {
        egret.Tween.get(obj).to({ y: desy }, 500, egret.Ease.backOut);
    };
    //动画上升的过程逐渐变小
    animationUntil.topingChangeSmall = function (obj, desy) {
        egret.Tween.get(obj, { loop: true }).to({ y: desy, scaleX: 0.6, scaleY: 0.6 }, 3000);
    };
    //按钮的果冻效果
    animationUntil.effectJelly = function (obj, loop, waittime) {
        if (loop === void 0) { loop = false; }
        if (waittime === void 0) { waittime = 0; }
        egret.Tween.get(obj, { loop: loop }).wait(waittime).to({ scaleX: 1.2, scaleY: 0.8 }, 130).
            to({ scaleX: 0.8, scaleY: 1.2 }, 130)
            .to({ scaleX: 1, scaleY: 1 }, 130);
    };
    return animationUntil;
}(egret.Sprite));
egret.registerClass(animationUntil,'animationUntil');
