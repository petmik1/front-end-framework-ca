import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/pages/Home'
import CheckoutPage from './components/pages/CheckoutPage'
import CheckoutSuccessPage from './components/pages/CheckoutSuccessPage'
import ProductPage from './components/pages/ProductPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<CheckoutPage />} />
          <Route
            path="cart/Checkout-Success"
            element={<CheckoutSuccessPage />}
          />
          <Route path="product/:id" element={<ProductPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
