import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/Home'
import CheckoutPage from './pages/CheckoutPage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage'
import ProductPage from './pages/ProductPage'
import { ShoppingCartProvider } from './context/ShoppingCartContext'



function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />}/>
          <Route path="cart" element={<CheckoutPage />} />
          <Route
            path="cart/Checkout-Success"
            element={<CheckoutSuccessPage />}
          />
          <Route path="product/:id" element={<ProductPage/>} />
        </Route>
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
