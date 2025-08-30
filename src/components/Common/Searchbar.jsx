import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5"; // close icon

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white p-3 shadow-md" : ""
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-gray-100 px-4 py-3 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600 cursor-pointer"
            >
              <IoClose className="h-5 w-5" />
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle} className="cursor-pointer">
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
