import { Link } from 'react-router-dom'
import logo from '../..//assets/logo.png'

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="logo de Kasa" />
        <nav>
          <Link to="/">ACCUEIL</Link>
          <Link to="/about">A PROPOS</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
