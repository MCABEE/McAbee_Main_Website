import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ArticleCard from "./ArticleCard";

const Blogs = () => {
  return (
    <section className="py-8 sm:px-8">
      <SectionHeading text={"Blog"} />
      <div className="flex justify-between items-center mt-3">
        <h1 className="text-2xl md:text-3xl font-bold text-app-blue">
          Insight&apos;s of <span className="text-black">Mcabee.</span>
        </h1>
        <Link
          href={"/blogs"}
          className="px-4 py-2 hidden sm:block uppercase rounded-md text-app-blue border border-gray-300 font-semibold text-xs transition-all hover:scale-95"
        >
          See all blogs
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
      <div className="pt-6 flex gap-6 justify-between overflow-auto scrollbar-hide">
        <ArticleCard
          heading={"Is solo startup success possible?"}
          image={"/assets/images/09_Blog_01.png"}
          text={
            "A social app that exclusively for bachelors, who are searching for a life partner or relationship."
          }
          date={"01 Aug 2023"}
        />
        <ArticleCard
          heading={"Generative AI - The Future"}
          image={"/assets/images/10_Blog_02.jpg"}
          text={
            "A social app that exclusively for bachelors, who are searching for a life partner or relationship."
          }
          date={"03 Aug 2023"}
        />
        <ArticleCard
          heading={"Datafication and its importance"}
          image={"/assets/images/11_Blog_03.jpg"}
          text={
            "A social app that exclusively for bachelors, who are searching for a life partner or relationship."
          }
          date={"05 Aug 2023"}
        />
      </div>
    </section>
  );
};

export default Blogs;
