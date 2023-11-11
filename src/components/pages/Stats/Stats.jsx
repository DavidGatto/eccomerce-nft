import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import "@mui/material/styles";
export const Stats = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, "users");
        const res = await getDocs(usersCollection);
        const newArr = res.docs.map((user) => ({
          ...user.data(),
          id: user.id,
        }));
        setItems(newArr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {items.length > 0 ? (
        <div className="mb-10 mx-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-tr from-indigo-300 to-indigo-400 shadow-md rounded-md flex flex-col justify-between p-4 mt-10 shadow-indigo-950"
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  className="rounded-full w-14 ml-2 shadow-lg  shadow-indigo-900"
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="ml-2 text-lg font-semibold text-indigo-950">
                  {item.name}
                </h1>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-indigo-600">{item.price1} ETH</p>
                <p className="font-bold text-indigo-600">{item.price2} ETH</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <CircularProgress size={80} />
        </div>
      )}
    </>
  );
};
