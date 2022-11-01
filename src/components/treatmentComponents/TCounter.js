import React from 'react'

const TCounter = () => {
  return (
    <div className='container my-5'>
        <div className='row gx-2'>
            <div className='col'>
                <h1 className='counterTitle'>49%</h1>
                <p className='text-wrap' style={{width:'18rem'}}>men over the age of 40 experience erectile dysfunction.</p>
            </div>
            <div className='col'>
                <h1 className='counterTitle'>91%</h1>
                <p className='text-wrap' style={{width:'18rem'}}>people are on wrong or ineffective treatment for them.</p>
            </div>
            <div className='col'>
                <h1 className='counterTitle'>57%</h1>
                <p className='text-wrap' style={{width:'18rem'}}>men with diabetes experience erectile dysfunction.</p>
            </div>
        </div>
    </div>
  )
}

export default TCounter