import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// below line returns a js obj
// react.createElement always returns an obj
const heading = React.createElement("h1",{},"react ke andar se");
root.render(heading)

// JSX
// () are used when multiple lines are there
const a = (<h1>heading exists here
  <p>paragraph exists here</p>
</h1>);

// functional component

const HTMLHeadingElement = () => {
  return (
    <h1>we are inside a funtional component</h1>    
  )
}

root.render(<HTMLHeadingElement/>)