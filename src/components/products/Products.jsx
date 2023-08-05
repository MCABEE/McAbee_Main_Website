import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-8 sm:px-8">
      <button className="px-5 py-2.5 uppercase rounded-md bg-app-blue text-white font-semibold text-sm">
        Products
      </button>
      <div className="flex justify-between mt-3">
        <h1 className="text-2xl md:text-3xl font-bold text-app-blue">
          Products from <span className="text-black">Mcabee.</span>
        </h1>
        <button className="px-4 py-2 hidden sm:block uppercase rounded-md text-app-blue border border-gray-300 font-semibold  text-xs">
          See all products
        </button>
      </div>
      <div className="py-6 flex gap-6 justify-between overflow-auto scrollbar-hide">
        <ProductCard
          heading={"Firstlook"}
          image={"/assets/images/img-banner.png"}
          text={
            "A social app that exclusively for singles, who are searching for a life partner or relationship. Currently it's available for Indian citizen's globally."
          }
        />
        <ProductCard
          heading={"NOTEPAD"}
          image={"/assets/images/business-meeting.png"}
          text={
            "A social app that exclusively for singles, who are searching for a life partner or relationship. Currently it's available for Indian citizen's globally."
          }
        />
        <ProductCard
          heading={"PROJECT III"}
          image={"/assets/images/img-banner.png"}
          text={
            "A social app that exclusively for singles, who are searching for a life partner or relationship. Currently it's available for Indian citizen's globally."
          }
        />
      </div>
    </section>
  );
};

export default Products;
