import Announcement from "./Announcement";
import SectionHeading from "../SectionHeading";
const Announcements = () => {
  return (
    <section className="pt-14 pb-6 sm:px-8">
      <SectionHeading text={"Whats new"} />
      <div className="flex flex-nowrap justify-between gap-3 overflow-auto scrollbar-hide pt-6 pb-4">
        <Announcement
          image={"/assets/images/02_Whatsnew_Firstlook.jpg"}
          text={
            'We are introducing "Firstlook" - an app designed to connect singles around the world.'
          }
        />
        <Announcement
          image={"/assets/images/03_Whatsnew_Notepad.jpg"}
          text={
            "We are announcing a personal assistant app for 2024 to help you effortless routine organization."
          }
        />
        <Announcement
          image={"/assets/images/04_Whatsnew_Hybridwork.jpg"}
          text={
            "The work-life balance is much better while partially working from home. We still follow it."
          }
        />
      </div>
    </section>
  );
};

export default Announcements;
