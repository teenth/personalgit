/**
 * Created by oo on 2015/11/18.
 */
class math1Unit1Numbertwo extends mathfat{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addBJ,this);
    }
    //所有要暂停的缓动对象
    private pauseTweenObjs = [];
    //添加背景图片
    private resourceTwo=[];
    private shuzi2;
    private mcShu2;
    private mcWwhite;
    //初始化数据
    private basejsonarr:Array<any> = [
        {"data_type":"bitmap","data_name":"beijing","data_key":"beijing",
            "data_addShow":true,
            "data_property":{"data_x":0,"data_y":0},
            "data_func":function(currentObj,classObj){

            }
            },
        {"data_type":"bitmap","data_name":"yun","data_key":"yun1",
            "data_addShow":true,
            "data_property":{"data_x":700,"data_y":100},
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj,{loop:true}).to({x:0},20000);
            }
            },
        {"data_type":"bitmap","data_name":"yun","data_key":"yun2",
            "data_addShow":true,
            "data_property":{"data_x":600,"data_y":200},
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj,{loop:true}).to({x:0},20000);
            }
           },
        {"data_type":"bitmap","data_name":"yun","data_key":"yun3",
            "data_addShow":true,
            "data_property":{"data_x":650,"data_y":150},
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj,{loop:true}).to({x:0},20000);
            }
            },
        {"data_type":"bitmap","data_name":"shan","data_key":"shan",
            "data_addShow":true,
            "data_property":{"data_x":0,"data_y":183},
            "data_func":function(currentObj,classObj){

            }
           },
        {"data_type":"bitmap","data_name":"lang","data_key":"lang1",
            "data_addShow":true,
            "data_property":{"data_fillMode":"repeat","data_width":1500,"data_x":-270,"data_y":340},
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj,{loop:true}).to({x:0},5000).to({x:-270},5000);
            }
            },
        {"data_type":"bitmap","data_name":"yazi","data_key":"yazi1",
            "data_addShow":false,
            "data_property":{"data_scaleX":-1,"data_x":347,"data_y":410,"data_rotation":0},
            "data_func":function(currentObj,classObj){

            }
            },
        {"data_type":"bitmap","data_name":"yazi","data_key":"yazi2",
            "data_addShow":false,
            "data_property":{"data_scaleX":1,"data_x":600,"data_y":410,"data_rotation":0},
            "data_func":function(currentObj,classObj){

            }
            },
        {"data_type":"bitmap","data_name":"2001","data_key":"2001",
            "data_addShow":false,
            "data_property":{"data_x":406,"data_y":370},
            "data_func":function(currentObj,classObj){

            }
            },
        {"data_type":"movieclip","data_name":"shuzi2","data_json":"shuzi2_json","data_png":"shuzi2_png","data_key":"shuzi2",
            "data_addShow":true,
            "data_property":{"data_x":406,"data_y":60,"data_alpha":0},
            "data_frameLabel":[
                 ],
            "data_complete":function(e){
                //下落到落水的音效
                playSoundEffect("math/math1/unit1/numbertwo/duckdownwater1200ms.ogg");
                //数字二开始往下掉
                egret.Tween.get(egretUntil.mcmap.get("shuzi2")).to({y:275},1000).call(function(){
                    egretUntil.mcmap.get("whiteWater").visible = true;
                    //水花动画
                    egretUntil.mcmap.get("whiteWater").gotoAndPlay("start",1);
                },this).to({y:370},500);
            },
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj).to({alpha:1},3000).call(function(){
                    //数字二眨眼
                    playSoundEffect("math/math1/unit1/numbertwo/zhayan50ms.ogg");
                    currentObj.gotoAndPlay("start",2);
                },this);

            }
            },
        {"data_type":"movieclip","data_name":"whiteWater","data_json":"whiteWater_json","data_png":"whiteWater_png","data_key":"whiteWater",
            "data_addShow":false,
            "data_property":{"data_x":300,"data_y":190,"data_visible":false},
            "data_frameLabel":[
               ],
            "data_complete":function(e){
                egretUntil.mcmap.get("whiteWater").visible = false;
                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(500).
                    call(function(){playSoundEffect("math/math1/unit1/numbertwo/ducktophead70ms.ogg");},this).wait(2700).call(function(){
                        playSoundEffect("math/math1/unit1/numbertwo/duckdivewater180ms.ogg");
                    },this);
                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(1500).call(function(){playSoundEffect("math/math1/unit1/numbertwo/ducktophead70ms.ogg");},this);

                //var t3 =egret.setTimeout(function(){playSoundEffect("math/math1/unit1/numbertwo/duckdivewater180ms.ogg");},this,3300,"egret");

                //鸭子开始出现
                egret.Tween.get(egretUntil.bmmap.get("yazi1")).wait(100).call(function(){
                    playSoundEffect("math/math1/unit1/numbertwo/2likeduck.ogg");
                }).to({y:220},1000,egret.Ease.backInOut).
                    wait(2000).to({rotation:45,y:350},1000).to({y:420},1000);
                egret.Tween.get(egretUntil.bmmap.get("yazi2")).wait(1100).to({y:220},1000,egret.Ease.backInOut).wait(1000).
                    to({rotation:-45,y:350},1000).to({y:420},1000);
                egret.Tween.get(egretUntil.bmmap.get("2001")).wait(6000).to({y:100},1500).call(function(){
                    playSoundEffect("math/math1/unit1/numbertwo/zhes2.ogg");
                    // viewManager.getInstance().dispatchEvent(this.viewmanagerevent);
                },this);
            },
            "data_func":function(currentObj,classObj){
                currentObj.visible = false;
                currentObj.gotoAndStop("start");
            }
            },
        {"data_type":"bitmap","data_name":"lang","data_key":"lang2",
            "data_addShow":true,
            "data_property":{"data_fillMode":"repeat","data_width":1500,"data_x":-275,"data_y":355},
            "data_func":function(currentObj,classObj){
                egret.Tween.get(currentObj,{loop:true}).to({x:-530},5000).to({x:-275},5000);
            }
            },
        {"data_type":"bitmap","data_name":"shui","data_key":"shui",
            "data_addShow":true,
            "data_property":{"data_fillMode":"repeat","data_width":960,"data_x":0,"data_y":380},
            "data_func":function(currentObj,classObj){

            }
            }
    ];
    private addBJ(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.addBJ,this);
        //添加自定义事件
        this.addCommonPer(staticVarUntil.MATH_1_UNIT_1_NUMBERTHREE,staticVarUntil.MATH_1_UNIT_1_NUMBERTWO,this);
        for(var i = 0;i<this.basejsonarr.length;i++){
            if(this.basejsonarr[i].data_type == "bitmap"){
                var bm = egretUntil.createBitmapByName(this.basejsonarr[i].data_name,this.basejsonarr[i].data_key);
                this.addChild(bm);
                bm.visible = this.basejsonarr[i].data_visible;
            }else if(this.basejsonarr[i].data_type == "movieclip"){
                var mc = egretUntil.createMovieClip(this.basejsonarr[i].data_json,this.basejsonarr[i].data_png,this.basejsonarr[i].data_name,this.basejsonarr[i].data_key);
                this.addChild(mc);
                mc.visible = this.basejsonarr[i].data_visible;
            }
        }
    }
    public start(){
        //初始化数据之前 map里面已经生成了对象
        //初始化所有数据
        for(var i =0 ;i<this.basejsonarr.length;i++){
            var map;
            var targ = this.basejsonarr[i];
            (function(targ){
                if(targ.data_type == "bitmap"){
                    map = egretUntil.bmmap;
                }else if(targ.data_type == "movieclip"){
                    map = egretUntil.mcmap;
                    //移除不了监听事件 只能判断有没有 有就不添加 没有就添加
                    if(!map.get(targ["data_key"]).hasEventListener(egret.Event.COMPLETE)){
                        //是序列帧就添加监听事件
                        map.get(targ["data_key"]).addEventListener(egret.Event.COMPLETE,function(e:egret.Event){
                            targ.data_complete(e);
                        });
                    }
                    if(!map.get(targ["data_key"]).hasEventListener(egret.MovieClipEvent.FRAME_LABEL)){
                        map.get(targ["data_key"]).addEventListener(egret.MovieClipEvent.FRAME_LABEL,function(e:egret.MovieClipEvent){
                            for(var j = 0;j<targ.data_frameLabel.length;j++){
                                if(e.frameLabel == targ.data_frameLabel[j].frameLabel){
                                    targ.data_frameLabel[j].frameLabelEvent(map.get(targ["data_key"]));
                                }
                            }
                        });
                    }
                }
                for(var key in targ){
                    if(key == "data_property"){
                        var targprop = targ[key];
                        for(var k in targprop){
                            var str = k.replace("data_","");
                            map.get(targ["data_key"])[str] = targprop[k];
                        }
                    }else{
                        var str = key.replace("data_","");
                        map.get(targ["data_key"])[str] = targ[key];
                    }
                    if(key == "data_func"){
                        targ.data_func(map.get(targ["data_key"]),this);
                    }
                }
            }(targ));

        }
    }
    //设置对象的宽高
    public setProXY(x,y){
        this.x = x;
        this.y = y;
    }
    //数字2的动画
    public numEye(){
        this.start();
    }
    //回调安卓端的声音
    public handleAudio(data){
        if(data.indexOf("2likeduck")>0){
            playSoundEffect("math/math1/unit1/numbertwo/swimingwater.ogg");
        }else if(data.indexOf("math/math1/unit1/numbertwo/zhes2")>=0){
            viewManager.getInstance().dispatchEvent(this.getViewmanagerevent());
        }
    }
    //所有需要管理的资源
    public managerResource(){
       stopSoundEffect();

    }
}