const InnerMenuPage = ({ title, items, scrollToSection, sectionRefs }) => {
  return (
    <div className=" max-w-screen-lg w-full mx-auto">
      <div className="mb-[20px] md:text-[30px] text-[20px] sm:text-[25px] font-bold py-3">
        {title}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-[50px]">
        {items.map((lunchItem, index) => (
          <div
            key={index}
            className="bg-primary p-2 rounded-lg hover:bg-[#b59c7e] text-center text-white cursor-pointer"
            onClick={() => scrollToSection(index)}
          >
            {lunchItem.title["jp"]}
          </div>
        ))}
      </div>
      <div>
        {items.map((lunchItem, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
            className="mb-12 mt-[10px]"
          >
            <h2 className="text-[22px] font-bold mb-2 text-center">
              {lunchItem.title["jp"]}
            </h2>
            <div className="h-[1px] bg-gray-300 mb-4"></div>
            <div className="flex flex-col justify-center items-center gap-4 w-30 h-30">
              {lunchItem.image.map((image, index) => (
                <img
                  src={image}
                  alt={`${lunchItem.title["jp"]}-${index}`}
                  className="w-30 h-30 object-contain"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnerMenuPage;
