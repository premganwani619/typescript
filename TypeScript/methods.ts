class Class1 {
    x: number;
    y: number;
    getx() {
        return this.x;
    }
    setx(value) {
        if (value < 0) {
            throw new Error("Value can't be negative");
        }
        this.x = value;
    }
}

let obj = new Class1();
//obj.setx(-1);
obj.setx(10);
console.log(obj.getx());
