// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import JioHome from "./JioHome/JioHome";
import True5G from "./True5G/True5G";
import Mobile from "./Mobile/Mobile";
import JioFiber from "./JioFiber/JioFiber";
import AirFiber from "./AirFiber/AirFiber";
import Business from "./Business/Business";

function App() {
  const customer_details = {
    //props for passing data from parent to child components

    name: "Prasad",
    email: "prasad@gmail.com",
    phone: "9876543210",
  };
  const { name, email, phone } = customer_details;
  
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<JioHome name={name} />} />
            <Route path="/True5G" element={<True5G email={email} />} />
            <Route path="/Mobile" element={<Mobile phone={phone} />} />
            <Route path="/JioFiber" element={<JioFiber phone={phone} />} />
            <Route path="/AirFiber" element={<AirFiber />} />
            <Route path="/Business" element={<Business />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
