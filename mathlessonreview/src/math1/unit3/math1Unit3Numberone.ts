/**
 * Created by oo on 2016/1/25.
 */
class math1Unit3Numberone extends mathfat implements interfacemath{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    public sigletimutotalwrong:number=0;
    //铅笔
    private pen:egret.Bitmap;
    //铅笔每次向下移动的距离
    private moveY:number = 50;
    //铅笔在模型两边的偏移量
    private penmovex:number = 20;
    //要显示的数字集合
    private numarr = [{"show":"1","show2":"01","numsign":1,"penmovetime":500},
        {"show":"2","show2":"02","numsign":2,"penmovetime":182},
        {"show":"3","show2":"03","numsign":3,"penmovetime":320}];
    //三个按钮的位置集合
    private showbutxy = [{"showbutx":120,"showbuty":328},{"showbutx":410,"showbuty":328},
        {"showbutx":703,"showbuty":328}];
    public buttonuntil;
    //铅笔模型数量对应的位置
    private penmodnums = [{"penmodnum":1,"penmodxys":[{"penmodx":(egretUntil.getStageWidth()-38)/2,"penmody":68}]},
        {"penmodnum":2,"penmodxys":[{"penmodx":385,"penmody":68},{"penmodx":540,"penmody":68}]},
        {"penmodnum":3,"penmodxys":[{"penmodx":315,"penmody":68},{"penmodx":447,"penmody":68},{"penmodx":579,"penmody":68}]}];
    //铅笔模型对象
    private penmodobjs = [];
    //打钩
    private gou:egret.Bitmap;
    //添加场景
    private addScence(){

        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
        //自定义事件
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_3_NUMBERTWO,staticVarUntil.MATH_1_UNIT_3_NUMBERONE,this);
        staticVarUntil.numbersign = staticVarUntil.MATH_1_UNIT_3_NUMBERONE;
        this.buttonuntil = new buttonUntil();

        staticVarUntil.rightresulte = staticVarUntil.testnumarr[0];
        //随机显示数字的位置
        this.numarr = egretUntil.getArrayItems(this.numarr,this.numarr.length);
        //数字一的场景背景
        var numberonebg = egretUntil.createBitmapByName("unit2number1bg_png");
        this.addChild(numberonebg);

