import ArticleCard from "./ArticleCard";

const Blogs = () => {
  return (
    <section className="py-8 sm:px-8">
      <button className="px-5 py-2.5 uppercase rounded-md bg-app-blue text-white font-semibold text-sm">
        Blog
      </button>
      <div className="flex justify-between mt-3">
        <h1 className="text-2xl md:text-3xl font-bold text-app-blue">
          Insight&apos;s of <span className="text-black">Mcabee.</span>
        </h1>
        <button className="px-4 py-2 hidden sm:block uppercase rounded-md text-app-blue border border-gray-300 font-semibold  text-xs">
          See all articles
        </button>
      </div>
      <div className="pt-6 flex gap-6 justify-between overflow-auto scrollbar-hide">
        <ArticleCard
          heading={"Digitalize Business"}
          image={"/assets/images/gpt-vs-bard.png"}
          text={
            "A social app that exclusively for bachelors, who are searching for a life partner or relationship."
          }
          date={"01 Aug 2023"}
        />
        <ArticleCard
          heading={"Positive impact's of AI"}
          image={"/assets/images/business-meeting.png"}
          text={
            "A social app that exclusively for bachelors, who are searching for a life partner or relationship."
          }
          date={"03 Aug 2023"}
        />
        <ArticleCard
          heading={"ChatGPT vs Bard"}
          image={"/assets/images/phone-img.png"}
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
