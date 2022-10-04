import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-navbar.png'

const Navbar = () => {
  let activeStyle = {
    textDecoration: 'underline',
  }

  return (
    <header>
      <div className="navbar">
        <NavLink to="/" className="logo-img">
          <img src={logo} alt="logo de Kasa" />
        </NavLink>

        <nav>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ACCUEIL
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            A PROPOS
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
