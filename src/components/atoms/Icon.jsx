import propTypes from "prop-types";

const Icon = ({ name, classes }) => <i className={`ri-${name} ${classes}`} />;

Icon.propTypes = {
  name: propTypes.string.isRequired,
  classes: propTypes.string,
};

Icon.defaultProps = {
  classes: "icon",
};

export default Icon;
