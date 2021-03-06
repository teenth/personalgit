/**
 * Created by oo on 2016/4/6.
 */
class touchPlayEffect{

    //点击哪个相框就播放哪个单词的声音
    public static touchFramePlayWord(evt:egret.TouchEvent,picframecon:egret.Sprite){
        //取消锚点的设置
        operateUntil.cancelAnchorOffsetxy(picframecon);
        var ex = evt.stageX;
        var ey = evt.stageY;
        var picx = picframecon.x;
        var picy = picframecon.y;
        var picw = picframecon.width;
        var pich = picframecon.height;
        //恢复锚点
        operateUntil.restoreAnchorOffsetxy(picframecon);
        if(ex > picx && ex < picx + picw && ey > picy && ey < picy +pich ){
            //点到了单词框
            //播放相应的单词
            playSoundEffect("english/english1/unit3/word/"+picframecon.name+".ogg");
            return true;
        }
    }

    //答错了播放提示音
    public static wrongSound(times:number,imgarr){
        if(times == 1){
            playSoundEffect("english/english1/unit3/firstwrong.ogg");
        }else if(times == 2){
            playSoundEffect("english/english1/unit3/secondwrong.ogg");
        }else if(times == 3){
            playSoundEffect("english/english1/unit3/thirdwrong"+imgarr.name+".ogg");
        }
    }

}