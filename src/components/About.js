import React from 'react';
import cmd from '../images/cmd.png'

function About() {
  return (
    <div className='about' id='about'>
        <div className='container'>
            <img src={cmd} alt='medical director' />
        <div className='col-2'>
            <h2>About</h2>
            <span className='line'></span>
            <p>Over 10 years experience in clinical practice, teaching and research in Psychiatry.
                Fellow, National Postgraduate Medical College (FCRC equivalent)
                 Mental Health Administrator, and Mental Health Consultant/Facilitator</p>
            <p>I am Dr. Bassey Edet. Chief Consultant Psychiatrist/Medical Director, Federal Neuro-Psychiatric Hospital Calabar.</p>
            <button className="button">Explore More</button>
        </div>
        </div>
    </div>
  )
}

export default About