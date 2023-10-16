import { AiFillHome } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SidebarList = ({ expanded }) => {
  const [activeItem, setActiveItem] = useState("Home");

  const itemClick = (text) => {
    setActiveItem(text);
  };

  return (
    <ul className="flex-1 mt-7 px-3">
      <Link to="/">
        <SidebarItem
          icon={<AiFillHome />}
          text="Home"
          isActive={activeItem === "Home"}
          expanded={expanded}
          onClick={() => itemClick("Home")}
        />
      </Link>
      <Link to="/store">
        <SidebarItem
          icon={<FaStore />}
          text="Store"
          isActive={activeItem === "Store"}
          expanded={expanded}
          onClick={() => itemClick("Store")}
        />
      </Link>
      <SidebarItem
        icon={<MdQueryStats />}
        text="Stats"
        // isActive={activeItem === "Stats"}
        expanded={expanded}
        // onClick={() => itemClick("Stats")}
      />
    </ul>
  );
};
