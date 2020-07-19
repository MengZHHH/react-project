class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}`
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super (name, age);
    this.homeLocation = homeLocation;
  }

  hasHomelocation () {
    return !!this.homeLocation
  }

  getGretting () {
    let gretting = super.gretting;
    if (this.hasHomelocation) {
      gretting += `Hi. I am Meng Zhang. I'm visiting from ${this.homeLocation}`
    }
    return gretting;
  }
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.hasMajor);
