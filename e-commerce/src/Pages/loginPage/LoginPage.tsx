import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import useStore from "../../Hooks/useStore";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { fetchToken } from "../../utils/functions";
import Input from "../../Components/Input/Input";

const LoginPage = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let token: any = "";
  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = {
      username: name,
      password: password,
    };

    token = await fetchToken(data);

    loginStore.setToken(token.data.token);

    loginStore.setUser(name);

    navigate("/products");
  };
  const handleUserName = (e: any) => {
    setName(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <Input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
            value={name}
            handleChange={handleUserName}
          />
          <label htmlFor="floatingInput">UserName</label>
        </div>
        <div className="form-floating">
          <Input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            handleChange={handlePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
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

export default LoginPage;
