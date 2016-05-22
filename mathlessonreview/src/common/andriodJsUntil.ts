/**
 * Created by oo on 2016/1/15.
 */
var urllocation=window.location.pathname;//pathname
var urlsearch = window.location.search;
var math = parseInt(urlsearch.substring((urlsearch.indexOf("math=")+5),urlsearch.indexOf("&")));
var unit = parseInt(urlsearch.substr((urlsearch.indexOf("unit=")+5),1));
var url = urllocation.replace("index.html","")+"resource/media/";
var exmode1 = "close";
var exmode2 = "touch";
var exmode3 = "abort";
                            //音量大小       是否循环播放
function playSoundEffect(name,voc:number=1,iscir:number=0){
    if(window["injs"]){
        window["injs"].playSoundEffect(url+name,voc,iscir);
    }else{
        saveLog("egret","使用egret播放器");
        var soundegret = new soundEgret(url+name);
    }
}
//回调asr
function get(data){
    saveLog("get",data);
    var json = eval("(" + data + ")");
    if(json.error){saveLog("get","启动asr "+data);
        //if(staticVarUntil.numbersign.indexOf("math")>=0){
        //    staticVarUntil
        //}
        startAsr(this,siglePersonArr[this.personeindex].rightresult);staticVarUntil.getasrerror++;}
    var inputOperate = json.operate;
    var inputText = json.inputText;
    var result = parseInt(json.result,10);
    if (inputOperate == "quit") {
        stopAsr();
        onBackButtonPressed();
    }else if(inputOperate == "next"){
        stopAsr();
        operateUntil.answerNoGiveRightResult();
    }else{
        stopAsr();
        staticVarUntil.ispassasr = true;
        switch (staticVarUntil.numbersign){
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit2/common/wrongeffect.ogg",viewManager.getInstance().math1unit2numberone.drawGou,viewManager.getInstance().math1unit2numberone,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit2/common/wrongeffect.ogg",viewManager.getInstance().math1unit2numbertwo.buttonJump,viewManager.getInstance().math1unit2numbertwo,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit2/common/wrongeffect.ogg",viewManager.getInstance().math1unit2numberthree.addBeatDrum,viewManager.getInstance().math1unit2numberthree,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit3/common/wrongeffect.ogg",viewManager.getInstance().math1unit3numberone.drawGou,viewManager.getInstance().math1unit3numberone,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit3/common/wrongeffect.ogg",viewManager.getInstance().math1unit3numbertwo.buttonJump,viewManager.getInstance().math1unit3numbertwo,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                operateUntil.asrResult(result,"math/math1/unit2/common/right.ogg","math/math1/unit3/common/wrongeffect.ogg",viewManager.getInstance().math1unit3numberthree.addBeatDrum,viewManager.getInstance().math1unit3numberthree,staticVarUntil.rightresulte);
                break;
            case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
                viewManager.getInstance().english1unit2test.handleGet(inputText);
                break;
        }
    }
}
function getaudio(data){
    saveLog("getaudio",data);
    switch (staticVarUntil.numbersign){
        case staticVarUntil.MATH_1_UNIT_1_NUMBERONE:
            viewManager.getInstance().math1unit1numberone.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_1_NUMBERTWO:
            viewManager.getInstance().math1unit1numbertwo.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE:
            viewManager.getInstance().math1unit1numberthree.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
            viewManager.getInstance().math1unit2numberone.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
            viewManager.getInstance().math1unit2numbertwo.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
            viewManager.getInstance().math1unit2numberthree.handleAudio(data);
            break;
        case staticVarUntil.ENDVIEW:
            viewManager.getInstance().endview.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
            viewManager.getInstance().math1unit3numberone.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
            viewManager.getInstance().math1unit3numbertwo.handleAudio(data);
            break;
        case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
            viewManager.getInstance().math1unit3numberthree.handleAudio(data);
            break;
        case staticVarUntil.ENGLISH_1_UNIT_3_TEST:
            viewManager.getInstance().english1unit3test.handleAudio(data);
            break;
        case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
            viewManager.getInstance().english1unit2test.handleAudio(data);
            break;
        default :
            break;

    }
}
//熄屏 暂停
function onPause(){
    egretUntil.pauseAllAnimation();
    var $children = viewManager.getInstance().math1unit1numberone.$children;
    for(var i = $children.length;i>0;i--){
        //if(i !=0 ){
        //    viewManager.getInstance().math1unit1numberone.removeChildAt(i);
        //}
        for(var j = $children[i].$children.length-1;j>0;j--){
            if(j != 0 ){
                console.log($children[i]);
            }
        }
    }
   // operateUntil.pauseNumber();
}
//点亮屏幕 开始
function onResume(){
    operateUntil.resumeNumber();
}
//停止所有声音的播放
function stopSoundEffect(){
    if(window["injs"]){
        window["injs"].stopSoundEffect();
    }
}
//根据name停止播放某个声音
function stopSoundEffectByUrl(name){
    if(window["injs"]){
        window["injs"].stopSoundEffectByUrl(url+name);
    }
}
//退出
function onBackButtonPressed(){
    if(window["injs"]){
        window["injs"].onBackButtonPressed();
    }
    if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_1){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_1);
    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_2){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_2);
    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_3){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_2);
        exmode3 = "finish";
    }
    exmode1 = "close";
    obj.next_unit ="";
    sendToAndroid(saveLogJson(obj));
}

