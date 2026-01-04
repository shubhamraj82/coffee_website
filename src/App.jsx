import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';
import FlavourSection from './sections/FlavourSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <MessageSection/>
      <FlavourSection/>
       <div className='h-dvh border-amber-500'></div>
    </div>
  )
}

export default App