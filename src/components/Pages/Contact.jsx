import React from 'react'
import Header from '../Utilities/Header'

function Contact() {
  return (
    <React.Fragment>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center max-w-6xl gap-5'>
            <Header title='CONTACT US' />
            <p>Let’s connect We’re here to help, and we’d love to hear from you! Wheter you have a question, a comment, or just want to chat, you can reach out to us through the contact form on this page, or by phone, email, or social media.</p>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Contact