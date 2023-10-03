import React, { useState } from "react";
import { getHotels } from "../api/Hotels";
import Card from "./Card";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  const allHotels = getHotels();
  const initialRecordsPerPage = 6;
  const [recordsPerPage, setRecordsPerPage] = useState(initialRecordsPerPage);
  const [clicked, setClicked] = useState(false);

  const handleMore = () => {
    setClicked(!clicked);
    setRecordsPerPage((prev) => prev + 3);
  };
  const handleLess = () => {
    setClicked(!clicked);
    setRecordsPerPage(6);
  };

  const searchTerm = useSelector((state) => state.search);
  const filteredHotels = allHotels.filter((h) =>
    h.city_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstIndex = 0;

  const records = filteredHotels.slice(firstIndex, firstIndex + recordsPerPage);

  const hasMoreRecords = recordsPerPage < filteredHotels.length;

  return (
    <div className="bg-[#d2ebf1]">
      <div className="flex flex-wrap p-6 justify-around">
        {records.map((h) => (
          <Card key={h.id} hotel={h} />
        ))}
      </div>
      {hasMoreRecords && (
        <div className="pb-9 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            onClick={handleMore}
          >
            <span className="pr-3">
              <FontAwesomeIcon
                icon={faHourglassEnd}
                style={{ color: "#a3adbd" }}
              />
            </span>
            See More
          </button>
        </div>
      )}
      {!hasMoreRecords && (
        <div className="pb-9 text-center">
          <button
            onClick={handleLess}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            <span className="pr-3">
              <FontAwesomeIcon
                icon={faHourglassEnd}
                style={{ color: "#a3adbd" }}
              />
            </span>
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
