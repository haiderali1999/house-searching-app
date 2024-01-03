import { useContext } from "react"
import { useParams } from "react-router-dom"
import SearchResultsRows from "./search-results-row"
import HousesContext from "../../context/housesContext"

export default function SearchResults() {
  const allHouses = useContext(HousesContext)
  // const { allHouses } = props;
  const { country } = useParams()
  const filteredHouses = allHouses.filter((h: any) => h.country === country)
  return (
    <div className="mt-2">
      <h4>Results for {country} :</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h: any) => (
            <SearchResultsRows key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
