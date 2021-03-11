# Typescript practice #3 - Stats from a CSV file

In this practice I needed to process a given csv file, analyze the data and make a report from it.

The first commit was about a specific type of csv reader, that reads/transforms the file's data and the common reader functionality was inherited from another general CsvReader class.

In the second commit this specific reader file just uses a general purpose reader inside of it using composition.

Using composition it can be extended more easily. As they say, "_Favor composition over inheritance_"
