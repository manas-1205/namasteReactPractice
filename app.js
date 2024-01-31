import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// below line returns a js obj
// react.createElement always returns an obj
const heading = React.createElement("h1",{},"react ke andar se");
root.render(heading)

