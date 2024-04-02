import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-6 sm:px-8">
      <SectionHeading text={"Products"} />
      <div className="flex justify-between items-center mt-3">
        <h1 className="text-2xl md:text-3xl font-bold text-app-blue">
          Products from <span className="text-black">Mcabee.</span>
        </h1>
        <Link
          href={"/products"}
          className="px-4 py-2 hidden sm:block uppercase rounded-md text-app-blue border border-gray-300 font-semibold  text-xs transition-all hover:scale-95"
        >
          See all products
        </Link>
        <div className="sm:hidden flex items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="py-6 flex gap-6 justify-between overflow-auto scrollbar-hide">
        <ProductCard
          heading={"Firstlook"}
          image={"/assets/images/05_Product_01.jpg"}
          text={
            "'Firstlook' app is designed to connect singles around the world. Experience the essence of social media, find your favorites, and forward marriage proposals."
          }
        />
        <ProductCard
          heading={"NOTEPAD"}
          image={"/assets/images/06_Product_02.jpg"}
          text={
            "An app that works like a personal assistant to note down and organize things in your daily life. This is slated for release in 2024."
          }
        />
        <ProductCard
          heading={"STREET"}
          image={"/assets/images/07_Product_03.jpg"}
          text={
            "A digital platform connecting retail establishments is expected in 2024. We are committed to keeping you well-informed of its progress and developments."
          }
        />
      </div>
    </section>
  );
};

export default Products;
