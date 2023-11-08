import { ProductCard } from "../../common/ProductCard/ProductCard";

export const ItemList = ({ items, renderSkeletons }) => {
  return (
    <div className="container mx-auto bg-indigo-300">
      {items.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4">
          {renderSkeletons()}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
