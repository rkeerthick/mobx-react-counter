import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ol>
        <div className="header__buttons">
          <button type="button">Submit</button>
          <button type="button">Reset</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
