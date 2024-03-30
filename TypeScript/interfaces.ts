//We can remove the drawback of possibility of runtime error in passing object to the function by
//using type aanotations 
let drawPoint = (point:{ x: number, y: number })=> {
    console.log(point.x + ' ' + point.y);
}

//But there is an better approach
//This is much clear and resueable
interface Point{//Always use Pascal nameing convention 
x:number,
y:number
} 

let drawPoint1 = (point:Point)=> {
    console.log(point.x + ' ' + point.y);
}

//Interfaces can not contain implemantation that's why we use class
//Interfaces are just for decoration and shape defineing