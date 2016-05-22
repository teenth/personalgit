/**
 * Created by oo on 2016/2/25.
 */
var endView = (function (_super) {
    __extends(endView, _super);
    function endView() {
        _super.call(this);
        //三个按钮的坐标
        this.buttonproxy = [{ "imgclickname": "clickback", "imgnomalname": "nomalback", "butx": 216, "buty": 308, "signresult": "back" },
            { "imgclickname": "clickreplay", "imgnomalname": "nomalreplay", "butx": 413, "buty": 308, "signresult": "replay" },
            { "imgclickname": "clicknext", "imgnomalname": "nomalnext", "butx": 605, "buty": 308, "signresult": "next" }];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addBeijing, this);
    }
    var d = __define,c=endView,p=c.prototype;
    //添加背景
    p.addBeijing = function () {
        //移除监听
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addBeijing, this);
        //继承父类公共属性
        this.addCommonPer(staticVarUntil.ENDVIEW, staticVarUntil.ENDVIEW, this);
        this.buttonuntil = new buttonUntil();
        var bj = egretUntil.createBitmapByName("bg_png");
        this.addChild(bj);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonEnd, this);
    };
    //背景显示完在显示内容
    p.showContent = function () {
        //背景光
        this.lighting = egretUntil.createBitmapByName("lighting");
        this.addChild(this.lighting);
        mathfat.setTweenarr(this.lighting);
        this.lighting.alpha = 0.5;
        this.lighting.x = 249 + this.lighting.width / 2;
        this.lighting.y = 22 + this.lighting.height / 2;
        this.lighting.anchorOffsetX = this.lighting.width / 2;
        this.lighting.anchorOffsetY = this.lighting.height / 2;
        this.lighting.visible = false;
        //灰色彩虹
        this.huisecaihong = new movieClip();
        this.addChild(this.huisecaihong);
        //彩虹
        this.caihong = new movieClip();
        this.addChild(this.caihong);
        this.caihong.addNumber("caihong_json", "caihong_png", "caihong");
        this.caihong.setProXY(304, 139);
        //白云弹出
        this.cloud = egretUntil.createBitmapByName("cloud");
        this.addChild(this.cloud);
        this.cloud.x = 210 + this.cloud.width / 2;
        this.cloud.y = 240 + this.cloud.height / 2;
        this.cloud.anchorOffsetX = this.cloud.width / 2;
        this.cloud.anchorOffsetY = this.cloud.height / 2;
        this.cloud.scaleX = 0.7;
        this.cloud.scaleY = 0.7;
    };
    //过关界面
    p.passView = function (type, indexss, hasmoney) {
        var _this = this;
        //粒子系统
        this.addParticle();
        //白云弹出缓动动画
        egret.Tween.get(this.cloud).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
            //彩虹序列帧播放
            this.caihong.getMc().gotoAndPlay("start", 1);
            playSoundEffect("common/bouncestar/caihong.ogg");
        }, this);
        this.caihong.getMc().addEventListener(egret.Event.COMPLETE, function (e) {
            //光显示并旋转
            _this.lighting.visible = true;
            animationUntil.spinLoop(_this.lighting);
            _this.system.start();
            //学习课程不显示钱币
            if (type == "study") {
                //学习关卡过关了 肯定有下一关 下一关的序号（在数组中的位置）为2
                _this.addStarAndMoney(false, 2);
            }
            else {
                _this.addStarAndMoney(staticVarUntil.iscoin, indexss);
            }
        }, this);
    };
    //失败界面
    p.overView = function () {
        //白云正常大小
        this.cloud.scaleX = 1;
        this.cloud.scaleY = 1;
        //显示正常彩虹
        this.caihong.getMc().gotoAndPlay("end", 1);
        this.huisecaihong.addNumber("huisecaihong_json", "huisecaihong_png", "huisecaihong");
        this.huisecaihong.setProXY(304, 139);
        egret.Tween.get(this.caihong).to({ alpha: 0 }, 1500).call(function () {
            this.caihong.visible = false;
            this.huisecaihong.getMc().gotoAndPlay("start", 1);
            //光停止旋转
            egret.Tween.removeTweens(this.lighting);
            //失败就是重来 按钮的序号为1
        }, this).call(this.promptButSound, this, [1]).call(this.addButton, this, [1]);
        egret.Tween.get(this.lighting).to({ alpha: 0 }, 1500).call(function () {
            this.lighting.visible = false;
        }, this);
        //背景光旋转并旋转
        this.lighting.visible = true;
        animationUntil.spinLoop(this.lighting);
    };
    //添加粒子系统
    p.addParticle = function () {
        //获取图片
        var texture = RES.getRes("lightingpointParticle_png");
        //获取纹理配置
        var config = RES.getRes("lightingpointParticle_json");
        //创建粒子系统
        this.system = new particle.GravityParticleSystem(texture, config);
        this.addChild(this.system);
        mathfat.setparticlearr(this.system);
    };
    //添加星星和钱币
    p.addStarAndMoney = function (showmoney, indexss) {
        var star = egretUntil.createBitmapByName("star");
        this.addChild(star);
        star.x = 222 + star.width / 2;
        star.y = 302 + star.height / 2;
        star.anchorOffsetX = star.width / 2;
        star.anchorOffsetY = star.height / 2;
        star.scaleX = 0.3;
        star.scaleY = 0.3;
        egret.Tween.get(star).to({ scaleX: 1, scaleY: 1 }, 200).to({ y: star.y - 10 }, 200).
            to({ y: star.y + 10 }, 200).wait(500).to({ x: 827, y: 80, scaleX: 0.2, scaleY: 0.2 }, 500).
            to({ visible: false });
        playSoundEffect("common/bouncestar/starmoney.ogg");
        if (showmoney) {
            var money = egretUntil.createBitmapByName("money");
            this.addChild(money);
            money.x = 618 + money.width / 2;
            money.y = 298 + money.height / 2;
            money.anchorOffsetX = money.width / 2;
            money.anchorOffsetY = money.height / 2;
            money.scaleX = 0.3;
            money.scaleY = 0.3;
            money.visible = false;
            egret.Tween.get(money).wait(300).to({ visible: true }).to({
                scaleX: 1,
                scaleY: 1
            }, 200).to({ y: money.y - 10 }, 200).
                to({ y: money.y + 10 }, 200).wait(200).to({ x: 827, y: 80, scaleX: 0.2, scaleY: 0.2 }, 500).
                to({ visible: false });
        }
        //添加按钮
        egret.Tween.get(this).wait(1300).call(this.addButton, this, [indexss]);
        this.promptButSound(indexss);
    };
    //灰色彩虹(失败界面)
    //添加按钮
    p.addButton = function (buttonshanshuoindex) {
        for (var i = 0; i < this.buttonproxy.length; i++) {
            var but = egretUntil.createBitmapByName(this.buttonproxy[i].imgnomalname);
            but.x = this.buttonproxy[i].butx + but.width / 2;
            but.y = this.buttonproxy[i].buty + but.height / 2;
            but.anchorOffsetX = but.width / 2;
            but.anchorOffsetY = but.height / 2;
            this.addChild(but);
            but.visible = false;
            var butclick = egretUntil.createBitmapByName(this.buttonproxy[i].imgclickname);
            butclick.x = this.buttonproxy[i].butx + butclick.width / 2;
            butclick.y = this.buttonproxy[i].buty + butclick.height / 2;
            butclick.anchorOffsetX = butclick.width / 2;
            butclick.anchorOffsetY = butclick.height / 2;
            this.addChild(butclick);
            butclick.visible = false;
            this.buttonuntil.setButtonarr(but, butclick, this.buttonproxy[i].signresult);
        }
        //第一个按钮
        this.buttonuntil.butrelatearr[0].butobj.scaleX = 0.6;
        this.buttonuntil.butrelatearr[0].butobj.scaleY = 0.6;
        egret.Tween.get(this.buttonuntil.butrelatearr[0].butobj).to({ visible: true }).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.backOut);
        this.buttonuntil.butrelatearr[1].butobj.scaleX = 0.8;
        this.buttonuntil.butrelatearr[1].butobj.scaleY = 0.8;
        egret.Tween.get(this.buttonuntil.butrelatearr[1].butobj).wait(200).to({ visible: true }).to({ scaleX: 1, scaleY: 1 }, 150, egret.Ease.backOut);
        this.buttonuntil.butrelatearr[2].butobj.scaleX = 0.9;
        this.buttonuntil.butrelatearr[2].butobj.scaleY = 0.9;
        egret.Tween.get(this.buttonuntil.butrelatearr[2].butobj).wait(300).to({ visible: true }).to({ scaleX: 1, scaleY: 1 }, 80, egret.Ease.backOut);
        playSoundEffect("common/bouncestar/bouncebutton.ogg");
        egret.Tween.get(this).wait(400).call(this.getArcProgress, this, [this.buttonuntil.butrelatearr[buttonshanshuoindex].butobj.x - 2, this.buttonuntil.butrelatearr[buttonshanshuoindex].butobj.y, this.buttonuntil.butrelatearr[buttonshanshuoindex].butobj.width / 2 - 10]);
    };
    //判断点了哪个按钮
    p.buttonBegin = function (evt) {
        for (var i = 0; i < this.buttonuntil.butrelatearr.length; i++) {
            var ex = evt.stageX;
            var ey = evt.stageY;
            var bx = this.buttonproxy[i].butx;
            var by = this.buttonproxy[i].buty;
            var bw = this.buttonuntil.butrelatearr[i].butobj.width;
            var bh = this.buttonuntil.butrelatearr[i].butobj.height;
            if (ex > bx && ex < bx + bw && ey > by && ey < by + bh) {
                var nmobjclick = this.buttonuntil.butrelatearr[i].numobj;
                var nmobjnomal = this.buttonuntil.butrelatearr[i].butobj;
                mathfat.PauseAllAnimation();
                englishfat.PauseAllAnimation();
                this.downButtonIndex = i;
                nmobjclick.visible = true;
                nmobjnomal.visible = false;
            }
        }
    };
    //触摸结束
    p.buttonEnd = function () {
        if (this.downButtonIndex > -1) {
            var nm = this.buttonuntil.butrelatearr[this.downButtonIndex].numsign;
            if (nm == "back") {
                egret.log("点了返回");
                egret.setTimeout(onBackButtonPressed, this, 500);
            }
            else if (nm == "next") {
                egret.log("点了下一关按钮");
                egret.setTimeout(nextLesson, this, 500);
            }
            else if (nm == "replay") {
                egret.log("点了重来按钮");
                egret.setTimeout(rePlay, this, 500);
            }
            //按钮点击音效
            playSoundEffect("common/bouncestar/starmoney.ogg");
            this.buttonuntil.butrelatearr[this.downButtonIndex].numobj.visible = false;
            this.buttonuntil.butrelatearr[this.downButtonIndex].butobj.visible = true;
            animationUntil.effectJelly(this.buttonuntil.butrelatearr[this.downButtonIndex].butobj);
            this.downButtonIndex = -1;
            operateUntil.endViewCloseTouch();
            this.touchEnabled = false;
        }
    };
    p.getArcProgress = function (x, y, r) {
        var shape = new egret.Shape();
        this.addChild(shape);
        var angle = 0;
        var times = 0;
        egret.startTick(updateChange, this);
        function updateChange(timeStamp) {
            angle += 30;
            changeGraphics(angle);
            angle = angle % 360;
            if (times > 2) {
                shape.graphics.clear();
                egret.stopTick(updateChange, this);
            }
            return true;
        }
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.lineStyle(12, 0xda77ed, 1);
            shape.graphics.drawArc(x, y, r, 0, angle * Math.PI / 180, false);
            shape.graphics.endFill();
            if (angle == 360) {
                times++;
            }
        }
    };
    //设置坐标
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //播放声音
    p.promptButSound = function (soundtype) {
        saveLog("soundtype", soundtype);
        if (soundtype == 2) {
            playSoundEffect("common/bouncestar/nextstop.ogg");
        }
        else if (soundtype == 1) {
            playSoundEffect("common/bouncestar/replay.ogg");
        }
        else if (soundtype == 0) {
            //回到主界面的声音
            operateUntil.endViewOpenTouch();
            this.touchEnabled = true;
        }
    };
    //处理声音的回调
    p.handleAudio = function (data) {
        if (data.indexOf("common/bouncestar/nextstop") >= 0 || data.indexOf("common/bouncestar/replay") >= 0 || data.indexOf("common/bouncestar/lastlesson") >= 0) {
            egret.log("endview进来了");
            operateUntil.endViewOpenTouch();
            this.touchEnabled = true;
        }
    };
    return endView;
}(mathfat));
egret.registerClass(endView,'endView');
