import propTypes from "prop-types";
import Button from "./molecules/Button";
import List from "./organisms/List";
import "./styles/header.css";

const Header = ({ isDetail }) => (
  <header className="header">
    {isDetail ? <Button icon="arrow-left-s-line" classes="btn-nav" /> : null}
    <h4>population</h4>
    <List
      classes="btn-icons"
      list={[{ icon: "settings-3-line" }, { icon: "mic-line" }]}
    />
  </header>
);

Header.propTypes = {
  isDetail: propTypes.bool,
};

Header.defaultProps = {
  isDetail: false,
};

export default Header;