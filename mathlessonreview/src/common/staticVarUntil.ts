/**
 * Created by oo on 2016/1/18.
 */
class staticVarUntil{
    //指明是哪个数字里面的声音或者弹星里面的声音
    public static numbersign="";
    //本小结结束要跳转到下个小结
    public static mathunitnum="";
    //本小结的标志
    public static courseunitsign="";
    //public static MATH_1_UNIT_1_NUMBERONE="math1unit1numberone";
    //public static MATH_1_UNIT_1_NUMBERTWO="math1unit1numbertwo";
    //public static MATH_1_UNIT_1_NUMBERTHREE="math1unit1numberthree";
    //public static MATH_1_UNIT_2_NUMBERONE="math1unit2numberone";
    //public static MATH_1_UNIT_2_NUMBERTWO="math1unit2numbertwo";
    //public static MATH_1_UNIT_2_NUMBERTHREE="math1unit2numberthree";
    //public static MATH_1_UNIT_3_NUMBERONE="math1unit3numberone";
    //public static MATH_1_UNIT_3_NUMBERTWO="math1unit3numbertwo";
    //public static MATH_1_UNIT_3_NUMBERTHREE="math1unit3numberthree";
    //public static ENGLISH_1_UNIT_1_STUDY="english1unit1study";
    //public static ENGLISH_1_UNIT_2_TEST="english1unit2test";
    //public static ENGLISH_1_UNIT_3_TEST="english1unit3test";
    public static MATH_1_UNIT_1 = "math1unit1";
    public static MATH_1_UNIT_2 = "math1unit2";
    public static MATH_1_UNIT_3 = "math1unit3";
    //public static ENDVIEW = "endview";
    public static MATH_1_UNIT_1_NUMBERONE:string = "math1_unit1_numberone";
    public static MATH_1_UNIT_1_NUMBERTWO:string = "math1_unit1_numbertwo";
    public static MATH_1_UNIT_1_NUMBERTHREE:string = "math1_unit1_numberthree";
    public static MATH_1_UNIT_2_NUMBERONE:string = "math1_unit2_numberone";
    public static MATH_1_UNIT_2_NUMBERTWO:string = "math1_unit2_numbertwo";
    public static MATH_1_UNIT_2_NUMBERTHREE:string = "math1_unit2_numberthree";
    public static MATH_1_UNIT_3_NUMBERONE:string = "math1_unit3_numberone";
    public static MATH_1_UNIT_3_NUMBERTWO:string = "math1_unit3_numbertwo";
    public static MATH_1_UNIT_3_NUMBERTHREE:string = "math1_unit3_numberthree";
    public static ENGLISH_1_UNIT_1_STUDY:string = "english1_unit1_study";
    public static ENGLISH_1_UNIT_2_TEST:string = "english1_unit2_test";
    public static ENGLISH_1_UNIT_3_TEST:string = "english1_unit3_test";
    public static ENDVIEW:string = "endview";
    //asr返回错误次数
    public static getasrerror:number=0;
    //每一题的正确答案
    public static rightresulte:number=0;
    //每一题的答错次数
    public static everytitlewrongtimes:number =0;
    //判断是否是通过asr答错的
    public static ispassasr:boolean = false;
    //总错误次数(单独的每一节 unit1 unit2)
    public static totalwrong:number = 0;
    //总成绩
    public static totalgrade:number = 0;
    //考考你每题要考的数的随机数组
    public static testnumarr =[1,2,3];
    //是否有金币
    public static iscoin;
    //是否启动骨骼定时器
    public static dbTimerStart:boolean = false;
}