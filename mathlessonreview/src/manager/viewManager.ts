/**
 * Created by oo on 2016/1/14.
 */
class viewManager extends egret.Sprite {
    public constructor() {
        super();
    }

    private static instance:viewManager;
    public math1unit1numberone:math1Unit1Numberone;
    public math1unit1numbertwo:math1Unit1Numbertwo;
    public math1unit1numberthree:math1Unit1Numberthree;
    public math1unit2numberone:math1Unit2Numberone;
    public math1unit2numbertwo:math1Unit2Numbertwo;
    public math1unit2numberthree:math1Unit2Numberthree;
    public math1unit3numberone:math1Unit3Numberone;
    public math1unit3numbertwo:math1Unit3Numbertwo;
    public math1unit3numberthree:math1Unit3Numberthree;
    public endview:endView;
    public timeruntil:timerUntil;
    public english1unit1study:english1Unit1Study;
    public english1unit3test:english1Unit3Test;
    public english1unit2test:english1Unit2Test;
    //跳转按钮
    public nextjumpbutton:egret.Bitmap;
    private managertimer = [];
    //单列模式
    public static getInstance():viewManager {
        if (viewManager.instance == null) {
            viewManager.instance = new viewManager();
        }
        return viewManager.instance;
    }
    private init(){
        math=1;
        unit=1;
        if(math == 1){
            if(unit == 1){
                this.initmath1unit1();
                this.addChild(this.math1unit1numberone);
                this.math1unit1numberone.start();
                //egret.setTimeout(egretUntil.pauseAllAnimation,this,2000,"egret");
                //this.addChild(this.math1unit1numbertwo);
                //this.math1unit1numbertwo.numEye();
                //this.addChild(this.math1unit1numberthree);
                //this.math1unit1numberthree.numberThreeRun();
            }else if(unit == 2){
                this.initmath1unit2();
                this.addChild(this.math1unit2numberone);
                this.math1unit2numberone.penChangePosY();
                playSoundEffect("math/math1/unit2/numberone/huabi.ogg",1,1);
            }else if(unit == 3){
                this.initmath1unit3();
                this.addChild(this.math1unit3numberone);
                this.math1unit3numberone.penChangePosY();
                playSoundEffect("math/math1/unit3/numberone/huabi.ogg",1,1);
            }
        }
        //添加跳转按钮
        this.jumpButton();
        this.endview = new endView();
       // this.initenglish1();
    }
    //初始化
    public initmath1unit1(){
        sendToAndroid("{\"method_name\":\"getUnitResultLong\",\"course\":\"math-1-1\"}");
        this.math1unit1numberone = new math1Unit1Numberone();
        this.math1unit1numbertwo = new math1Unit1Numbertwo();
        this.math1unit1numberthree = new math1Unit1Numberthree();
    }
    public initmath1unit2(){
        this.math1unit2numberone = new math1Unit2Numberone();
        this.math1unit2numbertwo = new math1Unit2Numbertwo();
        this.math1unit2numberthree = new math1Unit2Numberthree();
    }
    public initmath1unit3(){
        staticVarUntil.testnumarr = egretUntil.getArrayItems(staticVarUntil.testnumarr,staticVarUntil.testnumarr.length);
        this.math1unit3numberone = new math1Unit3Numberone();
        this.math1unit3numbertwo = new math1Unit3Numbertwo();
        this.math1unit3numberthree = new math1Unit3Numberthree();
    }
    public initenglish1(){
        sendToAndroid("{\"method_name\":\"getUnitResultLong\",\"course\":\"english-1-1\"}");
        this.english1unit1study = new english1Unit1Study();
        this.english1unit3test = new english1Unit3Test();
        this.english1unit2test = new english1Unit2Test();
        this.addChild(this.english1unit1study);
        //发播放mp4信息给安卓
        sendToAndroid("{\"method_name\":\"startPlayMp4\",\"url\":\""+ url+"english/english1/unit1/family.mp4"+"\"}");
    }
    //开始
    public start() {
        this.init();
        this.initListener();
    }

