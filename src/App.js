import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
