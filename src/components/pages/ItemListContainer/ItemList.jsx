export const ItemList = ({ items }) => {
  return (
    <div className="container mx-auto bg-indigo-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-64 mt-8 mx-auto"
          >
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
                  ETH{item.price}
                </span>
                <button className=" bg-gradient-to-tr from-indigo-300 to-indigo-400 hover:from-indigo-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-full">
                  INFO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
