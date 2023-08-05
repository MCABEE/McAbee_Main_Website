const Form = () => {
  return (
    <div className="lg:absolute lg:top-20 lg:right-20 max-w-[450px] bg-white rounded-lg sm:p-8 p-5">
      <h1 className="uppercase font-bold sm:text-base md:text-xl text-center mt-8">
        SCHEDULE YOUR CONSULTATION
      </h1>
      <form action="" className="grid grid-cols-2 gap-4 w-full mt-6">
        <div className="col-span-1">
            <label htmlFor="firstName" className="font-light text-sm">First name</label>
            <input type="text" name="firstName" id="firstName" className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="col-span-1">
            <label htmlFor="secondName" className="font-light text-sm">Second name</label>
            <input type="text" name="secondName" id="secondName" className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="col-span-2">
            <label htmlFor="company" className="font-light text-sm">Company / organization</label>
            <input type="text" name="company" id="company" className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="col-span-2">
            <label htmlFor="country" className="font-light text-sm">Country</label>
            <select name="country" id="country"  className="p-2 border border-gray-300 rounded-md w-full">
              <option value=""></option>
            </select>
        </div>
        <div className="col-span-2">
            <label htmlFor="phone" className="font-light text-sm">Phone [ with country code ]</label>
            <input type="text" name="phone" id="phone" className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="col-span-2">
            <label htmlFor="service" className="font-light text-sm">Select service</label>
            <select name="service" id="service"  className="p-2 border border-gray-300 rounded-md w-full">
              <option value=""></option>
            </select>
        </div>
        <button className="bg-app-blue text-white font-semibold text-sm px-5 py-2.5 rounded-md uppercase">Submit</button>
      </form>
    </div>
  );
};

export default Form;
