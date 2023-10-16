import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <div className="rounded-lg overflow-hidden w-64 mt-8 mx-auto">
      <img
        src={item.image}
        alt={item.title}
        className="w-auto  h-auto object-cover"
      />
      <div className="p-4 bg-indigo-950">
        <h2 className="text-2xl text-indigo-300 font-semibold mb-2">
          {item.title}
        </h2>
        <div className="flex justify-between items-center">
          <span className="text-l text-indigo-300 font-bold">
            {item.price} ETH
          </span>
          <Link to={`/itemDetail/${item.id}`}>
            <button className=" bg-gradient-to-tr from-indigo-300 to-indigo-400 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-full">
              INFO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
