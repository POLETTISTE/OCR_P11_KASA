import Appartements from '../../components/Appartements'
import Banner from '../../components/Banner'
function Home() {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" bg="banner-home" />

      <div className="accueil">
        <Appartements />
      </div>
    </div>
  )
}

export default Home
