import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const x = new NumbersCollection([4, 2, 66, 1, 9, 3]);
x.sort();
console.log(x.data);

const y = new CharactersCollection("kakamaki");
y.sort();
console.log(y.data);

const list = new LinkedList();
list.add(148);
list.add(-5);
list.add(-2);
list.add(11);
list.sort();
list.print();
