interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

import { ChangeEvent, useContext } from "react";
// change later
import { useNavigate } from "react-router-dom";
import HousesContext from "../context/housesContext";

export default function HouseFilter() {
  // const { allHouses } = props;
  const allHouses: FeatureHouse[] = useContext(HousesContext);
  const navigation = useNavigate();
  const countries: string[] = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];

  countries.unshift("Default option");
  // countries.unshift(null);

  const onSearchChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    if (country === "Default option") {
      navigation("/");
    } else {
      navigation(`searchresults/${country}`);
    }
  };
  return (
    <div className="row mt-3">
      <div className="offset-sm-2 col-sm-4">
        Look for dream house in country:
      </div>
      <div className="col-sm-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
