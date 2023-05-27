import { Link } from "react-router-dom"

Link

function CheckoutSuccessPage() {
    return (
      <div>
        <h1>your order was successfully </h1>
        <Link to="/">Go back to home page</Link>
      </div>
    )
  }
  
  export default CheckoutSuccessPage