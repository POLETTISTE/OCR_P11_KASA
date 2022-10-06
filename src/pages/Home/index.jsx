import Appartements from '../../components/Appartements'
import Banner from '../../components/Banner'
import Thumb from '../../components/Thumb'

function Home() {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" bg="banner-home" />

      <div className="thumb-gallery">
        <Thumb text={'texte de la photo'} />
        <Thumb text={'texte de la photo'} />
        <Thumb text={'texte de la photo'} />
      </div>

      <div className="accueil">
        <Appartements />
      </div>
    </div>
  )
}

export default Home
