/**
 * Created by oo on 2016/4/6.
 */
class picFrameCon extends egret.Sprite{
    public get name():string {
        return this._name;
    }

    public set name(value:string) {
        this._name = value;
    }
    private _name:string;
    //照片框
    private _picframe:egret.Bitmap;
    //照片框里的照片
    private _picframephoto:egret.Bitmap;
    //照片框里的单词
    private _picframeword:egret.Bitmap;

    public setPicFrame(name,x,y){
        this._picframe = egretUntil.createBitmapByName(name);
        this._picframe.x = x;
        this._picframe.y = y;
    }
    public getPicFrame(){
        return this._picframe;
    }

    public setPicFramePhoto(name,x,y){
        this._picframephoto = egretUntil.createBitmapByName(name);
        this._picframephoto.x = x;
        this._picframephoto.y = y;
    }
    public getPicFramePhoto(){
        return this._picframephoto;
    }

    public setPicFrameWord(name,x,y){
        this._picframeword = egretUntil.createBitmapByName(name);
        if(x instanceof egret.Sprite)
        this._picframeword.x = (x.width - this._picframeword.width)/2;
        if(y instanceof egret.Sprite)
        this._picframeword.y = (y.height - this._picframeword.height)/2+20;
    }
    public getPicFrameWord(){
        return this._picframeword;
    }
}