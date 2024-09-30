// import { MyDatabaseClassic } from "./db/my-database-classic";
// import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function'
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({name: "John", age: 36});
myDatabaseClassic.add({name: "Romilda", age: 78});
myDatabaseClassic.add({name: "Larissa", age: 25});
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
