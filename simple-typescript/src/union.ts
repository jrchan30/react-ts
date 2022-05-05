function someFn(myArgument: number | string | boolean) {
  if (typeof myArgument === 'string') {
    let x = myArgument.toUpperCase();
  } else if (typeof myArgument === 'number') {
    myArgument.toFixed();
  } else {
    myArgument;
  }
}

interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(someObj: Dog | Cat): someObj is Dog {
  return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
}

class Foo {
  foo: number;
  commonProp: string;
  constructor(foo: number, commonProp: string) {
    this.foo = foo;
    this.commonProp = commonProp;
  }
}

class Bar {
  bar: number;
  commonProp: string;
  constructor(bar: number, commonProp: string) {
    this.bar = bar;
    this.commonProp = commonProp;
  }
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
