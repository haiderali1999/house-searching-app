import { useContext } from "react";
import { useParams } from "react-router-dom";
import SearchResultsRows from "./search-results-row";
import HousesContext from "../../context/housesContext";

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

export default function SearchResults() {
  const allHouses: FeatureHouse[] = useContext(HousesContext);
  // const { allHouses } = props;
  const { country } = useParams();
  const filteredHouses = allHouses.filter((h) => h.country === country);
  return (
    <div className="mt-2">
      <h4>Results for {country} :</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRows key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