        //铅笔模型
        this.addPenMod(staticVarUntil.rightresulte);
        //添加按钮和数字
        this.buttonAndNum();
        //铅笔
        this.addPen();


    }
    //铅笔的位置变化
    private currentpenmod:number =0;
    //动画时间
    private twtime:number =150;
    public penChangePosY(){
        if(this.currentpenmod<this.penmodobjs.length){
            if(this.pen.y<this.penmodobjs[this.currentpenmod].penmody+this.penmodobjs[this.currentpenmod].penmodhg) {
                egret.Tween.get(this.pen).to({x: this.penmodobjs[this.currentpenmod].penmodx + this.penmodobjs[this.currentpenmod].penmodwd+this.penmovex}, this.twtime).
                    to({x: this.penmodobjs[this.currentpenmod].penmodx-this.penmovex, y: this.pen.y + this.moveY}, this.twtime).call(this.penChangePosY, this);
                egret.Tween.get(this.penmodobjs[this.currentpenmod].penmodobj).to({width:this.penmodobjs[this.currentpenmod].penmodwd},this.twtime).
                    to({height:(this.pen.y>=this.penmodobjs[this.currentpenmod].penmodhg)?this.penmodobjs[this.currentpenmod].penmodhg:this.pen.y},this.twtime).wait(this.twtime);
            }else{
                if(this.penmodobjs[this.currentpenmod+1]) {
                    egret.Tween.get(this.pen).to({
                        x: this.penmodobjs[this.currentpenmod + 1].penmodx,
                        y: this.penmodobjs[this.currentpenmod + 1].penmody
                    }, 100).call(this.penChangePosY,this);
                    this.currentpenmod++;
                }else{
                    //画完以后隐藏笔
                    this.pen.visible = false;
                    stopSoundEffectByUrl("math/math1/unit3/numberone/huabi.ogg");
                    egret.Tween.get(this.pen).to({x:this.penmodobjs[this.currentpenmod].penmodx+100,y:this.penmodobjs[this.currentpenmod].penmody+100},200).call(
                        function(){
                            playSoundEffect("math/math1/unit3/numberone/howmanyqianbi.ogg");
                        }
                    );
                }
            }
        }
    }
    //添加铅笔模型
    private addPenMod(num:number){
        for(var i = 0;i<this.penmodnums.length;i++){
            if(this.penmodnums[i].penmodnum == num){
                for(var j =0;j<this.penmodnums[i].penmodxys.length;j++){
                    var penmod = egretUntil.createBitmapByName("pen");
                    this.addChild(penmod);
                    mathfat.setTweenarr(penmod);
                    penmod.fillMode = egret.BitmapFillMode.REPEAT;
                    penmod.x = this.penmodnums[i].penmodxys[j].penmodx;//38铅笔的宽
                    penmod.y = this.penmodnums[i].penmodxys[j].penmody;
                    this.penmodobjs.push({"penmodobj":penmod,"penmodwd":penmod.width,"penmodhg":penmod.height,"penmodx":penmod.x,"penmody":penmod.y});
                    penmod.height = 0;
                    penmod.width = 0;
                }
            }
        }
    }
    //添加铅笔
    private addPen(){
        this.pen = egretUntil.createBitmapByName("p");
        this.addChild(this.pen);
        mathfat.setTweenarr(this.pen);
        this.pen.x = this.penmodobjs[0].penmodx;
        this.pen.y = this.penmodobjs[0].penmody;
    }
    //铅笔打钩
    private penDrawG(x:number,y:number){
        this.gou = egretUntil.createBitmapByName("g");
        this.addChild(this.gou);
        mathfat.setTweenarr(this.gou);
        this.gou.fillMode = egret.BitmapFillMode.REPEAT;
        this.gou.width = 0;
        this.gou.height = 145;
        this.gou.x = x;
        this.gou.y = y;
        this.setChildIndex(this.pen,10);
    }
    //添加按钮和数字
    private buttonAndNum(){
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

    //声音回调的处理方法
    public handleAudio(data){
        if(data.indexOf("howmanyqianbi")>=0 || data.indexOf("firstwrong")>=0
            || data.indexOf("secondwrong")>=0 || data.indexOf("firsttouchwrong")>=0
            || data.indexOf("secondtouchwrong")>=0){//答错了
           startAsr(this);
        }else if(data.indexOf("common/right")>=0){//进入下一题
            this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            egret.log("下一题");
        }else if(data.indexOf("thirdwrongandright")>=0){
            //三次全错 正确答案闪烁
            this.rightShanshuo();
            playSoundEffect("math/math1/unit3/common/continuepractice.ogg");
            //播放错误的音效
        }else if(data.indexOf("common/wrongeffect")>=0){
            this.playWrongSound();
        }else if(data.indexOf("wait10swarn")>=0 || data.indexOf("wait20swarn")>=0){
            startAsr(this);
            //30s没回应 返回课程界面
        }else if(data.indexOf("wait30swarn")>=0){
            egret.log("返回课程界面");
            onBackButtonPressed();
        }else if(data.indexOf("continuepractice")>0){ //进入下一题
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
            operateUntil.asrWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/asr/firstwrong.ogg","common/asr/secondwrong.ogg","math/math1/unit3/numberone/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
        }else{
            operateUntil.touchButtonWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/touch/firsttouchwrong.ogg","math/math1/unit3/numberone/secondtouchwrong.ogg","math/math1/unit3/numberone/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
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
            playSoundEffect("math/math1/unit3/numberone/dagou.ogg");
        },$this);
        egret.Tween.get($this.pen).to({x:$this.showbutxy[rightindexbut].showbutx,y:410},$this.numarr[rightindexbut].penmovetime).to({x:$this.showbutxy[rightindexbut].showbutx+75,y:456},200).to({x:$this.showbutxy[rightindexbut].showbutx+162,y:320},200);
        egret.Tween.get($this.gou).wait($this.numarr[rightindexbut].penmovetime).to({width:60,height:145},200).to({width:161},200);
    }
//设置对象的宽高
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