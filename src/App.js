import {useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "../src/Components/Cart/Cart"
import CartProvider from "./store/CartProvider";

function App() {
  const [CartIsShown,SetCartIsShown]=useState(false);
  
  const showCartHandler = () => {
    SetCartIsShown(true);
  }

  const hideCartHandler = () => {
    SetCartIsShown(false);
  }

  return (
   <CartProvider>
    {CartIsShown && <Cart onCloseCart={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals />
    </main>
    </CartProvider>
  );
}

export default App;