//重玩本节
function rePlay(){
    var viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    switch (staticVarUntil.mathunitnum){
        case staticVarUntil.MATH_1_UNIT_1:
            var obj = courseInfo(staticVarUntil.MATH_1_UNIT_1);
            viewManager.getInstance().initmath1unit1();
            viewmanagerevent.eventType = staticVarUntil.MATH_1_UNIT_1_NUMBERONE;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
        case staticVarUntil.MATH_1_UNIT_2:
            var obj = courseInfo(staticVarUntil.MATH_1_UNIT_2);
            viewManager.getInstance().initmath1unit2();
            viewmanagerevent.eventType = staticVarUntil.MATH_1_UNIT_2_NUMBERONE;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
        case staticVarUntil.MATH_1_UNIT_3:
            var obj = courseInfo(staticVarUntil.MATH_1_UNIT_3);
            viewManager.getInstance().initmath1unit3();
            viewmanagerevent.eventType = staticVarUntil.MATH_1_UNIT_3_NUMBERONE;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
        case staticVarUntil.ENGLISH_1_UNIT_1_STUDY:
            var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_1_STUDY);
            viewManager.getInstance().english1unit1study = new english1Unit1Study();
            viewmanagerevent.eventType = staticVarUntil.ENGLISH_1_UNIT_1_STUDY;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
        case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
            var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_2_TEST);
            viewManager.getInstance().english1unit2test = new english1Unit2Test();
            viewmanagerevent.eventType = staticVarUntil.ENGLISH_1_UNIT_2_TEST;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
        case staticVarUntil.ENGLISH_1_UNIT_3_TEST:
            var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_3_TEST);
            viewManager.getInstance().english1unit3test = new english1Unit3Test();
            viewmanagerevent.eventType = staticVarUntil.ENGLISH_1_UNIT_3_TEST;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            break;
    }
    exmode1 = "retry";
    obj.next_unit ="";
    sendToAndroid(saveLogJson(obj));
    //初始化总错误次数
    operateUntil.initTotalWrong();
    viewManager.getInstance().dispatchEvent(viewmanagerevent);
}
//进入下一节
function nextLesson(){
    var viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    exmode1 = "next";
    switch (staticVarUntil.mathunitnum){
        case staticVarUntil.MATH_1_UNIT_1:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.MATH_1_UNIT_1)));
            viewManager.getInstance().initmath1unit2();
            viewmanagerevent.eventType = staticVarUntil.MATH_1_UNIT_2_NUMBERONE;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            operateUntil.initTotalWrong();
            viewManager.getInstance().dispatchEvent(viewmanagerevent);
            break;
        case staticVarUntil.MATH_1_UNIT_2:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.MATH_1_UNIT_2)));
            viewManager.getInstance().initmath1unit3();
            viewmanagerevent.eventType = staticVarUntil.MATH_1_UNIT_3_NUMBERONE;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            operateUntil.initTotalWrong();
            viewManager.getInstance().dispatchEvent(viewmanagerevent);
            break;
        case staticVarUntil.MATH_1_UNIT_3:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.MATH_1_UNIT_3)));
            playSoundEffect("common/bouncestar/lastlesson.ogg");
            break;
        case staticVarUntil.ENGLISH_1_UNIT_1_STUDY:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.ENGLISH_1_UNIT_1_STUDY)));
            viewmanagerevent.eventType = staticVarUntil.ENGLISH_1_UNIT_2_TEST;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            operateUntil.initTotalWrong();
            viewManager.getInstance().dispatchEvent(viewmanagerevent);
            break;
        case staticVarUntil.ENGLISH_1_UNIT_2_TEST:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.ENGLISH_1_UNIT_2_TEST)));
            viewmanagerevent.eventType = staticVarUntil.ENGLISH_1_UNIT_3_TEST;
            viewmanagerevent.eventObj = viewManager.getInstance().endview;
            operateUntil.initTotalWrong();
            viewManager.getInstance().dispatchEvent(viewmanagerevent);
            break;
        case staticVarUntil.ENGLISH_1_UNIT_3_TEST:
            sendToAndroid(saveLogJson(courseInfo(staticVarUntil.ENGLISH_1_UNIT_3_TEST)));
            playSoundEffect("common/bouncestar/lastlesson.ogg");
            break;
    }

}
//机器人上的back建
function getLogfromCourse() {
    exmode1 = "close";
    if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_1){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_1);
        obj.next_unit ="";
        sendToAndroid(saveLogJson(obj));
    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_2){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_2);
        obj.next_unit ="";
        sendToAndroid(saveLogJson(obj));
    }else if(staticVarUntil.mathunitnum == staticVarUntil.MATH_1_UNIT_3){
        var obj = courseInfo(staticVarUntil.MATH_1_UNIT_3);
        obj.next_unit ="";
        exmode3 = "finish";
        sendToAndroid(saveLogJson(obj));
    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_1_STUDY){
        var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_1_STUDY);
        obj.next_unit ="";
        exmode3 = "finish";
        sendToAndroid(saveLogJson(obj));
    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_2_TEST){
        var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_2_TEST);
        obj.next_unit ="";
        exmode3 = "finish";
        sendToAndroid(saveLogJson(obj));
    }else if(staticVarUntil.mathunitnum == staticVarUntil.ENGLISH_1_UNIT_3_TEST){
        var obj = courseInfo(staticVarUntil.ENGLISH_1_UNIT_3_TEST);
        obj.next_unit ="";
        exmode3 = "finish";
        sendToAndroid(saveLogJson(obj));
    }

}
function getLogJson(obj) {
    //open_unit 告诉安卓端 即将打开的是哪一课
    var logJson = "{\"method_name\":\"getUnitResultLong\",\"course\":\""+ obj.course+"\",\"wrongtries\":0, \"score\":" + operateUntil.typeOfCourse().score + ", \"exit_mode\":[\"" + exmode1 + "\",\"" + exmode2 + "\",\"" + exmode3 + "\"],\"open_unit\":\""+ obj.next_unit+"\"}";
    saveLog("logjson",logJson);
    return logJson;
}
function saveLogJson(obj){
    var logjson = "{\"method_name\":\"saveUnitResult\",\"course\":\""+ obj.course+"\",\"wrongtries\":0, \"score\":" + operateUntil.typeOfCourse().score + ", \"exit_mode\":[\"" + exmode1 + "\",\"" + exmode2 + "\",\"" + exmode3 + "\"],\"open_unit\":\""+ obj.next_unit+"\"}";
    saveLog("saveLogJson",logjson);
    return logjson;
}
//调用安卓函数存log
function saveLog(tag,loginfo){
    if(window["injs"]){
        window["injs"].recordDebugLog(tag,loginfo);
    }
}
//暂停某个声音
function pauseSoundEffectByUrl(name){
    if(window["injs"]){
        window["injs"].pauseSoundEffectByUrl(url+name);
    }
}
//恢复暂停的声音
function resumeSoundEffectByUrl(name){
    if(window["injs"]){
        window["injs"].resumeSoundEffectByUrl(url+name);
    }
}
//暂停所有声音
function pauseSoundEffect(){
    if(window["injs"]){
        window["injs"].pauseSoundEffect();
    }
}
//恢复所有声音
function resumeSoundEffect(){
    if(window["injs"]){
        window["injs"].resumeSoundEffect();
    }
}
//声音文件不存在
function onFileNotFound(url){
    saveLog("",url+" 不存在");
}
//声音文件播放错误
function onSoundEffectError(url){
    saveLog("",url+" 播放出错");
}
function isAsrEngineStarted(){
    if(window["injs"]){
        var _=window["injs"].isAsrEngineStarted();
        saveLog("asr是否启动",_);
        return _;
    }
}
function sendToAndroid(json){
    if(window["injs"]){
        saveLog("injs",json);
        window["injs"].sendToAndroid(json);
    }
}
function sendToHtml(data){
    var json = eval("("+data+")");
    saveLog("json",json+" ");
    if(json.method_name == "onGetUnitResultLong"){
        if(json.score){
            if(json.course == "english-1-1"){
                sendToAndroid("{\"method_name\":\"setButtonVisible\",\"visible\":\"true\",\"button_tag\":\"btn_skip\"}");
                return;
            }
            //事件对象
            var viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
            viewmanagerevent.eventType = staticVarUntil.ENDVIEW;
            viewmanagerevent.eventObj = this;
            viewManager.getInstance().touchEnabled =true;
            viewManager.getInstance().nextjumpbutton.touchEnabled =true;
            viewManager.getInstance().nextjumpbutton.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
                viewManager.getInstance().touchEnabled =false;
                viewManager.getInstance().nextjumpbutton.touchEnabled =false;
                stopSoundEffect();
                //果冻效果
                operateUntil.restoreAnchorOffsetxy(viewManager.getInstance().nextjumpbutton);
                animationUntil.effectJelly(viewManager.getInstance().nextjumpbutton);
                //暂停相关动画
                mathfat.PauseAllAnimation();
                operateUntil.initVar();
                viewManager.getInstance().dispatchEvent(viewmanagerevent);
            },this);
            viewManager.getInstance().nextjumpbutton.visible = true;
        }
    }else if(json.method_name == "onIsCoinIncrease"){
        saveLog("onIsCoinIncrease",json.is_increase);
        staticVarUntil.iscoin = json.is_increase;
        //mp4播放完成以后回调
    }else if(json.method_name == "onCompletion"){
        viewManager.getInstance().dispatchEvent(viewManager.getInstance().english1unit1study.getViewmanagerevent());
    //安卓点击按钮事件
    }else if(json.method_name == "onButtonClicked"){
        //播放mp4的按钮
        if(json.button_tag == "btn_skip"){
            sendToAndroid("{\"method_name\":\"setButtonVisible\",\"visible\":\"false\",\"button_tag\":\"btn_skip\"}");
            sendToAndroid("{\"method_name\":\"stopPlayMp4\",\"url\":\""+ url+"english/english1/unit1/family.mp4"+"\"}");
            //事件对象
            var viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
            viewmanagerevent.eventType = staticVarUntil.ENDVIEW;
            viewmanagerevent.eventObj = this;
            operateUntil.initVar();
            viewManager.getInstance().dispatchEvent(viewmanagerevent);
        }
    }

}
//function MCcomplete(e:egret.Event){
//    console.log(e);
//}
//function MCframelable(e:egret.MovieClipEvent){
//    if(viewManager.getInstance().math1unit1numberone.typeSign == "jump1"){
//
//    }
//    if("@fallmove0" == e.frameLabel){
//        playSoundEffect("math/math1/unit1/numberone/onejump60ms.ogg");
//    }
//    if("@fallmove1@fallmove2@fallmove3@fallmove4@fallmove5".indexOf(e.frameLabel)>=0){
//        egretUntil.mcmap.get("jump1").x = egretUntil.mcmap.get("jump1").x-32;
//    }else if(e.frameLabel == "@fallmove6"){
//        egretUntil.mcmap.get("jump1").x = egretUntil.mcmap.get("jump1").x-22;
//    }else if(e.frameLabel == "@fallmove7"){
//        egretUntil.mcmap.get("jump1").x = egretUntil.mcmap.get("jump1").x-22;
//        if(egretUntil.mcmap.get("jump1").x == 412){ //正好居中
//            egretUntil.mcmap.get("jump1").gotoAndPlay("eye",1);
//        }
//    }
//}
function dbStartDragonBone(){
    dragonBones.WorldClock.clock.advanceTime(0.02);//0.02
    return true;
}
