import propTypes from "prop-types";
import { Link } from "react-router-dom";
import calculatePopulation from "../helpers/population";
import Button from "./molecules/Button";

const Card = ({ info }) => (
  <div className="card">
    <img
      className="rounded-md"
      src={`https://flagcdn.com/${info.slug.toLowerCase()}.svg`}
      alt="flag"
    />
    <h4>{info.name}</h4>
    <p className="bg-overlay">{calculatePopulation(info.population)}</p>
    <p>
      <Link className="btn-holder" to={`/country/${info.slug.toLowerCase()}`}>
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
