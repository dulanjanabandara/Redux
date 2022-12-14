import React from "react";
import { createStore } from "redux";
import reducer from "./reducer";
import { DECREASE, INCREASE } from "./actions";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";

const initialStore = {
  count: 0,
  name: "john",
};

const store = createStore(reducer, initialStore);

store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
