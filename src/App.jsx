import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <div className='h-dvh border-amber-500'></div>
    </div>
  )
}

export default App