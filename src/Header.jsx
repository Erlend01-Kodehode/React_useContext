import { useContext } from "react";
import { AppContext } from "./App";

function Header() {
  //   const { name, age } = useContext(AppContext);
  //   const count = useContext(AppContext);
  const [cart] = useContext(AppContext);
  return (
    <div>
      {/* <h1>
        Header: Welcome {name}. You are {age} years old
      </h1> */}
      {/* <h1>Header Count: {count}</h1> */}
      <h1>Items in Cart: {cart}</h1>
    </div>
  );
}

export default Header;
