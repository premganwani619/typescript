export
class PointClass{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log(this.x + '' + this.y);
    }
}