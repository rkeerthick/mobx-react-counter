import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Routing from "./Components/Routing/Routing";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
});

export default App;
