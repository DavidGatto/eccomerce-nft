import { useContext } from "react";
import { CartCard } from "../../common/CartCard/CartCard";
import { CartContext } from "../../../Context/CartContext";
import { CartEmpty } from "../../common/CartEmpty/CartEmpty";

export const CartContainer = () => {
  const { cart } = useContext(CartContext);
  return <>{cart.length === 0 ? <CartEmpty /> : <CartCard />}</>;
};
