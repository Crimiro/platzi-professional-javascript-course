console.log('Hello TypeScript')

function add(a: number, b: number) {
  return a + b;
}
// SI pones el mouse sobre la funcion ya sabe que number + number retorna number
// por lo tanto es una constante de tipo number 
const sum = add(2, 3)

// Boolean
let muted: boolean = true;
muted = false;
// Tipo de error que no sale en JS pero aquí nos apoya en caso de que nos equivoquemos
//muted = 'callado';

// Numeros
let numerador: number = 42;
let denominator: number = 6;
let resultado = numerador / denominator;

// String
let nombre: string = 'Crix';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push(1);

let peopleAndNumbers: Array< string | number> = []
peopleAndNumbers.push('Crix');
peopleAndNumbers.push(25);

// Enum
enum Colors {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}

let colorFavorito: Colors = Colors.Azul;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
// let comodin = 'Joker';
// comodin = { type : 'Wildcard'}; // error
let comodin: any = 'Joker';
comodin = { type : 'Wildcard'}; // error

// Object
let someObject: object = { type: 'Wildcard'};

// Funciones
function add2(a: number, b: number): number {
  return a + b;
}

const sum2 = add(4,5);

function createAdder(a: number): (number) => number {
  return function(b: number) {
    return b + a;
  }
}

const addFour = createAdder(6);
const fourPlus6 = addFour(4);
// lastName?: string Puede ser undefined o string
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}
// lastName: string = 'Default'
function fullName2(firstName: string, lastName: string = 'Default'): string {
  return `${firstName} ${lastName}`;
}
const crix = fullName('Crix', 'Rosales');
const crix2 = fullName('Crix');
const crix3 = fullName2('Crix');

interface Rectangulo {
  alto: number,
  ancho: number,
  color?: Colors
};

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Colors.Rojo
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : 'Un Rectangulo';
}

console.log(rect.toString());