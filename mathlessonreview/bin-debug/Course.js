/**
 * Created by oo on 2016/4/25.
 */
var Course = (function (_super) {
    __extends(Course, _super);
    function Course() {
        _super.apply(this, arguments);
        //单题错误数
        this.sigletitlewrong = 0;
        //当前的状态 播放图片 还是序列帧 。。。
        this.currentstate = "";
        //事件对象
        this.viewmanagerevent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    }
    var d = __define,c=Course,p=c.prototype;
    //添加个各类相同的属性
    p.addCommonPer = function (eventType, obj, unitsign) {
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        staticVarUntil.courseunitsign = unitsign;
        staticVarUntil.numbersign = unitsign;
    };
    return Course;
}(egret.DisplayObjectContainer));
egret.registerClass(Course,'Course');
