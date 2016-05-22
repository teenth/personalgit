/**
 * Created by oo on 2016/4/6.
 */
var picFrameCon = (function (_super) {
    __extends(picFrameCon, _super);
    function picFrameCon() {
        _super.apply(this, arguments);
    }
    var d = __define,c=picFrameCon,p=c.prototype;
    d(p, "name"
        ,function () {
            return this._name;
        }
        ,function (value) {
            this._name = value;
        }
    );
    p.setPicFrame = function (name, x, y) {
        this._picframe = egretUntil.createBitmapByName(name);
        this._picframe.x = x;
        this._picframe.y = y;
    };
    p.getPicFrame = function () {
        return this._picframe;
    };
    p.setPicFramePhoto = function (name, x, y) {
        this._picframephoto = egretUntil.createBitmapByName(name);
        this._picframephoto.x = x;
        this._picframephoto.y = y;
    };
    p.getPicFramePhoto = function () {
        return this._picframephoto;
    };
    p.setPicFrameWord = function (name, x, y) {
        this._picframeword = egretUntil.createBitmapByName(name);
        if (x instanceof egret.Sprite)
            this._picframeword.x = (x.width - this._picframeword.width) / 2;
        if (y instanceof egret.Sprite)
            this._picframeword.y = (y.height - this._picframeword.height) / 2 + 20;
    };
    p.getPicFrameWord = function () {
        return this._picframeword;
    };
    return picFrameCon;
}(egret.Sprite));
egret.registerClass(picFrameCon,'picFrameCon');
