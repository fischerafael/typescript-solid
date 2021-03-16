import { Item } from '../interfaces'
import { Total } from '../Total'

export class ShoppingCart {
    private readonly _items: Item[] = []

    addItem(item: Item) {
        this._items.push(item)
    }

    removeItem(id: number) {
        return this._items.filter((item) => item.id !== id)
    }

    get items(): Readonly<Item[]> {
        return this._items
    }
}
