class Class2 {
    x: number;
    y: number;
    get X() {
        return this.x;
    }
    set X(value) {
        if (value < 0) {
            throw new Error("Value can't be negative");
        }
        this.x = value;
    }
}

let obj2 = new Class2();
// obj2.X=-1
obj2.X=10;
console.log(obj2.X);


class Class3 {
    _x: number;//used _ to remove the confusion of field and property
    _y: number;
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0) {
            throw new Error("Value can't be negative");
        }
        this._x = value;
    }
}

let obj3 = new Class3();
// obj3.x=-1
obj3.x=10;
console.log(obj3.x);

//properties are the methods that look like field