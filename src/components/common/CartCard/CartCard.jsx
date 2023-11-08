import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const CartCard = () => {
  const { cart, deleteProduct, clearCart, totalPrice, totalProducts } =
    useContext(CartContext);
  let total = totalPrice();
  let totalItems = totalProducts();
  return (
    <div>
      <div>
        {cart.map((product) => (
          <div
            className="bg-gradient-to-tr from-indigo-300 to-indigo-400 shadow-md rounded-md flex  items-center mx-36 p-4 mt-10  shadow-indigo-950"
            key={product.id}
          >
            <img
              className=" w-28 shadow-md shadow-indigo-950"
              src={product.image}
              alt={product.title}
            />
            <div className=" ml-40">
              <h2 className=" text-xl text-indigo-950">{product.title}</h2>
              <div className="flex items-center gap-5">
                <p className="text-indigo-950">x{product.quantity}</p>
                <span className="text-indigo-950">{product.price} ETH</span>
              </div>
            </div>
            <button onClick={() => deleteProduct(product.id)}>
              <RiDeleteBin5Line className="text-xl  text-red-950" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-10 gap-32">
        <button
          onClick={clearCart}
          className=" bg-blue-900 rounded-sm p-1 text-white"
        >
          Clear cart
        </button>
        <div className="items-center flex flex-col justify-center">
          <h4>Total price: {total} ETH</h4>
          <h4>Total items: {totalItems}</h4>
        </div>
        <Link to="/checkout">
          <button className=" bg-blue-900 rounded-sm p-1 text-white">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
};
