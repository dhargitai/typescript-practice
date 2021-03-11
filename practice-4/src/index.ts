/* 
Simple blog

user
post

*/

import { User } from "./user";

const kati = new User({ name: "Kati", age: 22 });
console.log("wat..", kati);

const sutyi = new User({ id: 2 });

sutyi.fetch();
console.log(sutyi);
