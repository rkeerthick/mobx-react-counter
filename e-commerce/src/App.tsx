import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllItems from "./Components/AllItems/AllItems";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AllItems />
        <Products />
        {/* <Login /> */}
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
