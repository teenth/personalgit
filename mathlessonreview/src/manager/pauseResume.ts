/**
 * Created by oo on 2016/1/18.
 */
class pauseResume extends egret.Sprite{
    constructor(){
        super();
        this.addEventListener(pauseResumeEvent.PAUSERESUME,this.changeState,this);
    }
    private static instance:pauseResume;
    public static getInstance(){
        if (pauseResume.instance == null) {
            pauseResume.instance = new pauseResume();
        }
        return pauseResume.instance;
    }
    private changeState(e:pauseResumeEvent){
        switch (e.eventType){
            //暂停
            case pauseResumeEvent.PAUSE:
                this.closeView();
                break;
            //开始
            case pauseResumeEvent.RESUME:
                this.openView();
                break;
        }
    }
    //判断锁屏后打开的是哪个界面
    private openView(){
        switch (staticVarUntil.numbersign){
            case staticVarUntil.MATH_1_UNIT_1_NUMBERONE:
                viewManager.getInstance().math1unit1numberone = new math1Unit1Numberone();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numberone);
                viewManager.getInstance().math1unit1numberone.start();
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTWO:
                viewManager.getInstance().math1unit1numbertwo = new math1Unit1Numbertwo();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numbertwo);
                viewManager.getInstance().math1unit1numbertwo.numEye();
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE:
                viewManager.getInstance().math1unit1numberthree = new math1Unit1Numberthree();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit1numberthree);
                viewManager.getInstance().math1unit1numberthree.numberThreeRun();
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                viewManager.getInstance().math1unit2numberone = new math1Unit2Numberone();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numberone);
                viewManager.getInstance().math1unit2numberone.penChangePosY();
                playSoundEffect("math1/unit2/numberone/huabi.ogg",1,1);
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                viewManager.getInstance().math1unit2numbertwo = new math1Unit2Numbertwo();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numbertwo);
                viewManager.getInstance().math1unit2numbertwo.duckSwiming();
                viewManager.getInstance().math1unit2numbertwo.addButtonAndNum();
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                viewManager.getInstance().math1unit2numberthree = new math1Unit2Numberthree();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit2numberthree);
                viewManager.getInstance().math1unit2numberthree.addEarDance();
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                viewManager.getInstance().math1unit3numberone = new math1Unit3Numberone();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numberone);
                viewManager.getInstance().math1unit3numberone.penChangePosY();
                playSoundEffect("math1/unit3/numberone/huabi.ogg",1,1);
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                viewManager.getInstance().math1unit3numbertwo = new math1Unit3Numbertwo();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numbertwo);
                viewManager.getInstance().math1unit3numbertwo.duckSwiming(staticVarUntil.rightresulte);
                viewManager.getInstance().math1unit3numbertwo.duckAcross();
                viewManager.getInstance().math1unit3numbertwo.addButtonAndNum();
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                viewManager.getInstance().math1unit3numberthree = new math1Unit3Numberthree();
                viewManager.getInstance().addChild(viewManager.getInstance().math1unit3numberthree);
                viewManager.getInstance().math1unit3numberthree.addEarDance(staticVarUntil.rightresulte);
                break;
            case staticVarUntil.ENDVIEW:
                viewManager.getInstance().endview = new endView();
                viewManager.getInstance().addChild(viewManager.getInstance().endview);
                break;
            default :
                break;
        }
    }
    //判断要删除的对象
    private closeView(){
        switch (staticVarUntil.numbersign){
            case staticVarUntil.MATH_1_UNIT_1_NUMBERONE:
                viewManager.getInstance().math1unit1numberone.managerResource();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit1numberone);
                viewManager.getInstance().math1unit1numberthree=null;
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTWO:
                viewManager.getInstance().math1unit1numbertwo.managerResource();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit1numbertwo);
                viewManager.getInstance().math1unit1numbertwo=null;
                break;
            case staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE:
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit1numberthree);
                viewManager.getInstance().math1unit1numberthree=null;
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERONE:
                viewManager.getInstance().math1unit2numberone.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numberone);
                viewManager.getInstance().math1unit2numberone = null;
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTWO:
                viewManager.getInstance().math1unit2numbertwo.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numbertwo);
                viewManager.getInstance().math1unit2numbertwo = null;
                break;
            case staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE:
                viewManager.getInstance().math1unit2numberthree.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit2numberthree);
                viewManager.getInstance().math1unit2numberthree = null;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERONE:
                viewManager.getInstance().math1unit3numberone.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numberone);
                viewManager.getInstance().math1unit3numberone = null;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTWO:
                viewManager.getInstance().math1unit3numbertwo.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numbertwo);
                viewManager.getInstance().math1unit3numbertwo = null;
                break;
            case staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE:
                viewManager.getInstance().math1unit3numberthree.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().math1unit3numberthree);
                viewManager.getInstance().math1unit3numberthree = null;
                break;
            case staticVarUntil.ENDVIEW:
            //    viewManager.getInstance().endview.stopAnimation();
                viewManager.getInstance().removeChild(viewManager.getInstance().endview);
                viewManager.getInstance().endview = null;
                break;
            default :
                break;
        }
    }
}