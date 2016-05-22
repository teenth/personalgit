/**
 * Created by oo on 2016/1/21.
 */
var operateUntil = (function () {
    function operateUntil() {
    }
    var d = __define,c=operateUntil,p=c.prototype;
    //点击按钮答错的提示
    operateUntil.touchButtonWrongMarkWord = function (times, onewrong, twowrong, threewrong) {
        if (times == 1) {
            playSoundEffect(onewrong);
        }
        else if (times == 2) {
            playSoundEffect(twowrong);
        }
        else if (times == 3) {
            playSoundEffect(threewrong);
        }
    };
    //asr回答错误
    operateUntil.asrWrongMarkWord = function (times, onewrong, twowrong, threewrong) {
        if (times == 1) {
            playSoundEffect(onewrong);
        }
        else if (times == 2) {
            playSoundEffect(twowrong);
        }
        else if (times == 3) {
            playSoundEffect(threewrong);
        }
    };
    //触摸响应 obj调用的是哪个对象
    operateUntil.onTouchTap = function (evt, obj, callback, wrongeffect, rightname) {
        var butindex = obj.buttonuntil.findButtonIndex(obj.buttonuntil.butrelatearr, evt);
        if (butindex != null) {
            saveLog("touch", "点击关闭asr");
            //点击的时候关闭asr
            stopAsr();
            if (obj.numarr[butindex].numsign == staticVarUntil.rightresulte) {
                playSoundEffect(rightname);
                try {
                    callback(obj, butindex);
                }
                catch (e) {
                    egret.log(e + " callback");
                }
            }
            else {
                staticVarUntil.everytitlewrongtimes++;
                //答错了
                playSoundEffect(wrongeffect);
            }
        }
    };
    //asr回答
    operateUntil.asrResult = function (res, rightname, wrongname, callback, obj, rightres) {
        //答对了
        if (res == rightres) {
            playSoundEffect(rightname);
            try {
                callback(obj, obj.buttonuntil.allWrongSysShowRight(obj.buttonuntil.butrelatearr, rightres));
            }
            catch (e) { }
        }
        else {
            staticVarUntil.everytitlewrongtimes++;
            staticVarUntil.getasrerror++;
            //播放错误音效
            playSoundEffect(wrongname);
        }
    };
    //学习或考试结束界面的点击按钮
    operateUntil.onTouchTestStudyTap = function (evt, obj, callback) {
        var butindex = obj.buttonuntil.findButtonIndex(obj.buttonuntil.butrelatearr, evt);
        if (butindex != null) {
            callback(butindex, obj);
        }
    };
    //根据正确答案是多少提示相应的语言
    operateUntil.sayWordByRightResult = function (num) {
        if (num == 1) {
            return "one";
        }
        else if (num == 2) {
            return "two";
        }
        else if (num == 3) {
            return "three";
        }
    };
    //判断是学习课程还是考试课程 如果是课程 最后成功还是失败
    operateUntil.typeOfCourse = function () {
        if (staticVarUntil.mathunitnum.indexOf("math1unit1") >= 0 || staticVarUntil.numbersign.indexOf("english1unit1") >= 0) {
            //说明是学习课程
            return { type: "study",
                score: 1,
                islast: false };
        }
        else {
            //说明是考试课程 math1_unit3 代表最后一节
            if (staticVarUntil.mathunitnum.indexOf("math1unit3") >= 0 || staticVarUntil.numbersign.indexOf("english1unit3") >= 0) {
                //说明这节完成了
                if (operateUntil.getScore() > 1) {
                    return {
                        type: "test",
                        score: 1,
                        islast: true
                    };
                }
                else {
                    return {
                        type: "test",
                        score: 0,
                        islast: true
                    };
                }
            }
            else {
                //不是最后一节
                if (operateUntil.getScore() > 1) {
                    return {
                        type: "test",
                        score: 1,
                        islast: false
                    };
                }
                else {
                    return {
                        type: "test",
                        score: 0,
                        islast: false
                    };
                }
            }
        }
    };
    //初始化默认变量
    operateUntil.initVar = function () {
        staticVarUntil.everytitlewrongtimes = 0;
        staticVarUntil.getasrerror = 0;
        if (micUntil.getInstance().parent) {
            micUntil.getInstance().parent.removeChild(micUntil.getInstance());
        }
        mathfat.initArr();
    };
    //得分(num 3的倍数 3题就是一 6题就是2)
    operateUntil.getScore = function (num) {
        if (num === void 0) { num = 1; }
        if (staticVarUntil.numbersign.indexOf("english"))
            num = 2;
        if (staticVarUntil.totalwrong > 6 * num) {
            staticVarUntil.totalgrade = 1;
            return 1;
        }
        else if (staticVarUntil.totalwrong > 3 * num) {
            staticVarUntil.totalgrade = 2;
            return 2;
        }
        else {
            staticVarUntil.totalgrade = 3;
            return 3;
        }
    };
    //初始化得分
    operateUntil.initTotalWrong = function () {
        staticVarUntil.totalwrong = 0;
    };
    //弹星界面启动触摸 学习完以后的结算界面启动触摸
    operateUntil.endViewOpenTouch = function () {
        viewManager.getInstance().touchEnabled = true;
    };
    //回答我不知道 或我不会直接给出正确答案
    operateUntil.answerNoGiveRightResult = function () {
        switch (staticVarUntil.numbersign) {
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                playSoundEffect("math/math1/unit2/numberone/thirdwrongandmark.ogg");
                viewManager.getInstance().math1unit2numberone.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                playSoundEffect("math/math1/unit2/numbertwo/thirdwrongandmark.ogg");
                viewManager.getInstance().math1unit2numbertwo.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                playSoundEffect("math/math1/unit2/numberthree/thirdwrongandmark.ogg");
                viewManager.getInstance().math1unit2numberthree.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                playSoundEffect("math/math1/unit3/numberone/thirdwrongandright" + operateUntil.sayWordByRightResult(staticVarUntil.rightresulte) + ".ogg");
                viewManager.getInstance().math1unit3numberone.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                playSoundEffect("math/math1/unit3/numbertwo/thirdwrongandright" + operateUntil.sayWordByRightResult(staticVarUntil.rightresulte) + ".ogg");
                viewManager.getInstance().math1unit3numbertwo.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                playSoundEffect("math/math1/unit3/numberthree/thirdwrongandright" + operateUntil.sayWordByRightResult(staticVarUntil.rightresulte) + ".ogg");
                viewManager.getInstance().math1unit3numberthree.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
            case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
                playSoundEffect("english/english1/unit2/uhthirdwrong" + siglePersonArr[viewManager.getInstance().english1unit2test.personeindex].rightresult + ".ogg");
                viewManager.getInstance().math1unit3numberthree.sigletimutotalwrong = 3 - staticVarUntil.everytitlewrongtimes;
                break;
        }
    };
    operateUntil.endViewCloseTouch = function () {
        //        operateUntil.initScore();
        viewManager.getInstance().touchEnabled = false;
    };
    //学习课程结束后，将学习课程的对象变为空
    operateUntil.studyObjToNull = function () {
        viewManager.getInstance().math1unit1numberone = null;
        viewManager.getInstance().math1unit1numbertwo = null;
        viewManager.getInstance().math1unit1numberthree = null;
    };
    //测试课程结束，将测试课程的对象变为空
    operateUntil.testObjToNull = function () {
        viewManager.getInstance().math1unit2numberone = null;
        viewManager.getInstance().math1unit2numbertwo = null;
        viewManager.getInstance().math1unit2numberthree = null;
        viewManager.getInstance().math1unit3numberone = null;
        viewManager.getInstance().math1unit3numbertwo = null;
        viewManager.getInstance().math1unit3numberthree = null;
    };
    //结算界面显示的内容
    operateUntil.showViewContent = function () {
        if (operateUntil.typeOfCourse().type == "study") {
            viewManager.getInstance().endview.passView("study", 2, false);
        }
        else {
            //考试课程先判断得分 是否满足课程通关 >1通关
            if (operateUntil.typeOfCourse().score > 0) {
                //是不是最后一节 true是最后一节
                if (operateUntil.typeOfCourse().islast) {
                    //返回按钮闪烁
                    viewManager.getInstance().endview.passView("test", 0, true);
                }
                else {
                    //下一节
                    viewManager.getInstance().endview.passView("test", 2, false);
                }
            }
            else {
                //没通关
                viewManager.getInstance().endview.overView();
            }
        }
    };
    //通过numbersign 来标记当前从哪个数字开始
    operateUntil.pauseNumber = function () {
        saveLog("pauseNumber", staticVarUntil.numbersign);
        if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERONE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit1numberone);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERTWO) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit1numbertwo);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit1numbertwo);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit1numberthree);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit1numberthree);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERONE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit2numberone);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numberone);
            viewManager.getInstance().math1unit2numberone = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERTWO) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit2numbertwo);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numbertwo);
            viewManager.getInstance().math1unit2numbertwo = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit2numberthree);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numberthree);
            viewManager.getInstance().math1unit2numberthree = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERONE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit3numberone);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numberone);
            viewManager.getInstance().math1unit3numberone = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERTWO) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit3numbertwo);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numbertwo);
            viewManager.getInstance().math1unit3numbertwo = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE) {
            egret.Tween.pauseTweens(viewManager.getInstance().math1unit3numberthree);
            viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numberthree);
            viewManager.getInstance().math1unit3numberthree = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENDVIEW) {
            egret.Tween.pauseTweens(viewManager.getInstance().endview);
            viewManager.getInstance().removeChild(viewManager.getInstance().endview);
            viewManager.getInstance().endview = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_1_STUDY) {
            egret.Tween.pauseTweens(viewManager.getInstance().english1unit1study);
            viewManager.getInstance().removeChild(viewManager.getInstance().english1unit1study);
            viewManager.getInstance().english1unit1study = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST) {
            egret.Tween.pauseTweens(viewManager.getInstance().english1unit2test);
            viewManager.getInstance().removeChild(viewManager.getInstance().english1unit2test);
            viewManager.getInstance().english1unit2test = null;
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_3_TEST) {
            egret.Tween.pauseTweens(viewManager.getInstance().english1unit3test);
            viewManager.getInstance().removeChild(viewManager.getInstance().english1unit3test);
            viewManager.getInstance().english1unit3test = null;
        }
    };
    operateUntil.resumeNumber = function () {
        saveLog("resumeNumber", staticVarUntil.numbersign);
        if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERONE) {
            //viewManager.getInstance().math1unit1numberone = new math1Unit1Numberone();
            // viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numberone);
            viewManager.getInstance().math1unit1numberone.scenIndex = 0;
            //viewManager.getInstance().swapChildren(viewManager.getInstance().nextjumpbutton,viewManager.getInstance().math1unit1numberone);
            viewManager.getInstance().math1unit1numberone.start();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERTWO) {
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numbertwo);
            viewManager.getInstance().swapChildren(viewManager.getInstance().nextjumpbutton, viewManager.getInstance().math1unit1numbertwo);
            viewManager.getInstance().math1unit1numbertwo.numEye();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE) {
            //viewManager.getInstance().math1unit1numberthree = new math1Unit1Numberthree();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numberthree);
            viewManager.getInstance().swapChildren(viewManager.getInstance().nextjumpbutton, viewManager.getInstance().math1unit1numberthree);
            viewManager.getInstance().math1unit1numberthree.numberThreeRun();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERONE) {
            viewManager.getInstance().math1unit2numberone = new math1Unit2Numberone();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numberone);
            viewManager.getInstance().math1unit2numberone.penChangePosY();
            playSoundEffect("math/math1/unit2/numberone/huabi.ogg", 1, 1);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERTWO) {
            viewManager.getInstance().math1unit2numbertwo = new math1Unit2Numbertwo();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numbertwo);
            viewManager.getInstance().math1unit2numbertwo.duckSwiming();
            viewManager.getInstance().math1unit2numbertwo.addButtonAndNum();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE) {
            viewManager.getInstance().math1unit2numberthree = new math1Unit2Numberthree();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numberthree);
            viewManager.getInstance().math1unit2numberthree.addEarDance();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERONE) {
            viewManager.getInstance().math1unit3numberone = new math1Unit3Numberone();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numberone);
            viewManager.getInstance().math1unit3numberone.penChangePosY();
            playSoundEffect("math/math1/unit3/numberone/huabi.ogg", 1, 1);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERTWO) {
            viewManager.getInstance().math1unit3numbertwo = new math1Unit3Numbertwo();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numbertwo);
            viewManager.getInstance().math1unit3numbertwo.duckSwiming(staticVarUntil.rightresulte);
            viewManager.getInstance().math1unit3numbertwo.duckAcross();
            viewManager.getInstance().math1unit3numbertwo.addButtonAndNum();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE) {
            viewManager.getInstance().math1unit3numberthree = new math1Unit3Numberthree();
            viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numberthree);
            viewManager.getInstance().math1unit3numberthree.addEarDance(staticVarUntil.rightresulte);
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENDVIEW) {
            viewManager.getInstance().endview = new endView();
            viewManager.getInstance().addChild(viewManager.getInstance().endview);
            viewManager.getInstance().endview.showContent();
            operateUntil.showViewContent();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_1_STUDY) {
            viewManager.getInstance().english1unit1study = new english1Unit1Study;
            viewManager.getInstance().addChild(viewManager.getInstance().english1unit1study);
            sendToAndroid("{\"method_name\":\"getUnitResultLong\",\"course\":\"english-1-1\"}");
            //发播放mp4信息给安卓
            sendToAndroid("{\"method_name\":\"startPlayMp4\",\"url\":\"" + url + "english/english1/unit1/family.mp4" + "\"}");
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST) {
            viewManager.getInstance().english1unit2test = new english1Unit2Test();
            viewManager.getInstance().addChild(viewManager.getInstance().english1unit2test);
            viewManager.getInstance().english1unit2test.introduceAnimation();
        }
        else if (staticVarUntil.numbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST) {
            viewManager.getInstance().english1unit3test = new english1Unit3Test();
            viewManager.getInstance().addChild(viewManager.getInstance().english1unit3test);
            viewManager.getInstance().english1unit3test.picFrameShake();
            viewManager.getInstance().english1unit3test.addPhotoWallWord();
        }
    };
    //取消锚点设置
    operateUntil.cancelAnchorOffsetxy = function (obj) {
        obj.x -= obj.anchorOffsetX;
        obj.y -= obj.anchorOffsetY;
        obj.anchorOffsetX = 0;
        obj.anchorOffsetY = 0;
    };
    //恢复锚点设置(锚点在对象的中间)
    operateUntil.restoreAnchorOffsetxy = function (obj, width, height) {
        if (width === void 0) { width = obj.width / 2; }
        if (height === void 0) { height = obj.height / 2; }
        obj.anchorOffsetX = width;
        obj.anchorOffsetY = height;
        obj.x += obj.anchorOffsetX;
        obj.y += obj.anchorOffsetY;
    };
    return operateUntil;
}());
egret.registerClass(operateUntil,'operateUntil');
