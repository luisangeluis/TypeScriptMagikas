abstract class Vehiculo {
  private _fabricante: string;

  constructor(fabricante: string) {
    this._fabricante = fabricante;
  }


  set Fabricante(value: string) {
    this._fabricante = value;
  }

  get Fabricante() {
    return this._fabricante;
  }

  moverse() {
    console.log('vehiculo');
  }
}

class VehiculoTerrestre extends Vehiculo {
  private tipo: string;

  constructor(fabricante: string, tipo: string) {
    super(fabricante);
    this.tipo = tipo;
  }
  moverse() {
    console.log('Vehiculo terrestre moviendose');
  }

  reparar() {
    console.log(`Reparando ${this.Fabricante}`);

  }


}

class VehiculoAereo extends Vehiculo {
  moverse() {
    console.log('Vehiculo volando');
  }
}

class VehiculoMaritimo extends Vehiculo { }

let miVehiculo = new VehiculoTerrestre('Yamaha', 'moto');

miVehiculo.moverse();
miVehiculo.reparar();
