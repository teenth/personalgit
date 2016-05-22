/**
 * Created by oo on 2015/12/2.
 */
var math1Unit1Numberone = (function (_super) {
    __extends(math1Unit1Numberone, _super);
    function math1Unit1Numberone() {
        _super.call(this);
        this.scenIndex = 0;
        //初始化数据数组
        this.basejsonarr = [{ "lessonType": "math", "lessonId": 1, "unitId": 1, "unitContent": [[
                        { "data_type": "bitmap", "data_name": "number1bg_png", "data_key": "number1bg_png",
                            "data_addShow": true,
                            "data_property": { "data_visible": true, "data_x": 0, "data_y": 0 },
                            "data_func": function (currentObj, classObj) {
                                classObj.typeSign = "number1bg_png";
                            } },
                        { "data_type": "movieclip", "data_json": "jump1_json", "data_png": "jump1_png", "data_name": "jump1", "data_key": "jump1",
                            "data_frameLabel": [
                                { "frameLabel": "@fallmove0", "frameLabelEvent": function (currentObj) { playSoundEffect("math/math1/unit1/numberone/onejump60ms.ogg"); } },
                                { "frameLabel": "@fallmove1", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 32; } },
                                { "frameLabel": "@fallmove2", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 32; } },
                                { "frameLabel": "@fallmove3", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 32; } },
                                { "frameLabel": "@fallmove4", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 32; } },
                                { "frameLabel": "@fallmove5", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 32; } },
                                { "frameLabel": "@fallmove6", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 22; } },
                                { "frameLabel": "@fallmove7", "frameLabelEvent": function (currentObj) { currentObj.x = currentObj.x - 22; if (currentObj.x == 412) {
                                        currentObj.gotoAndPlay("eye", 1);
                                    } } }
                            ],
                            "data_complete": function (e) {
                                egretUntil.mcmap.get("baozhaCould").visible = true;
                                egretUntil.mcmap.get("baozhaCould").gotoAndPlay("start", 1);
                                playSoundEffect("math/math1/unit1/numberone/1likepen.ogg");
                                //爆炸变铅笔
                                playSoundEffect("math/math1/unit1/numberone/onechangepen80ms.ogg");
                            },
                            "data_addShow": true,
                            "data_property": { "data_visible": true, "data_x": 820, "data_y": 160 },
                            "data_func": function (currentObj, classObj) {
                                currentObj.gotoAndPlay("start", 2);
                                classObj.typeSign = "jump1";
                            } },
                        { "data_type": "movieclip", "data_json": "baozhaCould_json", "data_png": "baozhaCould_png", "data_name": "baozhaCould", "data_key": "baozhaCould",
                            "data_frameLabel": [{ "frameLabel": "@fallstart", "frameLabelEvent": function (currentObj) {
                                        egretUntil.mcmap.get("jump1").visible = false;
                                        egretUntil.mcmap.get("movePen").visible = true;
                                        egretUntil.mcmap.get("movePen").gotoAndStop("start");
                                    } }],
                            "data_complete": function (e) {
                                egretUntil.mcmap.get("baozhaCould").visible = false;
                                egretUntil.mcmap.get("movePen").gotoAndPlay("start", 1);
                                playSoundEffect("math/math1/unit1/numberone/movepen70ms.ogg");
                            },
                            "data_addShow": false,
                            "data_property": { "data_visible": false, "data_x": 210, "data_y": 48 },
                            "data_func": function (currentObj, classObj) {
                                classObj.typeSign = "baozhaCould";
                            }
                        },
                        { "data_type": "movieclip", "data_json": "movePen_json", "data_png": "movePen_png", "data_name": "movePen", "data_key": "movePen",
                            "data_addShow": false,
                            "data_property": { "data_visible": false, "data_x": 440, "data_y": 15 },
                            "data_frameLabel": [],
                            "data_complete": function (e) {
                                egretUntil.mcmap.get("draw1").visible = true;
                                egretUntil.mcmap.get("movePen").visible = false;
                                egretUntil.mcmap.get("draw1").gotoAndPlay("start", 1);
                                playSoundEffect("math/math1/unit1/numberone/drawone650ms.ogg");
                                egretUntil.bmmap.get("paper_png").visible = true;
                                egret.Tween.get(egretUntil.bmmap.get("paper_png")).to({ alpha: 1 }, 200);
                            },
                            "data_func": function (currentObj, classObj) {
                                classObj.typeSign = "movePen";
                            }
                        },
                        { "data_type": "bitmap", "data_name": "paper_png", "data_key": "paper_png",
                            "data_property": { "data_visible": false, "data_y": 67, "data_alpha": 0, "data_x": 328 },
                            "data_func": function (currentObj, classObj) {
                                classObj.typeSign = "paper_png";
                            }
                        },
                        { "data_type": "movieclip", "data_json": "draw1_json", "data_png": "draw1_png", "data_name": "draw1", "data_key": "draw1",
                            "data_property": { "data_visible": false, "data_x": 460, "data_y": 15 },
                            "data_frameLabel": [],
                            "data_complete": function (e) {
                                egretUntil.createSetTimer(function () { playSoundEffect("math/math1/unit1/numberone/zhes1.ogg"); }, this, 1000, "egret");
                            },
                            "data_func": function (currentObj, classObj) {
                                classObj.typeSign = "draw1";
                            }
                        }
                    ], [
                        { "data_type": "bitmap", "data_name": "beijing", "data_key": "beijing",
                            "data_addShow": true,
                            "data_property": { "data_x": 0, "data_y": 0 },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "bitmap", "data_name": "yun", "data_key": "yun1",
                            "data_addShow": true,
                            "data_property": { "data_x": 700, "data_y": 100 },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj, { loop: true }).to({ x: 0 }, 20000);
                            }
                        },
                        { "data_type": "bitmap", "data_name": "yun", "data_key": "yun2",
                            "data_addShow": true,
                            "data_property": { "data_x": 600, "data_y": 200 },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj, { loop: true }).to({ x: 0 }, 20000);
                            }
                        },
                        { "data_type": "bitmap", "data_name": "yun", "data_key": "yun3",
                            "data_addShow": true,
                            "data_property": { "data_x": 650, "data_y": 150 },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj, { loop: true }).to({ x: 0 }, 20000);
                            }
                        },
                        { "data_type": "bitmap", "data_name": "shan", "data_key": "shan",
                            "data_addShow": true,
                            "data_property": { "data_x": 0, "data_y": 183 },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "bitmap", "data_name": "lang", "data_key": "lang1",
                            "data_addShow": true,
                            "data_property": { "data_fillMode": "repeat", "data_width": 1500, "data_x": -270, "data_y": 340 },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj, { loop: true }).to({ x: 0 }, 5000).to({ x: -270 }, 5000);
                            }
                        },
                        { "data_type": "bitmap", "data_name": "yazi", "data_key": "yazi1",
                            "data_addShow": true,
                            "data_property": { "data_scaleX": -1, "data_x": 347, "data_y": 410, "data_rotation": 0 },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "bitmap", "data_name": "yazi", "data_key": "yazi2",
                            "data_addShow": true,
                            "data_property": { "data_scaleX": 1, "data_x": 600, "data_y": 410, "data_rotation": 0 },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "bitmap", "data_name": "2001", "data_key": "2001",
                            "data_addShow": true,
                            "data_property": { "data_x": 406, "data_y": 370 },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "movieclip", "data_name": "shuzi2", "data_json": "shuzi2_json", "data_png": "shuzi2_png", "data_key": "shuzi2",
                            "data_addShow": true,
                            "data_property": { "data_x": 406, "data_y": 60, "data_alpha": 0 },
                            "data_frameLabel": [],
                            "data_complete": function (e) {
                                //下落到落水的音效
                                playSoundEffect("math/math1/unit1/numbertwo/duckdownwater1200ms.ogg");
                                //数字二开始往下掉
                                egret.Tween.get(egretUntil.mcmap.get("shuzi2")).to({ y: 275 }, 1000).call(function () {
                                    egretUntil.mcmap.get("whiteWater").visible = true;
                                    //水花动画
                                    egretUntil.mcmap.get("whiteWater").gotoAndPlay("start", 1);
                                }, this).to({ y: 370 }, 500);
                            },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj).to({ alpha: 1 }, 3000).call(function () {
                                    //数字二眨眼
                                    playSoundEffect("math/math1/unit1/numbertwo/zhayan50ms.ogg");
                                    currentObj.gotoAndPlay("start", 2);
                                }, this);
                            }
                        },
                        { "data_type": "movieclip", "data_name": "whiteWater", "data_json": "whiteWater_json", "data_png": "whiteWater_png", "data_key": "whiteWater",
                            "data_addShow": false,
                            "data_property": { "data_x": 300, "data_y": 190, "data_visible": false },
                            "data_frameLabel": [],
                            "data_complete": function (e) {
                                egretUntil.mcmap.get("whiteWater").visible = false;
                                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(500).
                                    call(function () { playSoundEffect("math/math1/unit1/numbertwo/ducktophead70ms.ogg"); }, this).wait(2700).call(function () {
                                    playSoundEffect("math/math1/unit1/numbertwo/duckdivewater180ms.ogg");
                                }, this);
                                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(1500).call(function () { playSoundEffect("math/math1/unit1/numbertwo/ducktophead70ms.ogg"); }, this);
                                //var t3 =egret.setTimeout(function(){playSoundEffect("math/math1/unit1/numbertwo/duckdivewater180ms.ogg");},this,3300,"egret");
                                //鸭子开始出现
                                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(100).call(function () {
                                    playSoundEffect("math/math1/unit1/numbertwo/2likeduck.ogg");
                                }).to({ y: 220 }, 1000, egret.Ease.backInOut).
                                    wait(2000).to({ rotation: 45, y: 350 }, 1000).to({ y: 420 }, 1000);
                                egret.Tween.get(egretUntil.bmmap.get("yazi2")).wait(1100).to({ y: 220 }, 1000, egret.Ease.backInOut).wait(1000).
                                    to({ rotation: -45, y: 350 }, 1000).to({ y: 420 }, 1000);
                                egret.Tween.get(egretUntil.bmmap.get("2001")).wait(6000).to({ y: 100 }, 1500).call(function () {
                                    playSoundEffect("math/math1/unit1/numbertwo/zhes2.ogg");
                                    // viewManager.getInstance().dispatchEvent(this.viewmanagerevent);
                                }, this);
                            },
                            "data_func": function (currentObj, classObj) {
                                currentObj.visible = false;
                                currentObj.gotoAndStop("start");
                            }
                        },
                        { "data_type": "bitmap", "data_name": "lang", "data_key": "lang2",
                            "data_addShow": true,
                            "data_property": { "data_fillMode": "repeat", "data_width": 1500, "data_x": -275, "data_y": 355 },
                            "data_func": function (currentObj, classObj) {
                                egret.Tween.get(currentObj, { loop: true }).to({ x: -530 }, 5000).to({ x: -275 }, 5000);
                            }
                        },
                        { "data_type": "bitmap", "data_name": "shui", "data_key": "shui",
                            "data_addShow": true,
                            "data_property": { "data_fillMode": "repeat", "data_width": 960, "data_x": 0, "data_y": 380 },
                            "data_func": function (currentObj, classObj) {
                            }
                        }
                    ],
                    [
                        { "data_type": "bitmap", "data_name": "numberThreeBg_png", "data_key": "numberThreeBg_png",
                            "data_addShow": true,
                            "data_property": { "data_x": 0, "data_y": 0, },
                            "data_func": function (currentObj, classObj) {
                            }
                        },
                        { "data_type": "bitmap", "data_name": "numberThree_png", "data_key": "numberThree_png",
                            "data_addShow": false,
                            "data_property": { "data_x": 476, "data_y": 361,
                                "data_rotation": 20, "data_scaleX": -1, "data_visible": false
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
                            "data_property": { "data_display_x": 900, "data_display_y": 350, "data_animation_timeScale": 4, "data_display_visible": true, "data_display_alpha": 1, "data_display_scaleX": 1 },
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
                            }
                        },
                        { "data_type": "dragonbones", "data_json": "ear_json", "data_txt": "eartxt_json", "data_png": "eartxt_png", "data_name": "ear", "data_key": "ear1",
                            "data_addShow": false,
                            "data_property": { "data_display_x": 1074, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_display_rotation": 0 },
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
                            "data_property": { "data_display_x": 1252, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_display_rotation": 0 },
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
                            "data_property": { "data_display_x": 1430, "data_display_y": 350, "data_display_visible": false, "data_animation_timeScale": 3, "data_display_rotation": 0 },
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
                    ]] }];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addNumber, this);
    }
    var d = __define,c=math1Unit1Numberone,p=c.prototype;
    p.addNumber = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addNumber, this);
        staticVarUntil.numbersign = staticVarUntil.MATH_1_UNIT_1_NUMBERONE;
        //继承父类公共属性
        //  this.addCommonPer(this.math1unit1numbertwosign,this,this.math1unit1numberonesign);
        //  this.addCommonPer(staticVarUntil.MATH_1_UNIT_1_NUMBERTWO,this,staticVarUntil.MATH_1_UNIT_1_NUMBERONE);
        //载入文件
        for (var i = 0; i < this.basejsonarr.length; i++) {
            var conL = this.basejsonarr[i].unitContent;
            for (var t = 0; t < conL.length; t++) {
                var con = conL[t];
                var conta = new egret.DisplayObjectContainer();
                egretUntil.conmap.set(t, conta);
                for (var j = 0; j < con.length; j++) {
                    if (con[j].data_type == "bitmap") {
                        var bm = egretUntil.createBitmapByName(con[j].data_name, con[j].data_key);
                        conta.addChild(bm);
                        bm.visible = con[j].data_addShow;
                    }
                    else if (con[j].data_type == "movieclip") {
                        var mc = egretUntil.createMovieClip(con[j].data_json, con[j].data_png, con[j].data_name, con[j].data_key);
                        conta.addChild(mc);
                        mc.visible = con[j].data_addShow;
                    }
                    else if (con[j].data_type == "dragonbones") {
                        var db = egretUntil.createDragonBones(con[j].data_json, con[j].data_txt, con[j].data_png, con[j].data_name, con[j].data_key);
                        conta.addChild(db.display);
                        dragonBones.WorldClock.clock.add(db);
                        db.display.visible = con[j].data_addShow;
                    }
                }
            }
        }
        //添加第一个场景
        this.addChild(egretUntil.conmap.get(0));
    };
    p.start = function () {
        //初始化数据之前 map里面已经生成了对象
        //初始化所有数据
        for (var i = 0; i < this.basejsonarr.length; i++) {
            var conL = this.basejsonarr[i].unitContent;
            var con = conL[this.scenIndex];
            for (var t = 0; t < con.length; t++) {
                var map;
                var targ = con[t];
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
                        if (!staticVarUntil.dbTimerStart) {
                            staticVarUntil.dbTimerStart = true;
                            egret.startTick(dbStartDragonBone, this);
                        }
                    }
                    for (var key in targ) {
                        if (key == "data_property") {
                            var targprop = targ[key];
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
        }
    };
    //回调安卓端的声音
    p.handleAudio = function (data) {
        if (data.indexOf("1likepen") > 0) {
            playSoundEffect("math/math1/unit1/numberone/thinandlong.ogg");
        }
        else if (data.indexOf("math/math1/unit1/numberone/zhes1") >= 0) {
            // viewManager.getInstance().dispatchEvent(this.viewmanagerevent);
            this.scenIndex++;
            this.addChild(egretUntil.conmap.get(1));
            // this.removeChild(egretUntil.conmap.get(0));
            changeScenceAnimation.pullSceenRightToLeft(egretUntil.conmap.get(1), "", this.start, this);
        }
        else if (data.indexOf("2likeduck") > 0) {
            playSoundEffect("math/math1/unit1/numbertwo/swimingwater.ogg");
        }
        else if (data.indexOf("math/math1/unit1/numbertwo/zhes2") >= 0) {
            //viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
            this.scenIndex++;
            this.addChild(egretUntil.conmap.get(2));
            changeScenceAnimation.pullSceenRightToLeft(egretUntil.conmap.get(2), "", this.start, this);
        }
    };
    //所有需要管理的资源
    p.managerResource = function () {
    };
    //设置对象的宽高
    p.setProXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return math1Unit1Numberone;
}(math1Unit1));
egret.registerClass(math1Unit1Numberone,'math1Unit1Numberone');
