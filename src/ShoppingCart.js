class ShoppingCart {
    constructor() {
        this.cart = []
    }
    getItems() {
            const cart = this.cart
            return cart
    }

    addItem(name, quantity, pricePerUnit) {
        class NewItem {
            constructor() {
                this.name = name
                this.quantity = quantity
                this.pricePerUnit = pricePerUnit
            }
        }
        const newItem = new NewItem
        const cart = this.getItems()
        cart.push(newItem)
        return cart
    }
    clear() {
        this.cart = []
        return this.cart
    }

    total() {
        
        const pricesArray = this.cart.map(item => item = item.pricePerUnit * item.quantity)
        const total = pricesArray.reduce((acc, cur) => acc + cur, 0)
        
        return total
        
        // console.log(prices)
        
    }
    
}

const cart = new ShoppingCart()
// console.log(cart.getItems())
// cart.addItem('h', 'h', 'h')
// console.log(cart.getItems())
// cart.addItem('h', 'h', 'h')
// console.log(cart.getItems())
// cart.addItem('h', 'h', 'h')
// console.log(cart.getItems())
// console.log(cart.clear())
// console.log(cart.getItems())
// cart.addItem('h', 'h', 'h')
// console.log(cart.getItems())

cart.addItem("item 1", 1, 15.5)
cart.addItem("item 2", 2, 3)
cart.addItem("item 3", 10, 2)
cart.addItem("item 4", 0, 2)
cart.addItem("item 5", 2, 0)
console.log(cart.total())
const cart2 = new ShoppingCart
console.log(cart2.total())




module.exports = ShoppingCart

// class ShoppingCart {
//     constructor(name) {
//         this.name = name
//         this.crops = []
//         this.animals = []
//     }

//     addCrop(crop) {
//         this.crops.push(crop)
//       }

//     addAnimal(animal) {
//         this.animals.push(animal)
//     }

//     calculateIncome() {
//         const yieldCrops = this.crops.map(crop => crop.getYieldInEuros()).reduce((a, b) => a + b, 0) 
//         const valueAnimals = this.animals.map(animal => animal.getValueInEuros()).reduce((a, b) => a + b, 0) 
//         return yieldCrops + valueAnimals
//     }      
//   }
//   module.exports.ShoppingCart = ShoppingCart