import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Project";
import Skills from "./views/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
