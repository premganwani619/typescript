//There are 3 access modifires
//public 
//private 
//protected

//By default all members are public

class Pointttt{
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
//instead of upper one use this 
class Pointtttt{
    x:number;
    y:number;
    constructor(x:number,y:number){
    //Dont need to assign value it will bo done automatically
    }
    draw(){
        console.log(this.x + '' + this.y);
    }
}



class Pointttttt{
    private x:number;
    private y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log(this.x + '' + this.y);
    }
}
//instead of upper one use this 
class Pointtttttt{
    x:number;
    y:number;
    constructor(private x :number,private y:number){
    }
    draw(){
        console.log(this.x + '' + this.y);
    }
}