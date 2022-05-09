type Properties = 'propA' | 'propB';
type MyMappedProperties<T> = {
  readonly [P in keyof T]?: T[P] | null;
};

type MyNewType = MyMappedProperties<{ a: 'a'; b: 'b' }>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType2 = Pick1<{ a: 'a'; b: 'b' }, 'a'>;

type Record1<K extends keyof any, T> = {
  [P in K]: T;
} & { someProperty: string };

const someRecord: Record1<'A' | 'B', number> = {
  A: 1,
  B: 2,
  someProperty: 'someProp',
};
// someRecord.apples = 10;
// someRecord.oranges = 20;
// someRecord[1] = 1;
// someRecord.someProperty = 'someProp';

interface Record2 {
  [key: string]: number;
}
