import { useEffect, useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'

type CartItemProps = {
  id: string
  quantity: number
}

const url = 'https://api.noroff.dev/api/v1/online-shop'

export function CartItem({ id, quantity }: CartItemProps) {
  const [product, setProduct] = useState<any>([])

  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useShoppingCart()

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])
  return (
    <tr>
      <td>
        <p>{product.title}</p>
      </td>
      <td>
        <p>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          {quantity}
          <button onClick={() => increaseQuantity(product.id)}>+</button>
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
