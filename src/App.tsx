import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
