import React from 'react';

const UberEats = () => {
  return (
    <div className="w-full  my-[120px] sm:my-[40px] flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-6 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="images/ubereats.png"
          alt="Uber Eats"
          className="w-3/4 md:w-full object-contain"
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Order from Uber Eats</h1>
        <p className="text-gray-600 mb-6">
          Enjoy delicious meals delivered right to your doorstep with Uber Eats.
        </p>
        <a
          href="https://www.ubereats.com/"
          className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

export default UberEats;
