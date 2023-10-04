import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ItemList } from "./ItemList";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      reject("Error");
    });

    tarea.then((res) => setItems(res)).catch((err) => console.log(err));
  }, []);
  return <ItemList items={items} />;
};
