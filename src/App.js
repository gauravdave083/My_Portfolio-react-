import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <br/>
      <Portfolio />
      <br/>
      <br/>
      <br/>
      <Experience />
      <br/>
      <br/>
      <br/>
      <Contact />

      <SocialLinks/>
    </div>
  );
}

export default App;
