import { services } from "@/lib/constants";

const ServiceList = () => {
  return (
    <div className="px-3 sm:px-8 col-span-3 lg:col-span-1 row-span-3 md:col-span-2 md:row-span-3">
      <ul className="text-gray-500 font-semibold">
        {services.map((service) => (
          <li
            key={service.id}
            className={`mb-6 lg:mb-8 hover:cursor-pointer ${
              service.name === "Consulting" ? "text-app-blue" : ""
            } hover:text-app-blue`}
          >
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
