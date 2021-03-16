import { ShoppingCart } from '../ShoppingCart'

export class Total {
    constructor(private readonly cart: ShoppingCart) {}

    calculate() {
        return +this.cart.items
            .reduce((acc, current) => acc + current.price, 0)
            .toFixed(2)
    }
}
