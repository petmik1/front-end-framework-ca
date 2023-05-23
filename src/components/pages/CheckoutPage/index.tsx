import { useNavigate } from 'react-router-dom'


function CheckoutPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Checkout Page</h1>
      <button onClick={() => navigate('Checkout-Success')}>Checkout</button>
    </div>
  )
}

export default CheckoutPage
