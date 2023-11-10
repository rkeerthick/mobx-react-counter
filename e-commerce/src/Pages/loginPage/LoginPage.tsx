import { observer } from "mobx-react-lite";
import { useState } from "react";
import useStore from "../../Hooks/useStore";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { fetchToken } from "../../utils/functions";
import FormContainer from "../../Containers/FormContainer";

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
    <FormContainer
      title="Please sign in"
      name={name}
      password={password}
      handleUserName={handleUserName}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
    />
  );
});

export default LoginPage;
