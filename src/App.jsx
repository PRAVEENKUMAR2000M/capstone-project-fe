import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import React from 'react'
import Home from "../components/Home";
import Signin from '../components/Signin'
import Signup from '../components/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App