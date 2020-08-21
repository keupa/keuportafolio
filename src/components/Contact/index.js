import React from 'react'
import './contact.css'

const mail = 'mailto:kapirupia@gmail.com'
const twitter = 'https://twitter.com/keu_pa'
const linkedin = 'https://www.linkedin.com/in/keupa/'

function Contact() {
    return(
        <div className='contact-container'>
            <h1 className='letswork'>LETS WORK TOGETHER! </h1>
                <div className='contact-info-container'>
                    <p>Shoot me a message and I'll get back to you ASAP <span className='smiley-face'>☺</span></p>
                   <p>✉ <a href={mail} target="_blank" className='no-underline'>kapirupia@gmail.com</a></p>
                    <p>✻ <a href={linkedin} target="_blank" className='no-underline'>linkedin.com/in/keupa/</a></p>
                    <p>♪  <a href={twitter} target="_blank" className='no-underline'> twitter.com/keu_pa</a></p>
                </div>
        </div>
    )
}

export default Contact