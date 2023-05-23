import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ info }) => (
  <div className="card">
    <h4>{info.name}</h4>
    <p>{info.population}</p>
    <Link to={`/country/${info.slug.toLowerCase()}`}>go to details</Link>
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
