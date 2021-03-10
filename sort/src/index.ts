import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./sorter";

const x = new NumbersCollection([4, 2, 66, 1, 9, 3]);
const xSorter = new Sorter(x);
xSorter.sort();
console.log(xSorter.collection);

const y = new CharactersCollection("kakamaki");
const ySorter = new Sorter(y);
ySorter.sort();
console.log(ySorter.collection);

const list = new LinkedList();
list.add(148);
list.add(-5);
list.add(-2);
list.add(11);
const listSorter = new Sorter(list);
listSorter.sort();
list.print();
