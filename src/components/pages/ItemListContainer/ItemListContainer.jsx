import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
  const renderSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < 6; i++) {
      skeletons.push(
        <div className="flex flex-col justify-center items-center">
          <Skeleton variant="rectangular" width={236} height={184} />
          <Skeleton variant="text" width={180} height={60} />
          <div className="flex gap-4">
            <Skeleton variant="text" width={150} height={50} />
            <Skeleton variant="circle" width={60} height={40} />
          </div>
        </div>
      );
    }
    return skeletons;
  };

  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let q;

    if (!categoryName) {
      q = productsCollection;
    } else {
      q = query(productsCollection, where("category", "==", categoryName));
    }
    getDocs(q).then((res) => {
      let newArr = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArr);
    });
  }, [categoryName]);

  return (
    <div>
      {/* <button onClick={rellenarDB}>rellenar</button> */}
      <ItemList items={items} renderSkeletons={renderSkeletons} />
    </div>
  );
};
