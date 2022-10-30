import React from 'react'

const Hero = () => {
  return (<>
    <div className="container-fluid  heroContainer">
    <div className='row d-flex justify-content-end'>
    <div className='col'>
        <img className='img-fluid' src="https://quer.vercel.app/static/media/allgroup.a02e67bd2a4cdccecc02.png"/>
    </div>
        <div className="col my-auto text-start">
            <h1>Sexual issues are normal</h1>
            <p>1 out of 5 indians encouter <br/>sexual health issue in their lifetime</p>
            <button className="btn btn-large btn-primary rounded-pill py-2">Contact an expert</button>
        </div>
    </div>
    </div>
    <div className='container heroSectionFeature'>
    <div className='row mx-auto text-white text-center position-relative'>
        <div className='col my-2'><div className='d-flex'><span><img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg"/></span><p className='mt-3'>Personalized treatment plans</p></div></div>
        <div className='col my-2'><div className='d-flex'><span><img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg"/></span><p className='mt-3'>Personalized treatment plans</p></div></div>
        <div className='col my-2'><div className='d-flex'><span><img src="https://quer.vercel.app/static/media/locksv.34d86ab8d59e3c542fcc34d973c126ea.svg"/></span><p className='mt-3'>Personalized treatment plans</p></div></div>
        
    </div>

    </div>
    </>
  )
}

export default Hero