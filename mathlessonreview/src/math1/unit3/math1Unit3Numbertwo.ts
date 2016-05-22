/**
 * Created by oo on 2016/1/25.
 */
class math1Unit3Numbertwo extends mathfat implements interfacemath{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    public sigletimutotalwrong:number=0;
    //要显示的数字集合
    private numarr = [{"show":"numtwo1","y":340,"numsign":1},
        {"show":"numtwo2","y":340,"numsign":2},
        {"show":"numtwo3","y":340,"numsign":3}];
    //三个按钮的位置
    private showbutxy = [{"showbutx":80,"showbuty":400},{"showbutx":372,"showbuty":400},
        {"showbutx":666,"showbuty":400}];
    //鸭子对象数组
    private ducknumobjs = [];
    private buttonuntil;
    //添加场景
    private  addScence(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
        staticVarUntil.rightresulte = staticVarUntil.testnumarr[1];
        //自定义事件
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE,staticVarUntil.MATH_1_UNIT_3_NUMBERTWO,this);

        this.buttonuntil = new buttonUntil();
        var bg = egretUntil.createBitmapByName("b_png");
        this.addChild(bg);

       // this.addButtonAndNum();

    }
    //鸭子游泳
    public duckSwiming(num:number){
        //小鸭子游泳
        for(var i = 0;i < num;i++){
            var duck = new movieClip();
            duck.addNumber("duck_json","duck_png","duck");
            this.addChild(duck);
            var mcDuck = duck.getMc();
            mathfat.setMcarr("mcDuck",mcDuck,-1);
            mathfat.setTweenarr(mcDuck);
            duck.setProXY(960+duck.width,130);
            duck.anchorOffsetX = duck.width/2;
            duck.scaleX = 1;
            mcDuck.gotoAndPlay("start",-1);
            this.ducknumobjs.push({"duckobj":duck,"duckwd":duck.width});
        }
        playSoundEffect("math/math1/unit3/numbertwo/howmanyyazi.ogg");
    }
    //单程游的时间
    private swimingtime = 15000;
    //两只鸭子的间隔时间
    private duckgaptime = 2000;
    //鸭子游过去(左边)
    public duckAcross(){
        //只有一只鸭子
        if(this.ducknumobjs.length -1 == 0){
            egret.Tween.get(this.ducknumobjs[0].duckobj).
                to({x:-this.ducknumobjs[0].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[0].duckobj.scaleX}).call(this.duckGoBack,this);
            return;
        }
        for(var i = 0;i<this.ducknumobjs.length;i++){
            if(i == 0){
                egret.Tween.get(this.ducknumobjs[i].duckobj).to({x:-this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[0].duckobj.scaleX});
            }else if(i<this.ducknumobjs.length-1){
                egret.Tween.get(this.ducknumobjs[i].duckobj).wait(i*this.duckgaptime).
                    to({x:-this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[i].duckobj.scaleX});
                //最后一个
            }else if(i == this.ducknumobjs.length-1){
                egret.Tween.get(this.ducknumobjs[i].duckobj).wait(i*this.duckgaptime).
                    to({x:-this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[i].duckobj.scaleX}).call(function(){
                        console.log("across "+this.ducknumobjs[0].duckobj.scaleX)
                    },this).call(this.duckGoBack,this);
            }
        }
    }
    //鸭子游回来(右边)
    private duckGoBack(){
        if(this.ducknumobjs.length -1 == 0){
            egret.Tween.get(this.ducknumobjs[0].duckobj).
                to({x:960+this.ducknumobjs[0].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[0].duckobj.scaleX}).call(this.duckAcross,this);
            return;
        }
        for(var i = 0;i<this.ducknumobjs.length;i++){
            if(i == 0){
                egret.Tween.get(this.ducknumobjs[i].duckobj).to({x:960+this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[0].duckobj.scaleX});
            }else if(i<this.ducknumobjs.length-1){
                egret.Tween.get(this.ducknumobjs[i].duckobj).wait(i*this.duckgaptime).
                    to({x:960+this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[i].duckobj.scaleX});
                //最后一个
            }else if(i == this.ducknumobjs.length-1){
                egret.Tween.get(this.ducknumobjs[i].duckobj).wait(i*this.duckgaptime).
                    to({x:960+this.ducknumobjs[i].duckobj.width/2},this.swimingtime).to({scaleX:-this.ducknumobjs[i].duckobj.scaleX}).call(function(){
                        console.log("back"+this.ducknumobjs[0].duckobj.scaleX);
                    },this).call(this.duckAcross,this);
            }
        }
    }
    //添加按钮和数字
    public addButtonAndNum(){
        //添加按钮 数字
        for(var i = 0; i<this.numarr.length;i++) {
            var numbut = new movieClip();
            numbut.addNumber("lotusleaf_json","lotusleaf_png","lotusleaf");
            this.addChild(numbut);
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
        if(data.indexOf("howmanyyazi")>=0 || data.indexOf("firstwrong")>=0
            || data.indexOf("secondwrong")>=0 || data.indexOf("firsttouchwrong")>=0
            || data.indexOf("secondtouchwrong")>=0){//答错了
            startAsr(this);
        }else if(data.indexOf("common/right")>=0){//进入下一题
            this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            egret.log("下一题");
        }else if(data.indexOf("thirdwrongandright")>=0){
            //三次全错 正确答案跳跃
            //三次全错 正确答案跳跃
            this.buttonJump(this,this.buttonuntil.allWrongSysShowRight(this.buttonuntil.butrelatearr,staticVarUntil.rightresulte));
            playSoundEffect("math/math1/unit3/common/continuepractice.ogg");
            //播放错误的音效
        }else if(data.indexOf("wrongeffect")>=0){
            this.playWrongSound();
            //setTotalWrong();
        }else if(data.indexOf("wait10swarn")>=0 || data.indexOf("wait20swarn")>=0){
            startAsr(this);
            //30s没回应 返回课程界面
        }else if(data.indexOf("wait30swarn")>=0){
            egret.log("返回课程界面");
            onBackButtonPressed();
        }else if(data.indexOf("continuepractice")>=0){
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
            operateUntil.asrWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/asr/firstwrong.ogg","common/asr/secondwrong.ogg","math/math1/unit3/numbertwo/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
        }else{
            operateUntil.touchButtonWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/touch/firsttouchwrong.ogg","math/math1/unit3/numbertwo/secondtouchwrong.ogg","math/math1/unit3/numbertwo/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
        }
    }
    private downbuttony = 4;//按钮下降的距离
    //三次打错提示按钮跳动 或者答对了
    public buttonJump(obj,rightindexbut){
        var $this = obj;
        animationUntil.numJump($this.numarr[rightindexbut].y-40,$this.buttonuntil.butrelatearr[rightindexbut].numobj);
        playSoundEffect("math/math1/unit3/numbertwo/numjump115ms.ogg",1,1);
        mathfat.setTweenarr($this.buttonuntil.butrelatearr[rightindexbut].butobj);
        egret.Tween.get($this.buttonuntil.butrelatearr[rightindexbut].butobj,{loop:true}).wait(1100).to({y:$this.buttonuntil.butrelatearr[rightindexbut].butobj.y+$this.downbuttony},100).call(
            function(rightindexbut){
                mathfat.setMcarr("",$this.buttonuntil.butrelatearr[rightindexbut].butobj.getMc());
                $this.buttonuntil.butrelatearr[rightindexbut].butobj.getMc().gotoAndPlay("start",1);
            }
            ,$this,[rightindexbut]);
    }

    //设置xy坐标
    public setProXY(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //单界面切换时 结束当前界面的缓动 及序列帧
    public stopAnimation(){
        //egret.Tween.removeAllTweens();
        //for(var i =0;i<this.ducknumobjs.length;i++){
        //    this.ducknumobjs[i].duckobj.getMc().gotoAndStop("start");
        //}
        ////停止当前页面的所有音效
        //stopSoundEffect();
    }
}