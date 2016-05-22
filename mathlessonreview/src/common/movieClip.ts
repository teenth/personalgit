/**
 * Created by oo on 2016/1/15.
 */
class movieClip extends egret.Sprite{
    constructor(){
        super();
    }
    private mc:egret.MovieClip;
    //序列帧数组
    public mcmap:Map<any,any>= new Map();
    //数字场景动画
    public addNumber(data,txtr,movieName){
        var data = RES.getRes(data);
        var txtr = RES.getRes(txtr);
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        this.mc = new egret.MovieClip( mcFactory.generateMovieClipData( movieName ) );
        this.addChild( this.mc );
        this.mc.x = 0;
        this.mc.y = 0;
        this.mcmap.set(movieName,this.mc);
    }
    //设定显示的坐标
    public setProXY(x,y){
        this.x = x;
        this.y = y;
    }
    //获得动画的对象
    public getMc(){
        return this.mc;
    }
}