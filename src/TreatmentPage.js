import React from 'react'
import HowItWorks from './components/homecomponents/HowItWorks';
import FeedBack from './components/homecomponents/FeedBack';
import CSatisfaction from './components/treatmentComponents/CSatisfaction'
import TCounter from './components/treatmentComponents/TCounter';
import Footer from './components/Footer';
import LearnMore from './components/treatmentComponents/LearnMore';


const TreatmentPage = () => {
  return (<>
    <div className="container-fluid treatmentPageSection">
    <div className="container shadow rounded">
    <div className="row ">
    <div className="col d-flex flex-column align-items-start justify-content-center"> 
    <h3>What is?</h3>
    <h1>Erectile Dysfunction?</h1>
    <p>ED is defined as the inability to sustain an erection sufficient for sexual intercourse. The condition can affect anyone at any age.</p>
    <button className="btn btn-lg bg-primary text-white rounded-pill">Contact Us</button>
    </div>
    <div className="col p-0"> 
    <img className="img-fluid" src="https://quer.vercel.app/static/media/trtmnt01.641bca482fbcf12e518c.png"/></div>
    </div>
    </div>
    </div>
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