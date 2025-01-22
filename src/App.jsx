import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import CheckOut from "./components/UI_Components/CheckOut";

function App() {
  return (
    <>
      <Header/>
      <Meals/>
      <Cart/>
      <CheckOut/>
    </>
  );
}

export default App;
