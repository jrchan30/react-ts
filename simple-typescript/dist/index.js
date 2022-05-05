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
