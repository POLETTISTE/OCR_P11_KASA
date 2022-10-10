import React from 'react'

const LogementProprietaire = (props) => {
  const nom = props.nom
  return <div className="logement-proprietaire">{nom}</div>
}

export default LogementProprietaire
