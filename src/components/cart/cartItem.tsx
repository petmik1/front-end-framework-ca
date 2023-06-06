import { useShoppingCart } from '../../context/ShoppingCartContext'
import { SingleProductFetch } from '../../data/SingleProductFetch'

type CartItemProps = {
  id: string
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useShoppingCart()
  const product = SingleProductFetch(id)

  return (
    <tr>
      <td>
        <p>{product.title}</p>
      </td>
      <td>
        <p>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          {quantity}
          <button onClick={() => increaseQuantity(product.id, product.price)}>
            +
          </button>
        </p>
      </td>
      <td>
        <p>{product.discountedPrice}</p>
      </td>
      <td>
        <button onClick={() => removeFromCart(id)}>&times;</button>
      </td>
    </tr>
  )
}
