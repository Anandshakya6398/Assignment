import React from "react";
import Green from "../assets/green.png";
import Red from "../assets/red.png";
import Brown from "../assets/brown.png";
import MEN from "../assets/men.png";
import Shirt from "../assets/shirt.jpg";
import WoMEN from "../assets/women.jpg";
import Create from "../assets/create.png";
import Pro from "../assets/products.png";
import Fashion from "../assets/fasion.png";
import SEO from "../assets/seo.png";
import Clean from "../assets/clean.png";
import Up from "../assets/upscaler.png";
import Remove from "../assets/re-bg.png";
import { IoSettingsOutline } from "react-icons/io5";

const products = [
  {
    img: Green,
    name: "Green Shirt Example",
    tags: [
      {
        name: "Men's Clothing",
        image: MEN,
      },
      { name: "Polo Shirt", image: Shirt },
    ],
  },
  {
    img: Red,
    name: "Red Sweater Example",
    tags: [
      {
        name: "Women's Clothing",
        image: WoMEN,
      },
      {
        name: "Sweater (Pullover)",
        image: WoMEN,
      },
    ],
  },
  {
    img: Brown,
    name: "Brown Jumper Example",
    tags: [
      {
        name: "Women's Clothing",
        image: WoMEN,
      },
      {
        name: "Sweater (Pullover)",
        image: WoMEN,
      },
    ],
  },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      <div className="w-32 bg-white shadow-lg p-6 flex flex-col space-y-6 ">
        <div className="w-8 h-8 mx-auto bg-purple-600  flex items-center rounded justify-center text-white text-lg font-bold  hover:cursor-pointer">
          P
        </div>
        <nav className="flex  text-xs flex-col space-y-4">
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            <img src={Create} alt="" className="w-6 mx-auto" />
            <span>Create</span>
          </a>
          <a
            href="#"
            className="text-center items-center space-x-2 bg-blue-100 text-purple-600 font-bold rounded"
          >
            <img src={Pro} alt="" className="w-6 bg-blue-200 mx-auto" />
            <span>My Products</span>
          </a>
          <hr className="text-gray-400 " />
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            <img src={Fashion} alt="" className="w-6 mx-auto" />
            <span>Fashion Generator</span>
          </a>
          <hr className="text-gray-400 " />
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            <img src={SEO} alt="" className="w-6 mx-auto" />
            <span>SEO Keywords</span>
          </a>
          <hr className="text-gray-400" />
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            {" "}
            <img src={Clean} alt="" className="w-6 mx-auto" />{" "}
            <span>Clean Up</span>{" "}
          </a>{" "}
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            {" "}
            <img src={Up} alt="" className="w-6 mx-auto" />{" "}
            <span>Upscaler</span>{" "}
          </a>{" "}
          <a
            href="#"
            className="text-center items-center space-x-2 text-gray-400 font-bold"
          >
            <img src={Remove} alt="" className="w-6 mx-auto" />
            <span>Remove Background</span>
          </a>
          <div className="mx-auto mt-[36rem] md:mt-0 ">
            <div className="text-2xl mt-10 mb-6">
              <IoSettingsOutline className="hover:cursor-pointer" />
            </div>
            <button className="bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-3 -mx-1 rounded-full ">
              A
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex items-center gap-4 justify-between">
          <h1 className="md:text-2xl text-xs font-bold">Add New Product</h1>
          <button className="bg-purple-600  hover:bg-purple-700 duration-500 float-right text-white py-2  hover:cursor-pointer px-4 rounded flex items-center space-x-2">
            <span className="text-xs hover:cursor-pointer ">Upgrade to Pro</span>
          </button>
        </div>

        {/* Upload Box */}
        <div className="mt-4 p-6 bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg text-center">
          <button className="bg-purple-600 text-xs md:font-semibold text-white px-6 py-2 rounded-lg hover:bg-purple-700 duration-500 hover:cursor-pointer">
            + Start Uploading
          </button>
          <p className="text-gray-500 mt-2">
            Drag & drop anywhere to add product
          </p>
        </div>

        {/* Product Grid */}
        <h2 className="mt-6 text-xl font-semibold">
          My Products{" "}
          <span className="text-gray-500">(Monthly Product Limit 0/1)</span>
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6 mt-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-36 rounded-lg mx-auto"
              />
              <p className="text-sm bg-gray-200 px-2 py-1 rounded">
                Example product
              </p>
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center gap-1"
                  >
                    <img src={tag.image} alt={tag.name} className="w-5 h-5" />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
