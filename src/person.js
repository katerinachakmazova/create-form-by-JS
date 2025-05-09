export class Person {
  constructor(...args) {
  for (let key of args){
    this[key.name] = key.value;
  }
  }
}

