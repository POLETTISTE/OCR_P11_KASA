import { Link } from 'react-router-dom'

import logo from '../..//assets/logo.png'
import '../../styles/_Banner.scss'

const Banner = (props) => {
  const { color } = props
  console.log(color)
  return (
    <header className="App-banner">
      <div className="App-banner-top">
        <img src={logo} alt="logo de Kasa" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
      <div className="App-banner-bottom">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </header>
  )
}

export default Banner
