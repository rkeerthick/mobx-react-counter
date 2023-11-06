import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <span>E-commerce</span>
        </a>
        <div className="header__buttons">
          <Link to="/login" className="btn">
            Login
          </Link>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
