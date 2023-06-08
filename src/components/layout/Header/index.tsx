import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
import * as S from './index.styles'

import { useShoppingCart } from '../../../context/ShoppingCartContext'

function Header() {
  const { cartItems } = useShoppingCart()
  let total = 0;
  cartItems.map((item) => {
    total = total + item.quantity
  })

  return (
    <S.HeaderContainer>
      <h2>logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="contact">contact</Link>
          </li>
          <li
            style={{
              position: 'relative',
              width: '2rem',
              height: '2rem',
            }}
          >
            <Link to="cart">
              <FontAwesomeIcon icon={solid('cart-shopping')} />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                }}
              >
                {total === 0 ? '' : total}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </S.HeaderContainer>
  )
}
export default Header
