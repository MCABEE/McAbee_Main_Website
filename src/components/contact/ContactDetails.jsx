const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-10 px-3 sm:px-8 bg-[#F4F4F4] rounded-b-lg">
      <p className="md:max-w-lg">
        We are happy to answer any questions you may have and help you determine
        which of our services best fit your needs
      </p>

      <div className="leading-6">
        <h3 className="uppercase text-gray-500 font-bold">Call us</h3>
        <h3 className="font-bold">+91 - 9946 250 333, 9946 280 333</h3>
        <p className="text-gray-400">
          [ MON - SAT 09.00 AM - 06.00 PM ] - [ IST ]{" "}
        </p>
      </div>

      <div className="leading-6">
        <h3 className="uppercase text-gray-500 font-bold">Write us</h3>
        <h3 className="font-bold">mail@mcabee.in</h3>
      </div>
    </div>
  );
};

export default ContactDetails;
