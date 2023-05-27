import { Link } from 'react-router-dom'
import Home from '../Home'

function CheckoutSuccessPage() {
  return (
    <div>
      <h1>Checkout Success Page</h1>
      <h2>
        <Link to="/">return to home page</Link>
      </h2>
    </div>
  )
}

export default CheckoutSuccessPage
