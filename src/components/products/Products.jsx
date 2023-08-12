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
          image={"/assets/images/firstlook_products.png"}
          text={
            "A social app that exclusively for singles, who are searching for a life partner or relationship. Currently it's available for Indian citizen's globally."
          }
        />
        <ProductCard
          heading={"NOTEPAD"}
          image={"/assets/images/notepad_products.png"}
          text={
            "The beta version under pilot trial, expected to launch 2023 Christmas. it is a personal note that helps to manage our daily notes and docs etc"
          }
        />
        <ProductCard
          heading={"PROJECT III"}
          image={"/assets/images/srt_products.png"}
          text={
            "An MVP will be launch in 2024, it was a chain of digital shops that allow hassle free shopping with maximum competitive pricing."
          }
        />
      </div>
    </section>
  );
};

export default Products;
