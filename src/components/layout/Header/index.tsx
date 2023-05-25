import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Header() {
  return (
    <header>
      <h2>logo</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="product/1">product</Link>
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
                3
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
