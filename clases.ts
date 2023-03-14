class Rectangulo {
  readonly width: number;
  private readonly hight: number;
  private _name: string = '';

  constructor(width: number, hight: number) {
    console.log('ejecutando');
    this.width = width;
    this.hight = hight;
  }

  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get area() {
    return this.width * this.hight;
  }

  // area = () => this.width * this.hight;
  perimeter = () => this.width * 2 + this.hight * 2;
}

let rect1 = new Rectangulo(10, 2);
let rect2 = new Rectangulo(5, 3);

console.log(rect1.area);
