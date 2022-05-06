interface Starship {
  name: string;
  enableHyperJump?: boolean;
}

// Partial, Required, Readonly, Record

// PARTIAL
const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, {
  name: 'Explorer',
});

// REQUIRED, change all properties to required
const aRequired: Required<Starship> = {
  name: 'required',
  enableHyperJump: false,
};

// READONLY, once initialized cannot be changed
const aReadonly: Readonly<Starship> = {
  name: 'readonly',
  enableHyperJump: false,
};
// aReadonly.name = 'changed'

// RECORD, 2 generic type, first is key then second is value
const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperJump: true,
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperJump: false,
  },
};

// PICK, pick a subset of properties from a type/interface
type StarshipNameOnly = Pick<Starship, 'name'>;
const pickStarship: StarshipNameOnly = {
  name: 'ExplorerPick',
};

// OMIT, omit a certain properties from a type/interface
type StarshipWithoutName = Omit<Starship, 'name'>;
const omitStarship: StarshipWithoutName = {
  enableHyperJump: false,
};

// EXCLUDE, removes properties from an interface
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';
let myDrink: AvailableDrinks;
myDrink = 'Coffee';

type DrinksJaneDoesNotLike = 'Coffee' | 'Orange Juice';
let janeDrinks: Exclude<AvailableDrinks, DrinksJaneDoesNotLike>;
janeDrinks = 'Lemonade';

// EXTRACT, get properties which intersects the base type/interface
type DrinksJamesLikes = 'Tea' | 'Lemonade' | 'Mojito';
let jamesDrinks: Extract<AvailableDrinks, DrinksJamesLikes>;
jamesDrinks = 'Tea';

// NonNullable
interface StarshipProperties {
  color?: 'blue' | 'red' | 'green';
}
function paintStarship(
  id: number,
  color: NonNullable<StarshipProperties['color']>
) {
  return {
    id,
    color,
  };
}
paintStarship(1, 'red');

// ReturnType<T>
type paintStarshipReturn = ReturnType<typeof paintStarship>;

// InstanceType<T>
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;
function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>;
type DeletableCarInstance = InstanceType<typeof DeletableCar>;

class Profile {
  user: DeletableUserInstance;
  car: DeletableCarInstance;
}

const profile = new Profile();
profile.user = new DeletableUser('John');
profile.car = new DeletableCar('Ferrari');

// ThisType<T>
interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
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
