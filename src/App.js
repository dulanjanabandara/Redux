import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
