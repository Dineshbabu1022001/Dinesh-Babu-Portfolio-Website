import React from 'react'
import { ContactContent } from './ContactContent'
export const Contact = () => {
  return (
    <div>
    <p className='contact-heading' style={{position:"relative", left:"10px"}}>Get in Touch.</p>
    <div id='contact' className='contact'>
       
              <div className='contact-writeup'>
                  <p className='contact-description'>Are you looking for a developer who hustles hard but stays humble? A curious soul who bobs their head to any music? A foodie who will venture out for amazing cuisine with you? ✨ If so, do get in touch!</p>
                      <ContactContent/>
              </div>

         <div className="end-page">
             <div className="column">
                 <p style={{textAlign:"center"}}>💌 Contact me</p>
                 <p>dineshbabu1022001@gmail.com</p>
             </div>
             <div className="column">
              <p style={{textAlign:"center"}}>🤝 stay connected </p> 
                  <div className="social-links"> 
                        <a href="https://www.linkedin.com/in/dinesh-babu-n-g-2bb529268/">LinkedIn</a> |
                        <a href="https://github.com/Dineshbabu1022001">GitHub</a> ||
                        <a href="https://drive.google.com/file/d/1cvTL2doMyJBFRa_wUeL7YHnNnZD3zvyj/view?usp=drivesdk">Resume</a>
                 </div> 
            </div>
            <div className="column">
            <p style={{textAlign:"center"}}>Made with ❤️</p>
            <p>Last updated Jan, 2025</p>
        </div>
     </div>
    </div>
    </div>

  )
}
