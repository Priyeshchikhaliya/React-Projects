import './App.css';
import Navbar from './Component/Navbar'
import HeroImage from './Component/HeroImage'
import Clients from "./Component/Clients";
import Business from "./Component/Business"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Clients />
      <Business/>
    </div>
  );
}

export default App;
