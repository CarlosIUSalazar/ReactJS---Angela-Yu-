import React from "react";
import ReactDOM from "react-dom";

const name = "Carlos";
const luckyNumber = 3;

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>
      You have {Math.floor(Math.random() * 10)} cats and your lucky number is{" "}
      {luckyNumber}.
    </p>
  </div>,
  rootElement
);
