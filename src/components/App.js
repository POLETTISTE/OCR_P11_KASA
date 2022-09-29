import Banner from "./Banner";
import Appartements from "./Appartements";

function App() {
  return (
    <div className="App">
      <Banner color="rouge" />
      <Banner color="bleu" />
      <Appartements />
    </div>
  );
}

export default App;
