/**
 * Created by oo on 2016/1/15.
 */
var egretUntil = (function () {
    function egretUntil() {
    }
    var d = __define,c=egretUntil,p=c.prototype;
    egretUntil.createBitmapByName = function (name, key_name) {
        if (key_name === void 0) { key_name = name; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        egretUntil.bmmap.set(key_name, result);
        return result;
    };
    //创建序列帧
    egretUntil.createMovieClip = function (data, txtr, movieName, key_moviename) {
        if (key_moviename === void 0) { key_moviename = movieName; }
        var data = RES.getRes(data);
        var txtr = RES.getRes(txtr);
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData(movieName));
        egretUntil.mcmap.set(key_moviename, mc);
        return mc;
    };
    //创建急速骨骼动画
    egretUntil.createDragonBones = function (dragonbonesData_json, textureData_txt, texture_txt, FastArmature, key_FastArmature) {
        if (key_FastArmature === void 0) { key_FastArmature = FastArmature; }
        var dragonbonesData = RES.getRes(dragonbonesData_json); //numberThree_json ear_json
        var textureData = RES.getRes(textureData_txt); //numberThreetxt_json eartxt_json
        var texture = RES.getRes(texture_txt); //numberThreetxt_png eartxt_png
        var dragonbonesFactory = new dragonBones.EgretFactory();
        dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
        dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = dragonbonesFactory.buildFastArmature(FastArmature); //构建FastArmature
        armature.enableAnimationCache(30); //开启数据缓存，30代表采样帧频，推荐设置为12~30，达到性能和动画流畅度的最佳平衡点。
        egretUntil.dbmap.set(key_FastArmature, armature);
        return armature;
    };
    //创建缓动动画
    egretUntil.createTween = function (obj, callback) {
        callback();
        egretUntil.tweenarr.push(obj);
        return obj;
    };
    //创建定时器
    egretUntil.createSetTimer = function (callback, $this, delaytimer, args) {
        var t = egret.setTimeout(callback, $this, delaytimer, args);
        egretUntil.settimerarr.push(t);
        return t;
    };
    //舞台的宽高
    egretUntil.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    egretUntil.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    //随机集合
    egretUntil.getArrayItems = function (arr, num) {
        //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
        var temp_array = new Array();
        for (var index in arr) {
            temp_array.push(arr[index]);
        }
        //取出的数值项,保存在此数组
        var return_array = new Array();
        for (var i = 0; i < num; i++) {
            //判断如果数组还有可以取出的元素,以防下标越界
            if (temp_array.length > 0) {
                //在数组中产生一个随机索引
                var arrIndex = Math.floor(Math.random() * temp_array.length);
                //将此随机索引的对应的数组元素值复制出来
                return_array[i] = temp_array[arrIndex];
                //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                temp_array.splice(arrIndex, 1);
            }
            else {
                //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                break;
            }
        }
        return return_array;
    };
    //暂停所有的动画
    egretUntil.pauseAllAnimation = function () {
        egretUntil.bmmap.forEach(function (v, k) {
            egret.Tween.pauseTweens(v);
            egret.Tween.removeTweens(v);
        });
        egretUntil.mcmap.forEach(function (v, k) {
            v.stop();
            egret.Tween.pauseTweens(v);
            egret.Tween.removeTweens(v);
            //目前这个移除没有用
            //v.removeEventListener(egret.Event.COMPLETE);
            //v.removeEventListener(egret.MovieClipEvent.FRAME_LABEL);
            //console.log(v.hasEventListener(egret.Event.COMPLETE));
            //console.log(v.hasEventListener(egret.MovieClipEvent.FRAME_LABEL));
        });
        egretUntil.dbmap.forEach(function (v, k) {
            egret.Tween.pauseTweens(v);
            egret.Tween.removeTweens(v);
        });
        if (staticVarUntil.dbTimerStart) {
            staticVarUntil.dbTimerStart = false;
            egret.stopTick(dbStartDragonBone, this);
        }
    };
    //设置初始化的属性
    egretUntil.initProperty = function (obj) {
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    //存放各个场景容器的map
    egretUntil.conmap = new Map();
    //存放图片的名称和map
    egretUntil.bmmap = new Map();
    //根据序列帧的名称和对象创建相应的map
    egretUntil.mcmap = new Map();
    //根据骨骼的名称和对象创建相应的map
    egretUntil.dbmap = new Map();
    //缓动对象的数组
    egretUntil.tweenarr = [];
    //定时器的数组
    egretUntil.settimerarr = [];
    return egretUntil;
}());
egret.registerClass(egretUntil,'egretUntil');
