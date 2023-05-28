import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartItem } from '../../components/cart/cartItem'
import { CartTotal } from '../../components/cart/cartTotal'
import * as S from './index.styled'


function CheckoutPage() {
  const navigate = useNavigate()
  const { cartItems } = useShoppingCart()
  const { clearCart } = useShoppingCart()


  return (
    <S.CheckoutContainer>
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
            <CartItem id={item.id} quantity={item.quantity}  key={item.id}/>
          ))}
        </tbody>
      </table>
      {cartItems.map((item) => (
            <CartTotal id={item.id} quantity={item.quantity} key={item.id}/>
          ))}
      <button onClick={() => {navigate('Checkout-Success'), clearCart()}}>Checkout</button>
    </S.CheckoutContainer>
  )
}

export default CheckoutPage
