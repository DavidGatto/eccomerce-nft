export const SidebarItem = ({ icon, text, isActive, expanded, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`group relative flex justify-center items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
    ${
      isActive
        ? "bg-gradient-to-tr from-indigo-300 to-indigo-400 text-indigo-800"
        : "hover:bg-indigo-500 text-white"
    }
    `}
    >
      {icon}
      <span className={`overflow-hidden ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {!expanded && (
        <div
          className={`
           invisible absolute left-full rounded-md px-2 py-1 ml-6 bg-violet-300 text-indigo-800 text-sm opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
};
