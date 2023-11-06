import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <span>E-commerce</span>
        <div className="header__buttons">
          <Link to="/login" className="btn">Submit</Link>
          <button type="button">Reset</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
