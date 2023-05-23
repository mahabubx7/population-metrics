import propTypes from "prop-types";
import { Link } from "react-router-dom";
import calculatePopulation from "../helpers/population";
import Button from "./molecules/Button";

const Card = ({ info }) => (
  <div className="card">
    <img
      src={`https://flagcdn.com/${info.slug.toLowerCase()}.svg`}
      alt="flag"
    />
    <h4>{info.name}</h4>
    <p>{calculatePopulation(info.population)}</p>
    <p className="flex items-center justify-end">
      <Link to={`/country/${info.slug.toLowerCase()}`}>
        <Button icon="arrow-right-line" classes="btn-detail" />
      </Link>
    </p>
  </div>
);

Card.propTypes = {
  info: propTypes.shape({
    name: propTypes.string.isRequired,
    population: propTypes.number.isRequired,
    slug: propTypes.string.isRequired,
  }).isRequired,
};

export default Card;
