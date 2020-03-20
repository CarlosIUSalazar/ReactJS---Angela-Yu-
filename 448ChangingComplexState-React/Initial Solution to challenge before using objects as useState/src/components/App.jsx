import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    // const firstName = event.target.value;
    setFName(event.target.value);
  }

  function updateLName(event) {
    //const lastName = event.target.value;
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={updateFName}
          value={fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={updateLName}
          value={lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
