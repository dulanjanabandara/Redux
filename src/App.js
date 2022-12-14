import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 100,
  amount: 5,
};

const store = createStore(reducer, initialStore);

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
