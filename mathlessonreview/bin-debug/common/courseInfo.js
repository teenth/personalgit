/**
 * Created by oo on 2016/4/12.
 */
function courseInfo(coursenumbersign) {
    if (coursenumbersign == staticVarUntil.MATH_1_UNIT_1) {
        return { "course": "math-1-1", "next_unit": "math-1-2" };
    }
    else if (coursenumbersign == staticVarUntil.MATH_1_UNIT_2) {
        return { "course": "math-1-2", "next_unit": "math-1-3" };
    }
    else if (coursenumbersign == staticVarUntil.MATH_1_UNIT_3) {
        return { "course": "math-1-3", "next_unit": "" };
    }
    else if (coursenumbersign == staticVarUntil.ENGLISH_1_UNIT_1_STUDY) {
        return { "course": "english-1-1", "next_unit": "english-1-2" };
    }
    else if (coursenumbersign == staticVarUntil.ENGLISH_1_UNIT_2_TEST) {
        return { "course": "english-1-2", "next_unit": "english-1-3" };
    }
    else if (coursenumbersign == staticVarUntil.ENGLISH_1_UNIT_3_TEST) {
        return { "course": "english-1-3", "next_unit": "" };
    }
}
