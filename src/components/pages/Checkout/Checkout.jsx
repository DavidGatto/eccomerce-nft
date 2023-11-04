import { useState } from "react";

function Checkout() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

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

    setNumber(formattedText);
  };

  return (
    <div>
      <div className="flex w-full mx-auto  justify-center items-center">
        <div className="items-center bg-indigo-400 rounded-lg shadow-lg mt-10 flex">
          <div className="p-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="flex justify-center p-10 bg-gradient-to-r from-indigo-100   to-indigo-300">
                <div className=" w-72 h-44 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg">
                  <div className="flex justify-between m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <line x1="7" y1="15" x2="7.01" y2="15" />
                      <line x1="11" y1="15" x2="13" y2="15" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
                      <circle cx="14.5" cy="14.5" r="5.5" />
                    </svg>
                  </div>
                  <div className="flex justify-center mt-4">
                    <h1 className="text-gray-400 font-thin font-os">
                      {number ? number : "XXXX XXXX XXXX XXXX"}
                    </h1>
                  </div>
                  <div className="flex flex-col justfiy-end mt-1 p-4 text-gray-400 font-quick">
                    <p className="font-bold text-xs">
                      {expiry
                        ? expiry.slice(0, 2) + " / " + expiry.slice(2)
                        : "MM / AA"}
                    </p>
                    <h4 className="uppercase tracking-wider font-semibold text-xs">
                      {name ? name : "YOUR NAME"}
                    </h4>
                    <h4>{cvc ? cvc : "CVC"}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="m-8 flex flex-col gap-5  ">
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
                value={number}
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
                value={name}
                onChange={(e) => {
                  const inputText = e.target.value;
                  const regex = /^[A-Za-z]+$/;
                  if (regex.test(inputText) || inputText === "") {
                    setName(inputText);
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
                  value={expiry}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === "" || re.test(e.target.value)) {
                      setExpiry(e.target.value);
                    }
                  }}
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
                  value={cvc}
                  maxLength={4}
                  onChange={(e) => {
                    const inputText = e.target.value;
                    const regex = /^[0-9\b]+$/;
                    if (inputText === "" || regex.test(inputText)) {
                      setCvc(inputText);
                    }
                  }}
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
