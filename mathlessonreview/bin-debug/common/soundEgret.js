/**
 * Created by oo on 2016/1/26.
 */
var soundEgret = (function (_super) {
    __extends(soundEgret, _super);
    function soundEgret(url) {
        _super.call(this);
        this.url = url;
        this.startLoad(url);
    }
    var d = __define,c=soundEgret,p=c.prototype;
    p.startLoad = function (url) {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式为声音
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var request = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    };
    p.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的 Sound 对象
        var sound = loader.data;
        var channel = sound.play(0, 1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    };
    p.onSoundComplete = function (event) {
        getaudio(this.url);
    };
    return soundEgret;
}(egret.DisplayObjectContainer));
egret.registerClass(soundEgret,'soundEgret');
