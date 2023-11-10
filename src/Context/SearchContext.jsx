import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextComponent = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
