/**
 * Created by oo on 2016/1/18.
 */
var staticVarUntil = (function () {
    function staticVarUntil() {
    }
    var d = __define,c=staticVarUntil,p=c.prototype;
    //指明是哪个数字里面的声音或者弹星里面的声音
    staticVarUntil.numbersign = "";
    //本小结结束要跳转到下个小结
    staticVarUntil.mathunitnum = "";
    //本小结的标志
    staticVarUntil.courseunitsign = "";
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
    staticVarUntil.MATH_1_UNIT_1 = "math1unit1";
    staticVarUntil.MATH_1_UNIT_2 = "math1unit2";
    staticVarUntil.MATH_1_UNIT_3 = "math1unit3";
    //public static ENDVIEW = "endview";
    staticVarUntil.MATH_1_UNIT_1_NUMBERONE = "math1_unit1_numberone";
    staticVarUntil.MATH_1_UNIT_1_NUMBERTWO = "math1_unit1_numbertwo";
    staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE = "math1_unit1_numberthree";
    staticVarUntil.MATH_1_UNIT_2_NUMBERONE = "math1_unit2_numberone";
    staticVarUntil.MATH_1_UNIT_2_NUMBERTWO = "math1_unit2_numbertwo";
    staticVarUntil.MATH_1_UNIT_2_NUMBERTHREE = "math1_unit2_numberthree";
    staticVarUntil.MATH_1_UNIT_3_NUMBERONE = "math1_unit3_numberone";
    staticVarUntil.MATH_1_UNIT_3_NUMBERTWO = "math1_unit3_numbertwo";
    staticVarUntil.MATH_1_UNIT_3_NUMBERTHREE = "math1_unit3_numberthree";
    staticVarUntil.ENGLISH_1_UNIT_1_STUDY = "english1_unit1_study";
    staticVarUntil.ENGLISH_1_UNIT_2_TEST = "english1_unit2_test";
    staticVarUntil.ENGLISH_1_UNIT_3_TEST = "english1_unit3_test";
    staticVarUntil.ENDVIEW = "endview";
    //asr返回错误次数
    staticVarUntil.getasrerror = 0;
    //每一题的正确答案
    staticVarUntil.rightresulte = 0;
    //每一题的答错次数
    staticVarUntil.everytitlewrongtimes = 0;
    //判断是否是通过asr答错的
    staticVarUntil.ispassasr = false;
    //总错误次数(单独的每一节 unit1 unit2)
    staticVarUntil.totalwrong = 0;
    //总成绩
    staticVarUntil.totalgrade = 0;
    //考考你每题要考的数的随机数组
    staticVarUntil.testnumarr = [1, 2, 3];
    //是否启动骨骼定时器
    staticVarUntil.dbTimerStart = false;
    return staticVarUntil;
}());
egret.registerClass(staticVarUntil,'staticVarUntil');
