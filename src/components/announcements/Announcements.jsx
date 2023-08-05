import Announcement from "./Announcement";
import SectionHeading from "../SectionHeading";
const Announcements = () => {
  return (
    <section className="py-6 sm:px-8">
      <SectionHeading text={"Whats new"} />
      <div className="flex flex-nowrap justify-between gap-3 overflow-auto scrollbar-hide pt-8 pb-4">
        <Announcement
          image={"/assets/images/img-banner.png"}
          text={
            "Introducing 'Firstlook' app - the first social network exclusive for singles"
          }
        />
        <Announcement
          image={"/assets/images/smart_phone.png"}
          text={
            "Announce a personal assistant app that helps to manage our daily life notes, accounts etc"
          }
        />
        <Announcement
          image={"/assets/images/hybrid-work.png"}
          text={
            "Hybrid working after Covid-19, improved work-life balance, more efficient use of time"
          }
        />
      </div>
    </section>
  );
};

export default Announcements;
