import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex bg-indigo-300">
          <Sidebar />
          <div className="flex-1 bg-indigo-300">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
