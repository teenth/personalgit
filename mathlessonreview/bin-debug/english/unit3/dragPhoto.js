/**
 * Created by oo on 2016/4/6.
 */
var dragPhoto = (function (_super) {
    __extends(dragPhoto, _super);
    function dragPhoto() {
        _super.apply(this, arguments);
        this._ismove = false;
    }
    var d = __define,c=dragPhoto,p=c.prototype;
    d(p, "dragphotoimg"
        ,function () {
            return this._dragphotoimg;
        }
        ,function (value) {
            this._dragphotoimg = value;
        }
    );
    d(p, "name"
        ,function () {
            return this._name;
        }
        ,function (value) {
            this._name = value;
        }
    );
    d(p, "startx"
        ,function () {
            return this._startx;
        }
        ,function (value) {
            this._startx = value;
        }
    );
    d(p, "starty"
        ,function () {
            return this._starty;
        }
        ,function (value) {
            this._starty = value;
        }
    );
    d(p, "endx"
        ,function () {
            return this._endx;
        }
        ,function (value) {
            this._endx = value;
        }
    );
    d(p, "endy"
        ,function () {
            return this._endy;
        }
        ,function (value) {
            this._endy = value;
        }
    );
    d(p, "movex"
        ,function () {
            return this._movex;
        }
        ,function (value) {
            this._movex = value;
        }
    );
    d(p, "movey"
        ,function () {
            return this._movey;
        }
        ,function (value) {
            this._movey = value;
        }
    );
    d(p, "ismove"
        ,function () {
            return this._ismove;
        }
        ,function (value) {
            this._ismove = value;
        }
    );
    //设置拖拽照片的默认信息
    p.setDefaultInfo = function (name, word, scalex, scaley) {
        if (scalex === void 0) { scalex = 1.1; }
        if (scaley === void 0) { scaley = 1.1; }
        this.name = word;
        var dragphoto = egretUntil.createBitmapByName(name);
        this.addChild(dragphoto);
        dragphoto.scaleX = scalex;
        dragphoto.scaleY = scaley;
        dragphoto.width *= dragphoto.scaleX;
        dragphoto.height *= dragphoto.scaleY;
        this.width = dragphoto.width;
        this.height = dragphoto.height;
        this.x = (egretUntil.getStageWidth() - dragphoto.width * dragphoto.scaleX) / 2;
        this.y = egretUntil.getStageHeight() + dragphoto.height * dragphoto.scaleY;
        this.dragphotoimg = dragphoto;
    };
    return dragPhoto;
}(egret.Sprite));
egret.registerClass(dragPhoto,'dragPhoto');
