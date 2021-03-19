import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Education from "./Pages/Education/education";
import Skills from "./Pages/Skillls/skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/contact";
import Footer from "./Pages/Footer/footer";
import Navbar from "./Components/Navbar/navbar";


function App() {
  return (
    <div className="App">

            <Navbar/>
            <Home />
            <About />
            <Education />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
            <div className="top">
                <a href="#"><i className="fas fa-arrow-up"></i></a>
            </div>

    </div>
  );
}

export default App;
