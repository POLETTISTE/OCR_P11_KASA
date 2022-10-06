const Dropdown = (props) => {
  const titre = props.titre
  const texte = props.texte
  return (
    <div className="logement-dropdown">
      <div className="logement-dropdown-title-arrow">
        <h3>{titre}</h3>
      </div>
      <div className="logement-dropdown-texte">
        <p>{texte}</p>
      </div>
    </div>
  )
}

export default Dropdown
