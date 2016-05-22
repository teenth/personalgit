/**
 * Created by oo on 2016/4/6.
 */
class dragPhoto extends egret.Sprite{
    //拖拽的照片名字
    private _name:string;
    private _dragphotoimg:egret.Bitmap;
    //起始坐标
    private _startx:number;
    private _starty:number;
    private _endx:number;
    private _endy:number;
    private _movex:number;
    private _movey:number;
    private _ismove:boolean = false;
    public get dragphotoimg():egret.Bitmap {
        return this._dragphotoimg;
    }

    public set dragphotoimg(value:egret.Bitmap) {
        this._dragphotoimg = value;
    }
    public get name():string {
        return this._name;
    }

    public set name(value:string) {
        this._name = value;
    }
    public get startx():number {
        return this._startx;
    }

    public set startx(value:number) {
        this._startx = value;
    }

    public get starty():number {
        return this._starty;
    }

    public set starty(value:number) {
        this._starty = value;
    }

    public get endx():number {
        return this._endx;
    }

    public set endx(value:number) {
        this._endx = value;
    }

    public get endy():number {
        return this._endy;
    }

    public set endy(value:number) {
        this._endy = value;
    }
    public get movex():number {
        return this._movex;
    }

    public set movex(value:number) {
        this._movex = value;
    }

    public get movey():number {
        return this._movey;
    }

    public set movey(value:number) {
        this._movey = value;
    }

    public get ismove():boolean {
        return this._ismove;
    }

    public set ismove(value:boolean) {
        this._ismove = value;
    }
    //设置拖拽照片的默认信息
    public setDefaultInfo(name,word,scalex=1.1,scaley=1.1){
        this.name = word;
        var dragphoto = egretUntil.createBitmapByName(name);
        this.addChild(dragphoto);
        dragphoto.scaleX = scalex;
        dragphoto.scaleY = scaley;
        dragphoto.width *= dragphoto.scaleX;
        dragphoto.height *= dragphoto.scaleY;
        this.width = dragphoto.width;
        this.height = dragphoto.height;
        this.x = (egretUntil.getStageWidth()-dragphoto.width*dragphoto.scaleX)/2;
        this.y = egretUntil.getStageHeight()+dragphoto.height*dragphoto.scaleY;
        this.dragphotoimg = dragphoto;
    }
}