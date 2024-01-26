import "./App.css";
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Abte from "./components/Abte";

function App() {
  // console.log(isHover);
  return (
    <div className=" app_div " id="hero">
      <Hero />
      <Box />
      <Abte />
      <div>
        {/* projects */}
        <Box2 />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
