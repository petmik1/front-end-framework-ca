import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartItem } from '../../components/cart/cartItem'


function CheckoutPage() {
  const navigate = useNavigate()
  const { cartItems } = useShoppingCart()

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem id={item.id} quantity={item.quantity} key={item.id}/>
          ))}
        </tbody>
      </table>
      <h2>Total: {CalculateTotal()}</h2>
      <button onClick={() => navigate('Checkout-Success')}>Checkout</button>
    </div>
  )
}

export default CheckoutPage
