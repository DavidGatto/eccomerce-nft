import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="flex items-center">
        <button>
          <BsFillCartFill className=" w-7 h-7 text-indigo-500 hover:text-indigo-300" />
        </button>
        <small className="text-indigo-900 text-center bg-indigo-400 w-4 h-5 rounded-md">
          0
        </small>
      </div>
    </Link>
  );
};
