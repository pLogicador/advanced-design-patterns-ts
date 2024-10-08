function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    firstName: 'Pedro',
    lastName: 'Miranda',
    age: 20,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'Hello';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const p1 = new Person('John', 'Miranda', 50);
console.log(p1);
console.log(p1.fullName());

const p2 = new SubPerson('Eleanor', 'Michael', 100);
console.log(p2);
console.log(p2.fullName());
