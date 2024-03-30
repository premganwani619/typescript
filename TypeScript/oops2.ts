//Class->Group of variables Fields (properties) and functions(method) that are related
class Pointt {
    x: number;
    y: number;
    draw() {
        console.log(this.x + '' + this.y);
    }
    distance() {
        console.log(this.x + '' + this.y);
    }
}
//Fields are members
//Properties are the abstraction to get and set values of Fields


//To create object of class we use new kayword
//we need to explicitly allocate memory to object
let point = new Pointt()
point.draw();