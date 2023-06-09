import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  const showCartHandler = () => {
    setIsShowCart(true)
  }

  const hideCartHandler = () => {
    setIsShowCart(false)
  }

  document.onkeydown = event => {
    if (event.key === `Escape`) setIsShowCart(false)
  }

  return (
    <CartProvider>
      {isShowCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
