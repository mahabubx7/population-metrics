import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Button from "./molecules/Button";
import List from "./organisms/List";
import "./styles/header.css";

const Header = ({ isDetail, title }) => (
  <header className="header" data-testid="header">
    {isDetail === true ? (
      <Link to="/" data-testid="btn-back">
        <Button icon="arrow-left-s-line" classes="btn-nav" />
      </Link>
    ) : (
      ""
    )}
    <h4>{title}</h4>
    <List
      classes="btn-icons"
      list={[{ icon: "mic-line" }, { icon: "settings-3-line" }]}
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
