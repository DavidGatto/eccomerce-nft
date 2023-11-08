import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import {
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
const initialData = {
  number: "",
  name: "",
  expiry: "",
  cvc: "",
  phone: "",
  mail: "",
};

function Checkout() {
  const [formData, setFormData] = useState(initialData);

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChange = (event) => {
    const inputText = event.target.value;
    let formattedText = inputText
      .replace(/\D/g, "")
      .slice(0, 16)
      .padEnd(16, "X")
      .match(/.{1,4}/g)
      ?.join(" ");

    if (inputText.length < formattedText.length) {
      formattedText = formattedText.slice(0, inputText.length);
    }

    setFormData({ ...formData, number: formattedText });
  };

  const handleGenericInputChange = (key, value, regex) => {
    if (value === "" || regex.test(value)) {
      handleInputChange(key, value);
    }
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlesumbit = (e) => {
    e.preventDefault();
    let order = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        mail: formData.mail,
      },
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((e) => {
      updateDoc(doc(db, "products", e.id), { stock: e.stock - e.quantity });
    });
    clearCart();
  };

  return (
    <>
      {orderId ? (
        <h2>gracias por la compra {orderId}</h2>
      ) : (
        <div className="flex w-full mx-auto justify-center items-center">
          <div className="items-center bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg shadow-lg mt-4 flex">
            <div className="p-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="flex justify-center p-10 bg-gradient-to-r from-indigo-100 to-indigo-300">
                  <div className="w-72 h-44 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg">
                    <div className="flex justify-between m-2"></div>
                    <div className="flex justify-center mt-4">
                      <h1 className="text-gray-400 font-thin font-os">
                        {formData.number
                          ? formData.number
                          : "XXXX XXXX XXXX XXXX"}
                      </h1>
                    </div>
                    <div className="flex flex-col justfiy-end mt-1 p-4 text-gray-400 font-quick">
                      <p className="font-bold text-xs">
                        {formData.expiry
                          ? formData.expiry.slice(0, 2) +
                            " / " +
                            formData.expiry.slice(2)
                          : "MM / AA"}
                      </p>
                      <h4 className="uppercase tracking-wider font-semibold text-xs">
                        {formData.name ? formData.name : "YOUR NAME"}
                      </h4>
                      <h4>{formData.cvc ? formData.cvc : "CVC"}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handlesumbit} className="m-4 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  required
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cardholder Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    const inputText = e.target.value;
                    const regex = /^[A-Za-z]+$/;
                    if (regex.test(inputText) || inputText === "") {
                      handleInputChange("name", inputText);
                    }
                  }}
                  maxLength={19}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiry
                  </label>
                  <input
                    required
                    type="text"
                    id="expiry"
                    name="expiry"
                    maxLength={4}
                    value={formData.expiry}
                    onChange={(e) =>
                      handleGenericInputChange(
                        "expiry",
                        e.target.value,
                        /^[0-9\b]+$/
                      )
                    }
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <input
                    required
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    maxLength={4}
                    onChange={(e) =>
                      handleGenericInputChange(
                        "cvc",
                        e.target.value,
                        /^[0-9\b]+$/
                      )
                    }
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  required
                  type="text"
                  id="phone"
                  name="phone"
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) =>
                    handleGenericInputChange(
                      "phone",
                      e.target.value,
                      /^[0-9\b]+$/
                    )
                  }
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mail
                </label>
                <input
                  required
                  type="email"
                  id="mail"
                  name="mail"
                  value={formData.mail}
                  onChange={(e) => handleInputChange("mail", e.target.value)}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  onClick={handlesumbit}
                  type="submit"
                  className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
