class Human {
  constructor(){
    this.gender = 'male';
  }

  printGender(){
    console.log(this.gender);
  }
}

class Perosn extends Human {
  constructor(){
    super();
    this.name = 'Max';
    this.age = '25';
  }

  printName(){
    console.log(this.name);
  }

  printAge() {
    console.log(this.age);
  }
}

const person = new Perosn();
person.printGender();
person.printName();
person.printAge();

//SPREAD OPERATOR
let arr = [1,2,3];
let newArr =[...arr, 4];
console.log(newArr);

let obj = {
  name: 'abhi'
}

let newObj = {
  ...obj,
  age: 23
}
console.log(newObj);

//REST OPERATOR TO HANDLE MULTIPLE ARGUMENTS AS ARRAY
const fltr = (...args) => {
  return args.filter(el => el===2);
}

console.log(fltr(1,2,2,3));

//DESTRUCTURING (PUILLING OUT ELEMENTS OR PROPERTIES FROM AN ARRAY OR OBJECTS AND STORING THEM AS INDIVIDUAL VALUE)
let array = [1,2,3,4];
[num1, num2] = array;
console.log(num1, num2);

