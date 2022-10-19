import './App.css';
import Navbar from './Component/Navbar'
import HeroImage from './Component/HeroImage'
import Clients from "./Component/Clients";
import Business from "./Component/Business"
import Review from "./Component/Review"
import Form from "./Component/Form"
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Clients />
      <Business />
      <Review />
      <Form/>
    </div>
  );
}

export default App;
