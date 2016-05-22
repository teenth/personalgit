/**
 * Created by oo on 2016/1/20.
 */
var asrstate = false;//asr默认关闭
var timerstate = false;//asr定时器默认关闭
function startAsr(obj,rightres=""){
    if(window["injs"]){
        asrstate = true;
        //开启asr的同时开启网络状态定时器和asr超时触发器
        if(staticVarUntil.numbersign.indexOf("math")>=0){
            //ASR_MODE_MATH = 3;ASR_MODE_ENGLISH = 4;ASR_MODE_POEM = 5;
            saveLog("math","开启asr");
            window["injs"].startAsr(3,rightres);
        }else if(staticVarUntil.numbersign.indexOf("english")>=0){
            saveLog("english","开启asr"); 
            window["injs"].startAsr(4,rightres);
            saveLog("english","开启asr后");
        }

    }
    if(!viewManager.getInstance().timeruntil){
        viewManager.getInstance().timeruntil = new timerUntil();
    }
    if(!viewManager.getInstance().timeruntil.asrtimer.running){
        viewManager.getInstance().timeruntil.asrtimer.start();
        timerstate = true;
        saveLog("timer","启动定时器");
    }
    if(!micUntil.getInstance().parent){
        obj.addChild(micUntil.getInstance());
    }

    //暂停所有声音
    pauseSoundEffect();
    //asr启动的时候启动触摸
    viewManager.getInstance().touchEnabled=true;
    micUntil.getInstance().showMic();
   // isAsrEngineStarted();
}
//是否是播放提示的音效 导致asr暂停 5s 10s 15s的提示音（是播放提示音 就不需要停止计时器）
function stopAsr(stopasrwarning:boolean=false,onpause:boolean = false){
    if(window["injs"]){
        asrstate = false;
        saveLog("cancelAsr","关闭asr");
        window["injs"].cancelAsr();
    }
    viewManager.getInstance().touchEnabled=false;
    if(!stopasrwarning){
        if(viewManager.getInstance().timeruntil) {
            saveLog("timer","停止计时器");
            viewManager.getInstance().timeruntil.asrtimer.stop();
            viewManager.getInstance().timeruntil = null;
            timerstate =false;
        }
    }else{
        if(viewManager.getInstance().timeruntil){
            viewManager.getInstance().timeruntil.asrtimer.stop();
            timerstate =false;
        }
    }
    //启动暂停的所有音效
    resumeSoundEffect();
    //当停掉asr的时候 将结果是否通过asr的变量变为默认
    staticVarUntil.ispassasr = false;
    //if(onpause){
    //    micUntil.setInstance();
    //}

    micUntil.getInstance().hiddenMic();


}
//熄屏时关闭asr
function onPauseAsr(){
    if(window["injs"] && asrstate){
        saveLog("onPauseAsr cancelAsr","关闭asr");
        window["injs"].cancelAsr();
    }
    //说明有定时器 则关闭
    if(timerstate){
        viewManager.getInstance().timeruntil.asrtimer.stop();
        micUntil.setInstance();
    }
}
//点亮屏幕重启asr
function onResumeAsr(){
    if(window["injs"] && asrstate){
        saveLog("onResumeAsr startAsr","开启asr");
        //开启asr的同时开启网络状态定时器和asr超时触发器
        window["injs"].startAsr();
    }else{
        //如果没有asr则开启暂停的声音
        resumeSoundEffect();
        if(timerstate){
            viewManager.getInstance().timeruntil.asrtimer.start();
        }
    }
}