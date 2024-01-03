import { useParams } from "react-router-dom";
import House from ".";
import { useContext } from "react";
import HousesContext from "../../context/housesContext";

export default function HouseFromQuery(props: any) {
  const allHouses = useContext(HousesContext);
  // const { allHouses } = props;
  const { id } = useParams();
  debugger;
  const house = allHouses.find((h: any) => h.id === parseInt(id));
  if (!house) return <div>No house found.</div>;
  return <House house={house} />;
}
