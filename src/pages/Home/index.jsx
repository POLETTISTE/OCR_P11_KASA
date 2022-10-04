import Banner from '../../components/Banner/index'
import Appartements from '../../components/Appartements'

function Home() {
  return (
    <div className="App">
      <Banner color="rouge" />
      <Banner color="bleu" />
      <Appartements />
    </div>
  )
}

export default Home
