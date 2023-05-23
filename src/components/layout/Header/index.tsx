import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Header() {
  return (
    <header>
      <h2>logo</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li><FontAwesomeIcon icon={solid("cart-shopping")} /></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
