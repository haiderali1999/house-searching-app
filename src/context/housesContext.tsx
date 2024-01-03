import { createContext } from "react";

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

const HousesContext = createContext<FeatureHouse[]>([]);

export default HousesContext;
