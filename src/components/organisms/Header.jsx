import propTypes from "prop-types";
import Button from "../molecules/Button";
import NavMenu from "../molecules/NavMenu";
import "../styles/header.css";

const Header = ({ isDetail }) => (
  <header className="header">
    {isDetail ? <Button icon="arrow-left-s-line" classes="btn-nav" /> : null}
    <h4>population</h4>
    <NavMenu />
  </header>
);

Header.propTypes = {
  isDetail: propTypes.bool,
};

Header.defaultProps = {
  isDetail: false,
};

export default Header;
