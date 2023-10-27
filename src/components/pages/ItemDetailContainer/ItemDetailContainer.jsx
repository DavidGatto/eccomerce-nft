import { useContext, useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id);

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      reject("Error");
    });
    getProduct.then((res) => setProductSelected(res)).catch((err) => err);
  }, [id]);

  const onAdd = (quantity) => {
    let product = {
      ...productSelected,
      quantity: quantity,
    };
    addToCart(product);
  };

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      initial={totalQuantity}
    />
  );
};
