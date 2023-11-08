import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("products")) || [];

  const [cart, setCart] = useState(initialCart);

  const addToCart = (product) => {
    if (itsInTheCart(product.id)) {
      let newArr = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity };
        } else {
          return item;
        }
      });
      setCart(newArr);
      localStorage.setItem("products", JSON.stringify(newArr));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("products", JSON.stringify([...cart, product]));
    }
  };

  const itsInTheCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getQuantityById = (id) => {
    let product = cart.find((item) => item.id === id);
    return product?.quantity;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("products");
  };

  const deleteProduct = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      const updatedCart =
        product.quantity > 1
          ? cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          : cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem("products", JSON.stringify(updatedCart));
    }
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
    return total;
  };

  const totalProducts = () => {
    let total = cart.reduce((acc, el) => acc + el.quantity, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    deleteProduct,
    clearCart,
    totalPrice,
    totalProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
