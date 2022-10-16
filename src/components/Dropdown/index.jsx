import { useState } from 'react'
import arrow from '../../assets/Vector.svg'

const Dropdown = (props) => {
  const titre = props.titre
  const texte = props.texte

  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="dropdown">
      <div className="dropdown-title-arrow" onClick={() => setIsOpen(false)}>
        <h3>{titre}</h3>
        <img src={arrow} alt="arrow" className="rotate" />
      </div>
      <div className="dropdown-texte">
        <p>{texte}</p>
      </div>
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown-title-arrow" onClick={() => setIsOpen(true)}>
        <h3>{titre}</h3>
        <img src={arrow} alt="arrow" className="no-rotate" />
      </div>
    </div>
  )
}

export default Dropdown
