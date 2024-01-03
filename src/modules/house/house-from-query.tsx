import { useParams } from "react-router-dom";
import House from ".";
import { useContext } from "react";
import HousesContext from "../../context/housesContext";

interface urlParams {
  id?: string;
}

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

export default function HouseFromQuery() {
  const allHouses: FeatureHouse[] = useContext(HousesContext);
  // const { allHouses } = props;
  const params: urlParams = useParams();
  const { id } = params;
  debugger;
  const house = id && allHouses.find((h) => h.id === parseInt(id));
  if (!house) return <div>No house found.</div>;
  return <House house={house} />;
}
