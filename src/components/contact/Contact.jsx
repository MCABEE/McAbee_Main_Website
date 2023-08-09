import Header from "./Header";
import ContactDetails from "./ContactDetails";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="sm:px-8 py-10 relative">
      <Header />
      <div className="flex justify-center bg-app-darkGray px-3 pb-10 lg:pb-4">
        <Form />
      </div>
      <ContactDetails />
    </section>
  );
};

export default Contact;
