import React from 'react'

const Contact = () => {
  return (
    <div className="w-[1280px] w-full mx-auto pt-[40px]">
      {/* Store title */}
      <div className="font-bold text-gray-700 text-[20px] mb-[10px]">SNS at the North Exit store in Haven</div>
      
      {/* Thin line */}
      <div className="h-[1px] bg-gray-300 mb-4"></div>
      
      {/* Render images in a grid */}
      <div className="grid grid-cols-3 gap-4">
       <div>
        <figcaption>Line official account</figcaption>
        <div></div>

       </div>
       <div>
        <figcaption>Facebook</figcaption>
          <div></div>
       </div>
       <div>
           <figcaption>Twitter</figcaption>
           <div></div>
       </div>
      </div>
    </div>
  );
};

export default Contact;
