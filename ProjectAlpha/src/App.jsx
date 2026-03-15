import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Magenta";
import "./Violet";
import "./Blue";
import "./Green";
import "./Yellow";
import "./Orange";
import "./Red";
import Magenta from "./Magenta";
import Violet from "./Violet";
import Blue from "./Blue";
import Green from "./Green";
import Yellow from "./Yellow";
import Orange from "./Orange";
import Red from "./Red";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Magenta />
      <Violet />
      <Blue />
      <Green />
      <Yellow />
      <Orange />
      <Red />
    </>
  );
}

export default App;
