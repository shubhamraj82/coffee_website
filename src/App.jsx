import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      {/* <div className='h-dvh border-amber-500'></div> */}
      <MessageSection/>
    </div>
  )
}

export default App