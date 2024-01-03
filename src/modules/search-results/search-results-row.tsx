import { useNavigate } from "react-router-dom";

export default function SearchResultsRows(props: any) {
  const { house } = props;
  const navigate = useNavigate();
  const setActive = () => {
    navigate(`/house/${house.id}`);
  };
  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
}
