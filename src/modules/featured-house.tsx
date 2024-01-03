import House from "./house";
interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}
interface FeatureHouseProps {
  house: FeatureHouse;
}
export default function FeaturedHouse(props: FeatureHouseProps) {
  const { house } = props;
  if (house)
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-sm-12 text-center bg-danger">Feature House</h3>
        </div>
        <House house={house} />
      </div>
    );
  return <div>NO featured house at this time</div>;
}
