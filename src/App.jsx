import './App.css'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Wrapper } from './components/Wrapper'
import Testamonials from './components/Testamonials'


function App() {

  return (
    <>
      <Navbar />
      <Wrapper>
        <HeroSection />
        <Features />
        <Testamonials />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App
