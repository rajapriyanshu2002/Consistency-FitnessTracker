import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_x5tnavn', 'template_1tvmbqf', form.current, {
            publicKey: 'nNp85T04d0KkPqaJB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div className='Join' id='join-us'>
      <div className='left-j'>
        <hr>
        </hr>
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP </span>
        </div>
        <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US? </span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type='email' name='user_email' placeholder='Enter your Email address'></input>
            <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
