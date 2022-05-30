import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Poster from "./components/Poster/Poster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Poster />
      <Poster />
      <Poster />
      <Poster />
    </div>
  );
}

export default App;
