/**
 * Created by oo on 2016/1/18.
 */
class dragonBone extends egret.Sprite{
    constructor(){
        super();
    }
    //
    private armature;
    //骨骼动画的位移速度
    private speedX:number = 0;
    private speedY:number = 0;
    //添加骨骼
    public addDB(dragonbonesData_json,textureData_txt,texture_txt,FastArmature){
        //数字三的骨骼动画
        var dragonbonesData = RES.getRes(dragonbonesData_json);//numberThree_json ear_json
        var textureData = RES.getRes(textureData_txt);//numberThreetxt_json eartxt_json
        var texture = RES.getRes(texture_txt);//numberThreetxt_png eartxt_png
        var dragonbonesFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
        dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
        dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
        this.armature= dragonbonesFactory.buildFastArmature(FastArmature); //构建FastArmature
        this.armature.enableAnimationCache(30);  //开启数据缓存，30代表采样帧频，推荐设置为12~30，达到性能和动画流畅度的最佳平衡点。
        this.addChild(this.armature.display);
        //this.width = this.armature.display.width;
        //this.height = this.armature.display.height;
        // egret.Tween.get(this.armature.display,{loop:true}).to({scaleX:-1},1000).to({scaleX:1},1000);

    }

    //位置
    public setPos(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //获得位置
    public getPosX(){
        return this.x;
    }
    public getPosY(){
        return this.y;
    }
    //设置时间系数
    public settimeScale(ts:number){
        this.armature.animation.timeScale = ts;
    }
    //从哪帧开始播放
    public setstartPlay(start:string,playTimes:number){
        this.armature.animation.gotoAndPlay(start,-1,-1,playTimes);
    }
    //动画停止于某个时间点
    //public setstopPlay(){
    //    this.armature.animation.gotoAndStop(start,-1,-1,playTimes);
    //}
    //设置骨骼位移速度
    public setSpeedXY(speedX:number,speedY:number){
        this.speedX = speedX;
        this.speedY = speedY;
    }
    //获得骨骼位移速度
    public getSpeedX(){
        return this.speedX;
    }
    public getSpeedY(){
        return this.speedY;
    }
    //获得armature
    public getArmature(){
        return this.armature;
    }
    //获得骨骼的宽
    public getArmatureWidth(){
        return this.armature.display.width;
    }
    //骨骼翻转
    public setScaleX(scaleX:number){
        this.armature.scaleX = scaleX;
    }
    public setScaleY(scaleY:number){
        this.armature.scaleY = scaleY;
    }
}