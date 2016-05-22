/**
 * Created by oo on 2016/4/21.
 */
var math1Unit1 = (function (_super) {
    __extends(math1Unit1, _super);
    function math1Unit1() {
        _super.call(this);
        this.math1unit1numberonesign = "math1unit1numberone";
        this.math1unit1numbertwosign = "math1unit1numbertwo";
        this.math1unit1numberthreesign = "math1unit1numberthree";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.stageLoadingAdd, this);
    }
    var d = __define,c=math1Unit1,p=c.prototype;
    p.init = function () {
        this.sigletitlewrong = 0;
        this.addChild(this.math1unit1numberone);
    };
    p.managerData = function () {
    };
    //相关信息的添加
    p.stageLoadingAdd = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.stageLoadingAdd, this);
        //添加个各类相同的属性
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_2, this, staticVarUntil.MATH_1_UNIT_1);
        this.math1unit1numberone = new math1Unit1Numberone();
        this.math1unit1numbertwo = new math1Unit1Numbertwo();
        this.math1unit1numberthree = new math1Unit1Numberthree();
    };
    //初始化监听对象
    p.initListener = function () {
        this.addEventListener(viewManagerEvent.VIEW_MANA_EVENT, this.changeContent, this);
    };
    p.changeContent = function (e) {
        switch (e.eventType) {
        }
    };
    return math1Unit1;
}(Course));
egret.registerClass(math1Unit1,'math1Unit1',["CourseInface"]);
