import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { observer } from "mobx-react-lite";
import useStore from "../../Hooks/useStore";

const Header = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    loginStore.logout();
    navigate('/login')
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/">
          <span className="brand-name">E-commerce</span>
        </a>
        {!loginStore.getUserToken && (
          <div className="header__buttons">
            <Link to="/login" className="btn">
              Login
            </Link>
            <button type="button">Sign Up</button>
          </div>
        )}
        {loginStore.getUserDetails?.username && (
          <>
            <div className="header__buttons">
            <span className="user-name">Welcome {loginStore.getUserDetails.username}</span>
              <button onClick={handleLogout} type="button">
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
});

export default Header;
