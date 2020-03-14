import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img alt="fromLoremPicsum" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
