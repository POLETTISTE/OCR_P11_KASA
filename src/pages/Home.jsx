import Banner from '../components/Banner'
import Appartements from '../components/Appartements'

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
