import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4dd9v37', 'template_hsvkdpm', form.current, 'fjp_OKCtmcrVNHMum')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Email sent successfully!', {
            position: 'top-center', // Use string for position
            autoClose: 3000, // Closes after 3 seconds
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(`Failed to send email: ${error.text}`, {
            position: 'top-center', // Use string for position
            autoClose: 3000, // Closes after 3 seconds
          });
        }
      );
    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <div className="contact-content">
      <form ref={form} style={{ width: '80%', margin: '0 auto' }} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          className="input-field"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="to_name"
          className="input-field"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="input-field textarea"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
};
