import { useEffect, useState } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouse = async () => {
      const res = await fetch("/houses.json");
      const houses = await res.json();
      setAllHouses(houses);
    };
    fetchHouse();
  }, []);
  return allHouses;
};

export default useHouses;
