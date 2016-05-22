/**
 * Created by oo on 2016/1/25.
 */
class math1Unit3Numberthree extends mathfat implements interfacemath{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);
    }
    public sigletimutotalwrong:number=0;
    //音符名称集合
    private notearr = [{"notename":"n1"},{"notename":"n2"},{"notename":"n3"}];
    //音符对象集合
    private noteobj = [];
    //打鼓棒的集合
    private beatdrumxy=[{"x":-10,y:375},{"x":300,y:375},{"x":620,y:375}];
    //要显示的数字集合
    private numarr = [{"show":"three1","y":375,"numsign":1},
        {"show":"three2","y":375,"numsign":2},
        {"show":"three3","y":375,"numsign":3}];
    //三个按钮的位置
    private showbutxy = [{"showbutx":70,"showbuty":360},{"showbutx":380,"showbuty":360},
        {"showbutx":700,"showbuty":360}];
    //耳朵的位置
    private earposxy =[{"earnum":1,"earxy":[{"earx":460,"eary":150}]},
        {"earnum":2,"earxy":[{"earx":400,"eary":150},{"earx":600,"eary":150}]},
        {"earnum":3,"earxy":[{"earx":350,"eary":150},{"earx":480,"eary":130},{"earx":630,"eary":150}]}];
    //骨骼耳朵的数组
    private earobjs = [];
    private buttonuntil;
    //添加场景
    private addScence(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addScence,this);

        staticVarUntil.rightresulte = staticVarUntil.testnumarr[2];

        //自定义事件
        this.addCommonPer(staticVarUntil.ENDVIEW,staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE,this);

        this.buttonuntil = new buttonUntil();
        //随机显示数字的位置
        this.numarr = egretUntil.getArrayItems(this.numarr,this.numarr.length);
        var bg = egretUntil.createBitmapByName("threeb_png");
        this.addChild(bg);

        this.addButtonAndNum();
        this.addNote();
        this.addSound();

    }
    //添加耳朵跳舞
    public addEarDance(num:number){
        for(var i = 0;i<this.earposxy.length;i++){
            if(this.earposxy[i].earnum == num){
                for(var j =0;j<this.earposxy[i].earxy.length;j++){
                    var numear = new dragonBone();
                    numear.addDB("eardance_json","eardancetxt_json","eardancetxt_png","ear");
                    this.addChild(numear);
                    numear.scaleX = numear.scaleY = 0.8;
                    numear.settimeScale(3);//3
                    numear.setPos(this.earposxy[i].earxy[j].earx,this.earposxy[i].earxy[j].eary);
                    dragonBones.WorldClock.clock.add(numear.getArmature());
                    numear.setstartPlay("dance",0);
                    this.earobjs.push(numear);
                }
            }
        }
        egret.startTick(this.tickFun,this);
        mathfat.setTick(this.tickFun,this);
        playSoundEffect("math/math1/unit3/numberthree/music3500ms.ogg",1,1);
        playSoundEffect("math/math1/unit3/numberthree/howmanyerduo.ogg");
    }
    private tickFun(){
        dragonBones.WorldClock.clock.advanceTime(0.02);
        return false;
    }
    //添加按钮和数字
    private addButtonAndNum(){
        for(var i = 0;i<this.numarr.length;i++){
            var numbut = egretUntil.createBitmapByName("drum");
            this.addChild(numbut);
            numbut.x = this.showbutxy[i].showbutx;
            numbut.y = this.showbutxy[i].showbuty;

            var numbutnum = egretUntil.createBitmapByName(this.numarr[i].show);
            numbutnum.x = numbut.x+(numbut.width-numbutnum.width)/2;
            numbutnum.y = this.numarr[i].y;
            this.addChild(numbutnum);

            this.buttonuntil.setButtonarr(numbut,numbutnum,this.numarr[i].numsign);
        }
    }
    //添加音响
    private addSound(){
        var sound = egretUntil.createBitmapByName("audio");
        this.addChild(sound);
        sound.anchorOffsetY = sound.height;
        sound.anchorOffsetX = sound.width/2;
        sound.x = 114+sound.width/2;//124
        sound.y = 176+sound.height;//176
        mathfat.setTweenarr(sound);
        egret.Tween.get(sound,{loop:true}).to({skewY:2,skewX:6},200).to({skewY:-2,skewX:-6},400).to({skewY:0,skewX:0},200);
    }
    //添加音符
    private  addNote(){
        for(var i = 0;i<this.notearr.length;i++){
            var note = egretUntil.createBitmapByName(this.notearr[i].notename);
            note.x = 150;
            note.y = 220;
            this.addChild(note);
            mathfat.setTweenarr(note);
            this.noteobj.push(note);
        }
        egret.Tween.get(this.noteobj[0],{loop:true}).to({x:100,y:-70},1500).call(function(note){
            note.x = 150;
            note.y = 220;
        },this,[this.noteobj[0]]);
        egret.setTimeout(function(){
            this.noteobj[1].x = 200;
            this.noteobj[1].y = 200;
            egret.Tween.get(this.noteobj[1],{loop:true}).to({x:200,y:-70},1500).call(function(note){
                note.x = 200;
                note.y = 200;
            },this,[this.noteobj[1]]);
        },this,500,"egret");

        egret.setTimeout(function(){
            egret.Tween.get(this.noteobj[2],{loop:true}).to({x:100,y:-70},1500).call(function(note){
                note.x = 150;
                note.y = 220;
            },this,[this.noteobj[2]]);
        },this,800,"egret");

    }
    //添加打鼓棒
    public addBeatDrum(obj,rightindexbut){
        var $this = obj;
        var beat1 = egretUntil.createBitmapByName("banchui2");
        beat1.x = $this.beatdrumxy[rightindexbut].x;
        beat1.y = $this.beatdrumxy[rightindexbut].y;
        $this.addChild(beat1);
        beat1.rotation = 0;
        mathfat.setTweenarr(beat1);
        egret.Tween.get(beat1,{loop:true}).to({rotation:-15},120).to({rotation:0},120);

        var beat2 = egretUntil.createBitmapByName("banchui2");
        beat2.x = $this.beatdrumxy[rightindexbut].x+210+beat2.width;
        beat2.y = $this.beatdrumxy[rightindexbut].y;
        beat2.scaleX = -1;
        $this.addChild(beat2);
        beat2.rotation = 15;
        mathfat.setTweenarr(beat2);
        egret.Tween.get(beat2,{loop:true}).to({rotation:0},120).to({rotation:15},120);
        playSoundEffect("math/math1/unit3/numberthree/dagu850ms.ogg",1,1);


        //10,20 -5,7 -20,-15
    }
    //声音回调的处理方法
    public handleAudio(data){
        if(data.indexOf("howmanyerduo")>=0 || data.indexOf("firstwrong")>=0
            || data.indexOf("secondwrong")>=0 || data.indexOf("firsttouchwrong")>=0
            || data.indexOf("secondtouchwrong")>=0){//答错了
            startAsr(this);
        }else if(data.indexOf("common/right")>=0){//进入下一题
            // this.addBeatDrum();
           // this.stopAnimation();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            egret.log("下一题");
        }else if(data.indexOf("thirdwrongandright")>=0){
            //三次全错 鼓槌打鼓
            this.addBeatDrum(this,this.buttonuntil.allWrongSysShowRight(this.buttonuntil.butrelatearr,staticVarUntil.rightresulte));
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
            operateUntil.asrWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/asr/firstwrong.ogg","common/asr/secondwrong.ogg","math/math1/unit3/numberthree/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
        }else{
            operateUntil.touchButtonWrongMarkWord(staticVarUntil.everytitlewrongtimes,"common/touch/firsttouchwrong.ogg","math/math1/unit3/numberthree/secondtouchwrong.ogg","math/math1/unit3/numberthree/thirdwrongandright"+operateUntil.sayWordByRightResult(staticVarUntil.rightresulte)+".ogg");
        }

    }
//设置对象的宽高
    public setProXY(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    //单界面切换时 结束当前界面的缓动 及序列帧
    public stopAnimation(){
        //egret.Tween.removeAllTweens();
        //for(var i=0;i<this.earobjs.length;i++){
        //    dragonBones.WorldClock.clock.remove(this.earobjs[i].getArmature());
        //}
        ////停止当前页面的所有音效
        //stopSoundEffect();
    }
}