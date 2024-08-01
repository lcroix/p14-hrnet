import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routers/routes";
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
