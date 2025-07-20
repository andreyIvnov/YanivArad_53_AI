class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
const c1 = new Car("Toyota", "Corolla", 2020);