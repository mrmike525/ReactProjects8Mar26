import { useState } from "react";

import "./App.css";
import Dexter from "./assets/Dexter.jpeg";
function App() {
  const [colorOne, setColorOne] = useState("red");

  return (
    <>
      <div>
        <p style={{ width: "40%", margin: "0 auto" }}>
          Dexter is SOO{" "}
          <a href="https://http.cat/" target="blank">
            CUTE!!!
          </a>
        </p>

        <button
          id="taco"
          onClick={() => {
            colorOne === "red" ? setColorOne("blue") : setColorOne("red");
            document.getElementById("taco").innerText = "Help";
            // document.getElementById("taco").style.color = colorOne;
            document.getElementById("taco").style.backgroundColor = colorOne;
          }}
          style={{ borderRadius: "20px", width: "50%" }}
        >
          {" "}
          Press Me!
        </button>
        <div style={{ display: "flex" }}>
          <img
            src={Dexter}
            style={{
              width: "300px",
              display: "block",
              margin: "1em auto",
              alignContent: "center",
            }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
