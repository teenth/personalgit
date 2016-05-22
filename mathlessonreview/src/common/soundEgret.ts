/**
 * Created by oo on 2016/1/26.
 */
class soundEgret extends egret.DisplayObjectContainer {
    public constructor(url) {
        super();
        this.url =url;
        this.startLoad(url);
    }
    private url;
    private startLoad(url):void {
        //创建 URLLoader 对象
        var loader:egret.URLLoader = new egret.URLLoader();
        //设置加载方式为声音
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var request:egret.URLRequest = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    }

    private onLoadComplete(event:egret.Event):void {
        var loader:egret.URLLoader = <egret.URLLoader>event.target;
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>loader.data;
        var channel:egret.SoundChannel = sound.play(0,1);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }

    private onSoundComplete(event:egret.Event):void {
        getaudio(this.url);
    }
}