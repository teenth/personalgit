/**
 * Created by oo on 2016/1/14.
 */
class viewManagerEvent extends egret.Event {
    public static VIEW_MANA_EVENT:string = "viewmanaevent";
    public eventType:any;//事件类型
    public eventObj:any;//事件对象
    //public static MATH_1_UNIT_1_NUMBERONE:string = "math1_unit1_numberone";
    //public static MATH_1_UNIT_1_NUMBERTWO:string = "math1_unit1_numbertwo";
    //public static MATH_1_UNIT_1_NUMBERTHREE:string = "math1_unit1_numberthree";
    //public static MATH_1_UNIT_2_NUMBERONE:string = "math1_unit2_numberone";
    //public static MATH_1_UNIT_2_NUMBERTWO:string = "math1_unit2_numbertwo";
    //public static MATH_1_UNIT_2_NUMBERTHREE:string = "math1_unit2_numberthree";
    //public static MATH_1_UNIT_3_NUMBERONE:string = "math1_unit3_numberone";
    //public static MATH_1_UNIT_3_NUMBERTWO:string = "math1_unit3_numbertwo";
    //public static MATH_1_UNIT_3_NUMBERTHREE:string = "math1_unit3_numberthree";
    //public static ENGLISH_1_UNIT_1_STUDY:string = "english1_unit1_study";
    //public static ENGLISH_1_UNIT_2_TEST:string = "english1_unit2_test";
    //public static ENGLISH_1_UNIT_3_TEST:string = "english1_unit3_test";
    //public static ENDVIEW:string = "endview";
    public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false){
        super(type,bubbles,cancelable);
    }
}