"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_total_amount_1 = require("./lib/calculate-total-amount");
const order_1 = require("./lib/order");
const shopping_cart_1 = require("./lib/shopping-cart");
const multiply_1 = __importStar(require("./multiply"));
const a = 10;
const b = 6;
console.log(`${a} * ${b} = ${(0, multiply_1.default)(a, b)}`);
console.log(`${a} * 2 = ${(0, multiply_1.multiplyByTwo)(a)}`);
// Boolean
let bool = true;
// Number
let sum = 1 + 0b1 + 0o1 + 0x1;
// String
const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;
// Null and Undefined
const n = null;
const u = undefined;
const someNumber = null;
function uppercaseFirstLetter(str) {
    if (str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}
console.log(uppercaseFirstLetter('hello'));
// type of object can be assigned to array, function, Map, or object
const myObj = new Map();
// Void
function log(msg) {
    console.log(msg);
    // return 'a string';
}
// Array
const array1 = ['x', 'y'];
const array2 = array1;
// Tuple
const tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
const myFavoriteColor = Color.Red;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[5]); // Green
// Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
let test1 = { someProp: 1 };
let test2 = test1;
let profile = {
    name: 'John',
    // age: 30,
};
const testA = { someProp: 'some prop' };
testA.x = 1;
testA.y = 2;
const sumTwoNum = (a, b) => a + b;
sumTwoNum.prop1 = 'some prop';
let child = { x: 'some prop', y: 'some prop y', z: 'some prop z' };
// Functions (optional and default parameters)
function sumAgain(a, b = 0) {
    return a + b;
}
sumAgain(1);
const sum2 = (a, b) => a + b;
// Unknown number of arguments
function sumEverything(arg1, arg2, ...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
function calcArea(...args) {
    if ((args.length = 2)) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
// Classes
class Robot {
    // Typescript automatically creates the properties
    constructor(_name) {
        this._name = _name;
    }
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set name(value) {
        this._name = `PREFIX_${value}`;
    }
    get name() {
        return `${this._name}_SUFFIX`;
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available`);
        }
        this._color = color;
    }
}
Robot.availableColors = ['green', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jetpackSize) {
        super(name);
        this.jetpackSize = jetpackSize;
    }
    getSize() {
        return this.jetpackSize;
    }
    move(distance) {
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
const cart = new shopping_cart_1.ShoppingCart();
console.log(`The cart's total is ${(0, calculate_total_amount_1.calculateTotalAmount)(cart)}`);
const order = new order_1.Order();
console.log(`The order's total is ${(0, calculate_total_amount_1.calculateTotalAmount)(order)}`);
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup('mammals');
    return animal;
}
const cat = initializeAnimal(Cat, 'Felix');
const dog = initializeAnimal(Dog, 'Ava');
dog.bark();
