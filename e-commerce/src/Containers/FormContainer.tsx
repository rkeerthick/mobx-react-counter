import Input from "../Components/Input/Input";

type IForm = {
  title: string;
  name: string;
  password: string;
  handleUserName: any;
  handlePassword: any;
  handleLogin: any;
};

const FormContainer = ({
  title,
  name,
  password,
  handleUserName,
  handlePassword,
  handleLogin,
}: IForm) => {
  return (
    <main className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">{title}</h1>

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
};

export default FormContainer;
