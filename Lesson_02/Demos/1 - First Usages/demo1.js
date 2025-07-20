// create a function that sorts an array of numbers
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// create a class called Person with the following properties:
//  - name (string)
//  - age (number)
//  - city (string)
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}