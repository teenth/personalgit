/**
 * Created by oo on 2016/1/18.
 */
var dragonBone = (function (_super) {
    __extends(dragonBone, _super);
    function dragonBone() {
        _super.call(this);
        //骨骼动画的位移速度
        this.speedX = 0;
        this.speedY = 0;
    }
    var d = __define,c=dragonBone,p=c.prototype;
    //添加骨骼
    p.addDB = function (dragonbonesData_json, textureData_txt, texture_txt, FastArmature) {
        //数字三的骨骼动画
        var dragonbonesData = RES.getRes(dragonbonesData_json); //numberThree_json ear_json
        var textureData = RES.getRes(textureData_txt); //numberThreetxt_json eartxt_json
        var texture = RES.getRes(texture_txt); //numberThreetxt_png eartxt_png
        var dragonbonesFactory = new dragonBones.EgretFactory();
        dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
        dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        this.armature = dragonbonesFactory.buildFastArmature(FastArmature); //构建FastArmature
        this.armature.enableAnimationCache(30); //开启数据缓存，30代表采样帧频，推荐设置为12~30，达到性能和动画流畅度的最佳平衡点。
        this.addChild(this.armature.display);
        //this.width = this.armature.display.width;
        //this.height = this.armature.display.height;
        // egret.Tween.get(this.armature.display,{loop:true}).to({scaleX:-1},1000).to({scaleX:1},1000);
    };
    //位置
    p.setPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //获得位置
    p.getPosX = function () {
        return this.x;
    };
    p.getPosY = function () {
        return this.y;
    };
    //设置时间系数
    p.settimeScale = function (ts) {
        this.armature.animation.timeScale = ts;
    };
    //从哪帧开始播放
    p.setstartPlay = function (start, playTimes) {
        this.armature.animation.gotoAndPlay(start, -1, -1, playTimes);
    };
    //动画停止于某个时间点
    //public setstopPlay(){
    //    this.armature.animation.gotoAndStop(start,-1,-1,playTimes);
    //}
    //设置骨骼位移速度
    p.setSpeedXY = function (speedX, speedY) {
        this.speedX = speedX;
        this.speedY = speedY;
    };
    //获得骨骼位移速度
    p.getSpeedX = function () {
        return this.speedX;
    };
    p.getSpeedY = function () {
        return this.speedY;
    };
    //获得armature
    p.getArmature = function () {
        return this.armature;
    };
    //获得骨骼的宽
    p.getArmatureWidth = function () {
        return this.armature.display.width;
    };
    //骨骼翻转
    p.setScaleX = function (scaleX) {
        this.armature.scaleX = scaleX;
    };
    p.setScaleY = function (scaleY) {
        this.armature.scaleY = scaleY;
    };
    return dragonBone;
}(egret.Sprite));
egret.registerClass(dragonBone,'dragonBone');
