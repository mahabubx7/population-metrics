import propTypes from "prop-types";
import Icon from "../atoms/Icon";

const Button = ({ type, label, classes, icon, onClick }) => {
  if (type === "submit") {
    return (
      <button className={classes} type="submit" onClick={onClick}>
        {label.length > 0 ? <span>{label}</span> : null}
        {icon ? <Icon name={`${icon} nav-icon`} /> : null}
      </button>
    );
  }

  return (
    <button className={classes} type="button" onClick={onClick}>
      {label.length > 0 ? <span>{label}</span> : null}
      {icon ? <Icon name={`${icon} nav-icon`} /> : null}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["submit", "button"]),
  label: propTypes.string,
  classes: propTypes.string,
  icon: propTypes.string,
  onClick: propTypes.func,
};

Button.defaultProps = {
  type: "button",
  label: "",
  classes: "btn",
  onClick: () => null,
  icon: "",
};

export default Button;
