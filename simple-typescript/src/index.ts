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
// const email = document.getElementById('email');

// if (email) {
//   email.addEventListener('change', (e) => {
//     // const input = e.currentTarget as HTMLInputElement;
//     const input = <HTMLInputElement>e.currentTarget;
//     console.log(input.value);
//   });
// }

// Interfaces
interface A {
  someProp: number;
}
interface B {
  someProp: number;
  anotherProp: number;
}

let test1: A = { someProp: 1 };
let test2: B = test1;

interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: 'John',
  // age: 30,
};

// Index Signature
interface IS {
  someProp: string;
  [key: string]: number | string;
}

const testA: IS = { someProp: 'some prop' };
testA.x = 1;
testA.y = 2;

// Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sumTwoNum: Sum = (a, b) => a + b;
sumTwoNum.prop1 = 'some prop';

// Extending Interfaces
interface Parent {
  x: string;
}
interface Parent2 {
  y: string;
}
interface Parent3 {
  z: string;
}
interface Child extends Parent, Parent2, Parent3 {}
let child: Child = { x: 'some prop', y: 'some prop y', z: 'some prop z' };

// Functions (optional and default parameters)
function sumAgain(a: number, b: number = 0): number {
  return a + b;
}

sumAgain(1);

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;

// Unknown number of arguments
function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if ((args.length = 2)) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
