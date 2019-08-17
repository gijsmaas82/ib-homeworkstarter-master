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
    
}

const cart = new ShoppingCart()
console.log(cart.getItems())
cart.addItem('h', 'h', 'h')
console.log(cart.getItems())
cart.addItem('h', 'h', 'h')
console.log(cart.getItems())
cart.addItem('h', 'h', 'h')
console.log(cart.getItems())



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