import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Poster from "./components/Poster/Poster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Poster title='Netflix Originals' url='discover/tv?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_networks=213'/>
      <Poster isSmall title='Trending' url='trending/all/week?api_key=141c72c7acc3ea796e0d0dc48bd8273c&language=en-US'/>
      <Poster isSmall title='Action' url='discover/movie?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_genres=28'/>
      <Poster isSmall title='Comedy' url='discover/movie?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_genres=35'/>
      <Poster isSmall title='Horror' url='discover/movie?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_genres=27'/>
      <Poster isSmall title='Romance' url='discover/movie?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_genres=10749'/>
      <Poster isSmall title='Documentaries' url='discover/movie?api_key=141c72c7acc3ea796e0d0dc48bd8273c&with_genres=99'/>
      <Footer/>
       
    </div>
  );
}

export default App;
