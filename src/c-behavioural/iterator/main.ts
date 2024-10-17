import { MyDataStructure } from "./my-data-structure";
import { MyReverseIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem('A','B','C','D','E','F');
//console.log(dataStructure);

const [a, b] = dataStructure;
console.log('STOLEN:', a,b);
console.log('I EXECUTED SEVERAL THINGS AND THEN USED ITERATOR');
const [c, ...rest] = dataStructure;
console.log(c, rest);

console.log();
dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
    console.log(data);
}

console.log();
console.log('HERE I NEED TO RESET THE ITERATOR');
dataStructure.resetIterator();
for (const data of dataStructure) {
    console.log(data);
}
console.log();
