import React from 'react'

const LogementEtoiles = (props) => {
  const etoiles = props.etoiles
  return <div className="logement-etoiles">{etoiles}*</div>
}

export default LogementEtoiles
