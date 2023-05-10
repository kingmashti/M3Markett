import React from 'react'
import './Hero.css'
import '../index.css'
import Crypto from '../assets/Untitled.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'> 

        {/* Left Side */}

        <div className='left'>
            <p>Buy & Sell Crypto 24/7 ussing your retierment account</p>
            <h1>Invest in Cryptocurrency with your IRA</h1>
            <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div>
                {/* <input type='email' placeholder='Enter your email' />
                <button className='btn'> Learn more</button> */}
            </div>

        </div>



        {/* Right Side */}
        <div className='right'>
`           <div className='img-container'>
                <img src={Crypto} alt=''/>
            </div>`


        </div>

        
        </div>


    </div>
  )
}

export default Hero
