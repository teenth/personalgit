/**
 * Created by oo on 2016/3/28.
 */
class english1Unit3Test extends englishfat implements interfaceenglish{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addPhoto,this);
    }
    public sigletimutotalwrong:number=0;
    //照片框数组
    private picframearr=["fense","hongse","lanse","liuse","qianliu","ziluolan"];
    //照片框的坐标
    private picframexyarr=[{"x":40,"y":309},{"x":80,"y":111},{"x":285,"y":20},{"x":494,"y":20},
                             {"x":697,"y":111},{"x":735,"y":308}];
    //单词照片
    private wordandphotoarr=[{"word":"daddy","img":"baba"},
                             {"word":"brother","img":"gege"},
                             {"word":"grandpa","img":"yeye"},
                             {"word":"mommy","img":"mama"},
                             {"word":"sister","img":"jiejie"},
                             {"word":"grandma","img":"nainai"}
    ];
    //照片墙图片
    private photowallword;
    //生成的对象数组
    private picframeobjarr=[];
    //要拖拽的图片数组
    private dragimgarr=[];
    //要拖拽的图片的序号
    private dragimgindex = 0;
    //定时器 60s无触摸提醒切换下一题
    public settimer:egret.Timer;
    //添加图片
    private addPhoto(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addPhoto,this);
        this.addCommonPer(staticVarUntil.ENDVIEW,staticVarUntil.ENGLISH_1_UNIT_3_TEST,this);
        var bg = egretUntil.createBitmapByName("beijing_png");
        this.addChild(bg);
        this.pictureFrameAndWP();
        this.dragImg();
        this.settimer = new egret.Timer(60000,1);
        this.addEventListener(egret.TimerEvent.TIMER,this.setTimer,this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.dragImgBegin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.dragImgMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.dragImgEnd,this);
    }
    //定时器
    private setTimer(){
        viewManager.getInstance().touchEnabled = false;
        this.touchEnabled = false;
        playSoundEffect("english/english1/unit3/playnexttime.ogg");
    }
    //照片框及单词和照片
    private pictureFrameAndWP(){
        this.picframearr = egretUntil.getArrayItems(this.picframearr,this.picframearr.length);
        this.picframexyarr = egretUntil.getArrayItems(this.picframexyarr,this.picframexyarr.length);
        for(var i =0;i < this.wordandphotoarr.length;i++){
            //照片框容器
            var picframecon = new picFrameCon();
            this.addChild(picframecon);
            //照片框
            picframecon.setPicFrame(this.picframearr[i],0,0);
            picframecon.addChild(picframecon.getPicFrame());

            picframecon.width = picframecon.getPicFrame().width;
            picframecon.height = picframecon.getPicFrame().height;
            picframecon.x = this.picframexyarr[i].x ;
            picframecon.y = this.picframexyarr[i].y;
            operateUntil.restoreAnchorOffsetxy(picframecon);
            //照片框里的照片
            picframecon.setPicFramePhoto(this.wordandphotoarr[i].img,15,54);
            picframecon.addChild(picframecon.getPicFramePhoto());
            picframecon.getPicFramePhoto().visible = false;

            //照片框里的单词
            picframecon.setPicFrameWord(this.wordandphotoarr[i].word,picframecon,picframecon);
            picframecon.addChild(picframecon.getPicFrameWord());

            picframecon.name = this.wordandphotoarr[i].word;
            this.picframeobjarr.push(picframecon);
        }
    }
    //照片墙的图片
    public addPhotoWallWord(){
        //播放背景音效
        playSoundEffect("english/english1/unit3/bg.ogg");
        this.photowallword = egretUntil.createBitmapByName("qiang");
        this.addChild(this.photowallword);
        this.photowallword.x = 364;
        this.photowallword.y = 540+this.photowallword.height;
        //2500s刚好照片框抖动(2700s)差不多完成
        playSoundEffect("english/english1/unit3/photowall.ogg");
        mathfat.setTweenarr(this.photowallword);
        mathfat.setTweenarr(this.dragimgarr[this.dragimgindex]);
        egret.Tween.get(this.photowallword).to({y:300},1000).wait(2500).to({alpha:0},500);
        egret.Tween.get(this.dragimgarr[this.dragimgindex]).wait(1000).call(playSoundEffect,this,["english/english1/unit3/dragimagetoframe.ogg"]).wait(5000).
            to({y:291},1000).call(function(){
            viewManager.getInstance().touchEnabled = true;
            this.touchEnabled =true;
        },this);
    }
    //相框摇晃
    public picFrameShake(){
        for(var i = 0;i<this.picframeobjarr.length; i+=2){
            egret.Tween.get(this.picframeobjarr[i]).wait(i*500).
                to({rotation:5},300).to({rotation:-5},600).
                to({rotation:0},300);
            try{
                //可能这个对象不存在
                egret.Tween.get(this.picframeobjarr[i+1]).wait(i*500).
                    to({rotation:5},300).to({rotation:-5},600).
                    to({rotation:0},300);
            }catch(e){}
        }

    }
    //要拖拽的照片
    private dragImg(){
        for(var i =0;i<this.wordandphotoarr.length;i++){
            var dragphoto = new dragPhoto();
            this.addChild(dragphoto);
            dragphoto.setDefaultInfo(this.wordandphotoarr[i].img,this.wordandphotoarr[i].word);
            this.dragimgarr.push(dragphoto);
        }
        //乱序
        this.dragimgarr = egretUntil.getArrayItems(this.dragimgarr,this.dragimgarr.length);
    }
    private dragImgBegin(e:egret.TouchEvent){
        this.settimer.reset();
        if(this.touchFrame(e)){
            //说明点到了单词 禁止触摸
            viewManager.getInstance().touchEnabled = false;
            this.touchEnabled = false;
            return;
        }
        var ex = e.stageX;
        var ey = e.stageY;
        var dgx = this.dragimgarr[this.dragimgindex].x;
        var dgy = this.dragimgarr[this.dragimgindex].y;
        var dgw = this.dragimgarr[this.dragimgindex].width;
        var dgh = this.dragimgarr[this.dragimgindex].height;
        if(ex>dgx && ex<dgx+dgw && ey>dgy && ey<dgy+dgh){
            console.log("start");
            playSoundEffect("english/english1/unit3/selectphoto.ogg");
            this.dragimgarr[this.dragimgindex].startx = ex;
            this.dragimgarr[this.dragimgindex].starty = ey;
            this.dragimgarr[this.dragimgindex].movex = ex;
            this.dragimgarr[this.dragimgindex].movey = ey;
        }
    }
    private dragImgMove(e:egret.TouchEvent){
        this.dragimgarr[this.dragimgindex].endx = e.stageX;
        this.dragimgarr[this.dragimgindex].endy = e.stageY;
        //判断是否点在了照片区域内 如果没有则不能拖动
        if(this.dragimgarr[this.dragimgindex].movex !=0 && this.dragimgarr[this.dragimgindex].movey !=0){
            console.log("move");
            this.dragimgarr[this.dragimgindex].ismove = true;
            this.dragimgarr[this.dragimgindex].x+=(this.dragimgarr[this.dragimgindex].endx-this.dragimgarr[this.dragimgindex].movex);
            this.dragimgarr[this.dragimgindex].y+=(this.dragimgarr[this.dragimgindex].endy-this.dragimgarr[this.dragimgindex].movey);
            //移动一次结束后重新赋值
            this.dragimgarr[this.dragimgindex].movex = this.dragimgarr[this.dragimgindex].endx;
            this.dragimgarr[this.dragimgindex].movey = this.dragimgarr[this.dragimgindex].endy;
        }
    }
    public setProXY(x,y){
        this.x = x;
        this.y = y;
    }
    private dragImgEnd(){
        //判断是否符合条件 拖拽大于50px
        if(this.dragimgarr[this.dragimgindex].ismove) {
            console.log("end");
            this.dragimgarr[this.dragimgindex].ismove = false;
            if (Math.abs(this.dragimgarr[this.dragimgindex].endx - this.dragimgarr[this.dragimgindex].startx) > 50 ||
                Math.abs(this.dragimgarr[this.dragimgindex].endy - this.dragimgarr[this.dragimgindex].starty) > 50) {
                //判断是否拖到相框(标准是覆盖相框长宽的一半以上)
                for (var i = 0; i < this.picframeobjarr.length; i++) {
                    operateUntil.cancelAnchorOffsetxy(this.picframeobjarr[i]);
                    var obj1 = this.dragimgarr[this.dragimgindex];
                    var obj2 = this.picframeobjarr[i];
                    //拖拽的照片覆盖相框的面积达到了要求
                    if (this.isFit(obj1, obj2)) {
                        viewManager.getInstance().touchEnabled = false;
                        this.touchEnabled = false;
                        //是否是正确的相框
                        if(this.isWordFit(obj1.name, obj2.name)){
                            operateUntil.restoreAnchorOffsetxy(this.picframeobjarr[i]);
                            //隐藏拖动的图片
                            this.dragimgarr[this.dragimgindex].visible = false;
                            //显示相册里面的的图片
                            this.picframeobjarr[i].getPicFramePhoto().visible = true;
                            this.dragimgindex++;
                            if(this.dragimgindex < this.dragimgarr.length){
                                //播放正确的音效
                                playSoundEffect("english/english1/unit3/playgoon.ogg");
                            }else{
                                playSoundEffect("english/english1/unit3/keepcontinuegood.ogg");
                            }
                            return ;
                        }else{
                            //拖错了
                            this.sigletimutotalwrong++;
                            touchPlayEffect.wrongSound(this.sigletimutotalwrong, this.dragimgarr[this.dragimgindex]);
                        }

                    }
                    operateUntil.restoreAnchorOffsetxy(this.picframeobjarr[i]);
                }
            }
            this.dragimgarr[this.dragimgindex].startx = 0;
            this.dragimgarr[this.dragimgindex].starty = 0;
            this.dragimgarr[this.dragimgindex].movex = 0;
            this.dragimgarr[this.dragimgindex].movey = 0;
            this.dragimgarr[this.dragimgindex].endx = 0;
            this.dragimgarr[this.dragimgindex].endy = 0;
            //回到原来的位置
            egret.Tween.get(this.dragimgarr[this.dragimgindex]).to({
                x: (egretUntil.getStageWidth() - this.dragimgarr[this.dragimgindex].width *
                this.dragimgarr[this.dragimgindex].scaleX) / 2, y: 291
            }, 300);
        }
    }
    //点击相框播声音
    private touchFrame(evt:egret.TouchEvent){
        for(var i =0;i<this.picframeobjarr.length;i++){
            if(touchPlayEffect.touchFramePlayWord(evt,this.picframeobjarr[i])){
                return true;
            }
        }
    }
    //判断是否拖到相框(标准是覆盖相框长宽的一半以上)
    private isFit(dragimgobj,picframeobj){
        if(dragimgobj.x < picframeobj.x && dragimgobj.x+dragimgobj.width < picframeobj.x+picframeobj.width*0.6){
            return false;
        }
        if(dragimgobj.x>picframeobj.x+picframeobj.width*0.4){
            return false;
        }
        if(dragimgobj.y < picframeobj.y && dragimgobj.y+dragimgobj.height < picframeobj.y+picframeobj.height*0.6){
            return false;
        }
        if(dragimgobj.y > picframeobj.y+picframeobj.height*0.4){
            return false;
        }
        return true;
    }
    //判断拖拽的对象是否符合标准
    private isWordFit(name1,name2){
        if(name1 == name2){
            return true;
        }
        return false;
    }

    //声音的回调
    public handleAudio(data){
        if(data.indexOf("english/english1/unit3/firstwrong.ogg")>=0 || data.indexOf("english/english1/unit3/secondwrong.ogg")>=0){
            viewManager.getInstance().touchEnabled = true;
            this.touchEnabled = true;
            //启动定时器
            this.settimer.start();
        }else if(data.indexOf("english/english1/unit3/thirdwrong")>=0){
            this.dragimgarr[this.dragimgindex].visible =false;
            console.log("三次答错");
            this.dragimgindex++;
            playSoundEffect("english/english1/unit3/playgoon.ogg");
            //已经是最后一个了
            if(this.dragimgindex == this.dragimgarr.length-1){
                //进入结算界面
                console.log("结算界面");
                viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            }
        }else if(data.indexOf("english/english1/unit3/playnexttime.ogg")>=0){
            console.log("切换到下一题");
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }else if(data.indexOf("english/english1/unit3/playgoon.ogg")>=0){
            if (this.dragimgindex < this.picframeobjarr.length) {
                egret.Tween.get(this.dragimgarr[this.dragimgindex]).to({y: 291}, 1000).call(function(){
                        viewManager.getInstance().touchEnabled = true;
                        this.touchEnabled = true;
                    this.sigletimutotalwrong = 0;
                } ,this);
            }
            //你好棒啊 要继续保持
        }else if(data.indexOf("english/english1/unit3/keepcontinuegood")>=0){
            console.log("结算界面");
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }else if(data.indexOf("english/english1/unit3/word/")>=0){
            //代表读的是单词
            viewManager.getInstance().touchEnabled = true;
            this.touchEnabled = true;
        }

    }
}