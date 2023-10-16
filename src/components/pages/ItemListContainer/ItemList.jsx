import { ProductCard } from "../../common/ProductCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div className="container mx-auto bg-indigo-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
