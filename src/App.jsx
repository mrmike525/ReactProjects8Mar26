import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import familyImg from "./assets/familyChristmas.jpeg";
import Clicker from "./ClickMe";
import Num from "./num";
import Header from "./Header";
function App() {
  return (
    <>
      <Header />
      <h1> Hello Abby</h1>
      <img src={familyImg} alt="" width="20%" onClick={Clicker} />
      <Num />
    </>
  );
}

export default App;
