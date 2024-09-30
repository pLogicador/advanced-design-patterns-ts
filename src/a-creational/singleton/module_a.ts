// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from './db/my-database-module';

import { MyDatabaseFunction } from './db/my-database-function'

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: "Roger", age: 56});
myDatabaseClassic.add({name: "Maria", age: 43});
myDatabaseClassic.add({name: "George", age: 35});

export { myDatabaseClassic };
