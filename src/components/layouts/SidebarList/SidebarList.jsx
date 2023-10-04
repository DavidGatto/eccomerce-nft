import { AiFillHome } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { SidebarItem } from "../SidebarItem/SidebarItem";

export const SidebarList = ({ expanded }) => {
  return (
    <ul className="flex-1 mt-7 px-3">
      <SidebarItem
        icon={<AiFillHome />}
        text="Home"
        active
        expanded={expanded}
      />
      <SidebarItem icon={<FaStore />} text="Store" expanded={expanded} />
      <SidebarItem icon={<MdQueryStats />} text="Stats" expanded={expanded} />
    </ul>
  );
};
