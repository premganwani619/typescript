//In Object oriented languages there is a concept called cohession
//Cohhesion-Things that are related should be part of a single unit
interface Point{
    x:number,
    y:number
}

let drawPoint2 = (point:Point)=>{
    console.log(point);
}

let calcDistance = (point1:Point,point2:Point)=>{
    console.log('Distance');
}
//here we violated principal of cohesion
//This all things should be part of a single unit