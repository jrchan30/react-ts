import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';

const a = 10;
const b = 6;

console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} * 2 = ${mBy2(a)}`);

// Boolean
let bool: boolean = true;

// Number
let sum: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = 'World';
const helloWorld = `${hello} ${world}`;

// Null and Undefined
const n: null = null;
const u: undefined = undefined;

const someNumber: number = null;

function uppercaseFirstLetter(str: string | null) {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

console.log(uppercaseFirstLetter('hello'));
// uppercaseFirstLetter(someNumber);

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
// type of object can be assigned to array, function, Map, or object
const myObj: object = new Map();

// Void
function log(msg: string): void {
  console.log(msg);
  // return 'a string';
}

// Array
const array1: string[] = ['x', 'y'];
const array2: Array<string> = array1;

// Tuple
const tuple: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 2, // 2
  Green = 5, // 5
  Blue, // 6
}

const myFavoriteColor: Color = Color.Red;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[5]); // Green

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', (e) => {
    // const input = e.currentTarget as HTMLInputElement;
    const input = <HTMLInputElement>e.currentTarget;
    console.log(input.value);
  });
}
