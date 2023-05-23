import propTypes from "prop-types";
import Icon from "../atoms/Icon";

const ListItem = ({ icon, classes, label, element }) => (
  <li>
    {label && <span>{label}</span>}
    {element && <element />}
    {icon && <Icon name={icon} classes={`text-3xl ${classes}`} />}
  </li>
);

ListItem.propTypes = {
  icon: propTypes.string,
  classes: propTypes.string,
  label: propTypes.string,
  element: propTypes.element,
};

ListItem.defaultProps = {
  icon: "",
  classes: "",
  label: "",
  element: undefined,
};

export default ListItem;
