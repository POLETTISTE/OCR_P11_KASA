const Thumb = (props) => {
  const texte = props.texte
  const image = props.image

  return (
    <div className="logement-infos-home">
      <img
        src={image}
        alt="appartement en location"
        className="logement-image"
      />
      <p className="logement-nom">{texte}</p>
    </div>
  )
}

export default Thumb
