/**
 * Created by oo on 2016/3/31.
 */
var english1Unit2Test = (function (_super) {
    __extends(english1Unit2Test, _super);
    function english1Unit2Test() {
        _super.call(this);
        this.sigletimutotalwrong = 0;
        //人物数组
        this.personarr = [];
        //人物序号
        this.personeindex = 0;
        //每个人物出错次数
        this.sigelpersonwrong = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addScence, this);
    }
    var d = __define,c=english1Unit2Test,p=c.prototype;
    //人物名称的json
    //private everypersonbodyname =
    //[{"bodyname":"bashenti","bodyxy":{"x":0,"y":0},"personxy":{"x":440,"y":80},"dimname":"mohu","dimxy":{"x":0,"y":0},"flickername":"bashanguang","flickerxy":{"x":0,"y":0},"personhappy":{"data_json":"fatherhappy_json","data_png":"fatherhappy_png","data_name":"fatherhappy"},"personsad":{"data_json":"fathersad_json","data_png":"fathersad_png","data_name":"fathersad"},"personarmname":"bashou","personarmxy":{"x":0,"y":145},"shearhandname":"jiandao","shearhandxy":{"x":0,"y":145}},
    // {"bodyname":"geshenti","bodyxy":{"x":0,"y":0},"personxy":{"x":424,"y":219},"dimname":"gemh","dimxy":{"x":0,"y":0},"flickername":"gesg","flickerxy":{"x":0,"y":0},"personhappy":"gehappy","personsad":"gesad","personarmname":"geshou","personarmxy":{"x":12,"y":138},"shearhandname":"geshou","shearhandxy":{"x":12,"y":138}}];
    //添加场景
    p.addScence = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addScence, this);
        this.addCommonPer(staticVarUntil.ENDVIEW, staticVarUntil.ENGLISH_1_UNIT_2_TEST, this);
        //添加背景
        var bg = egretUntil.createBitmapByName("beijing2_png");
        this.addChild(bg);
        //添加序列帧动画
    };
    //出场动画介绍
    p.introduceAnimation = function () {
        //介绍的字幕
        this.word = egretUntil.createBitmapByName("biaoti");
        this.addChild(this.word);
        this.word.alpha = 0;
        this.word.y = 90;
        this.word.x = (egretUntil.getStageWidth() - this.word.width) / 2;
        mathfat.setTweenarr(this.word);
        egret.Tween.get(this.word).to({ alpha: 0.6, y: 94 }, 200).to({ alpha: 1, y: 90 }, 500);
        var t1 = egret.setTimeout(function () {
            egret.Tween.get(this.word, { loop: true }).to({ alpha: 1, y: 94 }, 700).to({ alpha: 1, y: 90 }, 700);
        }, this, 700, "egret");
        mathfat.setTimerArr(t1);
        //相机
        this.camerabig = egretUntil.createBitmapByName("xiangji1");
        this.addChild(this.camerabig);
        this.camerabig.y = 223;
        this.camerabig.x = (egretUntil.getStageWidth() - this.camerabig.width) / 2;
        this.camerabig.alpha = 0;
        mathfat.setTweenarr(this.camerabig);
        //小小摄影师的声音
        playSoundEffect("english/english1/unit2/smallcameraman.ogg");
        egret.Tween.get(this.camerabig).to({ alpha: 0.6, y: 220 }, 200).to({ alpha: 1, y: 223 }, 500).call(function () {
            operateUntil.restoreAnchorOffsetxy(this.camerabig);
        }, this);
        //小相机
        this.smallCamera = egretUntil.createBitmapByName("xiangji2");
        this.smallCamera.x = egretUntil.getStageWidth() - 20 - this.smallCamera.width;
        this.smallCamera.y = egretUntil.getStageHeight() - 14 - this.smallCamera.height;
        this.addChild(this.smallCamera);
        this.smallCamera.visible = false;
    };
    //组装人物
    p.addAssemblingPerson = function () {
        playSoundEffect("english/english1/unit2/trysayenglishname.ogg");
        //将错误次数置0
        this.sigelpersonwrong = 0;
        var perobj = siglePersonArr[this.personeindex];
        var persone = new createPerson();
        this.addChild(persone);
        //人身体
        persone.setPersoneBody(perobj.bodyname, perobj.bodyxy.x, perobj.bodyxy.y);
        persone.width = persone.getPersoneBody().width;
        persone.height = persone.getPersoneBody().height;
        persone.x = perobj.personxy.x;
        persone.y = perobj.personxy.y;
        //模糊的身体
        persone.setPersoneDim(perobj.dimname, perobj.dimxy.x, perobj.dimxy.y);
        //身体的闪光
        persone.setPersoneFlicker(perobj.flickername, perobj.flickerxy.x, perobj.flickerxy.y);
        //高兴的表情
        persone.setPersonEmotion(perobj.personhappy.data_json, perobj.personhappy.data_png, perobj.personhappy.data_name, perobj.personhappy.x, perobj.personhappy.y);
        //爸爸的手
        persone.setPersonArm(perobj.personarmname, perobj.personarmxy.x, perobj.personarmxy.y);
        //是否有辫子
        if (perobj.personeishair) {
            persone.setPersonHair(perobj.personehair.data_json, perobj.personehair.data_png, perobj.personehair.data_name, perobj.personehair.x, perobj.personehair.y);
            persone.addChild(persone.getPersonHair());
        }
        if (perobj.personearmdir == "left") {
            operateUntil.restoreAnchorOffsetxy(persone.getPersonArm(), persone.getPersonArm().width, persone.getPersonArm().height);
        }
        else {
            operateUntil.restoreAnchorOffsetxy(persone.getPersonArm(), 0, persone.getPersonArm().height);
        }
        //剪刀手
        persone.setShearHand(perobj.shearhandname, perobj.shearhandxy.x, perobj.shearhandxy.y);
        persone.addChild(persone.getPersoneBody());
        persone.addChild(persone.getPersonEmotion());
        persone.addChild(persone.getPersonArm());
        this.personarr.push(persone);
        mathfat.setTweenarr(persone);
        egret.Tween.get(persone).to({ alpha: 1, x: (egretUntil.getStageWidth() - persone.width) / 2 }, 600, egret.Ease.sineOut).wait(500).call(function () {
            if (perobj.personeishair) {
                persone.getPersonHair().getMc().gotoAndPlay("start", 1);
            }
            //判断是否有入场动画
            if (perobj.bodyisruchanganimation) {
                persone.setRuchangAnimation(perobj.personruchang.data_json, perobj.personruchang.data_png, perobj.personruchang.data_name, perobj.personruchang.x, perobj.personruchang.y);
                persone.addChild(persone.getRuchangAnimation());
                persone.getRuchangAnimation().getMc().gotoAndPlay("start", 1);
            }
            //挥挥手
            egret.Tween.get(persone.getPersonArm()).to({ rotation: -5 }, 200).to({ rotation: 0 }, 200)
                .to({ rotation: -5 }, 200).to({ rotation: 0 }, 200);
        }, this);
        //  egret.Tween.get(this).wait(2000).call(this.takePhoto,this);
    };
    //拍照
    p.takePhoto = function () {
        var tk = siglePersonArr[this.personeindex];
        var shot = egretUntil.createBitmapByName("kuang");
        this.addChild(shot);
        shot.x = tk.xiangkuangxy.x;
        shot.y = tk.xiangkuangxy.y;
        operateUntil.restoreAnchorOffsetxy(shot);
        //添加拍好的照片
        var fatherphoto = egretUntil.createBitmapByName(tk.completephotoname);
        this.addChild(fatherphoto);
        fatherphoto.visible = false;
        fatherphoto.x = tk.completephotoxy.x;
        fatherphoto.y = tk.completephotoxy.y;
        mathfat.setTweenarr(shot);
        //相框的缓动
        egret.Tween.get(shot).wait(600).call(function () {
            //爸爸的身体
            this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersoneBody());
            //剪刀手
            this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getShearHand());
            //模糊的人的身体
            this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersoneDim());
        }, this).to({ scaleX: 1.2, scaleY: 1.2 }, 500).to({ scaleX: 1.0, scaleY: 1.0 }, 500).to({ scaleX: 1.2, scaleY: 1.2 }, 500).call(function () {
            //爸爸闪光的身体
            this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersoneFlicker());
            egret.setTimeout(function () {
                //爸爸的身体
                this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersoneBody());
                //人物表情
                this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersonEmotion());
                //模糊的人的身体
                this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersoneDim());
                //爸爸闪光的身体
                this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersoneFlicker());
                //剪刀手
                this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getShearHand());
            }, this, 100, "egret");
        }, this);
        //人物高兴表情
        //       this.personarr[this.personeindex].setPersonEmotion(tk.personhappy.data_json,tk.personhappy.data_png,tk.personhappy.data_name,tk.personhappy.x,tk.personhappy.y);
        this.personarr[this.personeindex].getPersonEmotion().getMc().gotoAndPlay("start", 1);
        //左胳膊摇晃
        egret.Tween.get(this.personarr[this.personeindex].getPersonArm()).to({ rotation: -5 }, 300).to({ rotation: 0 }, 300).call(function () {
            //显示模糊的身影
            //爸爸的身体
            //this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersoneBody());
            //人物表情
            this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersonEmotion());
            //左胳膊
            this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersonArm());
            //模糊的人的身体
            //this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersoneDim());
            //人物表情停留在第一帧
            this.personarr[this.personeindex].getPersonEmotion().getMc().gotoAndStop(1);
            //剪刀手
            this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getShearHand());
        }, this);
        mathfat.setTweenarr(fatherphoto);
        //爸爸的照片
        egret.Tween.get(fatherphoto).wait(2500).call(function () {
            egret.log("进来了");
            fatherphoto.visible = true;
            //播放该人物的单词声音
            playSoundEffect("english/english1/unit3/word/" + siglePersonArr[this.personeindex].rightresult + ".ogg");
            shot.visible = false;
        }, this).to({ rotation: 15, scaleX: 1.2, scaleY: 1.2 }, 500);
        var t2 = egret.setTimeout(function () {
            //照片消失
            if (this.personeindex < siglePersonArr.length - 1) {
                egret.Tween.get(fatherphoto).to({ alpha: 0 }, 500).call(function () {
                    fatherphoto.visible = false;
                }, this);
                egret.Tween.get(this.personarr[this.personeindex]).to({ alpha: 0 }, 500).call(function () {
                    this.personarr[this.personeindex].visible = false;
                    this.personeindex++;
                }, this).call(this.addAssemblingPerson, this);
            }
            else {
                //结束
                playSoundEffect("english/english1/unit3/keepcontinuegood.ogg");
            }
        }, this, 4000, "egret");
        mathfat.setTimerArr(t2);
    };
    //失败
    p.handleFail = function () {
        var pp = siglePersonArr[this.personeindex];
        this.personarr[this.personeindex].removeChild(this.personarr[this.personeindex].getPersonEmotion());
        this.personarr[this.personeindex].setPersonEmotion(pp.personsad.data_json, pp.personsad.data_png, pp.personsad.data_name, pp.personsad.x, pp.personsad.y);
        this.personarr[this.personeindex].addChild(this.personarr[this.personeindex].getPersonEmotion());
        this.personarr[this.personeindex].getPersonEmotion().getMc().gotoAndPlay("start", 1);
        if (this.personeindex < siglePersonArr.length - 1) {
            //移除
            this.removeChild(this.personarr[this.personeindex]);
            this.personeindex++;
            var t3 = egret.setTimeout(this.addAssemblingPerson, this, 2000, "egret");
            mathfat.setTimerArr(t3);
        }
        else {
            //结束
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }
    };
    //语音回调的处理
    p.handleGet = function (data) {
        egret.log(data);
        //正确的结果
        if (data.indexOf(siglePersonArr[this.personeindex].rightresult) >= 0) {
            this.takePhoto();
        }
        else {
            staticVarUntil.totalwrong++;
            this.sigelpersonwrong++;
            operateUntil.asrWrongMarkWord(this.sigelpersonwrong, "english/english1/unit2/firstwrong.ogg", "english/english1/unit2/secondwrong.ogg", "english/english1/unit2/uhthirdwrong" + siglePersonArr[this.personeindex].rightresult + ".ogg");
        }
    };
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //声音的回调
    p.handleAudio = function (data) {
        if (data.indexOf("unit2/smallcameraman") >= 0) {
            var t4 = egret.setTimeout(function () {
                playSoundEffect("english/english1/unit2/hiready.ogg");
                egret.Tween.removeTweens(this.camerabig);
                this.camerabig.alpha = 1;
                egret.Tween.get(this.camerabig, { loop: true }).to({ rotation: -5 }, 300, egret.Ease.sineInOut).to({ rotation: 5 }, 600, egret.Ease.sineInOut).to({ rotation: 0 }, 300, egret.Ease.sineInOut);
            }, this, 1500, "egret");
            mathfat.setTimerArr(t4);
        }
        else if (data.indexOf("unit2/hiready") >= 0) {
            egret.Tween.removeTweens(this.camerabig);
            egret.Tween.get(this.camerabig).to({ alpha: 0, y: 250 + this.camerabig.anchorOffsetY }, 200).call(function () {
                this.camerabig.visible = false;
            }, this);
            egret.Tween.removeTweens(this.word);
            this.word.alpha = 1;
            egret.Tween.get(this.word).to({ alpha: 0, y: 70 }, 200).call(function () {
                this.word.visible = false;
            }, this);
            var t5 = egret.setTimeout(this.addAssemblingPerson, this, 1500, "egret");
            mathfat.setTimerArr(t5);
            var t6 = egret.setTimeout(function () {
                this.smallCamera.visible = true;
                operateUntil.restoreAnchorOffsetxy(this.smallCamera);
                animationUntil.effectJelly(this.smallCamera, true, 2000);
            }, this, 2000, "egret");
            mathfat.setTimerArr(t6);
        }
        else if (data.indexOf("unit2/trysayenglishname") >= 0) {
            startAsr(this, siglePersonArr[this.personeindex].rightresult);
        }
        else if (data.indexOf("unit2/firstwrong") >= 0 || data.indexOf("unit2/secondwrong") >= 0) {
            startAsr(this, siglePersonArr[this.personeindex].rightresult);
        }
        else if (data.indexOf("unit2/uhthirdwrong" + siglePersonArr[this.personeindex].rightresult + ".ogg") >= 0) {
            this.handleFail();
        }
        else if (data.indexOf("unit2/onceremind") >= 0 || data.indexOf("unit2/twiceremind") >= 0) {
            startAsr(this, siglePersonArr[this.personeindex].rightresult);
        }
        else if (data.indexOf("unit2/thirdremind") >= 0) {
            onBackButtonPressed();
        }
        else if (data.indexOf("unit3/keepcontinuegood") >= 0) {
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }
    };
    return english1Unit2Test;
}(englishfat));
egret.registerClass(english1Unit2Test,'english1Unit2Test',["interfaceenglish"]);
