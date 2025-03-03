import React from "react";
import ADD from "../assets/additional.png";
const Additional = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col justify-center items-center">
      {/* Feature Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 w-full max-w-5xl">
        {/* Left Side Image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={ADD} alt="Mobile App" className="w-64 md:w-80 rounded-lg" />
        </div>

        <div className="max-w-lg text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold">Ready When You Are</h2>
          <p className="text-gray-900 font-semibold mt-4">
            Jump right in and start exploring. Whether you're <br /> here to
            create, manage, or discover, our app is <br /> ready to go whenever
            you are!
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-purple-600 text-white py-6 px-8 rounded-t-3xl flex flex-col md:flex-row items-center justify-between max-w-4xl gap-4">
        <div className="text-lg hidden md:block font-bold">p</div>
        <ul className=" hidden md:flex cursor-pointer space-x-4 text-sm">
          <li>Pricing</li>
          <li>How it Works</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Affiliates</li>
          <button className="text-sm cursor-pointer">Log in / Sign up</button>
        </ul>
        <div className="flex gap-6">
          <button className= "cursor-pointer bg-white text-black px-4 py-2 rounded-lg text-sm">
            Book 1:1 demo
          </button>
          <button className=" cursor-pointer bg-black text-white px-4 py-2 rounded-lg text-sm">
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
};

export default Additional;
