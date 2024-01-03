import { useMemo } from "react";

const useFeaturedHouse = (allHouses: any) => {
  interface FeatureHouse {
    id: number;
    address: string;
    country: string;
    description: string;
    price: number;
    photo: number;
  }
  const featureHouse: FeatureHouse | undefined = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
    return undefined;
  }, [allHouses]);
  return featureHouse;
};

export default useFeaturedHouse;
