import React from 'react'
import './css/Company.css'
const Company = () => {
  return (
    <section className='main-company'>
      <div className='company-hero'>
        <h3 className='sub-title'>WHO WE ARE</h3>
        <h1 className='title-company'>EMPOWERING ORGANIZATIONS WITH IT SOLUTIONS</h1>

        <div className='stats-section'>
          <div className='stats1'>
            <h3 className='stats-digits'>70+</h3>
            <h5 className='stats-info'>Solutions<br/>delivered</h5>
          </div>
          <div className='stats1'>
            <h3 className='stats-digits'>20+</h3>
            <h5 className='stats-info'>Trusted<br/>Clients</h5>
          </div>        <div className='stats1'>
            <h3 className='stats-digits'>2016</h3>
            <h5 className='stats-info'>Helping Businesses Since</h5>
          </div>        <div className='stats1'>
            <h3 className='stats-digits'>10+</h3>
            <h5 className='stats-info'>Services For Businesses</h5>
          </div>
        </div>
      </div>
      <div className='company-heads'>
        <div className='left-side'>

        </div>
        <div className='right-side'>
          <div className='content'>
              <h5>Get to know us</h5>
              <p>THE Dev Technologies is a team of highly skilled enthusiasts dedicated to making the world an intelligent and fulfilled place by empowering organizations to gain a competitive edge. Since 2016, we have been providing simple, yet powerful IT solutions tailored to meet the unique needs of our clients.</p>
          </div>
          <div className='coo'>
            
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Company