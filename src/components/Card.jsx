import React from "react";
import img from "../assets/hotel.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faHospital,
  faBath,
  faArrowsUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
const Card = ({ hotel }) => {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden w-[420px] border shadow-lg mb-4">
      <div>
        <img src={img} className="object-cover" alt="" />
      </div>
      <div className="p-6 my-5">
        <p className="mb-2 text-bold text-md">
          <span className="text-1xl p-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#dfa049" }}
            />
          </span>
          {hotel.hotel_address}
        </p>
        <h1 className="font-bold text-3xl text-gray-600 mb-2">{hotel.hotel_name}</h1>

        <div className="flex gap-5 font-sans justify-between p-2">
          <p className="mb-2 flex flex-col">
            <span>
              <FontAwesomeIcon
                icon={faHospital}
                style={{ color: "#a3adbd" }}
                className="pb-2 pl-2"
              />
            </span>
            {hotel.number_of_rooms} Room
          </p>
          <p className="mb-2 flex flex-col">
            <span>
              <FontAwesomeIcon
                icon={faBed}
                style={{ color: "#a3adbd" }}
                className="pb-2 pl-2"
              />
            </span>
            {hotel.number_of_beds} Bed
          </p>
          <p className="mb-2 flex flex-col">
            <span>
              <FontAwesomeIcon
                icon={faBath}
                flip="horizontal"
                style={{ color: "#a3adbd" }}
                className="pb-2 pl-2"
              />
            </span>
            {hotel.number_of_baths} Bath
          </p>
          <p className="mb-2 flex flex-col">
            <span>
              <FontAwesomeIcon
                icon={faArrowsUpDownLeftRight}
                style={{ color: "#a3adbd" }}
                className="pb-2 pl-2"
              />
            </span>
            {hotel.size_of_room}
          </p>
        </div>
        <hr className="border-t-2 border-gray-400" />
        <div className="flex justify-between pt-3">
          <p className="font-bold text-blue-700 text-2xl">
            ${hotel.cost}
            <span className="text-sm text-black">/month</span>
          </p>
          <button className="bg-white border-2 border-blue-700 text-blue-700 font-bold py-2 px-4 rounded-[50px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
