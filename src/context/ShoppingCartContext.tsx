import { clear } from 'console'
import { useContext, createContext, useState } from 'react'

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type ShoppingCartContext = {
  getQuantity: (id: string) => number
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  cartItems: CartItem[]
  clearCart: () => void
}

type CartItem = {
  id: string
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  

  function getQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }
  function increaseQuantity(id: string) {
    setCartItems(currentItems => {
         if(currentItems.find(item => item.id === id) == null){
            return [...currentItems, {id, quantity: 1}]
         }
         else{
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1}
                }
                else{
                    return item
                }
            })
        }})
  }
  function decreaseQuantity(id: string) {
    setCartItems(currentItems => {
         if(currentItems.find(item => item.id === id)?.quantity === 1){
            return currentItems.filter(item => item.id !== id)
         }
         else{
            return currentItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                }
                else{
                    return item
                }
            })
        }})
  }
    function removeFromCart(id: string) {
            setCartItems(currentItems => {
    return currentItems.filter(item => item.id !== id)
})}
  function clearCart() {
    setCartItems([])
  }
  return (
    <ShoppingCartContext.Provider value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart, 
        cartItems,
        clearCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
