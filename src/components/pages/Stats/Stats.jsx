import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

export const Stats = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let usersCollection = collection(db, "users");

    getDocs(usersCollection).then((res) => {
      let newArr = res.docs.map((user) => {
        return { ...user.data(), id: user.id };
      });
      setItems(newArr);
    });
  }, []);

  return (
    <div>
      <table className="min-w-full  bg-indigo-300 border border-indigo-300">
        <thead>
          <tr>
            <th className="py-2 px-4  text-right text-indigo-700">Name</th>
            <th className="py-2 px-4 text-right pl-8 text-indigo-700">Price</th>
            <th className="py-2 px-4 text-right pl-10 text-indigo-700">
              volume
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((user, index) => (
            <tr className=" border-b-2 border-indigo-600" key={index}>
              <td className="py-2 px-4 ">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className=" text-left px-4 text-indigo-950">{user.name}</td>
              <td className="py-2 px-4 text-indigo-950">{user.price1} ETH</td>
              <td className="py-2 px-4 text-indigo-950">{user.price2} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
