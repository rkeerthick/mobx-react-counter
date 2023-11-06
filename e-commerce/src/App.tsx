
import "./App.css";
import AllItems from "./Components/AllItems/AllItems";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <AllItems />
      <Products />
      <Login />
    </div>
  );
}

export default App;
