import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
      reject("Error");
    });
    getProduct.then((res) => setProductSelected(res)).catch((err) => err);
  }, [id]);

  const onAdd = (quantity) => {
    let obj = {
      ...productSelected,
      quantity: quantity,
    };
    console.log("se agrego", obj);
  };

  return <ItemDetail productSelected={productSelected} onAdd={onAdd} />;
};
