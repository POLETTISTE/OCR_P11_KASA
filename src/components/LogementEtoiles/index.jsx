import React from 'react'
import starFull from '../../assets/starfull.png'
import starEmpty from '../../assets/starempty.png'

const LogementEtoiles = (props) => {
  const etoiles = props.etoiles

  const range = [1, 2, 3, 4, 5]

  return (
    <div className="logement-etoiles">
      {range.map((rangeElem) =>
        etoiles >= rangeElem ? (
          <img src={starFull} alt="" key={rangeElem.toString()} />
        ) : (
          <img src={starEmpty} alt="" key={rangeElem.toString()} />
        )
      )}
    </div>
  )
}

export default LogementEtoiles
