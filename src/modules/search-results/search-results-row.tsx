import { useNavigate } from "react-router-dom";

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

interface SearchResultsRowsProps {
  house: FeatureHouse;
}

export default function SearchResultsRows(props: SearchResultsRowsProps) {
  const { house } = props;
  const navigate = useNavigate();
  const setActive = () => {
    navigate(`/house/${house.id}`);
  };
  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      {/* <td>{house.likes}</td> */}
    </tr>
  );
}
