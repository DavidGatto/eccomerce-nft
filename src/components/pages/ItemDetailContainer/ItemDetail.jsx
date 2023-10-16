import { CounterContainer } from "../../common/Counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="flex justify-center items-centerW">
      <div className="flex justify-center items-center bg-indigo-950 m-10 py-7 px-4 gap-11 rounded-2xl">
        <div className="flex justify-center items-center flex-col">
          <h2 className="pb-4 text-3xl text-indigo-200">
            {productSelected.title}
          </h2>
          <h4 className="text-lg text-white">{productSelected.price} ETH</h4>
          <div className="flex items-center justify-center gap-8">
            <p className="text-indigo-700">
              Category: {productSelected.category}
            </p>
            <p className="text-indigo-700">Stock: {productSelected.stock}</p>
          </div>
          <div className=" w-96 text-center">
            <p className="text-indigo-400">{productSelected.description}</p>
          </div>

          <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-xl"
            src={productSelected.image}
            alt={productSelected.title}
          />
        </div>
      </div>
    </div>
  );
};
