/**
 * Created by oo on 2016/3/14.
 */
var mathfat = (function (_super) {
    __extends(mathfat, _super);
    function mathfat() {
        _super.call(this);
        //事件对象
        this.viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    }
    var d = __define,c=mathfat,p=c.prototype;
    //添加个各类相同的属性
    p.addCommonPer = function (eventType, numbersign, obj) {
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        if (staticVarUntil.numbersign.indexOf("math1unit1") >= 0) {
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_1;
        }
        else if (staticVarUntil.numbersign.indexOf("math1unit2") >= 0) {
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_2;
        }
        else if (staticVarUntil.numbersign.indexOf("math1unit3") >= 0) {
            staticVarUntil.mathunitnum = staticVarUntil.MATH_1_UNIT_3;
        }
        staticVarUntil.numbersign = numbersign;
    };
    //得到要发送的事件
    p.getViewmanagerevent = function () {
        //停止声音的播放
        stopSoundEffect();
        return this.viewmanagerevent;
    };
    mathfat.setMcarr = function (mcname, mc, times) {
        if (times === void 0) { times = 0; }
        mathfat.mcarr.push({ "mcname": mcname, "mcplaying": mc.isPlaying, "mcobj": mc, "playtimes": times });
    };
    //设置播放次数
    mathfat.setMcTimes = function (mcname, times) {
        for (var i = 0; i < mathfat.mcarr.length; i++) {
            if (mathfat.mcarr[i].mcname == mcname) {
                mathfat.mcarr[i].playtimes = times;
                return;
            }
        }
    };
    mathfat.getMcarr = function () {
        return mathfat.mcarr;
    };
    mathfat.setTweenarr = function (tw) {
        mathfat.tweenarr.push(tw);
    };
    mathfat.getTweenarr = function () {
        return mathfat.tweenarr;
    };
    mathfat.setTick = function (callback, obj) {
        mathfat.tickerarr.push({ "funtick": callback, "obj": obj });
    };
    mathfat.setparticlearr = function (particle) {
        mathfat.particlearr.push(particle);
    };
    mathfat.setTimerArr = function (timer) {
        mathfat.timerarr.push(timer);
    };
    //暂停所有动画
    mathfat.PauseAllAnimation = function () {
        for (var i = 0; i < mathfat.mcarr.length; i++) {
            //有父级 说明存在
            if (mathfat.mcarr[i].mcobj.parent && mathfat.mcarr[i].mcobj.isPlaying) {
                //表示暂停了正在播放的动画 下一次启动刚暂停的动画
                mathfat.mcarr[i].mcplaying = true;
                mathfat.mcarr[i].mcobj.stop();
            }
        }
        for (var i = 0; i < mathfat.tweenarr.length; i++) {
            //有父级 说明存在
            if (mathfat.tweenarr[i].parent) {
                egret.Tween.pauseTweens(mathfat.tweenarr[i]);
            }
        }
        for (var i = 0; i < mathfat.tickerarr.length; i++) {
            try {
                egret.stopTick(mathfat.tickerarr[i].funtick, mathfat.tickerarr[i].obj);
            }
            catch (e) { }
        }
        for (var i = 0; i < mathfat.particlearr.length; i++) {
            mathfat.particlearr[i].stop();
        }
        for (var i = 0; i < mathfat.timerarr.length; i++) {
            egret.clearTimeout(mathfat.timerarr[i]);
        }
    };
    //重启所有动画
    mathfat.resumeAllAnimation = function () {
        for (var i = 0; i < mathfat.mcarr.length; i++) {
            //有父级 说明存在
            if (mathfat.mcarr[i].mcobj.parent && mathfat.mcarr[i].mcplaying) {
                //唤醒后变为false 如果在这段动画 没播放完成之前暂停了 暂停的方法会把它置为true
                mathfat.mcarr[i].mcplaying = false;
                mathfat.mcarr[i].mcobj.play(mathfat.mcarr[i].playtimes);
            }
        }
        for (var i = 0; i < mathfat.tweenarr.length; i++) {
            //有父级 说明存在
            if (mathfat.tweenarr[i].parent) {
                egret.Tween.resumeTweens(mathfat.tweenarr[i]);
            }
        }
        for (var i = 0; i < mathfat.tickerarr.length; i++) {
            try {
                egret.startTick(mathfat.tickerarr[i].funtick, mathfat.tickerarr[i].obj);
            }
            catch (e) { }
        }
    };
    //初始化所有 数组
    mathfat.initArr = function () {
        mathfat.mcarr = [];
        mathfat.tweenarr = [];
    };
    //mc的数组
    mathfat.mcarr = [];
    //缓动动画的数组
    mathfat.tweenarr = [];
    //心跳函数数组 骨骼动画
    mathfat.tickerarr = [];
    //粒子系统
    mathfat.particlearr = [];
    //定时器
    mathfat.timerarr = [];
    return mathfat;
}(egret.DisplayObjectContainer));
egret.registerClass(mathfat,'mathfat');
