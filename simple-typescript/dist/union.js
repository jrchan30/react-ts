"use strict";
function someFn(myArgument) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase();
    }
    else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    }
    else {
        myArgument;
    }
}
function isDog(someObj) {
    return someObj.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
class Foo {
    constructor(foo, commonProp) {
        this.foo = foo;
        this.commonProp = commonProp;
    }
}
class Bar {
    constructor(bar, commonProp) {
        this.bar = bar;
        this.commonProp = commonProp;
    }
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
