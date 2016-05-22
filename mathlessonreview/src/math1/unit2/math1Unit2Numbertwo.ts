/**
 * Created by oo on 2016/1/21.
 */
class math1Unit2Numbertwo extends mathfat implements interfacemath{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    public sigletimutotalwrong:number=0;
    //要显示的数字集合
    private numarr = [{"show":"numtwo1","y":340,"numsign":1},
        {"show":"numtwo2","y":340,"numsign":2},
        {"show":"numtwo3","y":340,"numsign":3}];

    //数字按钮的集合
    private buttonuntil;
    //三个按钮的位置
    private showbutxy = [{"showbutx":80,"showbuty":400},{"showbutx":372,"showbuty":400},
        {"showbutx":666,"showbuty":400}];
    //添加场景
    private  addScence(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
        staticVarUntil.numbersign = staticVarUntil.MATH_1_UNIT_2_NUMBERTWO;
        staticVarUntil.rightresulte = 2;
        //自定义事件
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE,staticVarUntil.MATH_1_UNIT_2_NUMBERTWO,this);
        this.buttonuntil = new buttonUntil();
        //随机显示数字的位置
        this.numarr = egretUntil.getArrayItems(this.numarr,this.numarr.length);

        var bg = egretUntil.createBitmapByName("b_png");
        this.addChild(bg);

        //egret.setTimeout(function(){
        //    viewManager.getInstance().dispatchEvent(this.viewmanagerevent);
        //},this,4000,"egret");

    }
    //鸭子游泳
    private mcDuck;
    public  duckSwiming(){
        //小鸭子游泳
        var duck = new movieClip();
        duck.addNumber("duck_json","duck_png","duck");
        this.addChild(duck);
        this.mcDuck = duck.getMc();
        mathfat.setMcarr("mcDuck",this.mcDuck);
        duck.setProXY(750,100);
        duck.anchorOffsetX = duck.width/2;
        this.mcDuck.gotoAndPlay("start",-1);
        //鸭子划水的声音
        playSoundEffect("math/math1/unit2/numbertwo/duckswiming6000ms.ogg",1,1);
        playSoundEffect("math/math1/unit2/numbertwo/yazi.ogg");
        mathfat.setTweenarr(duck);
        egret.Tween.get(duck,{loop:true}).to({x:210},7000).to({scaleX:-1})
            .to({x:750},7000).to({scaleX:1});
    }
    //添加按钮和数字
    public addButtonAndNum(){
        //添加按钮 数字
        for(var i = 0; i<this.numarr.length;i++) {
            var numbut = new movieClip();
            numbut.addNumber("lotusleaf_json","lotusleaf_png","lotusleaf");
            this.addChild(numbut);
            //序列帧监听事件
            numbut.getMc().addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{

            }, this);
            numbut.x = this.showbutxy[i].showbutx;
            numbut.y = this.showbutxy[i].showbuty;
            var numbutnum = egretUntil.createBitmapByName(this.numarr[i].show);
            this.addChild(numbutnum);
            numbutnum.x = numbut.x+(numbut.getMc().width - numbutnum.width)/2;
            numbutnum.y = this.numarr[i].y;
            this.buttonuntil.setButtonarr(numbut,numbutnum,this.numarr[i].numsign);
        }
    }
    //声音回调的处理方法
    public handleAudio(data){
        if(data.indexOf("yazi")>=0 || data.indexOf("firstwrong")>=0
            || data.indexOf("secondwrong")>=0 || data.indexOf("firsttouchwrong")>=0
            || data.indexOf("secondtouchwrong")>=0){//答错了
           startAsr(this);
        }else if(data.indexOf("right")>=0){//进入下一题
            //this.stopAnimation();
            saveLog("","进来了 right");
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            egret.log("下一题");
        }else if(data.indexOf("thirdwrongandmark")>=0){
            //三次全错 正确答案跳跃
            this.buttonJump(this,this.buttonuntil.allWrongSysShowRight(this.buttonuntil.butrelatearr,staticVarUntil.rightresulte));
            playSoundEffect("math/math1/unit2/common/continuepractice.ogg");
            //播放错误的音效
        }else if(data.indexOf("wrongeffect")>=0){
            this.playWrongSound();
          //  setTotalWrong();
        }else if(data.indexOf("wait10swarn")>=0 || data.indexOf("wait20swarn")>=0){
            startAsr(this);
            //30s没回应 返回课程界面
        }else if(data.indexOf("wait30swarn")>=0){
            egret.log("返回课程界面");
            onBackButtonPressed();
        }else if(data.indexOf("continuepractice")>=0){
           // this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }else if(data.indexOf("errnet")>=0){
            //saveLog("numbertwo",timeErr.currentCount);
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
            operateUntil.asrWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/asr/firstwrong.ogg","common/asr/secondwrong.ogg","math/math1/unit2/numbertwo/thirdwrongandmark.ogg");
        }else{
            operateUntil.touchButtonWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/touch/firsttouchwrong.ogg","math/math1/unit2/numbertwo/secondtouchwrong.ogg","math/math1/unit2/numbertwo/thirdwrongandmark.ogg");
        }
    }

    private downbuttony = 4;//按钮下降的距离
    //三次打错提示按钮跳动 或者答对了
    public buttonJump(obj,rightindexbut){
        var $this = obj;
        mathfat.setTweenarr($this.buttonuntil.butrelatearr[rightindexbut].numobj);
        animationUntil.numJump($this.numarr[rightindexbut].y-40,$this.buttonuntil.butrelatearr[rightindexbut].numobj);
        playSoundEffect("math/math1/unit2/numbertwo/numjump115ms.ogg",1,1);
        mathfat.setTweenarr($this.buttonuntil.butrelatearr[rightindexbut].butobj);
        egret.Tween.get($this.buttonuntil.butrelatearr[rightindexbut].butobj,{loop:true}).wait(1100).to({y:$this.buttonuntil.butrelatearr[rightindexbut].butobj.y+$this.downbuttony},100).call(
            function(rightindexbut){
                mathfat.setMcarr("",$this.buttonuntil.butrelatearr[rightindexbut].butobj.getMc());
                $this.buttonuntil.butrelatearr[rightindexbut].butobj.getMc().gotoAndPlay("start",1);
            }
            ,$this,[rightindexbut]);
    }
    //设置坐标
    public setProXY(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //单界面切换时 结束当前界面的缓动 及序列帧
    public stopAnimation(){
      //  egret.Tween.removeAllTweens();
      //  this.mcDuck.gotoAndStop("start");
      ////  this.numbuts[this.rightIndex()].buttonbg.getMc().gotoAndStop("start");
      //  //停止当前页面的所有音效
      //  stopSoundEffect();
    }
}