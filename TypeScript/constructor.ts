class Pointtt{
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
let pointt = new Pointtt(1,2);
pointt.draw();


/*
    constructor(x?,y?){
        this.x = x;
        this.y = y;
    }
    we use ? to make to parameters inside constructor optional
    all the parameters after the optional parameter should also be optional
    optional means we dont need to provide value for them
*/