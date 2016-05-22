/**
 * Created by oo on 2016/1/20.
 */
class buttonUntil extends egret.Sprite{
    constructor(){
        super();
    }

     public butrelatearr = [];
    //判断按了哪个按钮
    public  findButtonIndex(butrelatearr,evt){
        for(var i=0;i<butrelatearr.length;i++){
            if(butrelatearr[i].butobj.x<evt.stageX && evt.stageX<butrelatearr[i].butobj.x+butrelatearr[i].butobj.width && butrelatearr[i].butobj.y< evt.stageY &&evt.stageY<butrelatearr[i].butobj.y+butrelatearr[i].butobj.height ){
                return i;
            }
        }
        //没有点在按钮上
        return null;
    }
    public setButtonarr(butobj,numobj,numsign){
        this.butrelatearr.push({"butobj":butobj,"numobj":numobj,"numsign":numsign});
    }
    //在全部答错的时候根据正确答案在哪个按钮上 返回该正确按钮的序号
    public allWrongSysShowRight(butarr,rightresult){
        for(var i = 0;i<butarr.length;i++){
            if(butarr[i].numsign == rightresult){
                return i;
            }
        }
        //在已知的情况下 必定有返回值（这个可能没意义）
        return null;
    }
}