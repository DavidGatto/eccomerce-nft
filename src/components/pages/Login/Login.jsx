import { useContext, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Home } from "../Home/Home";
import { auth } from "../../../firebaseConfig";
import { UserContext } from "../../../Context/UserContext";
import { toast } from "react-toastify";

export const Login = () => {
  const { userEmail, setUserEmail } = useContext(UserContext);

  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleInputBlur = () => {
    setIsInputClicked(false);
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail(null);
    }
  });

  const [registering, setRegistering] = useState(false);

  const funcAuthentication = async (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    if (registering) {
      try {
        await createUserWithEmailAndPassword(auth, mail, pass);
      } catch (error) {
        toast.error("Invalid Register", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, mail, pass);
      } catch (error) {
        toast.error("Invalid login", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div>
      {userEmail ? (
        <Home />
      ) : (
        <div className=" bg-indigo-950 mt-10 mx-auto max-w-2xl rounded-3xl">
          <div className="flex justify-center items-center p-4 gap-16">
            <div>
              <h1 className=" text-2xl text-white m-4 pt-5">
                {registering ? "Register" : "Sign In"}
              </h1>
              <div className="flex flex-col justify-center items-center p-4 gap-10">
                <form
                  onSubmit={funcAuthentication}
                  className="flex flex-col gap-4 items-center justify-center"
                >
                  <input
                    className="bg-indigo-300 rounded-lg placeholder-indigo-900"
                    type="text"
                    placeholder="   Email"
                    id="email"
                  />

                  <input
                    className="bg-indigo-300 rounded-lg placeholder-indigo-900"
                    type="password"
                    placeholder="   Password"
                    id="password"
                    onClick={handleInputClick}
                    onBlur={handleInputBlur}
                  />
                  {isInputClicked && registering && (
                    <small className=" text-indigo-300">
                      The password must be at least 6 characters
                    </small>
                  )}

                  <button className="bg-indigo-500 p-1 rounded-lg w-20">
                    {registering ? "Register" : "Sign In"}
                  </button>
                </form>
              </div>
              <h4 className="text-indigo-300">
                {registering
                  ? "You already have an account"
                  : "You don't have an account"}
                <button
                  onClick={() => {
                    setRegistering(!registering);
                  }}
                  className="text-white bg-indigo-600 p-1 rounded-md"
                >
                  {registering ? "Sign In" : "Register"}
                </button>
              </h4>
            </div>
            <div className="items-center">
              <img
                className="w-56 h-80 rounded-xl"
                src={
                  registering
                    ? "https://res.cloudinary.com/dzmn27ifb/image/upload/v1699589287/038b3186d1048392db4b1e1ef058e733_imae5s.jpg"
                    : "https://res.cloudinary.com/dzmn27ifb/image/upload/v1699589306/77b3f245e657731a0f37f8470ecd18ce_zrotjl.jpg"
                }
                alt="nft space"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
