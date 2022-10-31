import React from 'react'

const Counter = () => {
  return (
    <div className='container'>
        <div className='row mx-5 border text-center justify-content-between border-dark'>
            <div className='col-12 col-md-4 border border-success'>
                <h1>30L+</h1>
                <p>People treated</p>
            </div>
            <div className='col-12 col-md-4 border border-success'>
                <h1>3K+</h1>
                <p>People educated</p>
            </div>
            <div className='col-12 col-md-4 border border-success'>
                <h1>87%</h1>
                <p>Treatment success rate</p>
            </div>
        </div>
    </div>
  )
}

export default Counter