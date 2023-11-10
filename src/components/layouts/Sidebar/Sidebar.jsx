import { SidebarList } from "../SidebarList/SidebarList";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { BiLogIn } from "react-icons/bi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export const Sidebar = () => {
  const { userEmail } = useContext(UserContext);

  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded((curr) => !curr);
  };

  return (
    <aside className={`h-screen ${expanded ? "sticky top-0" : "sticky top-0"}`}>
      <nav
        className={`h-full flex flex-col bg-indigo-950 shadow ${
          expanded ? "w-64" : " w-24"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1695853120/imagen_2023-09-27_191837633_hsxqxw.png"
              className={`overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
              alt="logo"
            />
          </Link>
          <button
            onClick={toggleExpanded}
            className="p-1.5 rounded-lg bg-indigo-200 hover:bg-indigo-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SidebarList expanded={expanded} />

        <div className=" flex justify-center p-3 bg-gradient-to-tr from-indigo-300 to-indigo-400">
          {userEmail ? (
            <div className="flex flex-col items-center">
              <img
                src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1695854819/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-removebg-preview_i2n3hr.png"
                alt="user"
                className=" w-24 h-10 cursor-pointer"
              />
              <button className="text-indigo-950" onClick={() => signOut(auth)}>
                Log Out
              </button>
            </div>
          ) : (
            <BiLogIn className="text-2xl" />
          )}
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              {userEmail ? (
                <small>{userEmail}</small>
              ) : (
                <Link to="/login">
                  <button className=" text-indigo-950">Login/Register</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};
