import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import MessageSection from './sections/MessageSection';
import FlavourSection from './sections/FlavourSection';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const App = () => {
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    });
  });
  return (
    <main>
      <NavBar/>
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
           <HeroSection/>
           <MessageSection/>
           <FlavourSection/>
           <NutritionSection/>

           <BenefitSection/>
          
        </div>
      </div>
      
    </main>
  )
}

export default App