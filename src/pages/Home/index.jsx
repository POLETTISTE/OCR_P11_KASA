import Appartements from '../../components/Appartements'
import Banner from '../../components/Banner'
function Home() {
  return (
    <div>
      <Banner />

      <div className="accueil">
        <Appartements />
      </div>
    </div>
  )
}

export default Home
