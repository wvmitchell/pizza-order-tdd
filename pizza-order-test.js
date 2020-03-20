// pizza-order-test.js

var PizzaOrder = require('./pizza-order.js')
var assert = require('chai').assert

describe('PizzaOrder', function() {
  it('should have a size', function() {
    // setup
    
    // execution
    var order = new PizzaOrder("large")

    // assertion
    assert.equal(order.size, "large")
  })

  it('should be able to have a different size', function() {
    // setup
    var size = "medium"

    // execution
    var order = new PizzaOrder(size)

    // assertion
    assert.equal(order.size, "medium")
  })

  it('should be able to have extra cheese', function() {
    // setup
    var hasExtraCheese = true

    // execution
    var order = new PizzaOrder('large', hasExtraCheese)

    // assertion
    assert.equal(order.extraCheese, true)
  })

  it('should have no toppings by default', function() {
    // setup
    var hasExtraCheese = true

    // execution
    var order = new PizzaOrder('large', hasExtraCheese)

    // assertion
    assert.deepEqual(order.toppings, [])
  })

  it('should be able to have toppings initally', function() {
    // setup
    var toppings = ['peppers', 'mushrooms']

    // execution
    var order = new PizzaOrder('large', true, toppings)

    // assertion
    assert.deepEqual(order.toppings, ['peppers', 'mushrooms'])
  })

  it('should be able to get a price', function() {
    // setup
    var toppings = ['peppers', 'mushrooms']

    // execution
    var order = new PizzaOrder('large', true, toppings)
    var price = order.getPrice()

    // assertion
    assert.equal(price, 10.50)
  })

  it('should be able to get a different price', function() {
    // setup
    var toppings = ['peppers', 'mushrooms', 'sausage']

    // execution
    var order = new PizzaOrder('large', true, toppings)
    var price = order.getPrice()

    // assertion
    assert.equal(price, 10.75)
  })

  it('should be able to add a topping', function() {
    // setup
    var topping = 'mushrooms'

    // execution
    var order = new PizzaOrder('large', true)
    order.addTopping(topping)

    // assertion
    assert.deepEqual(order.toppings, ['mushrooms'])
  })

  it('should be able to add many toppings', function() {
    // setup
    var topping = 'mushrooms'

    // execution
    var order = new PizzaOrder('large', true)
    order.addTopping(topping)
    order.addTopping('pineapple')
    order.addTopping('sausage')

    // assertion
    assert.deepEqual(order.toppings, ['mushrooms', 'pineapple', 'sausage'])
  })
})
