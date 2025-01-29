import { useContext } from "react";
import { AppContext } from "./App";

function MinorSection() {
  //   const { name, age } = useContext(AppContext);
  //   const count = useContext(AppContext);
  const [cart, setCart] = useContext(AppContext);
  return (
    <div>
      {/* <h2>
        {name} is a {age} year old man
      </h2> */}
      {/* <h2>Minor Count: {count}</h2> */}
      <p>Product Info</p>
      <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
    </div>
  );
}

export default MinorSection;
