import pageData from "../data/content.json";
import BackButton from "../button";

const NaanInformation = () => {
  const { naanImages } = pageData;

  return (
    <div className="container">
      <BackButton />
      <div className=" max-w-screen-lg w-full mx-auto">
        <h2 className="text-[22px] font-bold mb-2 text-center mt-5 text-primary">
          毎月の月替わりナン
        </h2>
        <div className="flex flex-wrap w-full  flex-row gap-5 justify-center items-center my-10">
          {naanImages.map((image, index) => (
            <div className="flex flex-col gap-y-3 text-center shadow-md p-2 bg-gray-100 rounded-xl">
              <img
                key={index}
                src={image.image}
                alt="Naan"
                className="h-96 object-contain rounded-md w-[100%]"
              />
              <p className="text-md font-bold">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NaanInformation;
