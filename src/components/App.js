import React from "react";
import "./../styles/App.css";
import useMousePosition from "./useMousePosition";

function App() {
  const { x, y } = useMousePosition();

  return (
    <div>
      The mouse position is: {x}, {y}
    </div>
  );
}

export default App;
