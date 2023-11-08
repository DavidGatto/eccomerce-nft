import { useContext, useEffect, useState } from "react";

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(id);

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) =>
      setProductSelected({ id: res.id, ...res.data() })
    );
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
