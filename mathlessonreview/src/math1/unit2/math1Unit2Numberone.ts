/**
 * Created by oo on 2016/1/20.
 */
class math1Unit2Numberone extends mathfat implements interfacemath{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    public sigletimutotalwrong:number=0;
    //铅笔
    private pen:egret.Bitmap;
    //铅笔每次向下移动的距离
    private moveY:number = 50;
    //铅笔模型
    private penmod:egret.Bitmap;
    //铅笔最终停留的位置坐标
    private pendesx:number = egretUntil.getStageWidth()*3/5;
    private pendesy:number = egretUntil.getStageHeight()*1/3;
    //铅笔在模型两边的偏移量
    private penmodex:number = 20;
    //模型的宽高
    private penmodheight:number =0;
    private penmodwidth:number = 0;
    //要显示的数字集合
    private numarr = [{"show":"1","show2":"01","numsign":1,"penmovetime":500},
        {"show":"2","show2":"02","numsign":2,"penmovetime":182},
        {"show":"3","show2":"03","numsign":3,"penmovetime":320}];
    //三个按钮的位置集合
    private showbutxy = [{"showbutx":120,"showbuty":328},{"showbutx":410,"showbuty":328},
        {"showbutx":703,"showbuty":328}];
    //数字按钮的集合
    private buttonuntil ;
    //打钩
    private gou:egret.Bitmap;
    //添加场景
    private addScence(){

        staticVarUntil.rightresulte = 1;
        this.buttonuntil = new buttonUntil();
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
        //自定义事件
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_2_NUMBERTWO,staticVarUntil.MATH_1_UNIT_2_NUMBERONE,this);

        //随机显示数字的位置
        this.numarr = egretUntil.getArrayItems(this.numarr,this.numarr.length);
        //数字一的场景背景
        var numberonebg = egretUntil.createBitmapByName("unit2number1bg_png");
        this.addChild(numberonebg);

        //铅笔模型
        this.penmod = egretUntil.createBitmapByName("pen");
        this.addChild(this.penmod);
        this.penmod.fillMode = egret.BitmapFillMode.REPEAT;
        this.penmodwidth = this.penmod.width;
        this.penmodheight = this.penmod.height;
        this.penmod.width = 0;
        this.penmod.height = 0;
        this.penmod.x = (egretUntil.getStageWidth()-38)/2;//38铅笔的宽
        this.penmod.y = 68;
        mathfat.setTweenarr(this.penmod);
        this.addButton();

        //铅笔
        this.pen = egretUntil.createBitmapByName("p");
        this.addChild(this.pen);
        this.pen.x = egretUntil.getStageWidth()/2;
        this.pen.y = this.penmod.y;
        mathfat.setTweenarr(this.pen);
       // this.penChangePosY();
       // playSoundEffect("math/math1/unit2/numberone/huabi.ogg");

