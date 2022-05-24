import React from 'react'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Testimonials</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Demo</a>
                </li>
            </ul>
            <div className='bottom'>
                <span classname='line'></span>
                <p>2022 GreenJade Systems Solution. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer