import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const filteredProduct = products.filter(
      (product) => product.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? filteredProduct : products);
      reject("Error");
    });

    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);
  return <ItemList items={items} />;
};
