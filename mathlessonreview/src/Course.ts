/**
 * Created by oo on 2016/4/25.
 */
class Course extends egret.DisplayObjectContainer{
    //单题错误数
    public sigletitlewrong:number = 0;
    //当前的状态 播放图片 还是序列帧 。。。
    public currentstate:string ="";
    //事件对象
    public viewmanagerevent:viewManagerEvent = new viewManagerEvent(viewManagerEvent.VIEW_MANA_EVENT);
    //添加个各类相同的属性
    public addCommonPer(eventType:string,obj:egret.DisplayObjectContainer,unitsign:string){
        //自定义事件
        this.viewmanagerevent.eventType = eventType;
        this.viewmanagerevent.eventObj = obj;
        staticVarUntil.courseunitsign = unitsign;
        staticVarUntil.numbersign = unitsign;
    }

}