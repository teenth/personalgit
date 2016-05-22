/**
 * Created by oo on 2016/1/15.
 */
var movieClip = (function (_super) {
    __extends(movieClip, _super);
    function movieClip() {
        _super.call(this);
        //序列帧数组
        this.mcmap = new Map();
    }
    var d = __define,c=movieClip,p=c.prototype;
    //数字场景动画
    p.addNumber = function (data, txtr, movieName) {
        var data = RES.getRes(data);
        var txtr = RES.getRes(txtr);
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData(movieName));
        this.addChild(this.mc);
        this.mc.x = 0;
        this.mc.y = 0;
        this.mcmap.set(movieName, this.mc);
    };
    //设定显示的坐标
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //获得动画的对象
    p.getMc = function () {
        return this.mc;
    };
    return movieClip;
}(egret.Sprite));
egret.registerClass(movieClip,'movieClip');
