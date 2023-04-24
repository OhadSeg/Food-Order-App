import {Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "../src/Components/Cart/Cart"

function App() {
  const [CartIsShown,SetCartIsShown]=useState(false);
  
  const showCartHandler = () => {
    SetCartIsShown(true);
  }

  const hideCartHandler = () => {
    SetCartIsShown(false);
  }

  return (
   <Fragment>
    {CartIsShown && <Cart onCloseCart={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals />
    </main>
   </Fragment>
  );
}

export default App;
