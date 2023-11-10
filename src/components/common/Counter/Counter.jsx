import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const Counter = ({ sumar, restar, counter, onAdd, notify }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-4">
      <div className="flex items-center gap-4">
        <button className=" text-xl text-indigo-200" onClick={sumar}>
          <AiFillPlusSquare />
        </button>
        <h4 className="text-white">{counter}</h4>
        <button className=" text-xl text-indigo-200" onClick={restar}>
          <AiFillMinusSquare />
        </button>
      </div>
      <div className="flex gap-6">
        <button
          className=" bg-indigo-200 rounded p-1"
          onClick={() => {
            onAdd(counter);
            notify();
          }}
        >
          Add to cart
        </button>
        <Link to="/store">
          <button className=" bg-indigo-200 rounded p-1">Back to store</button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};
