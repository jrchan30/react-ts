"use strict";
// Partial, Required, Readonly, Record
// PARTIAL
const updateStarship = (id, starship) => { };
updateStarship(1, {
    name: 'Explorer',
});
// REQUIRED, change all properties to required
const aRequired = {
    name: 'required',
    enableHyperJump: false,
};
// READONLY, once initialized cannot be changed
const aReadonly = {
    name: 'readonly',
    enableHyperJump: false,
};
// aReadonly.name = 'changed'
// RECORD, 2 generic type, first is key then second is value
const starships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true,
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false,
    },
};
const pickStarship = {
    name: 'ExplorerPick',
};
const omitStarship = {
    enableHyperJump: false,
};
let myDrink;
myDrink = 'Coffee';
let janeDrinks;
janeDrinks = 'Lemonade';
let jamesDrinks;
jamesDrinks = 'Tea';
function paintStarship(id, color) {
    return {
        id,
        color,
    };
}
paintStarship(1, 'red');
function Deletable(Base) {
    return class extends Base {
        delete() { }
    };
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
class Profile {
}
const profile = new Profile();
profile.user = new DeletableUser('John');
profile.car = new DeletableCar('Ferrari');
const myObject = {
    sayHello() {
        return this.helloWorld();
    },
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World!';
    },
});
console.log(myObject.sayHello()); // Hello World!
