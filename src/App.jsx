// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Explore from './pages/Explore.jsx'

import './App.css'
import Navbar from './components/Navbar.jsx'

import {useState} from 'react';


function App() {
  const [savedLocations, setSavedLocations] = useState([]);

  const handleAddLocation = (shelter) => {
    console.log("Adding shelter:", shelter);
    if (!savedLocations.some((loc) => loc.name === shelter.name)) {
        setSavedLocations((prevLocations) => {
            const newLocations = [...prevLocations, shelter];
            console.log("Updated locations:", newLocations);
            return newLocations;
        });
    } else {
        console.log("Shelter already exists");
    }
};

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History savedLocations={savedLocations} />} />
          <Route path="/explore" element={<Explore handleAddLocation={handleAddLocation} />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
export default App