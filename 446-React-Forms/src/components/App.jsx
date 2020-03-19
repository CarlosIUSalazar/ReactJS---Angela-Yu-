import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value); //can log too event.target.placeholder, event.target.type
    setName(event.target.value);
  }

  //   function handleClick(){   This is an example with a button, the example below is as a form.
  //     setHeading(name);
  //   }

  //   return (
  //     <div className="container">
  //       <h1>Hello {headingText}</h1>
  //       <input
  //         onChange = {handleChange}
  //         type="text"
  //         placeholder="What's your name?"
  //         value = {name} // keep this as {value} so it's a "single source of truth" This is a "controlled component"
  //       />
  //       <button onClick={handleClick}>Submit</button>
  //     </div>
  //   );
  // }

  function handleClick() {
    setHeading(name);

    event.preventDefault(); //prevents the next default behaviour which in case of forms is to reload the page
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} // keep this as {value} so it's a "single source of truth" This is a "controlled component"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
