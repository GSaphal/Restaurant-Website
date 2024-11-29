import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BusinessHours = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { title: 'Station', content: '2 minutes walk to Kitamoto Station on the JR Takasaki Line' },
    { title: 'Street address', content: '364-0031 Kitamoto City Center, Saitama Prefecture 1-61 Urban ST 103' },
    { title: 'TEL/FAX', content: '048-592-2155' },
    { title: 'Business hours', content: 'Lunch 11:00 ~ 15:00 / Dinner 17:00 ~ 23:00' },
    { title: 'Regular holiday', content: 'Second and fourth Monday rest' },
    { title: 'Parking lot', content: 'There are 2 coin parking in front of the store and nearby' },
    { title: 'Remark', content: 'It is a store just after Kitamoto Station West Exit. * It is a separate store from Ishito store.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-10 px-4">
      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <img
            src="images/restaurant.jpg"
            alt="Restaurant"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
        <div >
          <img
            src="images/restaurant2.jpg"
            alt="Restaurant"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Accordion Section */}
      <div>
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left shadow-sm px-4 py-3 font-light text-sm bg-gray-100 hover:bg-gray-200 flex justify-between items-center rounded-md"
              onClick={() => handleToggle(index)}
            >
              <span>{item.title}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-sm text-gray-600" />
              ) : (
                <FaChevronDown className="text-sm text-gray-600" />
              )}
            </button>
            
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50 mt-2 rounded-md shadow-sm">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Location Map */}
      <div className="mt-8">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8634.255708185045!2d139.53105668118286!3d36.026944117788126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ce0719048a69%3A0xaf8d6014f7b63335!2z44Kk44Oz44OJ5paZ55CGSGVhdmVuIOWMl-acrOilv-WPo-W6l-mnhQ!5e0!3m2!1sja!2sjp!4v1732798643838!5m2!1sja!2sjp"
          className="w-full h-96 my-[20px] rounded-md shadow-md border-2 border-gray-200"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default BusinessHours;
