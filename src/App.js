import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Minting from "./Components/Minting";
import Roadmap from "./Components/Roadmap";
import Team from "./Components/Team";

function App() {
  return (
    <div>
      <Header />
      <Minting />
      <Roadmap />
      <Faq />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
