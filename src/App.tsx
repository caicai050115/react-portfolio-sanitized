import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
