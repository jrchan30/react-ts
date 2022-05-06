"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
react_1.default.Component.prototype.helloWorld = function () {
    return 'Hello World';
};
class MyComponent extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", null, this.helloWorld());
    }
}
console.log((0, server_1.renderToString)(react_1.default.createElement(MyComponent, null)));
let myCart = {
    x: 1,
    calculateTotal(options) {
        if (options && options.discountCode) {
            // apply discount
        }
        return 1;
    },
};
// Namespace
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
(function (MyNamespace) {
    MyNamespace.getX = () => {
        return MyNamespace.x;
    };
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX();
const someInterface = {
    x: 1,
    y: 2,
};
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const salad = Vegetables.makeSalad();
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
Salad.availableDressings.includes('olive oil');
