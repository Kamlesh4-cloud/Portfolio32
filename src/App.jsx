
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Contact from './sections/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl pt-16">

      <Navbar/>
      
      <Hero/>
      
      <About/>
      
      <Project/>
      
      <Contact/>
      
      




    </div>
  )
}

export default App