import React from 'react';

const ContactForm = () => {
  return (
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
          className="p-2 border-2 text-sm text-sm border-gray-300 rounded-md"
        />
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

      <button type="submit" className="bg-[#cd162c] text-white py-2  rounded-md hover:bg-[#eb1832]">
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
