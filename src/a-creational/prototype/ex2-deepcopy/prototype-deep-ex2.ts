export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): Person {
        const newObj = new Person(this.name, this.age);
        newObj.addresses = this.addresses.map(item => item.clone());
        return newObj;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address implements Prototype {
    constructor(public street: string, public number: number) {}

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

const ad1 = new Address('Av Roma', 50);
const p1 = new Person('Pedro', 30);
p1.addAddress(ad1);
const p2 = p1.clone();

p1.addresses[0].street = 'Anything...';

p2.name = 'Person2';
console.log(p2);
console.log(p2.addresses);

console.log('\n');
console.log(p1);
console.log(p1.addresses);
