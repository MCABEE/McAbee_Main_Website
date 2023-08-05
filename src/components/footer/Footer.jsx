import BottomSection from "./BottomSection";
import UpperSection from "./UpperSection";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-8 mt-8">
      <div className="px-3 sm:px-8">
        <hr className="border border-gray-200" />
        <UpperSection />
        <BottomSection />
      </div>
    </footer>
  );
};

export default Footer;
