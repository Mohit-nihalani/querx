import React from 'react'
import HowItWorks from './components/homecomponents/HowItWorks';
import FeedBack from './components/homecomponents/FeedBack';
import CSatisfaction from './components/treatmentComponents/CSatisfaction'
import TCounter from './components/treatmentComponents/TCounter';
import Footer from './components/Footer';
import LearnMore from './components/treatmentComponents/LearnMore';
import TreatmentHero from './components/treatmentComponents/TreatmentHero';


const TreatmentPage = () => {
  return (<>
    <TreatmentHero/>
    <TCounter/>
    <LearnMore/>
    <CSatisfaction/>
    <HowItWorks/>
    <FeedBack/>
    <Footer/>
    </>
  )
}

export default TreatmentPage