    //初始化事件监听
    private initListener() {
        this.addEventListener(viewManagerEvent.VIEW_MANA_EVENT,this.changeContent,this);
        viewManager.getInstance().touchEnabled = false;
        viewManager.getInstance().addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
    }
    private onTouchTap(evt:egret.TouchEvent){
        switch (staticVarUntil.numbersign){
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit2numberone,viewManager.getInstance().math1unit2numberone.drawGou,"math/math1/unit2/common/wrongeffect.ogg","math/math1/unit2/common/right.ogg");
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit2numbertwo,viewManager.getInstance().math1unit2numbertwo.buttonJump,"math/math1/unit2/common/wrongeffect.ogg","math/math1/unit2/common/right.ogg");
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit2numberthree,viewManager.getInstance().math1unit2numberthree.addBeatDrum,"math/math1/unit2/common/wrongeffect.ogg","math/math1/unit2/common/right.ogg");
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit3numberone,viewManager.getInstance().math1unit3numberone.drawGou,"math/math1/unit3/common/wrongeffect.ogg","math/math1/unit3/common/right.ogg");
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit3numbertwo,viewManager.getInstance().math1unit3numbertwo.buttonJump,"math/math1/unit3/common/wrongeffect.ogg","math/math1/unit3/common/right.ogg");
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                operateUntil.onTouchTap(evt,viewManager.getInstance().math1unit3numberthree,viewManager.getInstance().math1unit3numberthree.addBeatDrum,"math/math1/unit3/common/wrongeffect.ogg","math/math1/unit3/common/right.ogg");
                break;
            case staticVarUntil.ENDVIEW:
                operateUntil.onTouchTestStudyTap(evt,viewManager.getInstance().endview,viewManager.getInstance().endview.buttonBegin);
                break;
        }
    }
    private changeContent(e:viewManagerEvent){
        operateUntil.initVar();
        if(e.eventObj != viewManager.getInstance().endview){
            staticVarUntil.totalwrong += e.eventObj.sigletimutotalwrong;
        }
        saveLog("e.eventType",e.eventType);
        switch (e.eventType){
            case staticVarUntil.MATH_1_UNIT_1_NUMBERONE:
                this.addChild(this.math1unit1numberone);
                this.swapChildren(this.nextjumpbutton,this.math1unit1numberone);
                changeScenceAnimation.pullSceenRightToLeft(this.math1unit1numberone,"",function(){
                      this.math1unit1numberone.addFunc();
                    if(this.endview.parent){
                        this.removeChild(this.endview);
                        this.endview = null;
                        egret.setTimeout(function(){
                            this.endview = new endView();
                        },this,500);
                    }

                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTWO:
                this.addChild(this.math1unit1numbertwo);
                this.swapChildren(this.nextjumpbutton,this.math1unit1numbertwo);
                changeScenceAnimation.pullSceenUpToDown(this.math1unit1numbertwo,"",function(){
                    this.math1unit1numbertwo.numEye();
                    this.removeChild(this.math1unit1numberone);
                    this.math1unit1numberone = null;
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE:
                this.addChild(this.math1unit1numberthree);
                this.swapChildren(this.nextjumpbutton,this.math1unit1numberthree);
                changeScenceAnimation.pullSceenRightToLeft(this.math1unit1numberthree,"",function(){
                    this.math1unit1numberthree.numberThreeRun();
                    this.removeChild(this.math1unit1numbertwo);
                    this.math1unit1numbertwo = null;
                },this);

                break;
            case staticVarUntil.ENDVIEW:
                this.addChild(this.endview);
                changeScenceAnimation.pullSceenRightToLeft(this.endview,"",function(){
                    this.endview.showContent();
                    operateUntil.showViewContent();
                    //从哪课进来就移除哪课
                    if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_1){
                        this.removeChild(this.math1unit1numberthree);
                        this.math1unit1numberthree = null;
                    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_2){
                        if(this.math1unit2numberthree.parent){
                            this.removeChild(this.math1unit2numberthree);
                            this.math1unit2numberthree = null;
                        }
                    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_3){
                        //获取金币的log
                        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_3);
                        sendToAndroid(saveLogJson(obj));
                        sendToAndroid("{\"method_name\":\"isCoinIncrease\"}");
                        this.removeChild(this.math1unit3numberthree);
                        this.math1unit3numberthree = null;
                    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_1_STUDY){
                        if(this.english1unit1study.parent){
                            this.english1unit1study.parent.removeChild(this.english1unit1study);
                            this.english1unit1study = null;
                        }
                    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_2_TEST){
                        if(this.english1unit2test.parent){
                            this.english1unit2test.parent.removeChild(this.english1unit2test);
                            this.english1unit2test = null;
                        }
                    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_3_TEST){
                        //获取金币的log
                        var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_3_TEST);
                        sendToAndroid(saveLogJson(obj));
                        sendToAndroid("{\"method_name\":\"isCoinIncrease\"}");
                        if(this.english1unit3test.parent){
                            this.english1unit3test.parent.removeChild(this.english1unit3test);
                            this.english1unit3test = null;
                        }
                    }
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                this.addChild(this.math1unit2numberone);
                changeScenceAnimation.pullSceenUpToDown(this.math1unit2numberone,"",function(){
                    this.math1unit2numberone.penChangePosY();
                        if(this.endview.parent){
                            egret.log("del this.endview");
                            this.removeChild(this.endview);
                            this.endview = null;
                            egret.setTimeout(function(){
                                this.endview = new endView();
                            },this,500);
                        }
                    playSoundEffect("math/math1/unit2/numberone/huabi.ogg",1,1);
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                this.addChild(this.math1unit2numbertwo);
                changeScenceAnimation.pullSceenRightToLeft(this.math1unit2numbertwo,"",function(){
                    this.math1unit2numbertwo.duckSwiming();
                    this.math1unit2numbertwo.addButtonAndNum();
                    if(this.math1unit2numberone.parent){
                        egret.log("del this.math1unit2numberone");
                        this.removeChild(this.math1unit2numberone);
                        this.math1unit2numberone = null;
                    }
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                this.addChild(this.math1unit2numberthree);
                changeScenceAnimation.pullSceenUpToDown(this.math1unit2numberthree,"",function(){
                    this.math1unit2numberthree.addEarDance();
                    if(this.math1unit2numbertwo.parent){
                        egret.log("del this.math1unit2numbertwo");
                        this.removeChild(this.math1unit2numbertwo);
                        this.math1unit2numbertwo = null;
                    }
                },this);


                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                this.addChild(this.math1unit3numberone);
                changeScenceAnimation.pullSceenUpToDown(this.math1unit3numberone,"",function(){
                    this.math1unit3numberone.penChangePosY();
                    if(this.endview.parent){
                        this.removeChild(this.endview);
                        this.endview = null;
                        egret.setTimeout(function(){
                            this.endview = new endView();
                        },this,500);
                    }

                    playSoundEffect("math/math1/unit3/numberone/huabi.ogg",1,1);
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                this.addChild(this.math1unit3numbertwo);
                changeScenceAnimation.pullSceenRightToLeft(this.math1unit3numbertwo,"",function(){
                    this.math1unit3numbertwo.duckSwiming(staticVarUntil.rightresulte);
                    this.math1unit3numbertwo.duckAcross();
                    this.math1unit3numbertwo.addButtonAndNum();
                    this.removeChild(this.math1unit3numberone);
                    this.math1unit3numberone = null;
                },this);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                this.addChild(this.math1unit3numberthree);
                changeScenceAnimation.pullSceenRightToLeft(this.math1unit3numberthree,"",function(){
                    this.math1unit3numberthree.addEarDance(staticVarUntil.rightresulte);
                    this.removeChild(this.math1unit3numbertwo);
                    this.math1unit3numbertwo = null;
                },this);
                break;
            case staticVarUntil.ENGLISH_1_UNIT_1_STUDY:
                this.addChild(this.english1unit1study);
                changeScenceAnimation.pullSceenRightToLeft(this.english1unit1study,"",function(){
                    //发播放mp4信息给安卓
                    sendToAndroid("{\"method_name\":\"startPlayMp4\",\"url\":\""+ url+"family.mp4"+"\"}");
                },this);
                break;
            case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
                this.addChild(this.english1unit2test);
                changeScenceAnimation.pullSceenRightToLeft(this.english1unit2test,"",function(){
                    this.english1unit2test.introduceAnimation();
                    this.removeChild(this.endview);
                    this.endview = null;
                    egret.setTimeout(function(){
                        this.endview = new endView();
                    },this,500);
                },this);
                break;
            case staticVarUntil.ENGLISH_1_UNIT_3_TEST:
                this.addChild(this.english1unit3test);
                changeScenceAnimation.pullSceenRightToLeft(this.english1unit3test,"",function(){
                    this.english1unit3test.picFrameShake();
                    this.english1unit3test.addPhotoWallWord();
                    this.removeChild(this.endview);
                    this.endview = null;
                    egret.setTimeout(function(){
                        this.endview = new endView();
                    },this,500);
                },this);
                break;
        }
    }

    private jumpButton(){
        this.nextjumpbutton = egretUntil.createBitmapByName("nextjumpbutton_png");
        this.nextjumpbutton.x = 830;
        this.nextjumpbutton.y = 15;
        this.nextjumpbutton.visible =false;
        this.addChild(this.nextjumpbutton);
    }
}