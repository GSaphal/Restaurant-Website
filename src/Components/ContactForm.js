import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let isValid = true;

    // Name validation
    if (!form.current.name.value) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.current.email.value) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(form.current.email.value)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (optional, but you can add a regex for it if needed)
    if (!form.current.phone.value) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form before sending the email
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col space-y-4 max-w-md mb-[20px] p-4">
        
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-thin mb-2">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="p-2 border-2 text-sm border-gray-300 rounded-md"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-thin mb-2">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Enter your address"
            className="p-2 border-2 text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-thin mb-2">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="p-2 border-2 text-sm border-gray-300 rounded-md"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-thin mb-2">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="p-2 border-2 text-sm border-gray-300 rounded-md"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact-details" className="text-sm font-thin mb-2">Contact Details</label>
          <textarea
            id="contact-details"
            name="contact-details"
            placeholder="Additional contact information"
            rows="4"
            className="p-2 border-2 text-sm border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="bg-[#f57224] text-white py-2 rounded-md hover:bg-[#eb1832]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
