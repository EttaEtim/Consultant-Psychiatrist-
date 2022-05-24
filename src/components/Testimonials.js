import React from 'react';
import user1 from '../images/user1.jpeg';
import user2 from '../images/user2.jpeg';
import user3 from '../images/user3.jpeg'



function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
        <div className='container'>
            <h2>Testimonials</h2>
            <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1' />
                        <p>It is not every day that you come across a passionate and trustworthy Psychiatric Doctor. Dr. Bassey is a true professional who does his work with 100% dedication</p>
                        <p><span>Robert Utah</span></p>
                    </div>

                    <div className='card'>
                        <img src={user2} alt='user2' />
                        <p>In just 3 very brief meetings with Dr. Bassey, he managed to find the solution and personally catered to my situation and expectations. Punctual, astute and very reliable.  </p>
                        <p><span>Samantha Surrey</span></p>
                    </div>

                    <div className='card'>
                        <img src={user3} alt='user3' />
                        <p>A very professional Consultant Psychiatrist who is versed in his job and has demonstrated a high amount of integrity and confidentiality in the time I have known him, and he is fast to respond to my concerns</p>
                        <p><span>James Eyibio</span></p>
                    </div>
                </div>
        </div>
    </div>
  )
}





export default Testimonials