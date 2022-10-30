import React from 'react';
import footerPng from '../assets/footer.png'

const Footer = () => {
  return (
    <div className='container-fluid footerContainer'>
        <div className='row'>
            <div className='col-12 col-lg-6'><img className='img-fluid' src={footerPng}/></div>
            <div className='col my-auto'>
                <div className="row">
                    <div className="col border border-dark">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>sexual issues treated</li>
                            <li>our sexologist</li>
                            <li>Blogs</li>
                            <li>FAQ's</li>
                            <li>About-us</li>
                        </ul>
                    </div>
                    <div className="col border border-dark">
                        <h3>Policies</h3>
                        <ul>
                            <li>Refund & cancellation policy</li>
                            <li>privacy policy</li>
                            <li>terms of use</li>
                        </ul>
                    </div>
                    <div className="col border border-dark">
                        <h3>Contact</h3>
                        <ul>
                            <li>Constact@qurex.ai</li>
                            <li>chat with us</li>
                            <li>phone number</li>
                        </ul>
                    </div>
                </div>
                <div className='row border border-dark'>
                    <div className="col">
                        <button className='btn btn-primary mx-2'>Download on Android</button>
                        <button className='btn btn-primary'>Download on IOS</button>
                    </div>
                    
                </div>
                <div className="row border border-dark">
                <div className="col">
                    <ul className='d-flex justify-content-between'>
                        <li>FaceBook</li>
                        <li>Instagram</li>
                        <li>twitter</li>
                        <li>youtube</li>
                    </ul>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer