/**
 * Created by oo on 2016/4/5.
 */
var createPerson = (function (_super) {
    __extends(createPerson, _super);
    function createPerson() {
        _super.call(this);
    }
    var d = __define,c=createPerson,p=c.prototype;
    //人物面部表情
    p.setPersonEmotion = function (data_json, data_png, name, x, y) {
        //人物的表情
        this._personemotion = new movieClip();
        this._personemotion.setProXY(x, y);
        this._personemotion.addNumber(data_json, data_png, name);
    };
    p.getPersonEmotion = function () {
        return this._personemotion;
    };
    //人物的胳膊
    p.getPersonArm = function () {
        return this._personarm;
    };
    p.setPersonArm = function (value, x, y) {
        this._personarm = egretUntil.createBitmapByName(value);
        this._personarm.x = x;
        this._personarm.y = y;
    };
    //人物的剪刀手
    p.getShearHand = function () {
        return this._shearhand;
    };
    p.setShearHand = function (value, x, y) {
        this._shearhand = egretUntil.createBitmapByName(value);
        this._shearhand.x = x;
        this._shearhand.y = y;
    };
    //人物模糊的照片
    p.getPersoneDim = function () {
        return this._personedim;
    };
    p.setPersoneDim = function (value, x, y) {
        this._personedim = egretUntil.createBitmapByName(value);
        this._personedim.x = x;
        this._personedim.y = y;
    };
    //人物闪光照
    p.getPersoneFlicker = function () {
        return this._personeflicker;
    };
    p.setPersoneFlicker = function (value, x, y) {
        this._personeflicker = egretUntil.createBitmapByName(value);
        this._personeflicker.x = x;
        this._personeflicker.y = y;
    };
    //人物的身体
    p.setPersoneBody = function (value, x, y) {
        this._personebody = egretUntil.createBitmapByName(value);
        this._personebody.x = x;
        this._personebody.y = y;
    };
    p.getPersoneBody = function () {
        return this._personebody;
    };
    //姐姐的辫子
    p.setPersonHair = function (data_json, data_png, name, x, y) {
        this.bodyhair = new movieClip();
        this.bodyhair.setProXY(x, y);
        this.bodyhair.addNumber(data_json, data_png, name);
    };
    p.getPersonHair = function () {
        return this.bodyhair;
    };
    //入场动画
    p.setRuchangAnimation = function (data_json, data_png, name, x, y) {
        this._ruchanganimation = new movieClip();
        this._ruchanganimation.setProXY(x, y);
        this._ruchanganimation.addNumber(data_json, data_png, name);
    };
    p.getRuchangAnimation = function () {
        return this._ruchanganimation;
    };
    return createPerson;
}(egret.Sprite));
egret.registerClass(createPerson,'createPerson');
