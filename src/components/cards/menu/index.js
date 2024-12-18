import { FaAngleRight } from "react-icons/fa";

const MenuCard = ({ src, name }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden relative  transition-all hover:shadow-lg cursor-pointer  h-72 shadow-md `}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-70 w-full h-12 absolute bottom-0 flex items-center px-3 text-white text-lg font-bold justify-between">
        <h6 className="text-white">{name}</h6>
        <div>
          <FaAngleRight className="text-white text-sm" />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
