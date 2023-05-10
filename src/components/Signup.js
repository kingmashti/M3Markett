import React from 'react'
import './Signup.css'
import Crypto from '../assets/phone.png'


export const Signup = () => {
  return (
    <div className='signup'>
            <div className='container'>

                {/*left*/}
                
                <div className='left'>
                    <img src={Crypto} alt=''/>
                </div>

                {/*right*/}
                <div className='right'> 
                    <h2>Earn passive income with crypto</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets.Simply hold automaticlly earn rewards at the end of each month with no limits. </p>
                    <div className='input contai1ner'>
                        <input type='email' placeholder='enter your email'/>
                        <button className='btn'>Learn More</button>
                    </div>              
                </div>

            </div>




    </div>
  )
}

export default Signup
