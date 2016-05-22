/**
 * Created by oo on 2016/4/15.
 */
var english1Unit1Study = (function (_super) {
    __extends(english1Unit1Study, _super);
    function english1Unit1Study() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addScence, this);
    }
    var d = __define,c=english1Unit1Study,p=c.prototype;
    //添加场景
    p.addScence = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addScence, this);
        this.addCommonPer(staticVarUntil.ENDVIEW, staticVarUntil.ENGLISH_1_UNIT_1_STUDY, this);
        var bg = egretUntil.createBitmapByName("family_png");
        this.addChild(bg);
        egret.setTimeout(this.playEndImage, this, 1000, "egret");
    };
    //mp4播放结束后的图片
    p.playEndImage = function () {
        var img = egretUntil.createBitmapByName("familyend_png");
        this.addChild(img);
    };
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return english1Unit1Study;
}(englishfat));
egret.registerClass(english1Unit1Study,'english1Unit1Study');
