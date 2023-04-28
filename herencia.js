var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this._fabricante = fabricante;
    }
    Object.defineProperty(Vehiculo.prototype, "Fabricante", {
        get: function () {
            return this._fabricante;
        },
        set: function (value) {
            this._fabricante = value;
        },
        enumerable: false,
        configurable: true
    });
    Vehiculo.prototype.moverse = function () {
        console.log('vehiculo');
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(fabricante, tipo) {
        var _this = _super.call(this, fabricante) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        console.log('Vehiculo terrestre moviendose');
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log("Reparando ".concat(this.Fabricante));
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        console.log('Vehiculo volando');
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehiculoMaritimo;
}(Vehiculo));
var miVehiculo = new VehiculoTerrestre('Yamaha', 'moto');
miVehiculo.moverse();
miVehiculo.reparar();
