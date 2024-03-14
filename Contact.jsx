import React from 'react';
import './Contact.css';
import Header from './Header';
export default function Contact() {
  return (
    <div>
        <Header/>
        <hr/>
        <div className='contact__block'>
            <h2 className="contact__heading">contact us</h2>
            <h1>Contact For Any Query</h1>
        </div>
    </div>
  )
}
