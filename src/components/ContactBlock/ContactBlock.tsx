import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

import './ContactBlock.scss';

const ContactBlock = () => {
  return (
    <div className="contact-block">
      <div className="contact-block--text">
        <p>QUESTION?</p>
        <p>WE ARE HERE</p>
        <p>TO HELP!</p>
      </div>
      <div className="contact-block--form-holder">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBlock;
