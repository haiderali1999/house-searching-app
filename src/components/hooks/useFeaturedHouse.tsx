import { useMemo } from "react";

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}
const useFeaturedHouse = (allHouses: FeatureHouse[]) => {
  const featureHouse  = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
    return undefined;
  }, [allHouses]);
  return featureHouse;
};

export default useFeaturedHouse;
