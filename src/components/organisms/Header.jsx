import propTypes from "prop-types";
import Button from "../molecules/Button";
import Icon from "../atoms/Icon";
import "../styles/header.css";

const Header = ({ isDetail }) => (
  <header className="header">
    {isDetail ? <Button icon="arrow-left-s-line" classes="btn-nav" /> : null}

    <h4>population</h4>

    <ul className="btn-icons">
      <li>
        <Icon name="settings-3-line" classes="text-3xl" />
      </li>
      <li>
        <Icon name="mic-line" classes="text-3xl" />
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  isDetail: propTypes.bool,
};

Header.defaultProps = {
  isDetail: false,
};

export default Header;
