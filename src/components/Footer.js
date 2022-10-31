import React from 'react';
import footerPng from '../assets/footer.png'

const Footer = () => {
  return (
    <div className='container-fluid footerContainer'>
        <div className='row'>
            <div className='col-12 text-center col-lg-6'><img className='img-fluid' src={footerPng}/></div>
            <div className='col my-auto'>
                <div className="row">
                    <div className="col">
                        <h3>Quick Links</h3>
                        <ul className='list-unstyled'>
                            <li>sexual issues treated</li>
                            <li>our sexologist</li>
                            <li>Blogs</li>
                            <li>FAQ's</li>
                            <li>About-us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Policies</h3>
                        <ul className='list-unstyled'>
                            <li>Refund & cancellation policy</li>
                            <li>privacy policy</li>
                            <li>terms of use</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact</h3>
                        <ul className='list-unstyled'>
                            <li>Constact@qurex.ai</li>
                            <li>chat with us</li>
                            <li>phone number</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <button className='btn btn-primary mx-2'>Download on Android</button>
                        <button className='btn btn-primary'>Download on IOS</button>
                    </div>
                    
                </div>
                <div className="row ">
                <div className="col">
                    <ul className='d-flex justify-content-between list-unstyled'>
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