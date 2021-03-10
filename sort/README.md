# Typescript practice #2 - Using interfaces vs. abstract classes

In this practice I created a separate sorter class which holds the sorting functionality and hides it from the collection instances.

The collections implement a Sortable interface to show the compiler what methods can be called on them in the Sorter class. In this solution the sorting is completed by a separately created Sorter instance's sort() method.

After that in the next commit I refactored it to have an abstract class, which implements the sorting method and the collections are extending this. This way the sort() method can be called directly on the collections.
