import propTypes from "prop-types";
import { v4 as uuid } from "uuid";
import ListItem from "../molecules/ListItem";

const List = ({ classes, label, list }) => (
  <>
    {label && <strong>{label}</strong>}
    <ul className={classes}>
      {list.length > 0 ? (
        list.map((item) => (
          <ListItem
            key={uuid()}
            label={item.label}
            classes={item.classes}
            icon={item.icon}
            element={item.element}
          />
        ))
      ) : (
        <li className="no-items">Empty list!</li>
      )}
    </ul>
  </>
);

List.propTypes = {
  classes: propTypes.string,
  label: propTypes.string,
  list: propTypes.arrayOf(
    propTypes.shape({
      icon: propTypes.string,
      classes: propTypes.string,
      label: propTypes.string,
      element: propTypes.element,
    })
  ),
};

List.defaultProps = {
  classes: "",
  label: "",
  list: [],
};

export default List;
