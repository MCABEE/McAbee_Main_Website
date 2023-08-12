import Header from "./Header";
import RightSection from "./RightSection";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section id="services" className="py-6 sm:px-8">
      <Header />
      <div className="grid grid-cols-3 grid-rows-3 mt-10 mb-4 gap-4">
        <ServiceList />
        <RightSection />
      </div>
    </section>
  );
};

export default Services;
