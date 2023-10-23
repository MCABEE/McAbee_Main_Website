import { services } from "@/lib/constants";

const ServiceList = () => {
  return (
    <div className="px-3 sm:px-8 col-span-3 row-span-3 md:col-span-1 md:row-span-3">
      <div className="flex-col text-gray-500 font-semibold">
        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className={`mb-5 hover:cursor-pointer ${
                service.name === "Consulting" ? "text-app-blue" : ""
              } hover:text-app-blue`}
            >
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
