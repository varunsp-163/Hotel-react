import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../reducers/searchSlice";

import { Link } from "react-router-dom";

const Navbar = () => {

  const searchTermRedux = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const [isActiveNewYork, setIsActiveNewYork] = useState(true);
  const [isActiveMumbai, setIsActiveMumbai] = useState(false);
  const [isActiveParis, setIsActiveParis] = useState(false);
  const [isActiveLondon, setIsActiveLondon] = useState(false);
  const [selectedCity, setSelectedCity] = useState(searchTermRedux);

  const handleButtonClick = (city) => {
    setIsActiveNewYork(false);
    setIsActiveMumbai(false);
    setIsActiveParis(false);
    setIsActiveLondon(false);

    switch (city) {
      case "New York":
        setIsActiveNewYork(true);
        setSelectedCity(city);
        dispatch(setSearchTerm(city));
        break;
      case "Mumbai":
        setIsActiveMumbai(true);
        setSelectedCity(city);
        dispatch(setSearchTerm(city));
        break;
      case "Paris":
        setIsActiveParis(true);
        setSelectedCity(city);
        dispatch(setSearchTerm(city));
        break;
      case "London":
        setIsActiveLondon(true);
        setSelectedCity(city);
        dispatch(setSearchTerm(city));
        break;
      default:
        break;
    }
  };
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };


  return (
    <div className="bg-[#d2ebf1] py-4 px-6">
      <div className="max-w-screen-xl mx-auto">
        {clicked && (
          <div className=" text-center justify-between items-center">
            <h1 className="text-2xl p-2 font-semibold">
              Featured Listed Property
            </h1>
            <p className="text-sm p-2">
              Real estate can be bought, sold, leased, or rented, and can be a
              valuable investment opportunity.
            </p>
          </div>
        )}

        {!clicked && (
          <div className="text-center p-2 animate-pulse ease-out transition-all w-full h-screen flex flex-col justify-center items-center">
            <h1 className="p-6 font-semibold text-xl font-mono">
              Empowering Your Hotel Buying Journey
            </h1>
            <Link
              to="/property/1"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClicked}
            >
              Checkout Hotels
            </Link>
          </div>
        )}

        {clicked && (
          <div className="flex space-x-4 mt-4">
            <Link
              to={"/property/1"}
              onClick={() => handleButtonClick("New York")}
              className={`${
                isActiveNewYork
                  ? "bg-blue-800 text-white"
                  : "bg-[#e6f7ff] text-gray-500"
              } hover:bg-blue-300 px-4 py-2 rounded-[80px] font-bold transition duration-300`}
            >
              New York
            </Link>
            <Link
              to={"/property/2"}
              onClick={() => handleButtonClick("Mumbai")}
              className={`${
                isActiveMumbai
                  ? "bg-blue-800 text-white"
                  : "bg-[#e6f7ff] text-gray-500"
              } hover:bg-blue-300 px-4 py-2 rounded-[80px] font-bold transition duration-300`}
            >
              Mumbai
            </Link>
            <Link
              to={"/property/3"}
              onClick={() => handleButtonClick("Paris")}
              className={`${
                isActiveParis
                  ? "bg-blue-800 text-white"
                  : "bg-[#e6f7ff] text-gray-500"
              } hover:bg-blue-300 px-4 py-2 rounded-[80px] font-bold transition duration-300`}
            >
              Paris
            </Link>
            <Link
              to={"/property/4"}
              onClick={() => handleButtonClick("London")}
              className={`${
                isActiveLondon
                  ? "bg-blue-800 text-white"
                  : "bg-[#e6f7ff] text-gray-500"
              } hover:bg-blue-300 px-4 py-2 rounded-[80px] font-bold transition duration-300`}
            >
              London
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
