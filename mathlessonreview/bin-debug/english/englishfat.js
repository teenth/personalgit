/**
 * Created by oo on 2016/3/14.
 */
var englishfat = (function (_super) {
    __extends(englishfat, _super);
    function englishfat() {
        _super.call(this);
        this.everytitletime = new timerUntil();
        //事件对象
        this.viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    }
    var d = __define,c=englishfat,p=c.prototype;
    //添加个各类相同的属性
    p.addCommonPer = function (eventType, numbersign, obj) {
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        staticVarUntil.numbersign = numbersign;
        staticVarUntil.mathunitnum = numbersign;
        // this.everytitletime.setEveryTitleTime();
    };
    //得到要发送的事件
    p.getViewmanagerevent = function () {
        //停止声音的播放
        stopSoundEffect();
        return this.viewmanagerevent;
    };
    englishfat.setMcarr = function (mcname, mc, times) {
        if (times === void 0) { times = 0; }
        englishfat.mcarr.push({ "mcname": mcname, "mcplaying": mc.isPlaying, "mcobj": mc, "playtimes": times });
    };
    //设置播放次数
    englishfat.setMcTimes = function (mcname, times) {
        for (var i = 0; i < englishfat.mcarr.length; i++) {
            if (englishfat.mcarr[i].mcname == mcname) {
                englishfat.mcarr[i].playtimes = times;
                return;
            }
        }
    };
    englishfat.getMcarr = function () {
        return englishfat.mcarr;
    };
    englishfat.setTweenarr = function (tw) {
        englishfat.tweenarr.push(tw);
    };
    englishfat.getTweenarr = function () {
        return englishfat.tweenarr;
    };
    englishfat.setTick = function (callback, obj) {
        englishfat.tickerarr.push({ "funtick": callback, "obj": obj });
    };
    //暂停所有动画
    englishfat.PauseAllAnimation = function () {
        for (var i = 0; i < englishfat.mcarr.length; i++) {
            //有父级 说明存在
            if (englishfat.mcarr[i].mcobj.parent && englishfat.mcarr[i].mcobj.isPlaying) {
                //表示暂停了正在播放的动画 下一次启动刚暂停的动画
                englishfat.mcarr[i].mcplaying = true;
                englishfat.mcarr[i].mcobj.stop();
            }
        }
        for (var i = 0; i < englishfat.tweenarr.length; i++) {
            //有父级 说明存在
            if (englishfat.tweenarr[i].parent) {
                egret.Tween.pauseTweens(englishfat.tweenarr[i]);
            }
        }
        for (var i = 0; i < englishfat.tickerarr.length; i++) {
            try {
                egret.stopTick(englishfat.tickerarr[i].funtick, englishfat.tickerarr[i].obj);
            }
            catch (e) { }
        }
    };
    //重启所有动画
    englishfat.resumeAllAnimation = function () {
        for (var i = 0; i < englishfat.mcarr.length; i++) {
            //有父级 说明存在
            if (englishfat.mcarr[i].mcobj.parent && englishfat.mcarr[i].mcplaying) {
                //唤醒后变为false 如果在这段动画 没播放完成之前暂停了 暂停的方法会把它置为true
                englishfat.mcarr[i].mcplaying = false;
                englishfat.mcarr[i].mcobj.play(englishfat.mcarr[i].playtimes);
            }
        }
        for (var i = 0; i < englishfat.tweenarr.length; i++) {
            //有父级 说明存在
            if (englishfat.tweenarr[i].parent) {
                egret.Tween.resumeTweens(englishfat.tweenarr[i]);
            }
        }
        for (var i = 0; i < englishfat.tickerarr.length; i++) {
            try {
                egret.startTick(englishfat.tickerarr[i].funtick, englishfat.tickerarr[i].obj);
            }
            catch (e) { }
        }
    };
    //初始化所有 数组
    englishfat.initArr = function () {
        englishfat.mcarr = [];
        englishfat.tweenarr = [];
    };
    //mc的数组
    englishfat.mcarr = [];
    //缓动动画的数组
    englishfat.tweenarr = [];
    //心跳函数数组 骨骼动画
    englishfat.tickerarr = [];
    return englishfat;
}(egret.DisplayObjectContainer));
egret.registerClass(englishfat,'englishfat');
