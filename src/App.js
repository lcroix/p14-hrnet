import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routers/routes";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <RoutesIndex />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App; 
