enum Colors {Red,Green,Blue};//Red = 0 , Green = 1, Blue = 2
let a = Colors.Red;
let b = Colors.Green;
let c = Colors.Blue;
console.log(a);
console.log(b);
console.log(c);

enum Colors2 {Red=5,Green,Blue};//Green = Red +1  Blue = Green + 1
let d = Colors2.Red;
let e = Colors2.Green;
let f = Colors2.Blue;
console.log(d);
console.log(e);
console.log(f);


enum Colors3 {Red=5,Green,Blue=9};//Green = Red +1 
let g = Colors3.Red;
let h = Colors3.Green;
let i = Colors3.Blue;
console.log(g);
console.log(h);
console.log(i);

//Previously we were achiving the same result like this
const ColorRed =0
const ColorGreen =1
const ColorBlue=2
console.log(ColorRed);
console.log(ColorGreen);
console.log(ColorBlue);
//Dont read comments from js file