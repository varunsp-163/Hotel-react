import data from "./hotels.json";


export const getHotels = () => {
  return data;
};

export default (req, res) => {
  const hotels = getHotels();
  res.json(hotels);
};