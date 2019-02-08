

console.log(__dirname,__filename)

class Person {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }

  greeting(){
      console.log(`I am this ${this.age} and my name is ${this.name}`);
  }
}

module.exports= Person;