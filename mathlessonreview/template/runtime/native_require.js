
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/particle/particle.js",
	"bin-debug/common/andriodJsUntil.js",
	"bin-debug/common/animationUntil.js",
	"bin-debug/common/asrUntil.js",
	"bin-debug/common/buttonUntil.js",
	"bin-debug/common/changeScenceAnimation.js",
	"bin-debug/common/courseInfo.js",
	"bin-debug/common/dragonBone.js",
	"bin-debug/common/egretUntil.js",
	"bin-debug/math1/mathfat.js",
	"bin-debug/common/endView.js",
	"bin-debug/common/micUntil.js",
	"bin-debug/common/movieClip.js",
	"bin-debug/common/operateUntil.js",
	"bin-debug/common/soundEgret.js",
	"bin-debug/common/staticVarUntil.js",
	"bin-debug/common/timerUntil.js",
	"bin-debug/Course.js",
	"bin-debug/CourseInface.js",
	"bin-debug/customevent/pauseResumeEvent.js",
	"bin-debug/customevent/viewManagerEvent.js",
	"bin-debug/english/englishfat.js",
	"bin-debug/english/interface/interfaceenglish.js",
	"bin-debug/english/unit1/english1Unit1Study.js",
	"bin-debug/english/unit2/createPerson.js",
	"bin-debug/english/unit2/english1Unit2Test.js",
	"bin-debug/english/unit2/siglePersonArr.js",
	"bin-debug/english/unit3/dragPhoto.js",
	"bin-debug/english/unit3/english1Unit3Test.js",
	"bin-debug/english/unit3/picFrameCon.js",
	"bin-debug/english/unit3/touchPlayEffect.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/manager/pauseResume.js",
	"bin-debug/manager/viewManager.js",
	"bin-debug/math1/interface/interfacemath.js",
	"bin-debug/math1/unit1/math1Unit1.js",
	"bin-debug/math1/unit1/math1Unit1Numberone.js",
	"bin-debug/math1/unit1/math1Unit1Numberthree.js",
	"bin-debug/math1/unit1/math1Unit1Numbertwo.js",
	"bin-debug/math1/unit2/math1Unit2Numberone.js",
	"bin-debug/math1/unit2/math1Unit2Numberthree.js",
	"bin-debug/math1/unit2/math1Unit2Numbertwo.js",
	"bin-debug/math1/unit3/math1Unit3Numberone.js",
	"bin-debug/math1/unit3/math1Unit3Numberthree.js",
	"bin-debug/math1/unit3/math1Unit3Numbertwo.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 960,
		contentHeight: 540,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: true,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};