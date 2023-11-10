import { useContext } from "react";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import { WhitoutResult } from "../../common/WhitoutResult/WhitoutResult";
import { SearchContext } from "../../../Context/SearchContext";

export const ItemList = ({ items, renderSkeletons }) => {
  const { searchTerm } = useContext(SearchContext);

  const filteredItems = items.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto bg-indigo-300">
      {items.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4">
          {renderSkeletons()}
        </div>
      ) : filteredItems.length === 0 ? (
        <WhitoutResult />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
