var Rectangulo = /** @class */ (function () {
    function Rectangulo(width, hight) {
        var _this = this;
        this.area = function () { return _this.width * _this.hight; };
        this.perimeter = function () { return _this.width * 2 + _this.hight * 2; };
        console.log('ejecutando');
        this.width = width;
        this.hight = hight;
    }
    return Rectangulo;
}());
var rect1 = new Rectangulo(10, 2);
var rect2 = new Rectangulo(5, 3);
console.log(rect1.area());
