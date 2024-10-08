export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(public street: string, public number: number) {}
}

const ad1 = new Address('Av Roma', 50);
const p1 = new Person('Pedro', 30);
p1.addAddress(ad1);
const p2 = p1.clone();

p1.addresses[0].street = 'Anything...';

p2.name = 'Michael';
console.log(p2);
console.log(p2.name);
console.log(p2.addresses);