        //egret.setTimeout(function(){
        //    viewManager.getInstance().dispatchEvent(this.viewManagerevent);
        //},this,2000,"egret");

    }
    //添加显示按钮
    private addButton(){
        for(var i = 0; i<this.numarr.length;i++) {
            //添加按钮
            var numbut = egretUntil.createBitmapByName("buttonquan_png");
            this.addChild(numbut);
            numbut.x = this.showbutxy[i].showbutx;
            numbut.y = this.showbutxy[i].showbuty;
            //添加数字
            var numbutnum = egretUntil.createBitmapByName(this.numarr[i].show);
            this.addChild(numbutnum);
            numbutnum.x = this.showbutxy[i].showbutx+(numbut.width-numbutnum.width)/2;
            numbutnum.y = this.showbutxy[i].showbuty+(numbut.height-numbutnum.height)/2;
            this.buttonuntil.setButtonarr(numbut,numbutnum,this.numarr[i].numsign);
        }
    }
    //铅笔的位置变化
    public penChangePosY(){
        if(this.pen.y<this.penmod.y+this.penmodheight) {
            egret.Tween.get(this.pen).to({x: this.penmod.x + this.penmodwidth+this.penmodex}, 200).
                to({x: this.penmod.x-this.penmodex, y: this.pen.y + this.moveY}, 200).call(this.penChangePosY, this);
            egret.Tween.get(this.penmod).to({width:this.penmodwidth},200).
                to({height:(this.pen.y>=this.penmodheight)?this.penmodheight:this.pen.y},200).wait(200);
        }else{
            stopSoundEffectByUrl("math/math1/unit2/numberone/huabi.ogg");
            //画完以后隐藏铅笔
            this.pen.visible = false;
            egret.Tween.get(this.pen).to({x:this.pendesx,y:this.pendesy},200).call(
                function(){
                    playSoundEffect("math/math1/unit2/numberone/qianbi.ogg");
                }
            );
        }
    }

    //铅笔打钩
    private penDrawG(x:number,y:number){
        this.gou = egretUntil.createBitmapByName("g");
        this.addChild(this.gou);
        this.gou.fillMode = egret.BitmapFillMode.REPEAT;
        this.gou.width = 0;
        this.gou.height = 145;
        this.gou.x = x;
        this.gou.y = y;
        mathfat.setTweenarr(this.gou);
        this.setChildIndex(this.pen,10);
    }

    //声音回调的处理方法
    public handleAudio(data){
        if(data.indexOf("qianbi")>=0 || data.indexOf("firstwrong")>=0
            || data.indexOf("secondwrong")>=0 || data.indexOf("firsttouchwrong")>=0
            || data.indexOf("secondtouchwrong")>=0){//答错了
            startAsr(this);
        }else if(data.indexOf("right")>=0){//进入下一题
            this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            egret.log("下一题");
        }else if(data.indexOf("thirdwrongandmark")>=0){
            //三次全错 正确答案闪烁
            this.rightShanshuo();
            playSoundEffect("math/math1/unit2/common/continuepractice.ogg");
            //播放错误的音效
        }else if(data.indexOf("wrongeffect")>=0){
            //setTotalWrong();
            this.playWrongSound();
        }else if(data.indexOf("wait10swarn")>=0 || data.indexOf("wait20swarn")>=0){
            startAsr(this);
            //30s没回应 返回课程界面
        }else if(data.indexOf("wait30swarn")>=0){
            egret.log("返回课程界面");
            onBackButtonPressed();
        }else if(data.indexOf("continuepractice")>0){
            this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }else if(data.indexOf("errnet")>=0){
            if(staticVarUntil.getasrerror == 3){
                onBackButtonPressed();
            }else{
                startAsr(this);
            }
        }
    }


    //点击错误 根据次数播放对应的语音
    private playWrongSound(){
        if(staticVarUntil.ispassasr){
            operateUntil.asrWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/asr/firstwrong.ogg","common/asr/secondwrong.ogg","math/math1/unit2/numberone/thirdwrongandmark.ogg");
        }else{
            operateUntil.touchButtonWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/touch/firsttouchwrong.ogg","math/math1/unit2/numberone/secondtouchwrong.ogg","math/math1/unit2/numberone/thirdwrongandmark.ogg");
        }
    }


    //正确答案闪烁
    private rightShanshuo(){
        var rightindexbut = this.buttonuntil.allWrongSysShowRight(this.buttonuntil.butrelatearr,staticVarUntil.rightresulte);
        animationUntil.shanshuo(this.numarr[rightindexbut].show2,this.buttonuntil.butrelatearr[rightindexbut].butobj.x+
            (this.buttonuntil.butrelatearr[rightindexbut].butobj.width-this.buttonuntil.butrelatearr[rightindexbut].numobj.width)/2,
            this.buttonuntil.butrelatearr[rightindexbut].butobj.y+
            (this.buttonuntil.butrelatearr[rightindexbut].butobj.height-this.buttonuntil.butrelatearr[rightindexbut].numobj.height)/2,this);
    }
    //打钩
    public drawGou(obj,rightindexbut){
        var $this = obj;
        $this.penDrawG($this.buttonuntil.butrelatearr[rightindexbut].butobj.x+9,$this.buttonuntil.butrelatearr[rightindexbut].butobj.y);
        mathfat.setTweenarr($this);
        egret.Tween.get($this).wait($this.numarr[rightindexbut].penmovetime).call(function(){
            $this.pen.visible = true;
            playSoundEffect("math/math1/unit2/numberone/dagou.ogg");
        },$this);
        egret.Tween.get($this.pen).to({x:$this.showbutxy[rightindexbut].showbutx,y:410},$this.numarr[rightindexbut].penmovetime).to({x:$this.showbutxy[rightindexbut].showbutx+75,y:456},200).to({x:$this.showbutxy[rightindexbut].showbutx+162,y:320},200);
        egret.Tween.get($this.gou).wait($this.numarr[rightindexbut].penmovetime).to({width:60,height:145},200).to({width:161},200);
    }

    //设置坐标
    public setProXY(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //单界面切换时 结束当前界面的缓动 及序列帧
    public stopAnimation(){
        //egret.Tween.removeAllTweens();
        ////停止当前页面的所有音效
        //stopSoundEffect();
    }
}