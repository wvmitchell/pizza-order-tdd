// pizza-order.js

class PizzaOrder {
  constructor(size, extraCheese, toppings) {
    this.size = size;
    this.extraCheese = extraCheese;
    this.toppings = toppings || [];
  }

  getPrice() {
    return 10 + (this.toppings.length * 0.25)
  }

  addTopping(topping) {
    this.toppings.push(topping)
  }
}

module.exports = PizzaOrder
