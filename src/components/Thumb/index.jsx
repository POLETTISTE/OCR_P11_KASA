import { Link } from 'react-router-dom'

const Thumb = (props) => {
  const id = props.id
  const texte = props.texte
  const image = props.image

  return (
    <div className="logement-infos-home">
      <Link to={`/Logement/${id}`}>
        <img
          src={image}
          alt="appartement en location"
          className="logement-image"
        />
        <p className="logement-nom">{texte}</p>
      </Link>
    </div>
  )
}

export default Thumb
