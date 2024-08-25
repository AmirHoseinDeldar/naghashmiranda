import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Testimonials />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
