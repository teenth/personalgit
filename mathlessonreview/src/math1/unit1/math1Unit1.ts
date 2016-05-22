/**
 * Created by oo on 2016/4/21.
 */
class math1Unit1 extends Course implements CourseInface{
    init() {
        this.sigletitlewrong = 0;
        this.addChild(this.math1unit1numberone);
    }

    managerData() {
    }
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.stageLoadingAdd,this);
    }
    public math1unit1numberone:math1Unit1Numberone;
    public math1unit1numbertwo:math1Unit1Numbertwo;
    public math1unit1numberthree:math1Unit1Numberthree;

    public math1unit1numberonesign:string = "math1unit1numberone";
    public math1unit1numbertwosign:string = "math1unit1numbertwo";
    public math1unit1numberthreesign:string = "math1unit1numberthree";
    //相关信息的添加
    private stageLoadingAdd() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.stageLoadingAdd, this);
        //添加个各类相同的属性
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_2,this,staticVarUntil.MATH_1_UNIT_1);

        this.math1unit1numberone = new math1Unit1Numberone();
        this.math1unit1numbertwo = new math1Unit1Numbertwo();
        this.math1unit1numberthree = new math1Unit1Numberthree();
    }
    //初始化监听对象
    private initListener(){
        this.addEventListener(viewManagerEvent.VIEW_MANA_EVENT,this.changeContent,this);
    }
    private changeContent(e:viewManagerEvent){
        switch (e.eventType){

        }
    }
}