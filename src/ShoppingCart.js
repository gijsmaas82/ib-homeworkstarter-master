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
    }
}
    
module.exports = ShoppingCart
