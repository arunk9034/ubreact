import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact";
import Help from "./components/Help";
import { useEffect, useState } from "react";


function App() {
  

    
  return (

    <div className="main">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
