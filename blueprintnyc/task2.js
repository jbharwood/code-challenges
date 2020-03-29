function priceCheck(products, productPrices, productSold, soldPrice) {
    let correctPrices = {}
    let errors = 0
    for (let i = 0; i < products.length; i++) {
      correctPrices[products[i]] = productPrices[i]
    }
    for (let i = 0; i < productSold.length; i++) {
      if (correctPrices[productSold[i]] !== soldPrice[i]) {
          errors++
      }
    }
    return errors
}

let products = ["rice", "sugar", "wheat", "cheese"]
let productPrices = [16.89, 56.92, 20.89, 345.99]
let productSold = ["rice", "cheese"]
let soldPrice = [18.99, 400.89]
console.log(priceCheck(products, productPrices, productSold, soldPrice)
);
