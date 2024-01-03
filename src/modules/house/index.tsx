import { useState } from "react";
import "./house.css";
import Inquiry from "./inquiry";
import icon from "../../assets/email.jpeg";
import PropTypes from "prop-types";

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
export default function House(props: FeatureHouseProps) {
  const { house } = props;
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-sm-12">{house.country}</h5>
      </div>
      <div className="row">
        <h5 className="col-sm-12">{house.address}</h5>
      </div>
      <div className="row">
        <div className="col-sm-7">
          <img
            src={`/images/${house.photo}.jpeg`}
            height="80%"
            width="80%"
            alt="houe"
          />
        </div>
        <div className="col-sm-5">
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <img src={icon} height="50" alt="inquiry" onClick={inquiryClick} />
          {inquiryShown && <Inquiry />}
        </div>
      </div>
    </div>
  );
}

House.propTypes = {
  house: PropTypes.object.isRequired,
};
