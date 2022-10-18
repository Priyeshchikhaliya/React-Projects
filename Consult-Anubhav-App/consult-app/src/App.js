import './App.css';
import Navbar from './Component/Navbar'
import HeroImage from './Component/HeroImage'
import Clients from "./Component/Clients";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Clients/>
    </div>
  );
}

export default App;
