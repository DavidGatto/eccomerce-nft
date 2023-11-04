import { ProductCard } from "../../common/ProductCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";

export const ItemList = ({ items }) => {
  const renderSkeletons = () => {
    const skeletons = [];

    for (let i = 0; i < 6; i++) {
      skeletons.push(
        <div className="flex flex-col justify-center items-center">
          <Skeleton variant="rectangular" width={236} height={184} />
          <Skeleton variant="text" width={180} height={60} />
          <div className="flex gap-4">
            <Skeleton variant="text" width={150} height={50} />
            <Skeleton variant="circle" width={60} height={40} />
          </div>
        </div>
      );
    }
    return skeletons;
  };

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
