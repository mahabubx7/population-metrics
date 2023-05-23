import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Button from "./molecules/Button";
import List from "./organisms/List";
import "./styles/header.css";

const Header = ({ isDetail, title }) => (
  <header className="header">
    {isDetail === true ? (
      <Link to="/">
        <Button icon="arrow-left-s-line" classes="btn-nav" />
      </Link>
    ) : (
      ""
    )}
    <h4>{title}</h4>
    <List
      classes="btn-icons"
      list={[{ icon: "settings-3-line" }, { icon: "mic-line" }]}
    />
  </header>
);

Header.propTypes = {
  isDetail: propTypes.bool,
  title: propTypes.string,
};

Header.defaultProps = {
  isDetail: false,
  title: "population metrics",
};

export default Header;
