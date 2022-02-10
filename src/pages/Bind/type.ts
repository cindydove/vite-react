export interface Person {
  name: string;
  age: number;
  visiable: boolean;
}
type Person1 = Pick<Person, 'name'|'age'> ;
