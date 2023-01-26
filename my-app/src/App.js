import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Activities from "./Activities";

/* Tänne lisätään kaikki linkeissä esiintyvät sivut komponentteina Nyt on laitettu vasta draftit kolmesta sivusta, etusivusta ei tietoa*/
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
