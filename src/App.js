import Navbar from "./components/NavBar";
import Catogories from "./components/Catogories";
import Banner from "./components/Banner";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Catogories></Catogories>
      <Banner></Banner>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
