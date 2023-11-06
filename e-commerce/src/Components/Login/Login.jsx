import { observer } from "mobx-react-lite";
import "./Login.css";
import useStore from "../../Hooks/useStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginStore.fetchUserToken(name, password);
    navigate("/products");
  };
  const handleUserName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
            value={name}
            onChange={handleUserName}
          />
          <label for="floatingInput">UserName</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2"
          type="button"
        >
          Sign in
        </button>
      </form>
    </main>
  );
});

export default Login;
