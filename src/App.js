import React from 'react';
import Filter from './Filter/Filter';
import { Routes, Route } from "react-router-dom";
import Login from "./Menu/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Filter />} />
        {/* <Route path='/Menu' element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;

