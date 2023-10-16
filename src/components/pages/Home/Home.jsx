import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="portada rounded-2xl mt-10"
          src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1697350542/23fa45207ace2e43c7400e67ac8235bd_jzvdox.jpg"
          alt="portada nft"
        />
      </div>
      <div className="flex justify-center gap-96 p-2">
        <h4 className=" text-2xl">Trending Currently</h4>
        <Link to="/store">
          <button className=" bg-indigo-950 rounded text-indigo-500 p-1">
            See all
          </button>
        </Link>
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex items-center card-home bg-gradient-to-tr from-indigo-300 to-indigo-400 rounded-xl">
          <img
            className="nft-home rounded-lg"
            src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1697348332/6220b5ad982e6e7d7e011ab5fb412dc5-transformed_z4cult.jpg"
            alt="nft"
          />
          <div>
            <h3 className="text-center">EtherVisions</h3>
            <p className="p-2">
              A captivating masterpiece that reveals a world of limitless
              creativity and elegance.
            </p>
          </div>
        </div>
        <div className="flex items-center card-home bg-gradient-to-tr from-indigo-300 to-indigo-400 rounded-xl">
          <img
            className="nft-home rounded-lg"
            src="https://res.cloudinary.com/dzmn27ifb/image/upload/v1697349523/37d972b0ea5a1cb1af241f5dd39aa48b_lxtytn.jpg"
            alt="nft"
          />
          <div>
            <h3 className="text-center">CryptoCanvas</h3>
            <p className="p-2">
              An enchanting marvel that opens up a realm of endless innovation
              and grace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
