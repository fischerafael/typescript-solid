import { ShoppingCart } from './ShoppingCart'
import { Total } from './Total'

const shoppingCart = new ShoppingCart()
const total = new Total(shoppingCart)

shoppingCart.addItem({ id: 1, name: 'Escova', price: 10 })
shoppingCart.addItem({ id: 2, name: 'Pente', price: 12 })
shoppingCart.addItem({ id: 3, name: 'Secador', price: 4 })

console.log('item adicionado', shoppingCart)
console.log('total', total.calculate())
console.log('item removido', shoppingCart.removeItem(2))
