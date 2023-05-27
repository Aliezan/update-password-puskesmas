import React from "react";
import { Routes, Route } from "react-router-dom";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpdatePassword />} />
    </Routes>

  );
}

export default App;
