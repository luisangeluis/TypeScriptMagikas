class Rectangulo {
  readonly width: number;
  private readonly hight: number;

  constructor(width: number, hight: number) {
    console.log('ejecutando');
    this.width = width;
    this.hight = hight;
  }

  area = () => this.width * this.hight;
  perimeter = () => this.width * 2 + this.hight * 2;
}

let rect1 = new Rectangulo(10, 2);
let rect2 = new Rectangulo(5, 3);

console.log(rect1.area());
