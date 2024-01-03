import { useParams } from "react-router-dom"
import House from "."
import { useContext } from "react"
import HousesContext from "../../context/housesContext"

interface FeatureHouse {
  id: number
  address: string
  country: string
  description: string
  price: number
  photo: number
}

export default function HouseFromQuery() {
  const allHouses: FeatureHouse[] = useContext(HousesContext)
  // const { allHouses } = props;
  const { id } = useParams<{ id: any }>()
  debugger
  // Convert the string "id" to an integer using parseInt
  const parsedId: number = parseInt(id)
  const house = allHouses.find((h) => h.id === parsedId)

  if (!house) return <div>No house found.</div>
  return <House house={house} />
}
