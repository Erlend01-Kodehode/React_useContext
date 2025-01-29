// useContext - Lets you share globally
// useContext avoids propdrilling

import { useState, createContext } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

export const AppContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((val) => val + 1)}>Increment</button> */}
      <AppContext.Provider value={[cart, setCart]}>
        <Header />
        <MainSection />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
