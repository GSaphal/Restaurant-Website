import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start">
      <button
        className="p-3 shadow-xl ring-2 ring-primary/20 bg-gray-50 rounded-lg mb-5"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft size={18} />
      </button>
    </div>
  );
};

export default BackButton;
