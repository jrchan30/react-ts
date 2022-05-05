import { calculateTotalAmount } from './lib/calculate-total-amount';
import { Order } from './lib/order';
import { ShoppingCart } from './lib/shopping-cart';
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

// Classes
class Robot {
  _color: string | undefined;

  private static availableColors = ['green', 'yellow'];
  static isColorAvailable(color: string): boolean {
    return Robot.availableColors.includes(color);
  }
  // Typescript automatically creates the properties
  constructor(protected _name: string) {}

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }

  set name(value: string) {
    this._name = `PREFIX_${value}`;
  }

  get name() {
    return `${this._name}_SUFFIX`;
  }

  set color(color: string) {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} is not available`);
    }
    this._color = color;
  }
}

class FlyingRobot extends Robot {
  private readonly jetpackSize: number;
  constructor(name: string, jetpackSize: number) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  getSize() {
    return this.jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
    // this.jetpackSize = 1
  }
}

const robot = new Robot('John');
robot.askName();
robot.move(20);

const flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);
console.log(`Flying robot's jetpack size is ${flyingRobot.getSize()}`);

flyingRobot.name = 'Kevin';
console.log(`My name is ${flyingRobot.name}`);
// Robot.availableColors;

const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`);

interface Animal {
  name: string;
  group: string | undefined;
  setGroup(group: string): void;
}

class Cat implements Animal {
  name: string;
  group: string | undefined;
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
}
class Dog implements Animal {
  name: string;
  group: string | undefined;
  constructor(name: string) {
    this.name = name;
  }
  setGroup(group: string) {
    this.group = group;
  }
  bark() {}
}

interface AnimalConstructor<T> {
  new (name: string): T;
}

function initializeAnimal<T extends Animal>(
  Animal: AnimalConstructor<T>,
  name: string
) {
  const animal = new Animal(name);
  animal.setGroup('mammals');
  return animal;
}

const cat = initializeAnimal(Cat, 'Felix');
const dog = initializeAnimal(Dog, 'Ava');

dog.bark();
