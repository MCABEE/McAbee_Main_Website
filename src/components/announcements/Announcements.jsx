import Announcement from "./Announcement";

const Announcements = () => {
  return (
    <section className="py-6 sm:px-8">
      <button className="px-5 py-2.5 uppercase rounded-md bg-app-blue text-white font-semibold text-sm">
        Whats New
      </button>
      <div className="flex flex-nowrap justify-between gap-3 overflow-auto scrollbar-hide py-8">
        <Announcement
          image={"/assets/images/img-banner.png"}
          text={
            "Introducing 'Firstlook' app - the first social network exclusive for singles"
          }
        />
        <Announcement
          image={"/assets/images/img-banner.png"}
          text={
            "Announce a personal assistant app that helps to manage our daily life notes, accounts etc"
          }
        />
        <Announcement
          image={"/assets/images/img-banner.png"}
          text={
            "Hybrid working after Covid-19, improved work-life balance, more efficient use of time"
          }
        />
      </div>
    </section>
  );
};

export default Announcements;
