class Vehiculo {
  fabricante: string;

  constructor(fabricante: string) {
    this.fabricante = fabricante;
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
}

class VehiculoAereo extends Vehiculo {
  moverse() {
    console.log('Vehiculo volando');
  }
}

class VehiculoMaritimo extends Vehiculo {}

let miVehiculo = new VehiculoTerrestre('Yamaha', 'moto');

miVehiculo.moverse();
