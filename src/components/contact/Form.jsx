"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const initialFormData = {
    firstName: "",
    secondName: "",
    company: "",
    country: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.secondName ||
      !formData.company ||
      !formData.country ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      return toast.error("Please fill all the fields!");
    }

    const templateParams = {
      ...formData,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Form submitted.");
      setFormData(initialFormData);
    } catch (error) {
      toast.error("something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="lg:absolute lg:top-20 lg:right-20 max-w-[450px] bg-white rounded-lg sm:px-8 sm:py-8 px-5 py-6">
      <Toaster />
      <h1 className="uppercase font-bold sm:text-lg md:text-xl text-center">
        SCHEDULE YOUR CONSULTATION
      </h1>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-3 w-full mt-6"
      >
        <div className="col-span-1">
          <label htmlFor="firstName" className="font-light text-sm">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="p-1.5 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="secondName" className="font-light text-sm">
            Second name
          </label>
          <input
            type="text"
            name="secondName"
            id="secondName"
            className="p-1.5 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="company" className="font-light text-sm">
            Company / organization
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="p-1.5 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="country" className="font-light text-sm">
            Country
          </label>
          <select
            name="country"
            id="country"
            className="p-1.5 border border-gray-300 bg-white rounded-md w-full"
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="phone" className="font-light text-sm">
            Phone [ with country code ]
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="p-1.5 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="service" className="font-light text-sm">
            Service
          </label>
          <select
            name="service"
            id="service"
            className="p-1.5 border border-gray-300 bg-white rounded-md w-full"
            onChange={handleChange}
          >
            <option value="">Select service</option>
            <option value="Consulting">Consulting</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Web Design / Development">
              Web Design / Development
            </option>
            <option value="Mobile Application">Mobile Application</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="font-light text-sm">
            Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            className="p-1.5 border border-gray-300 rounded-md w-full"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-app-blue text-white font-semibold text-sm px-5 py-2.5 rounded-md uppercase transition-all hover:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
