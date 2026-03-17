import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import CustomCursor from "./UI/Customcursor.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  return (
    <div className="overflow-x-hidden">
      <CustomCursor />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;