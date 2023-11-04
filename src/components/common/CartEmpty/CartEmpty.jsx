import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="flex justify-center items-center mt-24 gap-8 bg-gradient-to-tr from-indigo-300 to-indigo-400 m-10 py-10 rounded-xl shadow-2xl">
      <img
        className=" w-52 h-52 rounded-xl"
        src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1698608845/8add68eaa891f1fdd8f0d8a5b3c77d90_wda81a.jpg"
        alt="art nft"
      />
      <div className="text-center m-4">
        <h1 className="text-5xl text-center text-indigo-950">
          Your cart is empty
        </h1>
        <Link to="/store">
          <button className=" bg-blue-900 rounded-sm p-1 text-white mt-10">
            Go to store
          </button>
        </Link>
      </div>
      <img
        className="w-52 h-52 rounded-xl"
        src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1698608842/c934c8dec9f06a314db5b51145265329_i7rm2u.jpg"
        alt="nft art"
      />
    </div>
  );
};
