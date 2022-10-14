import { Fragment } from 'react'

const Thumb = (props) => {
  const texte = props.texte
  const image = props.image

  return (
    <Fragment>
      <img
        src={image}
        alt="appartement en location"
        className="logement-image"
      />
      <p className="logement-nom">{texte}</p>
    </Fragment>
  )
}

export default Thumb
