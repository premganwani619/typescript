let drawpoint = (x, y) => {
    console.log(x + ' ' + y)
}

drawpoint(5, 3);
//But sometimes we have multiple input variables
let drawpoint2 = (x, y, z, a, b, c, d) => {
    console.log(x + ' ' + y + ' ' + z + ' ' + a + ' + ' + b + ' ' + c + ' ' + d)
}

drawpoint2(5, 3, 4, 5, 6, 7, 8);

//Instead of passing multiple inputs we can encapsulate them in an object and pass the object

let Point={
    x:5,
    y:7
}

let drawpoint3 = (Point) => {
    console.log(Point.x + ' '+ Point.y);
}

//But there is a drawback 
//we will not get any compile time error but it may break at runtime bcs algo expects numbers and we are giving strings
// let Point={
//     x:'randomstring',
//     y:7
// }

//There is and solution check interfaces.ts

