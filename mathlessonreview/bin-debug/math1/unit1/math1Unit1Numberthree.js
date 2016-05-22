/**
 * Created by oo on 2015/12/3.
 */
var math1Unit1Numberthree = (function (_super) {
    __extends(math1Unit1Numberthree, _super);
    function math1Unit1Numberthree() {
        _super.call(this);
        //初始化数据
        this.basejsonarr = [
            { "data_type": "bitmap", "data_name": "numberThreeBg_png", "data_key": "numberThreeBg_png",
                "data_addShow": true,
                "data_property": { "data_x": 0, "data_y": 0, },
                "data_func": function (currentObj, classObj) {
                }
            },
            { "data_type": "bitmap", "data_name": "numberThree_png", "data_key": "numberThree_png",
                "data_addShow": false,
                "data_property": { "data_x": 476, "data_y": 361,
                    "data_rotation": 20, "data_scaleX": -1
                },
                "data_func": function (currentObj, classObj) {
                    currentObj.anchorOffsetX = egretUntil.bmmap.get("numberThree_png").width / 2;
                    currentObj.anchorOffsetY = egretUntil.bmmap.get("numberThree_png").height;
                    egret.Tween.get(currentObj).wait(8500).to({ scaleX: 1, rotation: -10 }, 500).wait(500).to({ rotation: 0, y: 250 }, 1000).call(function () {
                        playSoundEffect("math/math1/unit1/numberthree/zhes3.ogg");
                    }, this);
                }
            },
            { "data_type": "movieclip", "data_name": "clock", "data_json": "clock_json", "data_png": "clock_png", "data_key": "clock",
                "data_addShow": false,
                "data_property": { "data_x": 110, "data_y": 150, "data_visible": true },
                "data_func": function (currentObj, classObj) {
                    currentObj.gotoAndPlay("start", -1);
                    egret.Tween.get(currentObj).wait(4000).call(function () {
                        currentObj.gotoAndPlay("clockWork", -1);
                        playSoundEffect("math/math1/unit1/numberthree/naozhongxl2250ms.ogg");
                        playSoundEffect("math/math1/unit1/numberthree/jingbao2050ms.ogg");
                    }, currentObj);
                    playSoundEffect("math/math1/unit1/numberthree/dahulu1450ms.ogg");
                }
            },
            { "data_type": "dragonbones", "data_json": "numberThree_json", "data_txt": "numberThreetxt_json", "data_png": "numberThreetxt_png", "data_name": "numberthree", "data_key": "numberthree",
                "data_addShow": false,
                "data_property": { "data_display_x": 900, "data_display_y": 350, "data_animation_timeScale": 4, "data_display_visible": true, "data_display_alpha": 1 },
                "data_func": function (currentObj, classObj) {
                    currentObj.animation.gotoAndPlay("walk3", -1, -1, 0);
                    playSoundEffect("math/math1/unit1/numberthree/walk6500ms.ogg");
                    egret.Tween.get(currentObj.display).
                        //数字三从右边跑到左边
                        to({ x: -currentObj.display.width }, 5000).
                        //数字三跑到最右边转向
                        to({ scaleX: -1 }).
                        //数字三执行下一个跑步动作
                        call(function () {
                        currentObj.animation.gotoAndPlay("run3");
                    }, this).
                        //数字三跑的重点位置
                        to({ x: egretUntil.bmmap.get("numberThree_png").x + 31, y: 335 }, 2000).
                        //数字三停止跑步
                        call(function () {
                        currentObj.animation.gotoAndStop("run3");
                        egretUntil.bmmap.get("numberThree_png").visible = true;
                        playSoundEffect("math/math1/unit1/numberthree/changeThree1500ms.ogg");
                    }, this).to({ alpha: 0 }, 1000).to({ visible: false });
                    var t1 = egret.startTick(dbStartDragonBone, this);
                    console.log("t1", t1);
                }
            },
            { "data_type": "dragonbones", "data_json": "ear_json", "data_txt": "eartxt_json", "data_png": "eartxt_png", "data_name": "ear", "data_key": "ear1",
                "data_addShow": false,
                "data_property": { "data_display_x": 1074, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_animation_rotation": 0 },
                "data_func": function (currentObj, classObj) {
                    egret.Tween.get(currentObj.display).wait(500).call(function () {
                        currentObj.display.visible = true;
                        currentObj.animation.gotoAndPlay("walkear", 0);
                    }, currentObj);
                    egret.Tween.get(currentObj).wait(4000).call(function () {
                        currentObj.animation.stop();
                    }, currentObj).wait(300).call(function () {
                        currentObj.animation.gotoAndStop("supear", 2);
                    }, currentObj);
                    egret.Tween.get(currentObj.display).wait(2000).to({ x: 300 }, 2000).wait(300).to({ x: 550, y: -300, rotation: 360 }, 1300, egret.Ease.backOut);
                }
            },
            { "data_type": "dragonbones", "data_json": "ear_json", "data_txt": "eartxt_json", "data_png": "eartxt_png", "data_name": "ear", "data_key": "ear2",
                "data_addShow": false,
                "data_property": { "data_display_x": 1252, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_animation_rotation": 0 },
                "data_func": function (currentObj, classObj) {
                    egret.Tween.get(currentObj.display).wait(1000).call(function () {
                        currentObj.display.visible = true;
                        currentObj.animation.gotoAndPlay("walkear", 0);
                    }, currentObj);
                    egret.Tween.get(currentObj).wait(4000).call(function () {
                        currentObj.animation.stop();
                    }, currentObj).wait(300).call(function () {
                        currentObj.animation.gotoAndStop("supear", 2);
                    }, currentObj);
                    egret.Tween.get(currentObj.display).wait(2000).to({ x: 478 }, 2000).wait(300).to({ x: 1100, y: 100, rotation: 480 }, 1000, egret.Ease.backOut);
                }
            },
            { "data_type": "dragonbones", "data_json": "ear_json", "data_txt": "eartxt_json", "data_png": "eartxt_png", "data_name": "ear", "data_key": "ear3",
                "data_addShow": false,
                "data_property": { "data_display_x": 1430, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_animation_rotation": 0 },
                "data_func": function (currentObj, classObj) {
                    egret.Tween.get(currentObj.display).wait(1500).call(function () {
                        currentObj.display.visible = true;
                        currentObj.animation.gotoAndPlay("walkear", 0);
                    }, currentObj);
                    egret.Tween.get(currentObj).wait(4000).call(function () {
                        currentObj.animation.stop();
                    }, currentObj).wait(300).call(function () {
                        currentObj.animation.gotoAndStop("supear", 2);
                    }, currentObj);
                    egret.Tween.get(currentObj.display).wait(2000).to({ x: 656 }, 2000).wait(300).to({ x: 1000, y: 500, rotation: 720 }, 900, egret.Ease.backOut);
                }
            },
        ];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addnumberThree, this);
    }
    var d = __define,c=math1Unit1Numberthree,p=c.prototype;
    p.addnumberThree = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addnumberThree, this);
        //自定义事件
        this.addCommonPer(staticVarUntil.ENDVIEW, staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE, this);
        for (var i = 0; i < this.basejsonarr.length; i++) {
            if (this.basejsonarr[i].data_type == "bitmap") {
                var bm = egretUntil.createBitmapByName(this.basejsonarr[i].data_name, this.basejsonarr[i].data_key);
                this.addChild(bm);
                bm.visible = this.basejsonarr[i].data_addShow;
            }
            else if (this.basejsonarr[i].data_type == "movieclip") {
                var mc = egretUntil.createMovieClip(this.basejsonarr[i].data_json, this.basejsonarr[i].data_png, this.basejsonarr[i].data_name, this.basejsonarr[i].data_key);
                this.addChild(mc);
                mc.visible = this.basejsonarr[i].data_addShow;
            }
            else if (this.basejsonarr[i].data_type == "dragonbones") {
                var db = egretUntil.createDragonBones(this.basejsonarr[i].data_json, this.basejsonarr[i].data_txt, this.basejsonarr[i].data_png, this.basejsonarr[i].data_name, this.basejsonarr[i].data_key);
                this.addChild(db.display);
                dragonBones.WorldClock.clock.add(db);
                db.display.visible = this.basejsonarr[i].data_addShow;
            }
        }
    };
    p.start = function () {
        //初始化数据之前 map里面已经生成了对象
        //初始化所有数据
        for (var i = 0; i < this.basejsonarr.length; i++) {
            var map;
            var targ = this.basejsonarr[i];
            (function (targ) {
                if (targ.data_type == "bitmap") {
                    map = egretUntil.bmmap;
                }
                else if (targ.data_type == "movieclip") {
                    map = egretUntil.mcmap;
                    //移除不了监听事件 只能判断有没有 有就不添加 没有就添加
                    if (!map.get(targ["data_key"]).hasEventListener(egret.Event.COMPLETE)) {
                        //是序列帧就添加监听事件
                        map.get(targ["data_key"]).addEventListener(egret.Event.COMPLETE, function (e) {
                            targ.data_complete(e);
                        });
                    }
                    if (!map.get(targ["data_key"]).hasEventListener(egret.MovieClipEvent.FRAME_LABEL)) {
                        map.get(targ["data_key"]).addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e) {
                            for (var j = 0; j < targ.data_frameLabel.length; j++) {
                                if (e.frameLabel == targ.data_frameLabel[j].frameLabel) {
                                    targ.data_frameLabel[j].frameLabelEvent(map.get(targ["data_key"]));
                                }
                            }
                        });
                    }
                }
                else if (targ.data_type == "dragonbones") {
                    map = egretUntil.dbmap;
                }
                for (var key in targ) {
                    if (key == "data_property") {
                        var targprop = targ[key];
                        console.log(targprop);
                        for (var k in targprop) {
                            var str = k.replace("data_", "");
                            //判断属性中是否还有还有属性
                            if (str.indexOf("_") >= 0) {
                                //说明还有属性
                                var _str = str.replace("_", ".");
                                eval('map.get(targ["data_key"]).' + _str + "=" + targprop[k]);
                            }
                            else {
                                map.get(targ["data_key"])[str] = targprop[k];
                            }
                        }
                    }
                    if (key == "data_func") {
                        targ.data_func(map.get(targ["data_key"]), this);
                    }
                }
            }(targ));
        }
    };
    //场景转换完成 数字三跑步进场
    p.numberThreeRun = function () {
        this.start();
    };
    //回调安卓端的声音
    p.handleAudio = function (data) {
        if (data.indexOf("3likeear") > 0) {
            playSoundEffect("math/math1/unit1/numberthree/listeningsound.ogg");
        }
        else if (data.indexOf("math/math1/unit1/numberthree/zhes3.ogg") >= 0) {
            //  this.managerResource();
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }
    };
    //设置对象的宽高
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return math1Unit1Numberthree;
}(mathfat));
egret.registerClass(math1Unit1Numberthree,'math1Unit1Numberthree');
