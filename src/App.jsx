import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "./routes";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
