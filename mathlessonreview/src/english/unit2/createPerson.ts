/**
 * Created by oo on 2016/4/5.
 */
class createPerson extends egret.Sprite{
    constructor(){
        super();
    }
    //人物的身体
    private _personebody;
    //人物的面部表情
    private _personemotion:movieClip;
    //人物的胳膊
    private _personarm;
    //剪刀手
    private _shearhand;
    //模糊的照片
    private _personedim;
    //姐姐的辫子
    private bodyhair;
    //闪光的照片
    private _personeflicker;
    //入场动画
    private _ruchanganimation;
    //人物面部表情
    public setPersonEmotion(data_json,data_png,name,x,y){
        //人物的表情
        this._personemotion = new movieClip();
        this._personemotion.setProXY(x,y);
        this._personemotion.addNumber(data_json,data_png,name);
    }
    public getPersonEmotion(){
        return this._personemotion;
    }
    //人物的胳膊
        public getPersonArm() {
        return this._personarm;
    }

    public setPersonArm(value,x,y) {
        this._personarm = egretUntil.createBitmapByName(value);
        this._personarm.x = x;
        this._personarm.y = y;
    }
    //人物的剪刀手
    public getShearHand() {
        return this._shearhand;
    }

    public setShearHand(value,x,y) {
        this._shearhand = egretUntil.createBitmapByName(value);
        this._shearhand.x = x;
        this._shearhand.y = y;
    }
    //人物模糊的照片
    public getPersoneDim() {
        return this._personedim;
    }

    public setPersoneDim(value,x,y) {
        this._personedim = egretUntil.createBitmapByName(value);
        this._personedim.x = x;
        this._personedim.y = y;
    }
    //人物闪光照
    public getPersoneFlicker() {
        return this._personeflicker;
    }

    public setPersoneFlicker(value,x,y) {
        this._personeflicker = egretUntil.createBitmapByName(value);
        this._personeflicker.x = x;
        this._personeflicker.y = y;
    }
    //人物的身体
    public setPersoneBody(value,x,y){
        this._personebody = egretUntil.createBitmapByName(value);
        this._personebody.x = x;
        this._personebody.y = y;
    }
    public getPersoneBody(){
        return this._personebody;
    }
    //姐姐的辫子
    public setPersonHair(data_json,data_png,name,x,y){
        this.bodyhair = new movieClip();
        this.bodyhair.setProXY(x,y);
        this.bodyhair.addNumber(data_json,data_png,name);
    }
    public getPersonHair(){
        return this.bodyhair;
    }
    //入场动画
    public setRuchangAnimation(data_json,data_png,name,x,y){
        this._ruchanganimation = new movieClip();
        this._ruchanganimation.setProXY(x,y);
        this._ruchanganimation.addNumber(data_json,data_png,name);
    }
    public getRuchangAnimation(){
        return this._ruchanganimation;
    }
}