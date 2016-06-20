/**
 * Created by oo on 2016/6/18.
 */
//$(document).ready(function(event) {
//    $("#gotoInput").click(function (event) {
//        $.mobile.changePage("#input");
//    });
//    var inputInfo = new String;
//    $("#btnInput").click(function (event) {
//        inputMsg();
//    });
//    function inputMsg() {
//        var user = window.prompt("请输入名字", "");
//        user = user.replace(/^\s*|\s*\$/gi, "");
//        if (user == "") {
//            alert("请输入名字");
//            inputMsg();
//        } else {
//            $("#textInfo").html(user);
//        }
//    }
//
//    $("#gotoShake").click(function (event) {
//        if ($("#textInfo").html == "请输入名字") {
//            inputMsg();
//            return;
//        } else {
//            $.mobile.changePage("#shake");
//            startWatch();
//        }
//    });
//});
var options = {frequency:300};
var watchID = null;
var previousReading = {x:null,y:null,z:null};
var bound = 5;

function startWatch(){
    navigator.notification.vibrate(5000);
    previousReading = {x:null,y:null,z:null};
    watchID = navigator.accelerometer.watchAcceleration(onSuccess,onError,options);
}
function stopWatch(){
    if(watchID){
        navigator.accelerometer.clearWatch(watchID);
    }
}
function onSuccess(Reading){
    var changes = {};
    if(previousReading.x !== null){
        changes.x = Math.abs(previousReading.x - Reading.x);
        changes.y = Math.abs(previousReading.y - Reading.y);
        changes.z = Math.abs(previousReading.z - Reading.z);
    }
    if(changes.x > bound && changes.y > bound && changes.z > bound){
        stopWatch();
        $("#shakeAnim").removeClass("hideMe");
    }
    previousReading = {x:Reading.x,y:Reading.y,z:Reading.z};
}
function onError(){
    alert("监听加速失败")
}
