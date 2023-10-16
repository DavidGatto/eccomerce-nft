import { AiFillHome } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const SidebarList = ({ expanded }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveItem("Home");
    } else if (
      currentPath === "/store" ||
      currentPath.startsWith("/category/")
    ) {
      setActiveItem("Store");
    } else if (currentPath === "/stats") {
      setActiveItem("Stats");
    }
  }, [location]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <ul className="flex-1 mt-7 px-3">
      <Link to="/" onClick={() => handleItemClick("Home")}>
        <SidebarItem
          icon={<AiFillHome />}
          text="Home"
          isActive={activeItem === "Home"}
          expanded={expanded}
        />
      </Link>
      <Link to="/store" onClick={() => handleItemClick("Store")}>
        <SidebarItem
          icon={<FaStore />}
          text="Store"
          isActive={activeItem === "Store"}
          expanded={expanded}
        />
      </Link>
      {/* <Link to="/stats" onClick={() => handleItemClick("Stats")}> */}
      <SidebarItem
        icon={<MdQueryStats />}
        text="Stats"
        isActive={activeItem === "Stats"}
        expanded={expanded}
      />
      {/* </Link> */}
    </ul>
  );
};
