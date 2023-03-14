"use strict";
class Rectangulo {
    constructor(width, hight) {
        this._name = '';
        // area = () => this.width * this.hight;
        this.perimeter = () => this.width * 2 + this.hight * 2;
        console.log('ejecutando');
        this.width = width;
        this.hight = hight;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get area() {
        return this.width * this.hight;
    }
}
let rect1 = new Rectangulo(10, 2);
let rect2 = new Rectangulo(5, 3);
console.log(rect1.area);
